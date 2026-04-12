'use client';

import { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Heart,
  Link2,
  MessageCircle,
  Phone,
  RefreshCw,
  Send,
  Shield,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import {
  conversationPrompts,
  diagnosisStageLabels,
  mockParentMatches,
  peerGroups,
  struggleLabels,
  type ConnectionPreference,
  type DiagnosisStage,
  type Struggle,
  type SupportStyle,
} from '@/lib/data';
import { cn } from '@/lib/utils';

type ConnectTab = 'intake' | 'matches' | 'groups' | 'messages';

const tabs: { key: ConnectTab; label: string; icon: typeof Link2 }[] = [
  { key: 'intake', label: 'Get Started', icon: Sparkles },
  { key: 'matches', label: 'Your Matches', icon: Heart },
  { key: 'groups', label: 'Small Groups', icon: Users },
  { key: 'messages', label: 'Messages', icon: MessageCircle },
];

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<ConnectTab>('intake');
  const [intakeComplete, setIntakeComplete] = useState(false);
  const [childAge, setChildAge] = useState('');
  const [diagnosisStage, setDiagnosisStage] = useState<DiagnosisStage | ''>('');
  const [struggles, setStruggles] = useState<Set<Struggle>>(new Set());
  const [connectionPref, setConnectionPref] = useState<Set<ConnectionPreference>>(new Set());
  const [supportStyle, setSupportStyle] = useState<SupportStyle | ''>('');
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<{ from: 'you' | 'them'; text: string }[]>([]);

  const toggleStruggle = (value: Struggle) => {
    setStruggles((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const toggleConnectionPref = (value: ConnectionPreference) => {
    setConnectionPref((prev) => {
      const next = new Set(prev);
      if (next.has(value)) next.delete(value);
      else next.add(value);
      return next;
    });
  };

  const handleSubmitIntake = () => {
    setIntakeComplete(true);
    setActiveTab('matches');
  };

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    setMessages((prev) => [...prev, { from: 'you', text: messageText }]);
    setMessageText('');
    setTimeout(() => {
      const replies = [
        'I hear you. We had a similar stretch last year.',
        'Thanks for sharing this. You are not doing this alone.',
        'That sounds so hard. Happy to talk through what helped us.',
      ];
      setMessages((prev) => [...prev, { from: 'them', text: replies[Math.floor(Math.random() * replies.length)] }]);
    }, 1200);
  };

  const isIntakeValid = childAge && diagnosisStage && struggles.size > 0 && connectionPref.size > 0 && supportStyle;

  return (
    <div className="page-shell">
      <header className="page-header">
        <h1 className="page-title">Connect</h1>
        <p className="page-description">Safe, moderated peer support with clear boundaries: parent-to-parent guidance, not clinical advice.</p>
      </header>

      <div className="rounded-2xl border border-surface-border bg-surface-muted p-4 text-sm text-brand-muted-600">
        <p className="flex items-start gap-2"><Shield className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          No identifying child details are required. Conversations are moderated and focused on lived parent support.
        </p>
      </div>

      <div className="flex gap-1 overflow-x-auto rounded-2xl bg-surface-subtle p-1">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              if (tab.key !== 'intake' && !intakeComplete) return;
              setActiveTab(tab.key);
            }}
            className={cn(
              'inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-medium transition-all',
              activeTab === tab.key ? 'bg-white text-primary shadow-soft' : tab.key !== 'intake' && !intakeComplete ? 'cursor-not-allowed text-brand-muted-300' : 'text-brand-muted-600',
            )}
          >
            <tab.icon className="h-4 w-4" /> {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'intake' && (
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="soft-panel">
            <h2 className="section-title">How matching works</h2>
            <ul className="mt-3 space-y-3 text-sm text-brand-muted-600">
              <li>• We match by child age range, diagnosis stage, and your support preferences.</li>
              <li>• You choose text, calls, or small groups. You can change this anytime.</li>
              <li>• This is peer support only. For therapy, use Support Services.</li>
            </ul>
          </aside>

          <section className="card p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-brand-muted-900">Tell us what support feels right</h3>
            <div className="mt-5 space-y-5">
              <div>
                <label className="label">Child age range</label>
                <div className="flex flex-wrap gap-2">{['0-2', '2-5', '6-12', '13-17'].map((age) => (
                  <button key={age} onClick={() => setChildAge(age)} className={cn('rounded-xl border px-3.5 py-2 text-sm', childAge === age ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-brand-muted-600')}>
                    {age} years
                  </button>
                ))}</div>
              </div>

              <div>
                <label className="label">Journey stage</label>
                <div className="flex flex-wrap gap-2">{(Object.entries(diagnosisStageLabels) as [DiagnosisStage, { label: string }][]).map(([key, val]) => (
                  <button key={key} onClick={() => setDiagnosisStage(key)} className={cn('rounded-xl border px-3.5 py-2 text-sm', diagnosisStage === key ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-brand-muted-600')}>
                    {val.label}
                  </button>
                ))}</div>
              </div>

              <div>
                <label className="label">What is hardest right now?</label>
                <div className="flex flex-wrap gap-2">{(Object.entries(struggleLabels) as [Struggle, string][]).map(([key, label]) => (
                  <button key={key} onClick={() => toggleStruggle(key)} className={cn('rounded-xl border px-3.5 py-2 text-sm', struggles.has(key) ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-brand-muted-600')}>
                    {label}
                  </button>
                ))}</div>
              </div>

              <div>
                <label className="label">Preferred connection format</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { key: 'text' as ConnectionPreference, label: 'Text', icon: MessageCircle },
                    { key: 'call' as ConnectionPreference, label: 'Call / video', icon: Phone },
                    { key: 'group' as ConnectionPreference, label: 'Small group', icon: Users },
                  ].map((option) => (
                    <button key={option.key} onClick={() => toggleConnectionPref(option.key)} className={cn('inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-2 text-sm', connectionPref.has(option.key) ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-brand-muted-600')}>
                      <option.icon className="h-4 w-4" /> {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="label">Support style</label>
                <div className="flex gap-2">
                  {['faith-based', 'general'].map((style) => (
                    <button key={style} onClick={() => setSupportStyle(style as SupportStyle)} className={cn('rounded-xl border px-3.5 py-2 text-sm capitalize', supportStyle === style ? 'border-primary bg-primary text-white' : 'border-surface-border bg-white text-brand-muted-600')}>
                      {style}
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleSubmitIntake} disabled={!isIntakeValid} className={cn('btn-primary', !isIntakeValid && 'cursor-not-allowed opacity-50')}>
                Find my matches <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </section>
        </div>
      )}

      {activeTab === 'matches' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-brand-muted-500">{mockParentMatches.length} parents matched to your preferences</p>
            <button className="inline-flex items-center gap-1 text-sm font-medium text-primary"><RefreshCw className="h-4 w-4" />Refresh</button>
          </div>
          {mockParentMatches.map((parent) => (
            <article key={parent.id} className="card p-5">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-brand-hearts text-sm font-semibold text-white">{parent.avatar}</div>
                  <span className="inline-flex items-center gap-1 rounded-lg border border-green-200 bg-green-50 px-2 py-1 text-xs font-semibold text-green-700"><Star className="h-3.5 w-3.5" fill="currentColor" />{parent.matchScore}% match</span>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-brand-muted-900">{parent.displayName}</h3>
                    <span className={`rounded-lg border px-2 py-0.5 text-xs font-semibold ${diagnosisStageLabels[parent.diagnosisStage].color}`}>{diagnosisStageLabels[parent.diagnosisStage].label}</span>
                  </div>
                  <p className="text-sm text-brand-muted-600">{parent.bio}</p>
                  <ul className="mt-3 space-y-1 text-xs text-brand-muted-500">
                    {parent.matchReasons.map((reason) => <li key={reason} className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-green-600" />{reason}</li>)}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button onClick={() => { setSelectedMatch(parent.id); setMessages([]); setActiveTab('messages'); }} className="btn-primary px-4 py-2 text-sm"><MessageCircle className="h-4 w-4" />Message</button>
                    {parent.connectionPreference.includes('call') && <button className="btn-secondary px-4 py-2 text-sm"><Phone className="h-4 w-4" />Schedule call</button>}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      {activeTab === 'groups' && (
        <section className="grid gap-4 sm:grid-cols-2">
          {peerGroups.map((group) => {
            const available = group.maxMembers - group.memberCount;
            return (
              <article key={group.id} className="card flex flex-col p-5">
                <h3 className="text-lg font-semibold text-brand-muted-900">{group.name}</h3>
                <p className="mt-2 flex-1 text-sm text-brand-muted-600">{group.description}</p>
                <div className="mt-4 space-y-1.5 text-sm text-brand-muted-500">
                  <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{group.meetingSchedule}</p>
                  <p className="flex items-center gap-1.5"><Users className="h-4 w-4" />{group.memberCount}/{group.maxMembers} members</p>
                </div>
                <button className={cn('mt-4 text-sm', available > 0 ? 'btn-primary' : 'btn-secondary opacity-60')} disabled={available <= 0}>
                  {available > 0 ? `Request to join (${available} spots)` : 'Join waitlist'} <ChevronRight className="h-4 w-4" />
                </button>
              </article>
            );
          })}
        </section>
      )}

      {activeTab === 'messages' && (
        <section className="space-y-4">
          {!selectedMatch ? (
            <div className="card py-12 text-center">
              <MessageCircle className="mx-auto h-10 w-10 text-brand-muted-300" />
              <p className="mt-3 text-sm text-brand-muted-500">Select a parent match to start a conversation.</p>
            </div>
          ) : (
            <>
              <div className="card flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-brand-hearts text-xs font-semibold text-white">
                  {mockParentMatches.find((m) => m.id === selectedMatch)?.avatar}
                </div>
                <p className="text-sm text-brand-muted-600">Peer conversation space (not clinical advice)</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {conversationPrompts.slice(0, 4).map((prompt) => (
                  <button key={prompt.id} onClick={() => setMessageText(prompt.text)} className="rounded-xl border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs text-primary">
                    {prompt.text}
                  </button>
                ))}
              </div>

              <div className="card flex min-h-[320px] flex-col p-4">
                <div className="flex-1 space-y-3">
                  {messages.length === 0 && <p className="py-10 text-center text-sm text-brand-muted-400">Start with a prompt or write your own message.</p>}
                  {messages.map((msg, i) => (
                    <div key={i} className={cn('max-w-[85%] rounded-2xl px-4 py-2.5 text-sm', msg.from === 'you' ? 'ml-auto bg-primary text-white' : 'bg-surface-muted text-brand-muted-700')}>
                      {msg.text}
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex gap-2 border-t border-surface-border pt-3">
                  <input value={messageText} onChange={(e) => setMessageText(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()} className="input-field" placeholder="Type your message" />
                  <button onClick={handleSendMessage} className={cn('rounded-2xl px-3', messageText.trim() ? 'bg-primary text-white' : 'bg-surface-subtle text-brand-muted-300')}>
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
      )}
    </div>
  );
}

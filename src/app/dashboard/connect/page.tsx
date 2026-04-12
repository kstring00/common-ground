'use client';

import { useState } from 'react';
import {
  Link2,
  Heart,
  Users,
  MessageCircle,
  Phone,
  ArrowRight,
  CheckCircle2,
  Circle,
  Shield,
  Sparkles,
  Calendar,
  ChevronRight,
  Star,
  RefreshCw,
  Send,
} from 'lucide-react';
import {
  mockParentMatches,
  peerGroups,
  conversationPrompts,
  diagnosisStageLabels,
  struggleLabels,
  type DiagnosisStage,
  type Struggle,
  type ConnectionPreference,
  type SupportStyle,
} from '@/lib/data';
import { cn } from '@/lib/utils';

type ConnectTab = 'intake' | 'matches' | 'groups' | 'messages';

const connectionLevelInfo = [
  {
    level: 'Light Touch',
    color: 'bg-green-50 border-green-200 text-green-700',
    dot: 'bg-green-500',
    description: 'Anonymous messaging with guided prompts. Great for hesitant parents.',
    icon: MessageCircle,
  },
  {
    level: 'Guided Pairing',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    dot: 'bg-amber-500',
    description: 'Scheduled 1-on-1 parent chats — phone or video, with optional prompts.',
    icon: Phone,
  },
  {
    level: 'Small Groups',
    color: 'bg-red-50 border-red-200 text-red-700',
    dot: 'bg-red-500',
    description: '5–8 parents meeting weekly. Moderated, not therapy. Real community.',
    icon: Users,
  },
];

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState<ConnectTab>('intake');
  const [intakeComplete, setIntakeComplete] = useState(false);

  // Intake form state
  const [childAge, setChildAge] = useState('');
  const [diagnosisStage, setDiagnosisStage] = useState<DiagnosisStage | ''>('');
  const [struggles, setStruggles] = useState<Set<Struggle>>(new Set());
  const [connectionPref, setConnectionPref] = useState<Set<ConnectionPreference>>(new Set());
  const [supportStyle, setSupportStyle] = useState<SupportStyle | ''>('');

  // Message demo state
  const [selectedMatch, setSelectedMatch] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState<{ from: 'you' | 'them'; text: string }[]>([]);

  function toggleStruggle(s: Struggle) {
    setStruggles((prev) => {
      const next = new Set(prev);
      if (next.has(s)) next.delete(s);
      else next.add(s);
      return next;
    });
  }

  function toggleConnectionPref(c: ConnectionPreference) {
    setConnectionPref((prev) => {
      const next = new Set(prev);
      if (next.has(c)) next.delete(c);
      else next.add(c);
      return next;
    });
  }

  function handleSubmitIntake() {
    setIntakeComplete(true);
    setActiveTab('matches');
  }

  function handleSendMessage() {
    if (!messageText.trim()) return;
    setMessages((prev) => [...prev, { from: 'you', text: messageText }]);
    setMessageText('');
    // Simulate a reply after a short delay
    setTimeout(() => {
      const replies = [
        'Thank you for sharing that. I totally understand how you feel.',
        'We went through something really similar. You\'re not alone in this.',
        'That resonates with me. The early days were the hardest part.',
        'I appreciate you reaching out. It means a lot to connect with someone who gets it.',
      ];
      setMessages((prev) => [
        ...prev,
        { from: 'them', text: replies[Math.floor(Math.random() * replies.length)] },
      ]);
    }, 1500);
  }

  const isIntakeValid =
    childAge && diagnosisStage && struggles.size > 0 && connectionPref.size > 0 && supportStyle;

  const tabs: { key: ConnectTab; label: string; icon: typeof Link2 }[] = [
    { key: 'intake', label: 'Get Started', icon: Sparkles },
    { key: 'matches', label: 'Your Matches', icon: Heart },
    { key: 'groups', label: 'Small Groups', icon: Users },
    { key: 'messages', label: 'Messages', icon: MessageCircle },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
          Connect
        </h1>
        <p className="text-gray-500">
          Find a parent who understands your journey. Smart matching, real connection, zero clinical advice.
        </p>
      </div>

      {/* Safety disclaimer */}
      <div className="flex items-start gap-3 px-4 py-3 rounded-2xl bg-surface-subtle border border-surface-border">
        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-semibold text-gray-700">Peer support only</p>
          <p className="text-xs text-gray-500 mt-0.5">
            This is not therapy or clinical advice. No identifying child data is shared. All connections are between parents, moderated for safety.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 rounded-2xl bg-surface-subtle overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              if (tab.key !== 'intake' && !intakeComplete) return;
              setActiveTab(tab.key);
            }}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap',
              activeTab === tab.key
                ? 'bg-white text-primary shadow-soft'
                : tab.key !== 'intake' && !intakeComplete
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-500 hover:text-gray-700',
            )}
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* ─── INTAKE TAB ─── */}
      {activeTab === 'intake' && (
        <div className="space-y-8">
          {intakeComplete ? (
            <div className="card text-center py-12">
              <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">You&apos;re all set!</h3>
              <p className="text-gray-500 mb-6">
                We&apos;ve matched you with parents who share your journey. Check out your matches.
              </p>
              <button
                onClick={() => setActiveTab('matches')}
                className="btn-primary"
              >
                View My Matches
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Connection levels overview */}
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4">How connection works</h3>
                <div className="space-y-3">
                  {connectionLevelInfo.map((level) => (
                    <div
                      key={level.level}
                      className={`flex items-start gap-3 p-3 rounded-xl border ${level.color}`}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${level.dot} mt-1.5 shrink-0`} />
                      <div>
                        <p className="text-sm font-semibold">{level.level}</p>
                        <p className="text-xs opacity-80 mt-0.5">{level.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intake form */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900">Tell us about your family</h3>

                {/* Child age range */}
                <div>
                  <label className="label">Child&apos;s age range</label>
                  <div className="flex flex-wrap gap-2">
                    {['0-2', '2-5', '6-12', '13-17'].map((age) => (
                      <button
                        key={age}
                        onClick={() => setChildAge(age)}
                        className={cn(
                          'px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                          childAge === age
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-500 border-surface-border hover:border-primary/30',
                        )}
                      >
                        {age} years
                      </button>
                    ))}
                  </div>
                </div>

                {/* Diagnosis stage */}
                <div>
                  <label className="label">Where are you in the journey?</label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(diagnosisStageLabels) as [DiagnosisStage, { label: string }][]).map(
                      ([key, val]) => (
                        <button
                          key={key}
                          onClick={() => setDiagnosisStage(key)}
                          className={cn(
                            'px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                            diagnosisStage === key
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-gray-500 border-surface-border hover:border-primary/30',
                          )}
                        >
                          {val.label}
                        </button>
                      ),
                    )}
                  </div>
                </div>

                {/* Struggles */}
                <div>
                  <label className="label">Biggest struggles right now (select all that apply)</label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.entries(struggleLabels) as [Struggle, string][]).map(([key, label]) => (
                      <button
                        key={key}
                        onClick={() => toggleStruggle(key)}
                        className={cn(
                          'px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                          struggles.has(key)
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-500 border-surface-border hover:border-primary/30',
                        )}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Connection preference */}
                <div>
                  <label className="label">How would you like to connect?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'text' as ConnectionPreference, label: 'Text / Messaging', icon: MessageCircle },
                      { key: 'call' as ConnectionPreference, label: 'Phone / Video Call', icon: Phone },
                      { key: 'group' as ConnectionPreference, label: 'Small Group', icon: Users },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => toggleConnectionPref(opt.key)}
                        className={cn(
                          'flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                          connectionPref.has(opt.key)
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-500 border-surface-border hover:border-primary/30',
                        )}
                      >
                        <opt.icon className="w-4 h-4" />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Support style */}
                <div>
                  <label className="label">Support style preference</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { key: 'faith-based' as SupportStyle, label: 'Faith-Based' },
                      { key: 'general' as SupportStyle, label: 'General' },
                    ].map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => setSupportStyle(opt.key)}
                        className={cn(
                          'px-4 py-2 rounded-xl text-sm font-medium transition-all border',
                          supportStyle === opt.key
                            ? 'bg-primary text-white border-primary'
                            : 'bg-white text-gray-500 border-surface-border hover:border-primary/30',
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmitIntake}
                  disabled={!isIntakeValid}
                  className={cn(
                    'btn-primary w-full sm:w-auto',
                    !isIntakeValid && 'opacity-50 cursor-not-allowed',
                  )}
                >
                  Find My Matches
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* ─── MATCHES TAB ─── */}
      {activeTab === 'matches' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              <span className="font-semibold text-gray-700">{mockParentMatches.length} parents</span> matched based on your profile
            </p>
            <button className="flex items-center gap-1.5 text-sm text-primary font-medium hover:underline">
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>

          {mockParentMatches.map((parent) => {
            const stageMeta = diagnosisStageLabels[parent.diagnosisStage];
            return (
              <div key={parent.id} className="card">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Avatar + score */}
                  <div className="flex sm:flex-col items-center gap-3 sm:gap-2">
                    <div className="w-14 h-14 rounded-2xl gradient-navy flex items-center justify-center text-white font-bold text-lg shrink-0">
                      {parent.avatar}
                    </div>
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-50 border border-green-200">
                      <Star className="w-3.5 h-3.5 text-green-600" fill="currentColor" />
                      <span className="text-xs font-bold text-green-700">{parent.matchScore}%</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 text-lg">{parent.displayName}</h3>
                      <span className={`inline-flex px-2.5 py-0.5 rounded-lg text-xs font-semibold border ${stageMeta.color}`}>
                        {stageMeta.label}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{parent.bio}</p>

                    {/* Match reasons */}
                    <div className="space-y-1 mb-4">
                      {parent.matchReasons.map((reason, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 shrink-0" />
                          {reason}
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <span className="px-2 py-0.5 rounded-md bg-surface-subtle text-xs text-gray-500">
                        Child: {parent.childAgeRange} yrs
                      </span>
                      {parent.struggles.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded-md bg-surface-subtle text-xs text-gray-500">
                          {struggleLabels[s]}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => {
                          setSelectedMatch(parent.id);
                          setMessages([]);
                          setActiveTab('messages');
                        }}
                        className="btn-primary text-sm px-4 py-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Send Message
                      </button>
                      {parent.connectionPreference.includes('call') && (
                        <button className="btn-secondary text-sm px-4 py-2">
                          <Phone className="w-4 h-4" />
                          Schedule Chat
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ─── GROUPS TAB ─── */}
      {activeTab === 'groups' && (
        <div className="space-y-6">
          <p className="text-sm text-gray-500">
            Small groups of 5–8 parents. Moderated, supportive, not therapy.
          </p>

          <div className="grid sm:grid-cols-2 gap-5">
            {peerGroups.map((group) => (
              <div key={group.id} className="card flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <span className={cn(
                    'text-xs font-semibold px-2.5 py-1 rounded-lg border',
                    group.memberCount >= group.maxMembers
                      ? 'bg-red-50 text-red-600 border-red-200'
                      : 'bg-green-50 text-green-600 border-green-200',
                  )}>
                    {group.memberCount >= group.maxMembers
                      ? 'Full'
                      : `${group.maxMembers - group.memberCount} spots left`}
                  </span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-1">{group.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                  {group.description}
                </p>

                <div className="flex flex-col gap-2 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    {group.meetingSchedule}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-gray-400" />
                    {group.memberCount}/{group.maxMembers} members
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-gray-400" />
                    Moderated by {group.moderator}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {group.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-md bg-surface-subtle text-xs text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className={cn(
                    'text-sm py-2.5 w-full',
                    group.memberCount >= group.maxMembers ? 'btn-secondary opacity-60 cursor-not-allowed' : 'btn-primary',
                  )}
                  disabled={group.memberCount >= group.maxMembers}
                >
                  {group.memberCount >= group.maxMembers ? 'Join Waitlist' : 'Request to Join'}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ─── MESSAGES TAB ─── */}
      {activeTab === 'messages' && (
        <div className="space-y-6">
          {!selectedMatch ? (
            <div className="card text-center py-12">
              <MessageCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-400 mb-2">No conversation selected</h3>
              <p className="text-gray-400 text-sm mb-4">
                Go to Your Matches and send a message to start a conversation.
              </p>
              <button onClick={() => setActiveTab('matches')} className="btn-secondary text-sm">
                View Matches
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              {/* Chat header */}
              {(() => {
                const match = mockParentMatches.find((p) => p.id === selectedMatch);
                if (!match) return null;
                return (
                  <div className="card flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl gradient-navy flex items-center justify-center text-white font-bold text-sm">
                      {match.avatar}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{match.displayName}</h3>
                      <p className="text-xs text-gray-400">Peer connection — not therapy</p>
                    </div>
                  </div>
                );
              })()}

              {/* Conversation prompts */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  Conversation starters
                </p>
                <div className="flex flex-wrap gap-2">
                  {conversationPrompts.slice(0, 4).map((prompt) => (
                    <button
                      key={prompt.id}
                      onClick={() => setMessageText(prompt.text)}
                      className="px-3 py-1.5 rounded-xl bg-primary/5 text-primary text-xs font-medium hover:bg-primary/10 transition-colors border border-primary/10"
                    >
                      &ldquo;{prompt.text}&rdquo;
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="card min-h-[300px] flex flex-col">
                <div className="flex-1 space-y-3 mb-4">
                  {messages.length === 0 && (
                    <p className="text-sm text-gray-400 text-center py-8">
                      Start the conversation. Use a prompt above or type your own message.
                    </p>
                  )}
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={cn(
                        'max-w-[80%] px-4 py-2.5 rounded-2xl text-sm',
                        msg.from === 'you'
                          ? 'ml-auto bg-primary text-white rounded-br-md'
                          : 'bg-surface-subtle text-gray-700 rounded-bl-md',
                      )}
                    >
                      {msg.text}
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="flex gap-2 pt-3 border-t border-surface-border">
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="input-field flex-1"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!messageText.trim()}
                    className={cn(
                      'p-3 rounded-2xl transition-all',
                      messageText.trim()
                        ? 'bg-primary text-white hover:bg-primary-dark'
                        : 'bg-surface-subtle text-gray-300 cursor-not-allowed',
                    )}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 text-xs text-gray-400">
                <Shield className="w-4 h-4 shrink-0 mt-0.5" />
                <p>
                  This is peer-to-peer support only. Please do not share clinical information, treatment recommendations, or identifying details about your child. If you need professional help, visit our{' '}
                  <button onClick={() => {}} className="text-primary font-medium hover:underline">
                    Support Services
                  </button>{' '}
                  page.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

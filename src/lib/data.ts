// ─── Types ──────────────────────────────────────────────────

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  ageRanges: string[];
  readTime: string;
  isFeatured: boolean;
  url?: string;
}

export type ResourceCategory =
  | 'understanding-autism'
  | 'therapy-options'
  | 'daily-life'
  | 'education-iep'
  | 'caregiver-wellness'
  | 'community';

export interface SupportProvider {
  id: string;
  name: string;
  type: 'therapist' | 'support-group' | 'hotline' | 'respite' | 'advocacy';
  specialty: string;
  description: string;
  location: string;
  phone?: string;
  website?: string;
  meetingSchedule?: string;
  acceptsInsurance: boolean;
  rating: number;
}

export interface GuidedStep {
  id: string;
  phase: string;
  title: string;
  description: string;
  checklist: string[];
  resources: string[]; // resource IDs
}

export interface CommunityGroup {
  id: string;
  name: string;
  type: 'local' | 'online' | 'event';
  description: string;
  memberCount: number;
  meetingSchedule: string;
  location: string;
}

// ─── Category metadata ──────────────────────────────────────

export const categoryMeta: Record<
  ResourceCategory,
  { label: string; emoji: string; color: string }
> = {
  'understanding-autism': {
    label: 'Understanding Autism',
    emoji: '🧩',
    color: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  'therapy-options': {
    label: 'Therapy Options',
    emoji: '🩺',
    color: 'bg-teal-50 text-teal-700 border-teal-200',
  },
  'daily-life': {
    label: 'Daily Life',
    emoji: '🏠',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  'education-iep': {
    label: 'Education & IEP',
    emoji: '📚',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  'caregiver-wellness': {
    label: 'Caregiver Wellness',
    emoji: '💚',
    color: 'bg-green-50 text-green-700 border-green-200',
  },
  community: {
    label: 'Community',
    emoji: '🤝',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
  },
};

// ─── Mock Resources ─────────────────────────────────────────

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'What Is ABA Therapy? A Parent\'s Complete Guide',
    description:
      'Learn what Applied Behavior Analysis therapy is, how it works, what to expect during sessions, and how to evaluate if it\'s right for your child.',
    category: 'therapy-options',
    tags: ['ABA', 'therapy', 'getting started'],
    ageRanges: ['0-2', '2-5', '6-12'],
    readTime: '8 min',
    isFeatured: true,
  },
  {
    id: 'r2',
    title: 'Understanding Your Child\'s Autism Diagnosis',
    description:
      'A compassionate walkthrough of what an autism spectrum diagnosis means, common emotions parents experience, and first steps forward.',
    category: 'understanding-autism',
    tags: ['diagnosis', 'newly diagnosed', 'emotions'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '6 min',
    isFeatured: true,
  },
  {
    id: 'r3',
    title: 'Building a Morning Routine That Works',
    description:
      'Practical strategies for creating structured, low-stress morning routines using visual schedules and positive reinforcement.',
    category: 'daily-life',
    tags: ['routines', 'visual schedules', 'practical tips'],
    ageRanges: ['2-5', '6-12'],
    readTime: '5 min',
    isFeatured: false,
  },
  {
    id: 'r4',
    title: 'Navigating Your First IEP Meeting',
    description:
      'Know your rights, prepare the right questions, and learn how to advocate effectively for your child\'s educational needs.',
    category: 'education-iep',
    tags: ['IEP', 'school', 'advocacy'],
    ageRanges: ['2-5', '6-12', '13-17'],
    readTime: '10 min',
    isFeatured: true,
  },
  {
    id: 'r5',
    title: 'Caregiver Burnout: Signs and Solutions',
    description:
      'Recognize the warning signs of burnout, understand why it happens, and discover evidence-based strategies to protect your own wellbeing.',
    category: 'caregiver-wellness',
    tags: ['burnout', 'self-care', 'mental health'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '7 min',
    isFeatured: true,
  },
  {
    id: 'r6',
    title: 'Sensory-Friendly Activities for the Whole Family',
    description:
      'Fun, accessible activity ideas that accommodate sensory sensitivities — from indoor play to community outings.',
    category: 'daily-life',
    tags: ['sensory', 'activities', 'family'],
    ageRanges: ['2-5', '6-12'],
    readTime: '4 min',
    isFeatured: false,
  },
  {
    id: 'r7',
    title: 'Speech Therapy vs. ABA: What\'s the Difference?',
    description:
      'Understand how speech-language therapy and ABA therapy differ, overlap, and how they can work together for your child.',
    category: 'therapy-options',
    tags: ['speech therapy', 'ABA', 'comparison'],
    ageRanges: ['0-2', '2-5', '6-12'],
    readTime: '6 min',
    isFeatured: false,
  },
  {
    id: 'r8',
    title: 'Finding Local Parent Support Groups in Texas',
    description:
      'A curated directory of active parent support groups across Houston, Austin, Dallas, and San Antonio — both in-person and virtual.',
    category: 'community',
    tags: ['support groups', 'Texas', 'local'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '3 min',
    isFeatured: false,
  },
  {
    id: 'r9',
    title: 'Preparing Your Child for a New Sibling',
    description:
      'Strategies for helping children on the spectrum adjust to family changes, with social stories and gradual exposure techniques.',
    category: 'daily-life',
    tags: ['siblings', 'social stories', 'transitions'],
    ageRanges: ['2-5', '6-12'],
    readTime: '5 min',
    isFeatured: false,
  },
  {
    id: 'r10',
    title: 'Insurance Coverage for Autism Services in Texas',
    description:
      'Understand what Texas law requires insurance companies to cover, how to file claims, and what to do if you\'re denied.',
    category: 'education-iep',
    tags: ['insurance', 'Texas', 'coverage', 'legal'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '8 min',
    isFeatured: false,
  },
];

// ─── Mock Support Providers ─────────────────────────────────

export const supportProviders: SupportProvider[] = [
  {
    id: 'sp1',
    name: 'Dr. Sarah Martinez, LPC',
    type: 'therapist',
    specialty: 'Caregiver Counseling & Family Therapy',
    description:
      'Specializes in supporting parents of children with autism. Offers individual and couples counseling focused on caregiver stress, grief processing, and family dynamics.',
    location: 'Sugar Land, TX',
    phone: '(832) 555-0142',
    website: 'https://example.com',
    acceptsInsurance: true,
    rating: 4.9,
  },
  {
    id: 'sp2',
    name: 'Houston Autism Parent Circle',
    type: 'support-group',
    specialty: 'Peer Support & Connection',
    description:
      'Weekly virtual meetups for parents and caregivers. Share experiences, swap resources, and build lasting friendships with families who get it.',
    location: 'Online (Houston-based)',
    meetingSchedule: 'Wednesdays 7:30 PM',
    acceptsInsurance: false,
    rating: 4.8,
  },
  {
    id: 'sp3',
    name: 'Autism Society of Texas Helpline',
    type: 'hotline',
    specialty: 'Information & Referral',
    description:
      'Trained specialists available to answer questions, provide referrals to local services, and help navigate the system.',
    location: 'Statewide',
    phone: '(800) 555-0198',
    acceptsInsurance: false,
    rating: 4.7,
  },
  {
    id: 'sp4',
    name: 'Peaceful Hands Respite Care',
    type: 'respite',
    specialty: 'In-Home & Center-Based Respite',
    description:
      'Trained respite caregivers who understand autism. Give yourself a break knowing your child is safe, engaged, and cared for.',
    location: 'Fort Bend County, TX',
    phone: '(281) 555-0267',
    acceptsInsurance: true,
    rating: 4.6,
  },
  {
    id: 'sp5',
    name: 'Texas Parent to Parent',
    type: 'advocacy',
    specialty: 'IEP Advocacy & Educational Rights',
    description:
      'Trained parent advocates who attend IEP meetings with you, help you understand your rights, and ensure your child gets appropriate services.',
    location: 'Statewide',
    phone: '(866) 555-0311',
    website: 'https://example.com',
    acceptsInsurance: false,
    rating: 4.9,
  },
];

// ─── Guided Next Steps ──────────────────────────────────────

export const guidedSteps: GuidedStep[] = [
  {
    id: 'gs1',
    phase: 'Just Diagnosed',
    title: 'Your child just received a diagnosis',
    description:
      'Take a breath. Here\'s what to focus on in the first 30 days — no overwhelm, just clear next steps.',
    checklist: [
      'Process your emotions — it\'s okay to grieve and feel relief at the same time',
      'Request a copy of the full evaluation report',
      'Research ABA therapy providers in your area',
      'Contact your insurance about autism coverage',
      'Connect with one other parent who\'s been through this',
    ],
    resources: ['r2', 'r1', 'r10'],
  },
  {
    id: 'gs2',
    phase: 'Starting Therapy',
    title: 'Beginning your therapy journey',
    description:
      'Your child is about to start ABA or other therapies. Here\'s how to prepare and set everyone up for success.',
    checklist: [
      'Tour the therapy center with your child before the first day',
      'Prepare a "getting to know my child" sheet for the BCBA',
      'Establish a consistent drop-off routine',
      'Set realistic expectations for the first month',
      'Schedule your own support — you need care too',
    ],
    resources: ['r1', 'r7', 'r3'],
  },
  {
    id: 'gs3',
    phase: 'School Transition',
    title: 'Navigating the school system',
    description:
      'Whether it\'s the first IEP or a school change, here\'s how to advocate effectively for your child\'s education.',
    checklist: [
      'Request an evaluation in writing to the school district',
      'Gather all therapy reports and evaluations',
      'Learn the difference between an IEP and a 504 plan',
      'Prepare your parent concerns letter',
      'Consider bringing an advocate to the IEP meeting',
    ],
    resources: ['r4', 'r10'],
  },
  {
    id: 'gs4',
    phase: 'Taking Care of You',
    title: 'You can\'t pour from an empty cup',
    description:
      'Caregiver burnout is real. Here\'s how to recognize the signs and build a sustainable support system.',
    checklist: [
      'Identify your top 3 burnout warning signs',
      'Schedule at least one hour of personal time this week',
      'Reach out to a caregiver support group',
      'Talk to your doctor if you\'re feeling persistently overwhelmed',
      'Build your "emergency contacts" list of people who can help',
    ],
    resources: ['r5', 'r8'],
  },
];

// ─── Community Groups ───────────────────────────────────────

export const communityGroups: CommunityGroup[] = [
  {
    id: 'cg1',
    name: 'Fort Bend Autism Families',
    type: 'local',
    description:
      'Monthly meetups for families in the Fort Bend County area. Playdates, parent nights out, and resource sharing.',
    memberCount: 127,
    meetingSchedule: '2nd Saturday of each month',
    location: 'Sugar Land, TX',
  },
  {
    id: 'cg2',
    name: 'Autism Dads Social Club',
    type: 'local',
    description:
      'A space specifically for dads and father figures. Casual meetups, real talk, and zero judgment.',
    memberCount: 43,
    meetingSchedule: '1st Thursday, 7 PM',
    location: 'Houston, TX',
  },
  {
    id: 'cg3',
    name: 'Texas ABA Parents Online',
    type: 'online',
    description:
      'Active online community for Texas families navigating ABA therapy. Ask questions, share wins, and find encouragement.',
    memberCount: 892,
    meetingSchedule: 'Always open',
    location: 'Online',
  },
  {
    id: 'cg4',
    name: 'Sensory-Friendly Family Fun Day',
    type: 'event',
    description:
      'Quarterly community event with sensory-friendly activities, resource booths, and a chance to connect with other families.',
    memberCount: 200,
    meetingSchedule: 'Next: June 14, 2026',
    location: 'Pearland, TX',
  },
];

// ─── Connect / Peer Matching ────────────────────────────────

export type DiagnosisStage = 'new' | 'ongoing' | 'advanced';
export type Struggle = 'behavior' | 'communication' | 'school' | 'burnout' | 'isolation' | 'insurance';
export type ConnectionPreference = 'text' | 'call' | 'group';
export type SupportStyle = 'faith-based' | 'general';

export interface ParentProfile {
  id: string;
  displayName: string;
  avatar: string; // initials
  childAgeRange: string;
  diagnosisStage: DiagnosisStage;
  struggles: Struggle[];
  connectionPreference: ConnectionPreference[];
  supportStyle: SupportStyle;
  bio: string;
  matchScore: number; // 0-100
  matchReasons: string[];
  joinedDate: string;
}

export interface PeerGroup {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  maxMembers: number;
  meetingSchedule: string;
  format: 'virtual' | 'in-person' | 'hybrid';
  moderator: string;
  tags: string[];
  level: 'light' | 'guided' | 'group';
}

export interface ConversationPrompt {
  id: string;
  text: string;
  category: 'icebreaker' | 'reflection' | 'encouragement';
}

export const diagnosisStageLabels: Record<DiagnosisStage, { label: string; color: string }> = {
  new: { label: 'Newly Diagnosed', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  ongoing: { label: 'Ongoing Journey', color: 'bg-amber-50 text-amber-700 border-amber-200' },
  advanced: { label: 'Experienced Parent', color: 'bg-green-50 text-green-700 border-green-200' },
};

export const struggleLabels: Record<Struggle, string> = {
  behavior: 'Behavior Challenges',
  communication: 'Communication',
  school: 'School / IEP',
  burnout: 'Caregiver Burnout',
  isolation: 'Feeling Isolated',
  insurance: 'Insurance / Access',
};

export const conversationPrompts: ConversationPrompt[] = [
  { id: 'cp1', text: 'What helped you most in the early days?', category: 'icebreaker' },
  { id: 'cp2', text: 'What do you wish someone had told you?', category: 'reflection' },
  { id: 'cp3', text: 'What\'s one win your family had this week?', category: 'encouragement' },
  { id: 'cp4', text: 'How do you handle hard days?', category: 'reflection' },
  { id: 'cp5', text: 'What\'s something that surprised you about this journey?', category: 'icebreaker' },
  { id: 'cp6', text: 'What gives you hope right now?', category: 'encouragement' },
];

export const mockParentMatches: ParentProfile[] = [
  {
    id: 'pm1',
    displayName: 'Maria T.',
    avatar: 'MT',
    childAgeRange: '2-5',
    diagnosisStage: 'ongoing',
    struggles: ['behavior', 'burnout'],
    connectionPreference: ['text', 'call'],
    supportStyle: 'faith-based',
    bio: 'Mom of a 4-year-old boy. 2 years into ABA therapy. Some days are hard, but we\'re learning together. I love connecting with other moms who get it.',
    matchScore: 94,
    matchReasons: ['Similar diagnosis stage', 'Shared faith-based approach', 'Both navigating behavior challenges'],
    joinedDate: '2026-01-15',
  },
  {
    id: 'pm2',
    displayName: 'James R.',
    avatar: 'JR',
    childAgeRange: '6-12',
    diagnosisStage: 'ongoing',
    struggles: ['school', 'isolation'],
    connectionPreference: ['call', 'group'],
    supportStyle: 'general',
    bio: 'Dad of twin boys, one on the spectrum. Navigating IEPs and school transitions. Looking for other dads who understand.',
    matchScore: 87,
    matchReasons: ['Both dads navigating the system', 'Shared school/IEP concerns', 'Open to group connection'],
    joinedDate: '2026-02-03',
  },
  {
    id: 'pm3',
    displayName: 'Aisha K.',
    avatar: 'AK',
    childAgeRange: '0-2',
    diagnosisStage: 'new',
    struggles: ['communication', 'isolation', 'insurance'],
    connectionPreference: ['text'],
    supportStyle: 'general',
    bio: 'Just got my daughter\'s diagnosis last month. Feeling overwhelmed but determined. Would love to talk to someone who\'s been through the early stage.',
    matchScore: 82,
    matchReasons: ['Looking for experienced guidance', 'Prefers text-based connection', 'Navigating insurance barriers'],
    joinedDate: '2026-03-20',
  },
  {
    id: 'pm4',
    displayName: 'Rachel S.',
    avatar: 'RS',
    childAgeRange: '6-12',
    diagnosisStage: 'advanced',
    struggles: ['burnout', 'school'],
    connectionPreference: ['group', 'call'],
    supportStyle: 'faith-based',
    bio: '8 years into this journey. My son is thriving now but it took time. I mentor new parents because I remember how alone I felt. Happy to listen.',
    matchScore: 91,
    matchReasons: ['Experienced mentor match', 'Shared faith values', 'Available for group and 1-on-1'],
    joinedDate: '2025-11-08',
  },
  {
    id: 'pm5',
    displayName: 'Carlos M.',
    avatar: 'CM',
    childAgeRange: '2-5',
    diagnosisStage: 'new',
    struggles: ['behavior', 'communication', 'burnout'],
    connectionPreference: ['text', 'group'],
    supportStyle: 'general',
    bio: 'Single dad, recently diagnosed 3-year-old. Trying to figure out ABA, insurance, and everything in between. Could use a friend in this.',
    matchScore: 79,
    matchReasons: ['New diagnosis — high need for support', 'Single parent perspective', 'Open to group connection'],
    joinedDate: '2026-03-01',
  },
];

export const peerGroups: PeerGroup[] = [
  {
    id: 'pg1',
    name: 'New Diagnosis Circle',
    description: 'A safe space for parents in the first year after diagnosis. Guided conversations, shared resources, and zero judgment.',
    memberCount: 6,
    maxMembers: 8,
    meetingSchedule: 'Tuesdays 7:00 PM',
    format: 'virtual',
    moderator: 'Rachel S.',
    tags: ['new diagnosis', 'early support', 'guided'],
    level: 'group',
  },
  {
    id: 'pg2',
    name: 'Working Moms Group',
    description: 'For moms balancing careers and caregiving. Vent, strategize, and celebrate the small wins together.',
    memberCount: 7,
    maxMembers: 8,
    meetingSchedule: 'Thursdays 8:00 PM',
    format: 'virtual',
    moderator: 'Maria T.',
    tags: ['working parents', 'moms', 'balance'],
    level: 'group',
  },
  {
    id: 'pg3',
    name: 'Dads Connect',
    description: 'Casual, no-pressure meetups for dads and father figures. Real talk about the stuff nobody prepares you for.',
    memberCount: 4,
    maxMembers: 6,
    meetingSchedule: 'Biweekly Saturdays 10:00 AM',
    format: 'hybrid',
    moderator: 'James R.',
    tags: ['dads', 'casual', 'peer support'],
    level: 'group',
  },
  {
    id: 'pg4',
    name: 'High Behavior Needs',
    description: 'For parents navigating significant behavioral challenges. Share strategies, support each other through hard seasons.',
    memberCount: 5,
    maxMembers: 8,
    meetingSchedule: 'Wednesdays 7:30 PM',
    format: 'virtual',
    moderator: 'Staff Facilitator',
    tags: ['behavior', 'strategies', 'support'],
    level: 'group',
  },
];

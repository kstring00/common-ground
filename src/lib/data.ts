export type JourneyStageId =
  | 'just-diagnosed'
  | 'starting-therapy'
  | 'school-transition'
  | 'family-sustainability';

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  tags: string[];
  ageRanges: string[];
  readTime: string;
  isFeatured: boolean;
  journeyStages: JourneyStageId[];
  whyNow: string;
  whoItsFor: string;
  question: string;
  action: string;
  reviewedBy: string;
  lastUpdated: string;
  isDemo: boolean;
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
  fit: string;
  payment: string;
  accessNotes: string;
  urgency: string;
  location: string;
  phone?: string;
  website?: string;
  meetingSchedule?: string;
  acceptsInsurance: boolean;
  rating: number;
  verification: string;
  lastReviewed: string;
  journeyStages: JourneyStageId[];
  isDemo: boolean;
}

export interface GuidedStep {
  id: JourneyStageId;
  phase: string;
  timeframe: string;
  milestone: string;
  focus: string;
  title: string;
  description: string;
  reassurance: string;
  whatMattersNow: string[];
  whatCanWait: string[];
  checklist: string[];
  supportEscalation: string[];
  supportAction: string;
  resources: string[];
  reviewedBy: string;
  lastUpdated: string;
}

export interface CommunityGroup {
  id: string;
  name: string;
  type: 'local' | 'online' | 'event';
  description: string;
  memberCount: number;
  meetingSchedule: string;
  location: string;
  audience: string;
  moderation: string;
  faithStyle: 'general' | 'faith-friendly' | 'faith-based';
  lastReviewed: string;
  isDemo: boolean;
}

export type DiagnosisStage = 'new' | 'ongoing' | 'advanced';
export type Struggle = 'behavior' | 'communication' | 'school' | 'burnout' | 'isolation' | 'insurance';
export type ConnectionPreference = 'text' | 'call' | 'group';
export type SupportStyle = 'faith-based' | 'general';

export interface ParentProfile {
  id: string;
  displayName: string;
  avatar: string;
  childAgeRange: string;
  diagnosisStage: DiagnosisStage;
  struggles: Struggle[];
  connectionPreference: ConnectionPreference[];
  supportStyle: SupportStyle;
  bio: string;
  matchScore: number;
  matchReasons: string[];
  joinedDate: string;
  sharedInfo: string;
  keptPrivate: string;
  nextStepAfterMatch: string;
  isDemo: boolean;
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
  audience: string;
  moderation: string;
  faithStyle: 'general' | 'faith-friendly' | 'faith-based';
  afterJoin: string;
  isDemo: boolean;
}

export interface ConversationPrompt {
  id: string;
  text: string;
  category: 'icebreaker' | 'reflection' | 'encouragement';
}

export const stageMeta: Record<JourneyStageId, { label: string; shortLabel: string }> = {
  'just-diagnosed': { label: 'Just Diagnosed', shortLabel: 'Diagnosis' },
  'starting-therapy': { label: 'Starting Therapy', shortLabel: 'Therapy' },
  'school-transition': { label: 'School Transition', shortLabel: 'School' },
  'family-sustainability': { label: 'Family Sustainability', shortLabel: 'Stability' },
};

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

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'After the Diagnosis: Your First 30 Days',
    description:
      'A calm walkthrough of what to expect after diagnosis, what to prioritize first, and how to reduce panic-driven decision making.',
    category: 'understanding-autism',
    tags: ['diagnosis', 'first month', 'what to do first'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '6 min',
    isFeatured: true,
    journeyStages: ['just-diagnosed'],
    whyNow: 'Parents often leave diagnosis with referrals but no clear order of operations.',
    whoItsFor: 'Parents in the first few days or weeks after receiving a diagnosis.',
    question: 'What do I actually need to do first?',
    action: 'Use it to build a realistic first-30-day plan.',
    reviewedBy: 'Clinically informed content review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
  {
    id: 'r2',
    title: 'What ABA Can and Cannot Solve in the First 90 Days',
    description:
      'A parent-first guide to what early ABA may help with, what takes longer, and how to set realistic expectations.',
    category: 'therapy-options',
    tags: ['ABA', 'therapy', 'expectations'],
    ageRanges: ['0-2', '2-5', '6-12'],
    readTime: '8 min',
    isFeatured: true,
    journeyStages: ['just-diagnosed', 'starting-therapy'],
    whyNow: 'Therapy decisions can feel urgent and overwhelming at the same time.',
    whoItsFor: 'Parents comparing provider options or preparing for a new therapy start.',
    question: 'What progress should I expect early on?',
    action: 'Use it to set goals and ask more grounded intake questions.',
    reviewedBy: 'Expert-informed therapy navigation review',
    lastUpdated: 'February 2026',
    isDemo: true,
  },
  {
    id: 'r3',
    title: 'Preparing for Your First Therapy Intake Call',
    description:
      'A simple prep guide for questions to ask, records to gather, and what to listen for when a provider explains their process.',
    category: 'therapy-options',
    tags: ['intake', 'provider search', 'questions to ask'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '5 min',
    isFeatured: false,
    journeyStages: ['just-diagnosed', 'starting-therapy'],
    whyNow: 'The first call with a provider often shapes confidence and next steps.',
    whoItsFor: 'Parents contacting therapy providers for the first time.',
    question: 'How do I know what to ask a provider?',
    action: 'Use it as a call script before intake conversations.',
    reviewedBy: 'Parent navigation team',
    lastUpdated: 'January 2026',
    isDemo: true,
  },
  {
    id: 'r4',
    title: 'Building a Home Routine That Supports Therapy',
    description:
      'Practical strategies for building routines at home so therapy goals fit real life instead of becoming another source of stress.',
    category: 'daily-life',
    tags: ['routine', 'home support', 'follow-through'],
    ageRanges: ['2-5', '6-12'],
    readTime: '5 min',
    isFeatured: false,
    journeyStages: ['starting-therapy'],
    whyNow: 'Home routines often decide whether early therapy feels sustainable or chaotic.',
    whoItsFor: 'Parents in the first 90 days of therapy startup.',
    question: 'How do we support progress at home without burning out?',
    action: 'Use it to choose one routine to stabilize this week.',
    reviewedBy: 'Parent operations review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
  {
    id: 'r5',
    title: 'Speech Therapy vs. ABA: How to Sequence Support Around Your Goals',
    description:
      'A grounded comparison of where speech-language therapy and ABA differ, overlap, and how families often sequence them around immediate needs.',
    category: 'therapy-options',
    tags: ['speech therapy', 'ABA', 'comparison'],
    ageRanges: ['0-2', '2-5', '6-12'],
    readTime: '6 min',
    isFeatured: false,
    journeyStages: ['starting-therapy'],
    whyNow: 'Parents often feel pressure to decide between supports before they understand the tradeoffs.',
    whoItsFor: 'Parents comparing therapy types around communication or behavior goals.',
    question: 'Which support addresses the goal in front of us?',
    action: 'Use it to prioritize one or two supports instead of everything at once.',
    reviewedBy: 'Clinically informed content review',
    lastUpdated: 'February 2026',
    isDemo: true,
  },
  {
    id: 'r6',
    title: 'Navigating Your First IEP Meeting Without Losing the Thread',
    description:
      'Know your rights, prepare the right questions, and turn school planning into a goal-based conversation with clear next steps.',
    category: 'education-iep',
    tags: ['IEP', 'school', 'advocacy'],
    ageRanges: ['2-5', '6-12', '13-17'],
    readTime: '10 min',
    isFeatured: true,
    journeyStages: ['school-transition'],
    whyNow: 'School meetings can feel overwhelming when there is no shared plan or clear language.',
    whoItsFor: 'Parents preparing for an evaluation, first IEP, or school change.',
    question: 'How do I keep the meeting focused on what my child needs?',
    action: 'Use it to prepare concerns, goals, and follow-up questions.',
    reviewedBy: 'Educational advocacy review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
  {
    id: 'r7',
    title: 'Parent Concerns Letter Template',
    description:
      'A simple framework for turning your observations into a clear parent concerns statement before an evaluation or IEP meeting.',
    category: 'education-iep',
    tags: ['parent concerns', 'template', 'school'],
    ageRanges: ['2-5', '6-12', '13-17'],
    readTime: '4 min',
    isFeatured: false,
    journeyStages: ['school-transition'],
    whyNow: 'A written concerns letter can anchor the meeting around specific needs instead of vague discussion.',
    whoItsFor: 'Parents who want to advocate clearly without overexplaining.',
    question: 'How do I put my concerns into the right format?',
    action: 'Use it to draft a short, goal-based letter before school meetings.',
    reviewedBy: 'Educational advocacy review',
    lastUpdated: 'January 2026',
    isDemo: true,
  },
  {
    id: 'r8',
    title: 'Insurance Coverage for Autism Services in Texas',
    description:
      'Understand what Texas law requires insurers to cover, how to document calls, and what to do if access stalls or coverage is denied.',
    category: 'education-iep',
    tags: ['insurance', 'Texas', 'coverage', 'denials'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '8 min',
    isFeatured: false,
    journeyStages: ['just-diagnosed', 'starting-therapy', 'school-transition'],
    whyNow: 'Insurance friction can stall care and add stress unless families know what to document early.',
    whoItsFor: 'Parents navigating benefits, denials, waitlists, or service approvals.',
    question: 'What do I do when coverage becomes a barrier?',
    action: 'Use it to track calls, prepare questions, and escalate more clearly.',
    reviewedBy: 'Care access review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
  {
    id: 'r9',
    title: 'What to Do When You Are at Your Breaking Point',
    description:
      'Recognize burnout early, decide what can wait, and use a practical stabilization plan for the days when everything feels too heavy.',
    category: 'caregiver-wellness',
    tags: ['burnout', 'breaking point', 'stabilization'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '7 min',
    isFeatured: true,
    journeyStages: ['family-sustainability'],
    whyNow: 'Parents often need a stabilizing action plan before they can re-engage with the larger system.',
    whoItsFor: 'Parents near overload, burnout, shutdown, or emotional exhaustion.',
    question: 'What do I do first when I feel like I cannot keep up?',
    action: 'Use it to identify one stabilizing action and one support handoff today.',
    reviewedBy: 'Caregiver support review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
  {
    id: 'r10',
    title: 'Finding Parent Support Before You Burn Out',
    description:
      'A guided overview of parent support options, plus how to choose support that feels useful instead of overwhelming.',
    category: 'community',
    tags: ['support groups', 'peer support', 'caregiver wellbeing'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '3 min',
    isFeatured: false,
    journeyStages: ['family-sustainability', 'just-diagnosed'],
    whyNow: 'The best time to build support is before a hard week becomes a crisis week.',
    whoItsFor: 'Parents feeling alone, depleted, or unsure where to ask for help.',
    question: 'What kind of support would actually help me right now?',
    action: 'Use it to choose one support channel: peer, respite, counseling, or advocacy.',
    reviewedBy: 'Parent support operations review',
    lastUpdated: 'February 2026',
    isDemo: true,
  },
  {
    id: 'r11',
    title: 'Caregiver Burnout Warning Signs Checklist',
    description:
      'A practical checklist for spotting the early signals of overload before frustration turns into shutdown or conflict.',
    category: 'caregiver-wellness',
    tags: ['burnout signs', 'overload', 'self-monitoring'],
    ageRanges: ['0-2', '2-5', '6-12', '13-17'],
    readTime: '4 min',
    isFeatured: false,
    journeyStages: ['family-sustainability'],
    whyNow: 'Parents often normalize strain until the family system is already stretched too far.',
    whoItsFor: 'Parents who need language for what overload looks like in their own life.',
    question: 'How do I know if I am nearing burnout?',
    action: 'Use it to identify your top warning signs and one early support action.',
    reviewedBy: 'Caregiver support review',
    lastUpdated: 'January 2026',
    isDemo: true,
  },
  {
    id: 'r12',
    title: 'Sensory-Friendly Activities for the Whole Family',
    description:
      'Accessible activity ideas that support regulation, shared routines, and lower-stress family time.',
    category: 'daily-life',
    tags: ['sensory', 'family routines', 'connection'],
    ageRanges: ['2-5', '6-12'],
    readTime: '4 min',
    isFeatured: false,
    journeyStages: ['starting-therapy', 'family-sustainability'],
    whyNow: 'Families need moments of success and calm, not just appointments and tasks.',
    whoItsFor: 'Parents looking for lower-pressure ways to support connection at home.',
    question: 'What can we do together when everyone is already stretched?',
    action: 'Use it to choose one predictable family activity this week.',
    reviewedBy: 'Parent operations review',
    lastUpdated: 'March 2026',
    isDemo: true,
  },
];

export const supportProviders: SupportProvider[] = [
  {
    id: 'sp1',
    name: 'Dr. Sarah Martinez, LPC',
    type: 'therapist',
    specialty: 'Caregiver Counseling & Family Therapy',
    description:
      'Supports parents navigating grief, chronic stress, relationship strain, and the emotional load of coordinating care.',
    fit: 'Best when the parent or couple needs steady therapeutic support, not just a one-time consult.',
    payment: 'Accepts major insurance plans and private pay.',
    accessNotes: 'Evening telehealth openings typically available within 2 weeks.',
    urgency: 'Use when stress is ongoing, conflict is rising, or the family needs more than peer support.',
    location: 'Sugar Land, TX',
    phone: '(832) 555-0142',
    website: 'https://example.com',
    acceptsInsurance: true,
    rating: 4.9,
    verification: 'Demo listing styled as a clinically reviewed referral example',
    lastReviewed: 'March 2026',
    journeyStages: ['family-sustainability', 'just-diagnosed'],
    isDemo: true,
  },
  {
    id: 'sp2',
    name: 'Houston Autism Parent Circle',
    type: 'support-group',
    specialty: 'Peer Support & Connection',
    description:
      'Weekly virtual meetups where parents share what is working, what is hard, and what support feels realistic right now.',
    fit: 'Best for parents who need to feel less alone and hear from others living a similar stage.',
    payment: 'No-cost community support.',
    accessNotes: 'Rolling entry with a short orientation before the first session.',
    urgency: 'Use early if isolation is rising or the parent has no support network yet.',
    location: 'Online (Houston-based)',
    meetingSchedule: 'Wednesdays 7:30 PM',
    acceptsInsurance: false,
    rating: 4.8,
    verification: 'Demo listing styled as a moderated support referral example',
    lastReviewed: 'February 2026',
    journeyStages: ['just-diagnosed', 'family-sustainability'],
    isDemo: true,
  },
  {
    id: 'sp3',
    name: 'Autism Society of Texas Helpline',
    type: 'hotline',
    specialty: 'Information & Referral',
    description:
      'A first-stop helpline for families who need a human being to help sort the next step, not just another website.',
    fit: 'Best when the family is confused about where to start or which support route fits the current problem.',
    payment: 'No-cost helpline.',
    accessNotes: 'Call volume varies; best for referral help rather than crisis response.',
    urgency: 'Use when you need triage, referrals, or decision support quickly.',
    location: 'Statewide',
    phone: '(800) 555-0198',
    acceptsInsurance: false,
    rating: 4.7,
    verification: 'Demo listing styled as a verified referral example',
    lastReviewed: 'March 2026',
    journeyStages: ['just-diagnosed', 'starting-therapy', 'school-transition', 'family-sustainability'],
    isDemo: true,
  },
  {
    id: 'sp4',
    name: 'Peaceful Hands Respite Care',
    type: 'respite',
    specialty: 'In-Home & Center-Based Respite',
    description:
      'Short-term respite support designed to help families rest, reset, and keep the household more stable during high-stress periods.',
    fit: 'Best when a caregiver has no downtime and the family needs breathing room quickly.',
    payment: 'Private pay with some waiver and grant support options.',
    accessNotes: 'Intake required before scheduling recurring care.',
    urgency: 'Use when caregiver exhaustion is affecting safety, patience, or basic functioning.',
    location: 'Fort Bend County, TX',
    phone: '(281) 555-0267',
    acceptsInsurance: true,
    rating: 4.6,
    verification: 'Demo listing styled as a trusted respite example',
    lastReviewed: 'January 2026',
    journeyStages: ['family-sustainability'],
    isDemo: true,
  },
  {
    id: 'sp5',
    name: 'Texas Parent to Parent',
    type: 'advocacy',
    specialty: 'IEP Advocacy & Educational Rights',
    description:
      'Parent advocates who help families prepare for school meetings, understand rights, and keep next steps documented.',
    fit: 'Best when school planning feels confusing, delayed, or difficult to move forward.',
    payment: 'Community and grant-supported; some services no-cost.',
    accessNotes: 'Most families start with a prep call before meeting support.',
    urgency: 'Use when the school process feels stuck or a parent needs backup for a meeting.',
    location: 'Statewide',
    phone: '(866) 555-0311',
    website: 'https://example.com',
    acceptsInsurance: false,
    rating: 4.9,
    verification: 'Demo listing styled as an advocacy referral example',
    lastReviewed: 'March 2026',
    journeyStages: ['school-transition'],
    isDemo: true,
  },
];

export const guidedSteps: GuidedStep[] = [
  {
    id: 'just-diagnosed',
    phase: 'Just Diagnosed',
    timeframe: 'First 30 days',
    milestone: 'Leave diagnosis with a plan, not just paperwork',
    focus: 'Stabilize, understand the report, and choose the next 2-3 moves that matter most.',
    title: 'Your child just received a diagnosis',
    description:
      'The goal is not to solve everything this month. The goal is to get oriented, protect your bandwidth, and leave the early stage with a realistic plan.',
    reassurance:
      'You do not need to become an expert overnight. It is enough to understand what matters now and let the rest wait.',
    whatMattersNow: [
      'Understanding the evaluation and writing down the questions you still have',
      'Choosing one provider search path and one support path for yourself',
      'Documenting insurance, referrals, and next calls before the details blur together',
    ],
    whatCanWait: [
      'Reading every article or joining every group immediately',
      'Making long-range schooling decisions this week',
      'Trying to solve every future therapy choice before the first intake',
    ],
    checklist: [
      'Process your emotions. Relief, grief, confusion, and urgency can all be true at once.',
      'Request and organize the full evaluation report and referrals.',
      'Write down the top 3 questions you need answered this week.',
      'Call insurance and document coverage, referrals, and requirements.',
      'Identify one provider option and one parent support option.',
      'Choose a single place to track appointments, names, and next steps.',
    ],
    supportEscalation: [
      'If you cannot tell what is urgent, use the helpline or a provider intake coordinator for triage.',
      'If the diagnosis has triggered panic, shutdown, or significant conflict at home, move support for the parent up the list.',
      'If you feel completely flooded, pause new research and return to one concrete action only.',
    ],
    supportAction: 'Book one intake call and reach out to one support option before the week ends.',
    resources: ['r1', 'r2', 'r3', 'r8'],
    reviewedBy: 'Clinically informed navigation review',
    lastUpdated: 'March 2026',
  },
  {
    id: 'starting-therapy',
    phase: 'Starting Therapy',
    timeframe: 'Days 30-90',
    milestone: 'Set expectations, routines, and measurable goals',
    focus: 'Build a stable start instead of chasing perfect outcomes too early.',
    title: 'Beginning your therapy journey',
    description:
      'Therapy startup is a transition for the whole family. Use this phase to align goals, establish routines, and make sure the plan works in real life.',
    reassurance:
      'A strong start is not about doing everything. It is about choosing a plan your family can actually sustain.',
    whatMattersNow: [
      'Clarifying the top 2-3 goals that matter most for home and daily life',
      'Understanding how progress will be tracked and when to reassess',
      'Creating routines that reduce friction around appointments and transitions',
    ],
    whatCanWait: [
      'Trying to solve every skill area in the first month',
      'Comparing your child to another family’s timeline',
      'Adding extra supports before you understand what this first plan can do',
    ],
    checklist: [
      'Tour the therapy setting and help your child know what to expect.',
      'Prepare a short “getting to know my child” summary for the care team.',
      'Agree on 2-3 functional goals and how they will be measured.',
      'Set a consistent drop-off, pickup, or in-home routine.',
      'Document questions or concerns as they come up instead of holding them until crisis level.',
      'Choose one home routine that supports therapy without overloading the family.',
      'Schedule one support touchpoint for the parent so the plan stays sustainable.',
    ],
    supportEscalation: [
      'If therapy language feels confusing, ask for the goals and measures to be restated in plain language.',
      'If the schedule is destabilizing the household, simplify before adding more.',
      'If your child’s distress or your own stress is rising sharply, bring it up early rather than waiting for the next review.',
    ],
    supportAction: 'Ask the care team to confirm the top 3 goals and what progress should look like in 30 days.',
    resources: ['r2', 'r3', 'r4', 'r5'],
    reviewedBy: 'Expert-informed therapy navigation review',
    lastUpdated: 'March 2026',
  },
  {
    id: 'school-transition',
    phase: 'School Transition',
    timeframe: 'Quarter planning',
    milestone: 'Turn school meetings into clear milestones and owners',
    focus: 'Translate evaluations and therapy insight into goals the school team can act on.',
    title: 'Navigating the school system',
    description:
      'Whether this is your first evaluation, a new IEP, or a school change, the objective is clarity: what support is needed, who owns it, and when you will review progress.',
    reassurance:
      'You do not need to know every rule before showing up. You do need a clear picture of your child’s needs and the outcomes you want discussed.',
    whatMattersNow: [
      'Bringing evaluations, concerns, and examples into one organized place',
      'Knowing what support you are asking for and why it matters in daily school life',
      'Leaving each meeting with owners, timelines, and follow-up dates',
    ],
    whatCanWait: [
      'Trying to master every policy before the first meeting',
      'Arguing every point in one sitting instead of documenting next steps',
      'Assuming the team heard you if nothing was written down',
    ],
    checklist: [
      'Request an evaluation or meeting in writing and save the message.',
      'Gather reports, recommendations, and your own examples of what is hard right now.',
      'Draft a parent concerns letter with 2-3 concrete goals.',
      'Clarify the difference between an IEP, 504 plan, and service recommendation.',
      'List the accommodations, supports, or communication routines you want discussed.',
      'Ask how progress will be reviewed and when the next checkpoint happens.',
      'Consider bringing an advocate if the process feels stalled, adversarial, or unclear.',
    ],
    supportEscalation: [
      'If the school process feels confusing, ask for decisions and timelines in writing.',
      'If the meeting leaves you uncertain about what was agreed, follow up the same day with a written summary.',
      'If you feel dismissed or stuck, move advocacy support up sooner rather than later.',
    ],
    supportAction: 'Prepare your parent concerns letter before the next school conversation.',
    resources: ['r6', 'r7', 'r8'],
    reviewedBy: 'Educational advocacy review',
    lastUpdated: 'March 2026',
  },
  {
    id: 'family-sustainability',
    phase: 'Family Sustainability',
    timeframe: 'Any time you are overloaded',
    milestone: 'Reduce burnout before it becomes disengagement',
    focus: 'Use support early so frustration does not turn into shutdown, conflict, or dropout from care.',
    title: 'What to do when you are frustrated or at your breaking point',
    description:
      'You do not need to wait until a crisis to ask for help. This phase is about stabilizing the family system so you can keep moving toward long-term goals.',
    reassurance:
      'Feeling stretched does not mean you are failing. It means your family needs a steadier support plan right now.',
    whatMattersNow: [
      'Reducing the pressure load enough to think clearly again',
      'Identifying which part of the plan is creating the most strain',
      'Getting one real layer of support involved before the next hard week hits',
    ],
    whatCanWait: [
      'Perfecting the long-term plan while you are already overloaded',
      'Trying to carry every appointment, school task, and home routine alone',
      'Assuming support should wait until things are worse',
    ],
    checklist: [
      'Name the top 3 warning signs that you are nearing burnout.',
      'Make a “what can wait” list and remove one nonessential demand this week.',
      'Choose one person or service to contact before the day ends.',
      'Create a short backup list for meals, transportation, or child care support.',
      'Tell one trusted person exactly what kind of help would lighten the load.',
      'Use one stabilizing family routine instead of trying to fix everything at once.',
      'Revisit the bigger plan once you are regulated and able to prioritize again.',
    ],
    supportEscalation: [
      'If you feel numb, panicked, highly reactive, or unable to follow through, move parent support to the top of the list.',
      'If the household feels unsafe, unstable, or one step from breaking down, use the fastest support path available.',
      'If peer support is not enough, step up to counseling, respite, or a higher-touch support option.',
    ],
    supportAction: 'Choose one stabilizing action and one support handoff today.',
    resources: ['r9', 'r10', 'r11', 'r12'],
    reviewedBy: 'Caregiver support review',
    lastUpdated: 'March 2026',
  },
];

export const communityGroups: CommunityGroup[] = [
  {
    id: 'cg1',
    name: 'Fort Bend Parent Navigation Circle',
    type: 'local',
    description:
      'A local meetup for families who want practical support, calmer conversations, and a place to swap what is actually helping.',
    memberCount: 127,
    meetingSchedule: '2nd Saturday of each month',
    location: 'Sugar Land, TX',
    audience: 'Parents and caregivers across diagnosis, therapy, and school stages',
    moderation: 'Moderated by a community facilitator with parent-ground-rule reminders',
    faithStyle: 'general',
    lastReviewed: 'March 2026',
    isDemo: true,
  },
  {
    id: 'cg2',
    name: 'Autism Dads Social Club',
    type: 'local',
    description:
      'A space specifically for dads and father figures. Low-pressure meetups, honest conversation, and practical support.',
    memberCount: 43,
    meetingSchedule: '1st Thursday, 7 PM',
    location: 'Houston, TX',
    audience: 'Dads and father figures looking for peer support',
    moderation: 'Facilitated by a volunteer host with community guidelines',
    faithStyle: 'general',
    lastReviewed: 'February 2026',
    isDemo: true,
  },
  {
    id: 'cg3',
    name: 'Texas Parent Support Online',
    type: 'online',
    description:
      'An online parent space for service questions, school stress, and the everyday realities of supporting a child on the spectrum.',
    memberCount: 892,
    meetingSchedule: 'Always open with weekly discussion prompts',
    location: 'Online',
    audience: 'Parents across Texas who need flexible support',
    moderation: 'Moderated discussion threads with clear posting boundaries and escalation guidance',
    faithStyle: 'faith-friendly',
    lastReviewed: 'March 2026',
    isDemo: true,
  },
  {
    id: 'cg4',
    name: 'Sensory-Friendly Family Fun Day',
    type: 'event',
    description:
      'A quarterly event with sensory-aware activities, low-pressure family connection, and practical local resources.',
    memberCount: 200,
    meetingSchedule: 'Next: June 14, 2026',
    location: 'Pearland, TX',
    audience: 'Families who want community without a high-stimulation event format',
    moderation: 'Hosted by trained volunteers and community partners',
    faithStyle: 'general',
    lastReviewed: 'January 2026',
    isDemo: true,
  },
];

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
  { id: 'cp3', text: 'What is one win your family had this week?', category: 'encouragement' },
  { id: 'cp4', text: 'How do you handle hard days without shutting down?', category: 'reflection' },
  { id: 'cp5', text: 'What surprised you most about this stage?', category: 'icebreaker' },
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
    bio: 'Mom of a 4-year-old boy, two years into therapy. I like practical check-ins, not pressure.',
    matchScore: 94,
    matchReasons: ['Similar diagnosis stage', 'Shared faith-based preference', 'Both navigating burnout and behavior stress'],
    joinedDate: '2026-01-15',
    sharedInfo: 'First name initial, child age range, journey stage, and support preferences.',
    keptPrivate: 'Last name, exact child diagnosis details, address, and documents.',
    nextStepAfterMatch: 'Common Ground prompts a low-pressure first message and optional moderator check-in.',
    isDemo: true,
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
    bio: 'Dad of twin boys, one on the spectrum. School meetings are my main stress point right now.',
    matchScore: 87,
    matchReasons: ['Shared school-transition concerns', 'Open to calls and groups', 'Parent perspective matches your current stage'],
    joinedDate: '2026-02-03',
    sharedInfo: 'First name initial, broad stage, struggle themes, and connection preferences.',
    keptPrivate: 'Child records, exact school, and personal contact details until the parent opts in.',
    nextStepAfterMatch: 'Parents can message first, schedule a call later, or ask to move to a guided small group.',
    isDemo: true,
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
    bio: 'Recently diagnosed and looking for someone calm who can help me sort what matters first.',
    matchScore: 82,
    matchReasons: ['Prefers text-based connection', 'Looking for early-stage guidance', 'Insurance questions are a shared concern'],
    joinedDate: '2026-03-20',
    sharedInfo: 'Support needs, broad age range, and whether the parent wants text, calls, or group support.',
    keptPrivate: 'Child identifying details, home address, and insurance account information.',
    nextStepAfterMatch: 'A guided message prompt appears first so nobody has to start from a blank screen.',
    isDemo: true,
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
    bio: 'Several years into this journey and happy to listen without trying to fix everything at once.',
    matchScore: 91,
    matchReasons: ['Experienced mentor fit', 'Faith-based preference match', 'Open to 1:1 or guided small-group support'],
    joinedDate: '2025-11-08',
    sharedInfo: 'Journey stage, support style, and what the parent feels able to offer.',
    keptPrivate: 'Exact family details and child information unless voluntarily shared later.',
    nextStepAfterMatch: 'Parents can request a moderator-supported introduction before a direct call.',
    isDemo: true,
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
    bio: 'Single dad trying to make early therapy and everyday life fit in the same week.',
    matchScore: 79,
    matchReasons: ['New diagnosis stress is a shared theme', 'Open to low-pressure group support', 'Behavior and communication both show up in your intake'],
    joinedDate: '2026-03-01',
    sharedInfo: 'Broad stage, struggle themes, and support preferences.',
    keptPrivate: 'Family documents, address, and exact provider history.',
    nextStepAfterMatch: 'Common Ground recommends either a text introduction or a small-group route based on preferences.',
    isDemo: true,
  },
];

export const peerGroups: PeerGroup[] = [
  {
    id: 'pg1',
    name: 'New Diagnosis Circle',
    description: 'A guided small group for parents in the first year after diagnosis.',
    memberCount: 6,
    maxMembers: 8,
    meetingSchedule: 'Tuesdays 7:00 PM',
    format: 'virtual',
    moderator: 'Rachel S.',
    tags: ['new diagnosis', 'guided', 'low-pressure'],
    level: 'group',
    audience: 'Parents who need realistic expectations and a softer place to start.',
    moderation: 'Moderated opening, community agreements, and escalation guidance if peer support is not enough.',
    faithStyle: 'general',
    afterJoin: 'New members receive a short orientation and one suggested first conversation prompt.',
    isDemo: true,
  },
  {
    id: 'pg2',
    name: 'Working Moms Group',
    description: 'A weekly space for mothers balancing caregiving, work, and decision fatigue.',
    memberCount: 7,
    maxMembers: 8,
    meetingSchedule: 'Thursdays 8:00 PM',
    format: 'virtual',
    moderator: 'Maria T.',
    tags: ['working parents', 'moms', 'balance'],
    level: 'group',
    audience: 'Mothers looking for practical support and flexible connection.',
    moderation: 'Facilitated by a parent host with moderator follow-up available.',
    faithStyle: 'faith-friendly',
    afterJoin: 'Members receive meeting expectations, privacy reminders, and optional check-in prompts.',
    isDemo: true,
  },
  {
    id: 'pg3',
    name: 'Dads Connect',
    description: 'No-pressure meetups for dads and father figures who want honest conversation and practical help.',
    memberCount: 4,
    maxMembers: 6,
    meetingSchedule: 'Biweekly Saturdays 10:00 AM',
    format: 'hybrid',
    moderator: 'James R.',
    tags: ['dads', 'peer support', 'casual'],
    level: 'group',
    audience: 'Dads and father figures who prefer a lower-pressure support style.',
    moderation: 'Community host plus moderator escalation if a family needs higher-touch support.',
    faithStyle: 'general',
    afterJoin: 'Parents can join one session before deciding whether to stay in the group.',
    isDemo: true,
  },
  {
    id: 'pg4',
    name: 'High Stress Week Support Group',
    description: 'A guided group for parents navigating significant behavior stress, overload, or family sustainability concerns.',
    memberCount: 5,
    maxMembers: 8,
    meetingSchedule: 'Wednesdays 7:30 PM',
    format: 'virtual',
    moderator: 'Staff Facilitator',
    tags: ['behavior', 'burnout', 'guided support'],
    level: 'group',
    audience: 'Parents who need more structure than a casual peer thread can provide.',
    moderation: 'Facilitated with clear boundaries and handoff reminders when counseling or respite is needed.',
    faithStyle: 'general',
    afterJoin: 'Parents get a short guide on what is appropriate for peer support versus professional support.',
    isDemo: true,
  },
];

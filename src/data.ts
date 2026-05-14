export type IconKey =
  | "database"
  | "pencil"
  | "gauge"
  | "boxes"
  | "lock"
  | "image"
  | "text"
  | "code"
  | "audio"
  | "video"
  | "spatial"
  | "workflow";

export const navItems = [
  "Products",
  "Services",
  "Platform",
  "Pricing",
  "Resources",
  "Company",
];

export const trustMarks = [
  "Enterprise-grade Security",
  "Global Expert Network",
  "Scalable Data Infrastructure",
];

export const capabilities = [
  {
    icon: "database",
    title: "Multimodal Datasets",
    body: "Image, text, code, audio, video, 3D, and agentic data built for production models.",
  },
  {
    icon: "pencil",
    title: "Expert Annotation",
    body: "Specialist human judgment for tasks that require context, nuance, and precision.",
  },
  {
    icon: "gauge",
    title: "Evaluation & Testing",
    body: "Human-led evaluation programs across factuality, safety, robustness, and tool use.",
  },
  {
    icon: "boxes",
    title: "RL Environments",
    body: "Realistic enterprise simulations for training and evaluating agent behavior.",
  },
  {
    icon: "lock",
    title: "Secure Delivery",
    body: "Private, compliant, and operationally reliable data delivery.",
  },
] satisfies Array<{ icon: IconKey; title: string; body: string }>;

export const lifecycleSteps = [
  {
    title: "Collect",
    body: "Capture multimodal source signals from real use cases, domains, and workflows.",
  },
  {
    title: "Curate",
    body: "Filter, normalize, deduplicate, and prepare data for expert work.",
  },
  {
    title: "Annotate",
    body: "Apply structured human judgment with guidelines, tooling, and review logic.",
  },
  {
    title: "Review",
    body: "Resolve ambiguity with QA layers, consensus checks, and specialist escalation.",
  },
  {
    title: "Evaluate",
    body: "Measure quality, model readiness, and coverage across critical dimensions.",
  },
  {
    title: "Deliver",
    body: "Package verified datasets for training, evaluation, or agent reinforcement loops.",
  },
];

export const datasets = [
  {
    icon: "image",
    title: "Image",
    body: "Detection, segmentation, scene understanding, OCR, visual reasoning, and safety review.",
  },
  {
    icon: "text",
    title: "Text",
    body: "Instruction data, preference data, domain QA, reasoning traces, and policy evaluation.",
  },
  {
    icon: "code",
    title: "Code",
    body: "Repository tasks, code review, debugging, test generation, and tool-use workflows.",
  },
  {
    icon: "audio",
    title: "Audio",
    body: "Speech, conversation, emotion, intent, transcription, and acoustic event signals.",
  },
  {
    icon: "video",
    title: "Video",
    body: "Temporal understanding, action recognition, visual QA, and multimodal reasoning.",
  },
  {
    icon: "spatial",
    title: "3D / Point Cloud",
    body: "Spatial annotation, object geometry, robotics scenes, and embodied AI data.",
  },
  {
    icon: "workflow",
    title: "Agentic Data",
    body: "Browser, enterprise software, tool-use traces, plans, actions, and reward signals.",
  },
] satisfies Array<{ icon: IconKey; title: string; body: string }>;

export const annotationWorkflow = [
  {
    title: "Annotate",
    body: "Capture decisions, labels, rationales, and edge cases with advanced tools.",
  },
  {
    title: "Review",
    body: "Check consistency, completeness, and guideline alignment with domain experts.",
  },
  {
    title: "Resolve",
    body: "Escalate conflicts, adjudicate ambiguity, and improve task instructions.",
  },
  {
    title: "Approve",
    body: "Confirm quality thresholds before data moves into delivery.",
  },
  {
    title: "Verified",
    body: "Ship high-confidence data with traceable quality signals.",
  },
];

export const evaluationDimensions = [
  ["Factuality", 91],
  ["Safety", 83],
  ["Robustness", 88],
  ["Coherence", 90],
  ["Helpfulness", 87],
  ["Tool use", 76],
] as const;

export const environmentNodes = [
  "Chat",
  "Browser",
  "Orders",
  "CRM",
  "Files",
  "Calendar",
];

export const metrics = [
  { value: 100, suffix: "PB+", label: "High-quality data produced" },
  { value: 10, suffix: "M+", label: "Hours of expert annotation" },
  { value: 99, suffix: "%+", label: "Average data accuracy" },
  { value: 300, suffix: "+", label: "Enterprise customers" },
  { value: 50, suffix: "+", label: "Countries supported" },
];

export const footerColumns = [
  {
    title: "Products",
    links: ["Datasets", "Annotation", "Evaluation", "RL Environments", "Platform"],
  },
  {
    title: "Services",
    links: [
      "Data Collection",
      "Data Processing",
      "Annotation Services",
      "Model Evaluation",
      "Consulting",
    ],
  },
  {
    title: "Resources",
    links: ["Documentation", "Case Studies", "Blog", "Guides", "Webinars"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Partners", "Contact"],
  },
];

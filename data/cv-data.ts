/**
 * Site content. Source of truth: JB_OBS/my-docs/JB-CV/CV-JunbeomKwon.docx
 * Last synced with the CV: 2026-11-22.
 *
 * Author strings wrap the site owner in **double asterisks** so the right
 * "Kwon, J." is emphasised even when another Kwon appears in the list.
 */

export interface PresentedAt {
  label: string;
  award?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'published' | 'preprint' | 'in_preparation';
  link?: string;
  codeLink?: string;
  equalContribution?: boolean;
  presented?: PresentedAt[];
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  period: string;
  lab: string;
  details: string[];
  tags?: string[];
  links?: { label: string; href: string }[];
  /** A real figure from the work itself; credit names the source. */
  figure?: { src: string; width: number; height: number; alt: string; credit: string; tall?: boolean };
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  advisor?: string;
  thesis?: string;
  gpa?: string;
}

export interface Position {
  role: string;
  organization: string;
  period: string;
  summary?: string;
}

export interface NewsItem {
  date: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface DatedEntry {
  date: string;
  title?: string;
  text: string;
}

export interface AwardGroup {
  heading: string;
  items: { date: string; title: string; organization: string }[];
}

export interface Course {
  term: string;
  course: string;
  institution: string;
  role: string;
  description?: string;
}

export const personalInfo = {
  name: 'Junbeom Kwon',
  email: 'kjb961013@gmail.com',
  currentPosition: 'Ph.D. Student in Psychology',
  currentInstitution: 'The University of Texas at Austin',
  lab: 'Pestilli Lab',
  advisor: 'Franco Pestilli',
  tagline:
    'I build deep learning models and AI agents that connect brain structure to function, and I test whether they generalize across datasets.',
  links: {
    scholar: 'https://scholar.google.com/citations?user=Z_JYHdAAAAAJ&hl=en',
    github: 'https://github.com/Junebeomstics',
  },
};

export const news: NewsItem[] = [
  {
    date: 'Nov 2026',
    text: 'Won the Best Poster Award at the BRAIN CONNECTS 2026 Annual Meeting for our work on the generalizability of tract segmentation models.',
    href: 'https://www.biorxiv.org/content/10.64898/2026.07.30.741597v1.full',
    linkLabel: 'preprint',
  },
  {
    date: 'Nov 2026',
    text: 'Presented BIDS2AI at the BRAIN Initiative Alliance Toolmakers Showcase at SfN 2026 in Washington, DC (selected).',
  },
  {
    date: 'Nov 2026',
    text: 'Volunteered at the BRAIN CONNECTS and brainlife.io booth at SfN 2026.',
  },
  {
    date: 'Nov 2026',
    text: 'Received the SfN Trainee Professional Development Award and presented our tract segmentation poster in the Neuroscience 2026 main program.',
  },
  {
    date: 'Oct 2026',
    text: 'Gave a selected talk and poster on the tract segmentation benchmark at IST 2026 in Banff, Canada.',
  },
  {
    date: 'Sep 2026',
    text: 'Presented the benchmark poster at TACCSTER 2026 in Austin.',
  },
  {
    date: 'Jul 2026',
    text: 'Our tract segmentation benchmark is now on bioRxiv.',
    href: 'https://www.biorxiv.org/content/10.64898/2026.07.30.741597v1.full',
    linkLabel: 'preprint',
  },
  {
    date: 'Jul 2026',
    text: 'Attended NeuroHackademy at the University of Washington with a travel award.',
  },
  {
    date: 'May 2026',
    text: 'Our paper on learning brain dynamics across scaling regimes to find psychiatric signatures was published in Communications Biology.',
    href: 'https://www.nature.com/articles/s42003-026-10011-7',
    linkLabel: 'paper',
  },
  {
    date: 'Dec 2025',
    text: 'Gave a spotlight talk and poster on NeuroMamba at the NeurIPS 2025 BrainBodyFM Workshop in San Diego.',
  },
  {
    date: 'Aug 2025',
    text: 'Presented SwiFT V2 at CCN 2025 in Amsterdam.',
  },
  {
    date: 'Jun 2025',
    text: 'Presented two posters at OHBM 2025 in Brisbane.',
  },
  {
    date: 'Jan 2025',
    text: 'Our paper on predicting task-related brain activity from resting-state fMRI with SwiFUN was published in Imaging Neuroscience.',
    href: 'https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00440/126557',
    linkLabel: 'paper',
  },
];

export const education: Education[] = [
  {
    degree: 'Ph.D. in Psychology (in progress)',
    institution: 'The University of Texas at Austin',
    location: 'Austin, TX',
    period: '2024 – Present',
    advisor: 'Franco Pestilli, Ph.D.',
  },
  {
    degree: 'M.A. in Psychology',
    institution: 'Seoul National University',
    location: 'Seoul, Korea',
    period: 'Sep 2021 – Aug 2023',
    thesis: 'Exploring spatiotemporal brain dynamics with fMRI Transformers',
    advisor: 'Jiook Cha, Ph.D.',
    gpa: '4.26 / 4.3',
  },
  {
    degree: 'B.A. in Psychology and B.S. in Big Data Science',
    institution: 'Sogang University',
    location: 'Seoul, Korea',
    period: 'Mar 2016 – Aug 2021',
    gpa: '4.07 / 4.3, summa cum laude',
  },
];

export const positions: Position[] = [
  {
    role: 'Graduate Research Assistant',
    organization: 'Pestilli Lab, The University of Texas at Austin',
    period: '2025 – 2026',
    summary:
      'Generalization of deep learning tract segmentation, structure–function mapping of human visual cortex, and agentic AI for neuroimaging.',
  },
  {
    role: 'Research Associate',
    organization: 'Connectome Lab (PI: Jiook Cha), Seoul National University',
    period: '2023 – 2024',
    summary:
      'fMRI Transformers (SwiFT), EEG and multimodal biomarkers of psychiatric disorders, and generative models for MRI synthesis and harmonization.',
  },
  {
    role: 'Research Assistant',
    organization: 'Connectome Lab (PI: Jiook Cha), Seoul National University',
    period: '2021 – 2023',
  },
  {
    role: 'Research Intern',
    organization: 'Connectome Lab (PI: Jiook Cha), Seoul National University',
    period: '2020 – 2021',
  },
  {
    role: 'Research Intern',
    organization: 'Organizational Psychology Lab (PI: Jae Yoon Chang), Sogang University',
    period: '2020',
    summary: 'Sentiment analysis and structural topic modeling of workplace text to study organizational culture and job transfer.',
  },
];

export const researchInterests = [
  {
    title: 'Generalizable deep learning for neuroimaging',
    description:
      'Testing whether deep learning models hold up across independently acquired datasets, starting with a benchmark of white matter tract segmentation on diffusion MRI.',
  },
  {
    title: 'White matter connectivity and visual cortex',
    description:
      'Studying how white matter pathways relate to visual field maps and perceptual asymmetries, and mapping structure to function in human visual cortex.',
  },
  {
    title: 'Agentic AI and AI-ready neuroimaging workflows',
    description:
      'Building BIDS2AI, an agentic framework that turns neuroimaging datasets into AI-ready deep learning workflows, and reproducible open tools on brainlife.io.',
  },
  {
    title: 'Foundation models for fMRI and EEG',
    description:
      'Developing transformer and state-space models for spatiotemporal brain data, including SwiFT, SwiFT V2, and NeuroMamba.',
  },
  {
    title: 'Psychiatric biomarkers and generative models',
    description:
      'Using machine learning on EEG and multimodal imaging to find psychiatric biomarkers, and generative models for MRI synthesis and harmonization.',
  },
];

export const researchProjects: ResearchProject[] = [
  {
    id: 'tract-segmentation',
    title: 'Generalizability of deep learning tract segmentation',
    description:
      'A benchmark of how well deep learning tract segmentation models generalize across independently acquired diffusion MRI datasets.',
    period: 'Pestilli Lab',
    lab: 'The University of Texas at Austin',
    details: [
      'Benchmarked neural tract segmentation, including foundation-model approaches, against established methods.',
      'Built the analysis pipeline on brainlife.io for model training and validation across multiple diffusion MRI datasets.',
      'Best Poster Award at BRAIN CONNECTS 2026; selected talk at IST 2026.',
    ],
    tags: ['Diffusion MRI', 'Tractography', 'Benchmarking', 'brainlife.io'],
    figure: {
      src: '/projects/tract-segmentation.webp',
      width: 1800,
      height: 554,
      alt: 'Schematic of voxel-based white matter tract segmentation: fODF peak maps from diffusion MRI are the input to a deep learning segmentation model, which outputs white matter tracts shown on a brain.',
      credit: 'Figure 1 from Kwon, Amorosino & Pestilli (2026), bioRxiv.',
    },
  },
  {
    id: 'bids2ai',
    title: 'BIDS2AI: agentic AI for neuroimaging data',
    description:
      'An agentic framework that turns neuroimaging datasets into AI-ready deep learning workflows.',
    period: 'Pestilli Lab',
    lab: 'The University of Texas at Austin',
    details: [
      'Selected for the BRAIN Initiative Alliance Toolmakers Showcase at SfN 2026.',
      'Manuscript in preparation.',
    ],
    tags: ['AI agents', 'Reproducibility', 'Open science'],
    figure: {
      src: '/projects/bids2ai.webp',
      width: 1361,
      height: 1323,
      alt: 'BIDS2AI knowledge cards and workflow: (a) five card types (pipeline, datatype, converter, model, task); (b) a four-stage workflow from examining the request to executing training and reporting; (c) a flow diagram linking pipelines, datatypes, model families, and tasks.',
      credit: 'Figure 2 from Kwon et al. (in preparation).',
      tall: true,
    },
  },
  {
    id: 'visconti',
    title: 'VISCONTI: structural connectivity of early visual cortex',
    description:
      'A pipeline that integrates tractography with population receptive field mapping to quantify structural connectivity in early visual cortex.',
    period: 'Pestilli Lab',
    lab: 'The University of Texas at Austin',
    details: [
      'Developed the VISCONTI pipeline to link white matter pathways with retinotopic maps.',
      'Showed a structural connectivity basis for visual performance asymmetries by analyzing pathways between visual regions.',
    ],
    tags: ['Retinotopy', 'White matter', 'Structure–function'],
    links: [{ label: 'Preprint', href: 'https://doi.org/10.64898/2026.04.03.716412' }],
    figure: {
      src: '/projects/visconti.webp',
      width: 1800,
      height: 1898,
      alt: 'Retinotopic connectivity and white matter: (a) retinotopic cortical areas on the cortical surface, (b) retinotopic tractography, (c to e) tract profiles and fractional anisotropy by eccentricity, (f) retinotopic connectivity matrices.',
      credit: 'Figure 1 from Amorosino, Caron, Kwon et al. (2026), bioRxiv.',
      tall: true,
    },
  },
  {
    id: 'swifun',
    title: 'SwiFUN: predicting task-related brain activity from resting-state dynamics',
    description:
      'Using fMRI Transformers to predict task-related brain activity from resting-state brain dynamics.',
    period: 'Connectome Lab',
    lab: 'Seoul National University',
    details: [
      'First-author paper in Imaging Neuroscience (2025).',
      'Built on SwiFT to predict task-related brain activity from resting-state fMRI.',
      'Found strong correlations between the predictions and personal attributes such as neuroticism and depressive symptoms.',
    ],
    tags: ['fMRI', 'Transformers', 'Resting state', 'Task activation'],
    links: [
      { label: 'Paper', href: 'https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00440/126557' },
      { label: 'Code', href: 'https://github.com/Transconnectome/SwiFUN' },
    ],
    figure: {
      src: '/projects/swifun.webp',
      width: 1800,
      height: 847,
      alt: 'SwiFUN architecture: a 4D resting-state fMRI input passes through a Swin Transformer encoder and a UNet-style decoder to predict an active-state fMRI map.',
      credit: 'Figure 1 from Kwon et al. (2025), Imaging Neuroscience.',
    },
  },
  {
    id: 'swift',
    title: 'SwiFT: Swin 4D fMRI Transformer',
    description:
      'A deep learning model for end-to-end fMRI analysis that outperforms existing methods at predicting biological and cognitive variables.',
    period: 'Connectome Lab',
    lab: 'Seoul National University',
    details: [
      'Published at NeurIPS 2023.',
      'Follow-up foundation models: SwiFT V2 and NeuroMamba. NeuroMamba was a spotlight talk at the NeurIPS 2025 BrainBodyFM workshop.',
    ],
    tags: ['fMRI', 'Transformers', 'Foundation models'],
    links: [
      { label: 'Paper', href: 'https://arxiv.org/abs/2307.05916' },
      { label: 'Code', href: 'https://github.com/Transconnectome/SwiFT' },
    ],
    figure: {
      src: '/projects/swift.webp',
      width: 1620,
      height: 1290,
      alt: 'SwiFT architecture: 4D fMRI input, four stages of 4D Swin Transformer blocks with patch merging, and the windowed attention scheme across time points.',
      credit: 'Figure 1 from Kim, Kwon et al. (2023), NeurIPS.',
    },
  },
  {
    id: 'psychiatric-diagnosis',
    title: 'Diagnosing and predicting trajectories of psychiatric disorders',
    description:
      'Clustering and machine learning on EEG and multimodal neuroimaging to identify biomarkers of psychiatric symptoms.',
    period: 'Connectome Lab',
    lab: 'Seoul National University',
    details: [
      'Clustered psychiatric symptoms and identified corresponding EEG biomarkers.',
      'Integrated multimodal neuroimaging with machine learning in the EMBARC study.',
    ],
    tags: ['EEG', 'Biomarkers'],
    figure: {
      src: '/projects/psychiatric-eeg.webp',
      width: 1800,
      height: 1341,
      alt: 'Brain maps (a to c) and a radar plot (d) of resting-state theta-phase gamma amplitude coupling for three psychiatric symptom-dimension clusters.',
      credit: 'Figure 1 from Kim, Shim, Kwon et al. (2023), Psychiatry and Clinical Neurosciences.',
    },
  },
  {
    id: 'generative-models',
    title: 'Generative models for neuroimaging',
    description: 'Generative deep learning for MRI correction, synthesis, and harmonization.',
    period: 'Connectome Lab',
    lab: 'Seoul National University',
    details: [
      'Corrected site effects in structural MRI with a cycle-consistent GAN.',
      'Synthesized diffusion MRI from existing structural data with frequency-aware GANs.',
      'Introduced a Fourier Neural Approximator for bandlimited signals such as EEG.',
    ],
    tags: ['GANs', 'MRI synthesis', 'Harmonization'],
    figure: {
      src: '/projects/macro2micro.webp',
      width: 1800,
      height: 1266,
      alt: 'Macro2Micro: a frequency feature encoder and generator synthesize a fractional anisotropy (DTI) map from a T1-weighted image, with downstream predictions and tractography.',
      credit: 'Figure 1 from Kim, Kwon, Kwon et al. (2024), arXiv:2412.11277.',
    },
  },
];

export const publications: Publication[] = [
  // Published
  {
    id: 'pub-commbio-2026',
    title: 'Learning brain dynamics across distinct scaling regimes reveals psychiatric signatures',
    authors: 'Bae, S., **Kwon, J.**, Yoo, S., & Cha, J.',
    venue: 'Communications Biology',
    year: 2026,
    type: 'published',
    link: 'https://www.nature.com/articles/s42003-026-10011-7',
  },
  {
    id: 'pub-imaging-neuro-2025',
    title: 'Predicting task-related brain activity from resting-state brain dynamics with fMRI Transformers',
    authors: '**Kwon, J.**, Seo, J., … & Cha, J.',
    venue: 'Imaging Neuroscience',
    year: 2025,
    type: 'published',
    link: 'https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00440/126557',
    codeLink: 'https://github.com/Transconnectome/SwiFUN',
  },
  {
    id: 'pub-swift-2023',
    title: 'SwiFT: Swin 4D fMRI Transformer',
    authors: 'Kim, P. Y.*, **Kwon, J.***, … , Cha, J., & Moon, T.',
    venue: 'NeurIPS 2023 (Thirty-seventh Conference on Neural Information Processing Systems)',
    year: 2023,
    type: 'published',
    link: 'https://arxiv.org/abs/2307.05916',
    codeLink: 'https://github.com/Transconnectome/SwiFT',
    equalContribution: true,
  },
  {
    id: 'pub-pcn-2023',
    title:
      'Resting-state theta-phase gamma amplitude coupling as a biomarker for the transdiagnostic dimensional approach in psychiatric disorders',
    authors: 'Kim, M., Shim, Y., **Kwon, J.**, Bae, S., Lee, J., Cha, J., … & Kwon, J. S.',
    venue: 'Psychiatry and Clinical Neurosciences',
    year: 2023,
    type: 'published',
    link: 'https://onlinelibrary.wiley.com/doi/10.1111/pcn.13554',
  },

  // Preprints and manuscripts under review
  {
    id: 'preprint-benchmarking',
    title: 'Benchmarking generalizability in deep learning-based white matter tract segmentation',
    authors: '**Kwon, J.**, Amorosino, G., & Pestilli, F.',
    venue: 'bioRxiv preprint (under review)',
    year: 2026,
    type: 'preprint',
    link: 'https://www.biorxiv.org/content/10.64898/2026.07.30.741597v1.full',
    presented: [
      { label: 'Best Poster Award, BRAIN CONNECTS 2026 Annual Meeting', award: true },
      { label: 'Selected talk and poster, IST 2026, Banff' },
      { label: 'Poster, SfN Neuroscience 2026, Washington, DC' },
    ],
  },
  {
    id: 'preprint-retinotopic',
    title: 'A retinotopic wiring principle of the human brain',
    authors:
      'Amorosino, G., Caron, B., **Kwon, J.**, Carrasco, M., Reid, C., Lenglet, C., Zimmermann, J., Yacoub, E., Ugurbil, K., Heilbronner, S. R., & Pestilli, F.',
    venue: 'bioRxiv preprint (under review)',
    year: 2026,
    type: 'preprint',
    link: 'https://doi.org/10.64898/2026.04.03.716412',
  },
  {
    id: 'review-compositional',
    title: 'Compositional brain decoding via visual constituent recombination',
    authors: 'Kim, S., Kwon, J., **Kwon, J.**, … & Cha, J.',
    venue: 'Under review',
    year: 2026,
    type: 'preprint',
  },

  // In preparation
  {
    id: 'prep-bids2ai',
    title: 'BIDS2AI: An agentic framework for transforming neuroimaging datasets into AI-ready workflows',
    authors: '**Kwon, J.**, Amorosino, G., Agarwal, S., & Pestilli, F.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
    presented: [{ label: 'Selected tool showcase, BRAIN Initiative Alliance Toolmakers Showcase, SfN 2026' }],
  },
  {
    id: 'prep-meshes',
    title: 'Learning the functional organization of human visual cortex from cortical meshes',
    authors: '**Kwon, J.**, Amorosino, G., Agarwal, S., & Pestilli, F.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
  },
  {
    id: 'prep-place-affect',
    title: 'Mapping the neural representation of place-evoked affect with panoramic scene fMRI',
    authors: 'Kim, S., **Kwon, J.**, Pestilli, F., & Kang, Y.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
  },
  {
    id: 'prep-swift-v2',
    title: 'SwiFT V2: Towards large-scale foundation model for functional MRI',
    authors: 'Choi, J., Wang, H., **Kwon, J.**, Yoo, S., & Cha, J.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
    presented: [{ label: 'Poster, Cognitive Computational Neuroscience (CCN) 2025, Amsterdam' }],
  },
  {
    id: 'prep-multilabel',
    title: 'Enhancing psychiatric disorder diagnosis: Integrating multilabel metadata with contrastive learning on T1 structural MRI',
    authors: 'Han, D., Lee, A., **Kwon, J.**, & Cha, J.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
    presented: [{ label: 'Poster, Organization for Human Brain Mapping (OHBM) 2025, Brisbane' }],
  },
  {
    id: 'prep-neuromamba',
    title: 'NeuroMamba: A state-space foundation model for functional MRI',
    authors: 'Choi, J., Park, D., **Kwon, J.**, Yoo, S., & Cha, J.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
    presented: [{ label: 'Spotlight talk and poster, NeurIPS 2025 BrainBodyFM Workshop, San Diego' }],
  },
  {
    id: 'prep-macro2micro',
    title: 'Macro2Micro: A rapid and precise cross-modal magnetic resonance imaging synthesis using multi-scale structural brain similarity',
    authors: 'Kim, S.*, Kwon, J.*, **Kwon, J.***, … & Cha, J.',
    venue: 'In preparation',
    year: 2026,
    type: 'in_preparation',
    equalContribution: true,
  },
];

export const awardGroups: AwardGroup[] = [
  {
    heading: 'Awards',
    items: [
      {
        date: 'Nov 2026',
        title: 'Best Poster Award',
        organization: 'BRAIN CONNECTS 2026 Annual Meeting, University of Maryland, College Park, MD',
      },
      {
        date: 'Nov 2026',
        title: 'Trainee Professional Development Award (TPDA)',
        organization: 'Society for Neuroscience (SfN)',
      },
      { date: 'Nov 2022', title: 'Best Poster Award', organization: 'Korean Human Brain Mapping (KHBM)' },
    ],
  },
  {
    heading: 'Travel grants',
    items: [
      { date: 'Nov 2026', title: 'Professional Development Award (PDA)', organization: 'The University of Texas at Austin' },
      { date: 'Jul 2026', title: 'Travel Award', organization: 'NeuroHackademy, University of Washington, Seattle, WA' },
    ],
  },
  {
    heading: 'Academic honors',
    items: [
      {
        date: 'Apr 2021',
        title: 'Dean’s List',
        organization: 'Top 1% of students in the Social Sciences Department, Sogang University',
      },
      { date: 'Sep 2016', title: 'Academic Excellence Scholarship', organization: 'Sogang University' },
    ],
  },
];

export const talks: DatedEntry[] = [
  {
    date: 'Oct 2026',
    title: 'Selected talk and poster',
    text: 'Benchmarking generalizability in deep learning-based white matter tract segmentation. International Society for Tractography (IST) 2026, Banff, Canada.',
  },
  {
    date: 'Dec 2025',
    title: 'Spotlight talk and poster',
    text: 'NeuroMamba: A state-space foundation model for functional MRI. NeurIPS 2025 BrainBodyFM Workshop, San Diego, CA.',
  },
  {
    date: 'Nov 2023',
    title: 'Invited talk (virtual)',
    text: 'SwiFT: Swin 4D fMRI Transformer. MedARC NeuroAI Journal Club.',
  },
  {
    date: 'Oct 2023',
    title: 'Selected talk',
    text: 'SwiFT: Swin 4D fMRI Transformer. Korean Human Brain Mapping (KHBM) 2023, Seoul, Korea.',
  },
  {
    date: 'Sep 2023',
    title: 'Invited talk',
    text: 'SwiFT: Swin 4D fMRI Transformer. NERSC Users Group (NUG) Meeting, Berkeley, CA.',
  },
];

export const showcases: DatedEntry[] = [
  {
    date: 'Nov 2026',
    title: 'Selected tool showcase',
    text: 'BIDS2AI: An agentic framework for AI analysis of cognitive neuroscience data. BRAIN Initiative Alliance Toolmakers Showcase, Society for Neuroscience (SfN) Neuroscience 2026, Washington, DC.',
  },
];

export const posters: DatedEntry[] = [
  {
    date: 'Nov 2026',
    text: 'Benchmarking generalizability in deep learning-based white matter tract segmentation. Society for Neuroscience (SfN) Neuroscience 2026, Washington, DC.',
  },
  {
    date: 'Nov 2026',
    title: 'Best Poster Award',
    text: 'Benchmarking generalizability in deep learning-based white matter tract segmentation. BRAIN CONNECTS 2026 Annual Meeting, College Park, MD.',
  },
  {
    date: 'Sep 2026',
    text: 'Benchmarking deep learning models in tract segmentation. TACCSTER 2026, Austin, TX.',
  },
  {
    date: 'Aug 2025',
    text: 'SwiFT V2: Towards large-scale foundation model for functional MRI. Cognitive Computational Neuroscience (CCN) 2025, Amsterdam, The Netherlands.',
  },
  {
    date: 'Jun 2025',
    text: 'Enhancing psychiatric disorder diagnosis: Integrating multilabel metadata with contrastive learning on T1 structural MRI. Organization for Human Brain Mapping (OHBM) 2025, Brisbane, Australia.',
  },
  {
    date: 'Jun 2025',
    text: 'Mapping asymmetries in structural connectivity of the visual network. Organization for Human Brain Mapping (OHBM) 2025, Brisbane, Australia.',
  },
  {
    date: 'Sep 2024',
    text: 'SwiFT: Swin 4D fMRI Transformer. International Neuroinformatics Coordinating Facility (INCF) 2024, Austin, TX.',
  },
  {
    date: 'Nov 2022',
    text: 'Harmonization of structural MRI with 3D cycleGAN. International Congress on MRI (ICMRI) 2022, Seoul, Korea.',
  },
  {
    date: 'Nov 2022',
    text: 'Prediction of biological features with spatiotemporal fMRI Transformers. Korean Human Brain Mapping (KHBM) 2022, Seoul, Korea.',
  },
];

export const teaching: Course[] = [
  {
    term: 'Fall 2026',
    course: 'Psychological Methods/Statistics',
    institution: 'The University of Texas at Austin',
    role: 'Teaching Assistant',
    description: 'Led weekly R-based tutorial lab sessions and graded assignments and exams.',
  },
  {
    term: 'Fall 2024',
    course: 'Cognitive Neuroscience',
    institution: 'The University of Texas at Austin',
    role: 'Teaching Assistant',
    description: 'Taught fundamental topics in cognitive neuroscience and graded assignments.',
  },
  {
    term: 'Fall 2021',
    course: 'Data Science in Human Neuroimaging',
    institution: 'Seoul National University',
    role: 'Teaching Assistant',
    description:
      'Taught neuroscience fundamentals, neuroimaging modalities, and ML methods for predicting human behavior; led hands-on sessions and guided final projects.',
  },
  {
    term: 'Spring 2020 – Spring 2021',
    course: 'Introduction to BigData Programming',
    institution: 'Sogang University',
    role: 'Teaching Assistant',
    description:
      'Introduced Python and object-oriented programming; led computer labs and review sessions, prepared homework and exams, and mentored other TAs.',
  },
];

export const service: { heading: string; items: DatedEntry[] }[] = [
  {
    heading: 'Peer review',
    items: [
      { date: '2026', text: 'Reviewer, NeurIPS 2026 BrainBodyFM Workshop (3 submissions).' },
      { date: '2025', text: 'Reviewer, International Symposium on Biomedical Imaging (ISBI) 2025 (4 submissions).' },
    ],
  },
  {
    heading: 'Conference volunteering',
    items: [
      {
        date: 'Nov 2026',
        text: 'Outreach volunteer, BRAIN CONNECTS & brainlife.io booth, SfN Neuroscience 2026, Washington, DC.',
      },
      { date: 'Sep 2024', text: 'Volunteer, INCF 2024, Austin, TX.' },
      { date: 'Jun 2024', text: 'Volunteer, OHBM 2024 Annual Meeting, Seoul, Korea.' },
    ],
  },
  {
    heading: 'Laboratory service',
    items: [
      {
        date: '2021 – 2023',
        text: 'Server Administrator, Connectome Lab, Seoul National University. Managed lab computing infrastructure (Slurm, Globus, Docker), provided tutorials, and hosted workshops.',
      },
    ],
  },
];

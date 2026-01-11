export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: 'published' | 'preprint' | 'in_preparation';
  link?: string;
  arxivId?: string;
  codeLink?: string;
  presentedAt?: string; // Conference where the paper was presented
}

export interface ResearchProject {
  id: string;
  title: string;
  description: string;
  period: string;
  lab: string;
  details: string[];
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

export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  currentPosition: string;
  currentInstitution: string;
}

export const personalInfo: PersonalInfo = {
  name: "Junbeom Kwon",
  email: "kjb961013@gmail.com",
  phone: "(+1) 737-342-7057",
  currentPosition: "Ph.D. Student in Psychology",
  currentInstitution: "University of Texas at Austin",
};

export const education: Education[] = [
  {
    degree: "Ph.D. in Psychology",
    institution: "University of Texas at Austin",
    location: "Austin, Texas",
    period: "August 2024 – Present",
    advisor: "Prof. Franco Pestilli, PhD",
  },
  {
    degree: "M.A. in Psychology",
    institution: "Seoul National University",
    location: "Seoul, South Korea",
    period: "September 2021 – August 2023",
    thesis: "Exploring spatiotemporal brain dynamics with fMRI Transformers",
    advisor: "Prof. Jiook Cha, PhD",
    gpa: "4.26/4.3",
  },
  {
    degree: "B.A. in Psychology and B.S. in Big Data Science",
    institution: "Sogang University",
    location: "Seoul, South Korea",
    period: "March 2016 - August 2021",
    gpa: "4.07/4.3 (Summa Cum Laude)",
  },
];

export const researchProjects: ResearchProject[] = [
  {
    id: "tract-segmentation",
    title: "Deep Learning Tract Segmentation Framework",
    description: "Implemented neural tract segmentation using foundation models, benchmarking performance against established methodologies.",
    period: "Aug 2024 – Present",
    lab: "Pestilli Lab, University of Texas at Austin",
    details: [
      "Implemented neural tract segmentation using foundation models, benchmarking performance against established methodologies to demonstrate comparative advantages.",
      "Built a comprehensive analysis pipeline on the Brainlife platform, enabling efficient model training and validation across multiple diffusion MRI datasets.",
    ],
  },
  {
    id: "visconti",
    title: "VISCONTI: Structural Connectivity Analysis Pipeline for Early Visual Cortex",
    description: "Developed pipeline integrating tractography with population receptive field mapping to quantify structural connectivity patterns.",
    period: "Aug 2024 – Present",
    lab: "Pestilli Lab, University of Texas at Austin",
    details: [
      "Developed the VISCONTI pipeline, integrating tractography with population receptive field mapping to quantify structural connectivity patterns in the early visual cortex.",
      "Revealed structural connectivity basis for visual performance asymmetry through systematically analyzing white matter pathways connecting visual processing regions.",
    ],
  },
  {
    id: "swift",
    title: "SwiFT: Swin 4D fMRI Transformer",
    description: "Developed a deep learning model for end-to-end fMRI data analysis, surpassing existing methods in predicting biological and cognitive variables.",
    period: "Dec 2020 – Jul 2024",
    lab: "Connectome Lab, Seoul National University",
    details: [
      "Developed a deep learning model (SwiFT) for end-to-end fMRI data analysis, surpassing existing methods in predicting biological and cognitive variables.",
      "Used SwiFT to predict task-related brain activity from resting-state data, identifying strong correlations with personal attributes like neuroticism and depressive symptoms.",
    ],
  },
  {
    id: "psychiatric-diagnosis",
    title: "Diagnosing and Predicting Future Trajectories of Psychiatric Disorders",
    description: "Employed clustering algorithms and machine learning models to identify EEG biomarkers for psychiatric symptoms.",
    period: "Dec 2020 – Jul 2024",
    lab: "Connectome Lab, Seoul National University",
    details: [
      "Employed clustering algorithms to categorize psychiatric symptoms and used machine learning models to identify corresponding Electroencephalography (EEG) biomarkers.",
      "Preprocessed EEG data and integrated multi-modal neuroimaging data with machine learning in the EMBARC study.",
    ],
  },
  {
    id: "generative-models",
    title: "Enhancing Neuroimaging with Generative Deep Learning Models",
    description: "Applied generative models for MRI data correction and synthesis, including GANs and Fourier Neural Approximators.",
    period: "Dec 2020 – Jul 2024",
    lab: "Connectome Lab, Seoul National University",
    details: [
      "Corrected site effects in MRI data with cycle-consistent Generative Adversarial Networks (GANs).",
      "Generated diffusion MRI data from existing structural data using frequency-aware GANs.",
      "Introduced Fourier Neural Approximator for synthesizing bandlimited signals like EEG.",
    ],
  },
];

export const publications: Publication[] = [
  // Published Papers
  // Note: Update links with actual paper URLs from Google Scholar profile
  // Google Scholar: https://scholar.google.com/citations?user=Z_JYHdAAAAAJ&hl=en
  {
    id: "pub-1",
    title: "Predicting task-related brain activity from resting-state brain dynamics with fMRI Transformers",
    authors: "Kwon, J., Seo, J., ... & Cha, J.",
    venue: "Imaging Neuroscience",
    year: 2025,
    type: "published",
    link: "https://direct.mit.edu/imag/article/doi/10.1162/imag_a_00440/126557",
    codeLink: "https://github.com/Transconnectome/SwiFUN",
  },
  {
    id: "pub-2",
    title: "SwiFT: Swin 4D fMRI Transformer",
    authors: "Kim, P. Y.*, Kwon, J*,... & Moon, T.",
    venue: "Thirty-seventh Conference on Neural Information Processing Systems",
    year: 2023,
    type: "published",
    link: "https://arxiv.org/abs/2307.05916",
    codeLink: "https://github.com/Transconnectome/SwiFT",
  },
  {
    id: "pub-3",
    title: "Resting-state theta-phase gamma amplitude coupling as a biomarker for the transdiagnostic dimensional approach in psychiatric disorders",
    authors: "Kim, M., Shim, Y., Kwon, J., Bae, S., Lee, J., Cha, J., ... & Kwon, J. S.",
    venue: "Psychiatry and clinical neurosciences",
    year: 2023,
    type: "published",
    link: "https://onlinelibrary.wiley.com/doi/10.1111/pcn.13554",
  },
  // Preprints
  {
    id: "preprint-1",
    title: "Spatiotemporal Learning of Brain Dynamics from fMRI Using Frequency-Specific Multi-Band Attention for Cognitive and Psychiatric Applications",
    authors: "Bae, S., Kwon, J., Yoo, S., & Cha, J.",
    venue: "arXiv preprint",
    year: 2025,
    type: "preprint",
    arxivId: "2503.23394",
    link: "https://arxiv.org/abs/2503.23394",
  },
  {
    id: "preprint-2",
    title: "Macro2Micro: Cross-modal Magnetic Resonance Imaging Synthesis Leveraging Multi-scale Brain Structures",
    authors: "Kim, S.*, Kwon, J.*, Kwon, J.*, Bae, S., Lin, Y., Yoo, S., & Cha, J.",
    venue: "arXiv preprint",
    year: 2024,
    type: "preprint",
    arxivId: "2412.11277",
    link: "https://arxiv.org/abs/2412.11277",
  },
  // Manuscripts in Preparation
  {
    id: "prep-1",
    title: "A Benchmark for White Matter Tract Segmentation",
    authors: "Kwon, J., Amorosino, G., and Pestilli F.",
    venue: "In preparation",
    year: 2025,
    type: "in_preparation",
  },
  {
    id: "prep-2",
    title: "SwiFT V2: Towards Large-scale Foundation Model for Functional MRI",
    authors: "Choi, J., Wang H., Kwon, J., Yoo, S., Cha, J.",
    venue: "In preparation",
    year: 2025,
    type: "in_preparation",
    presentedAt: "Poster presented at Cognitive Computational Neuroscience (CCN) 2025, Amsterdam, The Netherlands",
  },
  {
    id: "prep-3",
    title: "Mapping Asymmetries in Structural Connectivity of the Visual Network",
    authors: "Amorosino, G., Kwon, J., Carrasco M., Caron, B., and Pestilli F.",
    venue: "In preparation",
    year: 2025,
    type: "in_preparation",
    presentedAt: "Poster presented at Organization for Human Brain Mapping (OHBM) 2025, Brisbane, Australia",
  },
  {
    id: "prep-4",
    title: "Enhancing Psychiatric Disorder Diagnosis: Integrating Multilabel Metadata with Contrastive Learning on T1 Structural MRI",
    authors: "Han, D., Lee, A., Kwon, J., Cha, J.",
    venue: "In preparation",
    year: 2025,
    type: "in_preparation",
    presentedAt: "Poster presented at Organization for Human Brain Mapping (OHBM) 2025, Brisbane, Australia",
  },
  {
    id: "prep-5",
    title: "NeuroMamba: A State-Space Foundation Model for Functional MRI",
    authors: "Choi, J., Park, D., Kwon, J., Yoo, S., Cha, J.",
    venue: "In preparation",
    year: 2025,
    type: "in_preparation",
    presentedAt: "Spotlight talk and poster at NeurIPS 2025 BrainBodyFM workshop, San Diego",
  },
];

export const researchInterests = [
  {
    title: "Deep Learning for Neuroimaging",
    description: "Developing and applying deep learning models for analyzing various neuroimaging modalities including fMRI, structural MRI, and diffusion MRI.",
  },
  {
    title: "Structural Connectivity Analysis",
    description: "Investigating white matter pathways and structural connectivity patterns in the brain, particularly in visual processing regions.",
  },
  {
    title: "fMRI Transformer Models",
    description: "Building foundation models for functional MRI data analysis using transformer architectures, enabling end-to-end analysis of brain dynamics.",
  },
  {
    title: "Psychiatric Disorder Diagnosis",
    description: "Using machine learning and neuroimaging data to diagnose and predict trajectories of psychiatric disorders, identifying biomarkers for symptoms.",
  },
  {
    title: "Generative Models for Neuroimaging",
    description: "Applying generative adversarial networks and other deep learning models to correct artifacts, synthesize data, and enhance neuroimaging analysis.",
  },
];

export const honorsAndAwards = [
  {
    title: "Best Poster Award",
    organization: "Korean Human Brain Mapping (KHBM)",
    year: 2022,
  },
  {
    title: "Dean's List",
    organization: "Award to top 1% of students in the Social Sciences Department",
    year: 2021,
  },
  {
    title: "Academic Excellence Scholarship",
    organization: "Sogang University",
    year: 2016,
  },
];

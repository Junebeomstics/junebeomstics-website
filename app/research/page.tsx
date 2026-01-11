import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { researchInterests, researchProjects } from '@/data/cv-data';
import { FaBrain, FaFlask, FaMicroscope, FaCode, FaChartLine } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research - Junbeom Kwon',
  description: 'Research interests and projects in deep learning, neuroimaging, fMRI transformers, and structural connectivity analysis.',
  openGraph: {
    title: 'Research - Junbeom Kwon',
    description: 'Research interests and projects in deep learning and neuroimaging.',
  },
};

export default function ResearchPage() {
  const interestIcons = [FaBrain, FaCode, FaMicroscope, FaChartLine, FaFlask];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaBrain className="text-white text-4xl" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Research
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Exploring the intersection of deep learning and neuroimaging
              </p>
            </div>
          </div>
        </section>

        {/* Research Interests Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <FaMicroscope className="text-4xl text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchInterests.map((interest, index) => {
                const Icon = interestIcons[index] || FaBrain;
                const colors = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-pink-500',
                  'from-green-500 to-emerald-500',
                  'from-orange-500 to-red-500',
                  'from-indigo-500 to-purple-500',
                ];
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-purple-300 transition-all group"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Research Projects Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Projects</h2>
            <div className="space-y-8">
              {researchProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Research Summary */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                My research focuses on developing and applying advanced machine learning and 
                deep learning techniques to neuroimaging data. I work with various neuroimaging 
                modalities including functional MRI (fMRI), structural MRI, and diffusion MRI 
                to understand brain structure and function.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A significant portion of my work involves developing foundation models for 
                neuroimaging data analysis. My work on SwiFT (Swin 4D fMRI Transformer) 
                demonstrates how transformer architectures can be adapted for spatiotemporal 
                brain data, enabling end-to-end analysis that surpasses traditional methods 
                in predicting biological and cognitive variables.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I am also interested in structural connectivity analysis, particularly in 
                understanding how white matter pathways connect different brain regions. 
                My recent work on the VISCONTI pipeline integrates tractography with 
                population receptive field mapping to reveal structural connectivity patterns 
                in the early visual cortex.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Additionally, I apply machine learning techniques to psychiatric disorder 
                diagnosis and prediction, using multi-modal neuroimaging data to identify 
                biomarkers and predict disease trajectories. I also work on generative models 
                for neuroimaging, using GANs and other deep learning approaches to correct 
                artifacts, synthesize data, and enhance analysis pipelines.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

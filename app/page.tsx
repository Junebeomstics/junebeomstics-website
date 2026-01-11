import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import Link from 'next/link';
import { personalInfo, education, researchInterests } from '@/data/cv-data';
import { FaBrain, FaFlask, FaMicroscope, FaGraduationCap, FaUniversity } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-8">
                <ProfileImage className="w-40 h-40 md:w-48 md:h-48" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-2 font-medium">
                {personalInfo.currentPosition}
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                {personalInfo.currentInstitution}
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Contact Me
                </a>
                <Link
                  href="/publications"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors shadow-md hover:shadow-lg"
                >
                  View Publications
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">About</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                I am a Ph.D. student in Psychology at the University of Texas at Austin, 
                working under the guidance of Prof. Franco Pestilli. My research focuses on 
                applying deep learning and machine learning techniques to neuroimaging data, 
                with particular interests in structural connectivity analysis, fMRI transformer 
                models, and psychiatric disorder diagnosis.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Previously, I completed my Master&apos;s degree at Seoul National University, where 
                I developed SwiFT (Swin 4D fMRI Transformer) and worked on various projects 
                involving generative models for neuroimaging and psychiatric disorder diagnosis. 
                My work spans multiple neuroimaging modalities including functional MRI, 
                structural MRI, and diffusion MRI.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-4xl text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <FaUniversity className="text-white text-xl" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-gray-700 mt-1">
                            {edu.institution}
                          </p>
                          <p className="text-gray-600">{edu.location}</p>
                        </div>
                        <span className="text-gray-600 mt-2 md:mt-0 font-medium">{edu.period}</span>
                      </div>
                      {edu.advisor && (
                        <p className="text-gray-700 mt-2">
                          <span className="font-medium">Advisor:</span> {edu.advisor}
                        </p>
                      )}
                      {edu.thesis && (
                        <p className="text-gray-700 mt-2">
                          <span className="font-medium">Thesis:</span> {edu.thesis}
                        </p>
                      )}
                      {edu.gpa && (
                        <p className="text-gray-700 mt-2">
                          <span className="font-medium">GPA:</span> {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Interests Preview */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <FaBrain className="text-4xl text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-900">Research Interests</h2>
              </div>
              <Link
                href="/research"
                className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center gap-1"
              >
                View All <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {researchInterests.slice(0, 3).map((interest, index) => {
                const icons = [FaBrain, FaFlask, FaMicroscope];
                const Icon = icons[index] || FaBrain;
                const colors = [
                  'from-blue-500 to-cyan-500',
                  'from-purple-500 to-pink-500',
                  'from-green-500 to-emerald-500',
                ];
                return (
                  <div
                    key={index}
                    className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${colors[index]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {interest.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{interest.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/research"
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-500 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative">
                  <FaFlask className="text-4xl text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    Research
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Learn about my research interests and ongoing projects in neuroimaging and deep learning.
                  </p>
                </div>
              </Link>
              <Link
                href="/publications"
                className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-purple-500 hover:shadow-xl transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative">
                  <FaGraduationCap className="text-4xl text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    Publications
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Browse my published papers, preprints, and manuscripts in preparation.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

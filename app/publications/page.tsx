import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/data/cv-data';
import { FaBook, FaFileAlt, FaSpinner } from 'react-icons/fa';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publications - Junbeom Kwon',
  description: 'Published papers, preprints, and manuscripts in preparation on neuroimaging, deep learning, and fMRI transformers.',
  openGraph: {
    title: 'Publications - Junbeom Kwon',
    description: 'Published papers, preprints, and manuscripts in preparation.',
  },
};

export default function PublicationsPage() {
  const publishedPapers = publications.filter(p => p.type === 'published');
  const preprints = publications.filter(p => p.type === 'preprint');
  const inPreparation = publications.filter(p => p.type === 'in_preparation');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <FaBook className="text-white text-4xl" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Publications
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
                Research contributions in neuroimaging and deep learning
              </p>
            </div>
          </div>
        </section>

        {/* Published Papers Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <FaBook className="text-4xl text-green-600" />
              <h2 className="text-3xl font-bold text-gray-900">Published Papers</h2>
            </div>
            {publishedPapers.length > 0 ? (
              <div className="space-y-6">
                {publishedPapers.map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No published papers yet.</p>
            )}
          </div>
        </section>

        {/* Preprints Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <FaFileAlt className="text-4xl text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900">Preprints</h2>
            </div>
            {preprints.length > 0 ? (
              <div className="space-y-6">
                {preprints.map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No preprints available.</p>
            )}
          </div>
        </section>

        {/* Manuscripts in Preparation Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <FaSpinner className="text-4xl text-yellow-600 animate-spin" />
              <h2 className="text-3xl font-bold text-gray-900">Manuscripts in Preparation</h2>
            </div>
            {inPreparation.length > 0 ? (
              <div className="space-y-6">
                {inPreparation.map((publication) => (
                  <PublicationCard key={publication.id} publication={publication} />
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No manuscripts in preparation.</p>
            )}
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Publication Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {publishedPapers.length}
                </div>
                <div className="text-gray-700">Published Papers</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {preprints.length}
                </div>
                <div className="text-gray-700">Preprints</div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  {inPreparation.length}
                </div>
                <div className="text-gray-700">In Preparation</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

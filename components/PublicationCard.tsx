import { Publication } from '@/data/cv-data';

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const isEqualContributor = publication.authors.includes('*');
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        {publication.title}
      </h3>
      <p className="text-gray-700 mb-3">
        {publication.authors}
        {isEqualContributor && (
          <span className="text-sm text-gray-500 ml-1">* denotes equal contribution</span>
        )}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
        <span className="font-medium">{publication.venue}</span>
        <span>•</span>
        <span>{publication.year}</span>
        {publication.type === 'preprint' && publication.link && (
          <>
            <span>•</span>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              arXiv:{publication.arxivId}
            </a>
          </>
        )}
        {publication.type === 'published' && publication.link && (
          <>
            <span>•</span>
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Link
            </a>
          </>
        )}
      </div>
      {publication.type === 'in_preparation' && (
        <span className="inline-block mt-3 px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
          In Preparation
        </span>
      )}
      {publication.type === 'preprint' && (
        <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
          Preprint
        </span>
      )}
    </div>
  );
}

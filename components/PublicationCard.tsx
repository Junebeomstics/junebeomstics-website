import { Publication } from '@/data/cv-data';

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const isEqualContributor = publication.authors.includes('*');
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className={`text-lg font-semibold mb-2 ${publication.link ? 'text-blue-600 hover:text-blue-800 cursor-pointer' : 'text-gray-900'}`}>
        {publication.link ? (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
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
        {publication.codeLink && (
          <>
            <span>•</span>
            <a
              href={publication.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 underline flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Code
            </a>
          </>
        )}
      </div>
      {publication.type === 'in_preparation' && (
        <div className="mt-3">
          <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
            In Preparation
          </span>
          {publication.presentedAt && (
            <p className="mt-2 text-sm text-gray-600 italic">
              {publication.presentedAt}
            </p>
          )}
        </div>
      )}
      {publication.type === 'preprint' && (
        <span className="inline-block mt-3 px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
          Preprint
        </span>
      )}
    </div>
  );
}

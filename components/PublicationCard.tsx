import { FaGithub } from 'react-icons/fa';
import { Publication } from '@/data/cv-data';

interface PublicationCardProps {
  publication: Publication;
}

/** Authors wrap the site owner in **double asterisks**; split puts those at odd indices. */
function renderAuthors(authors: string) {
  return authors.split('**').map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-fg">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const { title, authors, venue, year, type, link, codeLink, equalContribution, presented } = publication;
  const showYear = type !== 'in_preparation';

  return (
    <article className="grid gap-x-6 gap-y-1 border-t border-line py-5 first:border-t-0 sm:grid-cols-[3.5rem_1fr]">
      <p className="text-[13px] tabular-nums text-subtle sm:pt-0.5">{showYear ? year : ''}</p>
      <div>
        <h3 className="font-sans text-[15px] font-normal leading-snug tracking-normal">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="ilink">
              {title}
              <span aria-hidden="true" className="ml-1">↗</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
          {renderAuthors(authors)}
          {equalContribution && <span className="text-subtle"> (* equal contribution)</span>}
        </p>
        <p className="mt-0.5 text-[13px] italic text-subtle">{venue}</p>

        {(presented || codeLink) && (
          <ul className="mt-2.5 flex flex-wrap gap-1.5">
            {presented?.map((item) => (
              <li
                key={item.label}
                className={`rounded-full px-2.5 py-0.5 text-[12px] ${
                  item.award ? 'bg-accent-soft font-normal text-accent' : 'border border-line text-muted'
                }`}
              >
                {item.award && '★ '}
                {item.label}
              </li>
            ))}
            {codeLink && (
              <li>
                <a
                  href={codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-0.5 text-[12px] text-muted transition-colors hover:border-fg/30 hover:text-fg"
                >
                  <FaGithub aria-hidden="true" /> Code
                </a>
              </li>
            )}
          </ul>
        )}
      </div>
    </article>
  );
}

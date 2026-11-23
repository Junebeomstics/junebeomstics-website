import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import { ResearchProject } from '@/data/cv-data';

interface ProjectCardProps {
  project: ResearchProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="border-t border-line py-8 first:border-t-0 first:pt-2">
      <h3 className="text-[17px] leading-snug">{project.title}</h3>
      <p className="mt-1 text-[13px] text-subtle">
        {project.lab}, {project.period}
      </p>
      <p className="mt-3 max-w-[40rem] text-pretty text-muted">{project.description}</p>

      {project.figure && (
        <figure className="mt-5">
          <a
            href={project.figure.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open figure in full size: ${project.title}`}
            className="block overflow-hidden rounded-md border border-line bg-white p-3 transition-colors hover:border-fg/30"
          >
            <Image
              src={project.figure.src}
              alt={project.figure.alt}
              width={project.figure.width}
              height={project.figure.height}
              sizes="(min-width: 768px) 700px, 100vw"
              unoptimized
              className={`mx-auto h-auto w-full object-contain ${project.figure.tall ? 'max-h-[36rem]' : 'max-h-[24rem]'}`}
            />
          </a>
          <figcaption className="mt-2 text-[12px] text-subtle">{project.figure.credit} Click to enlarge.</figcaption>
        </figure>
      )}

      <ul className="mt-4 space-y-1.5">
        {project.details.map((detail) => (
          <li key={detail} className="flex gap-3 text-[13.5px] leading-relaxed text-muted">
            <span aria-hidden="true" className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-fg/40" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {(project.links || project.tags) && (
        <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px]">
          {project.links?.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="ilink inline-flex items-center gap-1.5">
              {link.label === 'Code' && <FaGithub aria-hidden="true" />}
              {link.label}
              {link.label !== 'Code' && <span aria-hidden="true">↗</span>}
            </a>
          ))}
          {project.tags && <span className="text-subtle">{project.tags.join(' · ')}</span>}
        </p>
      )}
    </article>
  );
}

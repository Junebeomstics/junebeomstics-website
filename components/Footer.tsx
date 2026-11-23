import { personalInfo } from '@/data/cv-data';

export default function Footer() {
  const { links } = personalInfo;

  return (
    <footer id="contact" className="border-t border-line">
      <div className="mx-auto flex w-full max-w-page flex-col gap-3 px-6 py-8 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Junbeom Kwon</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-1">
          <li>
            <a href={`mailto:${personalInfo.email}`} className="ilink">Email</a>
          </li>
          <li>
            <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="ilink">Google Scholar</a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="ilink">GitHub</a>
          </li>
          <li>
            <a href="/CV-JunbeomKwon.pdf" download="Junbeom-Kwon-CV.pdf" className="ilink">CV (PDF)</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

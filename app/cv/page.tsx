import type { Metadata } from 'next';
import Link from 'next/link';
import { FaFilePdf } from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import EntryList from '@/components/EntryList';
import { awardGroups, education, positions, posters, service, showcases, talks, teaching } from '@/data/cv-data';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Education, research positions, honors and awards, talks, posters, teaching, and service.',
  openGraph: {
    title: 'CV | Junbeom Kwon',
    description: 'Education, research positions, honors and awards, talks, posters, teaching, and service.',
  },
};

const Gutter = ({ children }: { children: React.ReactNode }) => (
  <li className="grid gap-x-6 gap-y-0.5 border-t border-line py-3 first:border-t-0 sm:grid-cols-[7rem_1fr]">{children}</li>
);

export default function CvPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="mx-auto w-full max-w-page flex-grow px-6 pb-20 pt-10">
        <PageHeader
          title="CV"
          action={
            <a href="/CV-JunbeomKwon.pdf" download="Junbeom-Kwon-CV.pdf" className="ilink inline-flex items-center gap-1.5 text-[13.5px]">
              <FaFilePdf aria-hidden="true" /> Download PDF
            </a>
          }
        />
        <p className="mt-3 text-muted">
          For papers and preprints, see{' '}
          <Link href="/publications" className="ilink">Publications</Link>.
        </p>

        <Section title="Education">
          <ul>
            {education.map((edu) => (
              <Gutter key={edu.degree}>
                <p className="text-[13px] tabular-nums text-subtle">{edu.period}</p>
                <div>
                  <p className="font-normal text-fg">{edu.degree}</p>
                  <p className="text-muted">
                    {edu.institution}, {edu.location}
                  </p>
                  {edu.advisor && <p className="text-[13.5px] text-muted">Advisor: {edu.advisor}</p>}
                  {edu.thesis && <p className="text-[13.5px] text-muted">Thesis: {edu.thesis}</p>}
                  {edu.gpa && <p className="text-[13.5px] text-subtle">GPA {edu.gpa}</p>}
                </div>
              </Gutter>
            ))}
          </ul>
        </Section>

        <Section title="Research positions">
          <ul>
            {positions.map((pos) => (
              <Gutter key={`${pos.role}-${pos.period}-${pos.organization}`}>
                <p className="text-[13px] tabular-nums text-subtle">{pos.period}</p>
                <div>
                  <p className="font-normal text-fg">{pos.role}</p>
                  <p className="text-muted">{pos.organization}</p>
                  {pos.summary && <p className="text-[13.5px] text-muted">{pos.summary}</p>}
                </div>
              </Gutter>
            ))}
          </ul>
        </Section>

        <Section title="Honors and awards">
          <div className="space-y-6">
            {awardGroups.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-1 font-sans text-[13px] font-normal uppercase tracking-wider text-subtle">{group.heading}</h3>
                <ul>
                  {group.items.map((item) => (
                    <Gutter key={`${item.date}-${item.title}`}>
                      <p className="text-[13px] tabular-nums text-subtle">{item.date}</p>
                      <p className="text-muted">
                        <span className="font-normal text-fg">{item.title}</span>, {item.organization}
                      </p>
                    </Gutter>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Talks">
          <EntryList entries={talks} />
        </Section>

        <Section title="Tool showcases">
          <EntryList entries={showcases} />
        </Section>

        <Section title="Conference posters">
          <EntryList entries={posters} />
        </Section>

        <Section title="Teaching">
          <ul>
            {teaching.map((course) => (
              <Gutter key={`${course.term}-${course.course}`}>
                <p className="text-[13px] text-subtle">{course.term}</p>
                <div>
                  <p className="font-normal text-fg">{course.course}</p>
                  <p className="text-muted">
                    {course.role}, {course.institution}
                  </p>
                  {course.description && <p className="text-[13.5px] text-muted">{course.description}</p>}
                </div>
              </Gutter>
            ))}
          </ul>
        </Section>

        <Section title="Service">
          <div className="space-y-6">
            {service.map((group) => (
              <div key={group.heading}>
                <h3 className="mb-1 font-sans text-[13px] font-normal uppercase tracking-wider text-subtle">{group.heading}</h3>
                <EntryList entries={group.items} />
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

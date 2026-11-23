import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import { researchInterests, researchProjects } from '@/data/cv-data';

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research interests and projects: generalizable deep learning for neuroimaging, white matter connectivity, agentic AI for neuroimaging workflows, and fMRI foundation models.',
  openGraph: {
    title: 'Research | Junbeom Kwon',
    description: 'Generalizable deep learning for neuroimaging, white matter connectivity, and agentic AI.',
  },
};

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="mx-auto w-full max-w-page flex-grow px-6 pb-20 pt-10">
        <PageHeader
          title="Research"
          lead="I develop models and tools that link brain structure to function, and I check whether they still work on data they have never seen."
        />

        <Section title="Interests">
          <dl className="space-y-5">
            {researchInterests.map((interest) => (
              <div key={interest.title}>
                <dt className="font-normal text-fg">{interest.title}</dt>
                <dd className="mt-0.5 max-w-[40rem] text-pretty text-muted">{interest.description}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="Selected projects">
          {researchProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Section>
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Section from '@/components/Section';
import PublicationCard from '@/components/PublicationCard';
import { publications } from '@/data/cv-data';

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Published papers, preprints, and manuscripts in preparation on neuroimaging, deep learning, tractography, and fMRI foundation models.',
  openGraph: {
    title: 'Publications | Junbeom Kwon',
    description: 'Published papers, preprints, and manuscripts in preparation.',
  },
};

export default function PublicationsPage() {
  const groups = [
    { title: 'Published', items: publications.filter((p) => p.type === 'published') },
    { title: 'Preprints and under review', items: publications.filter((p) => p.type === 'preprint') },
    { title: 'In preparation', items: publications.filter((p) => p.type === 'in_preparation') },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="mx-auto w-full max-w-page flex-grow px-6 pb-20 pt-10">
        <PageHeader title="Publications" lead="My name is in bold. * denotes equal contribution." />
        {groups.map((group) => (
          <Section key={group.title} title={group.title}>
            {group.items.map((publication) => (
              <PublicationCard key={publication.id} publication={publication} />
            ))}
          </Section>
        ))}
      </main>
      <Footer />
    </div>
  );
}

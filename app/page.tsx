import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileImage from '@/components/ProfileImage';
import { news, personalInfo } from '@/data/cv-data';

const delay = (ms: number) => ({ '--delay': `${ms}ms` }) as React.CSSProperties;

export default function Home() {
  const { links } = personalInfo;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main" className="mx-auto w-full max-w-page flex-grow px-6 pb-20 pt-10">
        <div className="reveal flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
          <ProfileImage className="shrink-0" />
          <div>
            <h1 className="text-[26px] leading-tight">Junbeom Kwon</h1>
            <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-[14px]">
              <li><a href={`mailto:${personalInfo.email}`} className="ilink">Email</a></li>
              <li><a href={links.scholar} target="_blank" rel="noopener noreferrer" className="ilink">Google Scholar</a></li>
              <li><a href={links.github} target="_blank" rel="noopener noreferrer" className="ilink">GitHub</a></li>
              <li><a href="/CV-JunbeomKwon.pdf" download="Junbeom-Kwon-CV.pdf" className="ilink">CV (PDF)</a></li>
            </ul>
          </div>
        </div>

        <div className="reveal mt-9 max-w-[40rem] space-y-4 text-pretty" style={delay(60)}>
          <p>
            I&rsquo;m a Ph.D. student in Psychology at{' '}
            <a href="https://www.utexas.edu" className="ilink">The University of Texas at Austin</a> and a member of the{' '}
            <a href="https://pestillilab.github.io/" className="ilink">Pestilli Lab</a>, where I work with Prof. Franco Pestilli.
          </p>
          <p>
            I use deep learning models, AI agents, and neuroimaging data to understand how brain structure and function give
            rise to behavior, cognition, and perception. Much of my work asks whether deep learning models still hold up on
            datasets they have never seen, starting with a benchmark of white matter tract segmentation. I also study how white
            matter connectivity relates to visual field maps and perceptual asymmetries.
          </p>
          <p>
            I build open, reproducible neuroimaging tools on{' '}
            <a href="https://brainlife.io/about/" className="ilink">brainlife.io</a>. One of them is BIDS2AI, an agentic framework
            that turns neuroimaging datasets into AI-ready deep learning workflows.
          </p>
          <p>
            Before Austin, I did my M.A. in Psychology at{' '}
            <a href="https://en.snu.ac.kr" className="ilink">Seoul National University</a> with Prof. Jiook Cha at the{' '}
            <a href="https://www.connectomelab.com/en/" className="ilink">Connectome Lab</a>, where I worked on{' '}
            <a href="https://arxiv.org/abs/2307.05916" className="ilink">SwiFT</a>, a Swin 4D fMRI Transformer (NeurIPS
            2023). I received my B.A. in Psychology and B.S. in Big Data Science from Sogang University.
          </p>
          <p>
            If you want to talk about research,{' '}
            <a href={`mailto:${personalInfo.email}`} className="ilink">email me</a>.
          </p>
        </div>

        <hr className="my-12 border-line" />

        <section className="reveal" style={delay(180)} aria-labelledby="news">
          <h2 id="news" className="mb-3 text-[18px]">News</h2>
          <ul>
            {news.map((item) => (
              <li key={`${item.date}-${item.text}`} className="grid gap-x-6 gap-y-0.5 py-2 sm:grid-cols-[5.5rem_1fr]">
                <p className="text-[13px] tabular-nums text-subtle sm:pt-px">{item.date}</p>
                <p className="text-pretty">
                  {item.text}
                  {item.href && (
                    <>
                      {' '}
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="ilink">
                        ({item.linkLabel ?? 'link'})
                      </a>
                    </>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

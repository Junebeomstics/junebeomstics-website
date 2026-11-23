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
        <h1 className="sr-only">Junbeom Kwon</h1>

        <div className="reveal">
          <ProfileImage />
        </div>

        <div className="reveal mt-7 max-w-[40rem] space-y-4 text-pretty" style={delay(60)}>
          <p>
            Hi, I&rsquo;m Junbeom Kwon. I&rsquo;m a Ph.D. student in Psychology at{' '}
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
          <p>Feel free to reach out if you want to chat about research.</p>
        </div>

        <p className="reveal mt-5 flex flex-wrap gap-x-5 gap-y-1 text-[13.5px]" style={delay(120)}>
          <a href={`mailto:${personalInfo.email}`} className="ilink">Email</a>
          <a href={links.scholar} target="_blank" rel="noopener noreferrer" className="ilink">Google Scholar</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="ilink">GitHub</a>
          <a href="/CV-JunbeomKwon.pdf" download="Junbeom-Kwon-CV.pdf" className="ilink">CV (PDF)</a>
        </p>

        <hr className="mb-10 mt-10 border-line" />

        <section className="reveal" style={delay(180)} aria-labelledby="news">
          <h2 id="news" className="mb-4 text-[18px]">News</h2>
          <ul>
            {news.map((item) => (
              <li key={`${item.date}-${item.text}`} className="grid gap-x-6 py-1.5 sm:grid-cols-[6.5rem_1fr]">
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

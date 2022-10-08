import Head from "next/head";
import Link from "next/link";
// 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
// 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

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to{" "}
          <Link href="https://nextjs.org">
            <a target="_blank"> Nas.js!</a>
          </Link>
        </h1>
        <div style={{ padding: "0 10%" }}>
          <p className="description">
            Hello Nas! In our zoom meeting we'll deploy a{" "}
            <code style={{ color: "red" }}>Next.js</code> page like this one so
            you can play with & edit as you wish 😃
          </p>

          <p className="description">
            Remember opening a {""}
            <Link href="https://www.netlify.com/">
              <a target="_blank" rel="noreferrer">
                <strong style={{ color: "blue" }}>Netlify account</strong>
              </a>
            </Link>{" "}
            to host your website, open a <strong>personal</strong>{" "}
            <Link href="https://github.com">
              <a target="_blank" rel="noreferrer">
                <strong style={{ color: "blue" }}>Github account</strong>
              </a>
            </Link>{" "}
            (in case you dont have a non-work-related one already) and then
            start playing around with{" "}
            <code style={{ color: "red" }}>Next.js</code>,{" "}
            <code style={{ color: "red" }}>React-Bootstrap</code> and whatever
            other technologies you wanna dive in 🤘🏽! Dont wanna do a static
            site?{" "}
            <a
              href="link"
              target="_blank"
              rel="noreferrer"
              style={{ color: "blue" }}
            >
              <strong>Here you can find</strong>
            </a>{" "}
            a bunch of free APIs you can take ideas from/work with. Me and d
            team are gonna miss you, a LOT, so dont be a stranger!
          </p>

          <p className="description">
            And pay no-mind at the cards below, they are part of the template
            that all <code style={{ color: "red" }}>Next.js</code>' projects
            start with, and I am feeling too lazy to delete them 😋. Until soon
            and... enjoy your uncle/family meetings 🙌🏽 ❤️ !
          </p>
        </div>

        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="card"
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

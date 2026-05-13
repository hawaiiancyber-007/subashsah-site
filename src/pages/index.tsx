import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Subash Sah</title>
      </Head>
      <div className="container">
        <Header />
        <main>
          <h1>Subash Sah</h1>
          <p>Modern web presence for business and digital growth.</p>
          <a href="mailto:hello@subashsah.com">Contact Me</a>
        </main>
        <Footer />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          background: linear-gradient(to bottom, #1ca9c9, #0f172a);
          color: #e2e8f0;
          font-family: Arial, sans-serif;
        }
        a {
          margin-top: 20px;
          padding: 12px 24px;
          background: #3b82f6;
          color: white;
          text-decoration: none;
          border-radius: 8px;
        }
        a:hover {
          background: #2563eb;
        }
      `}</style>
    </>
  );
}

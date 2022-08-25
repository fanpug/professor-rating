import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio</title>
        <meta name="description" content="Home page for our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a Opinion Maestra!
        </h1>

        <p className={styles.description}>
          Da clic aqui para buscar a quien podria ser tu futuro profesor:
        </p>

        <div className={styles.grid}>
          <Link href="/search">
            <a className={styles.card}>
              <h2>Buscar</h2>
            </a>
          </Link>
        </div>

        <h2 className={styles.title2}>
          Que es Opinion Maestra?
        </h2>

        <p className={styles.description}>
          Tu pagina para saber si un profesor es el adecuado para ti.

          Un lugar donde puedes opinar libremente sobre tus profesores, o averiguar que es lo que los demas piensan de ellos.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

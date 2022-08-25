import { app, database } from '../firebaseConfig';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';
import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/search.module.css';
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Search() {
  const databaseRef = collection(database, 'teachers');
  const [fireData, setFireData] = useState([]);
  const getData = async () => {
    await getDocs(databaseRef)
      .then((response) => {
        setFireData(response.docs.map((data) => {
          return { ...data.data(), id: data.id };
        }));
      });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Search</title>
        <meta name="description" content="Search page for our website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.bodyPage}>
        <h1> Profesores </h1>

        <div>
          {fireData.map((data) => {
            return (
              <div className={styles.flex} key=''>
                <h3>
                  <Link href={'/teachers/' + data.id}>
                    <a>
                      {data.name}
                    </a>
                  </Link>
                </h3>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  );

}

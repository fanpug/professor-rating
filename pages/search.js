import { db } from "../firebase/firebase.init";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import Link from 'next/link';
import styles from '../styles/search.module.css'

export default function Search() {
  const [profs, profsloading, profserror] = useCollection(
    db.collection("teachers"),
    {}
  );

  return (
    <div className={styles.bodyPage}>
      <h1> Profesores </h1>
      <div className={styles.teachers}>
        <h2>
        {profserror && <strong>Error: {JSON.stringify(profserror)}</strong>}
        {profsloading && <span>Collection: Loading...</span>}
        <ul>
          {profs && profs.docs.map(doc => (
            <li key={doc.data().id}>
              <Link href={'/teachers/' + doc.id}>
                <a>
                  {doc.data().name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        </h2>
      </div>
    </div>

  );

}

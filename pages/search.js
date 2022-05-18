import { db } from "../firebase/firebase.init";
import { onSnapshot, collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";

import Link from 'next/link';

import styles from '../styles/Home.module.css'

export default function Search() {
  const [profs, profsloading, profserror] = useCollection(
    db.collection("teachers"),
    {}
  );

  return (
    <div div className={styles.container}>
      <h1> Profesores </h1>
      <div>
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
      </div>
    </div>

  )

}

import styles from '../../styles/teachers.module.css'
import Head from 'next/head'
import Link from 'next/link'

import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from "../../firebase/firebase.init";

export const getStaticPaths = async () => {
    const snapshot = await getDocs(collection(db, 'teachers'));
    const paths = snapshot.docs.map(doc => {
        return {
            params: { id: doc.id.toString() }
        }
    });

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const docRef = doc(db, 'teachers', id);
    const docSnap = await getDoc(docRef);

    return {
        props: { teacherProps: JSON.stringify(docSnap.data()) }
    }
}

const TeacherProfile = ({ teacherProps }) => {
    const teacher = JSON.parse(teacherProps);
    return (
        <div className={styles.fullPage}>
            <Head>
                <title>
                    Teachers Profile
                </title>
            </Head>
            <div id="body">
                <main className={styles.teacherMain}>
                    <div className={styles.teacherProfile}>
                        <h2>{teacher.name}</h2>
                        <h4>{teacher.subjects}</h4>
                        <h4 id="school">Facultad</h4>
                    </div>
                    <div className={styles.fastOpinions}>
                        <h3>Opiniones Rapidas</h3>
                        <p>Profesor barco: 87%</p>
                        <p>Examenes Dificiles: 40%</p>
                        <p>Enseña bien: 10%</p>
                        <div className="profilePicture">laFoto</div>
                    </div>
                    <div id={styles.recentOptions}>
                        <h1>Opiniones Recientes</h1>
                        <h2>Fitlrar Por: </h2>
                        <div className="teachersOpinions">
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                        </div>
                    </div>
                    <div id={styles.writeOpinion}>
                        <h2>Escribir opinion</h2>
                        <p>Blanck space</p>
                        <Link href="/search">
                            <button className="btn-blue">Volver a la pagina de busqueda</button>
                        </Link>
                    </div>

                </main>
            </div>
        </div>
    );
}

export default TeacherProfile
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
            <div className={styles.body}>
                <main className={styles.teacherMain}>
                    <div className={styles.teacherBox}>
                        <div className={styles.teacherColumn}>
                            <h2 className={styles.teacherName}>{teacher.name}</h2>
                            <div className={styles.teacherProfile}>
                                <h4 className={styles.subject}>{teacher.subjects}</h4>
                                <h4 className={styles.school}>UACH Ingenieria</h4>
                            </div>
                        </div>
                        <div className={styles.fastOpinions}>
                            <h3>Opiniones Rapidas</h3>
                            <p>Profesor barco: 87%</p>
                            <p>Examenes Dificiles: 40%</p>
                            <p>Enseña bien: 10%</p>
                        </div>
                    </div>
                    
                    <div id={styles.recentOptions}>
                        <h1>Opiniones Recientes</h1>
                        <h2>Filtrar Por: </h2>
                        <div className="teachersOpinions">
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                            <p>Nombre usuario: </p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, dicta officia odit laborum veritatis porro unde quidem aliquam sint ipsam tempore dolorem reprehenderit id quam distinctio nemo! Ratione, nobis voluptatem!</p>
                        </div>
                    </div>
                    <div className={styles.writeOpinion}>
                        <h2>Escribir opinion</h2>
                        <form action="/send-data-here" method="post">    
                            <textarea id="userOpinion" name="userOpinion"/>
                            <button type="submit">Publicar Opinion</button>
                        </form>
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
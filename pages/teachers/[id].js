import styles from '../../styles/teachers.module.css';
import Head from 'next/head';
import Link from 'next/link';

import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { database } from "../../firebaseConfig";
import Navbar from '../../components/Navbar';

export const getStaticPaths = async () => {
    const snapshot = await getDocs(collection(database, 'teachers'));
    const paths = snapshot.docs.map(doc => {
        return {
            params: { id: doc.id.toString() }
        }
    });

    return { paths, fallback: false }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const docRef = doc(database, 'teachers', id);
    const docSnap = await getDoc(docRef);

    return {
        props: { teacherProps: JSON.stringify(docSnap.data()) }
    }
}



const TeacherProfile = ({ teacherProps }) => {
    const teacher = JSON.parse(teacherProps);
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Teachers Profile
                </title>
            </Head>
            <Navbar />
            <div className={styles.fullPage}>
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
                            <p>Buen profe: 87%</p>
                            <p>Examenes Dificiles: 40%</p>
                            <p>Enseña bien: 68%</p>
                        </div>
                    </div>

                    <div className={styles.opinions}>

                        <div className={styles.headerOpinions}>
                            <h1>Opiniones Recientes</h1>
                            <h2>Filtrar por: </h2>
                            <select name="opinionsFilter" className={styles.opinionsFilter}>
                                <option value="recents">Recientes</option>
                                <option value="featured">Destacadas</option>
                            </select>
                        </div>
                        <div className={styles.recentOpinions}>
                            <p className={styles.usernameText}>Javier Gonzales: </p>
                            <p>Muy buen profe, se nota que le gusta la materia porque enseña y te explica hasta el más minímo detalle que no hayas entendido.</p>
                            <p className={styles.usernameText}>Juana Gabriela: </p>
                            <p>Me explicaba todas las dudas que tenia y me tenía paciencia jajaja</p>
                            <p className={styles.usernameText}>Humberto Navarro: </p>
                            <p>Es buen profe nomas que sus examenes estaban dificiles, por lo que tenia que ponerme a estudiar desde una semana antes porque nomas no se me pegaba nada. Ayudaaaaaa!!!!</p>
                        </div>
                    </div>
                    <div className={styles.writeOpinion}>
                        <h2>Escribir opinion</h2>
                        <form action="/send-data-here" method="post">
                            <textarea id="userOpinion" name="userOpinion" />
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
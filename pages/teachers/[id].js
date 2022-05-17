import styles from '../../styles/teachers.module.css'
import Head from 'next/head'

const TeacherProfile = () => {
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
                        <h2 id="teacherName">Nombre del Profesor</h2>
                        <h4 id="subject">Materia</h4>
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
                    </div>
                </main>
            </div>
        </div>
    );
}

export default TeacherProfile
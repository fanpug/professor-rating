import styles from '../styles/Home.module.css';
import Head from 'next/head';
import { app } from '../firebaseConfig';
import {
    getAuth,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((response) => {
                console.log(response.user)
                sessionStorage.setItem('Token', response.user.accessToken);
                router.push('/')
            })
            .catch(err => {
                alert('Cannot Log in')
            })
    }

    const signUpWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((response) => {
                sessionStorage.setItem('Token', response.user.accessToken)
                console.log(response.user)
                router.push('/')
            })
    }

    useEffect(() => {
        let token = sessionStorage.getItem('Token')

        if (token) {
            router.push('/')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.container}>
            <Head>
                <title>Login</title>
                <meta name="description" content="Login page for our website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1>Login</h1>

                <input
                    placeholder='Correo Electrónico'
                    className={styles.inputBox}
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    type='email'
                />
                <input
                    placeholder='Contraseña'
                    className={styles.inputBox}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    type='password'
                />

                <button
                    className={styles.button}
                    onClick={signUp}
                >Login</button>
                <br />
                <button
                    className={styles.googleAlt}
                    onClick={signUpWithGoogle}>
                    Login with Google
                </button>
            </main>
        </div>
    )
}

export default Login;
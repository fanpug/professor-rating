import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '../firebase/context';
import { auth } from '../firebase/firebase.init';

// Top navbar
export default function Navbar() {
    const { user } = useContext(UserContext);

    const router = useRouter();

    const signOut = () => {
        auth.signOut();
        router.reload();
    }

    const nameSplit = (firstName) => {
        const myArray = firstName.split(" ");
        firstName = myArray[0];
        const str = firstName.toLowerCase();
        const str2 = str.charAt(0).toUpperCase() + str.slice(1);
        return str2;
    }

    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">LOGO</button>
                    </Link>
                </li>

                {/* user is signed-in */}
                {user && (
                    <>
                        <li className="push-left">
                            <button onClick={signOut}>Cerrar Sesion</button>
                        </li>
                        <li>
                            <p>Hola, {nameSplit(user.displayName)}!</p>
                        </li>
                        <li>
                            <img src={user.photoURL || '/generic.png'} />
                        </li>
                    </>
                )}

                {/* user is not signed OR has not created user */}
                {!user && (
                    <>
                        <li className='push-left'>
                            <Link href="/login">
                                <button className="btn-blue">Registrate</button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <button className="btn-blue">Inicia Sesion</button>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
import { auth, googleAuthProvider } from '../firebase/firebase.init';
import { UserContext } from '../firebase/context';

import { useContext } from 'react';

import Link from 'next/link'

export default function Enter(props) {
  const { user, username } = useContext(UserContext);

  // If user is signed in, show sign out button. Else show sign in button.
  return (
    <main className='container'>
      {user ? <SignOutButton /> : <SignInButton />}

      <br />

      <Link href="/">
        <a>
          <h3>Volver a inicio</h3>
        </a>
      </Link>
    </main>
  );
}

// Sign in with Google button
function SignInButton() {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={'/google.png'} width="30" height="30" /> Inicia sesion con Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return (
    <>
      <h1>Hola {auth.currentUser.displayName}!</h1>
    </>
  );

}

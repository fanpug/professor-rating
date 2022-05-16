import { auth, googleAuthProvider } from '../firebase/firebaseConfig';
import Link from 'next/link'

export default function Enter(props) {
  const user = null;
  const username = null;

  // 1. user signed out <SignInButton />
  // 2. user signed in, but missing username <UsernameForm />
  // 3. user signed in, has username <SignOutButton />
  return (
    <main className='container'>
      {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}

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
      <img src={'/google.png'} width="42" height="42" /> Iniciar sesion con Google
    </button>
  );
}

// Sign out button
function SignOutButton() {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

function UsernameForm() {
  return null;
}
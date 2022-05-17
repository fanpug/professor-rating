import '../styles/globals.css'
import Navbar from '../components/Navbar';

import { UserContext } from '../firebase/context';
import { useUserData } from '../firebase/hooks';

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
    <Navbar />
    <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp

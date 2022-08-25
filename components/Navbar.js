import Link from 'next/link';

// Top navbar
export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link href="/">
                        <button className="btn-logo">LOGO</button>
                    </Link>
                </li>

                <li className='push-left'>
                    <Link href="/register">
                        <button className="btn-blue">Regístrate</button>
                    </Link>
                </li>
                <li>
                    <Link href="/login">
                        <button className="btn-blue">Inicia Sesión</button>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}
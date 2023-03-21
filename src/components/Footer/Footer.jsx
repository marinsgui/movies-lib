import style from '../../styles/Footer.module.css';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={style.footer}>
            <nav>
                <ul>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaTwitter />
                    </li>
                </ul>
            </nav>
        </footer>
    )
}
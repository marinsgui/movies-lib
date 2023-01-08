import './styles.css';

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
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
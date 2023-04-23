import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-purple-800 static bottom-0">
      <nav>
        <ul className="list-none h-16 flex justify-center items-center gap-5">
          <li>
            <FaFacebook className="text-white h-6 w-6 transition-all hover:scale-125 cursor-pointer" />
          </li>
          <li>
            <FaInstagram className="text-white h-6 w-6 transition-all hover:scale-125 cursor-pointer" />
          </li>
          <li>
            <FaTwitter className="text-white h-6 w-6 transition-all hover:scale-125 cursor-pointer" />
          </li>
        </ul>
      </nav>
    </footer>
  );
}

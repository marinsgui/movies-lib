import { FaBars } from "react-icons/fa";

export default function HamburgerMenu({ className, handleClick }) {
  return <FaBars className={className} onClick={handleClick} />;
}

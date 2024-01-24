import Link from "next/link";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <ul className="flex items-center gap-8 text-blue-500">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <MenuButton />
    </div>
  );
}

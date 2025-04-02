import Image from "next/image";
import Link from "next/link";
import { FaBell } from "react-icons/fa";
import Notificacoes from "./notificacoes";

interface NavBarProps {
  active: "HOME" | "DESCUBRA" | "LISTAS";
}

export default function Header({ active }: NavBarProps) {
  const activeClass = "border-b-2 border-white pb-1";

  const links = [
    { text: "HOME", href: "/" },
    { text: "DESCUBRA", href: "/descubra" },
    { text: "LISTAS", href: "/listas" },
  ];

  return (
    <nav className="flex justify-between items-center bg-stone-800 p-6">
      <Image src="/listA.png" alt="Logo" width={100} height={100} />

      <ul className="flex gap-20">
        {links.map((link) => (
          <li key={link.text} className={active === link.text ? activeClass : ""}>
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-8">

        <Notificacoes/>
        <Image
          className="size-12 rounded-full"
          src="/foto_samir.png"
          alt="Avatar"
          width={48}
          height={48}
        />
        </div>
    </nav>
  );
}
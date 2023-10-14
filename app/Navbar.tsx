import Link from "next/link";
import { AiOutlineIssuesClose } from "react-icons/ai";
const Navbar = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Issues",
      href: "/issues",
    },
    {
      label: "About",
      href: "/about",
    },
  ];

  return (
    <header className="border-b ">
      <nav className="flex space-x-6 p-4  max-w-6xl mx-auto items-center">
        <Link
          className="text-rose-600 font-bold text-lg flex gap-1 items-center"
          href="/"
        >
          <AiOutlineIssuesClose size={24} />
          TrackerX
        </Link>
        <ul className="flex space-x-6 ">
          {links.map((link) => (
            <Link
              key={link.label}
              className="text-zinc-500 hover:text-zinc-800 transition-colors capitalize"
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

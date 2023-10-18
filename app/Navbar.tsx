"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineIssuesClose } from "react-icons/ai";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Box } from "@radix-ui/themes";

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
      href: "/issues/list",
    },
  ];

  const path = usePathname();
  const { status, data: session } = useSession();

  return (
    <header className="border-b h-[60px] bg-white sticky z-50 top-0">
      <nav className="flex space-x-6 p-4  max-w-7xl mx-auto items-center">
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
              className={classNames({
                "text-zinc-900 ": path === link.href,
                "text-zinc-500 ": path !== link.href,
                "hover:text-zinc-800 transition-colors capitalize font-medium":
                  true,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <Box style={{ marginLeft: "auto" }}>
          {status === "authenticated" && (
            <Link href="/api/auth/signout">Log out</Link>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </Box>
      </nav>
    </header>
  );
};

export default Navbar;

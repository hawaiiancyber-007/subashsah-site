"use client";

import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/military", label: "Military" },
  { href: "/fun_facts", label: "Fun Facts" },
  { href: "/hobbies", label: "Hobbies" }
];

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        {/* Clickable Top-Left Corner Logo - Linked to Home */}
        <Link href="/" className="logo">
          SUBASH SAH
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
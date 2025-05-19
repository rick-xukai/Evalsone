"use client";

import Link from "next/link";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-center py-4">
        <ul className="flex space-x-12">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="text-gray-700 font-semibold text-lg transition-colors duration-200 relative hover:text-blue-600"
              >
                <span className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full hover:after:h-0.5">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
} 
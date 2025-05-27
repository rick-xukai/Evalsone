'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import TwitterLogo from '@/static/twitter.jpg';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#community' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#faq' },
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [isConsolexHost, setIsConsolexHost] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.location.host === 'consolex.ink';
    }
    return false;
  });

  useEffect(() => {
    const host = window.location.host;
    setIsConsolexHost(host === 'consolex.ink');
  }, []);

  const openTwitterLink = () => {
    if (isConsolexHost) {
      window.open('https://x.com/ConsoleX_Mcp', '_blank');
    } else {
      window.open('https://x.com/EvalsOneAi', '_blank');
    }
  };

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-blue-300 shadow-md">
            {/* AI芯片风格SVG */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="4"
                width="20"
                height="20"
                rx="6"
                fill="url(#paint0_linear)"
              />
              <rect
                x="9"
                y="9"
                width="10"
                height="10"
                rx="3"
                fill="#fff"
                fillOpacity="0.9"
              />
              <circle cx="14" cy="14" r="2.5" fill="#38bdf8" />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="4"
                  y1="4"
                  x2="24"
                  y2="24"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3b82f6" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-tr from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-cyan-600 transition-colors duration-300">
            {isConsolexHost ? 'Consolex' : 'EvalsOne'}
          </span>
          <span style={{ marginLeft: '10px' }}>
            <img
              onClick={openTwitterLink}
              style={{ borderRadius: '50%' }}
              src={TwitterLogo.src}
              alt="Twitter"
              className="w-8 h-8"
            />
          </span>
        </Link>
        {/* Nav */}
        {isHome && (
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
        )}
      </div>
    </nav>
  );
}

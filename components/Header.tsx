'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/research', label: 'Research' },
  { href: '/publications', label: 'Publications' },
  { href: '/cv', label: 'CV' },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="border-b border-line">
      <div className="mx-auto flex w-full max-w-page flex-col items-center gap-1 px-6 py-3 sm:flex-row sm:justify-between sm:gap-6">
        <Link href="/" className="font-display text-[22px] font-semibold leading-tight tracking-tight text-fg">
          Junbeom Kwon
          <span className="ml-2.5 hidden font-sans text-[70%] font-light tracking-normal text-muted sm:inline">Psychology Ph.D. @ UT Austin</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex items-center gap-5 text-[13.5px] sm:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  className={`underline-offset-[6px] decoration-accent hover:underline hover:decoration-wavy ${
                    isActive(link.href) ? 'font-normal underline decoration-1' : 'font-light'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

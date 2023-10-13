/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from './Links';
import { useRouter } from 'next/router';

const Full = () => {
  const router = useRouter();
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 shadow-md bg-white/50 fixed top-0 z-50">
      <Link href="/">
        <img
          src="/images/logo.png"
          alt="Casagrande Granite and Marble logo"
          height="50"
          width="125"
        />
      </Link>
      <div>
        <ul className="flex justify-between items-center gap-4 text-orange-500 font-[Inter]">
          {navLinks.map(links => (
            <li key={links.name}>
              <Link
                href={links.url}
                className={router.pathname === links.url ? 'active' : ''}
              >
                {links.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Full;

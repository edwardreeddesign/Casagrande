/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { navLinks } from './Links';

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full flex flex-col z-50 shadow-shadow2 bg-white/90 py-2">
      <div className="flex justify-between items-center px-4">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Casagrande Granite and Marble logo"
            height="50"
            width="125"
          />
        </Link>
        <div className="py-4 cursor-pointer z-50" onClick={toggle}>
          <div className={`line ${isOpen ? 'line1-open' : ''}`} />
          <div className={`line line2 ${isOpen ? 'line2-open' : ''}`} />
          <div className={`line ${isOpen ? 'line3-open' : ''}`} />
        </div>
        <div
          className={`fixed top-0 left-0 
         ${
           isOpen ? 'opacity-100 h-screen' : 'opacity-0 h-0 pointer-events-none'
         } w-full bg-dark1/90 p-0 pt-8 pb-16 m-0 z-40 duration-300`}
        >
          <ul className="h-full flex flex-col justify-around items-center relative pt-10">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className={`${
                    router.pathname === link.url ? 'mobile-active' : ''
                  } text-light2 text-2xl tracking-wide cursor-pointer	`}
                  onClick={toggle}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Mobile;

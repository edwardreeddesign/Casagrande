/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { navLinks } from '../header/Links';
import { socialLinks } from './Links';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 shadow-shadow1 py-4">
      <h3 className="text-orange-400">Casagrande Granite and Marble</h3>
      <div className="flex justify-between items-center gap-4">
        {socialLinks.map(link => (
          <img
            src={link.img}
            alt={link.name}
            key={link.name}
            className=" h-6 hover:scale-110 transition-all duration-200"
          />
        ))}
      </div>
      <ul className="flex justify-between items-center gap-4">
        {navLinks.map(link => (
          <li key={link.name} className="">
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-center items-center">
        <p className="font-[Poppins] text-xs">
          © 2023 Casagrande Granite and Marble Ltd
        </p>
        <p className="font-[cursive] text-[6px]">
          Designed by Edward Reed Designs
        </p>
      </div>
    </footer>
  );
};
export default Footer;

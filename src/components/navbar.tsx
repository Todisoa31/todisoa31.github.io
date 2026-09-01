'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const email = 'toudisoua@gmail.com';

const links = [
  { id: 'about', label: 'À propos' },
  { id: 'experience', label: 'Expérience' },
  { id: 'skills', label: 'Compétences' },
  { id: 'projects', label: 'Projets' },
  { id: 'case-studies', label: 'Études de cas' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          {/* LOGO */}
          <a
            href="#about"
            className="
              font-bold text-yellow-400
              transition-colors duration-200
              hover:text-yellow-300
            "
          >
            Todisoa.dev
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="
                      text-sm text-gray-300
                      transition-colors duration-200
                      hover:text-white
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              {/* GMAIL */}
              <li>
                <a
                  href={`mailto:${email}`}
                  aria-label="Me contacter par email"
                  title="Me contacter"
                  className="group flex items-center justify-center"
                >
                  <Image
                    src="/icons/gmail.svg"
                    alt="Gmail"
                    width={32}
                    height={32}
                    className="
                      transition-all duration-200
                      group-hover:drop-shadow-[0_0_6px_rgba(234,67,53,0.4)]
                    "
                  />
                </a>
              </li>
            </ul>
          </nav>

          {/* MOBILE */}
          <div className="md:hidden">
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              sx={{ color: 'inherit' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={closeDrawer}
      >
        <nav className="w-64 p-8">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={closeDrawer}
                className="
                  border-b border-black/5 py-4
                  text-gray-800
                  transition-colors
                  hover:text-yellow-500
                "
              >
                {link.label}
              </a>
            ))}

            {/* CONTACT */}
            <a
              href={`mailto:${email}`}
              onClick={closeDrawer}
              className="
                flex items-center gap-3 py-4
                font-medium text-gray-800
                transition-colors
                hover:text-yellow-500
              "
            >
              <Image
                src="/icons/gmail.svg"
                alt="Gmail"
                width={24}
                height={24}
              />

              Contact
            </a>
          </div>
        </nav>
      </Drawer>
    </>
  );
}

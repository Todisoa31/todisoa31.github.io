'use client';

import { Drawer, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { id: 'about', label: 'À propos' },
    { id: 'experience', label: 'Expérience' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'case-studies', label: 'Études de cas' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between p-6">
          <h1 className="text-yellow-400 font-bold">Todisoa.dev</h1>

          <ul className="hidden md:flex gap-8">
            {links.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </header>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div className="w-64 p-8">
          {links.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="block py-4">
              {item.label}
            </a>
          ))}
        </div>
      </Drawer>
    </>
  );
}

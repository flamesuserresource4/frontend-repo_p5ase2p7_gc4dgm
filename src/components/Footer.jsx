import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <div className="flex flex-col items-center gap-2 text-sm text-zinc-500">
        <p>Smarttingo • Product Specification</p>
        <p>© {new Date().getFullYear()} Smarttingo. All rights reserved.</p>
      </div>
    </footer>
  );
}

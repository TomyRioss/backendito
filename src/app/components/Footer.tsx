import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <p className="text-lg">
            Backendito © Todos los derechos reservados
            {' ' + new Date().getFullYear()}
          </p>
        </div>
        <div>
          <p className="text-sm">Email: backendito@gmail.com</p>
          <p className="text-sm">
            Discord:{' '}
            <a
              href="https://discord.gg/xtyPK6Bzvk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              https://discord.gg/xtyPK6Bzvk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

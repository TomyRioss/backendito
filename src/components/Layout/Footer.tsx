import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
} from 'react-icons/fa';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('footer');

  const socialLinks = [
    {
      Icon: FaFacebook,
      href: 'https://www.facebook.com/profile.php?id=61572448772421',
      label: 'Facebook',
    },
    {
      Icon: FaInstagram,
      href: 'https://instagram.com/backendito',
      label: 'Instagram',
    },
    {
      Icon: FaLinkedin,
      href: 'https://linkedin.com/backendito',
      label: 'LinkedIn',
    },
    {
      Icon: FaDiscord,
      href: 'https://discord.gg/xtyPK6Bzvk',
      label: 'Discord',
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-800 py-6 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">Backendito</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} {t('rights')}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Contact & Links */}
          <div className="text-center md:text-right space-y-2">
            <div className="flex items-center justify-center md:justify-end gap-2">
              <FaEnvelope className="text-gray-700 dark:text-gray-300" />
              <a
                href="mailto:backendito@gmail.com"
                className="text-sm hover:text-blue-600 dark:hover:text-blue-400"
              >
                backendito@gmail.com
              </a>
            </div>

            <div className="space-x-4 text-sm">
              <Link
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t('legal.contact')}
              </Link>
              <a
                href="/politicas"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t('legal.politics')}
              </a>
              <a
                href="/terminos"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                {t('legal.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

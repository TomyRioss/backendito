'use client';

import { motion } from 'framer-motion';
import { FiShoppingCart, FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface PlanProps {
  title: string;
  description: string;
  details: Record<string, string>;
  features: Record<string, string>;
  colorScheme?: 'primary' | 'premium' | 'enterprise';
}

const Plan = ({
  title,
  description,
  details,
  features,
  colorScheme = 'primary',
}: PlanProps) => {
  const colors = {
    primary: {
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/20',
      text: 'text-blue-500',
      button: 'bg-blue-600 hover:bg-blue-700',
    },
    premium: {
      bg: 'bg-purple-500/5',
      border: 'border-purple-500/20',
      text: 'text-purple-500',
      button: 'bg-purple-600 hover:bg-purple-700',
    },
    enterprise: {
      bg: 'bg-emerald-500/5',
      border: 'border-emerald-500/20',
      text: 'text-emerald-500',
      button: 'bg-emerald-600 hover:bg-emerald-700',
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'group relative p-8 rounded-2xl border backdrop-blur-lg transition-all duration-300 hover:border-transparent',
        colors[colorScheme].bg,
        colors[colorScheme].border,
      )}
    >
      {/* Se agrega pointer-events-none para que este overlay no capture clics */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <h3
        className={cn(
          'text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
          colors[colorScheme].text,
          colorScheme === 'primary'
            ? 'from-blue-400 to-blue-600'
            : colorScheme === 'premium'
            ? 'from-purple-400 to-purple-600'
            : 'from-emerald-400 to-emerald-600',
        )}
      >
        {title}
      </h3>

      <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
        {description}
      </p>

      <Separator className="my-6 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

      <div className="space-y-4">
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
          Características Principales
        </h4>
        <ul className="space-y-3">
          {Object.entries(details).map(([key, value]) => (
            <motion.li
              key={key}
              whileHover={{ x: 5 }}
              className="flex justify-between items-center py-2 px-4 rounded-lg bg-white/5 dark:bg-gray-900/10"
            >
              <span className="text-gray-700 dark:text-gray-300">{key}</span>
              <span
                className={cn(
                  'text-sm font-semibold',
                  value === '✅' ? 'text-green-500' : 'text-red-500',
                )}
              >
                {value}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      <Separator className="my-6 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent" />

      <div className="grid gap-4">
        {Object.entries(features).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-400">{key}</span>
            <span className="font-medium text-gray-900 dark:text-white">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={cn(
            'w-full py-3 text-white rounded-lg flex items-center justify-center gap-2 transition-transform',
            colors[colorScheme].button,
          )}
        >
          <FiShoppingCart className="w-5 h-5" />
          Comprar Ahora
        </motion.button>

        <Link href="/contact" passHref legacyBehavior>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-lg border border-gray-300 dark:border-gray-600 flex items-center justify-center gap-2 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            <FiMessageCircle className="w-5 h-5" />
            Contactar Expertos
          </motion.a>
        </Link>
      </div>
    </motion.div>
  );
};

export default Plan;

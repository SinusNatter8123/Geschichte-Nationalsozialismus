import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function StartPage() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center px-6 py-20 relative">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-6 border-b-4 border-red-600 pb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hakenkreuze, Propaganda und Verfolgung
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Warum sind Hakenkreuze verboten?
        <br className="hidden md:block" />
        Hier erfährst du die Hintergründe, warum nationalsozialistische Symbole heute zurecht unter Strafe stehen – und was das mit unserer Verantwortung zu tun hat.
      </motion.p>

      {/* Scroll-Hinweis als normal platzierter Block */}
      <motion.div
        className="mt-24 flex flex-col items-center text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-sm text-gray-500 mb-1">Scroll weiter</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}

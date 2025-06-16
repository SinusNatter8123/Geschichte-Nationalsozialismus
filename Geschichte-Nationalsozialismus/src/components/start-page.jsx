import React from 'react';
import { motion } from 'framer-motion';

export default function StartPage() {
  return (
    <section className="bg-slate-950 text-white min-h-screen flex flex-col items-center justify-center px-6 py-20">
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
    </section>
  );
}

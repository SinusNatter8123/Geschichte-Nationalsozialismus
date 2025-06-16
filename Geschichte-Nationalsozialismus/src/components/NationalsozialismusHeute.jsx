import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // falls du Lucide benutzt, sonst ersetzen

export default function NationalsozialismusHeute() {
  return (
    <section className="bg-slate-950 text-white py-24 px-6 md:px-24 flex flex-col items-center relative">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-10 text-center border-b-4 border-red-600 pb-2"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Und heute...?
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 text-center max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Der Nationalsozialismus gilt für viele als dunkles Kapitel der Geschichte. Doch Geschichte endet nicht an einem festen Punkt – ihre Spuren, Ideen und Wirkungen reichen oft weit darüber hinaus.
      </motion.p>

      <motion.p
        className="text-lg text-gray-400 text-center max-w-3xl leading-relaxed mt-6 italic"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.7 }}
      >
        Was davon ist noch heute spürbar? Wie reden Menschen über „Heimat“, „Fremde“, „Wir“ und „die Anderen“?  
        Und wie schnell können alte Gedanken in neuer Form auftauchen?
      </motion.p>

      <motion.p
        className="text-lg text-gray-500 mt-10 text-center max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.7 }}
      >
        Auf dieser Seite gehen wir diesen Fragen nach – Schritt für Schritt.
      </motion.p>

      {/* Scroll-Hinweis */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-sm text-gray-500 mb-2">Scroll weiter</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

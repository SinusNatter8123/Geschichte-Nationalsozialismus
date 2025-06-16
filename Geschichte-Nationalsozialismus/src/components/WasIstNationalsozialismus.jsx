import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

export default function WasIstNationalsozialismus() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-20 flex flex-col items-center">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center border-b-4 border-red-600 pb-2"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Was ist Nationalsozialismus?
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl leading-relaxed mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Der Nationalsozialismus war eine politische Ideologie und Bewegung, die Deutschland in den 1930er und 40er Jahren prägte. 
        Die NSDAP unter Adolf Hitler strebte nach totalitärer Kontrolle, basierend auf rassistischen und antisemitischen Überzeugungen.
      </motion.p>

      <motion.p
        className="text-lg md:text-xl text-gray-300 text-center max-w-3xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Diese Ideologie führte zu zahlreichen Verbrechen gegen die Menschlichkeit:
      </motion.p>

      {/* Fancy Liste */}
      <motion.ul
        className="grid gap-6 md:grid-cols-2 max-w-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {[
          'Verfolgung und Ermordung von Millionen Juden, Sinti und Roma, Homosexuellen und politischen Gegnern',
          'Aggressive Expansion Europas durch Kriege und Besetzung',
          'Errichtung von Konzentrationslagern mit systematischer Tötung',
          'Medienkontrolle und Propagandamaschinerie zur Meinungslenkung',
        ].map((text, index) => (
          <motion.li
            key={index}
            className="flex items-start space-x-4 bg-slate-800 p-4 rounded-xl shadow-md hover:shadow-red-700/20 transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-red-500 mt-1">
              <AlertCircle className="w-6 h-6" />
            </div>
            <p className="text-gray-200 text-base leading-snug">{text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}

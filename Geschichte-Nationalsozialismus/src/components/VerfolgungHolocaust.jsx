import { motion } from "framer-motion";

export default function VerfolgungHolocaust() {
  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl font-bold border-b-4 border-red-600 pb-3 mb-8 text-center">
          Verfolgung & Holocaust
        </h2>

        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center max-w-3xl mx-auto">
          Der Nationalsozialismus führte zu einem beispiellosen Verbrechen gegen die Menschlichkeit:
          Die systematische Verfolgung, Entrechtung und Ermordung von Millionen von Menschen.
          Jüdinnen und Juden, Sinti und Roma, Homosexuelle, politische Gegner*innen und viele weitere Minderheiten
          wurden Opfer eines brutalen Regimes.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-red-600 font-semibold text-center max-w-3xl mx-auto">
          Über 6 Millionen Jüdinnen und Juden wurden im Holocaust ermordet — ein unfassbares Ausmaß an Leid und Tod.
          Konzentrations- und Vernichtungslager wie Auschwitz, Treblinka oder Bergen-Belsen sind heute Mahnmale
          für die Grausamkeit dieser Zeit.
        </p>

        <p className="text-lg leading-relaxed mb-6 text-gray-300 text-center max-w-3xl mx-auto">
          Diese Verfolgung war nicht nur eine Folge von Hass, sondern ein hochgradig organisiertes, staatlich gelenktes System der Vernichtung.
          Es ist wichtig, diese Geschichte zu kennen, um zu verstehen, warum nationalsozialistische Symbole und Ideologien so gefährlich sind.
        </p>

        <motion.div
  className="mt-12 max-w-3xl mx-auto text-center bg-slate-800 bg-opacity-70 p-8 rounded-lg shadow-md"
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <motion.h3
    className="text-4xl font-extrabold mb-4 text-red-600"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    Nie wieder!
  </motion.h3>
  <p className="text-lg text-gray-300 mb-4">
    Diese Worte entstanden nach dem Ende des Zweiten Weltkriegs als kollektives Versprechen,
    die Schrecken von Krieg und Völkermord niemals zu vergessen und sich aktiv für Frieden und Menschenrechte einzusetzen.
  </p>
  <p className="text-lg text-gray-300">
    „Nie wieder!“ ist ein Aufruf an alle Generationen, die dunklen Kapitel der Geschichte zu kennen,
    um sicherzustellen, dass sich solche Tragödien nicht wiederholen können.
  </p>
</motion.div>


      </motion.div>
    </section>
  );
}

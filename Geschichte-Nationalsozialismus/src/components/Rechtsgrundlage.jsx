import React from "react";
import { motion } from "framer-motion";

export default function RechtsgrundlagenSection() {
  return (
    <section className="bg-slate-900 text-gray-300 py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Große Hauptüberschrift */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6"
        >
          Rechtsgrundlagen & Strafen
        </motion.h2>

        {/* Block 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-red-500 mb-4 border-b border-red-500 pb-1">
            Aus der Geschichte gelernt
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Nach dem Ende der NS-Zeit war klar: So etwas darf nie wieder passieren. Deshalb wurde frühzeitig ein rechtlicher Rahmen geschaffen, um das Verbreiten nationalsozialistischer Inhalte konsequent zu unterbinden.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 text-sm">
            „Wer aus der Geschichte nicht lernt, ist dazu verdammt, sie zu wiederholen.“ – George Santayana
          </blockquote>
        </motion.div>

        {/* Block 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-red-500 mb-4 border-b border-red-500 pb-1">
            Was heute gilt – §86a StGB
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            Das Verwenden von Kennzeichen verfassungswidriger Organisationen ist in Deutschland verboten. Dazu zählen Symbole wie das Hakenkreuz, SS-Runen oder auch Zahlencodes wie „88“ oder „18“.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Solche Zeichen dürfen nur in einem klaren Kontext wie z. B. Aufklärung, Kunst oder Wissenschaft gezeigt werden.
          </p>
          <blockquote className="bg-slate-800 rounded-md p-4 text-sm text-red-400 border-l-4 border-red-600 font-mono">
            „Mit Freiheitsstrafe bis zu drei Jahren oder mit Geldstrafe wird bestraft, wer Kennzeichen verfassungswidriger Organisationen verbreitet oder öffentlich verwendet.“
          </blockquote>
          <p className="text-sm text-gray-400 mt-2">
            Quelle:{" "}
            <a
              href="https://www.gesetze-im-internet.de/stgb/__86a.html"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-red-400"
            >
              §86a StGB – Gesetze im Internet
            </a>
          </p>
        </motion.div>

        {/* Block 3 */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="max-w-xl mx-auto bg-slate-900 "
>
  <h3 className="text-xl font-semibold text-red-500 mb-6 border-b border-red-500 pb-2">
    Konsequenzen bei Verstößen
  </h3>
  <p className="text-lg leading-relaxed mb-6">
    Wer nationalsozialistische Symbole öffentlich verwendet – sei es im Netz, auf Kleidung oder in Gesprächen – macht sich strafbar. Auch wenn es „nur ein Scherz“ war.
  </p>

  <ul className="space-y-4 text-gray-300">
    <li className="flex items-start gap-3">
      <span className=" mt-1 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center font-bold select-none">
        !
      </span>
      <span>Polizeiliche Ermittlungen und Strafanzeige</span>
    </li>
    <li className="flex items-start gap-3">
      <span className=" mt-1 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center font-bold select-none">
        ⚖️
      </span>
      <span className="font-semibold text-red-400">
        Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe
      </span>
    </li>
    <li className="flex items-start gap-3">
      <span className=" mt-1 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center font-bold select-none">
        📄
      </span>
      <span>Eintrag ins Führungszeugnis</span>
    </li>
    <li className="flex items-start gap-3">
      <span className=" mt-1 w-6 h-6 bg-red-600 rounded-full text-white flex items-center justify-center font-bold select-none">
        🚫
      </span>
      <span>Probleme bei Ausbildung, Beruf, Reisen</span>
    </li>
  </ul>

  <p className=" text-gray-400 text-2xl mt-8 italic">
    Die Gesetze dienen dem Schutz der Demokratie – und der Würde der Millionen Opfer.
  </p>
</motion.div>

      </div>
    </section>
  );
}

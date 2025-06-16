import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function WerWarHitler() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Textseite */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6">
            Wer war Adolf Hitler?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Adolf Hitler war der Anführer der Nationalsozialistischen Deutschen
            Arbeiterpartei (NSDAP) und Diktator des Deutschen Reiches von 1933
            bis 1945. Er gilt als eine der zentralen Figuren des 20.
            Jahrhunderts – verantwortlich für den Zweiten Weltkrieg und den
            Holocaust.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Durch aggressive Propaganda, Personenkult und politische
            Manipulation gelang es ihm, eine Diktatur zu errichten.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Er hinterließ eine zerstörte Welt und Millionen Tote.
          </p>
        </motion.div>

        {/* Bildseite */}
        <motion.div
          className="w-full h-72 md:h-96 bg-slate-800 flex items-center justify-center rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="text-slate-400 italic text-sm">[Platzhalter für Bild]</span>
        </motion.div>
      </div>

      {/* Accordion – Lebenslauf */}
      <div className="max-w-4xl mx-auto mt-12 border-t border-slate-700 pt-6">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-200 hover:text-red-500 transition-colors"
        >
          Lebenslauf
          <ChevronDown
            className={`h-5 w-5 transform transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <motion.ul
            className="mt-4 text-gray-400 text-base leading-relaxed list-disc list-inside space-y-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <li><strong>1889:</strong> Geburt in Braunau am Inn (Österreich-Ungarn)</li>
            <li><strong>1907–1913:</strong> Aufenthalt in Wien, Ablehnung an der Kunstakademie</li>
            <li><strong>1914–1918:</strong> Meldegänger im Ersten Weltkrieg</li>
            <li><strong>1920:</strong> Eintritt in die NSDAP</li>
            <li><strong>1923:</strong> Hitler-Putsch in München, Verurteilung zu Haft</li>
            <li><strong>1924:</strong> „Mein Kampf“ im Gefängnis verfasst</li>
            <li><strong>1933:</strong> Ernennung zum Reichskanzler, Machtübernahme</li>
            <li><strong>1939:</strong> Beginn des Zweiten Weltkriegs</li>
            <li><strong>1945:</strong> Suizid in Berlin kurz vor Kriegsende</li>
          </motion.ul>
        )}
      </div>
    </section>
  );
}

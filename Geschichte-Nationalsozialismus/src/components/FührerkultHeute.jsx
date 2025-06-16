import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FuehrerkultHeute() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-950 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Damals */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6">
            Der Führerkult im Nationalsozialismus
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Adolf Hitler wurde von der NS-Propaganda als „Retter“ und „Heilsbringer“ inszeniert. Sein Bild war überall präsent: auf Plakaten, in Schulbüchern, in der Presse. Der sogenannte Führerkult diente dazu, blinden Gehorsam zu erzeugen und Kritik unmöglich zu machen.
          </p>
          <p className="text-lg text-gray-400">
            Das „Führerprinzip“ stellte Hitler über alle Gesetze. Er wurde als unfehlbar verehrt – eine gefährliche Grundlage für die Diktatur.
          </p>
        </motion.div>

        {/* Heute */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-red-500 mb-4">
            ...und heute?
          </h2>
          <p className="text-lg text-gray-300 mb-4">
            Auch heute gibt es rechtsextreme Gruppen, die durch versteckte Codes Bezug auf den Nationalsozialismus nehmen. Häufig genutzte Zahlen sind:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li><strong>88:</strong> Steht für „Heil Hitler“ (H = 8. Buchstabe)</li>
            <li><strong>18:</strong> Steht für „Adolf Hitler“ (A = 1, H = 8)</li>
            <li><strong>„Blood & Honour“:</strong> Verbotenes Netzwerk mit neonazistischen Wurzeln</li>
          </ul>
          <p className="mt-4 text-sm text-red-400 italic">
            In Deutschland sind viele dieser Symbole strafbar (§86a StGB).
          </p>

          {/* Accordion für Details */}
          <div className="mt-6 border-t border-slate-700 pt-4">
            <button
              onClick={() => setOpen(!open)}
              className="w-full flex justify-between items-center text-left text-base font-medium text-slate-200 hover:text-red-500 transition-colors"
            >
              Mehr zu rechtsextremen Symbolen & Codes
              <ChevronDown
                className={`h-5 w-5 transform transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            {open && (
              <motion.ul
                className="mt-4 text-gray-400 text-sm leading-relaxed list-disc list-inside space-y-1"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <li><strong>„88“:</strong> Häufig auf Kleidung oder in Gamertags verwendet, um Zugehörigkeit zu zeigen</li>
                <li><strong>„18“:</strong> Wird auch in Tattoos oder Codes auf Social Media genutzt</li>
                <li><strong>„Blood & Honour“:</strong> In Deutschland verbotenes Netzwerk – steht unter Beobachtung</li>
                <li><strong>„Wolfsangel“, „Schwarze Sonne“:</strong> Historisch belegte Symbole, heute von Rechtsextremen übernommen</li>
              </motion.ul>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

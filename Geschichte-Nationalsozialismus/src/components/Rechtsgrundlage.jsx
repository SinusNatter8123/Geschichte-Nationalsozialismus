import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function RechtsgrundlagenSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-slate-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* Abschnitt 1: Historischer Kontext */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6">
            Rechtsgrundlagen & Strafen
          </h2>
          <h3 className="text-xl font-semibold text-red-500 mb-3">Aus der Geschichte gelernt</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Die nationalsozialistische Gewaltherrschaft endete 1945 – doch ihr Schatten wirkte
            nach. In Deutschland wurde deshalb früh ein rechtlicher Rahmen geschaffen, um
            Wiederholungen zu verhindern. Das Grundgesetz verbietet den Aufbau einer
            totalitären Ideologie, und daraus leiten sich zahlreiche Schutzgesetze ab.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Besonders der Umgang mit nationalsozialistischen Symbolen wurde streng geregelt.
            Damit soll nicht nur verhindert werden, dass rechtsextreme Gruppen alte
            Kennzeichen für neue Propaganda nutzen – sondern auch die Erinnerung an die
            Opfer geschützt bleiben.
          </p>
          <blockquote className="border-l-4 border-gray-600 pl-4 italic text-gray-400 text-sm mt-4">
            „Wer aus der Geschichte nicht lernt, ist dazu verdammt, sie zu wiederholen.“ – George Santayana
          </blockquote>
        </motion.div>

        {/* Abschnitt 2: Gesetzliche Lage */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-red-500 mb-3">Was heute gilt – §86a StGB</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            In der Bundesrepublik Deutschland regelt §86a des Strafgesetzbuches die
            Verwendung von Kennzeichen verfassungswidriger Organisationen. Dazu zählen
            insbesondere Symbole des Nationalsozialismus – wie das Hakenkreuz, das SS-Zeichen
            oder auch scheinbar harmlose Codes wie <span className="text-red-400 font-semibold">„88“</span> (für HH = Heil Hitler).
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Die Verwendung solcher Symbole ist grundsätzlich <span className="font-medium text-white">verboten</span>. Nur in
            besonderen Ausnahmefällen – etwa im Kontext der <span className="text-gray-200 font-medium">politischen Bildung,
            Kunst, Wissenschaft oder Berichterstattung</span> – kann die Darstellung erlaubt
            sein. Das entscheidet im Zweifel ein Gericht.
          </p>
          <blockquote className="bg-slate-800 rounded-md p-4 text-sm text-red-400 border-l-4 border-red-600 font-mono my-6">
            „Mit Freiheitsstrafe bis zu drei Jahren oder mit Geldstrafe wird bestraft, wer Kennzeichen verfassungswidriger Organisationen verbreitet oder öffentlich verwendet.“
          </blockquote>
          <p className="text-sm text-gray-400">
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

        {/* Abschnitt 3: Konsequenzen */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-red-500 mb-3">Konsequenzen bei Verstößen</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            Wer nationalsozialistische Symbole öffentlich verwendet – sei es im Internet, auf
            Kleidung oder in Gesprächen – macht sich strafbar. Auch wenn es aus Unwissenheit
            oder „nur als Scherz“ geschieht, schützt das nicht vor Konsequenzen.
          </p>

          <ul className="list-disc list-inside text-gray-300 text-base space-y-2 mb-6">
            <li><strong>Polizeiliche Ermittlungen:</strong> Strafanzeige und Vernehmung</li>
            <li><strong>Strafrechtliche Folgen:</strong> Geldstrafe oder Freiheitsstrafe bis zu 3 Jahren</li>
            <li><strong>Eintrag ins Führungszeugnis:</strong> Nachweisbar für Arbeitgeber & Behörden</li>
            <li><strong>Langfristige Konsequenzen:</strong> Einschränkungen bei Ausbildung, Beruf & Reisen</li>
          </ul>

          <p className="italic text-xl text-gray-300 mt-6">
            Die Gesetze dienen dem Schutz der Demokratie – und der Würde von Millionen
            Ermordeten.
          </p>
        </motion.div>

        {/* Accordion: Wusstest du schon? */}
        <div className="border-t border-slate-700 pt-6">
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex justify-between items-center text-left text-lg font-medium text-slate-200 hover:text-red-500 transition-colors"
          >
            Wusstest du schon?
            <ChevronDown
              className={`h-5 w-5 transform transition-transform ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <motion.div
              className="mt-4 text-gray-400 text-base leading-relaxed space-y-4"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p>
                Auch viele moderne Neonazi-Gruppen nutzen <span className="text-red-400 font-semibold">verschlüsselte Zeichen</span>,
                um das Gesetz zu umgehen. Darum werden selbst scheinbar harmlose
                Zahlenkombinationen wie „18“ oder „88“ oft strafrechtlich verfolgt.
              </p>
              <p>
                Die Polizei und der Verfassungsschutz beobachten die Szene genau – und
                auch online hinterlässt jeder Klick Spuren.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

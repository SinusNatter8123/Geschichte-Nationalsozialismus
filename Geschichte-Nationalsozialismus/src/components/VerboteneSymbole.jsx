import React from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

export default function VerboteneSymboleSection() {
  return (
    <section className="bg-slate-950 py-20 px-6 text-gray-100">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6"
        >
          Rechtsgrundlagen & Strafen
        </motion.h2>

        {/* Block: Hakenkreuz */}
        <div className="bg-slate-900 rounded-2xl border-l-8 border-red-600 p-8 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-2">Das Hakenkreuz</h3>
              <p className="text-base text-gray-300">
                Das Hakenkreuz war das zentrale Symbol der Nationalsozialisten. Heute ist es ein
                weltweites Zeichen für Unterdrückung, Hass, Antisemitismus und Massenmord.
              </p>
            </div>
          </div>

          {/* Bildplatzhalter */}
          <div className="w-full h-60 bg-gray-700 rounded-md flex items-center justify-center text-sm text-gray-400 italic">
            [Bild wird später eingefügt – z. B. Darstellung im historischen Kontext]
          </div>

          <div className="text-base text-gray-400 space-y-3">
            <p>
              In Deutschland ist das öffentliche Zeigen des Hakenkreuzes nach §86a StGB verboten.
              Es darf nur in eindeutig aufklärenden, künstlerischen oder wissenschaftlichen Kontexten
              gezeigt werden – etwa in Museen oder Bildungsprojekten wie diesem.
            </p>
            <p>
              Ursprünglich stammt das Symbol aus asiatischen Kulturen, wo es für Glück und
              Harmonie stand. Die Nationalsozialisten deuteten es radikal um – und machten es zum
              Symbol ihres brutalen Systems.
            </p>
          </div>
        </div>

        {/* Block: Erste Strophe der Hymne */}
        <div className="bg-slate-900 rounded-2xl border-l-8 border-red-600 p-8 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Die erste Strophe der Nationalhymne
              </h3>
              <p className="text-base text-gray-300">
                Die bekannte Zeile „Deutschland, Deutschland über alles…“ wird heute nicht mehr
                gesungen. Sie wurde im Nationalsozialismus für rassistische und nationale
                Überlegenheitsideologie missbraucht.
              </p>
            </div>
          </div>

          <div className="text-base text-gray-400 space-y-3">
            <p>
              Ursprünglich war das „Deutschlandlied“ ein Appell an die Einheit des Landes im 19.
              Jahrhundert. In der NS-Zeit wurde es jedoch als Propagandamittel verwendet – mit
              aggressivem Nationalismus.
            </p>
            <p>
              Heute wird nur die dritte Strophe der Hymne bei offiziellen Anlässen gespielt.
              Die erste Strophe gilt als historisch belastet und wird häufig von extrem rechten
              Gruppen verwendet.
            </p>
          </div>
        </div>

        {/* Block: SS-Runen */}
        <div className="bg-slate-900 rounded-2xl border-l-8 border-red-600 p-8 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-2">Die SS-Runen</h3>
              <p className="text-base text-gray-300">
                Die Doppel-S-Rune war das Symbol der sogenannten „Schutzstaffel“ (SS) –
                einer der gefährlichsten Organisationen im Nationalsozialismus.
              </p>
            </div>
          </div>

          {/* Bildplatzhalter */}
          <div className="w-full h-60 bg-gray-700 rounded-md flex items-center justify-center text-sm text-gray-400 italic">
            [Bild der SS-Runen oder historisches Abzeichen]
          </div>

          <div className="text-base text-gray-400 space-y-3">
            <p>
              Die SS war verantwortlich für Massenmorde, den Betrieb der Konzentrationslager
              und die Durchführung des Holocaust. Die Runen symbolisieren daher nicht nur
              Unterdrückung, sondern systematischen industriellen Massenmord.
            </p>
            <p>
              In Deutschland ist das öffentliche Verwenden dieser Runen strengstens verboten,
              sofern es nicht klar im Kontext von Aufklärung, Wissenschaft oder Kunst erfolgt
              (§86a StGB).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

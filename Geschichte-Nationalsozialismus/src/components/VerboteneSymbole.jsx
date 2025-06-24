import React from "react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";
import SSRunenImage from "../assets/SS-Runen.jpg";
import Hakenkreuzbild from "../assets/Hakenkreuz.jpg";

export default function VerboteneSymboleSection() {
  return (
    <section className="bg-slate-950 py-20 px-6 md:px-12 text-gray-100">
      <div className="max-w-4xl mx-auto space-y-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold border-b-4 border-red-600 pb-2 mb-6"
        >
          Verbotene Symbole und ihre Bedeutung
        </motion.h2>

        {/* Block: Hakenkreuz */}
        <div className="bg-slate-900 rounded-2xl border-l-8 border-red-600 p-8 shadow-xl space-y-6">
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-red-500 mt-1" />
            <div>
              <h3 className="text-3xl font-semibold mb-2">Das Hakenkreuz</h3>
              <p className="text-base text-gray-300">
                Das Hakenkreuz war das zentrale Symbol auf der Flagge der NSDAP und des Militärs. Heute ist es ein
                weltweites Zeichen für Unterdrückung, Hass, Antisemitismus und Massenmord.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={Hakenkreuzbild}
              alt="Hakenkreuz"
              className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
            />
            <div className="flex-1 text-base text-gray-400 space-y-3">
              <p>
                In Deutschland ist das öffentliche Zeigen des Hakenkreuzes nach §86a StGB verboten.
                Es darf nur in eindeutig aufklärenden, künstlerischen oder wissenschaftlichen Kontexten
                gezeigt werden – etwa in Museen oder Bildungsprojekten wie diesem.
              </p>
              <p>
                Dabei zählen auch Sticker in Chatverläufen und das Kritzlen auf Wänden dazu.
                Das Verbot soll verhindern, dass das Symbol verharmlost oder für neue Propaganda
                missbraucht wird.
              </p>
              <p>
                Ursprünglich stammt das Symbol aus asiatischen Kulturen, wo es für Glück und
                Harmonie stand. Die Nationalsozialisten deuteten es radikal um – und machten es zum
                Symbol ihres brutalen Systems.
              </p>
            </div>
          </div>
        </div>

        {/* Block: Erste Strophe der Hymne */}
        <div className="bg-slate-900 rounded-2xl border-l-8 border-red-600 p-8 shadow-xl space-y-6">
  <div className="flex items-start gap-4">
    <Info className="w-6 h-6 text-red-500 mt-1" />
    <div>
      <h3 className="text-3xl font-semibold mb-2">Das Deutschlandlied</h3>
      <p className="text-base text-gray-300">
        Das sogenannte „Deutschlandlied“ war lange Zeit die Nationalhymne in voller Länge. Heute
        wird bei offiziellen Anlässen ausschließlich die dritte Strophe gesungen.
      </p>
    </div>
  </div>

  <div className="text-base text-gray-400 space-y-3">
    <p>
      Die erste Strophe („Deutschland, Deutschland über alles…“) wurde während des
      Nationalsozialismus für nationalistische Propaganda instrumentalisiert. Sie gilt heute als
      politisch und historisch belastet und wird nicht mehr offiziell verwendet.
    </p>
    <p>
      Ursprünglich verfasste der Dichter August Heinrich Hoffmann von Fallersleben das Lied im
      Jahr 1841 als Appell zur Einheit der damals zersplitterten deutschen Staaten.
    </p>
    <p>
      Heute ist ausschließlich die dritte Strophe des Deutschlandlieds Teil der deutschen Nationalhymne.
      Sie betont Freiheit, Einigkeit und Recht.
    </p>
  </div>

  <details className="bg-slate-800 rounded-lg p-4 text-gray-200 text-sm">
    <summary className="cursor-pointer font-semibold mb-2">
      Liedtext des anzeigen
    </summary>
    <div className="mt-4 space-y-4 leading-relaxed">
      <div>
        <p className="font-bold text-red-400">1. Strophe (nicht mehr gesungen)</p>
        <p>
          Deutschland, Deutschland über alles, <br />
          Über alles in der Welt, <br />
          Wenn es stets zu Schutz und Trutze <br />
          Brüderlich zusammenhält, <br />
          Von der Maas bis an die Memel, <br />
          Von der Etsch bis an den Belt – <br />
          Deutschland, Deutschland über alles, <br />
          Über alles in der Welt.
        </p>
      </div>
      <div>
        <p className="font-bold text-red-400">2. Strophe (nicht mehr gesungen)</p>
        <p>
          Deutsche Frauen, deutsche Treue, <br />
          Deutscher Wein und deutscher Sang <br />
          Sollen in der Welt behalten <br />
          Ihren alten schönen Klang, <br />
          Uns zu edler Tat begeistern <br />
          Unser ganzes Leben lang – <br />
          Deutsche Frauen, deutsche Treue, <br />
          Deutscher Wein und deutscher Sang.
        </p>
      </div>
      <div>
        <p className="font-bold text-green-400">3. Strophe (heutige Nationalhymne)</p>
        <p>
          Einigkeit und Recht und Freiheit <br />
          Für das deutsche Vaterland! <br />
          Danach lasst uns alle streben <br />
          Brüderlich mit Herz und Hand! <br />
          Einigkeit und Recht und Freiheit <br />
          Sind des Glückes Unterpfand – <br />
          Blüh’ im Glanze dieses Glückes, <br />
          Blühe, deutsches Vaterland!
        </p>
      </div>
    </div>
  </details>
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

          <div className="flex flex-col md:flex-row gap-6 items-start">
            <img
              src={SSRunenImage}
              alt="SS-Runen"
              className="w-full md:w-1/3 rounded-lg shadow-lg object-cover"
            />
            <div className="flex-1 text-base text-gray-400 space-y-3">
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
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const resources = [
  {
    title: "Hakenkreuz & Symbole",
    links: [
      {
        label: "§86a StGB – Verwenden von Kennzeichen verfassungswidriger Organisationen",
        url: "https://www.gesetze-im-internet.de/stgb/__86a.html",
      },
      {
        label: "Das Hakenkreuz – DHM",
        url: "https://www.dhm.de/lemo/kapitel/das-hakenkreuz",
      },
      {
        label: "Das Hakenkreuz – Brandenburgische Landeszentrale",
        url: "https://www.politische-bildung-brandenburg.de/themen",
      },
      {
        label: "Swastika – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Swastika",
      },
    ],
  },
  {
    title: "SS & Schutzstaffel",
    links: [
      {
        label: "Die SS – Planet Wissen",
        url: "https://www.planet-wissen.de/nationalsozialismus",
      },
      {
        label: "Schutzstaffel – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Schutzstaffel",
      },
      {
        label: "Schutzstaffel – Historisches Lexikon Bayerns",
        url: "https://www.historisches-lexikon-bayerns.de/Lexikon",
      },
      {
        label: "SS-Runen – DHM Objektbeschreibung",
        url: "https://www.dhm.de/lemo/objekt/ss-runen-nach-1933",
      },
    ],
  },
  {
    title: "NSDAP & Nationalhymne",
    links: [
      {
        label: "NSDAP – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Nationalsozialistische_Deutsche_Arbeiterpartei",
      },
      {
        label: "Aufstieg der NSDAP – Nürnberg",
        url: "https://museen.nuernberg.de/nationalsozialismus/aufstieg",
      },
      {
        label: "Lied der Deutschen – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Das_Lied_der_Deutschen",
      },
      {
        label: "Nationalhymne – Deutscher Bundestag",
        url: "https://www.bundestag.de/hymne/hymne-197462",
      },
    ],
  },
  {
    title: "Holocaust",
    links: [
      {
        label: "Was ist der Holocaust? – Anne Frank Haus",
        url: "https://www.annefrank.org/anne-frank/vertiefung",
      },
      {
        label: "Holocaust – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Holocaust",
      },
      {
        label: "Holocaust einfach erklärt – deutschland.de",
        url: "https://www.deutschland.de/topic/politik/so-gedenkt",
      },
      {
        label: "bpb.de: Holocaust/Shoa",
        url: "https://www.bpb.de/lexika/das-junge-politik-lexikon",
      },
    ],
  },
];

export default function WeiteresMaterialSection() {
  return (
    <section className="bg-slate-900 py-20 px-6 text-gray-100 border-t border-slate-800">
      <div className="max-w-4xl mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold border-b-4 border-blue-500 pb-2"
        >
          Weiterführendes Material
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-base text-gray-300 leading-relaxed"
        >
          Für vertiefende Informationen zu den historischen Hintergründen, Symbolen und
          Organisationen des Nationalsozialismus findest du hier weiterführendes
          Material aus seriösen Quellen. Die Links sind thematisch gruppiert, sodass ihr einfach weiter-recherchieren könnt.
        </motion.p>

        <div className="space-y-6">
          {resources.map((section, idx) => (
            <details
              key={idx}
              className="bg-slate-800 rounded-lg p-4 group open:shadow-xl transition-all duration-300"
            >
              <summary className="flex justify-between items-center cursor-pointer text-lg font-semibold text-white">
                {section.title}
                <ChevronDown className="w-5 h-5 text-blue-400 group-open:rotate-180 transition-transform" />
              </summary>
              <ul className="mt-4 list-disc list-inside space-y-2 text-blue-300 text-sm">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

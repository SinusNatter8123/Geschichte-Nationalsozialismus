import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";

const quizData = [
  {
    question: "Was war der Nationalsozialismus hauptsächlich?",
    options: [
      "Eine politische Ideologie geprägt von Rassismus und Antisemitismus",
      "Eine Bewegung für Umweltschutz",
      "Ein Wirtschaftssystem",
    ],
    answerIndex: 0,
  },
  {
    question: "Wer war der Führer der NSDAP?",
    options: ["Adolf Hitler", "Winston Churchill", "Joseph Stalin"],
    answerIndex: 0,
  },
  {
    question: "Welche Strafe droht bei öffentlicher Verwendung nationalsozialistischer Symbole in Deutschland?",
    options: [
      "Freiheitsstrafe bis zu 3 Jahren oder Geldstrafe",
      "Keine Strafe",
      "Nur eine Verwarnung",
    ],
    answerIndex: 0,
  },
  {
    question: "Was bedeutet das Motto 'Nie wieder' im Kontext der NS-Zeit?",
    options: [
      "Verhinderung von Wiederholung solcher Gräueltaten",
      "Ein Festtagsgruß",
      "Eine politische Partei",
    ],
    answerIndex: 0,
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (index) => {
    if (selected === null) {
      setSelected(index);
      if (index === quizData[current].answerIndex) {
        setScore(score + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < quizData.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextQuestion(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    
    <section className="bg-slate-950 py-10 flex flex-col items-center justify-center px-5">
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-10 text-center border-b-4 border-red-600 pb-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
        Quiz: Nationalsozialismus
        </motion.h1>
      <div
        {...handlers}
        className="max-w-xl w-full bg-slate-800 rounded-xl shadow-lg p-8 text-gray-100"
      >
        {!showScore ? (
          <>
            <h2 className="text-2xl font-bold mb-6">
              Frage {current + 1} von {quizData.length}
            </h2>
            <p className="text-lg mb-8">{quizData[current].question}</p>

            <ul className="space-y-4">
              {quizData[current].options.map((option, idx) => {
                const isCorrect =
                  selected !== null && idx === quizData[current].answerIndex;
                const isSelected = selected === idx;

                return (
                  <li
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    className={`
                      cursor-pointer rounded-md px-4 py-3 border 
                      ${
                        selected === null
                          ? "border-gray-600 hover:border-red-500"
                          : isCorrect
                          ? "bg-green-600 border-green-600 text-white"
                          : isSelected
                          ? "bg-red-600 border-red-600 text-white"
                          : "border-gray-600 opacity-50"
                      }
                      transition-colors duration-300
                    `}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>

            {selected !== null && (
              <button
                onClick={nextQuestion}
                className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition"
              >
                {current + 1 === quizData.length ? "Ergebnis anzeigen" : "Nächste Frage"}
              </button>
            )}

            <p className="mt-4 italic text-sm text-gray-400 text-center">
              (Swipe nach links oder klicke „Nächste Frage“)
            </p>
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Dein Ergebnis:</h2>
            <p className="text-xl mb-8">
              Du hast {score} von {quizData.length} Fragen richtig beantwortet.
            </p>
            <button
              onClick={() => {
                setCurrent(0);
                setScore(0);
                setSelected(null);
                setShowScore(false);
              }}
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition"
            >
              Quiz neu starten
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

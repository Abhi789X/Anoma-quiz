import { useState } from "react"
import { questions as allQuestions } from "../data/questions"

export default function Quiz({ onFinish }: { onFinish: (score: number) => void }) {
  const questions = [...allQuestions].sort(() => 0.5 - Math.random()).slice(0, 5)
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (selected: string) => {
    if (selected === questions[current].answer) setScore((s) => s + 1)
    if (current === questions.length - 1) onFinish(score + (selected === questions[current].answer ? 1 : 0))
    else setCurrent((c) => c + 1)
  }

  const q = questions[current]

  return (
    <div className="text-white space-y-4">
      <h2 className="text-2xl font-bold">Q{current + 1}: {q.question}</h2>
      <div className="grid gap-3">
        {q.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleAnswer(opt)}
            className="bg-red-800 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

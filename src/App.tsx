import { useState } from "react"
import NameForm from "./components/NameForm"
import Quiz from "./components/Quiz"
import ResultCard from "./components/ResultCard"

export default function App() {
  const [name, setName] = useState("")
  const [score, setScore] = useState<number | null>(null)

  if (!name) return <NameForm onSubmit={setName} />
  if (score === null) return <Quiz onFinish={setScore} />
  return <ResultCard name={name} score={score} />
}

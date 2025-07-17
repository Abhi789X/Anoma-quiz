import { useState } from "react"

export default function NameForm({ onSubmit }: { onSubmit: (name: string) => void }) {
  const [name, setName] = useState("")

  return (
    <div className="flex flex-col items-center space-y-4 text-white">
      <h1 className="text-3xl font-bold">Enter your name to begin</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name..."
        className="bg-red-900/50 border border-red-600 text-white rounded-xl px-4 py-2 focus:outline-none"
      />
      <button
        onClick={() => onSubmit(name)}
        disabled={!name}
        className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-xl"
      >
        Start Quiz
      </button>
    </div>
  )
}

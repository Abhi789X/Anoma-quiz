export type Question = {
  question: string
  options: string[]
  answer: string
}

export const questions: Question[] = [
  {
    question: "What is Anoma’s approach to coordination?",
    options: ["Smart Contracts", "Intent-centricity", "Sharding", "Rollups"],
    answer: "Intent-centricity"
  },
  {
    question: "What enables privacy in Anoma?",
    options: ["zk-SNARKs", "zk-Commitments", "Homomorphic Encryption", "Turing Machines"],
    answer: "zk-Commitments"
  },
  {
    question: "What is Anoma primarily known for?",
    options: ["DeFi", "NFTs", "Intent-centric architecture", "Oracle feeds"],
    answer: "Intent-centric architecture"
  },
  {
    question: "What’s a key primitive in Anoma?",
    options: ["Notes", "Blocks", "Graphs", "Apps"],
    answer: "Notes"
  },
  {
    question: "Anoma’s goal is to enable what type of transactions?",
    options: ["Transparent", "Encrypted", "Autonomous", "Programmable"],
    answer: "Encrypted"
  },
  {
    question: "Who initiates computation in Anoma?",
    options: ["Smart Contracts", "Users’ intents", "Validators", "Bridges"],
    answer: "Users’ intents"
  }
]

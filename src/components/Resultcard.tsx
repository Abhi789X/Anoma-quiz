import html2canvas from "html2canvas"
import mage from "/mage.png"

export default function ResultCard({ name, score }: { name: string, score: number }) {
  const titles = ["Noob Initiate", "Intent Observer", "Mage Initiate", "Anoma Adept", "Intent Master", "Internet Mage"]
  const title = titles[score]

  const downloadCard = () => {
    const card = document.getElementById("card")
    if (!card) return
    html2canvas(card).then(canvas => {
      const link = document.createElement("a")
      link.download = `${name}_anoma_card.png`
      link.href = canvas.toDataURL()
      link.click()
    })
  }

  return (
    <div className="flex flex-col items-center text-white space-y-4">
      <div id="card" className="w-[300px] p-4 rounded-xl bg-red-900/40 border border-red-600 backdrop-blur-lg shadow-lg">
        <img src={mage} alt="mage" className="rounded-xl w-full h-[200px] object-cover mb-4" />
        <h1 className="text-xl font-bold">{name}</h1>
        <p>Score: {score}/5</p>
        <p className="italic">{title}</p>
      </div>
      <button onClick={downloadCard} className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-xl">
        Download Card
      </button>
    </div>
  )
}

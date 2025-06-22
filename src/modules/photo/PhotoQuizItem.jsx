import { useState, useEffect } from 'react'

function PhotoQuizItem({ question, onAnswer }) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)

  const localKey = `photo_answer_${question.id}`

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(localKey))
    if (saved) {
      setSubmitted(true)
      setIsCorrect(saved.correct)
    }
  }, [localKey])

  const normalize = (str) => str.trim().toLowerCase().replace(/\s+/g, '')

  const handleSubmit = () => {
    if (submitted || !input.trim()) return

    const answer = normalize(input)
    const correctAnswer = normalize(question.answer)

    const matched = answer === correctAnswer

    setIsCorrect(matched)
    setSubmitted(true)

    // 保存
    localStorage.setItem(
      localKey,
      JSON.stringify({ correct: matched })
    )

    // 点数報告
    onAnswer(question.id, matched ? 10 : 0)
  }

  return (
    <div className="border p-4 rounded bg-gray-50">
      <div className="mb-2 font-semibold">{question.text}</div>

      {submitted ? (
        <div className={`mt-2 ${isCorrect ? 'text-green-600' : 'text-red-500'}`}>
          {isCorrect ? '✅ ' : '❌'}
        </div>
      ) : (
        <div className="mt-2 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded px-2 py-1"
            placeholder="キーワードを入力"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            提出
          </button>
        </div>
      )}
    </div>
  )
}

export default PhotoQuizItem

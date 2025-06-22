import { useState } from 'react'

function IdentityQuizItem({ question, alreadyCorrect, onAnswer }) {
  const [input, setInput] = useState('')
  const [isCorrect, setIsCorrect] = useState(false)
  const [attempted, setAttempted] = useState(false)

  const handleSubmit = () => {
    const correct = input.trim() === question.answer
    setAttempted(true)
    setIsCorrect(correct)
    if (correct) onAnswer(question.id, true)
  }

  return (
    <div className="border p-4 rounded mb-4">
      <p className="font-medium mb-2">{question.text}</p>

      {(alreadyCorrect || isCorrect) ? (
        <>
          <p className="font-bold text-green-600">入力：一致</p>
          {question.explanation && (
            <p className="mt-2 text-sm text-gray-700">💡 {question.explanation}</p>
          )}
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="border px-2 py-1 rounded w-full"
              placeholder="回答を入力"
            />
            <button
              onClick={handleSubmit}
              className="bg-green-800 text-white px-3 py-1 rounded"
            >
              回答
            </button>
          </div>
          {attempted && !isCorrect && (
            <p className="text-red-500 mt-2 text-sm">入力：不一致 ドンキー人としての認証が不安定です。</p>
          )}
        </>
      )}
    </div>
  )
}

export default IdentityQuizItem

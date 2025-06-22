import { useState } from 'react'

function MemoQuizItem({ question, alreadyCorrect, onAnswer }) {
  const [input, setInput] = useState('')
  const [feedback, setFeedback] = useState('')

  const checkAnswer = () => {
    if (input.trim().toLowerCase() === question.answer.trim().toLowerCase()) {
      onAnswer(question.id, true)
      setFeedback('✅ 正解！')
    } else {
      setFeedback('❌ 不正解')
    }
  }

  return (
    <div className="border p-4 rounded-lg bg-gray-50">
      <div className="font-medium mb-2">{question.text}</div>
      {question.image && (
        <img src={question.image} alt="問題画像" className="mb-2 max-h-40 object-contain" />
      )}
      {alreadyCorrect ? (
        <div className="text-green-600">✅ 回答済み</div>
      ) : (
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border rounded px-2 py-1 flex-1"
          />
          <button onClick={checkAnswer} className="bg-green-600 text-white px-4 py-1 rounded">
            回答
          </button>
        </div>
      )}
      <div className="text-sm text-gray-600 mt-1">{feedback}</div>
    </div>
  )
}

export default MemoQuizItem

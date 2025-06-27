import { useState } from 'react'

function IntelQuizItem({ question, alreadyCorrect, alreadySelected, onAnswer }) {
  const [selected, setSelected] = useState(alreadySelected || null)
  const [answered, setAnswered] = useState(!!alreadyCorrect)

  const handleSelect = (option) => {
    if (answered) return

    setSelected(option)
    const isCorrect = option === question.answer
    onAnswer(question.id, isCorrect, option)
    setAnswered(true)
  }


  return (
    <div className="border rounded p-4 space-y-2 bg-white shadow">
      <p className="font-medium">{question.text}</p>

      <div className="flex flex-col gap-2">
        {question.options.map((opt) => (
          <button
            key={opt}
            onClick={() => handleSelect(opt)}
            disabled={answered}
            className={`px-3 py-2 rounded border text-left
              ${
                answered
                  ? opt === question.answer
                    ? 'bg-green-100 border-green-400'
                    : selected === opt
                      ? 'bg-red-100 border-red-400'
                      : 'bg-gray-50 border-gray-200'
                  : 'bg-white border-gray-300 hover:bg-gray-50'
              }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <p className="text-sm mt-2 text-gray-600">
          {selected === question.answer ? '✅ 正解！' : '❌ 不正解！正解は：' + question.answer}
        </p>
      )}
    </div>
  )
}

export default IntelQuizItem

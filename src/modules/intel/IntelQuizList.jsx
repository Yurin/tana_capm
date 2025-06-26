import { useEffect, useState } from 'react'
import IntelQuizItem from './IntelQuizItem'
import { QUESTIONS } from './intelQuestions'

function IntelQuizList() {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('intelAnswers') || '{}')
    const savedScore = parseInt(localStorage.getItem('intelScore') || '0')
    setAnswers(savedAnswers)
    setScore(savedScore)
  }, [])

  const handleAnswer = (id, isCorrect) => {
    if (answers[id]) return

    const updated = { ...answers, [id]: isCorrect }
    setAnswers(updated)
    localStorage.setItem('intelAnswers', JSON.stringify(updated))

    if (isCorrect) {
      const newScore = score + 10
      setScore(newScore)
      localStorage.setItem('intelScore', newScore.toString())
    }
  }

  const getAgentLevel = (score) => {
    if (score >= 90) return '雑学王'
    if (score >= 60) return 'インテリ'
    if (score >= 30) return '物知り'
    return '一般人'
  }

  return (
    <div className="space-y-6">
      <div className="text-right text-sm text-gray-600 mb-4">
        現在のスコア：<span className="font-bold text-green-600">{score} 点</span><br />
        レベル：<span className="font-semibold text-blue-600">{getAgentLevel(score)}</span>
      </div>

      {QUESTIONS.map((q) => (
        <IntelQuizItem
          key={q.id}
          question={q}
          alreadyCorrect={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}
    </div>
  )
}

export default IntelQuizList

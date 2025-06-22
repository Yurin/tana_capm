import { useEffect, useState } from 'react'
import IdentityQuizItem from './IdentityQuizItem'
import { QUESTIONS } from './identityQuestions'

function IdentityQuizList() {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('identityAnswers') || '{}')
    const savedScore = parseInt(localStorage.getItem('identityScore') || '0')
    setAnswers(savedAnswers)
    setScore(savedScore)
  }, [])

  const handleAnswer = (id, isCorrect) => {
    if (answers[id]) return
    const updated = { ...answers, [id]: isCorrect }
    setAnswers(updated)
    localStorage.setItem('identityAnswers', JSON.stringify(updated))

    if (isCorrect) {
      const newScore = score + 10
      setScore(newScore)
      localStorage.setItem('identityScore', newScore.toString())
    }
  }

  const getAgentLevel = (score) => {
    if (score >= 100) return 'ドンキー人'
    if (score >= 60) return 'ドンキー所属してるよー笑'
    if (score >= 30) return 'ドンキー？知ってる知ってる'
    return 'ドンキー？？？'
  }

  return (
    <div className="space-y-6">
      <div className="text-right text-sm text-gray-600 mb-4">
        現在のスコア：<span className="font-bold text-green-600">{score} 点</span><br />
        レベル：<span className="font-semibold text-blue-600">{getAgentLevel(score)}</span>
      </div>

      {QUESTIONS.map((q) => (
        <IdentityQuizItem
          key={q.id}
          question={q}
          alreadyCorrect={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}
    </div>
  )
}

export default IdentityQuizList

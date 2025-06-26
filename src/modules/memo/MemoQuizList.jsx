import { useEffect, useState } from 'react'
import MemoQuizItem from './MemoQuizItem'
import { QUESTIONS } from './memoQuestions'

function MemoQuizList() {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('memoAnswers') || '{}')
    const savedScore = parseInt(localStorage.getItem('memoScore') || '0')
    setAnswers(savedAnswers)
    setScore(savedScore)
  }, [])

  const handleAnswer = (id, isCorrect) => {
    if (answers[id]) return
    const updated = { ...answers, [id]: isCorrect }
    setAnswers(updated)
    localStorage.setItem('memoAnswers', JSON.stringify(updated))

    if (isCorrect) {
      const newScore = score + 20
      setScore(newScore)
      localStorage.setItem('memoScore', newScore.toString())
    }
  }

  const getAgentLevel = (score) => {
    if (score >= 220) return '特級エージェント'
    if (score >= 150) return '上級エージェント'
    if (score >= 100) return '正規エージェント'
    return '新人エージェント'
  }

  return (
    <div className="space-y-6">
      <div className="text-right text-sm text-gray-600 mb-4">
        現在のスコア：<span className="font-bold text-green-600">{score} 点</span><br />
        レベル：<span className="font-semibold text-blue-600">{getAgentLevel(score)}</span>
      </div>

      {QUESTIONS.map((q) => (
        <MemoQuizItem
          key={q.id}
          question={q}
          alreadyCorrect={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}
    </div>
  )
}

export default MemoQuizList

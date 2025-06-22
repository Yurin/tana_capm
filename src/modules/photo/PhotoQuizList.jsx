import { useEffect, useState } from 'react'
import PhotoQuizItem from './PhotoQuizItem'
import { QUESTIONS } from './photoQuestions'

function PhotoQuizList() {
  const [answers, setAnswers] = useState({})
  const [score, setScore] = useState(0)

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('photoAnswers') || '{}')
    const savedScore = parseInt(localStorage.getItem('photoScore') || '0')
    setAnswers(savedAnswers)
    setScore(savedScore)
  }, [])

const handleAnswer = (questionId, points) => {
  // スコアを更新
  const newScore = score + points
  setScore(newScore)
  localStorage.setItem('photoScore', newScore.toString())

  // 回答済み記録を更新
  const newAnswers = { ...answers, [questionId]: true }
  setAnswers(newAnswers)
  localStorage.setItem('photoAnswers', JSON.stringify(newAnswers))

  // （おまけ）問題クリア状況も更新
  const cleared = JSON.parse(localStorage.getItem('clearedPhoto') || '{}')
  cleared[questionId] = true
  localStorage.setItem('clearedPhoto', JSON.stringify(cleared))
}


  const getAgentLevel = (score) => {
    if (score >= 90) return '特級エージェント'
    if (score >= 60) return '上級エージェント'
    if (score >= 30) return '正規エージェント'
    return '新人エージェント'
  }

  return (
    <div className="space-y-6">
      <div className="text-right text-sm text-gray-600 mb-4">
        現在のスコア：<span className="font-bold text-green-600">{score} 点</span><br />
        レベル：<span className="font-semibold text-blue-600">{getAgentLevel(score)}</span>
      </div>

      {QUESTIONS.map((q) => (
        <PhotoQuizItem
          key={q.id}
          question={q}
          alreadyCorrect={answers[q.id]}
          onAnswer={handleAnswer}
        />
      ))}
    </div>
  )
}

export default PhotoQuizList

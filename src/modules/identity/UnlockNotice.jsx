import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { QUESTIONS } from './identityQuestions'

function UnlockNotice() {
  const [unlocked, setUnlocked] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      const saved = localStorage.getItem('identityAnswers')
      if (saved) {
        const parsed = JSON.parse(saved)
        const allCorrect = QUESTIONS.every(q => parsed[q.id] === true)

        if (allCorrect) {
          setUnlocked(true)
          const cleared = JSON.parse(localStorage.getItem('clearedGenres') || '{}')
          if (!cleared.identity) {
            cleared.identity = true
            localStorage.setItem('clearedGenres', JSON.stringify(cleared))
          }
          clearInterval(interval) // ✅ 一度達成したら監視を終了
        }
      }
    }, 2000) // 1秒ごとにチェック（必要なら短くできる）

    return () => clearInterval(interval)
  }, [])

  if (!unlocked) return null

  return (
    <div className="mt-6 text-center">
      <p className="text-green-600 font-medium mb-4">
        照合結果：適合者認定完了。
ミッションフェーズへの移行を開始します。
他チームとの相対評価を実施中。
またスコアが増えると解析が進み写真がアンロックされます。
即時行動を推奨します。</p>
      <button
        onClick={() => navigate('/mission_01/story_01/qset_01')}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        モジュールが解放された。確認しよう
      </button>
    </div>
  )
}

export default UnlockNotice

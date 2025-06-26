import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const introMessage = `任務支援AI entity 起動中。
検索対象：極秘ファイル。
処理モジュール群を展開しました。
順次アンロックしてアクセスしてください。`

const GENRES = [
  { key: 'identity', label: '適合者認証', desc: 'ドンキー構成員かを確認します' },
  { key: 'intel', label: '知識確認', desc: 'ドンキー行動指針に関する知識データの確認を実行します。' },
  { key: 'photo', label: '写真解析', desc: '撮影データの解析を通じ、現地状況の再構築を試みます。' },
  { key: 'memo', label: '職員解析', desc: '残留メモデータの解析を実行。断片情報の再構成を開始します' },
]

function Qset_01() {
  const navigate = useNavigate()
  const [cleared, setCleared] = useState({})
  const [totalScore, setTotalScore] = useState(0)

  useEffect(() => {
    const saved = localStorage.getItem('clearedGenres')
    if (saved) setCleared(JSON.parse(saved))

    const identity = parseInt(localStorage.getItem('identityScore') || '0')
    const intel = parseInt(localStorage.getItem('intelScore') || '0')
    const memo = parseInt(localStorage.getItem('memoScore') || '0')
    const photo = parseInt(localStorage.getItem('photoScore') || '0')
    setTotalScore(identity + intel + memo + photo)
  }, [])

  const handleClick = (key) => {
    if (cleared[key]) return
    navigate(
      key === 'identity'
        ? `/mission_01/story_01/qset_01/identity`
        : `/mission_01/story_01/qset_01/theme_${key}`
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 text-blue-900 font-sans flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">

        {/* 💬 AI メッセージ */}
        <div className="bg-white border border-cyan-500 rounded-lg p-5 shadow-md whitespace-pre-line min-h-[7em]">
          <p className="text-base text-cyan-900 leading-relaxed">{introMessage}</p>
        </div>
        {totalScore >= 200 && (
          <div className="mt-8 text-center">
            <p className="text-red-600 font-semibold mb-4"> 解析が進み新しい情報が入った</p>
            <button
              onClick={() => navigate('/mission_02')}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-blue-500 transition"
            >
              緊急任務に進む
            </button>
            <p className="text-green-400 font-sans mb-1">いつでもこのモジュールには戻って来れる</p>
          </div>
        )}
        {totalScore >= 400 && (
          <div className="mt-8 text-center">
            <p className="text-red-600 font-semibold mb-4"> 謎のメッセージ</p>
            <button
              onClick={() => navigate('/message')}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-blue-500 transition"
            >
             メッセージ
            </button>
          </div>
        )}

        {/* 🔢 合計スコア */}
        <div className="text-right text-sm text-blue-1000">
          合計スコア：<span className="font-bold text-green-700">{totalScore} 点</span>
        </div>

        {/* 🔘 モジュール選択 */}
        <div className="flex flex-col gap-4">
          {GENRES.map(({ key, label, desc }) => {
            const isDisabled =
              key === 'identity'
                ? cleared[key]
                : !cleared['identity'] || cleared[key]

            return (
              <button
                key={key}
                onClick={() => handleClick(key)}
                disabled={isDisabled}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 shadow-sm
                  ${
                    isDisabled
                      ? 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'bg-white border-cyan-400 hover:bg-blue-1000 text-blue-900'
                  }`}
              >
                <div className="font-semibold text-lg text-cyan-1000">{label}</div>
                <div className="text-sm text-blue-700 mt-1">{desc}</div>
                {cleared[key] && (
                  <div className="mt-2 text-xs text-green-600 font-medium">完了済み</div>
                )}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Qset_01

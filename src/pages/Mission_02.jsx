import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Mission_02() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  const validKeywords = ['ドンキー', 'さんぴあ']

  const handleSubmit = () => {
    const normalized = input.trim().toLowerCase()
    const matched = validKeywords.some((keyword) =>
      normalized === keyword.toLowerCase()
    )

    if (matched) {
      navigate('/mission_02/story_02')
    } else {
      setError(true)
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl border border-green-400 rounded-xl p-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl mb-6 text-center text-white">
          🗂 MISSION FILE: 002 / UPDATE
        </h1>

        <p className="whitespace-pre-line leading-relaxed text-sm sm:text-base">
          📁 Decryption complete...
          {"\n"}────────────────────────────
          {"\n"}[INFO] Obsolete file retrieved: `strategy_backup_2025write.pdf`
          {"\n"}[WARN] Current file mismatch detected.
          {"\n"}[LOG] Attempting to access: `strategy_backup_2025write.pdf`
          {"\n"}[TRACE] Source: updated by 'たなキャン係'
          {"\n"}[LOCATION] `strategy_backup_2025write.pdf → CAR
          {"\n"}────────────────────────────
        </p>

        {/* 🔔 指令パート */}
        <p className="mt-6 text-cyan-300 text-sm sm:text-base leading-relaxed text-center">
          ファイルは現在、<span className="text-green-400 font-bold">車内</span>に存在する可能性が高いと推定されます。<br />
          発見次第、<span className="text-white font-bold">写真をLINEで送信</span>し、<br />
          ファイル内部に記載された<span className="text-yellow-300 font-bold">“キーワード”</span>を下記に入力してください。
        </p>

        {/* 🔑 パスワード入力 */}
        <div className="mt-6 flex flex-col items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              setError(false)
            }}
            placeholder="キーワードを入力"
            className="w-full max-w-xs px-4 py-2 border border-green-400 bg-black text-green-200 rounded focus:outline-none focus:ring-2 focus:ring-green-400 text-center placeholder-green-600"
          />
          <button
            onClick={handleSubmit}
            className="bg-green-400 hover:bg-green-300 text-black font-bold py-2 px-6 rounded transition"
          >
            認証して次へ進む
          </button>
          {error && (
            <p className="text-red-500 text-sm font-semibold">
              キーワードが違います
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Mission_02

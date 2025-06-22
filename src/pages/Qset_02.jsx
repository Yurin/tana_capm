import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Qset_02() {
  const navigate = useNavigate()
  const [suspect, setSuspect] = useState(localStorage.getItem('finalSuspect') || '')

  const handleChange = (e) => {
    setSuspect(e.target.value)
    localStorage.setItem('finalSuspect', e.target.value)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-md space-y-8">

        <h2 className="text-xl font-bold text-center text-gray-700">🕵️‍♀️ 最終任務：犯人を特定せよ</h2>

        <p className="text-sm text-gray-600 leading-relaxed">
          これまでの情報をもとに、最新版ファイルを車に隠した犯人を特定してください。
          今までのモジュールにもヒントが隠されています。しっかり吟味した上で回答してください。回答は一度のみです。
          集合した時にその人にした根拠を発表してもらいます。
        </p>

        <input
          type="text"
          value={suspect}
          onChange={handleChange}
          placeholder="犯人の名前を入力"
          className="w-full px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <div className="flex justify-between pt-6">
          <button
            onClick={() => navigate('/mission_01/story_01/qset_01')}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            モジュールの続きを行う
          </button>
        </div>

      </div>
    </div>
  )
}

export default Qset_02

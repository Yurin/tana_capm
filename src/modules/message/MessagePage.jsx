import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ThemeMessage() {
  const navigate = useNavigate()

  useEffect(() => {
    // 表示と同時にスコア・クリア記録
    localStorage.setItem('messageScore', '10')
    const cleared = JSON.parse(localStorage.getItem('clearedGenres') || '{}')
    cleared.message = true
    localStorage.setItem('clearedGenres', JSON.stringify(cleared))
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-2xl space-y-8">

        {/* タイトル */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center">
          MESSAGE
        </h1>

        {/* 問題文と画像 */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-5 shadow-sm text-sm sm:text-base">
          <img
            src="../../../public/image/message_prompt.png" 
            alt="通信ログの画像"
            className="w-full rounded-lg border border-gray-300 shadow-md"
          />
          <p className="mt-4 text-gray-700">
            あきと,あきひろ,かん,けいすけ,こういちろう,こうき,こうすけ,しゅう,しゅん,しゅんご,しょう,しょうた,しょうたろう,しんいち
,しんじ,すばる,そう,そら,たいし,たくし,てお,ともき,なおき,はるき,はると,ひびき,ひろあき,ふうご,みさと,みつき,むつみ,ゆうた,りひと,れお
          </p>
        </div>

        {/* モジュールに戻る */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/mission_01/story_01/qset_01')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded transition"
          >
            モジュール選択に戻る
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThemeMessage

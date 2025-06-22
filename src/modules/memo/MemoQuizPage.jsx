import MemoQuizList from './MemoQuizList'
import { useNavigate } from 'react-router-dom'

function MemoQuizPage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans text-gray-800">
      <button
        onClick={() => navigate('/mission_01/story_01/qset_01')}
        className="absolute top-4 left-4 text-sm text-blue-600 hover:underline"
      >
        ← 処理モジュール選択に戻る
      </button>

      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">文書解析 - memo</h1>
        <p className="text-sm text-gray-600">
          現地メモの情報から任務遂行に役立つ知見を得よう！
        </p>
        <MemoQuizList />
      </div>
    </div>
  )
}

export default MemoQuizPage

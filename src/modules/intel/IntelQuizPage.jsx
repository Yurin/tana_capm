import { useNavigate } from 'react-router-dom'
import IntelQuizList from './IntelQuizList'

function IntelQuizPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans text-gray-800 relative">
      <button
        onClick={() => navigate('/mission_01/story_01/qset_01')}
        className="absolute top-4 left-4 text-sm text-blue-600 hover:underline"
      >
        ← 処理モジュール選択に戻る
      </button>

      <div className="max-w-3xl mx-auto space-y-8 mt-10">
        <h1 className="text-2xl font-bold">知識確認モジュール</h1>
        <p className="text-sm text-gray-600">
          任務に必要な知識を確認します。全てに正解するとモジュールが完了します。
        </p>
        <IntelQuizList />
      </div>
    </div>
  )
}

export default IntelQuizPage

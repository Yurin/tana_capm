import IdentityQuizList from './IdentityQuizList'
import UnlockNotice from './UnlockNotice'

function IdentityQuizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-4 py-10 font-sans text-gray-900">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* タイトル */}
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center leading-snug">
          【IDENTITY SCAN】<br />
          適合者認証プロトコル
        </h1>

        {/* サブテキスト */}
        <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
          この照合に通過しない個体に、任務遂行の資格はありません。<br />
          <span className="text-cyan-700 font-semibold">全ての質問に正解</span>すると次の任務がアンロックされます。
        </p>

        {/* クイズリストと通知 */}
        <IdentityQuizList />
        <UnlockNotice />

      </div>
    </div>
  )
}

export default IdentityQuizPage

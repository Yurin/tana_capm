import { useNavigate } from 'react-router-dom'

function Story_02() {
  const navigate = useNavigate()

  const handleStartFinal = () => {
    navigate('/mission_02/story_02/qset_02')
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md border border-green-400 rounded-xl p-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl mb-6 text-center text-white">🗂 Second Mission ― 車に隠された真実</h1>

        <p className="mb-3 leading-relaxed whitespace-pre-line">
          各チームが謎を解いたおかげで、AIが“ファイル”の場所を予測完了。
          だが、そこに置かれていたのは昨年の古いオーダー表と選手情報だった。
          しかも入っていたのは昨年のファイル。見つけなければならないのは予測、おかしい。
          偽のファイルをここに置いたのは誰だ？
          この車に入れるのはメンバーしかいなかったはず、、、
          自分たちの中に裏切り者がいるのか？
        </p>

        <p className="mb-6 leading-relaxed">
          各班、残された証拠をもとに、<span className="text-green-300 font-semibold">真相を突き止めよ。</span>
        </p>

        <div className="text-center">
          <button
            onClick={handleStartFinal}
            className="bg-green-400 hover:bg-green-300 text-black font-bold py-2 px-6 rounded transition"
          >
            最終任務を開始する
          </button>
        </div>
      </div>
    </div>
  )
}

export default Story_02

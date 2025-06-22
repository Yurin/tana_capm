import { useNavigate } from 'react-router-dom'

function Story_01() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/mission_01/story_01/qset_01')
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md border border-green-400 rounded-xl p-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl mb-6 text-center text-white">任務開始 ― 消えたファイルを探せ</h1>
          <p className="mb-3 leading-relaxed">
            来年の本郷杯を左右する極秘ファイルが、<span className="text-yellow-400 font-bold">公園内で消えた</span>。
            その中には、戦略、選手データそれに基づく予測が記載されているようだ。
          </p>
          <p className="mb-3 leading-relaxed">
            これが敵の手に渡れば、<span className="text-yellow-400 font-bold">ドンキーの連覇が途切れてしまう</span>。
          </p>
          <p className="mb-3 leading-relaxed">
            任務はただ一つ――<span className="text-green-400 font-bold">敵より先に“ファイル”を見つけ出せ</span>。
          </p>
          <p className="mb-3 leading-relaxed">
            AIは、職員のスマートフォンや現地の監視カメラから行動記録を解析し、暗号のようなヒントを残した。
          </p>
          <p className="mb-3 leading-relaxed">
            諸君にはそのヒントをもとに、公園内を探索してもらう。
            <span className="text-cyan-300 font-bold">これは情報戦だ。油断すれば罠にかかる。</span>
          </p>
          <p className="mb-3 leading-relaxed">
            情報、直感、そして自分を信じろ。
          </p>
        <div className="mt-6 text-center">
          <button
            onClick={handleStart}
            className="bg-green-400 hover:bg-green-300 text-black font-bold py-2 px-6 rounded transition"
          >
            AIが助けてくれる。準備ができたら押そう
          </button>
        </div>
      </div>
    </div>
  )
}

export default Story_01

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTeam } from '../context/TeamContext'
import { useTypewriter } from '../hooks/useTypewriter'

function Mission() {
  const { teamId } = useTeam()
  const navigate = useNavigate()

  const message = `> Locate the missing document hidden within the park.
> Solve the puzzle encrypted in the AI’s logs.
> Beware of enemy agents.`

  const warning = `  Should you or any of your team be caught or killed, the Agency will disavow any knowledge of your actions. 
  This recording will self-destruct.`

  // 🟢 メインメッセージ（上）
  const { text: typedMessage, done: messageDone } = useTypewriter(message, 25)

  // 🔴 警告メッセージ（下）
  const [startWarning, setStartWarning] = useState(false)
  const [typedWarning, setTypedWarning] = useState('')

  // メインメッセージ完了後、警告スタート
  useEffect(() => {
    if (messageDone) {
      setStartWarning(true)
    }
  }, [messageDone])

  useEffect(() => {
    if (!startWarning) return

    let index = 0
    const interval = setInterval(() => {
      setTypedWarning(prev => prev + warning.charAt(index))
      index++
      if (index >= warning.length) clearInterval(interval)
    }, 25)

    return () => clearInterval(interval)
  }, [startWarning, warning])

  // ⏱ 自動遷移（10秒後）
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/mission_01/story_01')
    }, 10000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono flex flex-col items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-black border border-green-400 rounded-xl p-6 shadow-md">
        <h1 className="text-2xl sm:text-3xl mb-4 text-center">🗂 MISSION FILE: 001</h1>
        
        <p className="mb-2 text-center">
          Welcome, Agent of Team <span className="text-white font-bold">{teamId}</span>.
        </p>
        <p className="mb-4 text-center">Your first objective has been uploaded to the terminal.</p>

        <pre className="bg-black border border-green-400 p-4 text-sm sm:text-base rounded whitespace-pre-wrap mb-6">
          {typedMessage}
        </pre>

        <div className="bg-black border border-red-500 text-red-500 p-4 rounded text-sm whitespace-pre-line text-left min-h-[5em]">
          {typedWarning || (startWarning ? '' : ' ')}
        </div>
      </div>
    </div>
  )
}

export default Mission

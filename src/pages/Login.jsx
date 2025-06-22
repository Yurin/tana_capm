import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTeam } from '../context/TeamContext'

function Login() {
  const [input, setInput] = useState('')
  const { setTeamId } = useTeam()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (input.trim() !== '') {
      setTeamId(input.trim())
      navigate('/mission_01')
    }
  }

  return (
    <div className="min-h-screen bg-black text-green-400 flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-xs sm:max-w-sm bg-black border border-green-400 rounded-xl p-6 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-mono mb-6 text-center">
          🔐 TEAM ACCESS
        </h1>

        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter your Team ID"
          className="w-full bg-black border border-green-400 text-green-400 p-3 rounded text-center font-mono placeholder-green-500 mb-4"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-400 text-black font-bold py-2 rounded hover:bg-green-300 transition"
        >
          LOGIN
        </button>
      </div>

      <p className="mt-6 text-xs text-green-600 font-mono text-center">
        Mission access requires valid team identification.
      </p>
    </div>
  )
}

export default Login

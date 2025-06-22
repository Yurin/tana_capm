import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 30) {
  const [displayedText, setDisplayedText] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    const chars = Array.from(text ?? '')
    let index = 0
    const interval = setInterval(() => {
      if (index < chars.length) {
        setDisplayedText(prev => prev + chars[index])
        index++
      } else {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return { text: displayedText, done }
}

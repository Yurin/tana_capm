import { createContext, useState, useContext } from 'react'

const TeamContext = createContext()

export const TeamProvider = ({ children }) => {
  const [teamId, setTeamId] = useState('')
  return (
    <TeamContext.Provider value={{ teamId, setTeamId }}>
      {children}
    </TeamContext.Provider>
  )
}

export const useTeam = () => useContext(TeamContext)

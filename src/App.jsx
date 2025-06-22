import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Mission_01 from './pages/Mission_01'
import Story_01 from './pages/Story_01'
import Qset_01 from './pages/Qset_01'
import IdentityQuizPage from './modules/identity/IdentityQuizPage'
import IntelQuizPage from './modules/intel/IntelQuizPage'
import { TeamProvider } from './context/TeamContext'
import MemoQuizPage from './modules/memo/MemoQuizPage'
import PhotoQuizPage from './modules/photo/PhotoQuizPage'
import Mission_02 from './pages/Mission_02'
import Story_02 from './pages/Story_02'
import Qset_02 from './pages/Qset_02'
import Message from './modules/message/MessagePage'

function App() {
  return (
    <TeamProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mission_01" element={<Mission_01 />} />
        <Route path="/mission_01/story_01" element={<Story_01 />} />
        <Route path="/mission_01/story_01/qset_01" element={<Qset_01 />} />

        {/* モジュールのルート */}
        <Route path="/mission_01/story_01/qset_01/identity" element={<IdentityQuizPage />} />
        <Route path="/mission_01/story_01/qset_01/theme_intel" element={<IntelQuizPage />} />
        <Route path="/mission_01/story_01/qset_01/theme_memo" element={<MemoQuizPage />} />
        <Route path="/mission_01/story_01/qset_01/theme_photo" element={<PhotoQuizPage />} />
        <Route path="/mission_02" element={<Mission_02 />} />
        <Route path="/mission_02/story_02" element={<Story_02 />} />
        <Route path="/mission_02/story_02/qset_02" element={<Qset_02 />}/>
        <Route path="/message" element={<Message />} />
      </Routes>
    </TeamProvider>
  )
}

export default App

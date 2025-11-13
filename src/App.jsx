import { useState } from 'react'
import { ProfileCard } from './ProfileCard';
import './App.css'

function App() {
  const Num = useState(0); //初期値は0

  return (
    <>
      <ProfileCard profiles={profiles[Num]} setProfiles={() => ((i) => (i+1) % profiles.length)} />
    </>
  )
}

export default App

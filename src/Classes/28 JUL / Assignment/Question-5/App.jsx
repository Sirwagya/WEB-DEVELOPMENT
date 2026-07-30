import React from 'react'
import {useState} from 'react'
import LikeCount from './Components/LikeCount.jsx'
import LikeButton from './Components/LikeButton.jsx'

const App = () => {
    const [likes, setLikes] = useState(0);

  return (
    <div>
      <LikeCount likes={likes} />
      <LikeButton handleLike={() => setLikes(likes + 1)} />
    </div>
  )
}

export default App
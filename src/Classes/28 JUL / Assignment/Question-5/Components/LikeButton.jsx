import React from 'react'

const LikeButton = ({ handleLike }) => {
  return (
    <div>
      <button className="cursor-pointer" onClick={handleLike}>
        Like
      </button>
    </div>
  )
}

export default LikeButton
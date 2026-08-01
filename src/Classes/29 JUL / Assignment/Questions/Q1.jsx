import React from 'react'

const Q1 = ({data}) => {

  return (
    <>
    {
        data.filter(todo => todo.completed === true).map((todo) => (
            <div key={todo.id}>
                <h1>{todo.title}</h1>
            </div>
        ))
    }
    </>
  )
}

export default Q1
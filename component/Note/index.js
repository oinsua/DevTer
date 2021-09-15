import React from 'react'

const index = ({ note }) => {
  const { id, title, completed } = note
  return (
        <div>
            <span>Id: {id}</span>
            <span>Title: {title}</span>
            <span>Completed: {completed ? 'true' : 'false'}</span>
        </div>
  )
}

export default index

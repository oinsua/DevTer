import React from 'react'

const index = ({ note }) => {
  return (
        <div>
            <span>Id: {note.id}</span>
            <span>Title: {note.title}</span>
            <span>Completed: {note.completed ? 'true' : 'false'}</span>
        </div>
  )
}

export default index

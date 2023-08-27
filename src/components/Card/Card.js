import React from 'react'

const Card = (props) => {
  return (
    <div className={`rounded-md p-4 bg-purple-700 text-white font-semibold ${props.className}` }>
      {props.children}
    </div>
  )
}

export default Card

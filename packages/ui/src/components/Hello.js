import React from 'react'

export default function Hello(props) {
  return (
    <div>
      {props.content}
    </div>
  )
}

Hello.defaultProps = {
  content: "Hello World"
}

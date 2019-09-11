import * as React from 'react';

type Props = {
  content: string
}

export default function Hello(props: Props) {
  return (
    <div>
      {props.content}
    </div>
  )
}

Hello.defaultProps = {
  content: 'Hello There..!',
}

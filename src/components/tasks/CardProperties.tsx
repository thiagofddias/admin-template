import React from 'react'

interface CardProps {
  title: string;
  description: string;
  dueDate: string;
  // onComplete: () => void;
}


export default function CardProperties(props: CardProps) {
  return (
    <div>
        <h1 className='
              font-light text-3xl
              dark:text-gray-300'
              >{props.title}
        </h1>

        <h2 className={`
            font-light text-sm
            dark:text-gray-300
            `}>
              {props.description}
        </h2>

        <h2 className={`
            font-light text-sm
            dark:text-gray-300
            `}>
              {props.dueDate}
        </h2>
    </div>
  )
}

import React from 'react'

type BodyProps = {
    children : React.ReactNode
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return (
    <div className='container h-96 bg-white w-full my-8'>
        { children }
    </div>
  )
}

export default Body
import React from 'react'

const layout = ({children}: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <h1>hello samir</h1>
        {children}
    </div>
  )
}

export default layout
import React from 'react'

const page = ({params}:any) => {

const data = decodeURIComponent(params.blog)
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default page
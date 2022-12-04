import React from 'react'

const Cv = ({change}) => {
  return (
    <>
      <button className={`download ${change?' darkie':''}`}>
        <a className='down' href="https://docs.google.com/document/d/1Vo0UQxtkXxjyw5r9b8vVxXKaALfJxvEeSGsyJuInqo0/edit?usp=sharing" target='_blank'>

        Download CV
        </a>

        </button>  
    </>
  )
}

export default Cv
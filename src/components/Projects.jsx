import React from 'react'

const Projects = ({change,title,image,description,linkGit,linkNet}) => {
  return (
    <>
      <article className={change?'dark_p':'project'}>
        <h2>{title} </h2>
        <img className='p_img' src={image} alt={`${title} image` }/>
        <p >{description} </p>
        <span className='linkie'>
        <span><a target='_blank' href={linkGit}>Github link</a> </span> 
        <br />
        <span><a target='_blank' href={linkNet} >Website</a> </span>
        </span>
        </article>  
    </>
  )
}

export default Projects
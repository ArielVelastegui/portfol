import React, { useState } from 'react'
import styled from 'styled-components'
styled
import HamburgerButton from './HamburgerButton'
const Navbar = ({change,show}) => {
  const [click, setClick] = useState(false)
  

    const handleClick = ()=> {
      setClick(!click)
    }


  return (
    <>
    <NavContainer>
    <div className={click?"links active":"links"}>
        <a onClick={click?handleClick:false} className={change?"a_dark custom-btn btn-5":"a custom-btn btn-5"} href="#"><span>Home</span> </a>
        
        <a onClick={click?handleClick:false} className={change?"a_dark custom-btn btn-5":"a custom-btn btn-5"} href="#skills"><span>Skills</span> </a>
        
        <a onClick={click?handleClick:false} className={change?"a_dark custom-btn btn-5":"a custom-btn btn-5"} href="#projects"><span>Projects</span> </a>
        <a onClick={click?handleClick:false} className={change?"a_dark custom-btn btn-5":"a custom-btn btn-5"} href="#contacts"><span>Contacts</span> </a>
    </div>
    <div className="burguer">
    <HamburgerButton click={click} handleClick={handleClick}/>
    </div>
    <BgDiv className={`initial ${click?' active':''}${change?' darkBg':''}`}> </BgDiv>
    </NavContainer>
    
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1rem;
a{
  margin-right:16px;
  
}

.burguer{
  @media(min-width: 768px){
    display: none;
    
  }
}

  .links{
    transition:all .6s ease ;
    position: absolute;
    top:-700px;
    left:-2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    a{
    display:block;
    font-size:1.7rem;
    margin-top:20px;  
    }
  }

  
  
  .links.active{
    
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    
  }
  .links{
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1.2rem;
        display:inline;
           
      }
    }
  }
}
`
const BgDiv = styled.div`

position:absolute;
top:-700px;
left:-2000px;
border: 1;
width:100%;
height:100%;
transition:all .6s ease ;
background-color:var(--nav-light-bg-color);
box-shadow: 0px 1px 9px 3px #8e8989;

&.darkBg{
  background-color:var(--nav-bg-color);
  box-shadow: 0px 1px 9px 3px #000000;
}

&.active{
  border-radius: 0 0 90% 0;
  top:0;
  left:0;
  width:100%;
height:100%;
z-index:-1;
}
`
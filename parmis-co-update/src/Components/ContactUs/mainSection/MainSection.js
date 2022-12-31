import React from 'react'

// Components
import ContactForm from './form/ContactForm'
import Info from './info/Info'

// Style 
import "./MainSection.module.css"
import style from "./MainSection.module.css"

function MainSection() {
  return (
    <div className={style.container}>
        
        <ContactForm/>
        
        <Info/>


    </div>
  )
}

export default MainSection
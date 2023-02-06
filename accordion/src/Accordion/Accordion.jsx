import React from 'react'
import data from '../data/accordiondata'
import classes from './accordion.module.css'
import AccordionCard from './AccordionCard'
const Accordion = () => {
  return (
  <div className={classes.container}>{
    data.map((item)=>(
        
       <AccordionCard key={item.id}  question={item.question} answer={item.answer} /> 
    ))
}</div> 

   
  )
}

export default Accordion
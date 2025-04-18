import React, { useState } from 'react'
import './Qa.scss'
const Qa = () => {
  return (
<div className="qa">
      <h2>Frequently asked questions</h2>
      <div className='options'>
        <div className='left-section'>
          <List text={"How to use this template?"} content="You can start by importing the components and customizing them."/>
          <List text={"What is your refund policy?"}/>
          <List text={"How to Use this Template?"}/>
          <List text={"Best web design agency ever is?"}/>
          <List text={"How can i order web design services?"}/>
        </div>
        <div className='right'>
        <List text={"What are your shipping rates?"}/>
        <List text={"How can I track my order?"}/>
        <List text={"I received the wrong item, what do I do?"}/>
        <List text={"What are benefits of this template?"}/>
        <List text={"How promote the product?"}/>
        </div>
      </div>
    </div>
  );
};

export default Qa;


const List =({text,content="A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem  good design is not only aesthetically pleasing, but also functional. "})=>{
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className='list-items' onClick={()=>setIsOpen(!isOpen)}> 
    <div className='list-titile'>
      <p>{text}</p> <span>{isOpen?'-':"+"}</span>
    </div>
      {isOpen&&(
        <div className='items-details'>
          <p>{content}</p>
        </div>
      )}
    </div>
  )
}
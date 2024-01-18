import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttonsName=["All","Bollywood News","Gaming","Trending","Web Design","Live","challanges","Movies","Flutter","React","programing","Watched"]

  return (
         <div className=' flex  overflow-hidden w-screen ' >{
        buttonsName.map(names=><Button key={names} name={names} />)
    }</div>   
  )
}

export default ButtonList
import React from 'react'
import Preview from './componenets/Preview'
import { Card } from './componenets/Card'

const App = () => {
  return (
    <>
      <Preview>
        <Card/>
        <div className="text-xs text-center text-newWhite my-3">
          Challenge by <a className='text-attribution' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a className='text-attribution' href="https://philipoyelegbin.github.io">Philip Oyelegbin</a>.
        </div>
      </Preview>
    </>
  )
}

export default App
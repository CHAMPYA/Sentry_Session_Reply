import React, { useState } from 'react'
// import InputsNum from '../components/Inputs'
// import Add from '../components/Add'
// import Result from '../components/Result'

function Home1() {

  const [color, setColor] = useState('red')

  return (
    <div>
      <div style={{ color: color, marginLeft: "40%" }}>Click the button and change my color</div><br/>

      {/* add 4 buttons which will change div color */}
      <button onClick={() => setColor('red')}>Red</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('orange')}>Orange</button>
    </div>
  )
}

export default Home1
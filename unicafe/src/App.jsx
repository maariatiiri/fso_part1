import { useState } from 'react'

const Button = (props) => (<button onClick={props.onClick}> {props.text} </button>)

const Statisticline = (props) => (<p>{props.text} {props.value}</p>)

const Statistics = (props) => {
  const total = props.good+props.bad+props.neutral
  if (total === 0) {
    return (
    <p>No feedback given</p>
  )
  }
  else return (
    <div>
      <Statisticline text="good" value={props.good}/>
      <Statisticline text="neutral" value={props.neutral}/>
      <Statisticline text="bad" value={props.bad}/>
      <Statisticline text="total" value={total}/>
      <Statisticline text ="average" value={(-1.0*props.bad+1.0*props.good+0*props.neutral)/total}/>
      <Statisticline text="positive" value={props.good/(total)*100}/>
    </div>
    
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={()=>setGood(good+1)} text="good"/>
      <Button onClick={()=>setNeutral(neutral+1)} text="neutral"/>
      <Button onClick={()=>setBad(bad+1)} text="bad"/>
      <h1>statistics</h1>
      <Statistics good={good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App
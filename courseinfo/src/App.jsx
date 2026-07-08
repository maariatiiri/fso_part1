const Header = (props) => {
  return ( 
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return ( 
    <div>
      <Part part={props.pt1} exercises={props.e1}/>
      <Part part={props.pt2} exercises={props.e2}/>
      <Part part={props.pt3} exercises={props.e3}/>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
    {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  return ( 
    <p>Number of exercises {props.no}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content pt1 = {part1} e1 = {exercises1} pt2 = {part2} e2 = {exercises2} pt3 = {part3} e3 = {exercises3}/>
      <Total no = {exercises1+exercises2+exercises3}/>
    </div>
  )
}

export default App
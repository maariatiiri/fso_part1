const Header = (props) => {
  return ( 
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return ( 
    <div>
      <Part name = {props.pt1.name} exercises = {props.pt1.exercises}/>
      <Part name = {props.pt2.name} exercises = {props.pt2.exercises}/>
      <Part name = {props.pt3.name} exercises = {props.pt3.exercises}/>
    </div>
  )
}

const Part = (props) => {
  console.log("Part" + props)
  return (
    <p>
    {props.name} {props.exercises}
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content pt1 = {part1} pt2 = {part2} pt3 = {part3}/>
      <Total no = {part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App
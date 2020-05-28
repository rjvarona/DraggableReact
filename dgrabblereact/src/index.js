import React, { useState } from 'react'
import styles from './styles.module.css'


//make this draggable


debugger



export const ExampleComponent = ({ text, color }) => {

  return (
    <div>
      <DragCard text={text} color={color} />
    </div>
  )
}


export const DragCard = (props) => {
  //get the positions

  const [positions, setPositions] = useState(Array(4).fill(null));
  const [color, setColor] = useState(props.color)


  //update the calculate new pos

  //drag
  const dragger = (e) => {
    setColor("blue");
  }


  //render
  return (
    <div>
      <div className={styles.test} style={{ color: color }}
        onMouseDown={dragger.bind(this)}>Draggable Component: {props.text}</div>

    </div>
  )

}

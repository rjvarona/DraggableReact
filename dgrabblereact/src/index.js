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

  const [positions, setPositions] = useState(Array(4).fill(200));
  const [color, setColor] = useState(props.color)
  
  //set the positions of before.

  //update the calculate new pos

  //drag
  const dragger = (e) => {
    setColor("blue");

    //coppyPositions
    let copyPositions = Array(4).fill(null); 
    copyPositions[0] = e.clientX;
    copyPositions[1] = e.clientY;

    setPositions(copyPositions);

  }


  //render
  return (
    <div>
      <div className={styles.test} style={{ color: color, top: positions[1] + "px" }}
        onMouseMove={dragger.bind(this)}>Draggable d: {props.text}</div>

        <div> x and y pos are 
          {positions}
        </div>

    </div>
  )

}

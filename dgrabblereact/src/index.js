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

  const posInit= (e) => {
    let copyPositions = positions; 


    copyPositions[3] = e.clientX;
    copyPositions[4] = e.clientY;

    setPositions(copyPositions);
 
  }

  //drag
  const dragger = (e) => {
    setColor("blue");

    //coppyPositions
    let copyPositions = positions; 


    copyPositions[0] = copyPositions[3] - e.clientX;
    copyPositions[1] = copyPositions[4] - e.clientY;

    setPositions(copyPositions);

  }


  //render
  return (
    <div>
      <div className={styles.test} style={{ left: positions[0] + "px", top: positions[1] + "px" }}
        onClick={posInit.bind(this)}
        onMouseMove={dragger.bind(this)}>Draggable d: {props.text}</div>

        <div> x and y pos are 
          {positions}
        </div>

    </div>
  )

}

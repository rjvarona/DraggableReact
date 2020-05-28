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

  const [finalPosition, setPositions] = useState(Array(2).fill(200));
  const [initPosition, setInit] = useState(Array(2).fill(200))
  const [pressed, setPressed] = useState(false)
  
  //set the positions of before.

  //update the calculate new pos

  const posInit= (e) => {

    
    let copyPositions =  Array(2).fill(200); 
    
    copyPositions[0] =  e.clientX;
    copyPositions[1] = e.clientY;
    
    setInit(copyPositions);
    setPressed(true);
 
  }

  //drag
  const dragger = (e) => {

    
    if(!pressed){
      return;
    } 

    //coppyPositions
    let copyPositions =  Array(2).fill(null);

    let offSetX = e.clientX - e.nativeEvent.offsetX;
    let offSetY = e.clientY - e.nativeEvent.offsetY;

    let changeX = e.clientX - initPosition[0];
    let changeY = e.clientY - initPosition[1];


    copyPositions[0] =  (offSetX + changeX);
    copyPositions[1] =  (offSetY + changeY);

    setPositions(copyPositions);

  }


  //render
  return (
    <div>
      <div 
        className={styles.test} style={{ left: finalPosition[0] + "px", top: finalPosition[1] + "px" }}
        onClick={posInit.bind(this)}
        onMouseMove={dragger.bind(this)}>Draggable d: {props.text}</div>

        <div> x and y pos are 
          {finalPosition}
        </div>

    </div>
  )

}

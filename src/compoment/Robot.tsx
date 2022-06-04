import React from 'react'
import styles from './robot.module.css'
import first from 'entry'
interface RobotProps {
  id: number,
  name: string,
  emial: string
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, emial } = props
  console.log(first, 'first');

  return <div className={styles.div}>

    {id}--{name}456</div>
}



export default Robot


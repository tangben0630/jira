import React from 'react'
import styles from './robot.module.css'
interface RobotProps {
  id: number,
  name: string,
  emial: string
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, emial } = props
  return <div className={styles.div}>{id}--{name}</div>
}



export default Robot


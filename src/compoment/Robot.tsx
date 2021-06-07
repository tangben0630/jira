import React from 'react'
import styles from './robot.module.css'
import ShoppingCart from './ShoppingCart'
interface RobotProps {
  id: number,
  name: string,
  emial: string
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, emial } = props

  return <div className={styles.di}>
    <div>{id}</div>
    <div>{name}</div>
    <div>{emial}</div>
    <ShoppingCart></ShoppingCart>
  </div>
}



export default Robot


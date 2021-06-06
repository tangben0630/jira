import React from 'react'

interface RobotProps {
  id: number,
  name: string,
  emial: string
}

const Robot: React.FC<RobotProps> = (props) => {
  const { id, name, emial } = props
  return <div>{id}-----------{name}-------------------------{emial}</div>
}



export default Robot


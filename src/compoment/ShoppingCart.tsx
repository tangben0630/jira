import React from 'react'
import icons from 'react-icons'
interface Props {

}
interface State {
  isOpen: Boolean;
}

class ShoppingCart extends React.Component {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  click(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e.target, '====');

    this.setState({
      isOpen: !((this.state as any).isOpen)
    })
  }

  render() {
    return <div>
      <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => { this.click(e) }}>购物车(2件)</button>
      <ul style={{ display: (this.state as any).isOpen ? 'block' : 'none' }}>
        <li>1</li>
        <li>2</li>
      </ul>
    </div>
  }
}


export default ShoppingCart
import React from 'react'
import classes from './Modal.module.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  render() {
    return (
      <>
        <button onClick={() => this.setState({ isOpen: true })}>Open Modal</button>

        {this.state.isOpen && <div className={classes.Modal}>
          <div className={classes.ModalBody}>
            <h1>Modal Title</h1>
            <p>I am Modal</p>
            <button onClick={() => this.setState({ isOpen: false })}>Close Modal</button>
          </div>
        </div>}
      </>
    )
  }
}
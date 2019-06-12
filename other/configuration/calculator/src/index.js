import './global.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Calculator from './calculator'

ReactDOM.render(
  <React.Fragment>
    <Calculator />
    <div style={{marginTop: 30, textAlign: 'center'}}>
      Calculator component{' '}
      <a href="https://youtube.com/deechris27">created</a> by
      <br />
      <a href="https://twitter.com/deechris27">Deepak D</a> of{' '}
      <a href="https://tidbit.c.la/">MyTidbitg</a>
    </div>
  </React.Fragment>,
  document.getElementById('app'),
)

/* eslint react/jsx-child-element-spacing:0 */

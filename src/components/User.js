import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name, surname, age, error } = this.props
    let template

if (name) {
  template = <p> Привет, { name + '' + surname }! Тебе { age } лет.</p>
} else {
  template = <button className = 'btn' onClick = {this.props.handleLogin}>Войти</button>
}

return <div className='ib user'>
    { template }
    { error ? 
      <p className='error'> 
      { error }. 
      <br/> Попробуйте еще раз.
      </p> 
      : 
      ''
    } 
  </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
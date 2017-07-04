import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { name, surname, age } = this.props
    return <div>
      <p>Привет, {name} {surname}!</p>
      <p>Тебе, блин, {age} лет!</p>
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}
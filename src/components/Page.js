import React, {PropTypes, Component} from 'react'

export default class Page extends Component {
  onYearBtnClick(e) {
    this.props.getPhotos(+e.target.innerText)
  }
  render() {
    const {year, photos, fetching } = this.props
    return (
    <div className='ib page'>
      <p>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2016</button>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2015</button>
        <button className='btn' onClick={this.onYearBtnClick.bind(this)}>2014</button>
      </p>
      <h3>У тебя выбран <span className='shadow'>{year}</span> год</h3>
      { fetching ? 
      <p>Гружу фотки...</p>
      :
      <p>У тебя {photos.length} фото.</p>
    }
    </div>)
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired
}
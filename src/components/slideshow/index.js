import React, { Component } from 'react'
import PropTypes from "prop-types"
import CN from 'classnames'
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import { increaseCounter, decreaseCounter, indexCounter} from '../../actions/counterAction'
import MouseMove from '../Move.js';

const mapStateToProps = (state) => ({ count: state.counter.count });
const mapDispatchToProps = (dispatch) => bindActionCreators({increaseCounter, decreaseCounter, indexCounter}, dispatch)


class Carousel extends Component {
  
  constructor (props) {
    super(props)
  }

  componentDidMount() {
    MouseMove.init();
  }

  onDotClick (index) {   
    this.props.indexCounter(index);
  }
  
  renderSlides () {
    const product = this.props.data
    //console.log(product)
    return product.map(({ node: post}, index) => {
      const { count } = this.props;
      let isShown = index === count
      let classNames = CN({
        'carousel__slide': true,
        'carousel__slide--shown': isShown,
        'carousel__slide--leaving': index === count
      })
      
      return (
        <div aria-hidden={!isShown} className={classNames} key={index} >
          <img src={post.frontmatter.image} alt=''  />
          <h1>{post.frontmatter.title}</h1>
        </div>
      )
    })
  }
    
  renderDots() {
    const product = this.props.data

    return (
      <ul className='carousel__dots'>
        {
          product.map((_i, index) => {
         // this.props.images.map((_i, index) => {
            const { count } = this.props;
            let classNames = CN({
              'carousel__dot': true,
              'carousel__dot--active': index === count
            })
            let id = `carousel${index}`

            return (
              <li className={classNames} key={index}>
                <input className='carousel__dot-input' id={id} type='radio' name='carousel-dots' value={index} onChange={this.onDotClick.bind(this, index)}></input>
                <label htmlFor={id}>•</label>
              </li>
            )
          })
        }
      </ul>
    )
  }
  
  render () {
    return (    
      <div id="outer__mover" className='carousel'>
        <div id="inner__mover" className='carousel__slider'>
          {this.renderSlides()}
          {this.renderDots()}
        </div>
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);

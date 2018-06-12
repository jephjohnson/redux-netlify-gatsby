import React from 'react'
import Link from 'gatsby-link'
import Hamburger from './Hamburger'
import PropTypes from "prop-types"
import CN from 'classnames';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as toggleactionCreators from '../actions/toggleActions';

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const mapStateToProps = (state) => ({ hidden: state.toggle.hidden });
const mapDispatchToProps = (dispatch) => bindActionCreators({...toggleactionCreators}, dispatch)

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    // Bind the this context to the handler function
    //this.handler = this.handler.bind(this);
  }

  // This method will be sent to the child component
  // handler() {
  //     console.log("here")
  // }

  toggleDiv() {
    this.props.toggleDiv();
  }

  render() {
    const { hidden} = this.props;

    const navLinks = [
      {route: '/about', text: 'Works'},
      {route: '/products', text: 'Profile'},
      {route: '/contact', text: 'Contact'}
    ];

    const Links = navLinks.map((b, i) =>
      <Link key={i} to={b.route} key={i} activeStyle={{color: 'red'}} className="navbar-item">{b.text}</Link>
    );

    return (
      <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
   {/*<Hamburger action={this.handler} />*/}
            <Hamburger onClick={this.toggleDiv.bind(this)} className={CN('navbar-burger burger', {'is-active': hidden})} />
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              {Links}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
//export default Navbar
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);


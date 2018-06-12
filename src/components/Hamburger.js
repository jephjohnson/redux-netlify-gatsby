import React, { Component } from 'react';
import PropTypes from "prop-types"
import CN from 'classnames';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux';
import * as toggleactionCreators from '../actions/toggleActions';

const mapStateToProps = (state) => ({ hidden: state.toggle.hidden });
const mapDispatchToProps = (dispatch) => bindActionCreators({...toggleactionCreators}, dispatch)

class Hamburger extends Component {
  
  toggleDiv() {
    this.props.toggleDiv();
    this.props.action();
  }

  render() {
    const { hidden} = this.props;
    return (
    <div onClick={this.toggleDiv.bind(this)} className={CN('navbar-burger burger', {'is-active': hidden})} type="button" data-toggle="collapse" data-target="navMenu" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
    </div>
    );
  }  
}
export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);


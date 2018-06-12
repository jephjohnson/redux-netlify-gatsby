import React from 'react';

class Hamburger extends React.Component {
    render() {
        return (
        <div {...this.props} type="button" data-target="navMenu" aria-controls="navbarCollapse" aria-expanded="false" aria-label="toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </div>
        )
    }
}
export default Hamburger;



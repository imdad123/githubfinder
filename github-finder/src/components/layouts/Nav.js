import React from 'react'
import PropTypes from 'prop-types';
export const  Nav  = (props)=> {
    
   const {title} = props;
        return (
            <div className="nav">
                <h1>
                    <i className="fab fa-github"></i>
                    {title}</h1>
            </div>
        )
    
}

 Nav.defaultProps = {
    title: 1,
    font:"fab fa-github"
};
Nav.propTypes ={
    title:PropTypes.string.isRequired,
    font:   PropTypes.string.isRequired
}


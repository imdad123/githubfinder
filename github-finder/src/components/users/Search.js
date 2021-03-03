import React, { Component } from 'react'

export  class Search extends Component {
    state = {
        text:''
    }
    render() {
        return (
            <div>
                <form className="form">
                    <input type="text" name="" id="" placeholder="Search User" value={this.state.text}/>
                     <input type="submit" value="Search" className="btn btn-success"/>

                </form>
            </div>
        )
    }
}

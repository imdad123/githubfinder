import React, { Component } from 'react'
import PropTypes from 'prop-types'

export  class Search extends Component {
    state = {
        text:''
    }
     onchange= (e)=>{
         this.setState({text:e.target.value});
     }
     static propTypes = {
         searchUser:PropTypes.func.isRequired,
         
     };
     onsubmit=(e)=>
     { e.preventDefault();
         if(this.state.text === '')
         {
             this.props.setAlert("Please enter a text",'lighter');
         }else{        
         this.props.searchUser(this.state.text);
         this.setState({text:''});
         }
     }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.onsubmit}>
                    <input type="text" name="" id="" placeholder="Search User" value={this.state.text} onChange={this.onchange}/>
                     <input type="submit" value="Search" className="btn btn-success"/>
                     {this.props.showClear &&(
             <button className="btn btn-success" onClick={this.props.clearUser}>Clear</button>)}
                </form>
            </div>
        )
    }
}

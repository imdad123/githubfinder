import logo from './logo.svg';
import './App.css';
 import {  Nav} from "./components/layouts/Nav";

import React,{ Component, Fragment } from 'react';

import { Users } from "./components/users/Users";
import { Search  } from "./components/users/Search";
import axios from 'axios';

class App extends Component{
 /*componentDidMount(){
   axios.get('https://api.github.com/users').then(res=>console.log(res.data));
 }*/
 state ={
   user:[],
   loading:false
 };
 async componentDidMount(){
   this.setState({loading:true});
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
 console.log(res.data);
  this.setState({user:res.data,loading:false});
}
  render()
  { 
    return (
   <div className="App">
     <Nav title="Github Finder"/>
     <Search/>
     <Users loading={this.state.loading} users={this.state.user}/>
   </div>
    );
  }
}


export default App;

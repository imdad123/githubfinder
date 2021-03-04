import logo from './logo.svg';
import './App.css';
 import {  Nav} from "./components/layouts/Nav";

import React,{ Component, Fragment } from 'react';

import { Users } from "./components/users/Users";
import { Search  } from "./components/users/Search";
import axios from 'axios';
import  Alert  from "./components/layouts/Alert";
class App extends Component{
 /*componentDidMount(){
   axios.get('https://api.github.com/users').then(res=>console.log(res.data));
 }*/
 state ={
   user:[],
   loading:false,
   alert:null
 };
 /*async componentDidMount(){
   this.setState({loading:true});
  const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
 console.log(res.data);
  this.setState({user:res.data,loading:false});
}
*/
searchUser= async (text)=>{
  this.setState({loading:true});
  const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);

  this.setState({user:res.data.items,loading:false});
}
setAlert=(msg,type)=>{
  this.setState({alert:{msg,type}});
  setTimeout(() => {
    this.setState({alert:null});
  }, 5000);
}
clearUser = ()=>{
  this.setState({user:[],loading:false});
}
  render()
  { 
    return (
   <div className="App">
     <Nav title="Github Finder"/>
     <Alert alert={this.state.alert}/>
     <Search searchUser={this.searchUser} showClear = {this.state.user.length >0 ?true :false} setAlert={this.setAlert}/>
     <Users loading={this.state.loading} users={this.state.user}/>
   </div>
    );
  }
}


export default App;

import React, { Component } from 'react'
import { UserItem } from './UserItem'; 
import Spinner from '../layouts/Spinner';
export class Users extends Component {
   
    render() {
        if(this.props.loading)
        {return <Spinner/>}else{
        return (
            <div style={userStyle}>
                {this.props.users.map(user =><UserItem key={user.id} login={user.login} avatar_url={user.avatar_url} html_url={user.html_url}/>)}
            </div>
        )
    }
}
   
}
const userStyle ={
    display:"grid",
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap:'1rem'
    
};
export default Users

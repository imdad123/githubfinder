import React from 'react'

export const UserItem = (props)=>
{
        const {login,avatar_url,html_url} = props;
        return (
            <div className="card text-center" >
               <img src={avatar_url} alt="" style={{ width:"60px"}}/>
               <h3>{login}</h3>
               <a href={html_url}>{login}</a>
            </div>
        ) 
    }


 

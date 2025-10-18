import React from 'react';
import profilepic from 'https://sp.yimg.com/ib/th/id/OIP.HmKPSEvhVehWHr9akRYzaQAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1'

const ProfilCard = () => {
    return (
        <div style={{border: "1px solid #ccc",  
            padding: "20px",
            width: "200px",
            textAlign: "center"
        }}>
            <img src={profilepic} alt="Profile" />
            style={{width: "100px", borderRadius: "50%"}}
            <h2>John Doe</h2>
            <p>Web Developer</p>                                                                
        </div>
    )
}    
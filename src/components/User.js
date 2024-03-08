import { useState } from "react";

const User = ()=>{
    const [count] =useState(0)
return(
    <div className="user-card">
    <h2>Count:{count}</h2>
        <h2>Name : Saikumar</h2>
        <h3>City : Bidar</h3>
        <h4>Contact : saikumar@an</h4>
    </div>
)
}
export default User;
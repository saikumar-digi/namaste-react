import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //   count: 0,
      //   count2: 0,
      userInfo:{
        firstName:"dummy",
        location:"Default",
        image:"dummyphoto",
        phone:"dummyphone",
        address:{
            address:"dummy"
        }
      }
    };
    console.log(this.props.name + "Child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://dummyjson.com/users/1");
    const res = await data.json();
    this.setState({
        userInfo:res
    })
    console.log(res);
  }

  componentDidUpdate(){
  

  }
  
  componentWillUnmount(){

  }

  render() {
    console.log(this.props.name + "Child render");

    // const { name, location } = this.props;
     const { firstName ,phone,address,image} = this.state.userInfo

    return (
      <div className="user-card">
        {/* <h2>Count :{count} count2:{count2}</h2> */}
        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Inc +
        </button> */}
        <img src={image} />
        <h2>Name : {firstName}</h2>
        <h3>City : {address.address}</h3>
        <h4>Contact :{phone}</h4>
      </div>
    );
  }
}
export default UserClass;

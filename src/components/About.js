import {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";


class About extends Component{
  constructor(props){
     super(props)
    //  console.log("Perent constructor");
  }

  componentDidMount(){
    // console.log("Perent mount");
  }


  render(){
    // console.log("perent render");
    return (
      <div>
        <h1>About page....</h1>
        <UserClass name={"first"} location={"Delhi"}/>
      </div>
    );
  }
}


// const About = () => {
 
//   return (
//     <div>
//       <h1>About page....</h1>
//       <User/>
//       <UserClass name={"abu from (class)"} location={"Delhi class"}/>
//     </div>
//   );
// };

export default About;

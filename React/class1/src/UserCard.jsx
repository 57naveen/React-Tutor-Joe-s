import PropTypes from "prop-types"

const userData=[
  {
    name:"James",
    city:"New York",
    description:"Front-end developer",
    skills:["UI / UX ", "Front End Development","CSS","JavaScript","React","Node"],
    online:false,
    profile:"images/1.JPG"
  },
  {
    name:"Robert",
    city:"California",
    description:"Full stack web developer",
    skills:["Vlogging", "web Development","HTML","JavaScript","React","Node","Angular"],
    online:false,
    profile:"images/2.JPG"
  },
  {
    name:"TOM",
    city:"San Francisco",
    description:"Senior Software Developer",
    skills:["C","C++", "Java Programming","Python","C#","MySQL","MongoDB"],
    online:true,
    profile:"images/3.JPG"
  }
];


function User(props)
{
  return (
  <div className="card-container">
    <span className={props.online? "pro online" : "pro offline"}>
      {props.online?"ONLINE":"OFFLINE"}</span>
    <img src={props.profile} className="img" alt="" />
    <h3>{props.name}</h3>
    <h3>{props.city}</h3>
    <p>{props.description}</p>
    <div className="buttons">   
      <button className="primary">Message</button>
      <button className="primary outline">Follow</button>
    </div>
    <div>
    <div className="skills">
      <h6 >Skills</h6>
      <ul>
       {props.skills.map((skill,index)=>(
        <li key={index}>{skill}</li>
       ))}
      </ul>
    </div>
  </div>
  </div>
  )
}




export const UserCard = () => {
  return(
  <>
    {
     userData.map((user,index)=>(
         <User key={index} 
         name={user.name}
         city={user.city}
         description={user.description}
         online={user.online}
         profile={user.profile}
         skills={user.skills}
         />
     ))
    }
     </> 
     ); 
};

User.propTypes ={
  name:PropTypes.string.isRequired,
  city:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  skills:PropTypes.arrayOf(PropTypes.string).isRequired,
  online:PropTypes.bool.isRequired,
}     



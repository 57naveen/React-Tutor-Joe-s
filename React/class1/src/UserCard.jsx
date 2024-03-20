
function User()
{
  return (
  <div className="card-container">
    <span className="pro">ONLINE</span>
    {/* <img src="images/1.JPG" alt="" /> */}
    <h3>Full Name</h3>
    <h3>City</h3>
    <p>Front-end developer</p>
    <div>
      <button>Message</button>
      <button>Following</button>
    </div>
    <div>
      <h6>Skills</h6>
      <ul>
        <li>UI / UX</li>
        <li>Front End Development</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node</li>
      </ul>
    </div>
  </div>
  )
}




export const UserCard = () => {
  return (
    <div>
      <User/>
    </div>
  )
}

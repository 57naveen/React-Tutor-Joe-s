import {useState} from 'react'

export const UserDetails = () => {

  const [user,setUser] = useState ({fname:"NAV",lname:"KIS",age:24});

function changeHandler(e)
{
  setUser({...user,[e.target.name]:e.target.value});
}

  return (
   <>
   <h2>
    {user.fname} {user.lname},{user.age}
   </h2>
      <form>
        <input type='text' placeholder='Enter First Name' value={user.fname}  name='fname' onChange={changeHandler} />
        <input type='text' placeholder='Enter Last Name' value={user.lname} name='lname' onChange={changeHandler} />
        <input type='text' placeholder='Enter User Age' value={user.age} name='age' onChange={changeHandler} />
      </form>
   </>
  )
}

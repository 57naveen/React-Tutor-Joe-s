import {useState} from 'react'
import "./RegFrm.css";

export const RegFrm = () => {

  const [user,setUser]= useState({
    name:"Hukkum",
    age:24,
    gender:"Male",
    isMarried:true
  })
  return (
    <>
    <table>
      <tbody>
        <tr>
          <td>Name: </td>
          <td>{user.name}</td>
        </tr>
        <tr>
          <td>Age: </td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>Gender: </td>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>Marital Status: </td>
          <td>{user.isMarried ? "Married" : "Not Married" }</td>
        </tr>
      </tbody>
    </table>

    <form>
      <input type='text' placeholder='Full Name'/>
      <input type='number' placeholder='Age'/>
      <div className='gender'>
        <label htmlFor='male'>
        <input className='input' type='radio' name='gender' id='male'/>
         Male
        </label>
        <label htmlFor='female'>
        <input className='input' type='radio' name='gender' id='female'/>
        female
        </label>
      </div>
      
      <label for='isMarried'>
      <input type='checkbox' id='isMarried' />
      Is Married
      </label>
      
      
      
     
    
    </form>
    </>
  )
}

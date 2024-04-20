import React, { useEffect, useState } from 'react'
import { EmpolyeeData  } from './EmpolyeeData'
export default function App() {

  const [data,setData] = useState([]);
  const [Firstname,setFirstname] = useState ('')
  const [Lastname,setLastname] = useState ('')
  const [age,setage] = useState ('0')
  const [id,setId] = useState ('0')
  const [isupdate,setIsupdate] = useState(false)

  useEffect (() => {
     setData(EmpolyeeData)
  },[]);
   const handleEdit = (id) => {
    const dt =data.filter(item => item.id === id);
    if(dt !== undefined)
    {
      setIsupdate(true)
    setId(id);
     setFirstname(dt[0].Firstname);
     setLastname(dt[0].Lastname);
     setage(dt[0].age);
   }
   }
   
   const handleDelete = (id) => {
    if (id > 0)
    {
      if(window.confirm("Are you sure to delete this record ?"))
      {
     const dt = data.filter(item => item.id !== id)
       setData(dt);
      }
    }
   }
     
   const handlesave = (e) => {
    e.preventDefault();
    const dt = [...data];
    const newobject ={
      id : EmpolyeeData.length + 1,
      Firstname : Firstname,
      Lastname : Lastname,
      age :age, 
    }
    dt.push(newobject);
    setData(dt);
   }


   const handleupdate = () => {
    const index = data.map((item,) =>{
      return item.id
    
    }).indexof(id)

     const dt = {...data}
     dt[index].Firstname = Firstname;
     dt[index].Lastname = Lastname;
     dt[index].age = age;

     setData([...dt])
      handleclear();
   }

   const handleclear = () => {
    setId(0);
    setFirstname("");
    setLastname("");
    setage("");
    setIsupdate(false);
   }
  return (
    <div style={{backgroundColor:"pink"}}>
    {/* <h1 style={{textAlign:"center",backgroundColor:"blue",}}>Crud opeartion </h1> */}
    <div class="d-grid gap-2 col-6 mx-auto">
  <button class="btn btn-primary" type="button"><h1>Crud opeartion</h1></button></div>
    <hr></hr>
    
    <div style={{display:"flex", justifyContent:"center",marginTop:"10px", marginBottom:"10px", backgroundColor:"lightgray"}}>
      <div>
      
        <label> FIRST NAME :
          <input type='text' placeholder='enter first name' onChange={(e) => setFirstname(e.target.value) } value = {Firstname}/>
        </label>
      </div>  
      <div>
        <label> LAST NAME :
          <input type='text' placeholder='enter Last name' onChange={(e) => setLastname(e.target.value) } value = {Lastname}/>
        </label>
      </div>
 <hr></hr>
      <div>
        <label> AGE :
          <input type='text' placeholder='enter age' onChange={(e) => setage(e.target.value) } value = {age}/>
        </label>
      </div>
      <div>
      {
        !isupdate ?
        <button className='btn btn-primary' onClick={(e) => handlesave(e)}>save</button>
        :
        <button className='btn btn-primary' onClick={() => handleupdate()}>update</button>
      } 
     <button className='btn btn-danger'  onClick={() => handleclear()}>clear</button>
      </div>
    </div>
    <br></br>

    <table className='table table-hover'>
      <thead>
        <tr>
          <td>sr no.</td>
          <td>id</td>
          <td>First name</td>
          <td>Last name</td>
          <td>age</td>
          <td>action</td>
        </tr>
      </thead>
      <tbody>
          {
            data.map((item,index) => {
              return (
                <tr key = {index}>
                  <td>{index+1}</td>
                  <td>{item.id}</td>
                  <td>{item.Firstname}</td>
                  <td>{item.Lastname}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className='btn btn-primary' onClick={() => handleEdit(item.id)}>edit</button>&nbsp;
                    <button className='btn btn-danger'  onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
      </tbody>
    </table>
    
    </div>
  )
}

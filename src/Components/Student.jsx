import React,{useState} from 'react'

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
const Detail = () => {
  const [store,setStore] = useState(studentDetails);
  const [upadte,setUpadte] = useState(false);
  const [data,setData] = useState([]);
  const [remove,setRemove] = useState(false);

  const updateEvent = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }
  const addFormData = () => {
    if(upadte){
      const updateData = data.map((tableRow)=>tableRow.id === store.id ? store:tableRow);
      setData(updateData);
      setUpadte(false);
      setStore(studentDetails)
      setRemove(!remove)
    }
    else{
      let listItems = data;
       const item = {
        id:data.length,
        ...store
       }
       listItems = [...data,item];
       setData(listItems);
       deleteFormData();
       setRemove(!remove)
    }
  }
  const deleteFormData = () => {
    setStore(studentDetails);
  }
  const upadtetableRow = (tableRow) => {
    setStore(tableRow);
    setUpadte(true);
    setRemove(!remove)
  }
  const deletetableRow = (id) =>{
    const arrFilter = data.filter(item=>item.id !== id);
    console.log(arrFilter);
    setData(arrFilter);
    }
  return (
    <>
    {remove ? null : <>
        <button className='student-progress' onClick={()=>{setRemove(!remove)}}>Add New Student</button>
      <div className='tablecon'>
      <p  className='studentD'>Student Details</p>
        <table className="table1">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
              <th scope="col">Change</th>
              <th scope="col">Delete</th>
              
            </tr>
          </thead>
          <tbody>
          {data && data.map((tableRow) =>
            <tr className="">
              <th scope="tableRow">{tableRow.name}</th>
              <td>{tableRow.age}</td>
              <td>{tableRow.course}</td>
              <td>{tableRow.batch}</td>
              <td><button type= "sumbit" onClick={()=>{upadtetableRow(tableRow)}} className="edit-btn">edit</button></td>
              {/* <td><button  className="btn btn-danger">remove</button></td> */}
              <td><button onClick={()=>deletetableRow()} className="btn-btn-danger">Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div></> }
      {remove ? <div>
        <div className='Form-container'>
          <input className='inpt1' name='name' value={store.name} label='Name' placeholder='Name' onChange={updateEvent}  />
          <input className='inpt1' name='age' value={store.age} label='Age' placeholder='age' onChange={updateEvent}  />
          <input className='inpt1' name='course' value={store.course} label='course' placeholder='course' onChange={updateEvent}   />
          <input className='inpt1' name='batch' value={store.batch} label='Batch' placeholder='month' onChange={updateEvent}  />
        </div>
        <div>
          <button onClick={addFormData} className="form-submit">{upadte ? 'Update' : 'submit'}</button>
          <button onClick={deleteFormData} className="form-clear">Clear</button>
        </div>
      </div> : null}
    </>

  )
}


export default Detail;
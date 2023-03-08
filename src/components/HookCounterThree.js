import React,{useState} from 'react'

function HookCounterThree() { 
    const [name,setName] = useState({firstName: '' , lastName:''})
  return (
    <div>
        <input type="text" value={name.firstName} onChange={event => setName({...name , firstName:event.target.value})}/>
        <input type="text" value={name.lastName} onChange={event => setName({...name , lastName:event.target.value})}/>
        <h1>First Name  is {name.firstName}</h1>
        <h1>Last Name  is {name.lastName}</h1>
    </div>
  )
}

export default HookCounterThree
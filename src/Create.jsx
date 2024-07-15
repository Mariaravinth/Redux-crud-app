import React,{useState} from 'react'
import { addUser } from './UserReducer'
import { useDispatch } from 'react-redux'

function Create() {
    const[name,setname]=useState('')
    const[email,setemail]=useState('')

    const handleSubmit =(event)=>{
        event.preventDefault()
    }
    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Add a new user</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id='name' className='form-control' placeholder='Fill your name' onChange={e => setName(e.taget.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id='email' className='form-control' placeholder="Fill your email" onChange={e => setEmail(e.taget.value)}/>
                    </div><br/>
                    <button  className='btn btn-info'>Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Create
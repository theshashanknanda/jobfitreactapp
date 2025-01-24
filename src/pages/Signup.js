import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import scenicplants from '../img/scenicplants.png'
import eye from '../img/eye.png'
import eyeclosed from '../img/eyeclosed.png'
import './Signup.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
    let [isPasswordVisible, setIsPasswordVisible] = useState(false);
    let [isConfirmVisible, setIsConfirmVisible] = useState(false)
    let [password, setPassword] = useState('')
    let [confirm, setConfirm] = useState('')

    const navigate = useNavigate()

    let [arePasswordsSame, setArePasswordsSame] = useState(true)

    const BASE_URL = "https://jobfitai-orpin.vercel.app/api/v1";

    let [data, setData] = useState({})

    let changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    let submitHandler = (e) => {
        console.log(data)
        register()
    }

    const register = async() => {
        let response = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                password: data.password,
            })
        })

        let json = await response.json()
        if(json.success){
            toast.success("Registered successfully")

            setTimeout(() => {
                navigate('/login')
            }, 3000)
        }else{
            toast.error("Error registering user")
        }

        console.log(json)
    }

    let removeBotFromDom = () => {
        let script1 = document.getElementById('script1')
        let script2 = document.getElementById('script2')
        let iframe = document.querySelector('iframe')

        script1.remove()
        script2.remove()
        iframe.remove()

        iframe = document.querySelector('iframe')
        iframe.remove()
    }

  return (
    <div className='min-h-[100vh]' style={{backgroundImage: `url(${scenicplants})`}}>
        <NavBar></NavBar>
        
        <div className='signup w-[450px] mx-auto bg-white mt-[10vh] rounded-2xl p-4'>
            <h1 className='text-center font-extrabold text-4xl mt-4'>Signup</h1>
            <p className='text-center py-4 font-semibold'>
                Hey, Enter your details to create a new account
            </p>

            <form className='w-[100%] text-center'>
                <input name='name' placeholder='Enter Name' type='text' className='border-2 border-grey-900 p-4 w-[80%] rounded-md mt-4 mb-2'
                onChange={(e) => {
                    changeHandler(e)
                }}/>
                <input name='email' placeholder='Enter Email' type='email' className='border-2 border-grey-900 p-4 w-[80%] rounded-md mt-4 mb-2'
                onChange={(e) => {
                    changeHandler(e)
                }}/>
                <div className='passwordcontainer relative w-[80%] mx-auto'>
                    <input name='password' placeholder='Enter Password' 
                    type={
                        isPasswordVisible ?
                        `text` :
                        `password`
                    }
                    className='w-[100%] h-full border-2 border-grey-900 p-4 rounded-md mt-4 mb-2'
                    onChange={(e) => {
                        setPassword(e.target.value)
                        setArePasswordsSame(e.target.value === confirm)
                        changeHandler(e)
                    }}/>
                    <img className='absolute right-4 top-[40%]' 
                    src={
                        isPasswordVisible ?
                        `${eye}`
                        :
                        `${eyeclosed}`
                    } alt='eye'
                    onClick={() => {
                        setIsPasswordVisible(!isPasswordVisible)
                    }}/>
                </div>

                <div className='passwordcontainer relative w-[80%] mx-auto'>
                    <input name='confirm' placeholder='Confirm Password' 
                    type={
                        isConfirmVisible ?
                        `text` :
                        `password`
                    }
                    className='w-[100%] h-full border-2 border-grey-900 p-4 rounded-md mt-4 mb-2'
                    onChange={(e) => {
                        setConfirm(e.target.value)
                        setArePasswordsSame(password === e.target.value)
                        changeHandler(e)
                    }}/>
                    <img className='absolute right-4 top-[40%]' 
                    src={
                        isConfirmVisible ?
                        `${eye}`
                        :
                        `${eyeclosed}`
                    }
                     alt='eye'
                    onClick={() => {
                        setIsConfirmVisible(!isConfirmVisible)
                    }}/>
                </div>

                {
                    !arePasswordsSame ?
                    <p className='font-medium w-[80%] mx-auto text-right text-red-500'> Passwords dont match</p> :
                    <p></p>
                }

                <p className='font-semibold w-[80%] mx-auto text-right'>
                    <NavLink>Already have an account?</NavLink>
                </p>

                <button className='bg-[#6D01B6] text-white rounded-md px-4 py-3 my-6 w-[80%] mx-auto font-semibold'
                onClick={(e) => {
                    submitHandler(e)
                }}>
                    <NavLink>Register Now &gt;</NavLink>
                </button>
            </form>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Signup

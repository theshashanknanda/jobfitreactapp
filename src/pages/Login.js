import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import scenicplants from '../img/scenicplants.png'
import eye from '../img/eye.png'
import eyeclosed from '../img/eyeclosed.png'
import './Signup.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux'
import { setJwt } from '../redux/slices/JwtSlice'

const Login = ({isLoggedIn, setIsLoggedIn}) => {
    let dispatch = useDispatch()
    let jwt = useSelector((state) => state.jwt.value)
    let navigate = useNavigate()

    const BASE_URL = "https://jobfitai-orpin.vercel.app/api/v1";

    let [isPasswordVisible, setIsPasswordVisible] = useState(false);
    let [data, setData] = useState({})
    let [isChatBotVisible, setIsChatBotVisible] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            // check for use disability length
            // if length > 0
            //      move to dashboard
            // else
            //      do nothing
            console.log(jwt)
            checkForDisabilityUpdate();
    
        }, 5000)

        return () => clearInterval(intervalId)
    }, [jwt])

    const checkForDisabilityUpdate = async() => {
        try{
            const response = await fetch(`${BASE_URL}/getUser`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`
                },
            })
    
            const json = await response.json()
            if(response.status !== 200){
                console.log('Cannot fetch user')
                setIsLoggedIn(false)
            }else{
                // check if disability is set
                console.log("MAPPED DISABILITY: " + json.data?.mappedDisability)
                if(json.data?.mappedDisability.length > 0){
                    console.log('Logged in successfully')
                    setIsLoggedIn(true)
                    navigate('/dashboard')
                }
            }
        }catch(error){
            console.log(`Error: ${error.message}`)
        }
    }

    let changeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    let submitHandler = (e) => {
        console.log(data)
        login()
    }

    const login = async() => {
            const response = await fetch(`${BASE_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                })
            })
    
            const json = await response.json()
            if(json.success){
                toast.success("Logged in successfully")
                toast.success("Interact with the bot to proceed forward")

                console.log(json)
                // set jwt token to redux store
                let token = json.token;

                // set in local storage
                localStorage.setItem('jwt', token)
                dispatch(setJwt(token))
                setIsChatBotVisible(true)
            }else{
                toast.error("Login failed")
            }
    
            console.log(json)
    }

  return (
    <div className='min-h-[100vh]' style={{backgroundImage: `url(${scenicplants})`}}>
        <NavBar></NavBar>
        
        <div className='signup w-[450px] mx-auto bg-white mt-[10vh] rounded-2xl p-4'>
            <h1 className='text-center font-extrabold text-4xl mt-4'>Login</h1>
            <p className='text-center py-4 font-semibold'>
                Hey, Enter your details to log into an existing account
            </p>

            <form className='w-[100%] text-center'>
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

                <p className='font-semibold w-[80%] mx-auto text-right'>
                    <NavLink>Already have an account?</NavLink>
                </p>

                <button className='bg-[#6D01B6] text-white rounded-md px-4 py-3 my-6 w-[80%] mx-auto font-semibold'
                onClick={(e) => {
                    submitHandler(e)
                }}>
                    <NavLink>Login Now &gt;</NavLink>
                </button>
            </form>
        </div>
        {
            isChatBotVisible ?
            <Helmet>
                <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
                <script src="https://files.bpcontent.cloud/2025/01/21/19/20250121195802-3406UJAP.js"></script>
            </Helmet> :
            <div></div>
        }
        <ToastContainer/>
    </div>
  )
}

export default Login;

import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { jobTitles } from '../data/jobTitles';
import { setJwt } from '../redux/slices/JwtSlice';

const Dashboard = ({isLoggedIn, setIsLoggedIn}) => {
    let jwt = useSelector((state) => state.jwt.value)
    let dispatch = useDispatch()

    const BASE_URL = "https://jobfitai-orpin.vercel.app/api/v1";
    let navigate = useNavigate()

    let [urlToFetch, setUrlToFetch] = useState("")
    let [rows, setRows] = useState([])
    let [jobsRecommended, setJobRecommended] = useState([])

    const URLS = {
        // Physical disability
        "Physical Disability": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-physical-disability/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",
        
        // Vision Impairment
        "Vision Impairment": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-vision-impairment/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",
        
        // Hearing Impairment
        "Hearing Impairment": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-hearing-impairment/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",

        // Cognitive Disability
        "Cognitive Disability": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-cognative-disability/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",

        // Mental health disability
        "Mental Health Disability": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-mental-health/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",

        // Speech or comm disorder
        "Speech or Communication Disorder": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-speech-or-comm-disorder/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3",

        // Chronic illness
        "Chronic Illness or Medical Condition": "https://api.apify.com/v2/actor-tasks/complex_allergy~indeed-scraper-chronic-illness/runs/last/dataset/items?token=apify_api_CmZ860lJPawo6MrQ0KrF25sWhFBIRH1WnmQ3"
    }

    // fetch user data
    useEffect(() => {
        fetchUserData()
    }, [])

    const fetchUserData = async () => {
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
                // set url to fetch data
                setUrlToFetch(URLS[json.data.mappedDisability])
                setJobRecommended(jobTitles[json.data.mappedDisability].join(', '))
                console.log("Dataset url: " + urlToFetch)
            }
        }catch(error){
            console.log(`Error: ${error.message}`)
        }
    }

    // fetch data from url dataset
    useEffect(() => {
        fetchAndLoadJobData()
    }, [urlToFetch])

    const fetchAndLoadJobData = async () => {
        let response = await fetch(urlToFetch);
        let json = await response.json()
        
        console.log(json)

        setRows(json.map(item => ({
            title: item?.positionName,
            platform: "Indeed",
            date: item?.postedAt,
            salary: item?.salary == null ? "Not specified" : item?.salary,
            company: item?.company,
            externalApplyLink: item?.externalApplyLink,
        })))   
    }

    let columns = [
        {
            name: "Job Title",
            selector: row => row.title,
            cell: row => (
                <a href={row.externalApplyLink} target='_blank'>
                    {row.title}
                </a>
            )
        },
        {
            name: "Platform",
            selector: row => row.platform,
        },
        {
            name: "Date Posted",
            selector: row => row.date,
        },
        {
            name: "Salary",
            selector: row => row.salary,
        },
        {
            name: "Company",
            selector: row => row.company,
        }
    ]

  return (
    <div className='bg-[#F4F4F4] pt-8'>
      <div className='w-[90%] mx-auto flex justify-end'>
        <button onClick={() => {
            setIsLoggedIn(false)
            dispatch(setJwt(''))
            localStorage.removeItem('jwt')
            navigate('/')
        }} className='bg-[#04789B] text-white font-semibold px-6 py-1.5 mb-4 rounded-full'>
            Logout
        </button>
      </div>

      <div className='font-extrabold text-3xl w-[90%] mx-auto pb-6'>
        Jobs recommended (
            {jobsRecommended}
        )
      </div>

      <div className='w-[90%] mx-auto rounded-2xl shadow-lg shadow-gray-500 p-4 bg-white mb-8'>
        <DataTable columns={columns} data={rows} fixedHeader pagination/>
      </div>
    </div>
  )
}

export default Dashboard

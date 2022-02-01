import { useState, useEffect } from 'react'
import axios from 'axios'
import rateLimit from 'axios-rate-limit'
import Head from 'next/head'
// import Layout from '../components/layout'
// import Image from 'next/image'
// import Link from 'next/link'
// import { useInView } from 'react-intersection-observer';

// import { log, isItMobile, isItDesktop, isItIPad } from '../components/base'
import Navbar from '../components/navbar'
import AddUserPanel from '../components/addUserPanel'
// import LoadingScreen from './loadingScreen'

const axiosLimited = rateLimit(axios.create(), { maxRequests: 10, perMilliseconds: 1000, maxRPS: 150 })
const API_URL = process.env.NEXT_PUBLIC_API_URL

// export const getServerSideProps = async () => {
// }

const Index = ({ dataPHP, }) => {
    // await axiosLimited.get(`${API_URL}/dbAPI/quiz_new/?subCategory__icontains=${top1stUserCategory}&limit=4`

    const [addUser, setAddUser] = useState(false)
    const [popUpOpen, setPopUpOpen] = useState(false)

    useEffect (() => {
        if (addUser) {
            setPopUpOpen(true)
        } else {
            setPopUpOpen(false)
        }
    }, [addUser])
   
    return (
        <>
            {/* <Layout> */}

                {/* <LoadingScreen loadState={loadState} /> */}

                <Head>
                    <title>Hotel Manager</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
                    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2&display=swap" rel="stylesheet" />
                </Head>

                <div className='flex h-screen'>

                    <Navbar addUser={addUser} popUpOpen={popUpOpen} setAddUser={setAddUser}/>

                    <AddUserPanel addUser={addUser} setAddUser={setAddUser}/>

                    <main className={`mr-64 mt-6 ease-in-out transition-all duration-300
                                    ${popUpOpen ? 'blur pointer-events-none' : ''} `}>
                        Main Panel
                    </main>

                </div>


            {/* </Layout> */}
        </>
    );
}
 
export default Index;
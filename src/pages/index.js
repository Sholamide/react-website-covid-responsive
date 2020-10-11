import React, { useState, useEffect } from 'react'
import Analytics from '../components/Analytics';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/infoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/infoSection/Data';
import NavBar from '../components/NavBar'
import Prevention from '../components/Prevention';
import SideBar from '../components/SideBar'
import { fetchData } from "../components/Api";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [country, setCountry] = useState([]);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        setData(fetchedData);
        setCountry(country);
        console.log(fetchedData);
        console.log(country);
    }


    useEffect(() => {
        const fetchDataAPI = async () => {
            setData(await fetchData());
        }

        console.log(data);

        fetchDataAPI();
    }, [])

    return (
        <>
            <SideBar isOpen={isOpen} toggle={toggle} />
            <NavBar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Prevention />
            <Analytics data={data} handleCountryChange={handleCountryChange} country={country} />
            <InfoSection {...homeObjThree} />
            <Footer />
        </>
    )
}

export default Home

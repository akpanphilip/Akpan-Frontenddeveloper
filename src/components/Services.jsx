import rocketImg from '../assets/rocket.png'
import { useState, useEffect } from 'react';
import BeautifulModal from './Modal';
import {
    ArrowRightIcon, ArrowLeftIcon
} from '@heroicons/react/24/outline'


import axios from 'axios';
const Services = () => {
    const perPage = 10; // Number of items per page
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://api.spacexdata.com/v3/rockets?page=${currentPage}&per_page=${perPage}`);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // useEffect(() => {
    //     axios.get('https://api.spacexdata.com/v3/rockets')
    //         .then(response => {
    //             setData(response.data);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching data:', error);
    //         });
    // }, []);
    return (
        <div className="service-section">
            <h1 className="title-text uppercase">Rockets</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 py-16 px-4 md:px-16 lg:px-32 xl:px-48">
                {data.map(item => (


                    <div className="service bg-gray-900 shadow" key={item.id}>
                        <div className="rocket-img-bg">
                            <img src={rocketImg} className='rocketImg' alt="" />
                            <span className="company">{item.company}</span>
                        </div>
                        <div className="service-info">
                            <p className="rocket-name">{item.rocket_name}</p>
                            <p className="country">{item.country}</p>
                            <p className="desc">
                                {item.description}
                            </p>
                        </div>
                        {/* modal */}
                        <div className="flex items-center justify-center">
                            <BeautifulModal isOpen={isModalOpen} onClose={closeModal}>
                                <h2 className="text-2xl font-semibold mb-2">Item Data</h2>

                                <div className="flex justify-between">
                                    <span>Rocket Id</span>
                                    <span>{item.rocket_id}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Rocket Name</span>
                                    <span>{item.rocket_name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Rocket Type</span>
                                    <span>{item.rocket_type}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>First Flight</span>
                                    <span>{item.first_flight}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Country</span>
                                    <span>{item.country}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Company</span>
                                    <span>{item.company}</span>
                                </div>
                            </BeautifulModal>
                        </div>
                        <button className='view-more' onClick={openModal}>view more</button>
                    </div>


                ))}
            </div>
            <div className="flex justify-center">
                <button
                    className="text-dark py-2 px-4 rounded-l flex items-center"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ArrowLeftIcon className="h-3 w-3 mr-2" aria-hidden="true" />
                    Previous
                </button>
                <button
                    className="text-dark py-2 px-4 rounded-r flex items-center"
                    onClick={() => handlePageChange(currentPage + 1)}
                >
                    Next
                    <ArrowRightIcon className="h-3 w-3 ml-2" aria-hidden="true" />
                </button>
            </div>
        </div>
    )
}

export default Services


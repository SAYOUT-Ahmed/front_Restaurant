import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Link, useParams } from 'react-router-dom';
//import { StarFill } from 'react-bootstrap-icons';
import axios from 'axios';
import logo from '../Style/drinks.jpg'


function Details() {
    const { id } = useParams();
    const [restaurantData, setResraurantData] = useState([]);
    const [spec, setSpec] = useState([]);
    const [photos, setPhotos] = useState([]);



    const getRestaurantsById = async () => {
        try {
            const response = await axios.get(`api/restaurants/${id}`);
            setResraurantData(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getSpec = async () => {
        try {
            const response = await axios.get(`api/restaurants/${id}/specialite`);
            setSpec(response.data);
        } catch (error) {
            console.error(error);
        }
    };
   /* const getPhotoByResto = async () => {
        try {
            const response = await axios.get(`/photos/resto/${id}/photos`);
            setPhotos(response.data);
        } catch (error) {
            console.error(error);
        }
    }; */
    const filteredPhotos = photos.filter((photo) => photo.id === 1);
    


    useEffect(() => {
        getRestaurantsById();
        getSpec();
      //  getPhotoByResto();

    }, []);
    const stars = [];

    for (let i = 0; i < restaurantData.rank; i++) {
        stars.push('⭐'); 
    }

    return (
        <div>
            <div className='row p-3 shadow rounded-3 '>
                <div className='col-md-7'>
                    <div className='row justify-content-center p-2 '>
                        <div className='col-md-6 my-2'>
                            <img className='img-fluid rounded-3' src={logo} alt='' />
                        </div>
                        <div className='col-md-6 my-2'>
                            <div class="alert alert-light text-center rounded-5" role="alert">
                                <h2><b>{restaurantData.nom}</b></h2>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Opening Days</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><i className='me-2'>{restaurantData.week}</i></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Opening Hours</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><span className=" badge rounded-pill bg-success text-light">{restaurantData.open_hour}</span></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Closing Hours</b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6><span className=" badge rounded-pill bg-danger text-light"> {restaurantData.close_hour}</span></h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Adresse </b></h6>
                                </div>
                                <div className='col-md-8'>
                                    <h6> {restaurantData.adresse} </h6>
                                </div>
                            </div>
                            <div className='row justify-content-center my-2'>
                                <div className='col-md-4'>
                                    <h6><b className=''>Specialité </b></h6>
                                </div>
                                <div className='col-md-8'>
                                    {spec.map(s => (
                                        <h6 key={s.id}> {s.nom} {' '}</h6>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-5 py-3'>
                    <iframe
                        className='rounded-3 justify-content-center'
                        title="Google Maps"
                        width="100%"
                        height="100%"
                        src={"https://maps.google.com/maps?q=" + restaurantData.lattitude + "," + restaurantData.longitude + "&hl=es;&output=embed"}
                        allowFullScreen
                    ></iframe>
                </div>
            </div>


        </div>
    );

}
export default Details;
import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../Style/drinks.jpg'
//import '../../Css/RestoCardsCss.css';

function SearchByZone() {
    const [villes, setVilles] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const [zones, setZones] = useState([]);
    const [selectedZone, setSelectedZone] = useState('');

    const [restos, setRestos] = useState([]);




    const getVilles = async () => {
        try {
            const response = await axios.get(`/api/villes/all`);
            setVilles(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const getZonesByVille = async () => {
        try {
            const response = await axios.get(`/api/villes/${selectedValue}/zones`);
            setZones(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getVilles();
        getZonesByVille();


    }, [selectedValue]);

    const getRestaurantsByVilleZones = () => {
        // Make the API request to filter exams by date
        axios.get(`/api/villes/${selectedValue}/zones/${selectedZone}/restaurants`)
            .then(response => {
                // Set the filtered exams in the state
                setRestos(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };
    const handleChange = event => {
        setSelectedValue(event.target.value);
    };
    const handleZoneChange = event => {
        setSelectedZone(event.target.value);
    };

    const handleFindClick = () => {
        getRestaurantsByVilleZones();
    };
   

    return (
        <div className='justify-content-center my-5 pt-5 ' >
            <Container className='mb-3 pt-5 rounded-4' style={{ backgroundColor: 'white' }}>
                <h2 style={{ color: '#576CBC' }}><b> </b></h2>
                <div className='row p-5  justify-content-center'>
                    <div className='col-md-6'>
                        <select className='form-select mb-2' value={selectedValue} onChange={handleChange}>
                            <option value="" disabled>Choisissez ville</option>
                            {villes.map(item => (
                                <option key={item.id} value={item.nom}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <select className='form-select mb-2' value={selectedZone} onChange={handleZoneChange}>
                            <option value="" selected>Choisissez zone</option>
                            {zones.map(item => (
                                <option key={item.id} value={item.nom}>
                                    {item.nom}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='row p-2 justify-content-center text-center'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4'>
                        <Button className='btn btn-outline-info btn-round findbtn' onClick={handleFindClick} ><b>Chercher</b></Button>
                    </div>
                    <div className='col-md-4'></div>
                </div>
            </Container>
            <Container className='my-5 py-5' fluid style={{}}>
                <div className='row justify-content-center'>
                    {restos.map(resto => (
                        <div className='col-md-3'>
                            <div className="card card-blog" key={resto.id}>
                                <div className="card-image">
                                    <Link to="#"> <img className="img-fluid" src={logo} alt='' />
                                        <div className="card-caption"> {resto.nom} </div>
                                    </Link>
                                    <div className="ripple-cont"></div>
                                </div>
                                <div className="table">
                                    <h5 className="category " style={{ color: '#869aeb' }}><b>{resto.adresse}</b></h5>
                                    <p className="card-description">
                                        <h6><b>Opening Hours : </b><span className=" badge rounded-pill bg-info text-light">{resto.open_hour} - {resto.close_hour}</span></h6>
                                    
                                    </p>
                                    <Button className='btn btn-info btn-round' tag={Link} to={"/" + resto.id}><b>Details</b></Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );



}
export default SearchByZone;
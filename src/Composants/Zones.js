import React, { useState, useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const ZoneCrud = () => {
  const [zones,setZones] = useState([]);  
  const [nom,setNom] = useState(null);
  const [ville,setVille] = useState(null);
  const [Userid, setUserId] = useState(null);

  const getZones = async () => {
    axios.get('http://localhost:8080/api/zones/all')
        .then(response => {
            setZones(response.data);
        })
        .catch(error => {
            console.log(error);
  });
    };
    const [villes,setVilles] = useState([]);
    const [selectedVille,setSelectedVille] = useState('');


    const getVilles = async () => {
  axios.get('http://localhost:8080/api/villes/all')
      .then(response => {
          setVilles(response.data);
      })
      .catch(error => {
          console.log(error);
    });
    };
    const handleChange = event => {
    setSelectedVille(event.target.value);
    };


    const params = ({
    "nom": nom
    //"ville" : ville
    });
    const addZones = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/zones/save', params);
            console.log(params);
            setZones([...zones, response.data]);
            setNom('');
            //setVille('');
        } catch (error) {
            console.error(error);
        }
        //window.location.reload();
    };
    useEffect(() => {
        getZones();
        getVilles();
    }, []);
  return (
    <div>
      <div className="my-3" style={ {color: "white"}}>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Nom :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Ville :</h6>
                    </div>
                    <div className="col-md-8">
                        <select className="form-select" value={selectedVille} onChange={handleChange}>
                            <option value="" >Select a city</option>
                            {villes.map(item => (
                                <option key={item.id} value={item.id}>{item.nom}</option>
                            ))}
                        </select>
                    </div>
                </div>
                
                
                    <div className="row text-start">
                        <button className="btn btn-primary" onClick={addZones}>
                            Add Zone
                        </button>
                    </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <table className="table table-sm">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Villes</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                        {zones.map(zone => (
                              <tr key={zone.id}>
                                <th scope="row">{zone.id}</th>
                                <td>{zone.nom}</td>
                              {/* <td>{zone.ville.nom}</td>*/}  
                                
                              </tr>
                        ))}
                            </tbody>
                          </table>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default ZoneCrud;
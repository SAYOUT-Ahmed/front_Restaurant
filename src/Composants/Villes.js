import React, { useState, useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const VilleCrud = () => {
  const [villes,setVilles] = useState([]);  
  const [nom,setNom] = useState(null);
  const [Userid, setUserId] = useState(null);


  const getVilles = async () => {
    axios.get('http://localhost:8080/api/villes/all')
        .then(response => {
            setVilles(response.data);
        })
        .catch(error => {
            console.log(error);
  });
  };
  const addVilles = async () => {
  try {
      const response = await axios.post('/api/villes/save', params);
      //console.log(params);
      setVilles([...villes, response.data]);
      setNom(null);
  } catch (error) {
      console.error(error);
  }
 window.location.reload();
  };


  const getVillesById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/villes/id/${id}`
    );
    setUserId(response.data.id);
    setNom(response.data.nom);
  } catch (error) {
    console.error(error);
  }
};


const deleteVillesById = async (id) => {
  try {
      await axios.delete(`/api/villes/delete/${id}`);
      const updatedUsers = villes.filter((ville) => ville.id !== id);
      setVilles(updatedUsers);
  } catch (error) {
      console.error(error);
  }
  };


  const updateVilles = async () => {
  try {
    const response = await axios.put(`/api/villes/update/${Userid}`, {
      nom: nom,
    });
    const updatedUsers = villes.map((ville) => {
      if (ville.id === response.data.id) {
        return response.data;
      }
      return ville;
    });
    setVilles(updatedUsers);
    setNom(null);
  } catch (error) {
    console.error(error);
  }
  window.location.reload();
};
useEffect(() => {
  getVilles();
}, []);


const params = ({
    "nom": nom,
   // "ville" : ville
});
    

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
                
                
                
                {Userid ? (
                <div className="row  text-start">
                  <button className="btn btn-success" onClick={updateVilles}>
                        Update Ville
                  </button>
                 </div>
                          ) : (
                <div className="row text-start">
                  <button className="btn btn-primary" onClick={addVilles}>
                         Add Ville
                  </button>
                </div>
                              )}

                    
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <table className="table text-light">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                        {villes.map(ville => (
                              <tr key={ville.id}>
                                <th scope="row">{ville.id}</th>
                                <td>{ville.nom}</td>
                                <td> 
                                    <button className="btn btn-outline-primary mx-2" onClick={() => getVillesById(ville.id)}>
                                      Edit
                                     </button>
                                    <button className="btn btn-danger mx-2" onClick={()=> deleteVillesById(ville.id)}>Delete</button>
                                </td>
                                
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

export default VilleCrud;

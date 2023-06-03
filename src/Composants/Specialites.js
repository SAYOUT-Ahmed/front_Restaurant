import React, { useState, useEffect } from "react";
import axios from "axios";
import userEvent from "@testing-library/user-event";

const SpCrud = () => {
  const [specialites,setSpecialites] = useState([]);  
  const [nom,setNom] = useState('');
  const [Userid, setUserId] = useState(null);


  const getSpecialites = async () => {
    axios.get('http://localhost:8080/api/specialites/all')
        .then(response => {
            setSpecialites(response.data);
        })
        .catch(error => {
            console.log(error);
  });
};

const getSpecialiteById = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/specialites/${id}`
    );
    setUserId(response.data.id);
    setNom(response.data.nom);
    
  } catch (error) {
    console.error(error);
  }
};

const deleteSpecialityById = async (id) => {
    try {
        await axios.delete(`/api/specialites/sp/${id}`);
        const updatedUsers = specialites.filter((specialite) => specialite.id !== id);
        setSpecialites(updatedUsers);
    } catch (error) {
        console.error(error);
    }
};
const updateSpecialite = async () => {
    try {
      const response = await axios.put(`/api/specialite/update/${Userid}`, {
        nom: nom,
      });
      const updatedUsers = specialites.map((specialite) => {
        if (specialite.id === response.data.id) {
          return response.data;
        }
        return specialite;
      });
      setSpecialites(updatedUsers);
      setNom(null);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

const params = ({
    "nom": nom,
   // "ville" : ville
});
    const addSpecialites = async () => {
        try {
            const response = await axios.post('/api/specialites/save', params);
            setSpecialites([...specialites, response.data]);
            setNom('');
        } catch (error) {
            console.error(error);
        }
       window.location.reload();
    };
    useEffect(() => {
        getSpecialites();
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
                
                
                
                    <div className="row text-start">
                        <button className="btn btn-primary" onClick={addSpecialites}>
                            Add Speciality
                        </button>
                    </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                            <table className="table">
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nom</th>
                                <th scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                        {specialites.map(specialite => (
                              <tr key={specialite.id}>
                                <th scope="row">{specialite.id}</th>
                                <td>{specialite.nom}</td>
                                <td>
                      
                      <button className="btn btn-outline-primary mx-2" onClick={() => getSpecialiteById(specialite.id)}>
                        Edit
                      </button>
                      <button className="btn btn-danger mx-2" onClick={()=> deleteSpecialityById(specialite.id)}>Delete</button>
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

export default SpCrud;

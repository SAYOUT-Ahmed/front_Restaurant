import React, { useState, useEffect } from "react";
import axios from "axios";

const RestaurantCrud = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [nom, setNom] = useState(null);
  const [adresse, setAdresse] = useState(null);
  const [lattitude, setLattitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [week, setWeek] = useState(null);
  const [rank, setRank] = useState(null);
  const [open_hour, setOpenHour] = useState(null);
  const [close_hour, setCloseHour] = useState(null);
  const [Userid, setUserId] = useState(null);

  const getRestaurants = async () => {
    await axios
      .get("http://localhost:8080/api/restaurants/all")
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addRestaurant = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/restaurants/save",
        {
          nom: nom,
          adresse: adresse,
          lattitude: lattitude,
          longitude: longitude,
          week: week,
          rank: rank,
          open_hour: open_hour,
          close_hour: close_hour,
        }
      );
      console.log(
        nom,
        adresse,
        lattitude,
        longitude,
        week,
        rank,
        open_hour,
        close_hour
      );
      setRestaurants([...restaurants, response.data]);
      setNom(null);
      setAdresse(null);
      setLattitude(null);
      setLongitude(null);
      setWeek(null);
      setRank(null);
      setOpenHour(null);
      setCloseHour(null);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };
  const getRestaurantById = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/restaurants/${id}`
      );
      setUserId(response.data.id);
      setNom(response.data.nom);
      setAdresse(response.data.adresse);
      setLattitude(response.data.lattitude);
      setLongitude(response.data.longitude);
      setWeek(response.data.week);
      setRank(response.data.rank);
      setOpenHour(response.data.open_hour);
      setCloseHour(response.data.close_hour);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRestaurantById = async (id) => {
    try {
        await axios.delete(`/api/restaurants/${id}`);
        const updatedUsers = restaurants.filter((restaurant) => restaurant.id !== id);
        setRestaurants(updatedUsers);
    } catch (error) {
        console.error(error);
    }
};
  const updateRestaurant = async () => {
    try {
      const response = await axios.put(`/api/restaurants/update/${Userid}`, {
        nom: nom,
        adresse: adresse,
        lattitude: lattitude,
        longitude: longitude,
        week: week,
        rank: rank,
        open_hour: open_hour,
        close_hour: close_hour,
      });
      const updatedUsers = restaurants.map((restaurant) => {
        if (restaurant.id === response.data.id) {
          return response.data;
        }
        return restaurant;
      });
      setRestaurants(updatedUsers);
      setNom(null);
      setAdresse(null);
      setLattitude(null);
      setLongitude(null);
      setWeek(null);
      setRank(null);
      setOpenHour(null);
      setCloseHour(null);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };
  useEffect(() => {
    getRestaurants();
  }, []);
  return (
    <div>
      <div className="my-3" style={{ color: "white" }}>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>nom :</h6>
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
            <h6>Adresse :</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={adresse}
              onChange={(e) => setAdresse(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Lattitude</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={lattitude}
              onChange={(e) => setLattitude(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Longtitude</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Week</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={week}
              onChange={(e) => setWeek(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Rank</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </div>
        </div>
        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Open Hour</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={open_hour}
              onChange={(e) => setOpenHour(e.target.value)}
            />
          </div>
        </div>

        <div className="row my-2 justify-content-center">
          <div className="col-md-4 text-center">
            <h6>Close Hour</h6>
          </div>
          <div className="col-md-8">
            <input
              type="text"
              className="form-control  d-inline-block"
              value={close_hour}
              onChange={(e) => setCloseHour(e.target.value)}
            />
          </div>
        </div>

        {Userid ? (
          <div className="row  text-start">
            <button className="btn btn-success" onClick={updateRestaurant}>
              Update Restaurant
            </button>
          </div>
        ) : (
          <div className="row text-start">
            <button className="btn btn-primary" onClick={addRestaurant}>
              Add Restaurant
            </button>
          </div>
        )}
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <table className="table text-light table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">open_hour</th>
                  <th scope="col">close_hour</th>
                  <th scope="col">week</th>
                  <th scope="col">Rank</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {restaurants.map((restaurant) => (
                  <tr key={restaurant.id}>
                    <th scope="row">{restaurant.id}</th>
                    <td>{restaurant.nom}</td>
                    <td>{restaurant.adresse}</td>
                    <td>{restaurant.open_hour}</td>
                    <td>{restaurant.close_hour}</td>
                    <td>{restaurant.week}</td>
                    <td>{restaurant.rank}</td>
                    <td>
                      
                      <button className="btn btn-outline-primary mx-2" onClick={() => getRestaurantById(restaurant.id)}>
                        Edit
                      </button>
                      <button className="btn btn-danger mx-2" onClick={()=> deleteRestaurantById(restaurant.id)}>Delete</button>
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

export default RestaurantCrud;

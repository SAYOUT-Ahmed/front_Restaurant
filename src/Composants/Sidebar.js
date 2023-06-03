import React from "react";
import '../Style/style.css';


function Sidebar() {
    return(
        <div className="bg-white sidebar p-2">
            <div className="m-2">
                <i className="bi bi-discord me-3 fs-4"></i>
                <span className="brand-name fs-4">Restaurant</span>
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item py-2 my-1" href="/">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className="fs-5">Dashboard</span>
                </a>

                <a className="list-group-item py-2 my-1" href="villes">
                <i className="bi bi-map fs-4 me-3"></i>
                    <span className="fs-5">Villes</span>
                </a>

                <a className="list-group-item py-2 my-1" href="restaurants">
                <i className="bi bi-r-square fs-4 me-3"></i>
                    <span className="fs-5">Restaurants</span>
                </a>

                <a className="list-group-item py-2 my-1" href="specialites">
                    <i className="bi bi-clipboard fs-4 me-3"></i>
                    <span className="fs-5">Specialités</span>
                </a>

                <a className="list-group-item py-2 my-1" href="zones">
                    <i className="bi bi-signpost-split fs-4 me-3"></i>
                    <span className="fs-5">Zones</span>
                </a>
            </div>


        </div>












    );
}

export default Sidebar
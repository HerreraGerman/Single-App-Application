import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return(
        <div className="home">
            <h1>Home</h1>
            <Link to="myProyects">My Proyects!</Link>
        </div>
    );
}

export default Home;
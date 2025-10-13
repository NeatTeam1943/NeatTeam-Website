import React from 'react'
import { Link, useLocation } from "react-router-dom";
import "../css files/RobotNav.css"

export default function RobotNav() {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };
    
    return (
        <section className={"robotnav"}>
            <nav>
                <Link to={"/robot/koren2025"} className={isActive("/robot/koren2025") ? "active" : ""}>Koren 2025</Link>
                <Link to={"/robot/Melody2024"} className={isActive("/robot/Melody2024") ? "active" : ""}>Melody 2024</Link>
                <Link to={"/robot/freddy2023"} className={isActive("/robot/freddy2023") ? "active" : ""}>Freddy 2023</Link>
                <Link to={"/robot/sagi2022"} className={isActive("/robot/sagi2022") ? "active" : ""}>Sagi 2022</Link>
                <Link to={"/robot/randall2021"} className={isActive("/robot/randall2021") ? "active" : ""}>Randall 2021</Link>
                <Link to={"/robot/guido2020"} className={isActive("/robot/guido2020") ? "active" : ""}>Guido 2020</Link>
                <Link to={"/robot/deoys2019"} className={isActive("/robot/deoys2019") ? "active" : ""}>Deoys 2019</Link>
                <Link to={"/robot/porygon2018"} className={isActive("/robot/porygon2018") ? "active" : ""}>Porygon 2018</Link>
                <Link to={"/robot/migraine2017"} className={isActive("/robot/migraine2017") ? "active" : ""}>Migraine 2017</Link>
                <Link to={"/robot/ra2016"} className={isActive("/robot/ra2016") ? "active" : ""}>Ra 2016</Link>
                <Link to={"/robot/slifer2015"} className={isActive("/robot/slifer2015") ? "active" : ""}>Slifer 2015</Link>
                <Link to={"/robot/obelisk2014"} className={isActive("/robot/obelisk2014") ? "active" : ""}>Obelisk 2014</Link>
                <Link to={"/robot/thebrick2012"} className={isActive("/robot/thebrick2012") ? "active" : ""}>TheBrick 2012</Link>
            </nav>
        </section>
    )
}

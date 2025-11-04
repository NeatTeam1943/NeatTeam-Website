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
                <Link to={"/NeatTeam-Website/robot/koren2025"} className={isActive("/NeatTeam-Website/robot/koren2025") ? "active" : ""}>Koren 2025</Link>
                <Link to={"/NeatTeam-Website/robot/Melody2024"} className={isActive("/NeatTeam-Website/robot/Melody2024") ? "active" : ""}>Melody 2024</Link>
                <Link to={"/NeatTeam-Website/robot/freddy2023"} className={isActive("/NeatTeam-Website/robot/freddy2023") ? "active" : ""}>Freddy 2023</Link>
                <Link to={"/NeatTeam-Website/robot/sagi2022"} className={isActive("/NeatTeam-Website/robot/sagi2022") ? "active" : ""}>Sagi 2022</Link>
                <Link to={"/NeatTeam-Website/robot/randall2021"} className={isActive("/NeatTeam-Website/robot/randall2021") ? "active" : ""}>Randall 2021</Link>
                <Link to={"/NeatTeam-Website/robot/guido2020"} className={isActive("/NeatTeam-Website/robot/guido2020") ? "active" : ""}>Guido 2020</Link>
                <Link to={"/NeatTeam-Website/robot/deoys2019"} className={isActive("/NeatTeam-Website/robot/deoys2019") ? "active" : ""}>Deoys 2019</Link>
                <Link to={"/NeatTeam-Website/robot/porygon2018"} className={isActive("/NeatTeam-Website/robot/porygon2018") ? "active" : ""}>Porygon 2018</Link>
                <Link to={"/NeatTeam-Website/robot/migraine2017"} className={isActive("/NeatTeam-Website/robot/migraine2017") ? "active" : ""}>Migraine 2017</Link>
                <Link to={"/NeatTeam-Website/robot/ra2016"} className={isActive("/NeatTeam-Website/robot/ra2016") ? "active" : ""}>Ra 2016</Link>
                <Link to={"/NeatTeam-Website/robot/slifer2015"} className={isActive("/NeatTeam-Website/robot/slifer2015") ? "active" : ""}>Slifer 2015</Link>
                <Link to={"/NeatTeam-Website/robot/obelisk2014"} className={isActive("/NeatTeam-Website/robot/obelisk2014") ? "active" : ""}>Obelisk 2014</Link>
                <Link to={"/NeatTeam-Website/robot/thebrick2012"} className={isActive("/NeatTeam-Website/robot/thebrick2012") ? "active" : ""}>TheBrick 2012</Link>
            </nav>
        </section>
    )
}

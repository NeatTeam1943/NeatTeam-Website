import React from 'react'
import { Link } from "react-router-dom";
import "../css files/RobotNav.css"

export default function RobotNav() {
    return (
        <section className={"robotnav"}>
            <nav>
                <Link to={"/robot/koren2025"}>Koren2025</Link>
                <Link to={"/robot/Melody2024"}>Melody2024</Link>
                <Link to={"/robot/freddy2023"}>Freddy2023</Link>
                <Link to={"/robot/sagi2022"}>Sagi2022</Link>
                <Link to={"/robot/randall2021"}>Randall2021</Link>
                <Link to={"/robot/guido2020"}>Guido2020</Link>
                <Link to={"/robot/deoys2019"}>Deoys2019</Link>
                <Link to={"/robot/porygon2018"}>Porygon2018</Link>
                <Link to={"/robot/migraine2017"}>Migraine2017</Link>
                <Link to={"/robot/ra2016"}>Ra2016</Link>
                <Link to={"/robot/slifer2015"}>Slifer2015</Link>
                <Link to={"/robot/obelisk2014"}>Obelisk2014</Link>
                <Link to={"/robot/thebrick2012"}>TheBrick2012</Link>
            </nav>
        </section>
    )
}

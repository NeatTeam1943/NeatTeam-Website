import React from 'react'
import { Link } from "react-router-dom";
import "../css files/RobotNav.css"

export default function RobotNav() {
    return (
        <section className={"robotnav"}>
            <nav>
                <Link to={"/robot/koren2025"}>Koren 2025</Link>
                <Link to={"/robot/Melody2024"}>Melody 2024</Link>
                <Link to={"/robot/freddy2023"}>Freddy 2023</Link>
                <Link to={"/robot/sagi2022"}>Sagi 2022</Link>
                <Link to={"/robot/randall2021"}>Randall 2021</Link>
                <Link to={"/robot/guido2020"}>Guido 2020</Link>
                <Link to={"/robot/deoys2019"}>Deoys 2019</Link>
                <Link to={"/robot/porygon2018"}>Porygon 2018</Link>
                <Link to={"/robot/migraine2017"}>Migraine 2017</Link>
                <Link to={"/robot/ra2016"}>Ra 2016</Link>
                <Link to={"/robot/slifer2015"}>Slifer 2015</Link>
                <Link to={"/robot/obelisk2014"}>Obelisk 2014</Link>
                <Link to={"/robot/thebrick2012"}>TheBrick 2012</Link>
            </nav>
        </section>
    )
}

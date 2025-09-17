import React from 'react'
import { Link } from "react-router-dom";
import '../../css files/pages/ContactUs.css'

export default function ContactUs() {
    return (
        <div className='ContactUs-page'>
            <div className='text'>
                If you were impressed by our robots and our story we'll be happy if you will help us and contact us!
                Mail to neatteamrh1943@gmail.com to get mor details.
            </div> <br /> <br />
            <div className='sponsor-us'>
                If you were impressed by our robots and our story and you want to help more then the contact your can sponsor us!
                <Link to='/sponsor-us'> click here to do that!</Link>
            </div>
            <div className='quick-nav'>
                <Link to='/robot/Koren2025' className='robots'>Learn more of our robots' Competition</Link>
                <Link to='/about/team' className='about-team'>Learn more of our team</Link>
                <Link to='/about/first' className='about-firts'>Learn more of first</Link>
                <Link to='/community' className='community'>Learn more of our community</Link>

            </div>
        </div>
    )
}

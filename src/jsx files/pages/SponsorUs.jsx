import React from 'react'
import { Link } from "react-router-dom";
import '../../css files/pages/SponsorUs.css'

export default function SponsorUs() {
    return (
        <div className='SponsorUs-page'>
            <div className='text'>
                If you were impressed by our robots and our story we'll be happy if you will help us and sponsor us!
                Mail to neatteamrh1943@gmail.com to get mor details.
            </div> <br /> <br />
            <div className='contact'>
                If you were impressed by our robots and our story and you want to help us but you aren't able to sponsor us u can contact us too:
                <Link to='/contact-us'> click here to do that!</Link>
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

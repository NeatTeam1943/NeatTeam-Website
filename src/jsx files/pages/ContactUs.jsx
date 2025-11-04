import React from 'react';
import '../../css files/pages/Sponsors.css';

export default function ContactUs() {
    return (
        <div className="page">
            <div className="sponsors-page">
                <h1>Contact Us!</h1>
                <h3>If you were impressed by our robots and our story we'll be happy if you will help us and contact us! Mail to neatteamrh1943@gmail.com to get mor details.</h3>

                <h4>If you were impressed by our robots and our story and you want to help more then the contact your can sponsor us!</h4>
                <button className="button-decoration" onClick={() => window.location.href='/NeatTeam-Website/sponsor-us'}>Sponsor Us</button>
            </div>
        </div>
    );
}

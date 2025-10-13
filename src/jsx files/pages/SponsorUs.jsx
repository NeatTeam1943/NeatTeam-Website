import React from 'react';
import '../../css files/pages/Sponsors.css';

export default function SponsorUs() {
    return (
        <div className="page">
            <div className="sponsors-page">
                <h1>Become a Sponsor</h1>
                <h3>If you were impressed by our robots and our story we'll be happy if you will help us and sponsor us! Mail to neatteamrh1943@gmail.com to get mor details.</h3>

                <h4>If you were impressed by our robots and our story and you want to help us but you aren't able to sponsor us u can contact us too:</h4>
                <button className="button-decoration" onClick={() => window.location.href='/contact-us'}>Contact Us</button>
            </div>
        </div>
    );
}

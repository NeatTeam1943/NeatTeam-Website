import '../css files/Nav.css';
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <section className="navbar">
            <Link to="/" className="logo" style={{ cursor: 'pointer', textDecoration: 'none' }}>
                NeatTeam #1943
            </Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to="/robot/koren2025">Robot</Link>
                <Link to="/sponsors">Sponsors</Link>
                <Link to="/sponsor-us">Sponsor Us</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/community">Our Community</Link>
                <Link to="/contact-us">Contact</Link>
            </nav>
        </section>
    );
}
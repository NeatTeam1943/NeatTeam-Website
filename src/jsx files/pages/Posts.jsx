import React, { useState } from 'react';
import '../../css files/pages/Posts.css';
import { useNavigate } from 'react-router-dom';


export default function Posts() {
    const navigate = useNavigate();
    const [expandedPost, setExpandedPost] = useState(null);

    const events = [ // need to be changed to take events from the calendar
        { date: 'Every Sunday / Wednesday', title: 'Team Meeting' },
    ];

    const posts = [
        {
            title: 'Final Robot Assembly',
            text: 'We completed the final assembly of our competition robot! It was an incredible effort by every member of the team over the last 3 weeks. Here are some images of our progress.',
            date: 'July 21, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
        {
            title: 'Strategy Planning',
            text: 'Our team gathered to plan strategies for the regional. Lots of ideas were shared, and the energy was amazing!',
            date: 'July 18, 2025',
            image: '../../../public/NeatTeam/GroupPhoto.jpeg',
        },
    ];

    return (
        <div className="page-layout">
            <div className="sidebar">
                <div className="team-info">
                    <h3>About NeatTeam #1943</h3>
                    <p>
                        We are a passionate group of high school students building robots, developing skills, and inspiring the community through STEM and teamwork.
                    </p>
                </div>

                <div className="mini-calendar">
                    <h4>Upcoming Events</h4>
                    <ul>
                        {events.map((event, i) => (
                            <li key={i}>
                                <strong>{event.date}</strong>: {event.title}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate('/calendar')}>
                        View Full Calendar
                    </button>
                </div>
            </div>

            <div className="posts-section">
                {posts.map(post => (
                    <div className="post-row" key={post.id} onClick={() => setExpandedPost(post)}>
                        <img src={post.image} alt="Post visual" />
                        <div className="post-text">
                            <h3>{post.title}</h3>
                            <p>{post.text.slice(0, 80)}...</p>
                            <span>{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            {expandedPost && (
                <div className="post-modal" onClick={() => setExpandedPost(null)}>
                    <div className="post-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-btn" onClick={() => setExpandedPost(null)}>×</button>
                        <img src={expandedPost.image} alt="Large view" />
                        <h2>{expandedPost.title}</h2>
                        <p>{expandedPost.text}</p>
                        <span>{expandedPost.date}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
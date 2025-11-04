import React, { useState, useEffect } from 'react';
import '../../css files/pages/Posts.css';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
    const navigate = useNavigate();
    const BASE_URL = import.meta.env.BASE_URL;
    const [expandedPost, setExpandedPost] = useState(null);
    const [savedPosts, setSavedPosts] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [notificationType, setNotificationType] = useState('success');
    const [currentPage, setCurrentPage] = useState(1);
    const [editingTags, setEditingTags] = useState(null);
    const [newTagInput, setNewTagInput] = useState('');
    const postsPerPage = 6;

    const events = [
        {
            id: 1,
            date: 'Every Sunday',
            title: 'Team Meeting',
            time: '5:00 PM',
            description: 'Weekly team meeting'
        },
        {
            id: 2,
            date: 'Every Wednesday',
            title: 'Team Meeting',
            time: '5:00 PM',
            description: 'Weekly team meeting'
        }
    ];

    const [posts, setPosts] = useState([
        // how its suppose to look
        // {
        //     id: 1,
        //     title: 'District 3',
        //     text: 'Cool cool cool cool cool cool cool cool no doubt no doubt no doubt no doubt no doubt no',
        //     date: 'March 9 - 10, 2025',
        //     image: '/NeatTeam/GroupPhoto.jpeg',
        //     tags: ['Competition', 'Robotics'],
        // },

        {
            id: 1,
            title: 'Mosaic Meeting',
            text: 'At Eshel Elementary School, we visit once a week and present our magazine, "First Steps," to the 5th-grade students.\n' +
                'The goal of this volunteer activity is to raise awareness of STEM fields among younger students and inspire the next generation to explore science and technology.',
            date: 'October 28, 2025',
            image: BASE_URL + '/Volunteering/2025 october 28.jpeg',
            tags: ['Team', 'Robotics', 'Volunteering'],
        },

    ]);

    // Handler functions for modal actions
    const handleSavePost = (post) => {
        if (savedPosts.find(saved => saved.id === post.id)) {
            setSavedPosts(savedPosts.filter(saved => saved.id !== post.id));
            showNotificationMessage('Post removed from saved items', 'info');
        } else {
            setSavedPosts([...savedPosts, post]);
            showNotificationMessage('Post saved successfully!', 'success');
        }
    };

    const handleSharePost = (post) => {
        if (navigator.share) {
            navigator.share({
                title: post.title,
                text: post.text,
                url: window.location.href
            }).catch(() => {
                copyToClipboard();
            });
        } else {
            copyToClipboard();
        }
    };

    const handleEmailPost = (post) => {
        const subject = encodeURIComponent(`Check out this post: ${post.title}`);
        const body = encodeURIComponent(`${post.title}\n\n${post.text}\n\nRead more at: ${window.location.href}`);
        
        // Try to open email client
        const mailtoLink = `mailto:?subject=${subject}&body=${body}`;
        
        // Create a temporary link element to trigger the mailto
        const link = document.createElement('a');
        link.href = mailtoLink;
        link.style.display = 'none';
        document.body.appendChild(link);
        
        try {
            link.click();
            showNotificationMessage('Email client opened!', 'success');
        } catch (error) {
            // Fallback: copy email content to clipboard
            const emailContent = `Subject: ${post.title}\n\n${post.text}\n\nRead more at: ${window.location.href}`;
            navigator.clipboard.writeText(emailContent).then(() => {
                showNotificationMessage('Email content copied to clipboard!', 'success');
            }).catch(() => {
                showNotificationMessage('Failed to open email client', 'error');
            });
        } finally {
            document.body.removeChild(link);
        }
    };

    const copyToClipboard = () => {
        const post = expandedPost;
        const textToCopy = `${post.title}\n\n${post.text}\n\nRead more at: ${window.location.href}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            showNotificationMessage('Post link copied to clipboard!', 'success');
        }).catch(() => {
            showNotificationMessage('Failed to copy to clipboard', 'error');
        });
    };

    const showNotificationMessage = (message, type) => {
        setNotificationMessage(message);
        setNotificationType(type);
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    const isPostSaved = (post) => {
        return savedPosts.find(saved => saved.id === post.id) !== undefined;
    };

    // Tag editing functions
    const handleAddTag = (postId, tag) => {
        if (!tag.trim()) return;
        const trimmedTag = tag.trim();
        setPosts(posts.map(post => {
            if (post.id === postId) {
                const updatedTags = post.tags || [];
                if (!updatedTags.includes(trimmedTag)) {
                    return { ...post, tags: [...updatedTags, trimmedTag] };
                }
            }
            return post;
        }));
        setNewTagInput('');
        showNotificationMessage('Tag added successfully!', 'success');
    };

    const handleRemoveTag = (postId, tagToRemove) => {
        setPosts(posts.map(post => {
            if (post.id === postId) {
                return { ...post, tags: (post.tags || []).filter(tag => tag !== tagToRemove) };
            }
            return post;
        }));
        showNotificationMessage('Tag removed successfully!', 'info');
    };

    const handleStartEditingTags = (postId) => {
        setEditingTags(postId);
        setNewTagInput('');
    };

    const handleStopEditingTags = () => {
        setEditingTags(null);
        setNewTagInput('');
    };

    const handleTagInputKeyPress = (e, postId) => {
        if (e.key === 'Enter' && newTagInput.trim()) {
            handleAddTag(postId, newTagInput);
        } else if (e.key === 'Escape') {
            handleStopEditingTags();
        }
    };

    // Sync expandedPost with posts state when posts change
    useEffect(() => {
        if (expandedPost) {
            const updatedPost = posts.find(p => p.id === expandedPost.id);
            if (updatedPost && JSON.stringify(updatedPost) !== JSON.stringify(expandedPost)) {
                setExpandedPost(updatedPost);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [posts]);

    // Pagination logic
    const totalPages = Math.ceil(posts.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = posts.slice(startIndex, endIndex);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                        {events.map((event) => (
                            <li key={event.id} onClick={() => navigate(BASE_URL + 'calendar')} className="event-item">
                                <div className="event-header">
                                    <strong>{event.date}</strong>
                                    <span className="event-time">{event.time}</span>
                                </div>
                                <div className="event-title">{event.title}</div>
                                <div className="event-description">{event.description}</div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate(BASE_URL + 'calendar')}>
                        View Full Calendar
                    </button>
                </div>
            </div>

            <div className="posts-section">
                <div className="posts-header">
                    <h2>Latest Updates</h2>
                    <div className="posts-stats">
                        <span className="stat-item">
                            <span className="stat-number">{posts.length}</span>
                            <span className="stat-label">Posts</span>
                        </span>
                    </div>
                </div>

                <div className="posts-grid">
                    {currentPosts.map(post => (
                        <div className="post-card" key={post.id} onClick={() => setExpandedPost(post)}>
                            <div className="post-image-container">
                                {post.image && (
                                    <img 
                                        src={encodeURI(post.image)} 
                                        alt={post.title}
                                        className="post-image"
                                        onError={(e) => {
                                            console.error('Image failed to load:', post.image);
                                            e.target.style.display = 'none';
                                            const fallback = e.target.nextElementSibling;
                                            if (fallback) {
                                                fallback.style.display = 'flex';
                                            }
                                        }}
                                        onLoad={() => console.log('Image loaded successfully:', post.image)}
                                    />
                                )}
                                <div className="post-image-fallback" style={{ display: post.image ? 'none' : 'flex' }}>
                                    <div className="fallback-icon">📸</div>
                                    <span>Team Photo</span>
                                </div>
                                <div className="post-overlay">
                                    <div className="read-more">Read More →</div>
                                </div>
                            </div>
                            
                            <div className="post-content">
                                <div className="post-meta">
                                    <span className="post-date">{post.date}</span>
                                    <div className="post-actions">
                                        <button className="action-btn" onClick={(e) => {
                                            e.stopPropagation();
                                            handleSavePost(post);
                                        }}>
                                            {isPostSaved(post) ? '❤️' : '♡'}
                                        </button>
                                        <button className="action-btn" onClick={(e) => {
                                            e.stopPropagation();
                                            handleSharePost(post);
                                        }}>
                                            ↗
                                        </button>
                                    </div>
                                </div>
                                
                                <h3 className="post-title">{post.title}</h3>
                                <p className="post-excerpt">{post.text.slice(0, 120)}...</p>
                                
                                <div className="post-footer">
                                    <div className="post-tags">
                                        {(post.tags || []).map((tag, index) => (
                                            <span key={index} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="post-read-time">3 min read</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {totalPages > 1 && (
                    <div className="posts-pagination">
                        {currentPage > 1 && (
                            <button 
                                className="pagination-btn" 
                                onClick={() => handlePageChange(currentPage - 1)}
                            >
                                ← Prev
                            </button>
                        )}
                        
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button 
                                key={page}
                                className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        ))}
                        
                        {currentPage < totalPages && (
                            <button 
                                className="pagination-btn" 
                                onClick={() => handlePageChange(currentPage + 1)}
                            >
                                Next →
                            </button>
                        )}
                    </div>
                )}
            </div>

            {expandedPost && (
                <div className="post-modal" onClick={() => setExpandedPost(null)}>
                    <div className="post-modal-content" onClick={e => e.stopPropagation()}>
                        <div className="modal-header">
                            <div className="modal-meta">
                                <div className="modal-category">Team Update</div>
                                <div className="modal-date">{expandedPost.date}</div>
                            </div>
                            <button className="modal-close-btn" onClick={() => setExpandedPost(null)}>
                                <span>×</span>
                            </button>
                        </div>

                        <div className="modal-image-section">
                            <img 
                                src={encodeURI(expandedPost.image)} 
                                alt={expandedPost.title}
                                className="modal-image"
                                onError={(e) => {
                                    console.error('Modal image failed to load:', expandedPost.image);
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                                onLoad={() => console.log('Modal image loaded successfully:', expandedPost.image)}
                            />
                            <div className="modal-image-fallback">
                                <div className="fallback-icon-large">📸</div>
                                <span>Team Photo</span>
                            </div>
                            <div className="modal-image-overlay">
                                <div className="modal-actions">
                                    <button 
                                        className="modal-action-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSharePost(expandedPost);
                                        }}
                                    >
                                        <span>↗</span>
                                        <span>Share</span>
                                    </button>
                                    <button 
                                        className="modal-action-btn"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEmailPost(expandedPost);
                                        }}
                                    >
                                        <span>📧</span>
                                        <span>Email</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-content">
                            <h1 className="modal-title">{expandedPost.title}</h1>
                            
                            <div className="modal-text">
                                <p>{expandedPost.text}</p>
                            </div>

                            <div className="modal-tags-section">
                                <div className="modal-tags-header">
                                    <h4>Tags</h4>
                                    {editingTags === expandedPost.id ? (
                                        <button 
                                            className="tag-edit-btn"
                                            onClick={() => handleStopEditingTags()}
                                        >
                                            Done
                                        </button>
                                    ) : (
                                        <button 
                                            className="tag-edit-btn"
                                            onClick={() => handleStartEditingTags(expandedPost.id)}
                                        >
                                            Edit Tags
                                        </button>
                                    )}
                                </div>
                                <div className="modal-tags-container">
                                    {(expandedPost.tags || []).map((tag, index) => (
                                        <span key={index} className="modal-tag">
                                            {tag}
                                            {editingTags === expandedPost.id && (
                                                <button 
                                                    className="tag-remove-btn"
                                                    onClick={() => handleRemoveTag(expandedPost.id, tag)}
                                                    title="Remove tag"
                                                >
                                                    ×
                                                </button>
                                            )}
                                        </span>
                                    ))}
                                    {editingTags === expandedPost.id && (
                                        <div className="tag-input-container">
                                            <input
                                                type="text"
                                                className="tag-input"
                                                placeholder="Add new tag..."
                                                value={newTagInput}
                                                onChange={(e) => setNewTagInput(e.target.value)}
                                                onKeyDown={(e) => handleTagInputKeyPress(e, expandedPost.id)}
                                                autoFocus
                                            />
                                            <button 
                                                className="tag-add-btn"
                                                onClick={() => handleAddTag(expandedPost.id, newTagInput)}
                                                disabled={!newTagInput.trim()}
                                            >
                                                Add
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="modal-author">
                                    <div className="author-info">
                                        <div className="author-avatar">NT</div>
                                        <div className="author-details">
                                            <span className="author-name">NeatTeam</span>
                                            <span className="author-role">FIRST Robotics Team</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Notification */}
            {showNotification && (
                <div className={`notification notification-${notificationType}`}>
                    <div className="notification-content">
                        <span className="notification-icon">
                            {notificationType === 'success' && '✅'}
                            {notificationType === 'error' && '❌'}
                            {notificationType === 'info' && 'ℹ️'}
                        </span>
                        <span className="notification-message">{notificationMessage}</span>
                    </div>
                </div>
            )}
        </div>
    );
}
import React, { useState, useEffect } from "react";
import '../../css files/pages/Calendar.css';

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [view, setView] = useState('month');

    const events = [
        {
            id: 1,
            title: "Team Meeting",
            date: "2025-01-05",
            time: "17:00",
            endTime: "21:00",
            type: "weekly",
            days: [0, 3], // Sunday and Wednesday
            description: "Weekly team meeting and planning session",
            category: "meeting",
            excludePeriod: {
                startDate: "2026-01-11",
                endDate: "2026-03-18"
            }
        },
        {
            id: 2,
            title: "Season Kickoff",
            date: "2026-01-10",
            time: "19:00",
            type: "single",
            description: "Kickoff event to start the season",
            category: "planning"
        },
        {
            id: 3,
            title: "Team Meeting",
            date: "2026-01-11",
            endDate: "2026-03-17",
            time: "16:00",
            endTime: "00:00",
            type: "range",
            excludedDays: [5, 6], // Exclude Friday (5) and Saturday (6)
            excludedDates: ["2026-03-11", "2026-03-12"], // Exclude District 2 Competition dates
            description: "Daily team meeting during season",
            category: "meeting",
        },
        {
            id: 4,
            title: "District 2 Competition",
            date: "2026-03-11",
            endDate: "2026-03-12",
            time: "07:00 - 19:00",
            type: "range",
            description: "FIRST Robotics District 2 competition",
            category: "competition"
        },
        {
            id: 5,
            title: "District 4 Competition",
            date: "2026-03-18",
            endDate: "2026-03-19",
            time: "07:00 - 19:00",
            type: "range",
            description: "FIRST Robotics District 4 competition",
            category: "competition"
        },
        {
            id: 6,
            title: "District Championship",
            date: "2026-03-30",
            endDate: "2026-03-31",
            time: "08:00",
            type: "range",
            description: "FIRST Robotics District Championship",
            category: "competition"
        },
    ];

    // Get current month/year
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get first day of month and number of days
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Generate calendar days
    const generateCalendarDays = () => {
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDayOfWeek; i++) {
            days.push({ day: null, date: null, isCurrentMonth: false });
        }
        
        // Add days of the current month
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
            
            days.push({
                day,
                date,
                isCurrentMonth: true,
                isToday,
                isSelected
            });
        }
        
        return days;
    };

    // Get events for a specific date
    const getEventsForDate = (date) => {
        if (!date) return [];
        
        const dayOfWeek = date.getDay();
        // Format date as YYYY-MM-DD using local timezone to avoid UTC conversion issues
        const dateString = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
        
        return events.filter(event => {
            // Handle weekly recurring events
            if (event.type === 'weekly' && event.days.includes(dayOfWeek)) {
                // Check if date falls within an exclusion period
                if (event.excludePeriod) {
                    const [excludeStartYear, excludeStartMonth, excludeStartDay] = event.excludePeriod.startDate.split('-').map(Number);
                    const [excludeEndYear, excludeEndMonth, excludeEndDay] = event.excludePeriod.endDate.split('-').map(Number);
                    const excludeStartDate = new Date(excludeStartYear, excludeStartMonth - 1, excludeStartDay);
                    const excludeEndDate = new Date(excludeEndYear, excludeEndMonth - 1, excludeEndDay);
                    const currentDateObj = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                    
                    // Skip if within exclusion period
                    if (currentDateObj >= excludeStartDate && currentDateObj <= excludeEndDate) {
                        return false;
                    }
                }
                return true;
            }
            // Handle single date events
            if (event.type === 'single' && event.date === dateString) {
                return true;
            }
            // Handle date range events
            if (event.type === 'range' && event.date && event.endDate) {
                // Parse dates as local dates (YYYY-MM-DD format)
                const [startYear, startMonth, startDay] = event.date.split('-').map(Number);
                const [endYear, endMonth, endDay] = event.endDate.split('-').map(Number);
                const startDate = new Date(startYear, startMonth - 1, startDay);
                const endDate = new Date(endYear, endMonth - 1, endDay);
                const currentDateObj = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                
                // Check if date is within range (comparing dates only, not time)
                if (currentDateObj >= startDate && currentDateObj <= endDate) {
                    // Check if day of week is not excluded
                    if (!event.excludedDays || !event.excludedDays.includes(dayOfWeek)) {
                        // Check if specific date is not excluded
                        if (!event.excludedDates || !event.excludedDates.includes(dateString)) {
                            return true;
                        }
                    }
                }
            }
            return false;
        });
    };

    // Navigation functions
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const goToToday = () => {
        setCurrentDate(new Date());
        setSelectedDate(new Date());
    };

    // Format date for display
    const formatDate = (date) => {
        return date.toLocaleDateString('en-US', { 
            month: 'long', 
            year: 'numeric' 
        });
    };

    // Get category color
    const getCategoryColor = (category) => {
        const colors = {
            meeting: '#0040FF',
            technical: '#fd4e0a',
            planning: '#10b981',
            outreach: '#8b5cf6',
            competition: '#f59e0b'
        };
        return colors[category] || '#0040FF';
    };

    const calendarDays = generateCalendarDays();

    return (
        <div className="calendar-page">
            <div className="calendar-container">
                <div className="calendar-header">
                    <div className="header-content">
                        <h1>Team Calendar</h1>
                        <p>Stay updated with all team activities and events</p>
                    </div>
                    <div className="calendar-controls">
                        <button onClick={goToPreviousMonth} className="nav-btn">
                            ‹
                        </button>
                        <h2>{formatDate(currentDate)}</h2>
                        <button onClick={goToNextMonth} className="nav-btn">
                            ›
                        </button>
                        <button onClick={goToToday} className="today-btn">
                            Today
                        </button>
                    </div>
                </div>

                <div className="calendar-body">
                    <div className="calendar-grid">
                        {/* Day headers */}
                        <div className="calendar-day-header">Sun</div>
                        <div className="calendar-day-header">Mon</div>
                        <div className="calendar-day-header">Tue</div>
                        <div className="calendar-day-header">Wed</div>
                        <div className="calendar-day-header">Thu</div>
                        <div className="calendar-day-header">Fri</div>
                        <div className="calendar-day-header">Sat</div>

                        {/* Calendar days */}
                        {calendarDays.map((dayData, index) => (
                            <div
                                key={index}
                                className={`calendar-day ${
                                    !dayData.isCurrentMonth ? 'other-month' : ''
                                } ${dayData.isToday ? 'today' : ''} ${
                                    dayData.isSelected ? 'selected' : ''
                                }`}
                                onClick={() => dayData.date && setSelectedDate(dayData.date)}
                            >
                                {dayData.day && (
                                    <>
                                        <span className="day-number">{dayData.day}</span>
                                        <div className="day-events">
                                            {getEventsForDate(dayData.date).map((event, eventIndex) => (
                                                <div 
                                                    key={eventIndex} 
                                                    className="event-indicator"
                                                    style={{ backgroundColor: getCategoryColor(event.category) }}
                                                >
                                                    {event.title}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Event details panel */}
                {selectedDate && (
                    <div className="event-details-panel">
                        <h3>Events for {selectedDate.toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                        })}</h3>
                        <div className="event-list">
                            {getEventsForDate(selectedDate).length > 0 ? (
                                getEventsForDate(selectedDate).map((event, index) => (
                                    <div key={index} className="event-item">
                                        <div className="event-header">
                                            <div className="event-time">
                                                {event.endTime ? `${event.time} - ${event.endTime}` : event.time}
                                            </div>
                                            <div 
                                                className="event-category"
                                                style={{ backgroundColor: getCategoryColor(event.category) }}
                                            >
                                                {event.category}
                                            </div>
                                        </div>
                                        <div className="event-title">{event.title}</div>
                                        <div className="event-description">{event.description}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="no-events">
                                    <div className="no-events-icon">📅</div>
                                    <p>No events scheduled for this date.</p>
                                    <small>Perfect time to plan something new!</small>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Legend */}
                <div className="calendar-legend">
                    <h4>Event Types</h4>
                    <div className="legend-items">
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#0040FF' }}></div>
                            <span>Team Meetings</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#fd4e0a' }}></div>
                            <span>Technical Work</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#10b981' }}></div>
                            <span>Planning</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#8b5cf6' }}></div>
                            <span>Community</span>
                        </div>
                        <div className="legend-item">
                            <div className="legend-color" style={{ backgroundColor: '#f59e0b' }}></div>
                            <span>Competition</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
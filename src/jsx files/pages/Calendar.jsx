import React, { useState, useEffect } from "react";
import '../../css files/pages/Calendar.css';

export default function Calendar() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [view, setView] = useState('month');

    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const API_KEY = import.meta.env.VITE_GOOGLE_CALENDAR_API;
    const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

    useEffect(() => {
        const monthStart = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const nextMonthStart = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        const timeMin = monthStart.toISOString();
        const timeMax = nextMonthStart.toISOString();
        const calendarId = encodeURIComponent(CALENDAR_ID);

        const params = new URLSearchParams({
            key: API_KEY,
            singleEvents: 'true',
            orderBy: 'startTime',
            timeMin: timeMin,
            timeMax: timeMax
        });

        const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?${params.toString()}`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                if (data.error) {
                    setEvents([]);
                    setErrorMessage(data.error.message || 'Calendar request failed.');
                    return;
                }
                const mappedEvents = (data.items || []).map((item) => {
                    const start = item.start?.dateTime
                        ? new Date(item.start.dateTime)
                        : item.start?.date
                            ? new Date(`${item.start.date}T00:00:00`)
                            : null;
                    const end = item.end?.dateTime
                        ? new Date(item.end.dateTime)
                        : item.end?.date
                            ? new Date(`${item.end.date}T00:00:00`)
                            : null;
                    const isAllDay = Boolean(item.start?.date);
                    const endAdjusted = isAllDay && end
                        ? new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1)
                        : end;
                    const date = start ? formatDateString(start) : '';
                    const endDate = endAdjusted ? formatDateString(endAdjusted) : '';
                    const type = endDate && endDate !== date ? 'range' : 'single';

                    return {
                        id: item.id,
                        title: item.summary || 'Untitled Event',
                        date,
                        endDate: type === 'range' ? endDate : undefined,
                        time: item.start?.dateTime ? formatTime(start) : 'All day',
                        endTime: item.end?.dateTime ? formatTime(end) : '',
                        type,
                        description: item.description || '',
                        category: 'planning'
                    };
                });
                setEvents(mappedEvents);
                setErrorMessage('');
            })
            .catch(() => {
                setEvents([]);
                setErrorMessage('Calendar request failed.');
            });
    }, [currentDate]);

    const formatTime = (date) => {
        if (!date) return '';
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const formatDateString = (date) => {
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    };

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
        
        // Format date as YYYY-MM-DD using local timezone to avoid UTC conversion issues
        const dateString = formatDateString(date);
        
        return events.filter(event => {
            // Handle single date events
            if (event.type === 'single' && event.date === dateString) {
                return true;
            }
            // Handle date range events
            if (event.type === 'range' && event.date && event.endDate) {
                return dateString >= event.date && dateString <= event.endDate;
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
                                    <p>{errorMessage || 'No events scheduled for this date.'}</p>
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

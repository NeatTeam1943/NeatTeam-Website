import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import rrulePlugin from '@fullcalendar/rrule';
import '../../css files/pages/Calendar.css';

export default function TeamCalendar() {
    const events = [
        {
            title: "Team Meeting",
            rrule: {
                freq: "weekly",
                dtstart: "2006-01-01T17:00:00",
            }
        },
        {
            title: "Team Meeting",
            rrule: {
                freq: "weekly",
                dtstart: "2006-01-04T17:00:00",
            }
        },
    ];

    return (
        <div className="calendar">
            <div className="calendar-wrapper">
                <h1 className="calendar-title">Team Calendar</h1>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, rrulePlugin]}
                    initialView="dayGridMonth"
                    height="auto"
                    locale="en"
                    nowIndicator={true}
                    events={events}
                    eventTimeFormat={{
                        hour: '2-digit',
                        minute: '2-digit',
                        meridiem: false
                    }}
                />
            </div>
        </div>
    );
}
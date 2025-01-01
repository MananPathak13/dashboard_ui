"use client";
import React, { useState } from 'react'
import { Calendar, momentLocalizer, View, Views } from 'react-big-calendar'
import moment from 'moment'
import { calendarEvents } from '@/lib/data';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

const BigCalendar = () => {
    const [view, setView] = useState<View>(Views.WORK_WEEK);
    const handleOnChange = (selectedView: View) => {
        setView(selectedView);
    }
    const minTime = new Date();
    minTime.setHours(8, 0, 0);

    const maxTime = new Date();
    maxTime.setHours(18, 0, 0);
    return (
        <div>
            <Calendar
                localizer={localizer}
                events={calendarEvents}
                startAccessor="start"
                endAccessor="end"
                views={["day", "work_week"]}
                view={view}
                onView={handleOnChange}
                style={{ height: "98%" }}
                min={minTime}
                max={maxTime}
            />
        </div>
    )
};
export default BigCalendar
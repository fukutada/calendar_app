
import React, { useState } from 'react'


// FullCalendarコンポーネント。
import FullCalendar from '@fullcalendar/react'

// で週表示を可能にするモジュール。
import timeGridPlugin from '@fullcalendar/timegrid'

// で月表示を可能にするモジュール。
import dayGridPlugin from '@fullcalendar/daygrid'

// で日付や時間が選択できるようになるモジュール。
import interactionPlugin from '@fullcalendar/interaction'

import DatePicker, { registerLocale } from "react-datepicker";

import ja from 'date-fns/locale/ja'

import { createStyles, makeStyles } from "@material-ui/core/styles";

// import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

const CalendarData = (props) => {

  return (
    <div>
      <FullCalendar
        locale="ja"
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        slotDuration="00:10:00"
        selectable={true}
        businessHours={{
          daysOfWeek: [1, 2, 3, 4, 5],
          startTime: '00:00',
          endTIme: '24:00'
        }}
        weekends={true}
        titleFormat={{
          year: 'numeric',
          month: 'short'
        }}
        headerToolbar={{
          start: 'title',
          center: 'prev, next, today',
          end: 'dayGridMonth,timeGridWeek'
        }}

      />

    </div>
  )
}



export default CalendarData;
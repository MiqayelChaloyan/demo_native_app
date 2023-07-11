import {LocaleConfig, Calendar} from 'react-native-calendars';
import {memo, useState} from 'react';
import {theme} from '../../assets/theme/theme';

LocaleConfig.locales.fr = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul.',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ],
  dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  today: 'Today',
};

LocaleConfig.defaultLocale = 'fr';

const CalendarComponent = () => {
  const [selected, setSelected] = useState('');

  return (
    <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
          selectedDotColor: 'orange',
          endingDay: true,
          color: 'green',
          textColor: 'gray',
        },
      }}
      theme={{
        calendarBackground: 'transparent',
        textSectionTitleColor: theme.colors.primary_white,
        selectedDayBackgroundColor: theme.colors.primary_green,
        selectedDayTextColor: theme.colors.primary_white,
        todayTextColor: theme.colors.danger,
        dayTextColor: theme.colors.black,
        textDayFontSize: 15,
        textDisabledColor: theme.colors.cool_gray,
        arrowColor: theme.colors.primary_white,
        monthTextColor: '#FFFFFF',
        textMonthFontWeight: 900,
        textMonthFontSize: 32,
        weekVerticalMargin: 10,
      }}
    />
  );
};

export default memo(CalendarComponent);

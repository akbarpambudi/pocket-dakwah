import {PrayTimes} from 'islamic-prayer-times';

export function getPrayerTime(date,coordinates){
    const prayer = new PrayTimes();
    prayer.adjust({
        fajr:20.0,
        isha:18.0
    });
    return prayer.getTimes(date, coordinates, 7);
}
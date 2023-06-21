

export function getDate(){
    let date = new Date();
    // get year
    let currentYear = date.getFullYear();
    // get month
    let currentMonth = date.getMonth() + 1;
    // get day
    let currentDay = date.getDate();
    // current date
    let currentDate = currentDay + "-" + currentMonth + "-" + currentYear;
    return currentDate;
}






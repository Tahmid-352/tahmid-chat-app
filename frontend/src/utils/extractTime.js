// export function extractTime(dateString) {
// 	const date = new Date(dateString);
// 	const hours = padZero(date.getHours());
// 	const minutes = padZero(date.getMinutes());
// 	return `${hours}:${minutes}`;
// }

// // Helper function to pad single-digit numbers with a leading zero
// function padZero(number) {
// 	return number.toString().padStart(2, "0");
// }


import moment from 'moment-timezone';

export function extractTime(dateString) {
    // Convert to Bangladesh time (Asia/Dhaka)
    const bangladeshTime = moment.tz(dateString, "Asia/Dhaka");
    
    let hours = bangladeshTime.hours();
    const minutes = padZero(bangladeshTime.minutes());
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = padZero(hours);

    return `${hours}:${minutes} ${ampm}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
    return number.toString().padStart(2, "0");
}


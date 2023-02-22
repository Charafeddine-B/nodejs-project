var date = new Date();
var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

exports.daysOfWeek = function () {
    return days[date.getDay() - 1];
}

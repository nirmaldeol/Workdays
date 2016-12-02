var self = {};


self.dateSplitter = function dateSplitter(date) {
    var newDate = date.split('/');
    var dateObj = {
        day: parseInt(newDate[0]),
        month: parseInt(newDate[1]),
        year: parseInt(newDate[2])
    }
    return dateObj;
};

self.getDaysInMonth = function(month, year) {
    var daysInMonth;

    if ([11, 9, 6, 4].indexOf(month) > -1) {
        daysInMonth = 30;
    } else if (month == 2 && year % 4 == 0) {
        daysInMonth = 29;
    } else if (month == 2 && year % 4 != 0) {
        daysInMonth = 28;
    } else if (month != 0) {
        daysInMonth = 31;
    }
    return daysInMonth
};

self.getDayFormonths = function(a, year) {
    var days = 0;
    a.forEach(function(x) {
        days += self.getDaysInMonth(x, year);
    });
    return days;
}

self.getArray = function(x, y) {
    var any_array = [];
    for (var i = x + 1; i < y; i++) {
        any_array.push(i);
    }
    return any_array;
}

module.exports = self;
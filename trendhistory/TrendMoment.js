"use strict";

function TrendMoment(date, location, trends) {
    this.date = date;
    this.location = location;
    this.trends = trends;
}

TrendMoment.prototype.getDate = function () {
    return this.date;
}

TrendMoment.prototype.getLocation = function () {
    return this.location;
}

TrendMoment.prototype.getTrends = function () {
    return this.trends;
}

TrendMoment.prototype.toString = function () {
    var result = "[TrendMoment: ";
    result += this.location;
    result += " @ ";
    result += this.date
    result += "\n";
    this.trends.forEach(function (entry) {
        result += entry;
        result += ", ";
    });
    result += "]";
    return result;
}


module.exports = TrendMoment;

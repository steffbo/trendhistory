"use strict";

function Trends(t) {
    this.trends = t.trends;
}

Trends.prototype.getTrend = function(i) {
    return this.trends[i].name;
}

Trends.prototype.getTrends = function(i) {
    var result = new Array();
    this.trends.forEach(function (entry) {
        result.push(entry.name);
    });
    return result;
}

module.exports = Trends;
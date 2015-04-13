"use strict";

var Twitter = require("twitter");
var parser = require("properties-parser");
var Trends = require('./Trends.js');
var TrendMoment = require('./TrendMoment.js')

var properties = parser.read("config.properties");
var berlin_woied = 638242;

var client = new Twitter({
    consumer_key: properties.consumer_key,
    consumer_secret: properties.consumer_secret,
    access_token_key: properties.access_token_key,
    access_token_secret: properties.access_token_secret
});

client.get('trends/place', { id: berlin_woied }, function (error, json, response) {
    if (error) {
        console.log(error); throw error;
    }
    
    var trends = new Trends(json[0]);
    var trendMoment = new TrendMoment(json[0].as_of, json[0].locations[0].name, trends.getTrends());
    console.log(trendMoment.toString());
})

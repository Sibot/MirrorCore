// Write your Javascript code.
;var mirror = (function() {
    var mirror = {};

    //moment.locale('sv');

    //mirror.time = moment();

    //var RequestService = function(url) {

    //    var responsePromise = fetch(url).then(
    //        function(responseMessage) {
    //            if (responseMessage.status !== 200) {
    //                return {}.error = responseMessage;
    //            }

    //            var data = responseMessage.json().then(function(data) {
    //                return data;
    //            });

    //            return data;
    //        }
    //    ).catch(function(err) {
    //        return {}.error = err;
    //    });
    //    return responsePromise;
    //};

    //var TimeService = function() {
    //    var timeUrl = "/time/getCurrentTime";

    //    var timeRequest = new RequestService(timeUrl);

    //    return timeRequest.then(function(time) {
    //        if (!time.error) {
    //            var newMoment = moment(time.data);

    //            if (!newMoment.isValid()) {
    //                new ErrorService(`Time was invalid: '${time.data}'`);
    //            }

    //            return newMoment;
    //        }
    //        new ErrorService(timeRequest.error);

    //        return newMoment;
    //    });
    //};

    function WeatherService(location) {
        var lat = 59.3706; //4769999999;
        var long = 17.8909; //19199999985;
        var weatherUrl = `http://opendata-download-metfcst.smhi.se/api/category/pmp2g/version/2/geotype/point/lon/${long}/lat/${lat}/data.json`;

        var weatherRequest = new RequestService(weatherUrl);

        return weatherRequest.then(function(weather) {
            if (!weather.error) {
                return weather;
            }

            new ErrorService(weatherRequest.error);
            return weather;
        });
    };

    var DepartureService = function(locationId) {

        var departureUrl = 'departures/getFutureDepartures';

        var departureRequest = new RequestService(departureUrl);

        return departureRequest.then(function(departures) {
            if (!departures.error) {
                return departures;
            }

            new ErrorService(departureRequest.error);
            return departures;
        });
        var x = 17888291;

        var y = 59370372;
    }

    var TimerService = function(interval) {
        //Do stuff every ${interval} seconds
    }

    var ErrorService = function(error) {
        //Handle or display the error
        console.log(error);
    };

    function fetchAll() {
        fetchDepartures();
        fetchTime();
        fetchWeather();
    }

    function fetchDepartures() {
        new DepartureService().then(function(departures) {
            console.log("updateDepartures:", departures);
            mirror.departures = departures;
        });
    }

    //function fetchTime() {
    //    new TimeService().then(function(time) {
    //        console.log("updateTime:", time);
    //        mirror.time = time;
    //    });
    //}

    function fetchWeather() {
        new WeatherService().then(function(weather) {
            console.log("updateWeather:", weather);
            mirror.weather = weather;
        });
    }
    
    //function startClock() {
    //    setInterval(function () {
    //        var time = mirror.time;
    //        time.add(1, 's');
    //        var date = time.format('dddd Do MMMM YYYY');
    //        var week = `${time.localeData()._week.asString} ${time.week()}`;
    //        $('#date').html(date);
    //        $('#week').html(week);
    //        $("#time").html(`${time.format('HH')}<b class="blink">:</b>${time.format('mm')}<b class="blink">:</b>${time.format('ss')}`);
    //    }, 1000);
    //}

    function parseDepartures(departures) {
        var data = departures.ResponseData;
        var stopDeviations = data.StopPointDeviations;
        var busses = data.Buses;
        var metros = data.Metros;
        var ships = data.Ships;
        var trams = data.Trams;
        var trains = data.Trains;
        busses.forEach()

    }

    ////mirror.fetchAll = fetchAll;
    //mirror.fetchDepartures = fetchDepartures;
    ////mirror.fetchTime = fetchTime;
    //mirror.fetchWeather = fetchWeather;
    //mirror.startClock = startClock;

    ////mirror.startClock();

    return mirror;
}());
export class WeatherIconValueConverter {
    toView(weatherSymbolValue, isNight) {
        let returnString = 'wi-';
        switch(weatherSymbolValue){
            //Interpret SMHI API poor english translations to WeatherIcon classnames
            // 1	Clear sky
            case 1: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'clear': 'sunny'}`;
            // 2	Nearly clear sky
            case 2: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-partly-cloudy': 'sunny-overcast'}`;
            // 3	Variable cloudiness
            case 3: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-partly-cloudy': 'sunny-overcast'}`;
            // 4	Halfclear sky
            case 4: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-cloudy': 'cloudy'}`;
            // 5	Cloudy sky
            case 5: return `${returnString}cloud`;
            // 6	Overcast
            case 6: return `${returnString}cloudy`;
            // 7	Fog
            case 7: return `${returnString}${isNight ? 'night' : 'day'}-fog`;
            // 8	Rain showers
            case 8: return `${returnString}${isNight ? 'night' : 'day'}-rain`;
            // 9	Thunderstorm
            case 9: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-thunderstorm': 'storm-showers'}`;
            // 10	Light sleet
            case 10: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-sleet': 'sleet'}`;
            // 11	Snow showers
            case 11: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-snow': 'snow'}`;
            // 12	Rain
            case 12: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-rain': 'rain'}`;
            // 13	Thunder
            case 13: return `${returnString}thunderstorm`;
            // 14	Sleet
            case 14: return `${returnString}sleet`;
            // 15	Snowfall
            case 15: return `${returnString}snow`;
        }
    }
}
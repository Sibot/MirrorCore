export class WeatherIconValueConverter {
    toView(weatherSymbolValue, isNight) {
        let returnString = 'wi-';
        switch(weatherSymbolValue){
            /* Match SMHI weatherSymbol integer below with WeatherIcons classes
            1	Clear sky
            2	Nearly clear sky
            3	Variable cloudiness
            4	Halfclear sky
            5	Cloudy sky
            6	Overcast
            7	Fog
            8	Rain showers
            9	Thunderstorm
            10	Light sleet
            11	Snow showers
            12	Rain
            13	Thunder
            14	Sleet
            15	Snowfall
            */
            case 1: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'clear': 'sunny'}`;
            case 2: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-partly-cloudy': 'sunny-overcast'}`;
            case 3: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-partly-cloudy': 'sunny-overcast'}`;
            case 4: return `${returnString}${isNight ? 'night' : 'day'}-${isNight ? 'alt-cloudy': 'cloudy'}`;
            case 5: return `${returnString}cloud`;
            case 6: return `${returnString}cloudy`;
            case 7: return `${returnString}-${isNight ? 'night' : 'day'}-fog`;
            case 8: return `${returnString}-${isNight ? 'night' : 'day'}-rain`;
            case 9: return `${returnString}-${isNight ? 'night' : 'day'}-${isNight ? 'alt-thunderstorm': 'storm-showers'}`;
            case 10: return `${returnString}-${isNight ? 'night' : 'day'}-${isNight ? 'alt-sleet': 'sleet'}`;
            case 11: return `${returnString}-${isNight ? 'night' : 'day'}-${isNight ? 'alt-snow': 'snow'}`;
            case 12: return `${returnString}-${isNight ? 'night' : 'day'}-${isNight ? 'alt-rain': 'rain'}`;
            case 13: return `${returnString}-thunderstorm`;
            case 14: return `${returnString}-sleet`;
            case 15: return `${returnString}-snow`;
        }
    }
}
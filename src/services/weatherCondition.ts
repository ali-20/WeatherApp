import { TWeatherCondition, WeatherGradients } from "../interfaces/weatherInterface";

export const weatherCodes: Record<number, TWeatherCondition> = {

    1000: "sunny",
    1003: "partly_cloudy",
    1006: "cloudy",
    1009: "cloudy",
    1030: "mist",
    1135: "fog",
    1147: "fog",
    1063: "rainy",
    1150: "drizzle",
    1153: "drizzle",
    1168: "drizzle",
    1171: "drizzle",
    1180: "rainy",
    1183: "rainy",
    1186: "rainy",
    1189: "rainy",
    1192: "rainy",
    1195: "rainy",
    1198: "rainy",
    1201: "rainy",
    1240: "rainy",
    1243: "rainy",
    1246: "rainy",
    1066: "snow",
    1114: "snow",
    1117: "snow",
    1210: "snow",
    1213: "snow",
    1216: "snow",
    1219: "snow",
    1222: "snow",
    1225: "snow",
    1255: "snow",
    1258: "snow",
    1279: "snow",
    1282: "snow",
    1069: "snow",
    1072: "snow",
    1204: "snow",
    1207: "snow",
    1237: "snow",
    1249: "snow",
    1252: "snow",
    1261: "snow",
    1264: "snow",
    1087: "thunderstorm",
    1273: "thunderstorm",
    1276: "thunderstorm",
};

export const gradients: WeatherGradients = {
    sunny: {
        colors: ["#FFD580", "#FFB347", "#FF9A76"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 45
    },

    clear: {
        colors: ["#4facfe", "#00f2fe"],
        start: { x: 0.5, y: 1 },
        end: { x: 0.5, y: 0 },
        useAngle: true,
        angle: 30
    },

    cloudy: {
        colors: ["#D7DDE8", "#757F9A"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 0
    },

    partly_cloudy: {
        colors: ["#FFD194", "#70E1F5"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 120
    },

    rainy: {
        colors: ["#3A7BD5", "#2C3E50"],
        start: { x: 0.5, y: 0 },
        end: { x: 0.5, y: 1 },
        useAngle: true,
        angle: 180
    },

    thunderstorm: {
        colors: ["#232526", "#414345"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 200
    },

    snow: {
        colors: ["#E0EAFC", "#CFDEF3"],
        start: { x: 0.5, y: 0 },
        end: { x: 0.5, y: 1 },
        useAngle: true,
        angle: 270
    },

    fog: {
        colors: ["#D7D2CC", "#304352"],
        start: { x: 0.2, y: 0 },
        end: { x: 0.8, y: 1 },
        useAngle: true,
        angle: 160
    },

    mist: {
        colors: ["#606C88", "#3F4C6B"],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 135
    },

    haze: {
        colors: ["#EACDA3", "#D6AE7B"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
        useAngle: true,
        angle: 90
    },

    windy: {
        colors: ["#74EBD5", "#9FACE6"],
        start: { x: 0.1, y: 0 },
        end: { x: 0.9, y: 1 },
        useAngle: true,
        angle: 45
    },

    drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        start: { x: 0.5, y: 0 },
        end: { x: 0.5, y: 1 },
        useAngle: true,
        angle: 180
    },
    night_clear: {
        colors: [
            "#3A506B", 
            "#5C677D", 
            "#7B8DA6", 
        ],
        start: { x: 0, y: 0 },
        end: { x: 1, y: 1 },
        useAngle: true,
        angle: 135,
    },

    night_cloudy: {
        colors: [
            "#2B2D42", 
            "#474B5C",
            "#7C8696", 
        ],
        start: { x: 0.9, y: 0.1 },
        end: { x: 0.1, y: 0.9 },
        useAngle: true,
        angle: 200,
    }
};
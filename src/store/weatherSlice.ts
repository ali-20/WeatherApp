
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import weatherService from "../services/weatherService";
import { TWeatherCondition, WeatherData } from "../interfaces/weatherInterface";

export const loadWeather = createAsyncThunk(
    "weather/loadWeather",
    async () => {
        const data = await weatherService.fetchWeather();
        return data;
    }
);

type WeatherState = {
    data: WeatherData | null;
    loading: boolean;
    error: string | null;
    gradient: TWeatherCondition;
    favorites: Array<WeatherData> | [];
    recents: Array<WeatherData> | [];
    isCelcius: boolean
};

const initialState: WeatherState = {
    data: null,
    loading: false,
    error: null,
    gradient: "sunny",
    favorites: [],
    recents: [],
    isCelcius: true
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setWeather(state, action: PayloadAction<WeatherData | null>) {
            state.data = action.payload;
        },
        setGradient(state, action: PayloadAction<TWeatherCondition>) {
            console.log("gradient in redux", action.payload)
            state.gradient = action.payload;
        },
        addRecent(state, action: PayloadAction<WeatherData | [null]>) {
            state.recents = [action.payload, ...state.recents]
        },
        addFavorites(state, action: PayloadAction<WeatherData | [null]>) {
            state.favorites = [action.payload, ...state.favorites]
        },
        toggleUnit(state) {
            state.isCelcius = !state.isCelcius
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadWeather.pending, (state) => {
                if (!state.data) {
                    state.loading = true;
                }
                state.error = null;
            })
            .addCase(loadWeather.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload) {

                    state.data = action.payload;
                }
            })
            .addCase(loadWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch weather";
            });
    },
});

export const { setWeather, setGradient, addRecent, addFavorites, toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;
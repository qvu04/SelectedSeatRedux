import { createSlice } from '@reduxjs/toolkit'
import { dataPhim } from '../dataFilm';

const initialState = {
    selectedSeat: [],
    dataPhim: dataPhim,
}

const filmSlice = createSlice({
    name: "filmSlice",
    initialState,
    reducers: {
        selectedSeatAction: (state, { payload }) => {
            console.log('✌️payload --->', payload);
            if (payload.daDat) return;
            let index = state.selectedSeat.findIndex((item) => item.soGhe == payload.soGhe);
            if (index == -1) {
                state.selectedSeat.push(payload);
            } else {
                state.selectedSeat.splice(index, 1);
            }
        },
        deleteSeatAction: (state, { payload }) => {
            console.log('✌️payload --->', payload);
            let newSeat = state.selectedSeat.filter((item) => {
                return item.soGhe != payload.soGhe
            })
            state.selectedSeat = newSeat;
        },
    }
});

export const { selectedSeatAction, deleteSeatAction } = filmSlice.actions

export default filmSlice.reducer
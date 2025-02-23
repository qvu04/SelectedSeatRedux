import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedSeatAction } from './redux/filmSlice';

export default function DanhSach() {
    let { dataPhim, selectedSeat } = useSelector((state) => state.filmSlice);
    let dispatch = useDispatch()
    let handleSelectedSeat = (seat) => {
        dispatch(selectedSeatAction(seat))
    }
    let renderDanhSach = () => {
        return dataPhim.map((item, index) => {
            return <div className='flex items-center w-full ' key={index}>
                <span className='font-2xl font-bold text-yellow-500 m-4'>{item.hang}</span>
                {item.danhSachGhe.map((item, index) => {
                    return <div className='grid grid-cols-10 p-4 w-1/2' key={index}>
                        <button className='p-3  border-2 border-yellow-300' onClick={() => {
                            handleSelectedSeat(item)

                        }} style={{
                            backgroundColor: item.daDat ? "gray" : selectedSeat.some((ghe) => ghe.soGhe == item.soGhe) ?
                                "green" : "white"
                        }}
                            disabled={item.daDat}
                        >{item.soGhe}</button>
                    </div>
                })}
            </div>
        })

    }
    return (
        <div>
            {renderDanhSach()}
        </div>
    )
}

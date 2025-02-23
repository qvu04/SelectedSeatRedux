import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSeatAction } from './redux/filmSlice'

export default function DatVe() {
    let { selectedSeat } = useSelector((state) => state.filmSlice)
    let dispatch = useDispatch()
    let handleDelete = (seat) => {
        dispatch(deleteSeatAction(seat))

    }
    console.log('✌️selectedSeat --->', selectedSeat);
    let renderDatVe = () => {
        return selectedSeat.map((item, index) => {
            return <tr key={index}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td><button onClick={() => {
                    handleDelete(item)
                }}>X</button></td>
            </tr>
        })

    }
    return (
        <div className='w-full'>
            <table>
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{renderDatVe()}</tbody>
            </table>
        </div>
    )
}

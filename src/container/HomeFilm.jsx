import React from 'react'
import DanhSach from './DanhSach'
import DatVe from './DatVe'
import { dataPhim } from './dataFilm'

export default function HomeFilm() {

    return (
        <div className='flex'>
            <DanhSach />
            <DatVe />
        </div>
    )
}

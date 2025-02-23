import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import HomeFilm from './container/HomeFilm'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import filmSlice from './container/redux/filmSlice'

let store = configureStore({
  reducer: {
    filmSlice: filmSlice,
  }
})

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <HomeFilm />
      </Provider>
    </div>
  )
}

export default App

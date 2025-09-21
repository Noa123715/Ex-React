import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppContext } from '../context/context'
import Header from '../components/Header'
import Home from '../components/Home'
import About from '../components/About'
import Counter from '../components/Counter'
import Counter2 from '../components/Counter2'
import Atlas from '../comp_atlas/Atlas'
import Pixabay from '../comp_pixabay/Pixabay'
import Vip from '../components/Vip'

const AppRoutes = () => {
    const [number, setNumber] = useState(33)
    const [coins, setCoins] = useState(6)
    const [counter, setCounter] = useState(0)

    return (
        <BrowserRouter>
            <AppContext.Provider value={{
                val: "Koko2",
                number, setNumber,
                coins, setCoins,
                counter, setCounter
            }}>
                <Header coins={coins} />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/counter2" element={<Counter2 />} />
                    <Route path="/atlas" element={<Atlas />} />
                    <Route path="/pixabay" element={<Pixabay />} />
                    <Route path="/vip" element={<Vip />} />
                </Routes>

            </AppContext.Provider>
            <footer className='p-2 container bg-danger'>footer</footer>
        </BrowserRouter>
    )
}

export default AppRoutes
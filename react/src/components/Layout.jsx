import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <header className='flex justify-between px-5 py-3 items-center border-blue-500'>
                <Link className='text-xl font-bold text-blue-500' to='/'>Cars.md</Link>
            </header>
            <nav className='flex gap-3'>
                <Link to='/cars'>Cars</Link>
                <Link to='/new-car'>New car</Link>
            </nav>
            <main className='px-5 py-3'>
                <Outlet />
            </main>

        </>
    )
}

export default Layout

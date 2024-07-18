import React, { Suspense, lazy } from 'react';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import HeaderShimmer from './Shimmer/HeaderShimmer';
import NavMenuShimmer from './Shimmer/NavMenuShimmer';
import { Outlet } from 'react-router-dom';
const Header = lazy(() => import('./Components/Header'))
const NavMenu = lazy(() => import('./Components/NavMenu'))

const App = () => {
    return (
        <>
            <ToastContainer />
            <Provider store={store}>

                <div className='flex flex-col'>

                    <Suspense fallback={<HeaderShimmer />}>
                        <Header />
                    </Suspense>

                    <div className='flex'>
                        <div className='w-[5%]'>
                            <Suspense fallback={<NavMenuShimmer />}>
                                <NavMenu />
                            </Suspense>
                        </div>

                        <div className='w-[95%] mt-8'>
                            <Outlet />
                        </div>
                    </div>

                </div>
            </Provider></>
    )
}

export default App
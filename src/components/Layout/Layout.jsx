import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = () => {

    return (
        <>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
            <ToastContainer theme="dark" position="bottom-center" autoClose={3000} />
        </>
    )
}

export default Layout;
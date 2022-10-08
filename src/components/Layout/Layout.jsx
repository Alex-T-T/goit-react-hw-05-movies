import AppBar from "components/AppBar/AppBar";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </>
    )
}

export default Layout;
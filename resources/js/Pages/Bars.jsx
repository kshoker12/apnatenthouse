import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Bars({}) {
    return (
        <NavBar>
            <Head title="Bars">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Floors({}) {
    return (
        <NavBar>
            <Head title="Floors">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

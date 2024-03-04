import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Chairs({}) {
    return (
        <NavBar>
            <Head title="Chairs">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

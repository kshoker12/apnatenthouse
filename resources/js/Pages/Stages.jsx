import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Stages({}) {
    return (
        <NavBar>
            <Head title="Stages">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

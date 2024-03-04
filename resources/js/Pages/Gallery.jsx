import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Gallery({}) {
    return (
        <NavBar>
            <Head title="Gallery">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

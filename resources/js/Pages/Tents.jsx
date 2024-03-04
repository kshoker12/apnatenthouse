import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Tents({props}) {
    return (
        <NavBar>
            <Head title="Tents">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

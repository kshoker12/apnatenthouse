import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"

export default function Faq({}) {
    return (
        <NavBar>
            <Head title="FAQs">
                <link rel="icon" href={AppLogo}/>
            </Head>
        </NavBar>
    );
}

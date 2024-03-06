import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import JsonData from "../../data/data.json";
import Product from '@/Components/Product';

export default function Tents({props}) {
    return (
        <NavBar>
            <Head title="Tents">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <Product props={JsonData.products[4]}/>
        </NavBar>
    );
}

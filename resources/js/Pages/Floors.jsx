import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import JsonData from "../../data/data.json"
import Product from '@/Components/Product';

export default function Floors({}) {
    return (
        <NavBar>
            <Head title="Floors">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <Product props={JsonData.products[2]}/>
        </NavBar>
    );
}

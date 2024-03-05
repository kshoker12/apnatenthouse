import { Link, Head } from '@inertiajs/react';
import NavBar from '@/Layouts/NavBar';
import AppLogo from "../Components/applogo.png"
import Product from '@/Components/Product';
import JsonData from '../../data/data.json';

export default function Miscellaneous({}) {
    return (
        <NavBar>
            <Head title="Miscellaneous">
                <link rel="icon" href={AppLogo}/>
            </Head>
            <Product props={JsonData.products[3]}/>
        </NavBar>
    );
}

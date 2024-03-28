import tentImg from "./tent.png"
import chairImg from "./chair.png"
import tablesImg from "./tables.png"
import floorsImg from "./floors.png";
import barsImg from "./bars.png";
import stagesImg from "./stages.png";

export default function Features({ props }) {

    function findImage(text) {
        switch(text) {
            case "tents":
                return tentImg;
            case "chairs":
                return chairImg;
            case "tables":
                return tablesImg;
            case "floors":
                return floorsImg;
            case "addons":
                return barsImg;
        }
    }

    return (
        <div id="" className="text-center tw-bg-blue-50 tw-pb-10">
            <div className="container-fluid " data-aos = "fade-up" data-aos-once = {true}>
                <div className=" section-title">
                <h2>Products</h2>
                </div>
                <div className="tw-w-full">
                {props.features
                    ? props.features.map((feature, i) => {
                        return (
                            <a href = {feature.name} className="">
                                <div className=" tw-bg-white hover:tw-bg-blue-100 tw-ease-in-out tw-duration-200 tw-shadow-lg tw-float-left 2xl:tw-w-[19.8%] xl:tw-w-[24.7%] lg:tw-w-[33%] sm:tw-w-[49.5%] tw-m-0.5 tw-h-[400px]"><
                                    h3>
                                        {feature.title}
                                    </h3>
                                    <div className="tw-h-72 tw-w-full tw-flex tw-justify-center tw-items-center">
                                    <img src={findImage(feature.name)} alt="" className="tw-h-full tw-w-auto"/>     
                                    </div>
                                    
                                    <div className="tw-p-5 tw-text-left tw-text-black">
                                        
                                        <div className="tw-text-4xl tw-my-2">{feature.products} Products</div>
                                        <p className="lg:tw-text-2xl md:tw-text-xl">
                                            {feature.text}
                                        </p>
                                    </div>
                                        
                                </div>
                            </a>
                               
                        )
                    })
                    : "Loading..."}
                </div>
            </div>
        </div>
    );
}
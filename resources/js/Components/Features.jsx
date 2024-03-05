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
            case "bars":
                return barsImg;
            case "stages":
                return stagesImg;
        }
    }

    return (
        <div id="features" className="text-center">
            <div className="container" data-aos = "fade-up" data-aos-once = {true}>
                <div className="col-md-10 col-md-offset-1 section-title">
                <h2>Products</h2>
                </div>
                <div className="row">
                {props.features
                    ? props.features.map((feature, i) => {
                        return (
                            <a href = {feature.name} className="hover:tw-opacity-70 tw-ease-in-out tw-duration-200">
                                <div key={`${feature.title}-${i}`} className="col-xs-6 col-md-3">
                                    {" "}
                                    <h3>{feature.title}</h3>
                                    <img src={findImage(feature.name)} alt="" />
                                    <h5>{feature.products} Products</h5>
                                    <p>{feature.text}</p>
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
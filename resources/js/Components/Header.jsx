

export default function Header({ props }) {

    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                <div className="container">
                    <div className="row" data-aos = "fade-up" data-aos-once = {true}>
                    <div className="col-md-8 col-md-offset-2 intro-text" >
                        <h1 className = "">
                        {props.title ? props.title : "Loading"}
                        <span></span>
                        </h1>
                        <p>{props.titleText ? props.titleText : "Loading"}</p>
                        <div className="">
                            <a
                            href="#about"
                            className="btn btn-custom btn-lg page-scroll"
                            >
                            Learn More
                            </a>{" "}
                            <a
                                href={route("booking")}
                                className="btn btn-custom btn-lg page-scroll"
                                >
                                Request Booking
                            </a>{" "}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    );
}
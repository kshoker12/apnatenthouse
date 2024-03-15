
export default function Product({props}) {
    return (
        <>
            <header id="header">
                <div className="intro">
                    <div className="overlay">
                        <div className="container">
                            <div className="row" data-aos = "fade-right" data-aos-once = {true}>
                                <div className="col-md-8 col-md-offset-2 tw-text-center tw-pt-48 tw-pb-16" >
                                    <h1>
                                        {props.name}
                                        <i class={"tw-ml-4 " + props.icon}/>
                                    </h1>
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
            </header>
            <div className="tw-bg-blue-50 tw-h-fit tw-grid md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-grid-cols-1">
                {props.items.map((item, index)=>{
                    return (
                        <div className="tw-bg-white tw-shadow-lg tw-p-10 tw-m-10 tw-flex tw-items-center tw-justify-center" data-aos = "flip-left" data-aos-once = {true}>
                            <div className="">
                                <h3>{item.name}</h3>
                                <div className="2xl:tw-flex tw-justify-between tw-items-start tw-space-x-4">
                                    <img src={"/" + item.image} alt="" className="tw-w-96 tw-h-auto  tw-p-1"/>
                                    <p>
                                        {item.text}
                                    </p>    
                                </div>    
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
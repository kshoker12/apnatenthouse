import { company, products, services } from "@/Constants/Info";
import { FACEBOOK, GOOGLE, INSTAGRAM } from "@/Constants/Links";
import { Typography } from "@material-tailwind/react";


export default function Footer({}) {
   
    return (
        <footer className="tw-relative tw-w-full tw-bg-blue-900 tw-pt-4">
            <div className="tw-mx-auto tw-w-full tw-max-w-7xl tw-px-8">
                <div className="tw-grid tw-grid-cols-1 tw-justify-between tw-gap-4 md:tw-grid-cols-2">
                <Typography variant="h4" className=" tw-text-white tw-space-y-6">
                    {company.NAME}
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-mt-4 tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl  tw-text-black"></i>
                            <i className="fas fa-map-marker-alt tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            {company.ADDRESS}  
                        </div>
                    </Typography>
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl tw-text-black"></i>
                            <i className="fas fa-phone tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            {company.PHONE} 
                        </div>
                    </Typography>
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl tw-text-black"></i>
                            <i className="fas fa-envelope tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            {company.EMAIL}
                        </div>
                    </Typography>
                    <Typography className="">
                        <strong className="">
                            Follow Us    
                        </strong>
                        <div className="tw-flex tw-items-center tw-w-1/3 tw-justify-between tw-mt-4 tw-space-x-3">
                            {[INSTAGRAM, FACEBOOK, GOOGLE].map((socialMedia, index)=>(
                                <a href = {socialMedia} className="tw-flex tw-items-center tw-justify-center ">
                                    <div className="">
                                        <i className={`fab fa-${index === 0 ? "instagram" : index === 1 ? "facebook" : "google"} tw-text-4xl tw-text-white tw-z-10 tw-bg-black tw-px-4 tw-py-3 tw-rounded-lg hover:tw-bg-blue-600 tw-ease-in-out tw-duration-200`}/>     
                                    </div>
                                </a>        
                            ))}
                        </div>
                    </Typography>
                </Typography>
                <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-gap-4 tw-mt-3">
                    {[services, products].map(({ title, items }) => (
                    <ul key={title}>
                        <Typography
                        variant="small"
                        className="tw-mb-3 tw-font-medium tw-text-white tw-text-2xl"
                        >
                        {title}
                        </Typography>
                        {items.map((link) => (
                        <li key={link} className="tw-py-1">
                            <Typography
                            as="a"
                            href="#"
                            className="tw-py-4 tw-font-normal tw-transition-colors hover:tw-text-blue-gray-300 tw-text-2xl tw-text-white"
                            >
                            <i className="fa-chevron-right fa tw-mr-4 tw-text-2xl tw-text-orange-700"/>{link}
                            </Typography>
                        </li>
                        ))}
                    </ul>
                    ))}
                </div>
                </div>
                <div className="tw-mt-12 tw-flex tw-w-full tw-flex-col tw-items-center tw-justify-center tw-border-t tw-border-blue-gray-50 tw-py-4 md:tw-flex-row md:tw-justify-between">
                <Typography
                    variant="small"
                    className="tw-mb-4 tw-text-center tw-font-normal tw-text-white tw-md:mb-0"
                >
                    &copy; {2024} {company.NAME}, UL Group of Companies. All
                    Rights Reserved.
                </Typography>
                </div>
            </div>
            </footer>
    )
}
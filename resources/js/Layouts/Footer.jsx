import { Typography } from "@material-tailwind/react";

const LINKS = [
    {
      title: "Services",
      items: ["Weddings", "Receptions", "Birthday", "More"],
    },
    {
      title: "Products",
      items: ["Tents", "Chairs", "Tables", "Floors", "Stages", "Bars",],
    },
  ];

export default function Footer({}) {
   
    return (
        <footer className="tw-relative tw-w-full tw-bg-blue-900 tw-pt-4">
            <div className="tw-mx-auto tw-w-full tw-max-w-7xl tw-px-8">
                <div className="tw-grid tw-grid-cols-1 tw-justify-between tw-gap-4 md:tw-grid-cols-2">
                <Typography variant="h4" className=" tw-text-white tw-space-y-6">
                    Apna Tent House
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-mt-4 tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl  tw-text-black"></i>
                            <i className="fas fa-map-marker-alt tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            7809 122 St. Surrey, BC    
                        </div>
                    </Typography>
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl tw-text-black"></i>
                            <i className="fas fa-phone tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            (604) 671-7570    
                        </div>
                    </Typography>
                    <Typography className="tw-flex tw-justify-start tw-items-center tw-space-x-6">
                        <div className="tw-flex tw-items-center tw-justify-center">
                            <i className="fa fa-circle tw-absolute tw-text-5xl tw-text-black"></i>
                            <i className="fas fa-envelope tw-text-2xl tw-text-white tw-z-10"/>    
                        </div>
                        <div className="tw-text-white">
                            ApnaTentandPartyRentals@gmail.com 
                        </div>
                    </Typography>
                    <Typography className="">
                        <strong className="">
                            Follow Us    
                        </strong>
                        <div className="tw-flex tw-items-center tw-w-1/3 tw-justify-between tw-mt-4 tw-space-x-3">
                            <a className="tw-flex tw-items-center tw-justify-center ">
                                <div className="">
                                    <i className="fab fa-instagram tw-text-4xl tw-text-white tw-z-10 tw-bg-black tw-px-4 tw-py-3 tw-rounded-lg hover:tw-bg-blue-600 tw-ease-in-out tw-duration-200"/>     
                                </div>
                            </a>    
                            <a className="tw-flex tw-items-center tw-justify-center ">
                                <div className="">
                                    <i className="fab fa-facebook tw-text-4xl tw-text-white tw-z-10 tw-bg-black tw-px-4 tw-py-3 tw-rounded-lg hover:tw-bg-blue-600 tw-ease-in-out tw-duration-200"/>     
                                </div>
                            </a>
                            <a className="tw-flex tw-items-center tw-justify-center ">
                                <div className="">
                                    <i className="fab fa-google tw-text-4xl tw-text-white tw-z-10 tw-bg-black tw-px-4 tw-py-3 tw-rounded-lg hover:tw-bg-blue-600 tw-ease-in-out tw-duration-200"/>     
                                </div>
                            </a>
                        </div>
                    </Typography>
                </Typography>
                <div className="tw-grid tw-grid-cols-2 tw-justify-between tw-gap-4 tw-mt-3">
                    {LINKS.map(({ title, items }) => (
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
                    className="tw-mb-4 tw-text-center tw-font-normal tw-text-blue-gray-900 tw-md:mb-0"
                >
                    &copy; {2024} Apna Tent House. All
                    Rights Reserved.
                </Typography>
                </div>
            </div>
            </footer>
    )
}
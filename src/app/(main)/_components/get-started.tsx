// import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const GetStartedComponent = () => {
  return (
    // <div className='min-h-[80vh] w-full relative flex flex-row items-center justify-center'>
    //     <div className='h-full w-[80%] flex flex-row items-center justify-center gap-4 z-10'>
    //         <div className='flex-1 flex flex-col items-start justify-center gap-[4rem]'>
    //             <div className='flex flex-col items-start justify-center gap-4'>
    //                 <div className='border uppercase text-green-tag border-green-tag py-1 px-3 rounded-xl'>
    //                     #1 best finance app
    //                 </div>
    //                 <div className='text-5xl w-[90%] leading-[3.5rem] capitalize'>
    //                     the easiest and fastest way to send your
    //                     <span className='text-secondary'>
    //                     &nbsp;money
    //                     </span>
    //                 </div>
    //                 <div className='text-title leading-7 text-lg w-[90%]'>
    //                     Trusted in more than 100 countries and 5 million customers, transact easily and quickly with just One Click
    //                 </div>
    //             </div>
    //             <div className='flex flex-row items-center justify-center gap-6'>
    //                 <Button className='text-primary rounded-full bg-secondary p-6 capitalize text-lg transform transition-all duration-300 hover:bg-secondary-hover'>
    //                     get started
    //                 </Button>
    //                 <Button className='text-secondary rounded-full bg-primary p-6 capitalize text-lg shadow-sm shadow-title transform transition-all duration-300 hover:bg-primary-hover'>
    //                     watch demo
    //                 </Button>
    //             </div>
    //         </div>
    //         <div className='flex-1 relative flex items-center justify-center'>
    //             <Image
    //                 src={"/images/home-get-started-img.png"}
    //                 alt='home-get-started-img'
    //                 width={0}
    //                 height={0}
    //                 unoptimized
    //                 quality={100}
    //                 className='hidden lg:block object-cover h-[600px] w-auto'
    //                 draggable={false}
    //             />
    //         </div>
    //     </div>
    //     <div className='absolute right-0 top-0 bottom-0 left-[25%] bg-primary-light'>

    //     </div>
    // </div>
    <div className="relative min-h-[15rem] w-full flex items-center justify-center gap-0 py-4 bg-primary-light">
        <Image 
            src={"/images/home-get-started-bg.png"}
            alt="bg"
            className="absolute inset-0 w-full h-full z-0 object-cover opacity-80"
            width={0}
            height={0}
            unoptimized
            quality={100}
            draggable={false}
        />
      <div className="w-[95%] lg:w-[80%] h-full flex flex-col items-center justify-center gap-8 lg:gap-12 z-10">
        <h2 className="text-center text-4xl lg:text-5xl text-black capitalize">
          innovative banking technology company
        </h2>
        <p className="text-center leading-7 text-wrap w-full lg:w-[75%]">
          {/* <span className="text-nowrap"> */}
            QODES Systems is a leading provider of banking Suite Of Products,
          {/* </span> */}

          {/* <br /> */}
          {/* <span className="text-wrap"> */}
            SAP Services, Data Center Solutions Zipped with Software development
            using the latest cutting edge technologies
          {/* </span> */}
        </p>
      </div>
    </div>
  );
};

export default GetStartedComponent;

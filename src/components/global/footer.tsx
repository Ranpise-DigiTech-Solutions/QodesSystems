import Image from "next/image";
import Link from "next/link";
import React from "react";

const FooterComponent = () => {
  return (
    <div className="h-fit w-full flex items-center justify-center py-[3rem] bg-secondary-dark">
      <div className="h-fit w-[80%] flex flex-col items-center justify-center gap-10">
        <div className="h-fit w-full flex flex-row items-start justify-between gap-12 lg:gap-6 flex-wrap">
          <div className="flex-1 min-w-[200px] flex items-center justify-start lg:justify-center">
            <div className="flex flex-col items-center lg:items-start justify-center gap-6">
              <div className="w-full flex items-center justify-center lg:justify-start">
                <Image
                  src={
                    "/images/logo.jpg"
                  }
                  alt="logo"
                  width={0}
                  height={0}
                  className="h-[5rem] w-[7rem] object-fill rounded-2xl"
                  unoptimized
                  quality={100}
                />
              </div>
              <h2 className="text-2xl capitalize text-center lg:text-start italic text-white">
                QODES Systems
              </h2>
              <p className="text-base text-center lg:text-start text-title leading-6 lg:leading-7">
                QODES Systems is a leading provider of banking Suite Of
                Products, SAP Services, Data Center Solutions.
              </p>
            </div>
          </div>
          <div className="flex-1 min-w-[150px] flex items-center justify-start lg:justify-center">
            <div className="flex flex-col items-start justify-center gap-6">
              <h3 className="text-base text-title tracking-wider uppercase">
                pages
              </h3>
              <div className="flex flex-col items-start justify-center gap-4 text-primary">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About us</Link>
                <p>Services</p>
                <p>Products</p>
                <Link href={"/contact"}>Contact us</Link>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[150px] flex items-center justify-start lg:justify-center">
            <div className="flex flex-col items-start justify-center gap-6">
              <h3 className="text-base text-title tracking-wider uppercase">
                company
              </h3>
              <div className="flex flex-col items-start justify-center gap-4 text-primary">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[150px] flex items-center justify-start lg:justify-center">
            <div className="flex flex-col items-start justify-center gap-6">
              <h3 className="text-base text-title tracking-wider uppercase">
                Address
              </h3>
              <div className="flex flex-col items-start justify-center gap-4 text-primary">
                <p>street 124, colony abc</p>
                <p>city, state, 57003</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-title"></div>
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-title">
            ©2024 Qodes Systems. All rights reserved.
          </p>
          <p className="text-title">
            Powered by
            <Link
              href={"/"}
              className="transform transition-all duration-300 hover:text-primary"
            >
              &nbsp;&quot;QODES Systems&quot;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;

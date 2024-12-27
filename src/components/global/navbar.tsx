"use client";

import Image from "next/image";
import Link from "next/link";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
// import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronRight, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useSheet } from "@/app/providers/sheet-provider";

const Navbar = () => {
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [itServicesSubMenuOpen, setItServicesSubMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [bankingSubMenuOpen, setBankingSubMenuOpen] = useState(false);
  const [othersSubMenuOpen, setOthersSubMenuOpen] = useState(false);
  const [homeMenuOpen, setHomeMenuOpen] = useState(false);

  const { isSheetOpen, closeSheet, toggleSheet } = useSheet();

  return (
    <div className="w-full h-[5rem] bg-primary flex flex-row items-center justify-center">
      <div className="w-[90%] flex flex-row items-center justify-between gap-6">
        <Link
          href={"/"}
          className="flex flex-row items-center justify-center gap-2"
        >
          <Image
            src={"/images/logo.jpg"}
            alt="Logo"
            width={0}
            height={0}
            className="w-[3rem] lg:w-[5rem] lg:h-[4rem] rounded-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer shadow-sm shadow-black"
            unoptimized
            quality={100}
          />
          <p className="text-2xl italic text-nowrap">QODES Systems</p>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex flex-row items-center justify-center gap-8">
            <li
              onMouseEnter={() => setHomeMenuOpen(true)}
              onMouseLeave={() => setHomeMenuOpen(false)}
            >
              <DropdownMenu open={homeMenuOpen}>
                {/* Trigger the dropdown on hover */}
                <div>
                  <DropdownMenuTrigger asChild>
                    <a
                      href="#"
                      className={twMerge(
                        `group text-lg cursor-pointer hover:text-secondary flex flex-col items-center justify-center transition transform-all duration-300 outline-none`,
                        homeMenuOpen && "text-secondary"
                      )}
                    >
                      Home
                      <div className="relative">
                        <span
                          className={twMerge(
                            `hidden group-hover:block absolute -bottom-3 h-2 w-2 bg-secondary rounded-full`,
                            homeMenuOpen && "block"
                          )}
                        ></span>
                      </div>
                    </a>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="w-56 z-[1000] flex flex-col items-start justify-center gap-4 bg-white p-4 mt-0">
                  <Link href={"/about"}>
                    <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      About Us
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li
              onMouseEnter={() => setServicesMenuOpen(true)}
              onMouseLeave={() => {
                setItServicesSubMenuOpen(false);
                setServicesMenuOpen(false);
              }}
            >
              <DropdownMenu open={servicesMenuOpen}>
                {/* Trigger the dropdown on hover */}
                <div>
                  <DropdownMenuTrigger asChild>
                    <a
                      href="#"
                      className={twMerge(
                        `group text-lg cursor-pointer hover:text-secondary flex flex-col items-center justify-center transition transform-all duration-300 outline-none`,
                        servicesMenuOpen && "text-secondary"
                      )}
                    >
                      Services
                      <div className="relative">
                        <span
                          className={twMerge(
                            `hidden group-hover:block absolute -bottom-3 h-2 w-2 bg-secondary rounded-full`,
                            servicesMenuOpen && "block"
                          )}
                        ></span>
                      </div>
                    </a>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="w-56 flex flex-col items-start justify-center gap-4 bg-white p-4 mt-0 !z-50">
                  <DropdownMenuItem
                    className="w-full relative outline-none cursor-pointer"
                    onMouseEnter={() => setItServicesSubMenuOpen(true)}
                  >
                    <div
                      className={twMerge(
                        `w-full flex flex-row items-center justify-between gap-6 transform transition-all duration-300 hover:text-secondary`,
                        itServicesSubMenuOpen && "text-secondary"
                      )}
                    >
                      <p className="capitalize">iT security</p>
                      <ChevronRight className="w-[20px]" />
                    </div>
                    {itServicesSubMenuOpen && (
                      <DropdownMenuContent
                        className="w-56 flex flex-col items-start justify-center gap-4 bg-white p-4 mt-2 absolute left-28"
                        onMouseLeave={() => setItServicesSubMenuOpen(false)}
                      >
                        <Link href={"/it-security-assessment"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            IT security assessment
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/security-compliance"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Security compliance
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/penetration-testing"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Penetration testing
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/vulnerability-assessment"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Vulnerability assessment
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/application-security-testing"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Application security testing
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/source-code-review"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Source code review
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/ict-environment-audit"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            ICT environment audit
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenuItem>
                  <Link href={"/sap-services"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      SAP services
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/application-development"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      application development
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/process-consulting"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      process consulting
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/support-services"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      support services
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/software-testing-services"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      software testing/ quality engineering
                    </DropdownMenuItem>
                  </Link>
                  <Link href={"/staff-augmentation-services"}>
                    <DropdownMenuItem className="w-full capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                      staff augmentation services
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => {
                setBankingSubMenuOpen(false);
                setOthersSubMenuOpen(false);
                setProductsMenuOpen(false);
              }}
            >
              <DropdownMenu open={productsMenuOpen}>
                {/* Trigger the dropdown on hover */}
                <div>
                  <DropdownMenuTrigger asChild>
                    <a
                      href="#"
                      className={twMerge(
                        `group text-lg cursor-pointer hover:text-secondary flex flex-col items-center justify-center transition transform-all duration-300 outline-none`,
                        productsMenuOpen && "text-secondary"
                      )}
                    >
                      Products
                      <div className="relative">
                        <span
                          className={twMerge(
                            `hidden group-hover:block absolute -bottom-3 h-2 w-2 bg-secondary rounded-full`,
                            productsMenuOpen && "block"
                          )}
                        ></span>
                      </div>
                    </a>
                  </DropdownMenuTrigger>
                </div>
                <DropdownMenuContent className="w-56 z-[1000] flex flex-col items-start justify-center gap-4 bg-white p-4 mt-0">
                  <DropdownMenuItem
                    className="w-full relative outline-none cursor-pointer"
                    onMouseEnter={() => {
                      setOthersSubMenuOpen(false);
                      setBankingSubMenuOpen(true);
                    }}
                  >
                    <div
                      className={twMerge(
                        `w-full flex flex-row items-center justify-between gap-6 transform transition-all duration-300 hover:text-secondary`,
                        bankingSubMenuOpen && "text-secondary"
                      )}
                    >
                      <p className="capitalize">banking</p>
                      <ChevronRight className="w-[20px]" />
                    </div>
                    {bankingSubMenuOpen && (
                      <DropdownMenuContent
                        className="w-56 flex flex-col items-start justify-center gap-4 bg-white p-4 mt-2 absolute left-28 -top-2"
                        onMouseLeave={() => setBankingSubMenuOpen(false)}
                      >
                        <Link href={"/core-banking-system"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            core banking system
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/loan-software"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            loan software
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/remittance-management-system"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            remittance management system
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/internet-banking-system"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            Internet banking system
                          </DropdownMenuItem>
                        </Link>
                        <Link href={"/mobile-banking"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            mobile banking
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="w-full relative outline-none cursor-pointer"
                    onMouseEnter={() => {
                      setBankingSubMenuOpen(false);
                      setOthersSubMenuOpen(true);
                    }}
                  >
                    <div
                      className={twMerge(
                        `w-full flex flex-row items-center justify-between gap-6 transform transition-all duration-300 hover:text-secondary cursor-pointer`,
                        othersSubMenuOpen && "text-secondary"
                      )}
                    >
                      <p className="capitalize">others</p>
                      <ChevronRight className="w-[20px]" />
                    </div>
                    {othersSubMenuOpen && (
                      <DropdownMenuContent
                        className="w-56 flex flex-col items-start justify-center gap-4 bg-white p-4 mt-2 absolute left-28 top-9"
                        onMouseLeave={() => setOthersSubMenuOpen(false)}
                      >
                        <Link href={"/hrms-package"}>
                          <DropdownMenuItem className="capitalize outline-none cursor-pointer transform transition-all duration-300 hover:text-secondary">
                            HRMS Package
                          </DropdownMenuItem>
                        </Link>
                      </DropdownMenuContent>
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            <li>
              <Link
                href="/join-us"
                className="group text-lg cursor-pointer hover:text-secondary flex flex-col items-center justify-center transition transform-all duration-300"
              >
                Join us
                <div className="relative">
                  <span className="hidden group-hover:block absolute -bottom-3 h-2 w-2 bg-secondary rounded-full"></span>
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="group text-lg cursor-pointer hover:text-secondary flex flex-col items-center justify-center transition transform-all duration-300"
              >
                Contact Us
                <div className="relative">
                  <span className="hidden group-hover:block absolute -bottom-3 h-2 w-2 bg-secondary rounded-full"></span>
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={toggleSheet}>
          {" "}
          {/* Use the state to control open/close */}
          <SheetTrigger className="block lg:hidden" onClick={toggleSheet}>
            {" "}
            {/* Toggle the state when clicked */}
            <Menu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="bg-white w-full overflow-y-auto">
            <SheetHeader className="hidden">
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start justify-center gap-10">
              <Link
                href={"/"}
                className="flex flex-row items-center justify-center gap-2"
              >
                <Image
                  src={"/images/logo.jpg"}
                  alt="Logo"
                  width={0}
                  height={0}
                  className="w-[2.5rem] lg:w-[5rem] lg:h-[4rem] rounded-xl transform transition-transform duration-300 hover:scale-95 cursor-pointer"
                  unoptimized
                  quality={100}
                />
                <p className="text-xl italic text-nowrap">QODES Systems</p>
              </Link>
              <div className="flex flex-col items-start justify-center gap-6 px-6">
                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">home</p>
                  <Link
                    href={"/about"}
                    className="text-lg text-black capitalize pl-[2rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    about us
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">services</p>
                  <Link
                    href={"/sap-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    sAP services
                  </Link>
                  <p className="text-lg text-black capitalize pl-[2rem]">
                    IT security
                  </p>
                  <Link
                    href={"/it-security-assessment"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    IT security assessment
                  </Link>
                  <Link
                    href={"/security-compliance"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    security compliance
                  </Link>
                  <Link
                    href={"/penetration-testing"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    penetration testing
                  </Link>
                  <Link
                    href={"/vulnerability-assessment"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    Vulnerability assessment
                  </Link>
                  <Link
                    href={"/application-security-testing"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    application security testing
                  </Link>
                  <Link
                    href={"/source-code-review"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    source code review
                  </Link>
                  <Link
                    href={"/ict-environment-audit"}
                    className="text-lg text-black capitalize pl-[4rem]"
                    onClick={closeSheet}
                  >
                    ICT environment audit
                  </Link>
                  <Link
                    href={"/application-development"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    application development
                  </Link>
                  <Link
                    href={"/process-consulting"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    process consulting
                  </Link>
                  <Link
                    href={"/support-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    support services
                  </Link>
                  <Link
                    href={"/software-testing-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    software testing / quality engineering
                  </Link>
                  <Link
                    href={"/staff-augmentation-services"}
                    className="text-lg text-black capitalize pl-[2rem]"
                    onClick={closeSheet}
                  >
                    staff augmentation services
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">products</p>
                  <p className="capitalize text-black text-lg pl-[2rem]">
                    banking
                  </p>
                  <Link
                    href={"/core-banking-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    core banking system
                  </Link>
                  <Link
                    href={"/loan-software"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    loan software
                  </Link>
                  <Link
                    href={"/remittance-management-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    remittance management system
                  </Link>
                  <Link
                    href={"/internet-banking-system"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    internet banking system
                  </Link>
                  <Link
                    href={"/mobile-banking"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    mobile banking
                  </Link>
                  <p className="capitalize text-black text-lg pl-[2rem]">
                    others
                  </p>
                  <Link
                    href={"/hrms-package"}
                    className="capitalize text-black text-lg pl-[4rem] cursor-pointer"
                    onClick={closeSheet}
                  >
                    HRMS package
                  </Link>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <p className="capitalize text-black text-lg">join us</p>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <Link
                    href={"/contact"}
                    className="capitalize text-black text-lg cursor-pointer"
                    onClick={closeSheet}
                  >
                    contact us
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;

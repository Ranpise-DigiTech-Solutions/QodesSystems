"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type contentType = {
  appMaintenanceServices: boolean;
  supportLevelRole: boolean;
};

const SupportServicesPage = () => {
  const [isContentHidden, setIsContentHidden] = useState<contentType>({
    appMaintenanceServices: false,
    supportLevelRole: false,
  });

  const handleToggleContent = (key: keyof contentType, value: boolean) => {
    setIsContentHidden((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          Support Services
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="img"
          className="w-full lg:w-[35%] h-[275px] object-full"
          quality={100}
          unoptimized
          draggable={false}
          width={0}
          height={0}
        />
        <div className="flex-1 h-full flex flex-col items-start justify-center pt-4 gap-3">
          <p className="text-wrap text-black text-[17px] leading-6">
            Gain rapid access to deep expertise to help optimize performance,
            resolve issues and use new technology more effectively. When your
            software isn’t running optimally, neither are your business
            operations. But getting to the root of a software issue can be a
            challenge, especially in a multivendor environment with multiple
            support agreements and points of contact.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            We offer reasonably priced and dependable post-delivery Application
            Support and Maintenance Services covered under stringent SLA
            practices. Once your application goes live we can help you by
            providing the best application maintenance services so that, you can
            pay attention on building up more business for your application.
            With a dedicated Support & Maintenance team, we have gathered
            extensive experience in the application support and maintenance of
            complex applications.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            QODES Application Support makes sure that your business applications
            are handled and run flawlessly to offer stable and high performance
            platform. Our exhaustive set of frameworks, proven methodologies,
            24/7 support, process compliance and domain expertise help our
            clients achieve:
          </p>
          <ol className="text-base leading-7 list-disc pl-4">
            <li>Faster time-to-market.</li>
            <li>
              Better operational capabilities and decreased price by reducing
              the number and time-span of business-critical application outages.
            </li>
            <li>Best use of refined productivity for strategic initiatives.</li>
          </ol>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-6">
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "appMaintenanceServices",
                      !isContentHidden.appMaintenanceServices
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["appMaintenanceServices"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize">
                    QODES Application Maintenance Services - Highlights
                  </p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["appMaintenanceServices"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <ol className="text-base leading-7 list-disc pl-8">
                      <li>
                        Our key differentiator, continuous measuring of the
                        performance of consultants & developers; this assists us
                        measure their work on a day to day basis. This increases
                        work productivity and decreases bugs in application.
                      </li>
                      <li>Application bug fixes.</li>
                      <li>Ongoing Application Maintenance and Management.</li>
                      <li>Root-cause analysis and trouble shooting.</li>
                      <li>Performance Testing Services.</li>
                      <li>
                        Expert team of highly qualified software developers and
                        testers.
                      </li>
                      <li>Tracking the SLAs norms jointly with customer.</li>
                      <li>24/7 helpdesk support.</li>
                    </ol>
                  </div>
                )}
              </div>
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <div
                  className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                  onClick={() =>
                    handleToggleContent(
                      "supportLevelRole",
                      !isContentHidden.supportLevelRole
                    )
                  }
                >
                  <div className="bg-black text-white">
                    {!isContentHidden["supportLevelRole"] ? (
                      <Plus className="p-1" />
                    ) : (
                      <Minus className="p-1" />
                    )}
                  </div>
                  <p className="text-black capitalize">Support Level Role</p>
                </div>
                <div className="bg-title w-full h-[0.5px] my-2"></div>
                {isContentHidden["supportLevelRole"] && (
                  <div className="py-4 flex flex-col items-start justify-center gap-6">
                    <p className="text-wrap text-black text-[17px] leading-6">
                      We decide upon support levels and response time required,
                      after strenuous consultation with client. Here is a demo
                      example-
                    </p>
                    <ol className="text-base leading-7 list-disc pl-8">
                      <li>
                        Level 1: Issues which require instant attention and
                        response time is immediate to less than 4 hours.
                      </li>
                      <li>
                        Level 2: Issues which should be resolved in 4-24 hours.
                      </li>
                      <li>
                        Level 3: Issues which should be resolved in 24-72 hours.
                      </li>
                      <li>
                        Level 4: Issues which can be resolved within 10 days.
                      </li>
                      <li>
                        We have the ability of delivering the following
                        production support services to customers for the
                        business critical solutions with strict SLAs for
                        response, work around, and resolution of issues.
                      </li>
                      <li>24 hours X 7 Days a week.</li>
                      <li>16 hours X 5 Days a week.</li>
                      <li>08 hours X 5 Days a week.</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportServicesPage;

"use client";

import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const SapCoreBanking = () => {
  const [isContentHidden, setIsContentHidden] = useState(true);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start gap-0">
      <div className="w-full bg-secondary flex items-center justify-start py-4 px-12">
        <p className="text-start capitalize text-2xl text-white">
          SAP Core Banking
        </p>
      </div>
      <div className="w-[90%] h-full flex flex-col lg:flex-row items-stretch justify-center gap-6">
        <Image
          src={
            "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            QODES Systems brings deep expertise in SAP Banking development and
            implementation projects, positioning us as a trusted partner for
            your SAP Banking-based IT transformation initiatives.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            Our Solution Architects excel in conducting detailed solution
            reviews at every phase of the project, addressing potential design
            flaws early—long before the acceptance phase—ensuring the integrity
            and feasibility of deliverables. This proactive approach allows you
            to confidently progress through each project phase, achieving
            measurable and solid results.
          </p>
          <p className="text-wrap text-black text-[17px] leading-6">
            Leverage the content knowledge and extensive experience of our
            experts to eliminate project risks, enhance efficiency, and execute
            your projects on time with precision. Partner with QODES Systems to
            transform your SAP Banking vision into a reliable, scalable, and
            successful reality.
          </p>
          <div className="w-full flex items-center justify-end py-4">
            <div className="relative w-[85%] flex flex-col items-start justify-center gap-2">
              <div
                className="flex flex-row items-center justify-center gap-2 cursor-pointer"
                onClick={() => setIsContentHidden(!isContentHidden)}
              >
                <div className="bg-black text-white">
                  {!isContentHidden ? (
                    <Plus className="p-1" />
                  ) : (
                    <Minus className="p-1" />
                  )}
                </div>
                <p className="text-black capitalize font-bold">what we offer</p>
              </div>
              <div className="bg-title w-full h-[0.5px] my-2"></div>
              {isContentHidden && (
                <div className="py-4 flex flex-col items-start justify-center gap-6">
                  <ol className="text-base leading-7 list-disc pl-8">
                    <li>Requirement Analysis and Product Selection</li>
                    <li>Customer Relationship Management (CRM)</li>
                    <li>Consulting and Project Management Services</li>
                    <li>Business Process Analysis</li>
                    <li>Business Process Reengineering (BPR)</li>
                    <li>Business Gap and Impact Analysis</li>
                    <li>System Design / Redesign</li>
                    <li>Implementation and Roll-out Strategies</li>
                    <li>
                      Quality Assurance Processes for compliance management
                    </li>
                    <li>Independent Verification & Validation (IV&V)</li>
                  </ol>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SapCoreBanking;

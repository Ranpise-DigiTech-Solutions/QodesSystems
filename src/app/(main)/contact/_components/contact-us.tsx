"use client";

import { Button } from "@/components/ui/button";
import React from "react";

const ContactUsComponent = () => {
  return (
    <div className=" relative min-h-screen w-full flex flex-row items-center justify-center gap-0 py-[2rem]">
      <div className="w-[80%] h-full flex flex-row items-center justify-center gap-4 z-10">
        <div className="flex-1 h-full flex flex-col items-start justify-center gap-16">
          <div className="flex flex-col items-start justify-center gap-4">
            <h2 className="text-5xl capitalize text-black text-nowrap">
              contact us
            </h2>
            <p className="text-wrap text-lg text-title ">
              Email, call or complete the form to learn how <br /> Snappy can
              solve your messaging problem.
            </p>
            <p className="text-nowrap text-lg text-title">info@snappy.io</p>
            <p className="text-nowrap text-lg text-title">321-221-231</p>
            <p className="capitalize underline text-black text-base">
              customer support
            </p>
          </div>
          <div className="flex flex-row items-start justify-center gap-6">
            <div className="flex-1 flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-black capitalize text-nowrap">
                Customer Support
              </p>
              <p className="text-wrap text-title text-base leading-6">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-2">
              <p className="text-lg text-black capitalize text-nowrap">
                Feedback and Suggestions
              </p>
              <p className="text-wrap text-title text-base leading-6">
                We value your feedback and are continuously working to improve
                Snappy.
              </p>
            </div>
            {/* <div className='flex-1 flex flex-col items-start justify-center gap-2'>
                        <p className='text-lg text-black capitalize text-nowrap'>Media Inquiries</p>
                        <p className='text-wrap text-title text-base line-clamp-4 leading-7'>
                            For media-related questions or press inquiries, please contact us at media@snappy.com.
                        </p>
                    </div> */}
          </div>
        </div>
        <div className="flex-1 h-full flex items-center justify-center">
          <div className="min-h-[500px] w-full lg:w-[80%] p-8 bg-primary rounded-xl flex flex-col items-start justify-center gap-8 shadow-lg shadow-title">
            <div className="flex flex-col items-start justify-center gap-2">
              <h2 className="text-3xl text-black text-nowrap">Get in Touch</h2>
              <p className="text-title text-nowrap text-lg">
                You can reach us anytime
              </p>
            </div>
            <form
              className="w-full flex flex-col items-center justify-center gap-4"
              onSubmit={() => {}}
            >
              <div className="w-full flex flex-row items-center justify-center gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    title="First Name"
                    placeholder="First name"
                    name="first_name"
                    className="w-full h-full px-4 py-3 rounded-xl border-[1.5px] border-title placeholder:text-title text-black"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    title="First Name"
                    placeholder="First name"
                    name="first_name"
                    className="w-full h-full px-4 py-3 rounded-xl border-[1.5px] border-title placeholder:text-title text-black"
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-center">
                <input
                  type="email"
                  title="Email"
                  placeholder="Email address"
                  name="email"
                  className="w-full h-full px-4 py-3 rounded-xl border-[1.5px] border-title placeholder:text-title text-black"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <input
                  type="phone"
                  title="Phone"
                  placeholder="Phone number"
                  name="phone"
                  className="w-full h-full px-4 py-3 rounded-xl border-[1.5px] border-title placeholder:text-title text-black"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <textarea
                  title="message"
                  placeholder="How can we help ?"
                  name="message"
                  className="w-full min-h-[100px] px-4 py-3 rounded-xl border-[1.5px] border-title placeholder:text-title text-black"
                />
              </div>
              <div className="w-full flex items-center justify-center">
                <Button className="w-full h-full rounded-full bg-secondary text-primary text-lg">
                    Submit
                </Button>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="w-[80%] h-full text-wrap text-center text-sm text-title">
                    By contacting us, you agree to our <span className="text-black">Terms of service</span> and <span className="capitalize text-black">Privacy Policy</span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-[25%] bg-primary-light"></div>
    </div>
  );
};

export default ContactUsComponent;

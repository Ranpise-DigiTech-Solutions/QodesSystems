"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const JoinUsComponent = () => {
  const [fileName, setFileName] = useState(""); // State to store file name

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null; // Get the selected file
    if (file) {
      setFileName(file.name); // Update the state with the file name
    } else {
      setFileName(""); // Clear the state if no file is selected
    }
  };

  return (
    <div className=" relative min-h-screen w-full flex flex-row items-center justify-center gap-0 py-[2rem]">
      <div className="w-[80%] h-full flex flex-row items-center justify-center gap-4 z-10">
        <div className="flex-1 h-full flex flex-col items-start justify-center gap-16">
          <div className="flex flex-col items-start justify-center gap-4">
            <h2 className="text-5xl capitalize text-black text-nowrap">
              Join us
            </h2>
            <p className="text-wrap text-lg text-title ">
              Reach out via email, give us a call, or simply complete the form
              below. <br /> Let’s talk about how Qodes Systems can help you
              achieve your goals and solve your challenges!
            </p>
            <p className="text-nowrap text-lg text-title">
              {" "}
              joinus@qodessystems.com | careers@qodessystems.com
            </p>
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
                    title="Last Name"
                    placeholder="Last name"
                    name="last_name"
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
                  type="text"
                  title="subject"
                  placeholder="Subject"
                  name="subject"
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
                <label
                  htmlFor="file-upload"
                  className="w-full px-4 py-3 rounded-xl border-[1.5px] border-title text-title text-center cursor-pointer bg-gray-100 hover:bg-gray-200 transition duration-300"
                >
                  <span>Upload Your Resume</span>
                  <input
                    id="file-upload"
                    type="file"
                    name="file"
                    className="hidden"
                    onChange={handleFileChange} // Handle file change
                  />
                </label>
                {/* Display the file name if a file is selected */}
                {fileName && (
                  <div className="mt-2 text-center text-black">
                    <p>
                      Selected file: <strong>{fileName}</strong>
                    </p>
                  </div>
                )}
              </div>
              <div className="w-full flex items-center justify-center">
                <Button className="w-full h-full rounded-full bg-secondary text-primary text-lg">
                  Submit
                </Button>
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="w-[80%] h-full text-wrap text-center text-sm text-title">
                  By contacting us, you agree to our{" "}
                  <span className="text-black">Terms of service</span> and{" "}
                  <span className="capitalize text-black">Privacy Policy</span>
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

export default JoinUsComponent;

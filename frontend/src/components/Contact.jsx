import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessKey = import.meta.env.VITE_ACCESS_KEY;

  const onSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message Submitted Successfully!");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong");
      }
    } catch (error) {
      setResult("Unable to send the message. Please try again later.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Contact Me
          </h2>
          <p className="mt-2 mb-20 text-lg/8 text-gray-600">Get in touch</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h4 className="text-xl font-semibold mb-12">Talk to me</h4>
            <div className="p-6 bg-[#fcfaff] rounded-lg shadow-md max-w-sm mx-auto ">
              <div className="flex flex-col items-center text-center">
                <i className="bi bi-envelope text-2xl h-6 w-6 text-blue-600 mb-2"></i>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-blue-600 hover:text-purple-900">
                    user@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 bg-[#fcfaff] rounded-lg shadow-md max-w-sm mx-auto">
              <div className="flex flex-col items-center text-center">
                <i className="bi bi-whatsapp text-2xl w-6 h-6 text-green-600 mb-2"></i>
                <div>
                  <h3 className="font-medium">Whatsapp</h3>
                  <p className="text-blue-600 hover:text-purple-700">
                    999-888-777
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Write me your project</h4>
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-12 max-w-xl sm:mt-16"
            >
              <div className="mt-3.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Insert your name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
              <div className="mt-3.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Insert your email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
              <div className="mt-3.5">
                <textarea
                  id="project-message"
                  name="project-message"
                  placeholder="Write your project"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  required
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex items-center justify-center w-full text-sm font-semibold  shadow-sm bg-indigo-600 bg-gradient-to-l from-black to-blue-400 text-white left-0 px-6 py-3 rounded-lg hover:from-blue-400 hover:to-indigo-300 transition-colors`}
                >
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <span className="flex mt-3 items-center justify-center text-green-500">
              {result}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

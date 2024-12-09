import React from "react";
import { Helmet } from "react-helmet-async";
import Container from "./Container";

function Contact() {
  return (
    <div className="p-6 bg-gray">
      <Container>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <Helmet>
            <title>GadgetHeaven | Contact Us</title>
          </Helmet>
          <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg">
            <h1 className="mb-6 text-3xl font-bold text-center text-secondary">
              Contact Us
            </h1>
            <p className="mb-8 text-center text-secondary">
              We'd love to hear from you! Fill out the form below to get in
              touch.
            </p>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-secondary">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-secondary">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-2 font-medium text-secondary">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 font-semibold text-white rounded-md bg-primary hover:bg-opacity-90"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;

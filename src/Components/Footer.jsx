import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Container>
        <footer className="py-8 mt-8 bg-white md:mt-8">
          <div className="container px-4 mx-auto">
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-800">
                <Link to="/">Gadget Heaven</Link>
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Leading the way in cutting-edge technology and innovation.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 pt-8 mt-8 text-center border border-solid md:grid-cols-3 md:text-left border-primary/10">
              {/* Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Services
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Product Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Order Tracking
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Shipping & Delivery
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Returns
                    </a>
                  </li>
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              {/* Legal */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-gray-900">
                      Cookie Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Articles", href: "*", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const updateCurrentState = (href) => location.pathname === href;

  return (
    <>
      <nav className="bg-white sticky top-0 shadow-md w-full transition-all duration-300">
        <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex justify-between h-20 items-center">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-blue-500 hover:text-white transition duration-300"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <i className="bi bi-x-lg h-8 w-8 text-2xl"></i>
                ) : (
                  <i className="bi bi-list h-8 w-8 text-3xl"></i>
                )}
              </button>
            </div>

            {/* Logo */}
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center text-2xl font-extrabold bg-gradient-to-b from-blue-100 to-black bg-clip-text text-transparent">
                <a href="/">
                  Saini<span className="h-8 w-auto text-blue-500">.</span>
                </a>
              </div>

              {/* Desktop Menu */}
              <div className="hidden sm:block ml-6">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        updateCurrentState(item.href)
                          ? "bg-blue-500 text-white"
                          : "text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* User Profile Menu */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <button
                  className="relative flex rounded-lg bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition duration-300"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                    className="h-8 w-8 rounded-lg"
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 rounded-lg"
                      >
                        My Profile
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden px-2 pb-3 w-full"
            >
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    updateCurrentState(item.href)
                      ? "bg-blue-500 text-white"
                      : "text-gray-900 hover:bg-blue-500 hover:text-white transition duration-300",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;

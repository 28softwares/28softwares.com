import { motion } from "framer-motion";
import { ThemeContext } from "@/hooks/ThemeContext";
import { useContext } from "react";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative flex h-8 w-full flex-row pt-10 text-sm">
      <div className="flex-start absolute left-2 mx-auto self-end">
        <Link to="/">
          <svg
            id="code-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 dark:text-green-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
            />
          </svg>
        </Link>
      </div>
      <div className="absolute end-10 mx-auto self-end">
        <ul className="flex-row space-x-5 md:flex md:space-x-20">
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Link
              className="font-ubuntu font-semibold lowercase text-black dark:text-white"
              to={"/projects"}
            >
              projects
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Link
              className="font-ubuntu font-semibold lowercase text-black dark:text-white"
              href={"/#"}
            >
              services
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.8,
            }}
          >
            <Link
              className="font-ubuntu font-semibold lowercase text-black dark:text-white"
              href={"/#"}
            >
              contact
            </Link>
          </motion.button>
          <button onClick={toggleTheme} className="top-2 md:right-2 md:top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-black dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </button>
        </ul>
      </div>
    </div>
  );
};

import { motion } from "framer-motion";
import { ThemeContext } from "@/hooks/ThemeContext";
import { useContext } from "react";
import { Link } from "@tanstack/react-router";

export const Navbar = () => {
  const { toggleTheme, dark } = useContext(ThemeContext);

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
            className="size-6 text-green-600"
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
            key={"projects"}
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
            key={"projects"}
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
            key={"projects"}
          >
            <Link
              className="font-ubuntu font-semibold lowercase text-black dark:text-white"
              href={"/#"}
            >
              contact
            </Link>
          </motion.button>
          <button onClick={toggleTheme} className="top-2 md:right-2 md:top-0">
            {dark ? (
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
            ) : (
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
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
        </ul>
      </div>
    </div>
  );
};

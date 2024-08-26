export const Footer = () => {
    return (
        <div className="h-full px-2 dark:text-white">
            <div className=" flex flex-col md:flex-row lg:flex-row gap-y-10">
                <div className="m-2 basis-1/2 p-3 space-y-12">
                    <h1 className=" text-center font-ubuntu text-7xl underline uppercase">
                        Contact Us
                    </h1>
                    <div className="flex flex-col text-center font-ubuntu  space-y-4 text-3xl">
                        <h2>
                            <strong>Lokanthali, Bhaktapur</strong>
                        </h2>
                        <div className="flex flex-row space-x-2 self-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                                />
                            </svg>
                            <a href="">
                                <strong>Bhaktapur,Nepal</strong>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="m-2 basis-1/2 p-3">
                    <div className="flex flex-col text-center align-middle font-playfair space-y-10">
                        <div className="font-ubuntu text-7xl underline underline-offset-8 uppercase ">
                            Follow Us
                        </div>
                        <div className="self-center">
                        <div className="flex flex-row space-x-2 self-center text-3xl ">
                            <a href="https://www.linkedin.com/company/28softwares">
                                <strong>Linkedin</strong>
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                />
                            </svg>
                        </div>
                        <div className="flex flex-row space-x-2 self-center text-3xl">
                            <a href="https://twitter.com/28softwares">
                                <strong>Twitter</strong>
                            </a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-12"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                                />
                            </svg>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-2  text-center font-ubuntu my-12">
                        <h5 className="text-center text-lg">
                            For any questions please e-mail
                            <strong className="pl-2 underline text-blue-600">
                             28softwaresnp@gmail.com 
                            </strong>
                        </h5>
                    </div>
            <div className="text-center font-ubuntu pb-10">
                Copyright © 2024 | 28Softwares
            </div>
        </div>
    )
}
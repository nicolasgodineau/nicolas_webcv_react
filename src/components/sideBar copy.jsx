import React from "react";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

import Nicolas from "../images/Nicolas.webp";

export default function () {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <aside className="fixed flex flex-col items-center gap-0 left-6 top-[50%] max-w-sm p-8 border border-white/40 rounded-3xl">
                <div className="flex justify-between w-full">
                    <h2 className="text-4xl text-white">Nicolas</h2>
                    <ul className="text-white">
                        <li>Web Developer</li>
                        <li>& Photographer</li>
                    </ul>
                </div>
                <img
                    className="max-w- max-h-60 rounded-3xl object-cover m-11"
                    src={Nicolas}
                    alt=""
                />
                <a
                    className="text-2xl text-white"
                    href="mailto:hello@nicolasgodineau.com"
                >
                    hello@nicolasgodineau.com
                </a>
                <h2 className="text-2xl text-white mb-8">
                    Base in Montreal, Canada
                </h2>
                <p className="mb-7">
                    ©{currentYear} Nicolas.All right reserved
                </p>
                <ul className="flex justify-evenly w-full mb-8">
                    <li className="h-12 w-12 flex items-center justify-center ">
                        <Tooltip title="Instagram">
                            <a href="">
                                <FontAwesomeIcon
                                    className="p-3 border-2 border-white/40 rounded-full hover:border-2 hover:border-blueCallToAction   hover:text-blueCallToAction"
                                    icon={faInstagram}
                                />
                            </a>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Github">
                            <a c href="">
                                <FontAwesomeIcon
                                    className="p-3 border-2 border-white/40 rounded-full hover:border-2 hover:border-blueCallToAction   hover:text-blueCallToAction"
                                    icon={faGithub}
                                />
                            </a>
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title="Web site">
                            <a href="">
                                <FontAwesomeIcon
                                    className="p-3 border-2 border-white/40 rounded-full hover:border-2 hover:border-blueCallToAction   hover:text-blueCallToAction"
                                    icon={faGlobe}
                                />
                            </a>
                        </Tooltip>
                    </li>
                </ul>
                <a
                    className="flex items-center justify-center gap-2 bg-blueCallToAction w-full rounded-3xl py-3 px-11 text-center border-2 border-transparent text-black hover:bg-transparent hover:border-2 hover:border-blueCallToAction   hover:text-blueCallToAction"
                    href=""
                >
                    <FontAwesomeIcon
                        className="h-6 w-6 fill-white"
                        icon={faEnvelope}
                    />
                    {" HIRE ME !"}
                </a>
            </aside>
        </>
    );
}

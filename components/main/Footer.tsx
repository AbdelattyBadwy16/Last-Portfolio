import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

function Footer() {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">

                    <div className="min-w-[200px] h-auto flex flex-col items-center z-[1000] justify-start">
                        <div className="font-bold text-[16px] ">Community</div>

                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <img src="/codeforces.png" width={15} height={15} />
                            <a href="https://codeforces.com/profile/Glitch00" target="_blank" className="text-[15px]  ml-[6px]">CodeForces</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <img src="leetcode.png" width={15} height={15} />
                            <a href="https://leetcode.com/Glitch00/" target="_blank" className="text-[15px] ml-[6px]">LeetCode</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo></RxGithubLogo>
                            <a href="https://github.com/AbdelattyBadwy16" target="_blank" className="text-[15px]  ml-[6px]">Github</a>
                        </p>

                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col z-[1000] items-center justify-start">
                        <div className="font-bold text-[16px] ">Social Media</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <img src="/facebook.svg" width={15} height={15} />
                            <a href="https://www.facebook.com/abdelatty.badwy.3/" target="_blank" className="text-[15px]  ml-[6px]">Facebook</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo></RxLinkedinLogo>
                            <a href="https://www.linkedin.com/in/abdelatty-badwy-13b927247/" target="_blank" className="text-[15px]  ml-[6px]">LinkedIn</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo></RxInstagramLogo>
                            <span className="text-[15px]  ml-[6px]">Instagram</span>
                        </p>
                    </div>

                    <div className="min-w-[200px] h-auto flex z-[1000] flex-col items-center justify-start">
                        <div className="font-bold text-[16px] ">About</div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <a href="mailto:abdelattybadwy166@gmail.com" className="text-[15px]  ml-[6px]">Contact Me</a>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px]  ml-[6px]">+201101988596</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px]">
                            <span className="text-[15px] ml-[6px]">abdelattybadwy166@gmail.com</span>
                        </p>
                    </div>

                </div>

                <div className="mb-[20px] text-[15px] text-center">
                    &copy; Abdelatty Badwy 2023 Ink. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
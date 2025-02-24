"use client"
import React from 'react';
import Link from "next/link";
import {useTranslations} from "next-intl";
import {usePathname} from "next/navigation";

function MainPage() {

    const pathname = usePathname();

    const t = useTranslations("HomePage");

    return (
        <div className="w-full">
            <nav className="w-full py-5 flex items-center bg-[#15203b] px-[200px]">
                <ul className="flex items-center">
                    <Link href="/" className="text-gray-400 mx-4 hover:text-[#fff]">Home</Link>
                    <Link href={`/${pathname.split("/")[1]}/about`} className="text-gray-400 mx-4 hover:text-[#fff]">About</Link>
                </ul>
            </nav>
            <section>
                <h1 className="text-lg">
                    Next-js (Internationalization)
                </h1>
                <p>
                    this website is created by practicing next-intl
                </p>
                <p>
                    {
                        t("about")
                    }
                </p>
            </section>
            {/*<button*/}
            {/*    className="py-2 px-4 border border-black rounded-md transition duration-300 hover:bg-black hover:text-white">*/}
            {/*    click on it*/}
            {/*</button>*/}
        </div>
    );
}

export default MainPage;
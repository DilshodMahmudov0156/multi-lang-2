import React from 'react';
import {useTranslations} from "next-intl";
import Link from "next/link";
import {DropdownMenuRadioGroupDemo} from "../../components/myDropdown";

function MainPage() {
    const n = useTranslations("navbar");
    const h = useTranslations("HomePage");
    return (
        <div className="w-full">
            <nav className="w-full px-5 flex justify-between items-center bg-gray-30 shadow-sm ">
                <div className="logo font-bold text-[25px]">Logo</div>
                <LanguageSwitcher/>
                <ul className="flex items-center">
                    <DropdownMenuRadioGroupDemo/>
                    <Link href="/" className="hover:text-gray-300 transition duration-200 hover:bg-[#030712] block py-3 px-4">{n("home")}</Link>
                    <Link href="/about" className="hover:text-gray-300 transition duration-200 hover:bg-[#030712] block py-3 px-4">{n("about")}</Link>
                    <Link href="/projects" className="hover:text-gray-300 transition duration-200 hover:bg-[#030712] block py-3 px-4">{n("projects")}</Link>
                    <Link href="/contact" className="hover:text-gray-300 transition duration-200 hover:bg-[#030712] block py-3 px-4">{n("contact")}</Link>
                </ul>
            </nav>
            <header className="p-5">
                <h1 className="text-[40px] font-bold text-blue-600 text-center mt-5">
                    UZB, ENG, RUS project with
                    <br/>
                    'next-Intl' and 'tailwindcss'
                </h1>
            </header>
            <section>
                <div
                    className="
                    card border shadow-xl
                    rounded-md w-[300px]
                    m-auto mt-5 p-4"
                >
                    <h1 className="text-[20px] text-center mb-2 text-green-500">
                        {h("title")}
                    </h1>
                    <p className="text-red-500 block">
                        {h("about")}
                    </p>
                </div>

            </section>

        </div>
    );
}

export default MainPage;

export  const LanguageSwitcher = () => {
    return(
        <div className="flex items-center space-x-3">
            <Link href={"/uz"}>Uzb</Link>
            <Link href={"/ru"}>Rus</Link>
            <Link href={"/en"}>Eng</Link>
        </div>
    )
}
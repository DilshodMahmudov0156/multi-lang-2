import React from "react";
import "../globals.css";
import { routing } from "@/i18n/routing";
import { redirect } from "next/navigation";

export default async function LocaleLayout({
                                               children,
                                               params,
                                           }: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {

    const { locale } = await params;

    if (!routing.locales.includes(locale as any)) {
        redirect(routing.defaultLocale);
    }

    return (
        <html lang={locale} suppressHydrationWarning className="hydrate">
        <body className="bg-[#0d172b] text-gray-300">
        {children}
        </body>
        </html>
    );
}
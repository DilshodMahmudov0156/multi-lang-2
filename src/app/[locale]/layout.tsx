import React, { ReactNode } from "react";
import "../globals.css";
import { routing } from "../../i18n/routing";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import {getMessages} from 'next-intl/server';

type Props = {
    children: ReactNode;
    params: {locale: string}
}

export default async function LocaleLayout({children, params: {locale}}: Props)  {

    if (!routing.locales.includes(locale as any)){
        notFound();
    }
    const messages = await getMessages();

    return (
        <html lang={locale}>

        <body className="bg-[#0d172b] text-gray-300">
        <NextIntlClientProvider messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
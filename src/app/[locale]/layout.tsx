import React from "react";
import "../globals.css";

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="hydrate">
      <body>
        {children}
      </body>
    </html>
  );
}
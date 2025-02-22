import React from 'react';

function RootLayout({children}: Readonly<React.ReactNode>) {
    return (
        <>
            {children}
        </>
    );
}

export default RootLayout;
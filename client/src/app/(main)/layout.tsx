import { Footer } from '@/components/layout/Footer';
import NavbarMain from '@/components/layout/NavbarMain';
import { childrenProps } from '@/types';
import React from 'react';

const MainLayout = ({ children }: childrenProps) => {
    
    return (
        <body className="min-h-full flex flex-col">
            <NavbarMain />
                {children}
            <Footer />
        </body>
    );
};

export default MainLayout;
import { auth } from '@/lib/auth';
import { Navbar } from './Navbar';
import { headers } from 'next/headers';

const NavbarMain = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    return (
        <>
         <Navbar session={session} />   
        </>
    );
};

export default NavbarMain;
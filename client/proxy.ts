import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export async function proxy(request: NextRequest) {
    const session = await auth?.api?.getSession({
        headers: await headers(),
    });



    if(!session ){
        return NextResponse.redirect(new URL('/', request.url))
    }
}
 
export const config = {
  matcher: '/((?!portfolio|projects).*)',
}
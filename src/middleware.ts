import { NextResponse, NextRequest } from 'next/server'

const ROOT_DOMAIN = 'fable-lab.org'
const TENANTS = new Set(['labslang'])

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  const hostname = (req.headers.get('host') ?? '').split(':')[0]

  let subdomain: string | null = null
  if (hostname.endsWith(`.${ROOT_DOMAIN}`)) {
    subdomain = hostname.slice(0, -(ROOT_DOMAIN.length + 1))
  } else if (hostname.endsWith('.localhost')) {
    subdomain = hostname.slice(0, -('localhost'.length + 1))
  }

  if (!subdomain || subdomain === 'www' || !TENANTS.has(subdomain)) {
    return NextResponse.next()
  }

  if (url.pathname.startsWith(`/${subdomain}`)) {
    return NextResponse.next()
  }

  url.pathname = `/${subdomain}${url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    '/((?!admin|api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
}

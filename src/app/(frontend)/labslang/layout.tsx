import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import Banner from '@/components/Banner/Banner'
import Link from 'next/link'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Link href="/labslang">
        <Banner title={'Labs&Lang'} color="prune" />
      </Link>
      { children }
    </>
  )
}

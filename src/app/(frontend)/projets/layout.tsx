import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

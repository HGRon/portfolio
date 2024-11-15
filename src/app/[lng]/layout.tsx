import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div
      id="homeScroller"
      className="scroll overflow-auto overflow-x-hidden home-scroller h-screen w-screen"
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}

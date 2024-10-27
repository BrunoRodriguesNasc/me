import Navbar from "../components/navbar";

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <section>
    <Navbar></Navbar>
    {children}
  </section>
  )};
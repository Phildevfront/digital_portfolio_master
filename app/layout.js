import Nav from "@/components/nav/Nav"
import './global.css'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        </body>
    </html>
  )
}

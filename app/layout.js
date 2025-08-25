// app/layout.jsx
import './globals.css'; //
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='min-h-screen'>
        <Navbar />  {/* Global Navbar */}
        <main>{children}</main>  {/* Page-specific content */}
        <Footer />  {/* Global Footer */}
      </body>
    </html>
  );
}

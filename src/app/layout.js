import { Manrope, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/sections/Navbar";
import Footer from "@/component/sections/Footer";

export const space_mono = Space_Mono({
  weight:["400","700"]
});
export const manrope = Manrope({
  weight:["200","300","400","500","600","700","800"]
})


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
      suppressHydrationWarning 
      suppressContentEditableWarning
    >
      <body className="min-h-full flex flex-col relative overflow-x-hidden" suppressHydrationWarning>
        <Navbar suppressHydrationWarning/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

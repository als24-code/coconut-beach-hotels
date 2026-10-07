import {
  Inter,
  Plus_Jakarta_Sans,
  Poppins,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { footer } from "@/data/footer";
import { navbar_data } from "@/data/navbar";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export const metadata = {
  title: "Beach Hotels.",
  description: "🥥 Coconut Beach Hotels.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jakarta.variable} ${montserrat.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col">
          <Navbar navbar_data={navbar_data}/>
          {children}
          <Footer data={footer}/>
        </div>
      </body>
    </html>
  );
}

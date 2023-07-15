import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import Footer from "@/components/Footer";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300","400","700"]
});

export const metadata: Metadata = {
  title: { template: "Moni | %s", default: "Moni" },
  description: "La primer App de intercambio de monedas de Nicaragua",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={roboto_Condensed.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

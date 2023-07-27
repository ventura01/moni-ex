import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
// import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/Footer";

const roboto_Condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: { template: "Moni | %s", default: "Moni" },
  description:
    "La plataforma confiable para intercambiar monedas de manera rápida, segura y eficiente.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <ClerkProvider>
      <html lang="es">
        <body className={roboto_Condensed.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    // </ClerkProvider>
  );
}

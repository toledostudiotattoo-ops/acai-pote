import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Açaí no Pote",
  description: "A melhor loja de açaí da região",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
      >
        <header className="bg-purple-900 text-white p-4">
          <div className="max-w-6xl mx-auto flex gap-6">
            <a href="/">Início</a>
            <a href="/catalogo">Catálogo</a>
            <a href="/checkout">Checkout</a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="bg-purple-900 text-white text-center p-6 mt-10">
          <h3 className="font-bold text-lg">
            Açaí no Pote
          </h3>

          <p>WhatsApp: (31) 97126-7579</p>

          <p>🚚 Entrega Grátis</p>
        </footer>

       <a
  href="https://wa.me/5531971267579"
  className="fixed ..."
>
  WhatsApp

        </a>
      </body>
    </html>
  );
}
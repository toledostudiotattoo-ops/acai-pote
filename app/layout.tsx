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
  metadataBase: new URL("https://acai-pote-ulx1.vercel.app"),

  title: "Açaí no Pote",
  description: "A melhor loja de açaí da região",

  openGraph: {
    title: "Açaí no Pote",
    description: "A melhor loja de açaí da região",
    url: "https://acai-pote-ulx1.vercel.app",
    siteName: "Açaí no Pote",
    images: [
      {
        url: "https://acai-pote-ulx1.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Açaí no Pote",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Açaí no Pote",
    description: "A melhor loja de açaí da região",
    images: ["https://acai-pote-ulx1.vercel.app/logo.png"],
  },
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
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg font-bold z-50"
        >
          WhatsApp
        </a>
      </body>
    </html>
  );
}
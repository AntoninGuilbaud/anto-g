import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio | Antonin Guilbaud",
  description: "Découvrir mon profil !",
  icons:
  {
    icon: "/favicon.ico",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta property="og:image" content="https://ogcdn.net/a6271b04-8ace-45ad-a7ef-0f945adfef8c/v1/anto-g.vercel.app/Antonin%20Guilbaud/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fimages%2F48bb9b65-b257-40d4-8ac0-9966895e70e7.jpg%3Ftoken%3Dr87pJAKCeZ6jEkT6P-qelUZ5JibLEorLxbq8rmZrWE8%26height%3D642%26width%3D642%26expires%3D33269263530/og.png
" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

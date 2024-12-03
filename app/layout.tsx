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
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Portfolio | Antonin Guilbaud",
    description: "Découvrir mon profil !",
    url: "https://anto-g.vercel.app/",
    images: [
      {
        url: "/preview-image.png", // Lien vers ton image PNG
        width: 1200,
        height: 630,
        alt: "Preview de mon portfolio", // Description de l'image
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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

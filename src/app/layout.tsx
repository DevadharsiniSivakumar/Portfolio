import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";
import { ReadingProgress } from "@/components/ReadingProgress";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Devadharsini Sivakumar | AI & Robotics Engineer",
  description: "Personal portfolio website of Devadharsini Sivakumar - AI Engineer, Robotics Enthusiast, Full Stack Developer, and Competitive Programmer.",
  metadataBase: new URL("https://devadharsini-sivakumar.dev"),
  openGraph: {
    title: "Devadharsini Sivakumar | AI & Robotics Engineer",
    description: "Personal portfolio website of Devadharsini Sivakumar - AI Engineer, Robotics Enthusiast, Full Stack Developer, and Competitive Programmer.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Devadharsini Sivakumar",
              "url": "https://devadharsini-sivakumar.dev",
              "jobTitle": "AI & Robotics Engineer",
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "PSG College of Technology"
              },
              "sameAs": [
                "https://github.com/devadharsini-s",
                "https://linkedin.com/in/devadharsini-sivakumar",
                "https://leetcode.com/u/devadharsini-s"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-full flex flex-col noise-bg transition-colors duration-300">
        <ThemeProvider>
          <ReadingProgress />
          <Header />
          <CustomCursor />
          <main className="flex-grow">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

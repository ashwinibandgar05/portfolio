import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ashwini Bandgar | Embedded Systems Engineer",
  description:
    "Portfolio of Ashwini Bandgar - Electronics & Telecommunication engineering student specializing in embedded systems, Arduino, and IoT solutions.",
  keywords: ["Embedded Systems", "Arduino", "Electronics Engineer", "IoT", "Microcontroller", "Ashwini Bandgar"],
  authors: [{ name: "Ashwini Bandgar" }],
  creator: "Ashwini Bandgar",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Ashwini Bandgar | Embedded Systems Engineer",
    description: "Portfolio showcasing embedded systems projects, Arduino applications, and IoT solutions.",
    siteName: "Ashwini Bandgar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashwini Bandgar | Embedded Systems Engineer",
    description: "Portfolio showcasing embedded systems projects, Arduino applications, and IoT solutions.",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

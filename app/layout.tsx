import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Andreh Malheiros - Desenvolvedor Front-end | Landing Pages Profissionais",
  description:
    "Desenvolvedor front-end especializado em landing pages modernas, responsivas e com foco em conversão. Entrego projetos completos em até 3 dias.",
  keywords: "desenvolvedor front-end, landing pages, React, Tailwind CSS, HTML, CSS, JavaScript",
  authors: [{ name: "Andreh Malheiros" }],
  openGraph: {
    title: "Andreh Malheiros - Landing Pages Profissionais",
    description: "Landing pages com design profissional, velocidade e foco em conversão",
    type: "website",
    locale: "pt_BR",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

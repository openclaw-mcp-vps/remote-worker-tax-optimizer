import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NomadTax — Minimize Taxes for Digital Nomads Automatically',
  description: 'Track your location, calculate tax obligations across jurisdictions, and get optimal travel timing suggestions for maximum tax efficiency.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="88d1bc3f-f8b0-4718-a299-3f6372eef353"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}

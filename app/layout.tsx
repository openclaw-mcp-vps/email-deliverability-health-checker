import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Email Deliverability Health Checker',
  description: 'Check email deliverability and reputation health. Test SPF, DKIM, DMARC records, domain blacklists, and get actionable fix recommendations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0475bebd-4819-4905-a787-65f090e3e174"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}

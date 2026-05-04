export default function Home() {
  const faqs = [
    {
      q: 'What does the health checker test?',
      a: 'It checks your SPF, DKIM, and DMARC DNS records, scans your domain against major blacklists, and simulates email delivery to Gmail, Outlook, and Yahoo to surface real inbox placement issues.'
    },
    {
      q: 'Do I need technical knowledge to use it?',
      a: 'No. Enter your domain and sending email address — we handle the rest and give you plain-English recommendations you can hand to your developer or follow yourself.'
    },
    {
      q: 'How often can I run checks?',
      a: 'Subscribers get unlimited checks and continuous monitoring with email alerts when your deliverability score drops below a safe threshold.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Email Deliverability
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Is Your Email Landing in the Inbox or the Spam Folder?
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly check SPF, DKIM, DMARC, blacklist status, and inbox placement across Gmail, Outlook, and Yahoo. Get a prioritized fix list in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors"
        >
          Start Checking — $14/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* Feature pills */}
      <section className="flex flex-wrap justify-center gap-3 mb-20">
        {['SPF Record Check', 'DKIM Validation', 'DMARC Analysis', 'Blacklist Scan', 'Inbox Placement Test', 'Fix Recommendations'].map((f) => (
          <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$14</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited deliverability checks',
              'SPF, DKIM & DMARC analysis',
              'Blacklist monitoring (50+ lists)',
              'Inbox placement tests (Gmail, Outlook, Yahoo)',
              'Actionable fix recommendations',
              'Email alerts on score drops',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5 shrink-0">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Email Deliverability Health Checker. All rights reserved.
      </footer>
    </main>
  )
}

import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Samuel Mensah",
  description: "Privacy policy for Samuel Mensah's portfolio and services, governed by the laws of the Republic of Ghana.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-primary/30 max-w-12" />
          <span className="text-sm font-mono text-primary tracking-widest uppercase">Legal</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground mb-12">
          Last updated: February 28, 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              {`This Privacy Policy explains how Samuel Mensah ("I", "me", "my") collects, uses,
              and protects personal information when you use my portfolio website and services.
              This policy is governed by the Data Protection Act, 2012 (Act 843) of the Republic
              of Ghana and the Ghana Data Protection Commission's guidelines.`}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">2. Information I Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">I may collect the following information:</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Visitor Identification:</strong> A randomly generated unique visitor code stored locally on your device to enhance your browsing experience. No personal data is linked to this code.</li>
              <li><strong className="text-foreground">Booking Information:</strong> When you submit a service request, I collect your name, email address, service preference, currency choice, budget range, and project description.</li>
              <li><strong className="text-foreground">Reviews:</strong> When you leave a review, I collect your name, rating, and review text.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Anonymous analytics data including page views and device type through Vercel Analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">3. How I Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>To respond to your service booking requests</li>
              <li>To communicate with you regarding projects and services</li>
              <li>To display reviews on the website</li>
              <li>To improve the website and user experience</li>
              <li>To comply with legal obligations under Ghanaian law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">4. Data Protection Rights (Under Ghana Act 843)</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Under the Data Protection Act of Ghana, you have the following rights:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Right of Access:</strong> You may request access to your personal data held by me.</li>
              <li><strong className="text-foreground">Right to Rectification:</strong> You may request correction of inaccurate personal data.</li>
              <li><strong className="text-foreground">Right to Erasure:</strong> You may request deletion of your personal data.</li>
              <li><strong className="text-foreground">Right to Object:</strong> You may object to the processing of your personal data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              I implement appropriate technical and organizational measures to protect your personal
              data against unauthorized access, alteration, disclosure, or destruction. All data
              transmissions are encrypted using industry-standard SSL/TLS protocols.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">6. Cookies & Local Storage</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses local storage to store a unique visitor code for identification
              purposes only. No tracking cookies are used for advertising. Vercel Analytics may
              use anonymous, privacy-focused analytics that do not track individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">7. International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              As I accept clients from multiple countries and currencies (USD, EUR, GHS), your
              data may be processed outside of Ghana. In such cases, I ensure appropriate
              safeguards are in place as required by the Data Protection Act, 2012 (Act 843).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">8. Payment Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              I accept payments in US Dollars (USD), Euros (EUR), and Ghanaian Cedis (GHS).
              Payment processing is handled through secure third-party payment providers. I do
              not store credit card details or financial information on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">9. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website uses Vercel for hosting and analytics. Their respective privacy
              policies apply to data processed through their services. I do not sell or share
              your personal data with any third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              I may update this Privacy Policy from time to time. Changes will be posted on
              this page with an updated revision date. Continued use of this website constitutes
              acceptance of the modified policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">11. Contact & Complaints</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              For any questions or concerns regarding this Privacy Policy or to exercise your
              data protection rights, please contact:
            </p>
            <div className="rounded-xl border border-border bg-card p-6 space-y-2">
              <p className="text-foreground font-medium">Samuel Mensah</p>
              <p className="text-muted-foreground text-sm">Email: alphariansamuel@gmail.com</p>
              <p className="text-muted-foreground text-sm">Location: Ghana</p>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may also file a complaint with the Ghana Data Protection Commission at{" "}
              <a href="https://www.dataprotection.org.gh" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.dataprotection.org.gh
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-foreground mb-3">12. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy is governed by and construed in accordance with the laws of
              the Republic of Ghana, including the Data Protection Act, 2012 (Act 843). Any
              disputes arising from this policy shall be subject to the exclusive jurisdiction
              of the courts of Ghana.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}

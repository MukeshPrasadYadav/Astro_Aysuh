export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16 xl:py-20">

        {/* Page Header */}
        <header className="mb-10 border-b border-border pb-8 sm:mb-12 sm:pb-10">
          <h1 className="text-section font-bold">
            Terms and Conditions
          </h1>

          <div className="mt-5 space-y-1 text-label text-text-secondary">
            <p>
              <span className="font-medium text-text">Website:</span>{" "}
              lifesiddhi.com
            </p>

            <p>
              <span className="font-medium text-text">Brand Name:</span>{" "}
              Astro Ayush
            </p>

            <p>
              <span className="font-medium text-text">Last Updated:</span>{" "}
              27/08/2026
            </p>
          </div>

          <p className="text-body mt-6 max-w-4xl text-text-secondary">
            By accessing this website, creating an account, purchasing a
            digital product or booking a consultation, you agree to these
            Terms and Conditions.
          </p>
        </header>

        {/* Terms Content */}
        <article className="space-y-10 sm:space-y-12">

          {/* Our Products and Services */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Our Products and Services
            </h2>

            <p className="text-body mb-4">
              Astro Ayush provides astrology-related:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>E-books and downloadable PDFs</li>
              <li>
                Lal Kitab and remedy-related educational content
              </li>
              <li>Astrology consultations</li>
              <li>Personalised guidance and remedies</li>
              <li>Other digital astrology content</li>
            </ul>

            <p className="text-body mt-4">
              The exact description, price and inclusions of each product
              or service will be displayed before payment.
            </p>
          </section>

          {/* Account Creation */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Account Creation
            </h2>

            <p className="text-body mb-4">
              To purchase a digital product, you must provide your correct
              name and mobile number. Your mobile number will serve as the
              primary account identifier. If no account exists with that
              number, one will automatically be created. If an account
              already exists, the purchase may be linked to that account.
            </p>

            <p className="text-body mb-4">
              You are responsible for:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>Providing an active and accurate mobile number</li>
              <li>
                Maintaining control over your mobile number and account
                access
              </li>
              <li>Not allowing another person to misuse your account</li>
              <li>
                Informing us promptly if you suspect unauthorised access
              </li>
            </ul>

            <p className="text-body mt-4">
              We will not be responsible for access problems caused by an
              incorrect, inactive or unauthorised mobile number provided
              by the user.
            </p>
          </section>

          {/* Payments */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Payments
            </h2>

            <p className="text-body mb-4">
              Payments are processed through an independent third-party
              payment gateway. Available payment methods may include UPI,
              cards, net banking or other methods shown at checkout.
            </p>

            <p className="text-body mb-4">
              An order is confirmed only after the payment gateway reports
              a successful transaction. We do not directly store complete
              card, UPI or banking credentials.
            </p>

            <p className="text-body">
              Prices and applicable taxes, if any, will be displayed
              before payment. We may revise prices for future purchases
              without affecting completed orders.
            </p>
          </section>

          {/* Digital Product Delivery */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Digital Product Delivery
            </h2>

            <p className="text-body mb-4">
              After successful payment confirmation, the purchased PDF
              will be unlocked for download through the user&apos;s account
              or order confirmation page.
            </p>

            <p className="text-body mb-4">
              Access may be delayed if:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>The payment is pending</li>
              <li>
                The payment gateway has not confirmed the transaction
              </li>
              <li>The mobile number provided is incorrect</li>
              <li>
                A temporary technical issue affects the website
              </li>
            </ul>

            <p className="text-body mt-4">
              Digital products are licensed for the buyer&apos;s personal
              use only.
            </p>
          </section>

          {/* Consultations */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Consultations
            </h2>

            <p className="text-body mb-4">
              Users booking a consultation must provide complete and
              accurate information, including birth details where required.
            </p>

            <p className="text-body">
              Astrological analysis may be affected by incorrect or
              incomplete information. Consultation timing, duration,
              method and inclusions will be displayed before booking.
            </p>
          </section>

          {/* Astrology Disclaimer */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Astrology Disclaimer
            </h2>

            <p className="text-body mb-4">
              Astrology is interpretive. Our books, consultations,
              predictions and remedies are provided for personal guidance,
              spiritual insight and educational purposes.
            </p>

            <p className="text-body mb-4">
              We do not guarantee:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>A particular result from any remedy</li>
              <li>
                Resolution of marriage, financial, business or family
                problems
              </li>
              <li>Financial profit or professional success</li>
              <li>Medical recovery</li>
              <li>Any specific future event or outcome</li>
            </ul>

            <p className="text-body mt-4">
              Our content and services are not substitutes for professional
              medical, psychological, legal, financial or other qualified
              advice. You remain responsible for your decisions and
              actions.
            </p>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Intellectual Property
            </h2>

            <p className="text-body mb-4">
              All PDFs, e-books, remedies, reports, illustrations, website
              content, videos, graphics and consultation materials are
              owned by or licensed to Astro Ayush.
            </p>

            <p className="text-body mb-4">
              Your purchase gives you a limited, personal, non-exclusive
              and non-transferable right to access the product. You must
              not:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>Share the PDF publicly or privately with others</li>
              <li>Upload it to another website, group or platform</li>
              <li>Resell, reproduce or commercially distribute it</li>
              <li>Remove copyright or ownership information</li>
              <li>Copy substantial portions for commercial use</li>
            </ul>

            <p className="text-body mt-4">
              Unauthorised distribution may result in suspension of access
              and legal action.
            </p>
          </section>

          {/* Refunds and Cancellations */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Refunds and Cancellations
            </h2>

            <p className="text-body">
              Refunds and cancellations are governed by our Refund and
              Cancellation Policy. Successfully delivered or downloaded
              digital products are generally non-refundable, except in
              eligible cases described in that policy or where required by
              law.
            </p>
          </section>

          {/* Third Party Services */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Third-Party Services
            </h2>

            <p className="text-body">
              The website may rely on third-party payment, hosting,
              communication or analytics services. Temporary failure or
              unavailability of those services may affect website access,
              payment confirmation or delivery.
            </p>
          </section>

          {/* Prohibited Use */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Prohibited Use
            </h2>

            <p className="text-body mb-4">
              You must not:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                Use the website for unlawful or fraudulent purposes
              </li>
              <li>Attempt to gain unauthorised access</li>
              <li>Introduce malware or harmful code</li>
              <li>Copy or scrape protected content</li>
              <li>Impersonate another person</li>
              <li>
                Use another person&apos;s mobile number without permission
              </li>
              <li>
                Abuse, threaten or harass our team or other users
              </li>
            </ul>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Limitation of Liability
            </h2>

            <p className="text-body mb-4">
              To the extent permitted by law, Astro Ayush will not be
              responsible for losses arising solely from decisions made on
              the basis of astrological content, consultations, predictions
              or remedies.
            </p>

            <p className="text-body">
              Nothing in these Terms excludes consumer rights or
              liabilities that cannot legally be excluded.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Changes to These Terms
            </h2>

            <p className="text-body">
              We may update these Terms when our services or legal
              requirements change. Updated Terms will apply from the date
              they are published. Where required, material changes will be
              communicated to registered users.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Governing Law
            </h2>

            <p className="text-body">
              These Terms are governed by the laws of India. Disputes will
              be subject to the jurisdiction of the courts in [City, State],
              subject to applicable consumer-protection rights.
            </p>
          </section>

          {/* Customer Support */}
          <section className="rounded-xl border border-border bg-primary/10 p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="text-card mb-6 font-semibold">
              Customer Support and Grievance Contact
            </h2>

            <div className="text-body space-y-3">
              <p>
                <span className="font-semibold">Contact Person:</span>{" "}
                Ayush Mallick
              </p>

              <p>
                <span className="font-semibold">Designation:</span>{" "}
                Customer Support and Grievance Contact
              </p>

              <p className="break-words">
                <span className="font-semibold">Email:</span>{" "}
                [Email Address]
              </p>

              <p>
                <span className="font-semibold">Phone/WhatsApp:</span>{" "}
                +91 79803 14196
              </p>

             
            </div>

            <p className="text-label mt-6 border-t border-border pt-5 text-text-secondary">
              We aim to acknowledge consumer complaints within 48 hours
              and resolve them within the period required under applicable
              law.
            </p>
          </section>

        </article>
      </main>
    </div>
  );
}
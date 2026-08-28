export default function RefundAndPolicy() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16 xl:py-20">

        {/* Page Header */}
        <header className="mb-10 border-b border-border pb-8 sm:mb-12 sm:pb-10">
          <h1 className="text-section font-bold">
            Refund and Cancellation Policy
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
            This policy applies to digital PDFs, e-books, astrology
            consultations and other paid services purchased through our
            website.
          </p>
        </header>

        {/* Policy Content */}
        <article className="space-y-10 sm:space-y-12">

          {/* Digital Products */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Digital Products
            </h2>

            <p className="text-body mb-4">
              Because PDFs and e-books can be downloaded and retained after
              delivery, they cannot be returned like physical products.
            </p>

            <p className="text-body mb-4">
              A refund will not normally be provided when:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                The PDF has been successfully unlocked or downloaded
              </li>
              <li>
                The user changes their mind after purchasing
              </li>
              <li>
                The user expected information not included in the product
                description
              </li>
              <li>
                The user provides an incorrect mobile number
              </li>
              <li>
                The user shares, loses or deletes the downloaded file
              </li>
              <li>
                The user does not obtain the expected personal result from
                a remedy
              </li>
            </ul>
          </section>

          {/* Eligible Refund Cases */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Eligible Refund Cases
            </h2>

            <p className="text-body mb-4">
              A refund or corrective delivery may be considered if:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                The same payment was deducted more than once
              </li>
              <li>
                Payment was successful but product access was not provided
              </li>
              <li>
                The wrong digital product was unlocked
              </li>
              <li>
                The downloaded file is corrupted or cannot be opened
              </li>
              <li>
                We cancel a paid service and cannot provide an alternative
              </li>
              <li>
                A refund is required under applicable consumer law
              </li>
            </ul>

            <p className="text-body mt-4">
              Where possible, we will first attempt to restore access or
              provide the correct working file.
            </p>
          </section>

          {/* Refund Request Period */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Refund Request Period
            </h2>

            <p className="text-body mb-4">
              Eligible refund requests should be submitted within seven days
              of purchase.
            </p>

            <p className="text-body mb-4">
              The request must include:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>Customer&apos;s name</li>
              <li>Registered mobile number</li>
              <li>Order ID</li>
              <li>Payment reference number</li>
              <li>Screenshot or evidence of the issue</li>
              <li>Reason for requesting the refund</li>
            </ul>
          </section>

          {/* Consultation Cancellations */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Consultation Cancellations
            </h2>

            <p className="text-body mb-4">
              Consultations may be cancelled or rescheduled at least 24 hours
              before the scheduled time.
            </p>

            <p className="text-body mb-4">
              Cancellations made less than 24 hours before the appointment and
              missed consultations are non-refundable.
            </p>

            <p className="text-body mb-4">
              If Astro Ayush cancels a consultation, the customer may choose:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>A new available appointment</li>
              <li>A full refund of the consultation fee</li>
            </ul>

            <p className="text-body mt-4">
              Completed consultations are non-refundable.
            </p>
          </section>

          {/* Failed or Pending Payments */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Failed or Pending Payments
            </h2>

            <p className="text-body">
              If money is deducted but the payment status remains failed or
              pending, customers should first allow the payment gateway or bank
              sufficient time to update or reverse the transaction. If the
              amount is not automatically reversed, contact us with the payment
              reference number. We will verify the transaction with the payment
              provider.
            </p>
          </section>

          {/* Refund Processing */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Refund Processing
            </h2>

            <p className="text-body">
              Approved refunds will be returned only to the original payment
              method.
            </p>

            <p className="text-body mt-4">
              Refunds are generally initiated within 7–10 business days after
              approval. Banks and payment providers may take additional time to
              reflect the amount.
            </p>
          </section>

          {/* Contact Us */}
          <section className="rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="text-card mb-6 font-semibold">
              Contact Us
            </h2>

            <div className="text-body space-y-3">
              <p className="break-words">
                <span className="font-semibold">Email:</span>{" "}
                fininterestam581@gmail.com
              </p>

              <p>
                <span className="font-semibold">Phone/WhatsApp:</span>{" "}
                +91 79803 14196
              </p>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
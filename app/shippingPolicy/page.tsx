export default function ShippingPolicy() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:px-10 lg:py-16 xl:py-20">

        {/* Page Header */}
        <header className="mb-10 border-b border-border pb-8 sm:mb-12 sm:pb-10">
          <h1 className="text-section font-bold">
            Shipping and Digital Delivery Policy
          </h1>

          <div className="mt-5 space-y-1 text-label text-text-secondary">
            <p>
              <span className="font-medium text-text">Website:</span>{" "}
              [Website URL]
            </p>

            <p>
              <span className="font-medium text-text">Brand Name:</span>{" "}
              Astro Ayush
            </p>

            <p>
              <span className="font-medium text-text">Last Updated:</span>{" "}
              [Date]
            </p>
          </div>

          <p className="text-body mt-6 max-w-4xl text-text-secondary">
            Astro Ayush currently sells digital products and online astrology
            services. No physical product is shipped unless a product page
            specifically states otherwise.
          </p>
        </header>

        {/* Policy Content */}
        <article className="space-y-10 sm:space-y-12">

          {/* How Digital Delivery Works */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              How Digital Delivery Works
            </h2>

            <p className="text-body mb-5">
              When purchasing a PDF or e-book:
            </p>

            <ol className="text-body list-decimal space-y-3 pl-5 sm:pl-6">
              <li>
                The customer provides their name and mobile number.
              </li>

              <li>
                A user account is automatically created or linked using the
                mobile number.
              </li>

              <li>
                The customer completes payment through a third-party payment
                gateway.
              </li>

              <li>
                Once payment is successfully confirmed, the purchased PDF
                becomes available for download.
              </li>

              <li>
                The customer can access the product through their account or
                order confirmation page.
              </li>
            </ol>
          </section>

          {/* Delivery Time */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Delivery Time
            </h2>

            <p className="text-body mb-4">
              Digital products are normally unlocked immediately or within a
              few minutes after successful payment confirmation.
            </p>

            <p className="text-body mb-4">
              Delivery may take longer when:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                The payment gateway shows the payment as pending
              </li>

              <li>
                The bank or UPI provider delays confirmation
              </li>

              <li>
                The website is undergoing temporary maintenance
              </li>

              <li>
                Incorrect account information has been provided
              </li>

              <li>
                A technical or security review is required
              </li>
            </ul>
          </section>

          {/* Download Responsibility */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Download Responsibility
            </h2>

            <p className="text-body mb-4">
              Customers should download and securely save purchased PDFs to
              their devices.
            </p>

            <p className="text-body mb-4">
              Continued online availability is subject to the customer&apos;s
              account remaining active and the website continuing to provide
              that product. We recommend downloading the file immediately
              after purchase.
            </p>

            <p className="text-body">
              Purchased content must not be shared, resold or distributed to
              another person.
            </p>
          </section>

          {/* Technical Requirements */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Technical Requirements
            </h2>

            <p className="text-body mb-4">
              Customers are responsible for having:
            </p>

            <ul className="text-body list-disc space-y-2 pl-5 sm:pl-6">
              <li>
                A compatible mobile phone, computer or tablet
              </li>

              <li>
                A working internet connection
              </li>

              <li>
                Software capable of opening PDF files
              </li>

              <li>
                Access to the registered mobile number
              </li>
            </ul>
          </section>

          {/* Payment Completed but Download Unavailable */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Payment Completed but Download Unavailable
            </h2>

            <p className="text-body mb-4">
              If payment is successful but the product is not available:
            </p>

            <ol className="text-body list-decimal space-y-3 pl-5 sm:pl-6">
              <li>
                Refresh the account or order page.
              </li>

              <li>
                Confirm that the correct mobile number was used.
              </li>

              <li>
                Allow a few minutes for payment confirmation.
              </li>

              <li>
                Contact us with the order ID and payment reference number.
              </li>
            </ol>

            <p className="text-body mt-5">
              If we cannot provide the purchased product, the matter will be
              handled according to our Refund and Cancellation Policy.
            </p>
          </section>

          {/* Consultation Delivery */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Consultation Delivery
            </h2>

            <p className="text-body">
              Astrology consultations are provided through the communication
              method and at the time confirmed during booking. They do not
              require physical shipping.
            </p>
          </section>

          {/* Physical Shipping */}
          <section>
            <h2 className="text-card mb-4 font-semibold">
              Physical Shipping
            </h2>

            <p className="text-body">
              No shipping fee, courier tracking or physical delivery timeline
              applies to downloadable PDFs or online consultations.
            </p>
          </section>

          {/* Delivery Support */}
          <section className="rounded-xl border border-border bg-surface p-5 shadow-sm sm:p-6 md:p-8">
            <h2 className="text-card mb-6 font-semibold">
              Delivery Support
            </h2>

            <div className="text-body space-y-3">
              <p className="break-words">
                <span className="font-semibold">Email:</span>{" "}
                [Email Address]
              </p>

              <p>
                <span className="font-semibold">Phone/WhatsApp:</span>{" "}
                [Phone Number]
              </p>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}
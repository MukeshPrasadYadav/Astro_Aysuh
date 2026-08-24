import AboutAyushBanner from "@/components/AboutAyushBanner";

const consultationAreas = [
  {
    title: "Marriage & Relationships",
    questions: [
      "Why is your marriage getting delayed?",
      "Why do the same problems keep affecting your relationship?",
      "Is this the right time to make an important relationship decision?",
      "What may help bring greater understanding and stability?",
    ],
  },
  {
    title: "Career & Education",
    questions: [
      "Should you continue on your current path or consider a change?",
      "Why does professional growth feel delayed?",
      "Which career direction may suit you better?",
      "Is this the right time to make an important career decision?",
    ],
  },
  {
    title: "Business & Finances",
    questions: [
      "Is this a suitable time to start or expand a business?",
      "Why are financial difficulties continuing?",
      "Should you proceed with a new opportunity or partnership?",
      "What areas require greater caution and planning?",
    ],
  },
  {
    title: "Family & Personal Life",
    questions: [
      "Why do the same family problems keep returning?",
      "How should you approach an important personal decision?",
      "What may be contributing to stress or uncertainty?",
      "Which remedies may be suitable for your situation?",
    ],
  },
];

const consultationIncludes = [
  "A personal one-to-one consultation with Astrologer Ayush",
  "Detailed analysis of your birth chart",
  "Answers to your most important questions",
  "Guidance related to your current challenges",
  "Clear explanation of relevant planetary influences",
  "Personalised astrological remedies where appropriate",
  "An opportunity to discuss multiple connected concerns within the available time",
];

const consultationSteps = [
  {
    number: "01",
    title: "Share Your Details",
    description:
      "Provide your name, contact number, date of birth, exact time of birth and place of birth.",
  },
  {
    number: "02",
    title: "Complete Your Booking",
    description:
      "Select the available consultation option and complete the payment securely through the payment portal.",
  },
  {
    number: "03",
    title: "Receive Confirmation",
    description:
      "Once payment is successful, our team will contact you with the consultation date, time and joining details.",
  },
  {
    number: "04",
    title: "Speak with Astrologer Ayush",
    description:
      "Discuss your concerns directly while Ayush explains the relevant observations from your birth chart.",
  },
  {
    number: "05",
    title: "Receive Personalised Guidance",
    description:
      "Get clear direction and remedies suited to the concerns discussed during your consultation.",
  },
];

const faqs = [
  {
    question: "Will Astrologer Ayush personally conduct my consultation?",
    answer:
      "Yes. Your booked consultation will be conducted personally by Astrologer Ayush unless otherwise stated during booking.",
  },
  {
    question: "What information is required?",
    answer:
      "You will generally need to provide your name, mobile number, date of birth, time of birth and place of birth.",
  },
  {
    question: "Can I discuss more than one problem?",
    answer:
      "Yes, you may discuss multiple concerns within the booked consultation time. However, prioritising your most important questions will help keep the session focused.",
  },
  {
    question: "Will I receive remedies during the consultation?",
    answer:
      "Where appropriate, Astrologer Ayush will recommend remedies based on your birth chart and the concerns discussed.",
  },
  {
    question: "Are specific results guaranteed?",
    answer:
      "No. Astrology is interpretive, and the results of any prediction, guidance or remedy cannot be guaranteed.",
  },
  {
    question: "Is my information kept confidential?",
    answer:
      "Your birth details, questions and consultation information are used only to process and provide the booked service, subject to the website’s Privacy Policy.",
  },
  {
    question: "Can I book a consultation for another person?",
    answer:
      "Yes, provided you have that person’s permission and submit their correct birth details. One person’s chart will be analysed per individual consultation unless otherwise specified.",
  },
  {
    question: "What happens after payment?",
    answer:
      "After successful payment confirmation, our team will contact you using the mobile number provided during booking and share the consultation details.",
  },
  {
    question: "Can I cancel or reschedule my consultation?",
    answer:
      "Cancellation and rescheduling requests are handled according to the website’s Refund and Cancellation Policy.",
  },
];

const phone = "917980314196";
  const message = "Hello, I want to ask an astrology question.";

export default function AboutAyush() {
  return (
    <div className="min-h-screen bg-background text-text">

      {/* Banner */}
      <AboutAyushBanner />

      {/* Why Consult */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
            Why Consult Astrologer Ayush?
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Guidance That Is Personal to You
          </h2>

          <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
            Your questions and circumstances are unique. Astrologer Ayush
            studies your individual birth chart to provide guidance based on
            your specific situation rather than a generic prediction.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-text/10 bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Guidance Based on Your Birth Chart
            </h3>

            <p className="mt-3 text-sm leading-7 text-text/70">
              Your situation is studied through your individual birth chart
              instead of giving you a generic prediction.
            </p>
          </div>

          <div className="rounded-2xl border border-text/10 bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Clear and Direct Explanations
            </h3>

            <p className="mt-3 text-sm leading-7 text-text/70">
              Astrological observations are explained in simple language so
              that you understand what they mean for your situation.
            </p>
          </div>

          <div className="rounded-2xl border border-text/10 bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Personalised Remedies
            </h3>

            <p className="mt-3 text-sm leading-7 text-text/70">
              Where appropriate, Ayush recommends practical remedies suited to
              your chart, circumstances and concerns.
            </p>
          </div>

          <div className="rounded-2xl border border-text/10 bg-background p-6 shadow-sm">
            <h3 className="text-xl font-semibold">
              Private One-to-One Consultation
            </h3>

            <p className="mt-3 text-sm leading-7 text-text/70">
              Your personal information, questions and consultation details are
              handled confidentially.
            </p>
          </div>

        </div>
      </section>

      {/* Areas of Consultation */}
      <section className="bg-primary/5">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
              What Would You Like Clarity About?
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Guidance for the Questions That Matter to You
            </h2>

            <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
              Whether your concern is related to relationships, career,
              business, finances or personal life, your consultation can focus
              on the questions that matter most to you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {consultationAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl bg-background p-6 shadow-sm sm:p-8"
              >
                <h3 className="text-2xl font-semibold">
                  {area.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {area.questions.map((question) => (
                    <li
                      key={question}
                      className="flex gap-3 text-sm leading-7 text-text/70 sm:text-base"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Meet Ayush */}
      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

        <div className="grid gap-10 md:grid-cols-2 md:items-center">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
              Meet Astrologer Ayush
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Concerns Are Personal.
              <span className="block text-primary">
                Your Guidance Should Be Too.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-text/70 sm:text-lg">
            <p>
              With over 7 years of experience in Vedic astrology, Astrologer
              Ayush helps people find clarity during uncertain and challenging
              phases of life.
            </p>

            <p>
              His consultation begins by listening to your concerns and
              understanding the questions you want answered. He then carefully
              studies your birth chart to identify relevant planetary
              influences, recurring patterns and important periods connected
              with your situation.
            </p>

            <p>
              Instead of overwhelming you with complicated astrological terms,
              Ayush explains his observations clearly and recommends
              personalised remedies wherever appropriate.
            </p>
          </div>

        </div>

        <div className="mt-10 text-center">
          <a
  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-xl bg-text-meta px-7 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
>
  Consult Astrologer Ayush →
</a>
        </div>

      </section>

      {/* What You Receive */}
      <section className="bg-primary/5">
        <div className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-20">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
              Your Consultation
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              What You Receive During Your Consultation
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-background p-6 shadow-sm sm:p-8">

            <ul className="space-y-4">
              {consultationIncludes.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 text-sm leading-7 text-text/75 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* Choose Consultation */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-20">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
            Choose Your Consultation
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Personal Astrology Consultation
          </h2>

          <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
            Suitable for individuals seeking clarity about marriage,
            relationships, career, business, money, family matters or
            important life decisions.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">

          <div className="grid gap-4 sm:grid-cols-2">

            <div>
              <p className="text-sm text-text/60">
                Consultation Mode
              </p>

              <p className="mt-1 font-semibold">
                [Audio Call/Video Call]
              </p>
            </div>

            <div>
              <p className="text-sm text-text/60">
                Duration
              </p>

              <p className="mt-1 font-semibold">
                [30 Minutes/60 Minutes]
              </p>
            </div>

            <div>
              <p className="text-sm text-text/60">
                Language
              </p>

              <p className="mt-1 font-semibold">
                [Hindi/English/Bengali]
              </p>
            </div>

            

          </div>

          <div className="mt-8 border-t border-primary/10 pt-7">

            <h3 className="text-xl font-semibold">
              This Consultation Includes
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-7 text-text/70">
              <li>• Birth-chart analysis</li>
              <li>• Discussion of your selected concerns</li>
              <li>• Personalised astrological guidance</li>
              <li>• Suitable remedies based on your chart</li>
            </ul>

          </div>

<a
  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block w-full rounded-xl bg-text-meta  px-6 py-3 text-center font-semibold text-[#fff8e8] shadow-lg transition hover:opacity-90"
>
  Book Now →
</a>
        </div>

      </section>

      {/* How It Works */}
      <section className="bg-primary/5">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">

          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
              Simple Process
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              How the Consultation Works
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {consultationSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl bg-background p-6 shadow-sm"
              >
                <span className="text-sm font-bold text-primary">
                  {step.number}
                </span>

                <h3 className="mt-3 text-lg font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text/65">
                  {step.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Before Consultation */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-20">
  <div className="rounded-3xl border border-text/10 bg-background p-7 shadow-sm sm:p-10">

    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
      Prepare for Your Session
    </p>

    <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
      Before Your Consultation
    </h2>

    <p className="mt-4 max-w-2xl leading-7 text-text/70">
      For a more focused session, please keep the following ready:
    </p>

    <ul className="mt-7 grid gap-3 sm:grid-cols-2">

      <li className="rounded-xl border border-text/10 bg-text/[0.03] p-4">
        Correct date of birth
      </li>

      <li className="rounded-xl border border-text/10 bg-text/[0.03] p-4">
        Exact or closest-known time of birth
      </li>

      <li className="rounded-xl border border-text/10 bg-text/[0.03] p-4">
        Place of birth
      </li>

      <li className="rounded-xl border border-text/10 bg-text/[0.03] p-4">
        Two or three important questions
      </li>

      <li className="rounded-xl border border-text/10 bg-text/[0.03] p-4 sm:col-span-2">
        Relevant details connected with your concern
      </li>

    </ul>

    <p className="mt-7 text-sm leading-7 text-text/60">
      Incorrect or incomplete birth details may affect the accuracy of the
      chart analysis.
    </p>

  </div>
</section>
      {/* Testimonials */}
      <section className="bg-primary/5">
        <div className="mx-auto w-full max-w-5xl px-5 py-16 text-center sm:px-8 md:py-20">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
            What Clients Say
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Real Experiences. Personal Journeys.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text/70 sm:text-lg">
            Read how personalised consultations with Astrologer Ayush have
            helped clients understand their situations and find greater
            clarity.
          </p>

          <div className="mt-10 rounded-2xl border border-dashed border-text/20 bg-background p-8">
            <p className="text-sm text-text/60">
              Genuine client testimonials will be displayed here.
            </p>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto w-full max-w-5xl px-5 py-16 sm:px-8 md:py-20">

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-text-meta">
            FAQ
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-10 space-y-4">

          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-text/10 bg-background p-5"
            >
              <summary className="cursor-pointer list-none pr-6 font-semibold">
                {faq.question}
              </summary>

              <p className="mt-4 text-sm leading-7 text-text/70 sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}

        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary/5 px-5 py-16 sm:px-8 md:py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-text-muted">
            Need Guidance?
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Still Confused About the Right Remedy?
          </h2>

          <p className="mt-5 text-base leading-8 text-text/70 sm:text-lg">
            You do not have to keep searching for general answers to a personal
            problem. Let Astrologer Ayush study your birth chart, understand
            your concerns and guide you towards the next step.
          </p>

          <a
  href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-block rounded-xl bg-link-button px-7 py-3 font-semibold text-white shadow-lg transition hover:opacity-90"
>
  Book Your Personal Consultation →
</a>

          <p className="mt-8 text-xs leading-6 text-text/50">
            Astrological consultations and remedies are intended for personal
            guidance and should not replace qualified medical, legal,
            psychological or financial advice.
          </p>

        </div>

      </section>

    </div>
  );
}
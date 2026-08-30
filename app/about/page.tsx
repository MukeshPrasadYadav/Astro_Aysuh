export default function About() {
  return (
    <div className="min-h-screen bg-background text-text">
      <main className="mx-auto w-full max-w-5xl px-6 py-12 md:px-8 lg:py-16">
        
        {/* Heading */}
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          About Us
        </h1>

        {/* Intro */}
        <p className="mb-8 text-base leading-7 md:text-lg md:leading-8">
          Welcome to <strong>LifeSiddhi!</strong> We are a team of professional
          astrologers dedicated to providing unique and insightful solutions to
          your questions. Our consultants use ancient Vedic principles combined
          with modern expertise to guide you through life's challenges.
        </p>

        {/* Main Content */}
        <div className="space-y-6 text-base leading-7 md:text-lg md:leading-8">
          <p>
            At AstroAyush, we believe that every question deserves a thoughtful
            and personalized answer. Our astrologers combine years of experience
            with a passion for helping people find clarity and peace. Whether
            you are facing challenges in your career, relationships, or personal
            growth, our team is here to guide you with wisdom and compassion.
          </p>

          {/* Features */}
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Personalized astrology reports delivered instantly via WhatsApp.
            </li>
            <li>
              Expert guidance for career, relationships, health, and more.
            </li>
            <li>
              Confidential consultations with trusted professionals.
            </li>
            <li>
              Solutions tailored to your unique birth details and questions.
            </li>
            <li>
              Over 4,500 satisfied users and growing!
            </li>
          </ul>

          <p>
            We use a blend of traditional Vedic astrology and modern techniques
            to analyze your birth details and provide solutions that are truly
            unique to you. Our commitment is to deliver accurate, confidential,
            and timely advice—empowering you to make informed decisions and lead
            a happier life.
          </p>

          <p>
            Join thousands of satisfied users who have found answers and
            direction through AstroAyush. Ask your question today and experience
            the difference of professional astrology guidance.
          </p>
        </div>
      </main>
    </div>
  );
}
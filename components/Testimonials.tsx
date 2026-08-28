import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Rohan Sharma",
    description:
      "I recently had the privilege of consulting with Ayush Mallick, and the experience has been truly eye-opening. From the very first moment, he created a calm and welcoming space where I felt comfortable sharing my thoughts, concerns, and questions. He listened with genuine patience and compassion, making me feel truly heard and understood. What stood out most was the depth of his knowledge and the way he explained things in a clear and relatable manner. His guidance went beyond simple predictions—he offered practical advice and meaningful insights that connected with my real-life situations.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    description:
      "It's been a great session. I was feeling overwhelmed and overthinking a lot. Thank you for providing so much clarity and guiding me towards the right path. Hearing your voice and the words you shared made me feel calm and positive. Thank you again for your time, patience, and guidance.",
    rating: 4.8,
  },
  {
    name: "Aditya Mishra",
    description:
      "Thank you so much Ayush for all the guidance, wisdom and detailed reading. I really appreciate the time and effort you put into explaining everything so patiently. The session gave me a much better understanding of my situation and helped me look at things from a different perspective. Truly grateful for the guidance and insights.",
    rating: 5,
  },
  {
    name: "Vivek Tiwari",
    description:
      "Brother, thank you for your reading. You took almost two hours to explain astrology to me from the basics, and it was very kind of you. I really appreciate how clearly you explained everything and how comfortable you made the whole session. I was able to understand things that had confused me for a long time. I will definitely recommend you to others looking for a detailed reading.",
    rating: 4.7,
  },
  {
    name: "Priya Joshi",
    description:
      "Thank you so much for your time and for answering all my questions. It was an eye-opening session, and I am grateful to you for resolving my long-standing queries and also advising me on the remedies. Keep up the excellent work that you are doing with so much passion, genuineness, and ethics. I truly appreciate the patience and clarity throughout the consultation.",
    rating: 4.9,
  },
  {
    name: "Saurabh Pandey",
    description:
      "For the first time, I feel that someone has told me something genuinely different from the usual, and I am more than satisfied. The reading gave me a new perspective and helped me understand certain things about my life that I had never looked at in that way before. I really appreciate the honest and detailed approach throughout the consultation.",
    rating: 4.6,
  },
  {
    name: "Ananya Kapoor",
    description:
      "Highly recommended! The session provided incredible insights and guidance. The reading was detailed and felt very relevant to my situation. The compassionate approach made me feel heard and understood, and I gained a new perspective on my life's journey. I am grateful for the expertise, patience, and clarity throughout the consultation.",
    rating: 4.8,
  },
  {
    name: "Rahul Srivastava",
    description:
      "Hi Sir, I wanted to express my heartfelt thanks to you for helping me out. I truly appreciate the way you explained everything to me. The clarity and depth of your explanations were amazing, and I felt that you approached everything with genuine care rather than like a typical astrologer I have met in the past. I really appreciate your time, guidance, and patience. Thank you once again for everything.",
    rating: 5,
  },
];

export default function Testimonials() {
  // Duplicate the list to create a seamless infinite loop
  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="mt-10 w-full overflow-hidden sm:mt-12">
      <div className={styles.viewport}>
        {/* Left fade */}
        <div className={styles.leftFade} />

        {/* Right fade */}
        <div className={styles.rightFade} />

        <div className={styles.track}>
          {loopTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.name}-${index}`}
              className={styles.card}
            >
              {/* Rating */}
              <div className="mb-4 flex items-center gap-2">
                <div className="flex gap-0.5 text-[#c58a2b]">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <span
                      key={star}
                      className={
                        star < Math.round(testimonial.rating)
                          ? ""
                          : "text-[#ddd2c3]"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span className="text-xs font-medium text-text-meta">
                  {testimonial.rating.toFixed(1)}
                </span>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <div className="mb-1 font-serif text-4xl leading-none text-primary/40">
                  “
                </div>

                <p className="line-clamp-7 text-left text-sm leading-6 text-text/75 sm:text-[15px]">
                  {testimonial.description}
                </p>
              </div>

              {/* Customer */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="text-left">
                  <p className="text-sm font-semibold text-text">
                    {testimonial.name}
                  </p>

                  <p className="text-xs text-text-meta">
                    Client Experience
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
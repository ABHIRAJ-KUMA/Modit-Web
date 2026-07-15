type Testimonial = {
  author: string;
  role: string;
  quote: string;
};

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="testimonial-card">
      <p className="testimonial-quote">“{testimonial.quote}”</p>
      <div>
        <p className="testimonial-author">{testimonial.author}</p>
        <p className="testimonial-role">{testimonial.role}</p>
      </div>
    </article>
  );
}

interface ITestimonialCardProps {
    text: string;
    author: string;
    role: string;
    avatar: string;
}

export default function TestimonialCard({ text, author, role, avatar }: ITestimonialCardProps) {
    return (
        <article className="testimonial-card">
            <div className="testimonial-quote-mark">
                <svg viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
            </div>
            <p className="testimonial-text">{text}</p>
            <div className="testimonial-author">
                <div className="testimonial-avatar">{avatar}</div>
                <div className="testimonial-meta">
                    <span className="testimonial-name">{author}</span>
                    <span className="testimonial-role">{role}</span>
                </div>
            </div>
        </article>
    );
}

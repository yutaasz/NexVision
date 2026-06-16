import Button from "./Button";

interface ITierCardProps {
    name: string;
    tagline: string;
    price: string;
    suffix: string;
    features: string[];
    buttonText: string;
    featured?: boolean;
}

export default function TierCard({ name, tagline, price, suffix, features, buttonText, featured }: ITierCardProps) {
    return (
        <div className={`tier-card ${featured ? "featured" : ""}`}>
            {featured && <span className="featured-badge">Mais Procurado</span>}
            <h3 className="tier-name">{name}</h3>
            <span className="tier-tagline">{tagline}</span>
            <div className="tier-price-box">
                <span className="tier-price">{price}</span>
                <span className="tier-price-suffix">{suffix}</span>
            </div>
            <ul className="tier-features">
                {features.map((feature, idx) => (
                    <li key={idx}>
                        <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        {feature}
                    </li>
                ))}
            </ul>
            <a href="#inquiry">
                <Button text={buttonText} secondary={!featured} />
            </a>
        </div>
    );
}

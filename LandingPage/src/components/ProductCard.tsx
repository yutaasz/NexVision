interface IProductCardProps {
    image: string;
    title: string;
    desc: string;
    price: string;
}

export default function ProductCard({ image, title, desc, price }: IProductCardProps) {
    return (
        <article className="portfolio-card">
            <div className="portfolio-img-container">
                <img src={image} alt={title} className="portfolio-img" />
            </div>
            <div className="portfolio-body">
                <h3 className="portfolio-card-title">{title}</h3>
                <p className="portfolio-card-desc">{desc}</p>
                <a href="#inquiry" className="portfolio-card-link">
                    A partir de {price}
                    <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
            </div>
        </article>
    );
}

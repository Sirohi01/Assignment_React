import './FeaturedMedia.css';

export default function FeaturedMedia() {
  const mediaCards = [
    {
      id: 1,
      type: "moneycontrol",
      title: "MoneyControl",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      date: "Nov 8, 2024",
      image: "https://via.placeholder.com/80",
      color: "#e3f5e9"
    },
    {
      id: 2,
      type: "article",
      title: "Noida real estate market trends",
      content: "Property prices more than double in last five years with growing interest from international residents.",
      tags: ["REAL ESTATE", "TRENDS"],
      image: "https://via.placeholder.com/80",
      color: "#f0e7f6"
    },
    {
      id: 3,
      type: "investment",
      title: "Dwarka Expressway boom",
      content: "Residential projects witnessing price uptick due to strategic location and infrastructure development.",
      highlights: ["REMARKING", "SUPERMANTRA"],
      location: "Dwarka Expressway, Noida",
      image: "https://via.placeholder.com/80",
      color: "#e7f1f9"
    },
    {
      id: 4,
      type: "expert",
      title: "Home loan interest rates",
      content: "The ISIR decision to maintain the status quo is a welcome move for home buyers and developers alike.",
      author: "Aragon R. Jana",
      role: "BREAKFASTER",
      image: "https://via.placeholder.com/80",
      color: "#f9f0e7"
    },
    {
      id: 4,
      type: "expert",
      title: "Home loan interest rates",
      content: "The ISIR decision to maintain the status quo is a welcome move for home buyers and developers alike.",
      author: "Aragon R. Jana",
      role: "BREAKFASTER",
      image: "https://via.placeholder.com/80",
      color: "#f9f0e7"
    },{
      id: 4,
      type: "expert",
      title: "Home loan interest rates",
      content: "The ISIR decision to maintain the status quo is a welcome move for home buyers and developers alike.",
      author: "Aragon R. Jana",
      role: "BREAKFASTER",
      image: "https://via.placeholder.com/80",
      color: "#e7f1f9"
    }
  ];

  return (
    <section className="featured-media-section">
      <h2 className="section-title">Featured Media</h2>
      
      <div className="media-cards-container">
        {mediaCards.map((card) => (
          <div 
            key={card.id} 
            className={`media-card ${card.type}`}
            style={{ backgroundColor: card.color }}
          >
            <div className="card-image-container">
              <img 
                src={card.image} 
                alt={card.title} 
                className="card-profile-image"
              />
            </div>
            
            <div className="card-content-wrapper">
              {card.type === "moneycontrol" && (
                <>
                  <div className="card-header">
                    <h3 className="card-title">{card.title}</h3>
                    <span className="card-date">{card.date}</span>
                  </div>
                  <p className="card-content">{card.content}</p>
                </>
              )}
              
              {card.type === "article" && (
                <>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">{card.content}</p>
                  <div className="card-tags">
                    {card.tags.map((tag, i) => (
                      <span key={i} className="tag">• {tag}</span>
                    ))}
                  </div>
                </>
              )}
              
              {card.type === "investment" && (
                <>
                  <div className="card-highlights">
                    {card.highlights.map((item, i) => (
                      <span key={i} className="highlight">{item}</span>
                    ))}
                  </div>
                  <h4 className="card-location">{card.location}</h4>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">{card.content}</p>
                </>
              )}
              
              {card.type === "expert" && (
                <>
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-content">"{card.content}"</p>
                  <div className="expert-info">
                    <span className="expert-name">{card.author}</span>
                    <span className="expert-role">• {card.role}</span>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
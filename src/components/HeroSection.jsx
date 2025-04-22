import './HeroSection.css';

export default function HeroSection() {
  const otherStories = [
    {
      id: 1,
      title: 'Top 5 Places To Live In Gurugram',
    },
    {
      id: 2,
      title: 'Housing Sales, New Launches In Top Cities Register Massive Jump In Q3 2022',
    },
    {
      id: 3,
      title: 'Festive Season Sales To Hold Up Real Estate Market',
    },
  ];

  return (
    <div className="hero-full-container">
      {/* Background Image */}
      <div className="hero-background-image"></div>
      
      {/* Content Container */}
      <div className="hero-content-container">
        {/* Main Hero Title */}
        <div className="hero-main-title">
          <h1>
            RBI RATE HIKE:<br />
            HOME LOANS TO GET DEARER, IMPACT ON<br />
            RESIDENTIAL SALES TO BE MODERATE
          </h1>
        </div>

        {/* Other Stories Section */}
        <div className="other-stories-section">
          <h3>Other Stories</h3>
          <div className="story-cards-container">
            {otherStories.map((story, index) => (
              <div key={story.id} className="story-card-item">
                <span>{index + 1}</span>
                <p>{story.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
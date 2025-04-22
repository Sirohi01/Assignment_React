import './CombinedSection.css';
import { useState } from 'react';
import blogImage from '../assets/blog1.jpg'; // Correct way to import image

export default function CombinedSection() {
  // Blogs Data
  const blogs = [
    {
      id: 1,
      title: 'Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter',
      date: 'Nov 2024',
      readTime: '8 Mins Read',
      image: blogImage // Use imported image directly
    },
    {
        id: 1,
        title: 'Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter',
        date: 'Nov 2024',
        readTime: '8 Mins Read',
        image: blogImage // Use imported image directly
      },

      {
        id: 1,
        title: 'Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter',
        date: 'Nov 2024',
        readTime: '8 Mins Read',
        image: blogImage // Use imported image directly
      },

      {
        id: 1,
        title: 'Unsold Housing Stock Down 12% Across Nine Cities At End Of September Quarter',
        date: 'Nov 2024',
        readTime: '8 Mins Read',
        image: blogImage // Use imported image directly
      },


    {
      id: 2,
      title: "International Women's Day Special – Rise Of Women In The Real Estate Sector",
      date: 'Oct 2024',
      readTime: '6 Mins Read',
      image: blogImage // Use same image for now (you can add more later)
    }
  ];

  // Trending News
  const trendingList = [
    {
      source: 'FINANCIAL EXPRESS',
      title: 'NUMBER PROPERTY REGISTRATIONS DOUBLE FOR THE FIRST TIME SINCE 2019',
      content: 'Average Quarterly, Value Of Registered Properties At Rs 44,000 Cops — The Highest In the Last Five Years.',
      author: 'Lomin (Down) | Stephen Shihri',
      date: 'Sept 2022'
    },
    {
      source: 'ECONOMIC TIMES',
      title: 'REALTY INVESTMENT RISES BY 35% IN 2024',
      content: 'With rising demand, housing and commercial sector investment hit a new high.',
      author: 'Ravi Sharma',
      date: 'Jan 2024'
    }
  ];

  const [currentTrend, setCurrentTrend] = useState(0);
  const handleNext = () => {
    setCurrentTrend((currentTrend + 1) % trendingList.length);
  };
  const currentTrending = trendingList[currentTrend];

  // News Section
  const news = [
    {
      id: 1,
      title: 'Rental Yield in Metro Cities Crosses Pre-COVID Levels',
      date: 'Oct 2024',
      readTime: '5 Mins Read'
    },

    {
        id: 1,
        title: 'Rental Yield in Metro Cities Crosses Pre-COVID Levels',
        date: 'Oct 2024',
        readTime: '5 Mins Read'
      },


      {
        id: 1,
        title: 'Rental Yield in Metro Cities Crosses Pre-COVID Levels',
        date: 'Oct 2024',
        readTime: '5 Mins Read'
      },

      {
        id: 1,
        title: 'Rental Yield in Metro Cities Crosses Pre-COVID Levels',
        date: 'Oct 2024',
        readTime: '5 Mins Read'
      },
    {
      id: 2,
      title: 'Tier-2 Cities Emerging as New Real Estate Hubs',
      date: 'Sept 2024',
      readTime: '6 Mins Read'
    }
  ];

  return (
  <div className="combined-container">
    <div className="card-container">
      {/* Section Title */}
      <h2 className="section-title">Real Estate Updates</h2>

      <div className="three-sections">
        {/* Blogs */}
        <div className="blogs-section">
          <h3 className="sub-section-title">Blogs</h3>
          <div className="blogs-list">
            {blogs.map(blog => (
              <div key={blog.id} className="blog-card">
                <img src={blog.image} alt="blog" className="blog-image" />
                <div className="blog-info">
                  <h3 className="blog-title">{blog.title}</h3>
                  <div className="blog-meta">
                    <span>{blog.date}</span> • <span>{blog.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Trending + News */}
        <div className="right-section">
          {/* Trending */}
          <div className="trending-section">
            <h3 className="sub-section-title">Trending News</h3>
            <div className="trending-card">
              <h4 className="trending-source">{currentTrending.source}</h4>
              <h3 className="trending-title">{currentTrending.title}</h3>
              <p className="trending-text">{currentTrending.content}</p>
              <div className="trending-meta">
                <span>{currentTrending.author}</span> • <span>{currentTrending.date}</span>
              </div>
              <button className="next-btn" onClick={handleNext}>→</button>
            </div>
          </div>

          {/* News */}
          <div className="news-section">
            <h3 className="sub-section-title">News</h3>
            <div className="news-list scrollable-news">
              {news.map(item => (
                <div key={item.id} className="news-card">
                  <h3 className="news-title">{item.title}</h3>
                  <div className="news-meta">
                    <span>{item.date}</span> • <span>{item.readTime}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* News Footer (matching blogs footer space) */}
            <div className="news-footer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
}

import './BlogsSection.css';

export default function BlogsSection() {
  const blogs = [
    {
      id: 1,
      category: 'Real Estate News',
      title: 'New Gurugram to be the next investment hotspot in NCR',
      image: 'blog1.jpg',
      author: 'Shiwang Suraj',
      avatar: 'avatar1.jpg',
      date: 'Feb 18, 2024',
    },
    {
      id: 2,
      category: 'Budget Insights',
      title: 'Union Budget 2024: What does it mean for the housing sector?',
      image: 'blog2.jpg',
      author: 'Samvit Thareja',
      avatar: 'avatar2.jpg',
      date: 'Jan 28, 2024',
    },
    {
      id: 3,
      category: 'Market Trends',
      title: '5 things first-time homebuyers should know before investing',
      image: 'blog3.jpg',
      author: 'Editorial Team',
      avatar: 'avatar3.jpg',
      date: 'Dec 15, 2023',
    },
  ];

  return (
    <section className="blogs-section">
      <h2 className="blogs-title">From Our Blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={`../assets/${blog.image}`} alt={blog.title} className="blog-image" />
            <p className="blog-category">{blog.category}</p>
            <h4 className="blog-title">{blog.title}</h4>
            <div className="blog-footer">
              <img src={`../assets/${blog.avatar}`} alt={blog.author} className="blog-avatar" />
              <div>
                <p className="blog-author">{blog.author}</p>
                <p className="blog-date">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

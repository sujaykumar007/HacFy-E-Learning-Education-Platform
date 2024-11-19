import React, { useState } from 'react';
import './Blog.css';


export default function Blog() {
  // Sample data - In real app, this would come from an API/database
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with React Development",
      category: "Educational",
      type: "featured",
      content: "Learn the basics of React development...",
      tags: ["react", "javascript", "beginners"],
      downloads: [{ name: "React Cheatsheet", url: "#" }],
      likes: 20,
      comments: []
    },
    // ... add more sample posts
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Categories for filter
  const categories = [
    "Educational Content",
    "Industry News",
    "Company Updates",
    "Interactive Tutorials"
  ];

  return (
    <div className="blog-container">
      {/* Header with Search and Categories */}
      <header className="blog-header">
        <h1>HacFy Blog</h1>
        <input
          type="search"
          placeholder="Search articles..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? 'active' : ''}
            >
              {category}
            </button>
          ))}
        </div>
      </header>

      {/* Featured Post Section */}
      <section className="featured-post">
        <h2>Featured Post</h2>
        {posts.filter(post => post.type === 'featured').map(post => (
          <div key={post.id} className="featured-post-card">
            <h3>{post.title}</h3>
            <div className="tags">
              {post.tags.map(tag => (
                <span key={tag} className="tag">#{tag}</span>
              ))}
            </div>
            <p>{post.content}</p>
            <div className="engagement">
              <button className="like-btn">❤️ {post.likes}</button>
              <button className="comment-btn">💬 {post.comments.length}</button>
            </div>
          </div>
        ))}
      </section>

      {/* Main Content Grid */}
      <div className="blog-grid">
        {/* Educational Resources Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Educational Resources</h2>
            <p>Comprehensive learning materials to help you master development skills</p>
          </div>
          <div className="cards-grid">
            {/* Getting Started Card */}
            <div className="content-card getting-started">
              <div className="card-header">
                <div className="card-icon">🚀</div>
                <div className="card-title">
                  <h3>Getting Started Guides</h3>
                  <p>Perfect for beginners starting their coding journey</p>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>React Fundamentals</li>
                  <li>JavaScript Basics</li>
                  <li>Web Development 101</li>
                </ul>
                <button className="card-btn">Explore Guides</button>
              </div>
            </div>

            {/* Best Practices Card */}
            <div className="content-card best-practices">
              <div className="card-header">
                <div className="card-icon">📚</div>
                <div className="card-title">
                  <h3>Best Practices</h3>
                  <p>Learn industry-standard coding practices</p>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>Code Architecture</li>
                  <li>Design Patterns</li>
                  <li>Clean Code Tips</li>
                </ul>
                <button className="card-btn">View Articles</button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry News Section */}
        <section className="content-section">
          <div className="section-header">
            <h2>Industry News & Updates</h2>
            <p>Stay current with the latest developments in tech</p>
          </div>
          <div className="cards-grid">
            {/* Latest Updates Card */}
            <div className="content-card updates">
              <div className="card-header">
                <div className="card-icon">📰</div>
                <div className="card-title">
                  <h3>Latest Updates</h3>
                  <p>Breaking news and recent developments</p>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>Framework Updates</li>
                  <li>New Releases</li>
                  <li>Breaking Changes</li>
                </ul>
                <button className="card-btn">Read Updates</button>
              </div>
            </div>

            {/* Tech Trends Card */}
            <div className="content-card trends">
              <div className="card-header">
                <div className="card-icon">📈</div>
                <div className="card-title">
                  <h3>Tech Trends</h3>
                  <p>Emerging technologies and future insights</p>
                </div>
              </div>
              <div className="card-content">
                <ul>
                  <li>Emerging Technologies</li>
                  <li>Industry Trends</li>
                  <li>Future Predictions</li>
                </ul>
                <button className="card-btn">Explore Trends</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Stay Updated!</h2>
        <p>Subscribe to our newsletter for the latest updates</p>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button type="submit" className="subscribe-btn">
            Subscribe
          </button>
        </form>
      </section>

      {/* Sidebar with Categories and Tags */}
     
    </div>
  );
}

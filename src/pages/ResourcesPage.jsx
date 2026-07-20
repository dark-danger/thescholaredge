import React from 'react';
import BlogSection from '../components/BlogSection';

export default function ResourcesPage() {
  return (
    <div className="page-wrapper resources-page">
      <div className="page-header-banner">
        <div className="container">
          <span className="badge badge-gold">Academic Knowledge Repository</span>
          <h1>Resources, Tutorials & Research Articles</h1>
          <p>SEO-optimized research guides, statistical software tutorials, and academic publishing tips for scholars.</p>
        </div>
      </div>

      <BlogSection />
    </div>
  );
}

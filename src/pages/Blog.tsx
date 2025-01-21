import React, { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <PageHeader 
        title="Latest Updates" 
        subtitle="Stay informed about the latest trends and insights in signage and design"
        backgroundImage="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80"
      />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Have Questions About Our Services?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about how we can help transform your business with professional lighting and signage solutions.
            </p>
            <a 
              href="tel:+12245849588"
              className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Us: +1 224 584 9588
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
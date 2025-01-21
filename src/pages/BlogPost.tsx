import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Phone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { blogPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    navigate('/blog');
    return null;
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div>
      <PageHeader 
        title={post.title}
        backgroundImage={post.image}
      />
      
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <div className="flex items-center justify-between text-sm mb-6">
                <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <div className="flex items-center text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 hover:text-green-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <Link 
              to="/blog"
              className="flex items-center text-green-600 hover:text-green-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <a 
                href="tel:+12245849588"
                className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: +1 224 584 9588
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
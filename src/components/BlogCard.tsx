import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300">
      <Link to={`/blog/${post.id}`} className="block relative group">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {post.category}
        </span>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {post.date}
        </div>
        <Link to={`/blog/${post.id}`}>
          <h2 className="text-2xl font-bold mb-3 hover:text-green-600 transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
        >
          Read More
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
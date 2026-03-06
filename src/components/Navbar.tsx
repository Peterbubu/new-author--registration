import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zm0 3.84L18.16 7 12 9.16 5.84 7 12 5.84zM2 17l10 5 10-5M12 18.16l-6.16-3 6.16-3 6.16 3-6.16 3z"/>
              </svg>
            </div>
            <span className="text-lg font-bold text-[#1E293B]">点众创作者中心</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">帮助文档</a>
          <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">联系客服</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const AuthorInfoPage: React.FC = () => {
  const [penName, setPenName] = useState('');
  const [genre, setGenre] = useState('玄幻仙侠');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!penName || !bio) {
      alert('请填写完整信息');
      return;
    }
    setLoading(true);
    // 模拟提交
    setTimeout(() => {
      setLoading(false);
      navigate('/workbench');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 pt-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">填写作者基本信息</h1>
              <p className="text-gray-600">请真实填写，笔名审核通过后每90天可修改一次</p>
            </div>
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-2 border-gray-300">
                    {avatar ? (
                      <img src={avatar} alt="头像" className="w-full h-full object-cover" />
                    ) : (
                      <div className="text-gray-400">
                        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white shadow-md hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleAvatarUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
                <h3 className="text-lg font-medium text-[#1E293B]">作者笔名</h3>
                <input
                  type="text"
                  value={penName}
                  onChange={(e) => setPenName(e.target.value)}
                  placeholder="例如：星空下的露水"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 mt-2 w-full max-w-xs"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">创作分类 (主攻方向)</label>
                <div className="flex flex-wrap gap-3">
                  {['玄幻仙侠', '都市青春', '悬疑惊悚', '科幻世界'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setGenre(item)}
                      className={`px-4 py-2 rounded-lg transition-colors ${genre === item ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">个人简介</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="介绍一下你的写作风格吧，让编辑更容易发现你的光芒..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={() => navigate('/identity-guide')}
                  className="border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  返回修改
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ) : null}
                  {loading ? '提交中...' : '完成入驻并进入工作台'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorInfoPage;
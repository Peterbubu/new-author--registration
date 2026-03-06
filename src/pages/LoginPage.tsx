import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LoginPage: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const navigate = useNavigate();

  const handleSendCode = () => {
    if (!phone || !/^1[3-9]\d{9}$/.test(phone)) {
      alert('请输入正确的手机号');
      return;
    }
    setCountdown(60);
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSubmit = () => {
    if (!phone || !code) {
      alert('请输入手机号和验证码');
      return;
    }
    setLoading(true);
    // 模拟登录验证
    setTimeout(() => {
      setLoading(false);
      // 模拟不同用户类型
      if (phone === '13800138001') {
        // 老作者
        navigate('/workbench');
      } else if (phone === '13800138002') {
        // 新作者
        navigate('/identity-guide');
      } else {
        // 新作者
        navigate('/identity-guide');
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center pt-20 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#1E293B] mb-2">欢迎加入创作者平台 - Unique Test String 67890</h1>
            <p className="text-gray-600">登录或注册您的账号</p>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">手机号</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">验证码</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="请输入验证码"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 flex-1"
                />
                <button
                  onClick={handleSendCode}
                  disabled={countdown > 0}
                  className={`py-2 px-4 rounded-lg font-medium transition-all ${countdown > 0 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-secondary text-white hover:bg-secondary/90'}`}
                >
                  {countdown > 0 ? `${countdown}s后重发` : '获取验证码'}
                </button>
              </div>
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg w-full flex items-center justify-center gap-2"
            >
              {loading ? (
                <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              ) : null}
              {loading ? '登录中...' : '登录/注册'}
            </button>
            <div className="text-center text-sm text-gray-600">
              登录即表示您同意
              <a href="#" className="text-primary hover:underline">用户协议</a>
              和
              <a href="#" className="text-primary hover:underline">隐私政策</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
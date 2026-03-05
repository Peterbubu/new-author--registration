import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const InviteCodePage: React.FC = () => {
  const [inviteCode, setInviteCode] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerifyCode = () => {
    if (!inviteCode) {
      alert('请输入邀请码');
      return;
    }
    setLoading(true);
    // 模拟邀请码验证
    setTimeout(() => {
      setLoading(false);
      // 验证成功，进入签约引导流程
      navigate('/sign-contract-step1');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 pt-20 px-4">
        <div className="container mx-auto max-w-md">
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">邀请码核验</h1>
              <p className="text-gray-600">请输入您的邀请码，验证后进入签约绿色通道</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">邀请码</label>
                <input
                  type="text"
                  value={inviteCode}
                  onChange={(e) => setInviteCode(e.target.value)}
                  placeholder="例如：INV-8890-SHARK"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>
              <button
                onClick={handleVerifyCode}
                disabled={loading}
                className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg w-full flex items-center justify-center gap-2"
              >
                {loading ? (
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ) : null}
                {loading ? '验证中...' : '验证邀请码'}
              </button>
              <div className="text-center text-sm text-gray-600">
                没有邀请码？
                <button 
                  onClick={() => navigate('/author-info')}
                  className="text-primary hover:underline ml-1"
                >
                  选择常规入驻
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteCodePage;
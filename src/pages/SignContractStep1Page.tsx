import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignContractStep1Page: React.FC = () => {
  const [penName, setPenName] = useState('');
  const [realName, setRealName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!penName || !realName || !idNumber) {
      alert('请填写完整信息');
      return;
    }
    setLoading(true);
    // 模拟提交
    setTimeout(() => {
      setLoading(false);
      navigate('/sign-contract-step2');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 pt-20 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* 进度条 */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">1</div>
              <span className="text-sm text-primary mt-2">作者信息</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full bg-primary" style={{ width: '0%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-medium">2</div>
              <span className="text-sm text-gray-500 mt-2">上传稿件</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full bg-primary" style={{ width: '0%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-medium">3</div>
              <span className="text-sm text-gray-500 mt-2">申请签约</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">第一步：完善身份与实名</h1>
              <p className="text-gray-600">签约作品需要根据国家相关规定进行实名认证</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">作者笔名</label>
                  <input
                    type="text"
                    value={penName}
                    onChange={(e) => setPenName(e.target.value)}
                    placeholder="新作者XXXX"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">实名姓名</label>
                  <input
                    type="text"
                    value={realName}
                    onChange={(e) => setRealName(e.target.value)}
                    placeholder="与身份证一致"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">身份证号</label>
                <input
                  type="text"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="18位证件号码"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                />
              </div>
              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">
                      检测到您现有有效《伯乐邀请码》，签约申请系统将自动为您分配专属编辑，审核时间预计缩短为1-3个工作日。
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={() => navigate('/invite-code')}
                  className="border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
                >
                  上一步
                </button>
                <button
                  onClick={handleNext}
                  disabled={loading}
                  className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  {loading ? (
                    <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ) : null}
                  {loading ? '提交中...' : '下一步：上传作品'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContractStep1Page;
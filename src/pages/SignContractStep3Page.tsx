import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignContractStep3Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
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
          {/* 进度条 */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">1</div>
              <span className="text-sm text-primary mt-2">作者信息</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full bg-primary" style={{ width: '100%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">2</div>
              <span className="text-sm text-primary mt-2">上传稿件</span>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-4">
              <div className="h-full bg-primary" style={{ width: '100%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-medium">3</div>
              <span className="text-sm text-primary mt-2">申请签约</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">确认申请签约</h1>
              <p className="text-gray-600">请确认以上信息真实有效。提交后，系统将锁定您的编辑邀请码并提交至内部审核队列。</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">申请类型</span>
                <span className="font-medium text-[#1E293B]">保底/分成融合签约</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="text-gray-600">邀请码编号</span>
                <span className="font-medium text-[#1E293B]">INV-8890-SHARK</span>
              </div>
            </div>
            
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => navigate('/sign-contract-step2')}
                className="border border-primary text-primary font-medium py-2 px-4 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                上一步
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
                {loading ? '提交中...' : '确认无误，提交签约申请'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContractStep3Page;
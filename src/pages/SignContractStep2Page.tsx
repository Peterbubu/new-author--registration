import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const SignContractStep2Page: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setLoading(true);
    // 模拟提交
    setTimeout(() => {
      setLoading(false);
      navigate('/sign-contract-step3');
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
              <div className="h-full bg-primary" style={{ width: '0%' }}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center font-medium">3</div>
              <span className="text-sm text-gray-500 mt-2">申请签约</span>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-[#1E293B] mb-2">第二步：提交作品样本</h1>
              <p className="text-gray-600">支持本地导入Word或直接在线创建文本</p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#1E293B] mb-2">导入文件</h3>
                  <p className="text-sm text-gray-600 text-center">支持doc / docx</p>
                </div>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-[#1E293B] mb-2">在线创建</h3>
                  <p className="text-sm text-gray-600 text-center">直接在网页端码字</p>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-[#1E293B]">我的连载小说测试作品.docx</h4>
                    <p className="text-xs text-gray-500">2.4 MB · 已上传</p>
                  </div>
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end space-x-4 pt-4">
                <button
                  onClick={() => navigate('/sign-contract-step1')}
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
                  {loading ? '提交中...' : '下一步：提交正式签约申请'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignContractStep2Page;
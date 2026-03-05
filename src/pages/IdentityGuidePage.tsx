import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const IdentityGuidePage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegularEntry = () => {
    navigate('/author-info');
  };

  const handleInviteEntry = () => {
    navigate('/invite-code');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 pt-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-2xl font-bold text-[#1E293B] mb-2">欢迎加入，新作者！</h1>
            <p className="text-gray-600">在开始之前，我们需要确认您的入驻路径</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary"
              onClick={handleRegularEntry}
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">常规入驻</h3>
                <p className="text-gray-600 text-sm">我没有邀请码，先填报个人信息入驻工作台，后续再申请签约。</p>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg cursor-pointer hover:border-primary"
              onClick={handleInviteEntry}
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-2">邀请码签约</h3>
                <p className="text-gray-600 text-sm">我有伯乐邀请码，希望能直接进入签约绿色通道，快速开启连载。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdentityGuidePage;
import React from 'react';
import Navbar from '../components/Navbar';

const WorkbenchPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <div className="flex-1 pt-20 px-4">
        <div className="container mx-auto">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#1E293B] mb-2">创作者工作台</h1>
            <p className="text-gray-600">欢迎回来，您的创作数据概览</p>
          </div>
          
          {/* 入驻进度状态 */}
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1E293B]">入驻进度</h2>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">审核中</span>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">作者信息</span>
                  <span className="text-sm text-green-600">已完成</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">上传稿件</span>
                  <span className="text-sm text-green-600">已完成</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">申请签约</span>
                  <span className="text-sm text-yellow-600">审核中</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-primary rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>
              <div className="text-sm text-gray-600 mt-4">
                <p>审核预计需要1-3个工作日，请耐心等待。审核通过后，您将收到系统通知。</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">总作品数</p>
                  <h3 className="text-2xl font-bold text-[#1E293B]">5</h3>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">总阅读量</p>
                  <h3 className="text-2xl font-bold text-[#1E293B]">12,345</h3>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">总收益</p>
                  <h3 className="text-2xl font-bold text-[#1E293B]">¥1,234</h3>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#1E293B]">我的作品</h2>
              <button className="bg-primary text-white font-medium py-2 px-4 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                新建作品
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">作品名称</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">类型</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">状态</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">阅读量</th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">操作</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">《都市传奇》</td>
                    <td className="py-3 px-4">都市</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">连载中</span>
                    </td>
                    <td className="py-3 px-4">5,678</td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline mr-3">编辑</button>
                      <button className="text-gray-600 hover:underline">查看</button>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">《修仙之路》</td>
                    <td className="py-3 px-4">玄幻</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">连载中</span>
                    </td>
                    <td className="py-3 px-4">3,456</td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline mr-3">编辑</button>
                      <button className="text-gray-600 hover:underline">查看</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">《星际穿越》</td>
                    <td className="py-3 px-4">科幻</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">已完结</span>
                    </td>
                    <td className="py-3 px-4">3,211</td>
                    <td className="py-3 px-4">
                      <button className="text-primary hover:underline mr-3">编辑</button>
                      <button className="text-gray-600 hover:underline">查看</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkbenchPage;
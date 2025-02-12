'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Filter } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// 模拟新闻数据
const newsData = [
  {
    id: 1,
    title: "多鲸科技与头部自动驾驶企业达成战略合作",
    category: "公司动态",
    date: "2024-02-01",
    summary: "日前，多鲸科技与国内头部自动驾驶企业签署战略合作协议，将在自动驾驶数据服务领域展开深度合作...",
    imageUrl: "/api/placeholder/400/300"
  },
  {
    id: 2,
    title: "2024多鲸科技AI数据服务高峰论坛成功举办",
    category: "行业活动",
    date: "2024-01-15",
    summary: "多鲸科技联合行业合作伙伴成功举办2024 AI数据服务高峰论坛，共同探讨AI发展趋势与数据价值...",
    imageUrl: "/api/placeholder/400/300"
  },
  // 更多新闻条目...
];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 分类过滤
  const filteredNews = selectedCategory === "all" 
    ? newsData 
    : newsData.filter(news => news.category === selectedCategory);

  // 分页
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const currentNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部横幅 */}
      <div className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">新闻动态</h1>
          <p className="text-xl opacity-80">了解多鲸科技最新动态与行业资讯</p>
        </div>
      </div>

      {/* 新闻内容区域 */}
      <div className="container mx-auto px-4 py-12">
        {/* 筛选工具栏 */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <Filter className="text-blue-900" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择分类" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">全部分类</SelectItem>
                <SelectItem value="公司动态">公司动态</SelectItem>
                <SelectItem value="行业活动">行业活动</SelectItem>
                <SelectItem value="技术观点">技术观点</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 新闻列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img 
                src={news.imageUrl} 
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                    {news.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{news.summary}</p>
                <Button variant="outline" className="text-blue-600 hover:text-blue-700">
                  阅读更多 <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 分页 */}
        {/* {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            {[...Array(totalPages)].map((_, index) => (
              <Button
                key={index}
                variant={currentPage === index + 1 ? "default" : "outline"}
                className={`w-10 h-10 ${
                  currentPage === index + 1 
                    ? "bg-blue-600" 
                    : "text-blue-600 hover:text-blue-700"
                }`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
};

export default NewsPage;
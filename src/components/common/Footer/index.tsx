import Link from 'next/link'
import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo-white.png"
              alt="多鲸科技"
              width={120}
              height={40}
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 mt-4 max-w-md">
              河南多鲸信息技术有限公司专注于人工智能数据要素服务、AI应用落地和行业人才培养，
              致力于打造人工智能数据服务和应用落地综合解决方案提供商。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  服务介绍
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white transition-colors">
                  合作伙伴
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                  加入我们
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">联系我们</h3>
            <ul className="space-y-2 text-gray-400">
              <li>电话：15639917377</li>
              <li>邮箱：lilijun@iduojing.com</li>
              <li>地址：河南省郑州市高新区河南大学科技园西区1号孵化楼301</li>
              <li className="pt-4">
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">微信</span>
                    {/* WeChat Icon */}
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <span className="sr-only">微博</span>
                    {/* Weibo Icon */}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} 河南多鲸信息技术有限公司. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}
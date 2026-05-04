import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-[#5b21b6] to-[#2563eb] text-white pt-12 pb-8 font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
          
          {/* Column 1: Logo & Brand Action */}
          <div className="flex flex-col gap-4">
            <img src="" alt="Logo" className="w-32 h-auto object-contain" />
            <p className="font-bold text-[11px] tracking-widest uppercase mt-2">BE HAPPY, BE A STAR</p>
            <div className="flex gap-2 mt-2">
              <button className="bg-yellow-400 text-black font-bold py-2 px-5 rounded text-xs uppercase hover:bg-yellow-500 transition-colors shadow-sm">
                Đặt vé
              </button>
              <button className="border border-white/70 text-white font-bold py-2 px-4 rounded text-xs uppercase hover:bg-white hover:!text-blue-900 transition-colors shadow-sm">
                Đặt bắp nước
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-2.5 mt-4">
              {/* Facebook */}
              <div className="w-7 h-7 rounded-full bg-white text-blue-900 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </div>

              {/* YouTube */}
              <div className="w-7 h-7 rounded-full bg-white text-blue-900 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </div>

              {/* TikTok */}
              <div className="w-7 h-7 rounded-full bg-white text-blue-900 flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                  <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                </svg>
              </div>

            </div>
            
            
          </div>

          {/* Column 2: Account & Movies */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold uppercase text-sm mb-3">Tài khoản</h3>
              <ul className="text-[13px] space-y-2 text-gray-200">
                <li><Link to="/dang-nhap" className="hover:text-yellow-400 transition-colors">Đăng nhập</Link></li>
                <li><Link to="/dang-ky" className="hover:text-yellow-400 transition-colors">Đăng ký</Link></li>
                <li><Link to="/membership" className="hover:text-yellow-400 transition-colors">Membership</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm mb-3">Xem phim</h3>
              <ul className="text-[13px] space-y-2 text-gray-200">
                <li><Link to="/phim-dang-chieu" className="hover:text-yellow-400 transition-colors">Phim đang chiếu</Link></li>
                <li><Link to="/phim-sap-chieu" className="hover:text-yellow-400 transition-colors">Phim sắp chiếu</Link></li>
                <li><Link to="/suat-chieu-dac-biet" className="hover:text-yellow-400 transition-colors">Suất chiếu đặc biệt</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Events & About */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-bold uppercase text-sm mb-3">Thuê sự kiện</h3>
              <ul className="text-[13px] space-y-2 text-gray-200">
                <li><Link to="/thue-rap" className="hover:text-yellow-400 transition-colors">Thuê rạp</Link></li>
                <li><Link to="/thue-khac" className="hover:text-yellow-400 transition-colors">Các loại hình cho thuê khác</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold uppercase text-sm mb-3">Rap phim</h3>
              <ul className="text-[13px] space-y-2 text-gray-200">
                <li><Link to="/gioi-thieu" className="hover:text-yellow-400 transition-colors">Giới thiệu</Link></li>
                <li><Link to="/lien-he" className="hover:text-yellow-400 transition-colors">Liên hệ</Link></li>
                <li><Link to="/tuyen-dung" className="hover:text-yellow-400 transition-colors">Tuyển dụng</Link></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Other Services */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-3">Dịch vụ khác</h3>
            <ul className="text-[13px] space-y-2 text-gray-200">
              <li><Link to="/nha-hang" className="hover:text-yellow-400 transition-colors">Nhà hàng</Link></li>
              <li><Link to="/kidzone" className="hover:text-yellow-400 transition-colors">Kidzone</Link></li>
              <li><Link to="/bowling" className="hover:text-yellow-400 transition-colors">Bowling</Link></li>
              <li><Link to="/billiards" className="hover:text-yellow-400 transition-colors">Billiards</Link></li>
              <li><Link to="/gym" className="hover:text-yellow-400 transition-colors">Gym</Link></li>
              <li><Link to="/nha-hat-opera" className="hover:text-yellow-400 transition-colors">Nhà hát Opera</Link></li>
              <li><Link to="/coffee" className="hover:text-yellow-400 transition-colors">Coffee</Link></li>
            </ul>
          </div>

          {/* Column 5: Cinema System */}
          <div>
            <h3 className="font-bold uppercase text-sm mb-3">Hệ thống rạp</h3>
            <ul className="text-[13px] space-y-2 text-gray-200">
              <li><Link to="/he-thong-rap" className="hover:text-yellow-400 transition-colors">Tất cả hệ thống rạp</Link></li>
              <li><Link to="/quoc-thanh" className="hover:text-yellow-400 transition-colors">Mỹ đình (Hà Nội)</Link></li>

            </ul>
          </div>
        </div>

        {/* Divider & Bottom Info */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-[13px] text-gray-300 gap-4 mb-0">
            <p>© 2026. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/chinh-sach" className="hover:text-yellow-400 transition-colors">Chính sách bảo mật</Link>
              <Link to="/tin-tuc" className="hover:text-yellow-400 transition-colors">Tin điện ảnh</Link>
              <Link to="/faq" className="hover:text-yellow-400 transition-colors">Hỏi và đáp</Link>
            </div>
          </div>
          
          <div className="flex flex-col items-center text-center text-[11px] text-gray-300/80 gap-1.5 leading-relaxed">
            
            <img src="/images/bocongthuong.png" alt="Bộ Công Thương" className="h-40 mb-1 opacity-90" />
            <p className="uppercase font-bold text-white">CÔNG TY CỔ PHẦN GIẢI TRÍ PHÁT HÀNH PHIM - RẠP CHIẾU PHIM</p>
            <p>ĐỊA CHỈ: 135 HAI BÀ TRƯNG, PHƯỜNG BẾN NGHÉ, QUẬN 1, TP.HCM</p>
            <p>GIẤY CNĐKDN SỐ: 0312742744, ĐĂNG KÝ LẦN ĐẦU NGÀY 18/04/2014, ĐĂNG KÝ THAY ĐỔI LẦN THỨ 2 NGÀY 15/09/2014, CẤP BỞI SỞ KH&ĐT TP.HCM</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
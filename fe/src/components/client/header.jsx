import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-[#0f172a] text-white font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Top Bar */}
        <div className="flex flex-wrap items-center justify-between py-4 gap-4">
          
          {/* Logo & Buttons */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex-shrink-0">
              <img src="/images/favicon.svg" alt="Logo" className="h-10 w-auto object-contain" />
            </Link>
            <div className="hidden lg:flex gap-3">
              <button className="bg-[#fcd34d] hover:bg-yellow-500 text-black font-bold py-2.5 px-4 rounded flex items-center gap-2 text-sm uppercase transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" /><path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                Đặt vé ngay
              </button>
              <button className="bg-[#8b5cf6] hover:bg-purple-600 text-white font-bold py-2.5 px-4 rounded flex items-center gap-2 text-sm uppercase transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                Đặt bắp nước
              </button>
            </div>
          </div>

          
          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input 
                type="text" 
                placeholder="Tìm phim, rạp" 
                className="bg-white rounded-full pl-5 pr-10 py-2 text-sm !text-black focus:outline-none w-64 shadow-inner" 
              />
              <button className="absolute right-3 top-2 !text-gray-500 hover:text-black transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </div>
            
            <Link to="/login" >
            <button className="flex items-center gap-2 hover:text-yellow-400 text-sm font-semibold transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Đăng nhập
            </button>
            </Link>
    
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-700/50"></div>

      {/* Navigation Bar */}
      <div className="max-w-[1200px] mx-auto px-4">
        <nav className="flex flex-wrap items-center justify-between py-3 text-[13px] md:text-sm font-bold uppercase tracking-wide">
          <div className="flex gap-8">
            <NavLink to="/chon-rap" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              Chọn rạp
            </NavLink>
            <NavLink to="/lich-chieu" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Lịch chiếu
            </NavLink>
          </div>
          <div className="flex gap-6 md:gap-8 mt-3 md:mt-0">
            <NavLink to="/khuyen-mai" className="hover:text-yellow-400 transition-colors">Khuyến mãi</NavLink>
            <NavLink to="/su-kien" className="hover:text-yellow-400 transition-colors">Tổ chức sự kiện</NavLink>
            <NavLink to="/dich-vu" className="hover:text-yellow-400 transition-colors">Dịch vụ giải trí khác</NavLink>
            <NavLink to="/gioi-thieu" className="hover:text-yellow-400 transition-colors">Giới thiệu</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
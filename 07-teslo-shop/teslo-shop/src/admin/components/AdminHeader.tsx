import React, { useRef, type KeyboardEvent } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '@/auth/store/auth.store';

export const AdminHeader: React.FC = () => {

  const { user } = useAuthStore();
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== 'Enter') return;
    const query = inputRef.current?.value;
    if (!query) {
      navigate('/admin/products')
      return;
    }
    navigate(`/admin/products?query=${query}`)
  }


  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 h-18">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              ref={inputRef}
              onKeyDown={handleSearch}
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm cursor-pointer hover:shadow-lg transition-shadow">
            {user?.fullName.substring(0, 2)}
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react'
import { 
  Home as HomeIcon, 
  Calendar, 
  UserPlus, 
  Users, 
  MessageCircle, 
  HelpCircle, 
  User2 
} from 'lucide-react'

// Components
const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav className="sticky top-0 left-0 right-0 bg-white shadow-md z-50 flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold text-blue-600 flex items-center">
          <span className="mr-2">🏥</span>
          The Life Hospital
        </div>
        
        <div className="relative ml-10">
          <input 
            type="text" 
            placeholder="Search patients, doctors, records..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-80 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex space-x-4">
          <button className="text-gray-600 hover:text-blue-600 relative">
            <HelpCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <button className="text-gray-600 hover:text-blue-600 relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
        
        <div className="border-l pl-4">
          <button className="flex items-center space-x-2 bg-blue-100 px-3 py-2 rounded-full hover:bg-blue-200 transition">
            <User2 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Dr. Smith</span>
          </button>
        </div>
      </div>
    </nav>
  )
}


export default NavBar
import React from 'react'


const Navbar = () => {
  return (
    <>
    <nav class="gradient-bg text-white shadow-lg">
        <div class="container mx-auto px-4 py-3 flex justify-between items-center">
            <div class="flex items-center space-x-2">
                <i class="fas fa-gamepad text-2xl"></i>
                <a href="#" class="text-xl font-bold" onclick="showHomePage()">GameSphere</a>
            </div>
            <div class="flex items-center space-x-4">
                <button onclick="showCreatePostPage()" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <i class="fas fa-plus mr-2"></i> New Post
                </button>
                <div class="relative">
                    <input type="text" id="searchInput" placeholder="Search posts..." 
                           class="bg-white bg-opacity-20 placeholder-white text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 w-64"/>
                    <i class="fas fa-search absolute right-3 top-3 text-white"></i>
                </div>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
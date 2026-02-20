import {
  Menu,
  Search,
  Plus,
  GitPullRequest,
  CircleDot,
  Inbox,
  Dog, 
  BookMarked
} from "lucide-react";

function Navbar() {
  return (
    <div className="h-14 bg-[#050607] border-b border-[#30363d] px-4 flex items-center justify-between">

      <div className="flex items-center gap-4">
        <Menu size={20} className="cursor-pointer" />

        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center cursor-pointer">
          <img
            src="https://toppng.com/uploads/preview/github-logo-png-11659780076mpcdukkst7.png"
            alt="GitHub Logo"
            className="w-5 h-5"
          />
        </div>

        <span className="text-white font-semibold text-sm">
          Dashboard
        </span>
      </div>

      <div className="flex items-center gap-3">


        <div className="flex items-center bg-[#161b22] border border-[#30363d] rounded-md px-3 py-1.5 w-72">
          <Search size={14} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Type / to search"
            className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-full"
          />
        </div>


        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <Dog size={18} />
        </div>

        <div className="h-6 w-px bg-[#30363d]"></div>

        
        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <Plus size={18} />
        </div>


        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <CircleDot size={18} />
        </div>


        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <GitPullRequest size={18} />
        </div>


        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <BookMarked size={18} />
        </div>


        <div className="p-2 border border-[#30363d] rounded-md hover:bg-[#161b22] cursor-pointer">
          <Inbox size={18} />
        </div>


       <div className="w-8 h-8 rounded-full overflow-hidden border border-[#30363d] cursor-pointer">
  <img
    src="https://avatars.githubusercontent.com/u/231606493?v=4&size=64"
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </div>
  );
}

export default Navbar;

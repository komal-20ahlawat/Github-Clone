import { Search, Plus } from "lucide-react";

function Sidebar() {
  return (
    <div className="h-[calc(100vh-56px)] bg-[#0d1117] border-r border-[#30363d] p-4 overflow-y-auto">


      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-white">
          Top repositories
        </h2>

        <button className="flex items-center gap-1 bg-[#238636] hover:bg-[#2ea043] text-white text-xs px-3 py-1 rounded-md">
          <Plus size={14} />
          New
        </button>
      </div>

    
      <div className="flex items-center bg-[#0d1117] border border-[#30363d] rounded-md px-2 py-1.5 mb-4">
        <Search size={14} className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Find a repository..."
          className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-full"
        />
      </div>


      <div className="space-y-3 text-sm">

        {[
          "komal-20ahlawat/komal-20ahlawat",
          "komal-20ahlawat/HIM",
          "komal-20ahlawat/FlashCard",
          "komal-20ahlawat/Kaivora",
          "komal-20ahlawat/Valentine",
          "komal-20ahlawat/Image-Generator",
          "komal-20ahlawat/Snake-Game",
        ].map((repo, index) => (
          <div key={index} className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
        <div className="w-4 h-4 rounded-full overflow-hidden border border-[#30363d]">
    <img
    src="https://avatars.githubusercontent.com/u/231606493?v=4&size=64"
    alt="Repo Owner"
    className="w-full h-full object-cover"/>
    </div>
    <span>{repo}</span>
    </div>
    ))}
    </div>

      <div className="mt-4 text-xs text-gray-400 hover:text-white cursor-pointer">
        Show more
      </div>
    </div>
  );
}

export default Sidebar;

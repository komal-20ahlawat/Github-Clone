function RightSide() {
  return (
    <div className="w-300px bg-[#050607] border-l border-[#050607] p-7">

      <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">

        <h2 className="text-md font-semibold text-white mb-4">
          Latest from our changelog
        </h2>

        <div className="relative border-l border-[#30363d] pl-5 space-y-4">

 
          <div className="relative">
            <p className="text-xs text-[#8b949e]">9 hours ago</p>
            <p className="text-sm text-white mt-1 ">
              Workflow dispatch API now returns run IDs
            </p>
          </div>

          <div className="relative">
            <p className="text-xs text-[#8b949e]">9 hours ago</p>
            <p className="text-sm text-white mt-1 ">
              GitHub Copilot support in Zed generally available
            </p>
          </div>

          <div className="relative">
            <p className="text-xs text-[#8b949e]">10 hours ago</p>
            <p className="text-sm text-white mt-1 ">
              Changes to test merge commit generation for pull...
            </p>
          </div>

          <div className="relative">
            <p className="text-xs text-[#8b949e]">12 hours ago</p>
            <p className="text-sm text-white mt-1">
              Copilot coding agent model picker for Copilot Business...
            </p>
          </div>

        </div>

        <div className="mt-4 text-xs text-[#8b949e] hover:text-[#c9d1d9] transition cursor-pointer">
         View changelog →
        </div>

      </div>

    </div>
  );
}

export default RightSide;

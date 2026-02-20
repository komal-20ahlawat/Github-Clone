import {
  MessageSquare,
  ChevronDown,
  Plus,
  Send,
  CloudUpload,
  CircleDot,
  FileText,
  GitBranch,
  GitPullRequest,
  Star,
  TrendingUp,
} from "lucide-react";

function Middle() {
  return (
    <div className="h-[calc(100vh-56px)] bg-[#050607] px-8 py-6 overflow-y-auto">

      <h1 className="text-xl font-semibold text-white mb-6">Home</h1>

      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-5">
        <input
          type="text"
          placeholder="Ask anything"
          className="w-full bg-transparent text-sm outline-none placeholder-gray-400 text-white"/>

        <div className="flex items-center justify-between mt-7">

          <div className="flex items-center gap-3">
    
            <button className="flex items-center gap-2 px-3 py-2 border border-[#30363d] rounded-md hover:bg-[#21262d] text-sm">
              <MessageSquare size={16} />
              Ask
              <ChevronDown size={14} />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 border border-[#30363d] rounded-md hover:bg-[#21262d] text-sm">
              <FileText size={16} />
              All repositories
              <ChevronDown size={14} />
            </button>

            <button className="p-2 border border-[#30363d] rounded-md hover:bg-[#21262d]">
              <Plus size={16} />
            </button>
          </div>

          <button className="text-gray-400 hover:text-white">
            <Send size={20} />
          </button>
        </div>
      </div>

    
      <div className="flex items-center gap-4 mb-8 flex-wrap">

        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#30363d] hover:bg-[#21262d] text-sm">
          <CloudUpload size={16} />
          Task
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#30363d] hover:bg-[#21262d] text-sm">
          <CircleDot size={16} />
          Create issue
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#30363d] hover:bg-[#21262d] text-sm">
          <FileText size={16} />
          Write code
          <ChevronDown size={14} />
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#30363d] hover:bg-[#21262d] text-sm">
          <GitBranch size={16} />
          Git
          <ChevronDown size={14} />
        </button>

        <button className="flex items-center gap-2 px-5 py-2 rounded-xl border border-[#30363d] hover:bg-[#21262d] text-sm">
          <GitPullRequest size={16} />
          Pull requests
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">Feed</h2>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#21262d] border border-[#30363d] rounded-md text-sm hover:bg-[#30363d]">
          Filter
        </button>
      </div>

      <div className="bg-[#161b22] border border-[#30363d] rounded-xl">


        <div className="flex items-center gap-2 px-6 py-4 border-b border-[#30363d] text-sm text-gray-300">
          <TrendingUp size={16} />
          <span>Trending repositories</span>
          <span className="text-gray-500">·</span>
          <span className="text-blue-400 hover:underline cursor-pointer">
            See more
          </span>
        </div>

        <div className="px-6 py-5 border-b border-[#30363d]">
          <div className="flex justify-between items-start">

            <div>
              <p className="text-white font-semibold">
                jamiepine/voicebox
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                The open-source voice synthesis studio powered by Qwen3-TTS.
              </p>

              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  TypeScript
                </div>

                <div className="flex items-center gap-1">
                  <Star size={14} />
                  6.6k
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-1.5 bg-[#21262d] border border-[#30363d] rounded-md text-sm hover:bg-[#30363d]">
              <Star size={14} />
              Star
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        <div className="px-6 py-5">
          <div className="flex justify-between items-start">

            <div>
              <p className="text-white font-semibold">
                HKUDS/ClawWork
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                "ClawWork: OpenClaw as Your AI Coworker – 💰 $10K earned in 7 Hours"
              </p>

              <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-700"></span>
                  Python
                </div>

                <div className="flex items-center gap-1">
                  <Star size={14} />
                  4.2k
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 px-4 py-1.5 bg-[#21262d] border border-[#30363d] rounded-md text-sm hover:bg-[#30363d]">
              <Star size={14} />
              Star
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#161b22] border border-[#30363d] rounded-xl mt-6 p-6">
        <p className="text-gray-400 text-sm mb-4">Recommended for you</p>

        <div className="flex justify-between items-start">
          <div>
            <p className="text-white font-semibold">
              SKempin/reactjs-tmdb-app
            </p>
            <p className="text-gray-400 mt-2 text-sm">
              Responsive React 'The Movie Database' (TMDb) App
            </p>
             <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-yellow-300"></span>
                  JavaScript
                </div>

                <div className="flex items-center gap-1">
                  <Star size={14} />
                  953
                </div>
              </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-1.5 bg-[#21262d] border border-[#30363d] rounded-md text-sm hover:bg-[#30363d]">
            <Star size={14} />
            Star
            <ChevronDown size={14} />
          </button>
        </div>
      </div>

    </div>
  );
}

export default Middle;

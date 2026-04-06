import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Middle from "./components/Middle";
import RightSIde from "./components/RightSIde";

function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white">
      
      <Navbar />

      <div className="grid grid-cols-[350px_1fr_320px]">
        
        <Sidebar />

        <Middle />

        <RightSIde />

      </div>
    </div>
  );
}

export default App;

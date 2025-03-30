import SearchBar from "./components/SearchBar";
import TimeSelector from "./components/TimeSelector";
import BottomCards from "./components/BottomCards";
import Map from "./components/Maps";
import Header from "./components/Headers";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <Map />
        <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        {/* Bottom section that stays fixed but moves up when keyboard is open */}
        <div className="absolute bottom-0 w-full max-w-md  p-2">
          <SearchBar />
          <TimeSelector />
          <BottomCards />
        </div>
      </div>
    </div>
  );
}

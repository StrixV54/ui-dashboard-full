import Chats from "./components/Chats";
import Customers from "./components/Customers";
import GrowthBoard from "./components/GrowthBoard";
import LostDeals from "./components/LostDeals";
import NewDeal from "./components/NewDeal";
import QuarterGoals from "./components/QuarterGoals";
import Revenue from "./components/Revenue";
import Sidebar from "./components/Sidebar";
import TopState from "./components/TopState";

export default function Home() {
  return (
    <main className="flex h-screen flex-row bg-[#F6F6F3] py-4 pl-4 overflow-hidden">
      <Sidebar />
      {/* Main Dashboard */}
      <div className="flex-1 flex flex-wrap ml-4 pr-4 gap-4 rounded-s-2xl h-full w-full overflow-y-scroll">
        {/*  Revenue board */}
        <Revenue />
        {/* lost deals board */}
        <LostDeals />
        {/* quartar goals */}
        <QuarterGoals />
        {/* customers */}
        <Customers />
        {/* growth and top month/top year/buyer board */}
        <GrowthBoard />
        {/* chats */}
        <Chats />
        {/* top states */}
        <TopState />
        {/* new deals */}
        <NewDeal />
      </div>
    </main>
  );
}

import "./App.css";
import Desktop from "./assets/Components/desktop/Desktop";
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import Chats from "./assets/Components/AllApps/Chats/Chats";
import Call from "./assets/Components/AllApps/Calls/Calls";
import Gallery from "./assets/Components/AllApps/Gallery/Gallery";
import Snapster from "./assets/Components/AllApps/Snapster/Snapster";
import Mail from "./assets/Components/AllApps/Mail";
import Diary from "./assets/Components/AllApps/Diary";
import Browser from "./assets/Components/AllApps/Browser/Browser";
import Map from "./assets/Components/AllApps/Browser/Map/Map";
import BlogWebsite from "./assets/Components/AllApps/Browser/BlogWeb/BlogWebsite";
import ResultNotFound from "./assets/Components/AllApps/Browser/ResultNotFound/ResultNotFound";
import Camera from "./assets/Components/AllApps/Camera/Camera";
import SnapUserProfile from "./assets/Components/AllApps/Snapster/SnapCompo/SnapUserProfile";
import SnapHome from "./assets/Components/AllApps/Snapster/SnapCompo/SnapHome";
import CallDialer from "./assets/Components/AllApps/Calls/CallDialer";
import CallHome from "./assets/Components/AllApps/Calls/CallHome";
import AllUserBox from "./assets/Components/AllApps/Chats/AllUserBox";
import AllUserIdCompo from "./assets/Components/AllApps/Chats/Compo/AllUserIdCompo";
import Music from "./assets/Components/AllApps/Music/Music";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Desktop/>}/>
        <Route path="/chats" element={<Chats />}/>
            <Route path="/chats/:userId" element={<AllUserIdCompo/>}/>
        <Route path="/call" element={<Call />} >
          <Route index element={<CallHome/>} />
          <Route path="Calldailer" element={<CallDialer />} />
        </Route>
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/snapster" element={<Snapster />}>
         <Route index element={<SnapHome />} />
         <Route path=":ParamId" element={<SnapUserProfile />} />
         </Route>
        <Route path="/mail" element={<Mail />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/browser" element={<Browser />}/>
         <Route path="/browser/map" element={<Map />} />
         <Route path="/browser/blogwebsite" element={<BlogWebsite />} />
         <Route path="/browser/ResultNotFound" element={<ResultNotFound />} />
        <Route path="/camera" element={<Camera />}/>
        <Route path="/Music" element={<Music />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

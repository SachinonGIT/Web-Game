import "./App.css";
import Desktop from "./Components/desktop/Desktop";
import {
  BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import Chats from "./Components/AllApps/Chats/Chats";
import Call from "./Components/AllApps/Calls/Calls";
import Gallery from "./Components/AllApps/Gallery/Gallery";
import Snapster from "./Components/AllApps/Snapster/Snapster";
import Mail from "./Components/AllApps/Mail";
import Diary from "./Components/AllApps/Diary";
import Browser from "./Components/AllApps/Browser/Browser";
import Map from "./Components/AllApps/Browser/Map/Map";
import BlogWebsite from "./Components/AllApps/Browser/BlogWeb/BlogWebsite";
import ResultNotFound from "./Components/AllApps/Browser/ResultNotFound/ResultNotFound";
import Camera from "./Components/AllApps/Camera/Camera";
import SnapUserProfile from "./Components/AllApps/Snapster/SnapCompo/SnapUserProfile";
import SnapHome from "./Components/AllApps/Snapster/SnapCompo/SnapHome";
import CallDialer from "./Components/AllApps/Calls/CallDialer";
import CallHome from "./Components/AllApps/Calls/CallHome";
import AllUserBox from "./Components/AllApps/Chats/AllUserBox";
import AllUserIdCompo from "./Components/AllApps/Chats/Compo/AllUserIdCompo";
import Music from "./Components/AllApps/Music/Music";

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

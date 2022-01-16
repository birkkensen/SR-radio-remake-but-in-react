import { HomePage, ChannelPage, NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";
import { fetchAllChannels } from "./api";
import { useEffect, useState } from "react";
import "./index.css";

/**
 * TODO: Add a route to all the wrong paths
 * TODO: Cleanup the components folder
 */
function App() {
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    fetchAllChannels().then((data) => setChannels(data));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage channels={channels} />} />
        <Route path="/channel/:id" element={<ChannelPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

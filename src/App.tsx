import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Inbox from "./pages/Inbox/Inbox";
import Sak from "./pages/Sak/Sak";
import Cashpoints from "./pages/Cashpoints/Cashpoints";
import Profile from "./pages/Profile/Profile";
import Chat from "./pages/Chat/Chat";

export const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inbox" element={<Inbox />} />
          <Route path="/sak" element={<Sak />} />
          <Route path="/cashpoints" element={<Cashpoints />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

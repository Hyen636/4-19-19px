import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotificationPage from "../pages/NotificationPage";
import PersonalListPage from "../pages/PersonalListPage";
import PersonalDetailPage from "../pages/PersonalDetailPage";
import ReservationPage from "../pages/ReservationPage";
import VideoPage from "../pages/VideoPage";
import NavigationBar from "../components/NavigationBar";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className="px-4 pb-10">
          <Routes>
            <Route path="/" element={<PersonalDetailPage type="home" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/alarm" element={<NotificationPage />} />
            <Route path="/personal" element={<PersonalListPage />} />
            <Route path="/personal/video/:id" element={<VideoPage />} />
            <Route
              path="/personal/:uuid"
              element={<PersonalDetailPage type="detail" />}
            />
            <Route path="/reservation" element={<ReservationPage />} />
            <Route path="/reservation-reserved" element={<ReservationPage />} />
          </Routes>
        </div>
        {location.pathname !== "/login" && <NavigationBar />}
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

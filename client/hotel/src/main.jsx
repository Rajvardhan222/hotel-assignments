import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./utils/PrivateRoutes.jsx";
import Login from "./pages/Admin/Login.jsx";
import ListHotel from "./pages/Admin/ListHotel.jsx";
import AddHotel from "./pages/Admin/AddHotel.jsx";
import CheckInForm from "./pages/Guest/CheckInForm.jsx";
import Thankyou from "./pages/Guest/Thankyou.jsx";
import ListGuests from "./pages/Guest Admin/ListGuests.jsx"
import EditGuest from "./pages/Guest Admin/EditGuest.jsx"
import PrintGuest from "./pages/Guest Admin/PrintGuest.jsx"
import QR from "./pages/Admin/QR.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}> 
          <Route path="/" element={<App />} />
          <Route path="/list" element={<ListHotel />} />
          <Route path="/add" element={<AddHotel />} />
          <Route path="/qr/:name" element={<QR />} />
          <Route path="/guest-register/:name" element={<CheckInForm />} />
          <Route path="/thankyou" element={<Thankyou/>} />
          <Route path="/guestAdmin/list" element={<ListGuests />} />
          <Route path="/guestAdmin/edit/:id" element={<EditGuest />} />
          <Route path="/guestAdmin/print/:id" element={<PrintGuest />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/register';
import Courses from './pages/courses';
import CourseDetails from './pages/courseDetails';
import Footer from './components/Footer';
import Login from './pages/login';
import MyProfile from './pages/MyProfile';
import Privacy from './pages/privacy';

function AppContent() {
  const location = useLocation();

  // Hide Footer on /register path
const showFooter = location.pathname !== '/register' && location.pathname !== '/login' && location.pathname !== '/privacy';




  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courseDetails/:id" element={<CourseDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myprofile" element={<MyProfile />} />
<Route path="/privacy" element={<Privacy />} />

      </Routes>
      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

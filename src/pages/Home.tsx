import 'bootstrap/dist/css/bootstrap.min.css';
import ProfessionImage from '../assets/Profession.png';
import CPD from '../assets/CPD.png';
import girl from '../assets/girl (2).png';
import skill_india from '../assets/skill_india.jpg';
import IAF from '../assets/IAF.png';
import ISO from '../assets/ISO.jpg';
import NSDC from '../assets/NSDC.png';
import EIAC from '../assets/EIAC.jpg';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './Home.css';
 function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% visible
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

const brandDark = "#2f2f2f"; // Dark grey
const brandGrey = "#eeeaeaff"; // Light grey background

function Home() {
  useScrollReveal(); // Hook for enabling scroll animation

  
  return (
    <div style={{ fontFamily: 'Segoe UI, Arial, sans-serif', background: brandGrey, minHeight: "100vh", color: brandDark }}>

{/* Hero Section */}
<section className="py-5  " style={{ background: '#fff' }}>
  <div className="container">
    <div className="row align-items-center g-4">

      {/* Left side - content */}
      <div className="col-12 col-md-6 text-start">
        <h1
          className="fw-bold mb-3"
          style={{ color: '#334483ff' }}
        >
          Get Trained<br />Get Certified
        </h1>

        <p
          className="mb-4"
          style={{ fontSize: '0.95rem', lineHeight: 1.5, color: "#555" }}
        >
          <span style={{ color: brandDark, fontWeight: 600 }}>
            Boost your skills with expert-led courses.<br />
            Flexible learning tailored to your schedule.<br />
            Trusted certifications recognized globally.<br />
            All at an affordable price to help you achieve more for less.
          </span>
        </p>

        <div className="d-flex flex-wrap gap-2 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Type Keywords..."
            style={{ fontSize: '0.9rem', maxWidth: '420px' }}
          />
       <Link to="/courses">
  <button
    className="btn px-4"
    style={{ background: brandDark, color: '#fff', fontSize: '0.9rem' }}
  >
    Search
  </button>
</Link>
        </div>
      </div>

      {/* Right side - image */}
      <div className="col-12 col-md-6">
        <div
          className="rounded-4 overflow-hidden"
          style={{ maxHeight: '80vh', marginTop: '-250px' }} // <-- This raises the image
        >
          <img
            src={ProfessionImage}
            alt="Five professionals standing together"
            className="img-fluid w-100"
            style={{ objectFit: 'cover', maxHeight: '80vh' }}
          />
        </div>
      </div>

    </div>
  </div>
</section>

{/* Logos Section */}
<section className="py-1 reveal" style={{ background: '#fff' }}>
  <div
    className="container d-flex justify-content-center align-items-center flex-wrap"
    style={{
      gap: '3.5rem',           // Increased space between logos
      padding: '24px 0',       // Gives vertical space to section
      minHeight: '150px',      // Slightly taller for really big logos
    }}
  >
    <img
      src={CPD}
      alt="Accreditation CPD"
      style={{ height: '140px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
      className="ms-0"
    />
    <img
      src={skill_india}
      alt="Skill India Logo"
      style={{ height: '130px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
    />
    <img
      src={IAF}
      alt="IAF Logo"
      style={{ height: '130px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
    />
    <img
      src={ISO}
      alt="ISO Logo"
      style={{ height: '140px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
    />
    <img
      src={NSDC}
      alt="NSDC Logo"
      style={{ height: '140px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
    />
    <img
      src={EIAC}
      alt="EIAC Logo"
      style={{ height: '140px', width: '140px', borderRadius: '10px', objectFit: 'contain' }}
    />
  </div>
</section>


 {/* Categories */}
      <section
        className="d-flex gap-4 py-5  reveal"
        style={{
          width: '97%',
          alignItems: 'stretch' // ✅ make both columns equal height
        }}
      >
        {/* Sidebar */}
       <aside
  className="p-2 rounded shadow-sm bg-white h-100 d-none d-lg-flex flex-column"
  style={{ width: '320px' }}
>
          <h3
            className="fw-bold mb-4 border-bottom pb-3"
            style={{
              color: brandDark,
              fontSize: '1.5rem',
              letterSpacing: '.0.5px'
            }}
          >
           POPULAR COURSES
          </h3>
          <div className="d-flex flex-column gap-3">
            {[
              { emoji: '🛡', text: 'SAFEGUARDING', bgColor: '#e3f2fd' },
              { emoji: '🌱', text: 'PERSONAL DEVELOPMENT', bgColor: '#e8f5e9' },
              { emoji: '🧠', text: 'CHILD PSYCHOLOGY', bgColor: '#f3e5f5' },
                    { emoji: '⛑', text: 'FIRST AID', bgColor: '#ffebee' },
                      { emoji: '🍽', text: 'FOOD HYGIENE', bgColor: '#fffde7' },
              { emoji: '💡', text: 'IT & DEVELOPMENT', bgColor: '#fff3e0' },
        
            
            ].map((cat, idx) => (
              <a
                key={idx}
                href="#"
                className="d-flex align-items-center gap-3 rounded-pill text-decoration-none"
                style={{
                  padding: '10px 18px',
                  backgroundColor: cat.bgColor,
                  color: '#222',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 8px rgb(0 0 0 / 0.1)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  userSelect: 'none',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 6px 14px rgb(0 0 0 / 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgb(0 0 0 / 0.1)';
                }}
              >
                <span
                  style={{ fontSize: '1.6rem' }}
                  aria-label={`${cat.text} emoji`}
                  role="img"
                >
                  {cat.emoji}
                </span>
                {cat.text}
              </a>
            ))}
          </div>
        </aside>

        {/* Right Content */}
        <div
          className="flex-grow-1 course-container"
          style={{
            maxWidth: 'calc(100% - 340px)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%' // ✅ stretch full height same as sidebar
          }}
        >
          <style>{`
      @media (max-width: 992px) {
        .course-container {
          max-width: 100% !important;
        }
      }
    `}</style>
          <div className="row g-3 mb-4">
            {[
              {
                course_name: "Certified Data Analyst (CPD) – Job Ready Programme with Full Career Support",
                original_price: 224709,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64"
              },
              {
                course_name: "Cyber Security Awareness Training",
                original_price: 14791,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
            
              },
              {
                course_name: "ChatGPT: Artificial Intelligence (Open AI)",
                original_price: 14791,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                
              },

              {
                course_name: "Child Psychology Diploma",
                original_price: 14799,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b", // New image URL
            
              },
              {
                course_name: "Psychology of Old Age",
                original_price: 14799,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91", // New updated image URL
                
              },

              {
                course_name: "Psychology of Anxiety and Stress",
                original_price: 14799,
                discounted_price: 2999,
                image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", // Updated new image URL
         
              }


            ].map((course, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4 d-flex">
                <div
                  className="rounded bg-white border d-flex flex-column h-100 w-100"
                  style={{
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 10px 24px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                >
                  {/* IMAGE FULL WIDTH */}
                  <img
                    src={course.image_url}
                    alt={course.course_name}
                    style={{
                      width: '100%',
                      height: '160px',
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  {/* CONTENT */}
                  <div className="p-2 d-flex flex-column flex-grow-1 justify-content-between">
                    <div>
                      <h6 className="text-center fw-bold" style={{ fontSize: '0.85rem' }}>
                        {course.course_name}
                      </h6>
                      <p className="mb-1 text-center" style={{ fontSize: '0.8rem',color: 'red' }}>
                        <s>₹{course.original_price}</s>{" "}
                        <span style={{ color: 'green', fontWeight: 800 }}>
                          ₹{course.discounted_price}
                        </span>
                      </p>
                
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="d-flex justify-content-center">
            <Link to="/courses" style={{ textDecoration: 'none' }}>
    <button
      className="btn fw-semibold px-5 py-2"
      style={{
        background: brandDark,
        color: '#fff',
        fontSize: '1.05rem',
        borderRadius: '30px'
      }}
    >
      View All Courses
    </button>
  </Link>
          </div>
        </div>


      </section>

      {/* Special Offer */}
<section className="container-fluid py-5 reveal " style={{ background: '#eeeaeaff' }} >
  <div className="row align-items-center" style={{ minHeight: '400px' }}> {/* Ensures taller container */}
    
    {/* Left image */}
    <div className="col-12 col-md-6 mb-3 mb-md-0 " >
      <img
        src={girl}
        alt="Person using laptop for online class"
        className="img-fluid w-100 h-100"
        style={{ borderRadius: '12px', objectFit: 'cover' }}
      />
    </div>

    {/* Right content */}
    <div 
      className="col-12 col-md-6 d-flex justify-content-center align-items-center px-4" 
      style={{
        animation: 'fadeIn 1.2s ease-in-out',
        minHeight: '50%', // ensure content covers at least half
      }}
    >
      <div style={{ maxWidth: '600px', width: '100%' }}> {/* wider content area */}

        <h2
          style={{
            color: '#222',
            fontSize: '2.2rem',
            fontWeight: 700,
            letterSpacing: '0.5px',
            position: 'relative',
            display: 'inline-block',
            marginBottom: '1rem'
          }}
        >
         Special Offer For Our Students!
          <span style={{ color: '#888', fontSize: '1.1rem', fontWeight: 400 }}> </span>
          <span style={{
            position: 'absolute',
            bottom: -8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '3px',
            background: 'linear-gradient(90deg, #ff4b2b, #ff416c)',
            borderRadius: '2px'
          }}></span>
        </h2>

        <p
          style={{
            color: "#555",
            fontFamily: "'Segoe UI', Arial, sans-serif",
            fontWeight: 400,
            fontSize: "1.15rem",
            lineHeight: "1.6",
            margin: "1rem 0",
          }}
        >
          Become an <strong style={{ color: '#ff4b2b' }}>Unlimited Learning Member</strong> and get
          <br />
          <span className="fw-bold" style={{ color: '#111', fontSize: '1.3rem' }}>
            FULL ACCESS TO 1500+ COURSES for <strong style={{ color: '#ff4b2b' }}>ONE YEAR</strong> 
          </span>
          <br /><br />
          <span style={{ fontSize: '1.1rem' }}>
            Only for{' '}
            <span style={{ textDecoration: 'line-through', color: '#999' }}>
              ₹7999
            </span>{' '}
            <span style={{ fontWeight: 700, color: '#ff4b2b', fontSize: '1.5rem' }}>
              ₹9999.00
            </span>
          </span>
        </p>

       <a href="/courses" style={{ textDecoration: 'none' }}>
  <button
    className="btn px-5 py-3 fw-semibold"
    style={{
      background: 'linear-gradient(90deg, #ff4b2b, #ff416c)',
      border: 'none',
      color: '#fff',
      fontSize: '1.1rem',
      borderRadius: '50px',
      boxShadow: '0 4px 15px rgba(255,65,108,0.4)',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
  >
    Get Access Now 🚀
  </button>
</a>

      </div>
    </div>
  </div>

  {/* Keyframes */}
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>




     




      {/* Excellence Section */}
    {/* Excellence Section */}


<section className="py-5 reveal" style={{ background: '#fff' }}>
  <div 
    className="container-fluid d-flex align-items-center gap-5 flex-wrap"
    style={{
      animation: 'fadeIn 1.2s ease-in-out',
      background: brandGrey,
      borderRadius: '20px',
      padding: '40px',
      paddingTop: '60px',
      boxShadow: '0 6px 28px rgba(0,0,0,0.07)',
      width: '100%',
      flexDirection: 'row-reverse',  // This moves the image to the right
    }}
  >
    {/* Right image container (moved to right using flexDirection 'row-reverse') */}
    <div
      style={{
        flex: '0 0 300px',
        height: '180px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0,0,0,0.12)', // soft glow shadow
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
        alt="Professional working on laptop"
        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95)' }}
      />
    </div>

    {/* Left content */}
    <div className="flex-grow-1">
      <h2 
        className="fw-bold mb-4"
        style={{
          fontSize: '2.4rem',
          color: brandDark,
          letterSpacing: '0.8px',
          position: 'relative',
          display: 'inline-block',
          paddingBottom: '8px',
          marginBottom: '1.5rem',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          fontWeight: 700,
        }}
      >
        We Believe in <span style={{ color: '#666' }}>Excellence</span>
        <span style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '80px',
          height: '4px',
          background: 'linear-gradient(90deg, #ff4b2b, #ff416c)',
          borderRadius: '2px',
        }}></span>
      </h2>

      <p 
        style={{
          color: "#555",
          fontSize: "1.15rem",
          lineHeight: "1.75",
          maxWidth: "650px",
          fontWeight: 400,
          fontFamily: "'Segoe UI', Arial, sans-serif",
          letterSpacing: '0.03em',
        }}
      >
        At skillX, we believe there is always scope for improvement.  
        As a leading compliance training course provider, we strive to  
        continuously enhance our training and development services to meet  
        each learner’s needs.
      </p>
    </div>
  </div>

  {/* Fade-in keyframes */}
  <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}
  </style>
</section>






      {/* <Footer /> */}
    </div>
  );
}

export default Home;

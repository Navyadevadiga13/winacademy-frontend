import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Course {
  _id: string;
  course_name: string;
  original_price: number;
  discounted_price: number;
  course_category: string;
  description: string;
  target_audience: string[];
  course_curriculum: string[];
  duration: string;
  course_level: string;
  image_url: string;
    certification?: string;
}



export default function CourseDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);
const openPopup = () => setShowPopup(true);
const closePopup = () => setShowPopup(false);

  useEffect(() => {
    if (!id) {
      setError("No course ID provided");
      setLoading(false);
      return;
    }
    
    fetch(`http://localhost:5000/api/get_course_by_id/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch course details (${res.status})`);
        return res.json();
      })
      .then((data: Course) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return (
      <div className="d-flex justify-content-center align-items-center my-5" style={{ minHeight: "40vh" }}>
        <div className="spinner-border" role="status" />
      </div>
    );

  if (error) return <div className="text-danger text-center my-5">Error: {error}</div>;

  if (!course) return <div className="text-center my-5">Course not found.</div>;
// Assuming course.course_curriculum is an array like: [title1, content1, title2, content2, ...]
const modules = [];
for (let i = 0; i < course.course_curriculum.length; i += 2) {
  modules.push({
    title: course.course_curriculum[i] || '',
    content: course.course_curriculum[i + 1] || '',
  });
}

// Then render:







  return (
    <div
      className="py-5 px-3 px-md-5"
      style={{
        width: "100vw",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >

      {/* Header without image, course_name on one line, course_category below */}
     {/* Header with image on right side */}
{showPopup && (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)", // dark overlay
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      animation: "fadeIn 0.3s ease forwards",
    }}
  >
    <style>{`
      @keyframes fadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
      }
      .classy-btn {
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
      }
      .classy-btn:hover {
        box-shadow: 0 7px 20px rgba(0,0,0,0.2);
      }
    `}</style>

 <div
  style={{
    backgroundColor: "#fff",
    borderRadius: 16,
    boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
    padding: "30px 50px",  // a bit more padding for larger width
    maxWidth: 600,         // increase max width
    width: "90%",
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#1c1c1c",
    position: "relative",
  }}
>

      {/* Close icon */}
      <button
        onClick={closePopup}
        aria-label="Close popup"
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          background: "transparent",
          border: "none",
          fontSize: 26,
          color: "#666",
          cursor: "pointer",
          fontWeight: "700",
          lineHeight: 1,
          transition: "color 0.25s ease",
        }}
        onMouseOver={e => (e.currentTarget.style.color = "#444")}
        onMouseOut={e => (e.currentTarget.style.color = "#666")}
      >
        &times;
      </button>

      <h2
        style={{
          marginBottom: 20,
          fontWeight: 700,
          fontSize: "2rem",
          color: "#1a237e",
          letterSpacing: 0.4,
        }}
      >
        Total Bill
      </h2>

      <p
        style={{
          fontSize: "1.15rem",
          color: "rgba(30, 30, 30, 0.7)",
          marginBottom: 10,
          letterSpacing: 0.35,
        }}
      >
        Original Price:{" "}
        <span style={{ textDecoration: "line-through", color: "#aaa" }}>
          ₹{course?.original_price.toFixed(2)}
        </span>
      </p>

      <p
        style={{
          fontSize: "2.7rem",
          fontWeight: "900",
          marginBottom: 30,
          color: "#2e7d32",
          letterSpacing: 1,
        }}
      >
        ₹{course?.discounted_price.toFixed(2)}
      </p>

      <p
        style={{
          marginBottom: 36,
          fontSize: "1rem",
          color: "#222",
          lineHeight: 1.4,
          maxWidth: 280,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        Please confirm your enrollment and proceed to payment.
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: 18 }}>
        <button
          className="classy-btn"
          style={{
            backgroundColor: "#1a73e8",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "1.1rem",
            boxShadow: "0 5px 15px rgba(26, 115, 232, 0.6)",
          }}
        onClick={() => {
    closePopup();  // close popup first
    window.open("https://rzp.io/rzp/Rjt188Y", "_blank");  // open Razorpay link in new tab
  }}

        >
          Proceed to Pay
        </button>

        <button
          className="classy-btn"
          style={{
            backgroundColor: "#d93025",
            color: "white",
            border: "none",
            padding: "12px 32px",
            borderRadius: 8,
            cursor: "pointer",
            fontWeight: 700,
            fontSize: "1.1rem",
            boxShadow: "0 5px 15px rgba(217, 48, 37, 0.6)",
          }}
          onClick={closePopup}
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

   <Link
  to="/"
  style={{
    color: "#084bb8",
    fontWeight: "700",
    textDecoration: "none",
    display: "inline-block",
    marginBottom: "1.5rem",
  }}
>
  &larr; Back to Home
</Link>

<div
  className="d-flex rounded mb-5 mx-auto align-items-center justify-content-between"
  style={{
    maxWidth: "1400px",
    background: "linear-gradient(135deg, #0d47a1, #1976d2)",
    boxShadow: "0 6px 18px rgba(25, 118, 210, 0.7)",
    padding: "1.5rem 2rem",
    color: "white",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    boxSizing: "border-box",
  }}
>
  <div style={{ flex: 1, minWidth: 0 }}>
    <h1
      style={{
        fontWeight: 700,
        fontSize: "clamp(2rem, 6vw, 3rem)",
        margin: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      title={course.course_name}
    >
      {course.course_name}
    </h1>
    <p
      style={{
        marginTop: "0.25rem",
        fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
        fontWeight: 400,
        opacity: 0.8,
        textTransform: "uppercase",
        marginBottom: 0,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      title={`${course.course_category} | ${course.course_level} | ${course.duration} | CERTIFICATE `}
    >
      {course.course_category} 🎓&nbsp;|&nbsp; {course.course_level}📈 &nbsp;|&nbsp; {course.duration}⏰ &nbsp;|&nbsp; certificate provided 📜
    </p>
      <button
     className="btn btn-success btn-sm mt-3"
    style={{
      fontWeight: 500,
      fontSize: "0.95rem",            // Slightly smaller font
      letterSpacing: "0.5px",
      borderRadius: "7px",            // Smaller radius
      boxShadow: "0 1px 3px rgba(21,184,143,0.13)",
      padding: "0.4rem 1.3rem",       // Less padding, more compact
      width: "90%",
      maxWidth: "140px",
    }}

  onClick={openPopup}

  >
    Enroll Now
  </button>
  </div>

  <div
    style={{
      marginLeft: "20px",
      flexShrink: 0,
      maxHeight: "190px", // adjust as needed
      maxWidth: "170px",
      overflow: "hidden",      
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    }}
  >
    <img
      src={course.image_url}
      alt={course.course_name}
      style={{ width: "100%", height: "auto", display: "block" }}
    />
  </div>
</div>

<div className="mb-4 mx-auto d-flex justify-content-start" style={{ maxWidth: "1400px" }}>

</div>
      {/* Description */}
      <section
        className="mb-5 mx-auto"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          lineHeight: 1.75,
          color: "#333333",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f6f9fc",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          maxWidth: "1400px",
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3 className="mb-4" style={{ fontWeight: 700, borderBottom: "4px solid #1976d2", paddingBottom: "8px" }}>
          Description
        </h3>
        <p style={{ whiteSpace: "pre-wrap" }}>{course.description}</p>
      </section>

      {/* Target Audience */}
      <section
        className="mb-5 mx-auto"
        style={{
          fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
          lineHeight: 1.75,
          color: "#333333",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          backgroundColor: "#f6f9fc",
          padding: "2rem 2.5rem",
          borderRadius: "12px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
          maxWidth: "1400px",
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3 className="mb-4" style={{ fontWeight: 700, borderBottom: "4px solid #1976d2", paddingBottom: "8px" }}>
          Target Audience
        </h3>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "clamp(1rem, 2vw, 1.1rem)",
            color: "#0d47a1",
            fontWeight: 600,
            maxWidth: "100%",
          }}
        >
          {course.target_audience.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </section>

      {/* Course Curriculum */}
  <section
  className="mb-5 mx-auto"
  style={{
    maxWidth: "1400px",
    boxSizing: "border-box",
    fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
    color: "#333333",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    backgroundColor: "#f6f9fc",
    padding: "2rem 2.5rem",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.05)",
  }}
>
  <h3 className="mb-4" style={{ fontWeight: 700, borderBottom: "4px solid #1976d2", paddingBottom: "8px" }}>
    Course Curriculum
  </h3>
  <pre style={{ whiteSpace: "pre-wrap", fontFamily: 'inherit', color: '#333' }}>
    {/* Convert modules array back to string with line breaks */}
    {modules.map(({ title, content }) => `${title}\n${content}\n\n`).join('')}
  </pre>
</section>

    
    {course.certification && (
  <section
    className="mx-auto mb-5"
    style={{
      maxWidth: "1400px",
      backgroundColor: "#e3f2fd",
      color: "#1976d2",
      fontWeight: 500,
      padding: "1rem 2rem",
      borderRadius: "12px",
      fontSize: "1.05rem",
      boxShadow: "0 1px 8px rgba(25, 118, 210, 0.13)",
      overflowX: "auto", // optional, to handle long lines
    }}
  >
    <div>
      <strong>Certification:</strong>
      <pre style={{ color: "#673ab7", margin: 0, fontFamily: 'inherit' }}>
        {course.certification}
      </pre>
    </div>
  </section>
)}

    </div>
  );
}

function CurriculumAccordion({ modules }: { modules: { title: string; content: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {modules.map(({ title, content }, idx) => (
        <div
          key={idx}
          style={{
            paddingLeft: 18,
            borderLeft: "4px solid #1972d7",
            color: "#1851c2",
            fontWeight: "bold",
            fontSize: "1.1rem",
          }}
        >
          <div>{title}</div>
          <div
            style={{
              fontWeight: "normal",
              color: "#000",
              marginTop: 8,
              whiteSpace: "pre-wrap",
            }}
          >
            {content}
          </div>
        </div>
      ))}
    </div>
    
  );
}


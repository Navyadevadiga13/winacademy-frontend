import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

interface Course {
  _id: string;
  course_name: string;
  original_price: number;
  discounted_price: number;
  description: string;
  course_category: string;
  image_url: string;
}

export default function Courses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
   const [loadingFilteredCourses, setLoadingFilteredCourses] = useState(false);
  
  const coursesPerPage = 5;

  const navigate = useNavigate();


  
  useEffect(() => {
    fetch("http://localhost:5000/api/get_courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data ?? []);
        setLoadingCourses(false);
      })
      .catch(() => setLoadingCourses(false));

    fetch("http://localhost:5000/api/course_categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data ?? []);
        setLoadingCategories(false);
      })
      .catch(() => setLoadingCategories(false));
  }, []);

  const toggleDescription = (id: string) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);
      return newSet;
    });
  };

  const truncate = (text: string, maxLength: number) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

if (loadingCategories || (loadingCourses && !selectedCategory) || loadingFilteredCourses) {
  return (
    <div className="d-flex justify-content-center py-5">
      <div className="spinner-border text-secondary" role="status" />
    </div>
  );
}


  // Calculate total pages
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  // Slice courses for current page
  const currentCourses = courses.slice(
    (currentPage - 1) * coursesPerPage,
    currentPage * coursesPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
    }
  };

  return (
    <div className="container-fluid py-4">


      <div className="row">
        {/* Categories */}
        <div className="col-12 col-md-3 mb-4">
          <ul className="list-group shadow-sm">
           <li
  className="list-group-item text-white fw-bold fs-5"
  style={{ backgroundColor: "#003366", cursor: "pointer" }}
  onClick={() => {
    setSelectedCategory(null);   // Clear selected category
    setLoadingCourses(true);
    // Fetch all courses
    fetch("http://localhost:5000/api/get_courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data ?? []);
        setLoadingCourses(false);
        setCurrentPage(1); // Reset pagination
      })
      .catch(() => {
        setCourses([]);
        setLoadingCourses(false);
      });
  }}
>
  Available Courses
</li>

           {categories.length === 0 ? (
  <li className="list-group-item text-center text-muted">No categories found.</li>
) : (
  categories.map((cat) => (
    <li
      key={cat}
      className={`list-group-item list-group-item-action ${selectedCategory === cat ? 'active' : ''}`}
      style={{ cursor: "pointer", fontWeight: 500 }}
      onClick={() => {
        setSelectedCategory(cat);
        setLoadingFilteredCourses(true);

        // Fetch courses by selected category
        fetch(`http://localhost:5000/api/get_course_by_category/${encodeURIComponent(cat)}`)
          .then(res => res.json())
          .then(data => {
            setCourses(data ?? []);
            setCurrentPage(1); // Reset to first page
          })
          .catch(() => setCourses([]))
          .finally(() => setLoadingFilteredCourses(false));
      }}
    >
      {cat}
    </li>
  ))
)}

          </ul>
        </div>

        {/* Courses */}
        <div className="col-12 col-md-9">
          {courses.length === 0 ? (
            <div className="text-center text-muted py-5">No courses found.</div>
          ) : (
            <>
              <div className="row g-4">
                {currentCourses.map((course) => {
                  const isExpanded = expandedIds.has(course._id);
                  return (
                    <div key={course._id} className="col-12">
                      <div
                        className="card h-100 shadow-sm d-flex flex-column flex-md-row"
                        style={{ borderRadius: 10, padding: 16 }}
                      >
                        {/* Image */}
                        {course.image_url ? (
                          <img
                            src={course.image_url}
                            alt={course.course_name}
                            className="img-fluid rounded mb-3 mb-md-0"
                            style={{
                              maxWidth: 150,
                              maxHeight: 150,
                              objectFit: "cover",
                              marginRight: 20,
                              flexShrink: 0,
                            }}
                          />
                        ) : (
                          <div
                            className="d-flex align-items-center justify-content-center bg-light rounded mb-3 mb-md-0"
                            style={{
                              width: 150,
                              height: 150,
                              color: "#777",
                              fontStyle: "italic",
                              marginRight: 20,
                              flexShrink: 0,
                            }}
                          >
                            Image
                          </div>
                        )}

                        {/* Details */}
                        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                          <h5 className="fw-bold mb-3">{course.course_name}</h5>
                          <p className="flex-grow-1 mb-2">
                            {isExpanded ? course.description : truncate(course.description, 100)}
                            {course.description.length > 100 && (
                              <button
                                className="btn btn-link p-0"
                                style={{ fontSize: 14 }}
                                onClick={() => toggleDescription(course._id)}
                              >
                                {isExpanded ? "Show Less" : "read more"}
                              </button>
                            )}
                          </p>

                          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between border-top pt-3 gap-3">
                            <div className="d-flex align-items-center gap-3">
                              <div style={{ textDecoration: "line-through", color: "#aaa" }}>
                                ₹{course.original_price.toLocaleString()}
                              </div>
                              <div style={{ fontWeight: 700, color: "#d32f2f", fontSize: 20 }}>
                                ₹{course.discounted_price.toLocaleString()}
                              </div>
                            </div>
                            <button
                              className="btn btn-success"
                              style={{ backgroundColor: "#003366", borderColor: "#003366" }}
                              onClick={() => navigate(`/courseDetails/${course._id}`)}
                            >
                              More Info
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Page navigation" className="mt-4 d-flex justify-content-center">
                  <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} aria-label="Previous">
                        &laquo;
                      </button>
                    </li>

                    {[...Array(totalPages)].map((_, idx) => {
                      const page = idx + 1;
                      return (
                        <li key={page} className={`page-item ${currentPage === page ? "active" : ""}`}>
                          <button className="page-link" onClick={() => handlePageChange(page)}>
                            {page}
                          </button>
                        </li>
                      );
                    })}

                    <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                      <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} aria-label="Next">
                        &raquo;
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MainIdCard from "../../components/MainIdCard";

export default function IDCardPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const printRef = useRef(null); // Ref for A4 Page Container

  // Get stored data or fallback to location state
  const storedData = JSON.parse(localStorage.getItem("idCardData")) || [];
  const idCardData = location.state?.idCards || storedData;

  // Save to localStorage when the page loads
  useEffect(() => {
    if (idCardData.length > 0) {
      localStorage.setItem("idCardData", JSON.stringify(idCardData));
    }
  }, [idCardData]);

  // Print function using ref
  const handlePrint = () => {
    if (printRef.current) {
      const printContents = printRef.current.innerHTML;
      const originalContents = document.body.innerHTML;

      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
      window.location.reload(); // Refresh page to restore app state
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Navigation Buttons */}
      <div className="flex gap-4 mb-6 print:hidden">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition duration-300"
        >
          ⬅ Go Back
        </button>

        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          🖨 Print ID Cards
        </button>
      </div>

      {/* A4 Page Container */}
      <div ref={printRef} className="w-[210mm] h-[297mm] border-2 border-black bg-white relative print:border-0 p-5 overflow-hidden">
        {/* ID Cards Grid (3 in a row) */}
        <div className="grid grid-cols-3 gap-10">
          {idCardData.map((person, index) => (
            <div key={index} className="">
              <MainIdCard
                regno={person.regno || "N/A"}
                session={person.session || "N/A"}
                name={person.name || "Unknown"}
                fathername={person.fatherName || "N/A"}
                address={person.address || "N/A"}
                course={person.course || "N/A"}
                dateofissue={person.dateofissue || "N/A"}
                image={person.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

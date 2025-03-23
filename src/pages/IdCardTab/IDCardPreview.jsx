import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toPng } from "html-to-image"; // Import html-to-image
import MainIdCard from "../../components/idcard-templates/MainIdCard";

export default function IDCardPreview() {
  const navigate = useNavigate();
  const location = useLocation();
  const cardRefs = useRef([]); // Array of refs for each card

  // Get stored data or fallback to location state
  const storedData = JSON.parse(localStorage.getItem("idCardData")) || [];
  const idCardData = location.state?.idCards || storedData;

  // Save to localStorage when the page loads
  useEffect(() => {
    if (idCardData.length > 0) {
      localStorage.setItem("idCardData", JSON.stringify(idCardData));
    }
  }, [idCardData]);

  // Convert a single card to PNG
  const handleSaveCardAsImage = async (index) => {
    if (cardRefs.current[index]) {
      try {
        const scale = 3; // Increase resolution

        const imgData = await toPng(cardRefs.current[index], {
          quality: 1.0,
          pixelRatio: 10,
          cacheBust: true,
          useCORS: true,
        });

        // Create a download link
        const link = document.createElement("a");
        link.href = imgData;
        link.download = `id_card_${index + 1}.png`;
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Navigation Button */}
      <div className="mb-6 print:hidden">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900 transition duration-300 cursor-pointer"
        >
          ⬅ Go Back
        </button>
      </div>

      {/* ID Cards Grid (3 in a row) */}
      <div className="grid grid-cols-3 gap-10">
        {idCardData.map((person, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* ID Card */}
            <div ref={(el) => (cardRefs.current[index] = el)} className="relative">
              <MainIdCard
                regno={person.regno || "N/A"}
                session={person.session || "N/A"}
                name={person.name || "Unknown"}
                fathername={person.fatherName || "N/A"}
                address={person.address || "N/A"}
                course={person.course || "N/A"}
                dateofissue={person.dateOfIssue || "N/A"}
                image={person.photo}
              />
            </div>

            {/* Save Button (OUTSIDE the card) */}
            <button
              onClick={() => handleSaveCardAsImage(index)}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded text-sm hover:bg-blue-600 transition duration-300 cursor-pointer"
            >
              📷 Save as Image
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

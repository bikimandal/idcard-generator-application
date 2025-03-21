import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Image, CircleX } from "lucide-react";

export default function IndexPage() {
  const navigate = useNavigate();
  const [idCards, setIdCards] = useState(() => {
    const storedData = localStorage.getItem("idCards");
    return storedData
      ? JSON.parse(storedData)
      : [{ regno: "", session: "", name: "", fatherName: "", address: "", course: "", dateofissue: "", photo: "" }];
  });

  useEffect(() => {
    localStorage.setItem("idCards", JSON.stringify(idCards));
  }, [idCards]);

  const addIDCard = () => {
    if (idCards.length < 6) {
      setIdCards([...idCards, { regno: "", session: "", name: "", fatherName: "", address: "", course: "", dateofissue: "", photo: "" }]);
    }
  };

  const handleInputChange = (index, field, value) => {
    const newIdCards = [...idCards];
    newIdCards[index][field] = value;
    setIdCards(newIdCards);
  };

  const handleImageUpload = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleInputChange(index, "photo", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteCard = (index) => {
    const newIdCards = idCards.filter((_, i) => i !== index);
    setIdCards(newIdCards);
  };

  const handleGenerate = () => {
    navigate("/idcard/preview", { state: { idCards } });
  };
  const handleReset = () => {
    localStorage.removeItem("idCards");
    setIdCards([{ regno: "", session: "", name: "", fatherName: "", address: "", course: "", dateofissue: "", photo: "" }]);
  };


  return (
    <div className="min-h-screen w-auto bg-gray-900 text-white flex flex-col">
      <header className="text-xl font-semibold text-center py-3 bg-gray-800 shadow-md">ID Card Generator</header>
      <div className="flex-grow p-6 justify-center">
        <div className="grid grid-cols-3 gap-10">
          {idCards.map((card, index) => (
            <div key={index} className="relative bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center [width:85mm] [height:150mm]">
              {/* Delete Button (Hidden for First Card) */}
              {index > 0 && (
                <button
                  onClick={() => handleDeleteCard(index)}
                  className="absolute top-2 right-2 text-red-500 hover:text-red-400"
                >
                  <CircleX size={20} className="hover:text-amber-50 cursor-pointer" />
                </button>
              )}

              <div className="w-32 h-32 bg-gray-700 flex items-center justify-center rounded-lg overflow-hidden shadow-lg mb-3">
                {card.photo ? <img src={card.photo} alt="Preview" className="w-full h-full object-cover" /> : <span className="text-gray-400">No Image</span>}
              </div>
              <label className="flex items-center gap-2 bg-gray-700 px-3 py-2 mb-3 rounded-md cursor-pointer hover:bg-gray-600 text-sm">
                <Image />
                <span>{card.photo ? "Change Image" : "Upload Image"}</span>
                <input type="file" accept="image/*" onChange={(e) => handleImageUpload(index, e)} className="hidden" />
              </label>
              <input type="text" placeholder="Registration No" value={card.regno} onChange={(e) => handleInputChange(index, "regno", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Session" value={card.session} onChange={(e) => handleInputChange(index, "session", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Name" value={card.name} onChange={(e) => handleInputChange(index, "name", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Father's Name" value={card.fatherName} onChange={(e) => handleInputChange(index, "fatherName", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Address" value={card.address} onChange={(e) => handleInputChange(index, "address", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Course" value={card.course} onChange={(e) => handleInputChange(index, "course", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
              <input type="text" placeholder="Date of Issue" value={card.dateofissue} onChange={(e) => handleInputChange(index, "dateofissue", e.target.value)} className="w-full bg-gray-900 text-white px-4 py-2 rounded-md mb-2" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gray-800 p-4 flex justify-between sticky bottom-0">
        <button
          onClick={addIDCard}
          disabled={idCards.length >= 6}
          className={`bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md ${idCards.length >= 6 ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
        >
          + Add More
        </button>

        <button onClick={handleReset} className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-md cursor-pointer">Reset</button>
        <button onClick={handleGenerate} className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md cursor-pointer">Generate ID Cards</button>
      </div>
    </div>
  );
}

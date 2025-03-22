import React from 'react'
import logo from "../assets/MainIdCardAssets/rcld-logo.png"

export default function MainIdCard({ regno, session, name, fathername, address, course, dateofissue, image }) {
    return (
        <div className="scale[1] w-[5.5cm] h-[8.5cm] max-w-[5.5cm] max-h-[8.5cm] bg-gradient-to-bl from-white/100 to-blue-300 font-[Times_New_Roman] flex flex-col">

            {/* Top Content */}

            <div className='flex flex-row pt-1.5 px-1.5'>

                {/* First Section */}
                <div className='flex-1 flex flex-col items-center'>
                    <span className='text-blue-900 font-extrabold text-[8px]'>Id NO.</span>
                    <span className='font-bold text-[8px]'>RCLD/ISL/001/</span>
                    <span className='font-bold text-[8px]'>{regno}</span>
                </div>

                {/* Second Section (Logo) */}
                <div className='flex-1 flex justify-center'>
                    <img src={logo} alt="LOGO" className="w-[40px] h-[40px]" />
                </div>

                {/* Third Section */}
                <div className='flex-1 flex flex-col items-center'>
                    <span className='text-blue-900 font-extrabold text-[8px]'>Session:</span>
                    <span className='text-red-800 font-bold text-[8px]'>{session}</span>
                </div>
            </div>
            {/* Name Logo - Positioned Below Top Content */}
            <div className='max-h-[18mm] text-red-800 text-[38px] font-extrabold flex justify-center items-center overflow-hidden mt-[1mm]'>RCLD</div>

            {/* LOGO UPPER PART */}
            <div className='flex flex-col'>
                <span className="text-center text-blue-900 text-[13px] font-extrabold">
                    Rashtriya Computer Literacy Drive
                </span>
                <span className="text-center text-black text-[6px] font-bold">
                    (A mission encouraged by National IT Task Force, GOVT. OF INDIA)
                </span>
            </div>


            {/* DP */}
            <div className="flex justify-center">
                <div className="w-[17.5mm] h-[20mm] border-[2px] border-blue-900 rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                    <img src={image} alt="Passport" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* DETAILS SECTION */}
            <div className='flex flex-col pl-[2mm] pt-1 text-[8px]'>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 text-[10px] w-[19mm] inline-block font-bold">Name :</span>
                    <span className='text-black text-[10px] inline-block font-bold'>{name}</span>
                </div>


                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 text-[10px] w-[19mm] inline-block font-bold">Father's Name :</span>
                    <span className='text-black text-[10px] font-bold'>{fathername}</span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 text-[10px] w-[19mm] inline-block font-bold">Address :</span>
                    <span className='text-black text-[10px] font-bold w-[30mm] min-h-[12mm] max-h-[12mm] overflow-hidden'>
                        {address}
                    </span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 text-[10px] w-[19mm] inline-block font-bold">Course :</span>
                    <span className='text-black text-[10px] font-bold'>{course}</span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 text-[10px] w-[19mm] inline-block font-bold">Date of Issue :</span>
                    <span className='text-black text-[10px] font-bold'>{dateofissue}</span>
                </div>

            </div>

            {/* Bottom Content - Stays at Bottom & Expands Upwards */}
            <div className="bg-blue-900 text-white p-1 self-stretch flex justify-center mt-auto">
                <span className='text-[12px]'>IDENTITY CARD</span>
            </div>
        </div>
    )
}
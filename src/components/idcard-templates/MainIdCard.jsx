import React from 'react'
import logo from "../../assets/MainIdCardAssets/rcld-logo.png"
import { Phone, Mail, ExternalLink } from "lucide-react"

export default function MainIdCard({ regno, session, name, fathername, address, course, dateofissue, image }) {
    return (
        <div className="scale[1] w-[5.5cm] h-[8.5cm] max-w-[5.5cm] max-h-[8.5cm] bg-gradient-to-bl from-white/100 to-blue-300 font-[Times_New_Roman] flex flex-col">

            {/* Top Content */}

            <div className='flex flex-row pt-1.5 px-1.5'>

                {/* First Section */}
                <div className='flex-1 flex flex-col items-center'>
                    <span className='text-blue-900 font-extrabold text-[8px]'>ID No.</span>
                    <span className='font-bold text-[8px]'>RCLD/ISL/001/</span>
                    <span className='font-bold text-[8px]'>{regno}</span>
                </div>

                {/* Second Section (Logo) */}
                <div className='flex-1 flex justify-center'>
                    <img src={logo} alt="LOGO" className="w-[36px] h-[36px]" />
                </div>

                {/* Third Section */}
                <div className='flex-1 flex flex-col items-center'>
                    <span className='text-blue-900 font-extrabold text-[8px]'>Session:</span>
                    <span className='text-red-800 font-bold text-[8px]'>{session}</span>
                </div>
            </div>
            {/* Name Logo - Positioned Below Top Content */}
            <div className='min-h-[8mm] font-[Arial] text-red-700 drop-shadow-[2px_2px_0px_white] text-[38px] font-extrabold flex justify-center items-center overflow-hidden mt-[]'>RCLD</div>

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
            <div className='flex flex-col pl-[2mm] pt text-[9px]'>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 w-[19mm] inline-block font-bold">Name :</span>
                    <span className='text-black inline-block font-extrabold'>{name}</span>
                </div>


                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 w-[19mm] inline-block font-bold">Father's Name :</span>
                    <span className='text-black font-bold'>{fathername}</span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 w-[19mm] inline-block font-bold">Address :</span>
                    <span className='text-black font-bold w-[30mm] min-h-[10mm] max-h-[10mm] overflow-hidden'>
                        {address}
                    </span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 w-[19mm] inline-block font-bold">Course :</span>
                    <span className='text-black font-bold'>{course}</span>
                </div>

                <div className='flex flex-row items-start'>
                    <span className="text-blue-900 w-[19mm] inline-block font-bold">Date of Issue :</span>
                    <span className='text-black font-bold'>{dateofissue}</span>
                </div>

            </div>
            {/* Contact section */}
            <div className='h-[0.3mm] w-full bg-blue-900'></div>
            <div className='text-[2mm] flex flex-col items-center py-[0.6mm]'>
                <div className='font-bold max-h-[2.3mm] flex justify-center items-center'>AEC: CYBER WORLD, DESHBANDHUPARA, ISLAMPUR</div>
                <div className='font-bold max-h-[2.3mm] flex justify-center items-center gap-1'>
                    <span>Uttar Dinajpur, West Bengal, PIN-733202</span>
                    <Phone size={7} />
                    <span>+91 98517 75891</span>
                </div>
                <div className='font-bold max-h-[2.3mm] flex gap-1 justify-center items-center'>
                    <Mail size={7} />
                    <span>islampur.cyberworld@gmail.com</span>
                    <ExternalLink size={7} />
                    <span>rcld.gov.in</span>
                </div>
            </div>

            {/* Bottom Content - Stays at Bottom & Expands Upwards */}
            <div className="bg-blue-900 min-h-[5.5mm] max-h-[5.5mm] text-white flex justify-center">
                <span className='text-[12px]'>IDENTITY CARD</span>
            </div>
        </div>
    )
}
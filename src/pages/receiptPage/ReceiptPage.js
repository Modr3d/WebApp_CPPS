import { ArrowDownTrayIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import receipt from "../../assets/Receipt.png"

function ReceiptPage() {
    const [isLangOpen, setIsLangOpen] = useState(false)
    const [language, setLanguage] = useState('TH'); // Initial state for language is TH

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        setIsLangOpen(false); // Close the dropdown after selecting
    };
    return (
        <div>
            <div className=" p-4">
                <nav className=" w-full flex justify-end h-full mb-4">
                    <button className=" flex items-center bg-[#D9EBFF] text-black p-2 rounded-[20px] font-medium text-sm relative"
                        onClick={() => setIsLangOpen(!isLangOpen)}>
                        <img
                            src={
                                language === 'TH'
                                    ? 'https://cdn.britannica.com/38/4038-050-BDDBA6AB/Flag-Thailand.jpg'
                                    : 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_United_States_%28DoS_ECA_Color_Standard%29.svg'
                            }
                            alt="flag"
                            className="w-4 h-4 mr-1 rounded-3xl object-cover"
                        />
                        {language === 'TH' ? 'TH' : 'EN'}
                        <ChevronDownIcon
                            className={`ml-1 w-4 h-4 rounded-xl border-12 ${isLangOpen ? 'rotate-180' : ''
                                }`}
                        />
                        {isLangOpen && (
                            <div className="absolute bottom-[-90px] border-[0.5px] border-gray-300 right-0 w-40 bg-white rounded-xl shadow-md flex flex-col justify-center p-3 space-y-2">
                                <p
                                    className=" w-full flex items-start text-sm font-medium cursor-pointer"
                                    onClick={() => handleLanguageChange('TH')}
                                >
                                    ภาษาไทย
                                </p>
                                <div className=" border-t-[0.5px] border-gray-300 w-full"></div>
                                <p
                                    className=" w-full flex items-start text-sm font-medium cursor-pointer"
                                    onClick={() => handleLanguageChange('EN')}
                                >
                                    ภาษาอังกฤษ
                                </p>
                            </div>
                        )}

                    </button>
                </nav>
                <div className=" p-6 border-gray-300 border-[0.5px] rounded-[20px] shadow-md flex justify-center items-center mb-8 space-x-10">
                    <img src={receipt} alt="receipt" className="w-14 h-14" />
                    <div className=" flex flex-col justify-center items-center text-lg ">
                        <p>ชำระเงินสำเร็จ </p>
                    </div>
                </div>

                <div className=" pl-9 pr-9 w-full flex flex-col justify-center items-center space-y-4">
                    <h1 className=" w-full flex justify-center">ใบเสร็จการชำระเงิน</h1>

                    <div className=" border-[0.5px] border-gray-300 w-full h-a flex flex-col p-3 space-y-3">
                        <h2 className=" text-sm w-full flex justify-center">บจก. KMITL สแควร์</h2>
                        <p className=" text-xs w-ful space-y-1 ">
                            <p>TAX ID: 0105539025678</p>
                            <p>Date: 17/08/2024</p>
                            <p>Rcpt: RM9999240817000658</p>
                        </p>
                        <div className=" w-full border-[0.5px] border-gray-300"></div>
                        <p className=" text-xs w-ful space-y-1 ">
                            <p>เลขทะเบียน: 2กฐ452 (C)</p>
                            <p>เวลาเข้า: 17/08/2024 14:32</p>
                            <p>เวลาออก: 17/08/2024 18:33</p>
                            <div className=" flex justify-between">
                                <p>ค่าบริการ</p>
                                <p>90.00 บาท</p>
                            </div>
                            <div className=" flex justify-between">
                                <p>ชำระเงิน</p>
                                <p>90.00 บาท</p>
                            </div>
                            <div className=" flex justify-between">
                                <p>วิธีการชำระเงิน</p>
                                <p>Thai QR PromptPay</p>
                            </div>
                        </p>
                        <div className=" w-full border-[0.5px] border-gray-300"></div>
                        <div className=" flex flex-col space-y-1">
                            <h2 className=" text-md w-full flex justify-center">กรุณานำรถออกก่อนเวลา 19:32</h2>
                            <h3 className=" text-xs w-full flex justify-center text-gray-500">หากเกินเวลาจะคิดค่าบริการเพิ่ม</h3>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center items-center w-full h-auto  ">
                            <button className=" rounded-2xl border-[0.5px] p-2 border-gray-300 w-8 h-8 flex justify-center items-center">
                                <ArrowDownTrayIcon className=" w-auto h-auto" />
                            </button>
                            <p className=" mt-2 text-sm">บันทึก QR</p>
                        </div>
                </div>
            </div>

            <div className=" flex flex-col justify-center items-end space-y-4 w-full pt-6 pb-6 absolute bottom-0 p-4 border-t-[0.5px] border-gray-300 " style={{ boxShadow: '0 -2px 6px rgba(209, 213, 219, 1)' }}>
                <button className=" w-full flex justify-center items-center bg-[#007AFF] text-white p-3 rounded-[20px] shadow-md font-medium text-md">
                    เสร็จสิ้น
                </button>
            </div>
        </div>
    )
}

export default ReceiptPage
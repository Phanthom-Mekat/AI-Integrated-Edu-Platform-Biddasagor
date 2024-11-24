import { FaCalculator, FaAtom, FaBookOpen, FaLanguage, FaHistory } from "react-icons/fa";
import {  GiMicroscope } from "react-icons/gi";
import { BiCodeBlock } from "react-icons/bi";
import { IoMdBusiness } from "react-icons/io";
import { MdOutlineScience } from "react-icons/md";
import { TbMathFunction } from "react-icons/tb";
import { SlChemistry } from "react-icons/sl";

const SubjectHelp = () => {
    const subjects = [
        { name: "Math", icon: <TbMathFunction className="w-8 h-8 text-primary" /> },
        { name: "Algebra", icon: <FaCalculator className="w-8 h-8 text-primary" /> },
        { name: "Calculus", icon: <FaBookOpen className="w-8 h-8 text-primary" /> },
        { name: "Physics", icon: <MdOutlineScience className="w-8 h-8 text-primary" /> },
        { name: "Chemistry", icon: <SlChemistry className="w-8 h-8 text-primary" /> },
        { name: "Biology", icon: <GiMicroscope className="w-8 h-8 text-primary" /> },
        { name: "Computer Science", icon: <BiCodeBlock className="w-8 h-8 text-primary" /> },
        { name: "Economics", icon: <IoMdBusiness className="w-8 h-8 text-primary" /> },
        { name: "Business", icon: <IoMdBusiness className="w-8 h-8 text-primary" /> },
        { name: "Language", icon: <FaLanguage className="w-8 h-8 text-primary" /> },
        { name: "Social Science", icon: <FaAtom className="w-8 h-8 text-primary" /> },
        { name: "History", icon: <FaHistory className="w-8 h-8 text-primary" /> },
    ];

    return (
        <div className="bg-primary/10 py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-secondary">Get Homework Help with Any Subject, Any Question</h2>
                <p className="text-gray-500 mt-2">We cover all subjects to ensure you get the help you need, no matter what you’re studying</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 w-11/12 mx-auto lg:grid-cols-6 gap-6 justify-items-center px-6">
                {subjects.map((subject, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-2 p-4  rounded-lg  hover:shadow-lg transition-shadow"
                    >
                        <div className="p-4 bg-primary/35 rounded-full">{subject.icon}</div>
                        <p className="text-sm font-medium text-gray-700">{subject.name}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button className="btn bg-gradient-to-r from-secondary to-lime-500 text-white px-6 rounded-full text-lg font-bold hover:shadow-lg transition-shadow">
                    Ask your question
                </button>
            </div>
        </div>
    );
};

export default SubjectHelp;

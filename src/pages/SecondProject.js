import React, {useEffect, useState} from "react";
import FormProject from "../components/secondProject/FormProject";
import ListProject from "../components/secondProject/ListProject";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const SecondProject = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [qaList, setQaList] = useState([]);
    const notify = (message, type) => {
        type ?
            toast.success(message) :
            toast.error(message)
    };


    useEffect(() => {
        const storedQaList = localStorage.getItem("qaList");
        if (storedQaList) {
            setQaList(JSON.parse(storedQaList));
        }
    }, []);

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleAnswerChange = (e) => {
        setAnswer(e.target.value);
    };

    const handleAddQa = () => {
        if (question.length < 1 || answer.length < 1) {
            return notify("Can't create question> please fill inputs", false)
        }

        const newQa = {
            question: question,
            answer: answer,
        };
        setQaList([...qaList, newQa]);
        setQuestion("");
        setAnswer("");
        localStorage.setItem("qaList", JSON.stringify([...qaList, newQa]));
        notify("Success Added", true);
    };

    const handleDeleteQa = (index) => {
        const newQaList = [...qaList];
        newQaList.splice(index, 1);
        setQaList(newQaList);
        localStorage.setItem("qaList", JSON.stringify(newQaList));
        notify("Deleted", false);
    };

    const handleDeleteAll = () => {
        setQaList([]);
        localStorage.removeItem("qaList");
        notify("Deleted All Data", false);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <FormProject handleAddQa={handleAddQa} handleQuestionChange={handleQuestionChange}
                         question={question} answer={answer} handleAnswerChange={handleAnswerChange}/>
            <ListProject qaList={qaList} handleDeleteAll={handleDeleteAll} handleDeleteQa={handleDeleteQa}/>
            <ToastContainer/>
        </div>
    );
};

export default SecondProject;

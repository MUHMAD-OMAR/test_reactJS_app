const FormProject = ({handleAddQa, handleQuestionChange, handleAnswerChange, question, answer}) => {

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">أسئلة وأجوبة</h2>
            <div className="flex flex-col space-y-4">
                {/* سؤال */}
                <input
                    className="bg-gray-800 text-white rounded-md px-4 py-2"
                    type="text"
                    placeholder="السؤال"
                    value={question}
                    onChange={handleQuestionChange}
                />
                <input
                    className="bg-gray-800 text-white rounded-md px-4 py-2"
                    type="text"
                    placeholder="الإجابة"
                    value={answer}
                    onChange={handleAnswerChange}
                />
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2"
                    onClick={handleAddQa}>
                    إرسال
                </button>
            </div>
        </div>
    );
};

export default FormProject;
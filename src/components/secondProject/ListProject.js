import React from 'react';

const ListProject = ({qaList, handleDeleteQa, handleDeleteAll}) => {

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-4">الأسئلة والأجوبة</h2>
            {qaList.length > 0 ? (
                <ul className="space-y-4">
                    {qaList.map((qa, index) => (
                        <li
                            key={index}
                            className="bg-gray-800 p-4 rounded-md flex justify-between items-center"
                        >
                            <div>
                                <p className="font-bold">{qa.question}</p>
                                <p>{qa.answer}</p>
                            </div>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2"
                                onClick={() => handleDeleteQa(index)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.707 10l4.147 4.146a.5.5 0 01-.708.708L10 10.707l-4.146 4.147a.5.5 0 01-.708-.708L9.293 10 5.146 5.854a.5.5 0 01.708-.708L10 9.293l4.146-4.147a.5.5 0 11.708.708L10.707 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>لم يتم إضافة أي أسئلة وأجوبة حتى الآن.</p>
            )}
            {qaList.length > 0 && (
                <button
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md px-4 py-2 mt-4"
                    onClick={handleDeleteAll}
                >
                    مسح الكل
                </button>
            )}
        </div>
    );
};

export default ListProject;
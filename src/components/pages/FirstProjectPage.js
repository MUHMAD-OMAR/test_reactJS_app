import React, {useState} from 'react';
import DataCount from "../firstProject/DataCount";
import DataPerson from "../firstProject/DataPerson";
import ButtonProject from "../firstProject/ButtonProject";
import secondData from "../secondProject/secondData";

const FirstProjectPage = () => {
    const [persons, setPersons] = useState(secondData);

    const deleteAllPersons = () => {
        setPersons([]);
    }

    const showAllPersons = () => {
        setPersons(secondData);
    }


    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <DataCount personsData={persons}/>
            <DataPerson personsData={persons}/>
            <ButtonProject personsData={persons} deleteAll={deleteAllPersons} showAll={showAllPersons}/>
        </div>
    );
};

export default FirstProjectPage;
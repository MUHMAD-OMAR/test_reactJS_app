import React, {useState} from 'react';
import DataCount from "../components/firstProject/DataCount";
import DataPerson from "../components/firstProject/DataPerson";
import ButtonProject from "../components/firstProject/ButtonProject";
import secondData from "../components/secondProject/secondData";

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
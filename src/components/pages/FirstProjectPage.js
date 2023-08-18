import React, {useState} from 'react';
import DataCount from "../firstProject/DataCount";
import DataPerson from "../firstProject/DataPerson";
import ButtonProject from "../firstProject/ButtonProject";
import firstData from "../../firstData";

const FirstProjectPage = () => {
    const [persons, setPersons] = useState(firstData);

    const deleteAllPersons = () => {
        setPersons([]);
    }

    const showAllPersons = () => {
        setPersons(firstData);
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
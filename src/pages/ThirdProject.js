import React, {useState} from 'react';
import HeaderProject from "../components/thirdProject/HeaderProject";
import CategoryProject from "../components/thirdProject/CategoryProject";
import FoodCard from "../components/thirdProject/FoodCard";
import foods from "../components/thirdProject/ThirdData";


const ThirdProject = () => {
    const [foodsList, setFoodsList] = useState(foods);

    const filterFoods = (cat) => {
        if (cat === "all") {
            setFoodsList(foods);
        } else {
            const items = foods.filter((item) => item.category === cat);
            setFoodsList(items);
        }
    }


    const filterSearch = (txt) => {
        const items = foods.filter((item) => item.name.includes(txt));
        setFoodsList(items);
    }



    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <HeaderProject handelSearch={filterSearch}/>

            <CategoryProject filterByCategory={filterFoods} list={foodsList}/>

            <FoodCard list={foodsList}/>
        </div>
    );
};

export default ThirdProject;
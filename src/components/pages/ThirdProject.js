import React, {useState} from 'react';
import HeaderProject from "../thirdProject/HeaderProject";
import CategoryProject from "../thirdProject/CategoryProject";
import FoodCard from "../thirdProject/FoodCard";
import foods from "../thirdProject/ThirdData";


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


    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <HeaderProject/>

            <CategoryProject filterByCategory={filterFoods} list={foodsList}/>

            <FoodCard list={foodsList}/>
        </div>
    );
};

export default ThirdProject;
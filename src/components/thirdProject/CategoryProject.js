import React from 'react';
import {Button} from "antd";
import foods from "./ThirdData";

const CategoryProject = ({filterByCategory}) => {
    const handelFilterCat = (cat) => {
        filterByCategory(cat)
    }

    const uniqueFoods = [...new Map(foods.map(item => [item.category, item])).values()];


    return (<div className="flex justify-center items-center flex-col">
        <section>
            <h1 className="text-3xl font-bold">مشروع الطعام</h1>
            <span className="w-44 border-b-2 border-amber-300 my-4"></span>
        </section>

        <section className="flex space-x-5 my-8">
            <Button onClick={() => handelFilterCat("all")} className="text-amber-50">All</Button>
            {uniqueFoods.map((item, index) => {
                return (<Button key={index} onClick={() => handelFilterCat(item.category)}
                                className="text-amber-50">{item.category}</Button>)
            })}
        </section>

    </div>);
};

export default CategoryProject;
import React from 'react';
import {Link} from "react-router-dom";

const FoodCard = ({list}) => {
    return (
        <div>
            {
                list.length > 0 ?
                    list.map((item, index) => {
                        return (
                            <Link to={`/thirdProject/${item.id}`}
                                  key={index} className="flex items-center my-4 mx-24 p-8 rounded-xl bg-blue-800">
                                <div className="flex-shrink-0">
                                    <img src={item.img} alt={item.name} className="h-16 w-16 rounded-md object-cover"/>
                                </div>
                                <div className="ml-4">
                                    <h2 className="text-lg font-bold">{item.name}</h2>
                                    <p className="text-sm ">{item.category}</p>
                                </div>
                                <div className="ml-auto">
                                    <span className="text-lg font-bold">${item.price}</span>
                                </div>
                            </Link>
                        )
                    })
                    :
                    <p>No Data Here</p>
            }
        </div>
    );
};

export default FoodCard;

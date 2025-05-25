import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const itemList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="relative flex hover:cursor-pointer ">
        <img src={strMealThumb} alt="strMealThumb" className="w-[350px] h-[350px] border mx-2 my-3 rounded-md" />
        <section className="absolute bottom-5 left-6 text-xl text-[rgb(241,87,151)] font-extrabold">
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="flex flex-wrap justify-center items-center ">{itemList}</div>;
};

export default Products;

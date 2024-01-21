import { useSearchParams } from "react-router-dom";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

 

const Categories = () => {
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] =useSearchParams();
    const category=params.get('category');
    return (
        <div className="py-4 flex items-center justify-between overflow-x-auto">
            {categories?.map(item=><CategoryBox key={item.label} category={item} selected={category ===item.label}></CategoryBox>)}
        </div>
    );
};

export default Categories;
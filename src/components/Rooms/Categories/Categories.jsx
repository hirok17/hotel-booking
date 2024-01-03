import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

 

const Categories = () => {
    return (
        <div className="py-4 flex items-center justify-between overflow-x-auto">
            {categories?.map(category=><CategoryBox key={category.label} category={category}></CategoryBox>)}
        </div>
    );
};

export default Categories;
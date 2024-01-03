 

const CategoryBox = ({category}) => {
    const {label, icon:Icon}=category;
    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2 border-b-2 hover:text-neutral-800 transition cursor-pointer">
             <Icon size={26}></Icon>
            <h2 className="text-sm">{label}</h2>
        </div>
    );
};

export default CategoryBox;
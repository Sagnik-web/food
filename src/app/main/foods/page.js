import FoodCart from "@/components/FoodCart/FoodCart";


export default function Foods(){
    return(
        <>
            <div className="flex flex-wrap m-auto max-w-screen-xl">
                <FoodCart/>
                <FoodCart/>
                <FoodCart/>
                <FoodCart/>
            </div>
        </>
    )
}
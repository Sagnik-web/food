import DeliverOrderCard from "@/components/DeliverOrderCard/DeliverOrderCard"


export default function orders(){

    const con = true

    return(
        <>
            <ul className="bg-white shadow overflow-hidden sm:rounded-md max-w-screen-lg mx-auto mt-16">
                <DeliverOrderCard con={false}/>



</ul>
        </>
    )
}
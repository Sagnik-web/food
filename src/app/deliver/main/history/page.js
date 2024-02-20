import DeliverOrderCard from "@/components/DeliverOrderCard/DeliverOrderCard";


export default function history(){
    return(
        <div className="mt-7">
            <div className="max-w-screen-xl m-auto mb-2">
                <DeliverOrderCard hisstatus={true} history={true} time="10:20" />
                
            </div>

            <div className="max-w-screen-xl m-auto mb-2">
                <DeliverOrderCard hisstatus={false} history={true} time="10:20" />
                
            </div>

            <div className="max-w-screen-xl m-auto mb-2">
                <DeliverOrderCard hisstatus={true} history={true} time="10:20" />
                
            </div>
        </div>
    )
}
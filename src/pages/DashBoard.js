
import  bg_first from '../assets/dashBoard/bg_first.jpg'
import  burger from '../assets/dashBoard/burger.png'
import OrngButton from "../components/common/OrngButton";
import OfferSection from "../components/core/Dashboard/offerSection";

function DashBoard() {

    return (
        <div className={`z-50   flex flex-col  w-[90vw]  mt-[30px] 
        text-3xl  text-black mx-auto my-auto  bg-[#FFF6D8]  group-hover:w-[50vw] `}>

            {/*first part*/}
            <OfferSection/>

            <div className="w-[90vw] h-[100vh] flex flex-row gap-[40px] bg-black  ">




            </div>




        </div>
    )
}

export default DashBoard
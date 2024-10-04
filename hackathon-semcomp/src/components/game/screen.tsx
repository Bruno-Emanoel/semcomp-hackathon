import { ArithQuestion, ImageQuestion } from "../../util/answear-data";


export default function Screen({question}:{question:ArithQuestion|ImageQuestion}){
    if(typeof question.answear === "number"){
    return(
        <section className=" items-center justify-center mb-2 border-4 border-[#7A7A7A] rounded-[3rem] flex content-center mt-4 w-[90%] bg-[#D9D9D9] h-[50vh] p-[3rem]">
            <span className=" text-[5rem]">{question.show}</span>
        </section>
    )
    } 
    return(

        <section className="flex justify-center content-center max-h-[60vh] p-[3rem]">
            <img src={question.show}/>
        </section>
    )
}
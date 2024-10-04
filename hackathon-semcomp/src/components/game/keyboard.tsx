import { ArithQuestion, ImageQuestion } from "../../util/answear-data";

export default function Keyboard({question, guess}:{
    question:ArithQuestion|ImageQuestion;
    guess:(str:string)=>void
}){
    console.log(question)
    let keys: string[] = [];
    if(typeof question.answear === "string"){
        const alphabet = "abcdefghijklmnopqrtuvwxyz".split("");
        keys = question.answear.split("");
        alphabet.filter((letter)=>!keys.includes(letter));
        
        while(keys.length<7){
            const index = Math.floor(Math.random()*alphabet.length)
            const indexToPut = Math.floor(Math.random()*keys.length)
            keys.splice(indexToPut, 0, alphabet.splice(index, 1)[0])
        }
    } else{

        const indexOfAnswear = Math.floor(Math.random()*7);
        for(let i = 0; i<7; i++){
            if(i===indexOfAnswear){keys.push(question.answear.toString());continue;}
            const getNumber = ()=>{
                const newNumber = Math.floor(Math.random()*10);
                if(keys.includes(newNumber.toString())){getNumber();}
                else keys.push(newNumber.toString());
            }
            getNumber()
        }
    }
    return( 
        <div className=" flex flex-wrap w-[80%]">
        {keys.map((str)=>(<Key guess={guess} letter={str}/>))}
    </div>
    )
        
}

function Key({letter, guess}: {
    letter:string;
    guess:(str:string)=>void
}){
    return(
        <div className=" mx-1 flex items-center justify-center content-center rounded-[1rem] w-[52px] h-[54px] bg-[#D9D9D9]" onClick={()=>{guess(letter)}} key={letter}>
            <span className=" text-center">{letter}</span>
        </div>
    )

}
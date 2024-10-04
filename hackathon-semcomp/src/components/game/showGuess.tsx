

export default function ShowGuess({currentGuess, realAnswear}:{
    currentGuess:string;
    realAnswear: string;
}){
    const toShow = currentGuess.split("")
    for(let i = 0; i < realAnswear.length; i++){
        if(i+1>currentGuess.length){
            toShow.push("")
        }
    }
    return(
        <>
        {toShow.map((letter)=><SingleGuess letter={letter}/>)}
        </>
    )
}

function SingleGuess({letter}:{letter:string}){
    return(
        <div className=" mb-5 border-4 border-[#7A7A7A] mx-1 flex items-center justify-center content-center rounded-[1rem] w-[52px] h-[54px] bg-[#D9D9D9]">
            {letter}
        </div>
    )
}
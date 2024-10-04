import './win-lose.css'


export default function Result({resul}:{resul:"win"|"lose"}){
    return resul==="win"?
    <Win />:
    <Lose />
}

function Lose(){
    return(
        <div className="rounded-[50%] bg-red-500">
            <div className="left-errado"></div>
            <div className="right-errado"></div>
        </div>

    )
}

function Win(){
    return(
        <div className="rounded-[50%] bg-green-500">
            <div className="left-certo"></div>
            <div className="right-certo"></div>
        </div>
    )
}
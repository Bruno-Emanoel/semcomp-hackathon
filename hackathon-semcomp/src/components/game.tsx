import { useState } from "react";
import Keyboard from "./game/keyboard";
import Screen from "./game/screen";
import { ArithQuestion, ImageQuestion } from "../util/answear-data";
import BallImage from "/ball.svg";
import BusImage from "/bus.svg";
import MetroImage from "/metro.svg"
import ShowGuess from "./game/showGuess";

const stringAnswear = [
    new ImageQuestion(BallImage, "bola"),
    new ImageQuestion(BusImage, "onibus"),
    new ImageQuestion(MetroImage, "metro"),

]


export default function Game(){
  const [currentGuess, setCurrentGuess] = useState("")
  const [question, setQuestion] = useState<ArithQuestion|ImageQuestion>(new ArithQuestion("1+1", 2));
  const updateQuestion = ()=>{
      //questão numérica
      setCurrentGuess("")
    if(Math.floor(Math.random()*2) === 1){
        const firstNum = Math.floor(Math.random()*10);
        const secondNum = Math.floor(Math.random()*10);
        if(firstNum+secondNum<=9){
            setQuestion(new ArithQuestion(firstNum.toString()+"+"+secondNum.toString(   ), firstNum+secondNum));
            return
        } else if(firstNum-secondNum>=0){
            setQuestion(new ArithQuestion(firstNum.toString()+"-"+secondNum.toString(), firstNum-secondNum));
            return;
        }
        updateQuestion();

    } else{
        const indexOfQuestion = Math.floor(Math.random()*stringAnswear.length);
        setQuestion(stringAnswear[indexOfQuestion]);
        return

    }
    updateQuestion()
  }

  const guess = (str:string)=>{
    const fullGuess = currentGuess+str;
    setCurrentGuess(fullGuess);
    if(fullGuess.length === question.answear.toString().length){
        if(fullGuess===question.answear.toString()){
            alert("Acertou")
        } else{
            alert("errou")
        }
        updateQuestion();
    }
  }

  console.log(question)
  return (
    <div className="flex items-center justify-center flex-col">
     <Screen question={question} />
     <section className='flex items-center justify-center w-screen px-5'>
      <ShowGuess currentGuess={currentGuess} realAnswear={question.answear.toString()} />
     </section>
     <Keyboard question={question} guess={guess} />
    </div>
  )
}
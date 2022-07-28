import React, { useEffect, useState } from 'react';
import { pregsGeo } from '../helpers/geografia';

const pregs = [
  {key: 'unocero', pregs: []},
  {key: 'ochonueve', pregs: pregsGeo},
  {key: 'cuatrodoce', pregs: []}
];

export interface OptionProps {
  id: number;
  pregunta: string;
  respuestas: Answers[];
}
interface Answers{
  opcion: string,
  esCorrecta: boolean;
}

export const usePreguntas = () => {

  const [stateQuestions, setStateQuestions] = useState<any[]>([]);
  const [questionsSelected, setQuestionsSelected] = useState<OptionProps[]>([]);
  const [isReady, seIsReady] = useState(false);
 
  const getQuestionFromDB = (categorieKey?:string) => {

    const categorySearched = pregs.find( categ => categ.key === categorieKey); 
    
    if(categorySearched) {
      setStateQuestions(categorySearched.pregs);
    }

    setTimeout( () => {
      seIsReady(true);
    },2000);
  }

  const selectRandomQuest = () => {
    const desordenado = stateQuestions.sort(() => Math.random() - 0.5);
    setQuestionsSelected(desordenado.slice(0,10));
  }

  return {getQuestionFromDB,selectRandomQuest, questionsSelected, isReady};
}

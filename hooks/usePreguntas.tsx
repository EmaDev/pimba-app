import React, { useEffect, useState } from 'react';
import { pregsGeo } from '../helpers/geografia';

const pregs = pregsGeo;

interface OptionProps {
    id: string;
    correcta: number;
    pregunta: string;
    contestacion: [];
}

export const usePreguntas = () => {

  const [stateQuestions, setStateQuestions] = useState<any[]>([]);
  const [questionsSelected, setQuestionsSelected] = useState<OptionProps[]>([]);

  useEffect( () => {
    //get preguntas;
    setStateQuestions(pregs);
  },[]); 

  const selectRandomQuest = () => {
    const desordenado = stateQuestions.sort(() => Math.random() - 0.5);
    setQuestionsSelected(desordenado.slice(0,10));
  }

  return {selectRandomQuest, questionsSelected};
}

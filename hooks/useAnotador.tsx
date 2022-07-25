import Image from 'next/image';
import React, { useState } from 'react';
import {FiPlusCircle, FiMinusCircle} from 'react-icons/fi';
import { AnotadorButtons, AnotadorContainer, AnotadorImage } from '../styled/Games.module';
const img0 = require('../assets/truco/0.png');
const img1 = require('../assets/truco/1.png');
const img2 = require('../assets/truco/2.png');
const img3 = require('../assets/truco/3.png');
const img4 = require('../assets/truco/4.png');
const img5 = require('../assets/truco/5.png');

interface TeamPoints {
    quantity: number;
    renders: Point[];
    rendersActual: number;
}
interface Point {
    id: number;
    quantity: number;
}

const initialPoints: TeamPoints = {
    quantity: 0,
    rendersActual: 0,
    renders: [
        { id: 0, quantity: 0 },
    ]
}

export const useAnotador = () => {

    const [teamState, setTeamState] = useState<TeamPoints>(initialPoints);
    const {quantity} = teamState;
    const resetPoints = () => {
        setTeamState(initialPoints);
    }

    const handleAddPoint = () => {
        
        const total = teamState.quantity + 1;
        let actualRender = teamState.rendersActual;
        
        if (total >= 30) return;

        if (total % 5 === 0 && total < 30) {
            actualRender++;
            
            return setTeamState({
                ...teamState,
                rendersActual: teamState.rendersActual + 1,
                quantity: teamState.quantity + 1,
                renders: [
                    ...teamState.renders,
                    { id: teamState.rendersActual + 1, quantity: 1 }
                ]
            })
        }

        const actualRenderSearch = teamState.renders.find(render => render.id ===
            actualRender) || { id: 10, quantity: 0 };

        setTeamState({
            ...teamState,
            quantity: teamState.quantity + 1,
            renders: [
                ...teamState.renders.filter(render => render.id !== actualRender),
                { id: actualRenderSearch.id, quantity: (actualRenderSearch.quantity < 5 ? actualRenderSearch?.quantity + 1 : actualRenderSearch.quantity)}
            ]
        });
    }

    const handleRemovePoint = () => {
        
        const total = teamState.quantity;
        let actualRender = teamState.rendersActual;

        if (total <= 0) return;

        if (total%5 === 0) {
            console.log('entrooooo');
            return setTeamState({
                ...teamState,
                rendersActual: teamState.rendersActual - 1,
                quantity: teamState.quantity - 1,
                renders: teamState.renders.filter( render => render.id !== teamState.rendersActual)
            })
        }

        const actualRenderSearch = teamState.renders.find(render => render.id ===
            actualRender) || { id: 10, quantity: 0 };

        setTeamState({
            ...teamState,
            quantity: teamState.quantity - 1,
            renders: [
                ...teamState.renders.filter(render => render.id !== actualRender),
                { id: actualRenderSearch.id, quantity: actualRenderSearch?.quantity - 1 }
            ]
        });
    }

    const Anotador = () => {
        return (
            <AnotadorContainer>
                <h3>{quantity}</h3>
                {
                    teamState.renders.map((item, i) => (
                        <AnotadorImage key={i}>
                            <Image
                                src={
                                    (quantity) === 0 ? require(`../assets/truco/0.png`)
                                    :
                                    require(`../assets/truco/${item.quantity}.png`)
                                }
                            />
                        </AnotadorImage>
                    ))
                }
                <AnotadorButtons>
                    <FiPlusCircle onClick={handleAddPoint}/>
                    <FiMinusCircle onClick={handleRemovePoint}/>
                </AnotadorButtons>
                
            </AnotadorContainer>
        )
    }


    return {Anotador, resetPoints,quantity};
}

import React from 'react';
import {BsSearch} from 'react-icons/bs';
import { Searcher } from '../styled/Global.module';

export const useSearcher = () => {

    const SearcherLayout = () => {
        return (
            <Searcher>
                <BsSearch/>
                <input type={'text'} placeholder="Busca una bebida" />
            </Searcher>
        )
    }

    return {SearcherLayout};
}

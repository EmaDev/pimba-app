import React from 'react';
import {BsSearch} from 'react-icons/bs';
import { Searcher } from '../styled/Global.module';

interface Props {
    title: string;
}
export const useSearcher = () => {

    const SearcherLayout = ({title}:Props) => {
        return (
            <Searcher>
                <BsSearch/>
                <input type={'text'} placeholder={title} />
            </Searcher>
        )
    }

    return {SearcherLayout};
}

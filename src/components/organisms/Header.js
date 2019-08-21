
import React, { useState, useEffect } from 'react';
import SearchBar from '../molecules/SearchBar'
import { useDispatch } from "react-redux";
import { getSearchRequest } from '../../actions/SearchAction';

//useEffectの監視用にimport必要なくなったら消す
//import { hijackEffects } from "stop-runaway-react-effects";

function Header(props) {
    let query = null;
    if (props.location.pathname === "/SearchResult") {
        let params = new URLSearchParams(props.location.search);
        query = params.get("search_query");
    }
    const [term, setTerm] = useState(query ? query : "");
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(getSearchRequest(term))
    }
    //useEffectの記述がなんか微妙な(パフォーマンス的に)気がする
    useEffect(() => {
        /*
        useEffectがループもしくは多く呼び出される時、warningを出す
        Warningがでてうるさいからコメントアウトしとく
        hijackEffects();
        */
        if (query===term) {
            dispatch(getSearchRequest(query));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <header className="mdl-layout__header">
            <div className="mdl-layout__header-row">
                <span className="mdl-layout-title">Youtube Player</span>
                <div className="mdl-layout-spacer"></div>
                <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
        </header>
    )
};
export default Header;

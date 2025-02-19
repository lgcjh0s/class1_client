import { useEffect, useState } from "react";
import { IApprData, IToken } from "../interface/layout.interface";
import { http } from "../tools/http.tools";
import { useNavigate } from "react-router-dom";
import { stateApprNo } from "../component/atom.component";
import { useAtom } from "jotai";

const List = () => {

    useEffect(() => {
    }, []);

    const login = async () => {
    };

    const getApprList = async () => {
    };

    const moveDetail = (apprNo: number) => {
    }

    return (
        <div>
            <ul className="usage">
            
            </ul>
        </div>
    )
};

export default List;
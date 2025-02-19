import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IApprData } from "../interface/layout.interface";
import { stateApprNo } from "../component/atom.component";
import { http } from "../tools/http.tools";
import { useAtom, useAtomValue } from "jotai";

const Detail = () => {

    useEffect(() => {
    }, []);

    const getApprData = async (apprNo: number) => {
    };

    const moveList = () => {
    }
    
    return (
        <>
        </>
    )
};

export default Detail;
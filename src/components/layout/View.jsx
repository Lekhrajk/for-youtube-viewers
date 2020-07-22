import React from "react";
import { useRecoilValue } from "recoil";
import { viewState } from "../../recoil/productRecoil";

const ColumnView = (props) => {
    return <div className="col-md-3 col-12 text-center">{props.children}</div>;
};

const RowView = (props) => {
    return <div className="col-md-6 col-12 text-center">{props.children}</div>;
};

const View = (props) => {
    const view = useRecoilValue(viewState);
    if (view === "column") return <ColumnView>{props.children}</ColumnView>;
    else return <RowView>{props.children}</RowView>;
};
export default View;
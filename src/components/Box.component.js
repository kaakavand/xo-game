import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numAction } from "../redux/action";

function Box(props) {
    const [first, setfirst] = useState("2");
    const dispatch = useDispatch();
    const nobat = useSelector((state) => state.nobat.nobat);

    const genrateOx = (e) => {
        const id = e.target.id;

        if (nobat) {
            setfirst("0");
            props.name(id);
        } else {
            setfirst("1");
            props.name(id);
        }

        dispatch(numAction(!nobat));
    };

    return (
        <div className="box" onClick={genrateOx} id={props.id}>
            {first === "1" ? "o" : false}
            {first === "0" ? "x" : false}
        </div>
    );
}

export default Box;

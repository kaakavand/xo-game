import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Box from "../components/Box.component";
import {
    checkO1,
    checkO2,
    checkO3,
    checkO4,
    checkO5,
    checkO6,
    checkO7,
    checkO8,
    checkX1,
    checkX2,
    checkX3,
    checkX4,
    checkX5,
    checkX6,
    checkX7,
    checkX8,
} from "../utils/check";

function Home(props) {
    const nobat = useSelector((state) => state.nobat.nobat);
    const [nobatO, setNobatO] = useState([]);
    const [nobatX, setNobatX] = useState([]);

    useEffect(() => {
        checkO1(nobatO);
        checkO2(nobatO);
        checkO3(nobatO);
        checkO4(nobatO);
        checkO5(nobatO);
        checkO6(nobatO);
        checkO7(nobatO);
        checkO8(nobatO);

        checkX1(nobatX);
        checkX2(nobatX);
        checkX3(nobatX);
        checkX4(nobatX);
        checkX5(nobatX);
        checkX6(nobatX);
        checkX7(nobatX);
        checkX8(nobatX);
    }, [nobatO, nobatX]);

    return (
        <div className="container">
            <Box
                id="1"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="2"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="3"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="4"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="5"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="6"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="7"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="8"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
            <Box
                id="9"
                name={(name) =>
                    nobat
                        ? setNobatX([...nobatX, ...name])
                        : setNobatO([...nobatO, ...name])
                }
            />
        </div>
    );
}

export default Home;

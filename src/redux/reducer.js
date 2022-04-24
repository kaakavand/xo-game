const initialState = {
    nobat : false,
};

export const numSumRed = (state = initialState, { type, payload }) => {
    switch (type) {
        case "NOBAT":
            return { nobat: payload };
        default:
            return state;
    }
};

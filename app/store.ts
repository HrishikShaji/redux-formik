import { createStore } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

type ActionType = {
	type: string;
	info: string;
};

type InitialState = {
	noOfCakes: number;
	noOfIcecreams: number;
};

const initialState: InitialState = {
	noOfCakes: 10,
	noOfIcecreams: 15,
};

export function buyCake() {
	return {
		type: BUY_CAKE,
		info: "buy-cake",
	};
}

export function buyIceCream() {
	return {
		type: BUY_ICECREAM,
		info: "buy-icecream",
	};
}

function reducer(state: InitialState = initialState, action: ActionType) {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				noOfCakes: state.noOfCakes - 1,
			};
		case BUY_ICECREAM:
			return {
				...state,
				noOfIcecreams: state.noOfIcecreams - 1,
			};

		default:
			return state;
	}
}

export const store = createStore(reducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
	console.log("updated", store.getState()),
);

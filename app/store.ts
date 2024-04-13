import { createStore, combineReducers } from "redux";

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

type ActionType = {
  type: string;
  info: string;
};

type InitialCakeState = {
  noOfCakes: number;
};
type InitialIceCreamState = {
  noOfIcecreams: number;
};

const initialCakeState: InitialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState: InitialIceCreamState = {
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

function cakeReducer(
  state: InitialCakeState = initialCakeState,
  action: ActionType,
) {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };

    default:
      return state;
  }
}
function iceCreamReducer(
  state: InitialIceCreamState = initialIceCreamState,
  action: ActionType,
) {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

export const store = createStore(rootReducer);
console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updated", store.getState()),
);

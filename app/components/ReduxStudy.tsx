"use client";

import { buyCake, buyIceCream, store } from "../store";

export const ReduxStudy = () => {
  return (
    <div className="p-10 flex flex-col bg-neutral-700 rounded-md text-white">
      <div className="flex gap-10 items-center">
        <div className="flex flex-col gap-2">
          <h1>No of Cakes</h1>
          <h1>{store.getState().cake.noOfCakes}</h1>
          <button
            onClick={() => store.dispatch(buyCake())}
            className="p-2  bg-white text-black rounded-md"
          >
            BUY CAKE
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <h1>No of IceCreams</h1>
          <h1>{store.getState().iceCream.noOfIcecreams}</h1>
          <button
            onClick={() => store.dispatch(buyIceCream())}
            className="p-2  bg-white text-black rounded-md"
          >
            BUY ICECREAMS
          </button>
        </div>
      </div>
    </div>
  );
};

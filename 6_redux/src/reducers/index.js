import fetch from "isomorphic-fetch";
import "es6-promise/auto";

const actions = {
  GET_ITEMS:"GET_ITEMS",
  ADD_ITEM:"ADD_ITEM",
  ERROR_ITEM:"ERROR_ITEM",
  REMOVE_ITEM:"REMOVE_ITEM",
  GET_ASYNC_ITEMS:"GET_ASYNC_ITEMS",

}

const reducer = (state = {items:[]}, action) => {

  switch (action.type) {
    case actions.GET_ITEMS:
      return {items:["item-1","item-2","item-3"]}

    case actions.ADD_ITEM:
      return Object.assign({}, state, {
        items: [...state.items, action.item]
      })

    case actions.REMOVE_ITEM:
      const newItemList = state.items.filter(function(i) {
        return i != action.item
      });
      return Object.assign({}, state, {
        items: newItemList
      });

    case actions.GET_ASYNC_ITEMS:
      return {items:action.items};

    default:
      return state
  }
}

const getItems = () => {
  return {
    type: actions.GET_ITEMS
  }
}

const getAsyncItems = () => {
  return dispatch => {
    return fetch("http://localhost:8000/items").then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(data =>{
        dispatch({type:actions.GET_ASYNC_ITEMS, items: data});
    }).then((data)=>{
      dispatch(error());
    });
  }
}

const addItem = (item) => {
  return {
    type: actions.ADD_ITEM,
    item:item
  }
}

const removeItem = (item) => {
  return {
    type: actions.REMOVE_ITEM,
    item:item
  }
}

const error = (item) => {
  return {
    type: actions.ERROR_ITEM,
    message:"dddf"
  }
}

export default reducer;
export {getItems,addItem,removeItem,getAsyncItems}
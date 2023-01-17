import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
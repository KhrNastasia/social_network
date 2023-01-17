import { addNewMsgActionCreator, updNewMsgActionCreator} from "../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updNewMsgBody: (msg_text) => {
            dispatch(updNewMsgActionCreator(msg_text))
        },
        addNewMsg: () => {
            dispatch(addNewMsgActionCreator());
        }
    };
};

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;

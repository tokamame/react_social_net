import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} src={d.avaSrc}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newDialogElement = React.createRef();

    let addDialog = () => {
        let text = newDialogElement.current.value;
        alert(`You typed ${text}`);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref={newDialogElement} />
            </div>
            <div>
                <button onClick={addDialog}>Add new dialog </button>
            </div>

        </div>
    )
}

export default Dialogs;
function Modal(props) {
    return (
        <div className='modal'>
        <p>{props.text}</p>
        <button className="btn btn--alt" onClick={props.onClick}> Cancle</button>
        <button className="btn " onClick={props.onClick}> Confirm</button>
        </div>

    );
}

export default Modal;
function Button(props) {
    return (
            <button
                onClick={ () => console.log(props.log)  }
                disabled={props.disabled}
            >
                {props.buttonName}
            </button>
    )
}




export default Button;
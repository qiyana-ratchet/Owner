import styles from "../css/Button.module.css"

function Button(props) {
    return (
        <div>
            <button className={`${styles.design1} ${props.className}`}
                    onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}
function Button2(props) {
    return (
        <div>
            <button className={`${styles.design2} ${props.className}`}
                    onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );
}

export default Button;

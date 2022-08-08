import parserPostcss from "prettier/parser-postcss";
import React from "react";
import styles from '/src/pagestyle.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark} from '@fortawesome/free-solid-svg-icons'

function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupInner}>
                <button className={styles.closeBtn} onClick={() => props.setTrigger(false)}>
                    <FontAwesomeIcon icon={faSquareXmark} size="2x"/>
                </button>
                { props.children}
            </div>

        </div>
    ) : "";
}

export default Popup
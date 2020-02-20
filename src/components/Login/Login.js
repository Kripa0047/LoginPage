import React from 'react';
import styles from './Login.module.css';

const login = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <div className={styles.colorBorder}></div>
                <div className={styles.content}>
                    <div className={styles.header}>LOGIN</div>
                    <div className={styles.inputContainer}>
                        <input className={styles.inputFild} type="text" placeholder="EMAIL" />
                    </div>
                    <div className={styles.inputContainer}>
                        <input className={styles.inputFild} type="password" placeholder="PASSWORD" />
                    </div>
                    <div className={styles.inputContainer} style={{ textAlign: "right" }}>
                        <span className={styles.forgetPass}>
                            <a href="#">Forgot your passwor?</a>
                        </span>
                        <span className={styles.memorize}>
                            MEMORIZE
                            <label className={styles.switch} >
                                <input type="checkbox" className="ck"/>
                                <span className={styles.slider} onClick={props.yesNo}>
                                    <span className={styles.yes} style={props.checkedState?{color:"#ffffff"}:{color:"#ffffff00"}}>YES</span>
                                    <span className={styles.no} style={!props.checkedState?{color:"#ffffff"}:{color:"#ffffff00"}}>NO</span>
                                </span>
                            </label>
                        </span>
                    </div>
                    <div className={styles.loginButton}>
                        LOGIN
                    </div>
                    <div className={styles.noAccount}>
                        <span>No account ? </span>
                        <a href="#" >Register now</a>
                    </div>
                </div>
                <div className={styles.facebook}>
                    <span className={styles.facebookLogo}>f</span>
                    <span>CONNECT WITH FACEBOOK</span>
                </div>
            </div>
        </div>
    )
}

export default login;
import React, {useState} from 'react';
import styles from './TestPage.module.scss'
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import LogoLoader from "../../components/LogoLoader";

const TestPage = () => {

    const [checkBox, setCheckBox] = useState<boolean>(false)

    return (
        <div className={styles.form}>
            <TextField variant={"red"} fullWidth inputProps={{placeholder: 'Email'}}/>
            <TextField variant={"red"} fullWidth inputProps={{placeholder: 'Password', type: 'password'}}/>
            <CheckBox label={'I agree to terms....'} value={checkBox} variant={'red'}
                      onClick={() => setCheckBox(!checkBox)}/>
            <Button
                disabled={!checkBox}
                variant={'red'}
                classes={{
                    label: styles.label
                }}
            >
                {'Login'}
            </Button>
            <div className={styles.loader}>
                <LogoLoader isVisible={checkBox} size={60} />
            </div>
        </div>
    );
};

export default TestPage;
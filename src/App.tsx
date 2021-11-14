import React, {useState} from 'react'
import Button from "./components/Button";
import './test.scss'
import TextField from "./components/TextField";
import CheckBox from "./components/CheckBox";
import TestPage from "./pages/TestPage/TestPage";

const App: React.FC = (): JSX.Element => {

    const [checkBox, setCheckBox] = useState<boolean>(false)

    return (
        <>
            {/*<div className={'test-item'}>*/}
            {/*    <Button variant={'red'} classes={{root: 'test'}}>*/}
            {/*        red*/}
            {/*    </Button>*/}
            {/*    <Button variant={'green'} classes={{root: 'test'}}>*/}
            {/*        green*/}
            {/*    </Button>*/}
            {/*    <Button variant={'yellow'} classes={{root: 'test'}}>*/}
            {/*        yellow*/}
            {/*    </Button>*/}
            {/*    <Button variant={'blue'} classes={{root: 'test'}}>*/}
            {/*        blue*/}
            {/*    </Button>*/}
            {/*    <Button variant={'dark'} classes={{root: 'test'}}>*/}
            {/*        dark*/}
            {/*    </Button>*/}
            {/*</div>*/}
            {/*<div className={'test-item'}>*/}
            {/*    <TextField inputProps={{placeholder: 'red'}} fullWidth variant={'red'}/>*/}
            {/*    <TextField inputProps={{placeholder: 'blue'}} fullWidth variant={'blue'}/>*/}
            {/*    <TextField inputProps={{placeholder: 'green'}} fullWidth variant={'green'}/>*/}
            {/*    <TextField inputProps={{placeholder: 'yellow'}} fullWidth variant={'yellow'}/>*/}
            {/*</div>*/}

            {/*<div className={'test-item'}>*/}
            {/*    <CheckBox label={'red'} value={checkBox} variant={'red'} onClick={() => setCheckBox(!checkBox)}/>*/}
            {/*    <CheckBox label={'dark'} value={checkBox} variant={'dark'} onClick={() => setCheckBox(!checkBox)}/>*/}
            {/*    <CheckBox label={'green'} value={checkBox} variant={'green'} onClick={() => setCheckBox(!checkBox)}/>*/}
            {/*    <CheckBox label={'blue'} value={checkBox} variant={'blue'} onClick={() => setCheckBox(!checkBox)}/>*/}
            {/*    <CheckBox label={'yellow'} value={checkBox} variant={'yellow'} onClick={() => setCheckBox(!checkBox)}/>*/}
            {/*</div>*/}
<TestPage/>
            </>
    )
}

export default App

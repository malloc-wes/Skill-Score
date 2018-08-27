import React from 'react';
import '../App.css';

const ClassWhatIf = (props) => {
    return (
        <form className="box" onSubmit={props.getJob}>
            <input style={{ margin: "20px auto", display: "block"}} type="text" name="jobtitle" />
            <button>Submit</button>
        </form>
    );
}
export default ClassWhatIf;
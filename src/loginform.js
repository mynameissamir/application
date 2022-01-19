import React from "react";
import { useNavigate } from "react-router-dom"
import './loginform.css';

function Loginform() {
    const [logindata, updatelogindata] = React.useState([]);
    const [data, setdata] = React.useState(false);
    const navigate = useNavigate();
    var formData;
    const handleSubmit = (event) => {
        event.preventDefault();
        formData = new FormData(event.currentTarget);
        //   for (let [key, value] of formData.entries()) {
        //     console.log(key, value);
        //     }

        updatelogindata(formData);
        setdata(true);
        navigate('/dashboard');
    }

    return (
        <form className="log-form" onSubmit={handleSubmit} >
            <div className="forusername">
                <input type="text" placeholder="Enter Username" name="uname" required />
            </div>

            <div className="forpassword">

                <input type="password" placeholder="Enter Password" name="psw" required />
            </div>
            <button class="btn" type="submit" >Login</button>
            <div>{data && logindata.get('uname')}</div>
        </form>

    );
}
export default Loginform;
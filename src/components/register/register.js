import { useRef, useState, useEffect } from "react";
import Button from 'react-bootstrap/Button'
import './register.css'
import { ReactComponent as IconUser } from "../../assets/feather-icons/user.svg"
import { ReactComponent as IconKey } from "../../assets/feather-icons/key.svg"
import { ReactComponent as IconEmail } from "../../assets/feather-icons/mail.svg"

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;
// const PASS_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;

const Register = () => {
  const userRef = useRef();
  const passRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [validName, setValidName] = useState(false);
  const [MatchingPass, setMatchingPass] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  // useEffect(() => {
  //   passRef.current.focus();
  // }, [])

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user])

  useEffect(() => {
    // const result = PASS_REGEX.test(pass);
    // setValidPass(result);
  }, [pass])

  useEffect(() => {
    setErrMsg(validName ? "yes" : "no");
  }, [validName])
  return (
    <section>
      <form>
        <div className="input-form">
          <div className="header">
            Sign-Up
          </div>
          <div className="input">
            <label htmlFor="username"> <IconUser/> </label>
            <input type="text" id="username" autocomplete="false" ref={userRef} placeholder="Username"
                  aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote"
                  onChange={(e) => setUser(e.target.value)}/>
          </div>
          <p id="uidnote" className={user && !validName ? "instructions" : "offscreen"}>
            {validName ? "Yes" : "No"}, the username "{user}" is {validName ? "valid" : "invalid"}
          </p>
          <div className="input">
            <label htmlFor="password"> <IconKey/> </label>
            <input type="text" id="password" autocomplete="false" ref={passRef} placeholder="Password"
                  aria-invalid={validName ? "false" : "true"} aria-describedby="uidnote"
                  onChange={(e) => setPass(e.target.value)}/>
          </div>
          {/* <p id="uidnote" className={user && !validName ? "instructions" : "offscreen"}> */}
          {/* {/\*   {validName ? "Yes" : "No"}, the password "{pass}" is {true ? "valid" : "invalid"} *\/} */}
          {/* </p> */}
          <div className="submit-container">
            <Button>Submit</Button>
          </div>
        </div>
    </form>
    </section>
  )
}

export default Register

import { useRef, useState, useEffect } from "react"
export const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(''); //input 1
    const [pwd, setPwd] = useState(''); //input 2
    const [errMsg, setErrMsg] = useState('');

    //set focus on first input
    useEffect(() => {
        userRef.current.focus()
    }, [])

    //empty error message if user changes the input
    useEffect(() => {
        userRef.current.focus()
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('submitted');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <Link to='/about'>To About Page</Link>
        </>
    );
}
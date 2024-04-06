import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [auth, setAuth] = useState({ email: "", password: "" })
    const [showPassword, setShowPassword] = useState(true)
    const handleAuthLogin = (e) => {
        setAuth(prev => ({ ...prev, [e.target.name]: e.target.value }))

    }
    // console.log(auth)
    const handleAuth = (e) => {
        e.preventDefault();
        // dispatch(authLoginAction(auth))
    }
    return (
        <div className="w-auto  bg-gradient-to-b text-gray-600 from-gray-800 to-white-500">
            <div className="flex w-auto items-center justify-center h-screen ">
                <div className="md:flex  bg-white -auto bg-card py-8 px-4 sm:p-12 md:p-16 sm:rounded-2xl md:rounded sm:shadow md:shadow-none sm:bg-card ng-tns-c151-2">
                    <div className="w-[100%] max-w-80 mx-auto sm:mx-0  ">
                        <div className="w-full justify-center  flex" style={{ marginLeft: '10% !important' }}>
                            <h1 className='text-4xl  font-bold'>Zia-ul-Rehman</h1>
                        </div>
                        <div className="mt-8 text-4xl font-extrabold text-gray-600 tracking-tight leading-tight ng-tns-c151-2 text-center">
                            Log in to your Account
                        </div>
                        <form onSubmit={handleAuth} className="mt-8 ng-tns-c151-2 ng-untouched ng-pristine ng-invalid">
                            {/* Email Input */}
                            <div className="mb-4">
                                <label htmlFor="email">Email</label>
                                <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                    <img className='mr-[40px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAOhJREFUSEtjZKAxYKSx+QzDywIrYHDFArEyhcH2Aqh/BhAfA5mDHESLgXxxCg2Hab8LZGSiW7ALKguyGeQbcgCyXjdcFoAkQBaUAjE3kbZ8BarrhgYLzKE4LQgCKvwCxDxAXEKEb0Cu7kHSsw7qKJwWgAwHaQBHEh7fILsapg7kIJDDQACnBbBQOQpk9OLwDbqri4HqrNGCk6AFIPXYfAMSR/YdsquR7SDKAmy+AYmBggGbq8m2ANk3IDYuV1NkAVoQE+SSFEQETcOiYBhaQPPCjlrF9UtgfEyH5ZXhVaORkxQJ6qF5EAEAc2E2GYMa9/AAAAAASUVORK5CYII=" />

                                    <input onChange={handleAuthLogin}
                                        id="email"
                                        type="email"
                                        name='email'
                                        placeholder="Enter Your Email"
                                        className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none h-full"
                                        aria-describedby="emailHelp"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Password Input */}
                            <div className="mb-4 relative">
                                <label htmlFor="password">Password</label>
                                <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">

                                    <img className='mr-[20px] px-2 text-gray-500 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPVJREFUSEtjZKAxYKSx+QzEWmAFdEggEOtDHXQRSC8BYhCNFxBjQQnQBDccpiwGioMwTkDIApDLG6C6ZwDpo1A2yMJYKLsUn08IWdAD1KwHxCDD16E5E2QBCF8CYpAvsQJCFuyC6goC0l/QTBBHCh5cQUgwkmEW4DKAkPwwtQCUckCRp4wv+WGRewFNDMeQ5bBFMihdgyKQHHAXqCmTkAWwiCPHApAelASBzQcDZgEoQ3UD8VcgBpVLsJyM7lOyfQAy8CXUNORMNnQsQE4h0/EkY7KDCDmF4EsIA28BzTMauUUFKIWB4oZgUUFuDsaqj1CFQ7FlAMB6MxlrdQ4dAAAAAElFTkSuQmCC" />
                                    <input
                                        onChange={handleAuthLogin}
                                        id="password"
                                        type={showPassword ? "password" : "text"}
                                        name="password"
                                        placeholder="Enter Password"
                                        className="w-full py-2 px-4 focus:outline-none focus:border-blue-500 pr-12" // Add pr-12 for right padding
                                        required
                                    />

                                </div>
                                <button
                                    type="button"
                                    className="absolute  right-[-260px] top-7 mt-2 mr-2 text-gray-500 focus:outline-none"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" fit="" height="10%" width="10%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>

                            {/* Remember Me Checkbox */}
                            <div className="flex items-end justify-between w-full mb-4">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </label>
                                <strong>
                                    <button type="button" className="text-blue"><Link to="/forget-password">Forgot Password?</Link></button>
                                </strong>
                            </div>
                            {/* Sign In Button */}
                            <button className="mat-flat-button bg-[gray] text-center w-[300px] mt-6 bg-primary text-white rounded-md py-2 px-4 flex items-center justify-center mx-auto my-auto">
                                <img className='pr-2' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPpJREFUSEvdlTESgjAQRclQegC9hU0GaNN4C72E4RZ4Cg9g7w1C5wHopY+UwR/HzCA6ZuPAiNLun327f5csi0b+2Mj5o2kAlFJLdLpljC18Hbdte4Zml6bpyWpJHZRluYd27kvu4hYCwCYEcLTiJElWPgiKedBSO/gzAGyQsKt4ZddHFvUT2SQYZNU0TS6E0N34YACbFBAdx3HOOa8cxAtwAt+2dOPGmCLLstsifB9AqdxVCYsusEgGWUQF4NmotNbDDLnv6+Br2ge869I7ZMrP83sA3IMDhjqjLMBdU+MpWZOfa3twAJDEm1BjfYuggxNQ+ZOUdA8mDbgCMnC2GV7URGYAAAAASUVORK5CYII=" />
                                <span>Sign in</span>
                            </button>

                            {/* Sign Up Link */}
                            <div className="flex w-full mt-3 justify-center">
                                You don't have an account?

                                <strong className='pl-2'>
                                    <Link to='/sinUp'    >
                                        Sign Up
                                    </Link>
                                </strong>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    const [auth, setAuth] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        companyName: "",
        compnayAddress: "",
        country: "",
        telephoneNumber: "",
        contactPersonal: "",
        positionTiltle: "",
    });
    const [marketingConsent, setMarketingConsent] = useState(true)
    console.log(auth)
    const handleAuthSingUp = (e) => {
        setAuth((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleAuth = (e) => {
        e.preventDefault();
    };
    const handelCheckBox = () => {
        setMarketingConsent(!marketingConsent)
    }
    return (
        <div className=" bg-gradient-to-b text-gray-600 from-gray-800 to-white-500" >
            <div className="flex items-center justify-center h-screen  ">
                <div className="w-[80%] md:flex mx-auto bg-white  bg-card py-8  sm:p-12 md:p-16 sm:rounded-2xl md:rounded-3xl sm:shadow md:shadow-none sm:bg-card">
                    <div className=" h-full max-w-80 mx-auto" >
                        <div className="w-full  flex justify-center">
                            <svg width="280" height="54" viewBox="0 0 326 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="ng-tns-c151-2"><g clip-path="url(#clip0_30_6)" class="ng-tns-c151-2"><path d="M106.874 9.36118C113.79 9.36118 115.328 10.4291 117.969 13.5056L134.95 33.414C135.017 33.526 135.114 33.6183 135.228 33.6813C135.343 33.7443 135.472 33.7759 135.603 33.773V9.35664H142.151V41.9935H135.108C130.475 41.9935 128.547 41.6255 125.733 38.3036L108.24 17.7499C108.172 17.6361 108.076 17.5421 107.96 17.4775C107.845 17.4129 107.714 17.3799 107.582 17.3818V41.9935H101.03V9.36573L106.874 9.36118Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M74.4335 14.0145H91.0101C91.37 14.0517 91.7326 13.978 92.0496 13.8035C92.3666 13.6289 92.6229 13.3617 92.7844 13.0375L94.722 9.35664H71.0393C60.5025 9.35664 55.3793 13.1875 55.3793 21.049V30.0603C55.3793 38.4399 60.6522 41.9935 71.0438 41.9935H91.5955C91.9549 42.027 92.3162 41.9523 92.633 41.7791C92.9499 41.6058 93.208 41.3419 93.3743 41.0211L95.3119 37.3402H74.4381C68.9927 37.3402 67.0188 35.4725 67.0188 31.7917V27.3519H88.6641C89.0234 27.3888 89.3854 27.3156 89.7022 27.1419C90.019 26.9683 90.2757 26.7024 90.4383 26.3794L92.376 22.6986H67.0051V19.9948C67.0051 16.8819 67.7085 14.0145 74.4335 14.0145Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M168.57 14.0145H185.151C185.511 14.051 185.873 13.9771 186.19 13.8026C186.507 13.6281 186.764 13.3613 186.926 13.0375L188.863 9.35664H165.18C154.639 9.35664 149.516 13.1875 149.516 21.049V30.0603C149.516 38.4399 154.789 41.9935 165.185 41.9935H185.737C186.096 42.0298 186.458 41.9563 186.774 41.7827C187.091 41.6091 187.348 41.3436 187.511 41.0211L189.449 37.3402H168.575C163.107 37.3402 161.151 35.4725 161.151 31.7917V27.3519H182.796C183.155 27.3882 183.517 27.3147 183.834 27.1411C184.151 26.9675 184.407 26.702 184.57 26.3794L186.504 22.6986H161.142V19.9948C161.142 16.8819 161.845 14.0145 168.57 14.0145Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M216.126 30.9692C220.587 32.446 221.948 33.0686 221.948 34.7682C221.948 36.2405 221.072 37.3629 215.482 37.3629H196.31C195.95 37.3299 195.588 37.4053 195.271 37.5793C194.954 37.7534 194.697 38.0182 194.531 38.3399L192.598 42.0208H219.747C230.724 42.0208 234.827 38.5853 234.827 33.8139C234.827 31.051 233.261 27.3928 222.974 24.0119L212.128 20.4492C207.668 18.9768 206.306 18.327 206.306 16.6275C206.306 15.2642 207.073 14.0372 212.773 14.0372H228.995C229.355 14.0744 229.718 14.0008 230.035 13.8262C230.352 13.6516 230.608 13.3844 230.77 13.0602L232.707 9.37936H208.507C197.53 9.37936 193.428 12.8148 193.428 17.5863C193.428 20.3492 194.994 24.0255 205.281 27.4065L216.126 30.9692Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M310.921 41.9981C321.898 41.9981 326 38.5626 326 33.7911C326 31.0282 324.434 27.3701 314.143 23.9892L303.302 20.4265C298.841 18.9541 297.48 18.3043 297.48 16.6047C297.48 15.2415 298.356 14.0145 303.942 14.0145H320.169C320.528 14.0513 320.89 13.9775 321.206 13.803C321.523 13.6284 321.778 13.3613 321.939 13.0375L323.881 9.35664H299.672C288.699 9.35664 284.593 12.7921 284.593 17.5636C284.593 20.3265 286.158 24.0028 296.45 27.3837L307.295 30.9464C311.756 32.4233 313.117 33.0459 313.117 34.7454C313.117 36.1087 312.237 37.3402 306.651 37.3402H284.574L267.494 9.35209H261.014C255.964 9.35209 253.386 10.7517 251.031 14.6053L234.327 41.9981H245.672L259.467 17.5772C259.798 16.9819 260.075 16.991 260.374 16.991L271.855 37.3311H259.353C258.994 37.299 258.634 37.3748 258.318 37.5488C258.002 37.7229 257.744 37.9872 257.579 38.3081L255.641 41.989L310.921 41.9981Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M17.5386 25.1889H2.30066V40.4485H17.5386V25.1889Z" fill="#32409A" class="ng-tns-c151-2"></path><path d="M50.6963 8.4118C52.5114 15.3509 46.4081 19.5134 40.5226 22.2718C38.9616 23.0034 38.1947 23.6987 38.1084 24.5439C38.0132 25.4528 38.3853 26.6161 39.5742 28.3339C44.8062 35.9046 55.402 45.702 66.5151 51.5096C66.8009 51.6596 66.6194 51.7822 66.4697 51.8595C66.2688 51.9596 66.0496 52.0172 65.8256 52.029C65.6015 52.0407 65.3775 52.0062 65.1673 51.9277C48.5 47.6197 31.5286 35.2911 25.752 26.7479C24.8445 25.3846 24.6176 24.4167 24.6993 23.7441C24.7945 22.9807 25.3391 22.2945 26.9001 21.5447C30.9569 19.5998 38.2446 15.3327 36.4612 10.1432C33.9246 2.68603 19.4899 2.80418 8.09998 6.23964C5.50903 7.08651 3.02882 8.24142 0.712446 9.67964C0.485556 9.81597 -0.0771304 9.92958 0.00908782 9.37973C0.00908782 9.30702 0.263203 7.76651 0.263203 7.76651C0.412951 6.99853 1.26606 6.40323 1.85143 6.08059C19.8211 -3.04884 48.1098 -1.58558 50.6963 8.4118Z" fill="#32409A" class="ng-tns-c151-2"></path></g><defs class="ng-tns-c151-2"><clipPath id="clip0_30_6" class="ng-tns-c151-2"><rect width="326" height="52" fill="white" class="ng-tns-c151-2"></rect></clipPath></defs></svg>
                        </div>
                        <div className="mt-8 text-2xl font-extrabold   text-center">
                            Create your account
                        </div>
                        <form className="mt-8 " onSubmit={handleAuth}>
                            <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-3 sm:gap-x-3'>
                                {/* Email Input */}
                                <div className="mb-4">
                                    <label htmlFor="">Email/Username </label>
                                    <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATVJREFUSEvdVcF1gkAUnPU9c42pICWIqYAOtIR40atWkLShFyzBdLAVCOnAVBBzje+xzocA6wMMunKBA+/B7p/5Mzt8FFq+VMv46BCB568mCuqNkjwX2wzM3gDLSM+3gpNbNPLXez48u4BntSSIQj0bnRG8+Gu+B3j7INH4FiK7dqdnSfO5goxAFsSuHrDh8mMzIvMTA69ii41TSRCj/xTp6cHzg4HCcfOfGunaoE/wtKaH47cA1ypgwYEHNc0OqV5N0bUA/oUkYEODiwSFJWYb44FEZTXlrn8D2jmx7axVYG+qUiPrtjpGO+/6aoIqNakd4nW5aweCJL7J2aTJqO7aiaBZXItdjc7gWtCOK7jvsDOfoZ4nUzmfRemXiHcmZOjiPdP2xbQtSuPaBfRSbYd+mW1ZdAJFjK0Zl9SSHQAAAABJRU5ErkJggg==" />
                                        <input onChange={handleAuthSingUp}
                                            id="email"
                                            type="email"
                                            name='email'
                                            placeholder="Email"
                                            className="appearance-none bg-transparent border-none w-full text-gray-700 py-1 px-2 leading-tight focus:outline-none h-full"
                                            aria-describedby="emailHelp"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 ">
                                    <label htmlFor="password">Password</label>
                                    <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">

                                        <div className="flex items-center space-x-2">
                                            <span className="inline-block px-2 py-1 ">
                                                <img className='mr-[40px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPVJREFUSEtjZKAxYKSx+QzEWmAFdEggEOtDHXQRSC8BYhCNFxBjQQnQBDccpiwGioMwTkDIApDLG6C6ZwDpo1A2yMJYKLsUn08IWdAD1KwHxCDD16E5E2QBCF8CYpAvsQJCFuyC6goC0l/QTBBHCh5cQUgwkmEW4DKAkPwwtQCUckCRp4wv+WGRewFNDMeQ5bBFMihdgyKQHHAXqCmTkAWwiCPHApAelASBzQcDZgEoQ3UD8VcgBpVLsJyM7lOyfQAy8CXUNORMNnQsQE4h0/EkY7KDCDmF4EsIA28BzTMauUUFKIWB4oZgUUFuDsaqj1CFQ7FlAMB6MxlrdQ4dAAAAAElFTkSuQmCC" />
                                            </span>
                                            <input
                                                onChange={handleAuthSingUp}
                                                id="password"
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="w-full py-1 px-0 focus:outline-none focus:border-blue-500"
                                                required
                                            />
                                            <a
                                                type="button"
                                                className="px-2 flex justify-end text-blue-500 focus:outline-none"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" fit="" height="15%" width="15%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                    <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </a>
                                        </div>

                                    </div>

                                </div>
                                <div className="mb-4 relative">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPVJREFUSEtjZKAxYKSx+QzEWmAFdEggEOtDHXQRSC8BYhCNFxBjQQnQBDccpiwGioMwTkDIApDLG6C6ZwDpo1A2yMJYKLsUn08IWdAD1KwHxCDD16E5E2QBCF8CYpAvsQJCFuyC6goC0l/QTBBHCh5cQUgwkmEW4DKAkPwwtQCUckCRp4wv+WGRewFNDMeQ5bBFMihdgyKQHHAXqCmTkAWwiCPHApAelASBzQcDZgEoQ3UD8VcgBpVLsJyM7lOyfQAy8CXUNORMNnQsQE4h0/EkY7KDCDmF4EsIA28BzTMauUUFKIWB4oZgUUFuDsaqj1CFQ7FlAMB6MxlrdQ4dAAAAAElFTkSuQmCC" />

                                        <input onChange={handleAuthSingUp}
                                            id="confirmPassword"
                                            type="password"
                                            name='confirmPassword'
                                            placeholder="Confirm Password"
                                            className="w-full py-1 focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                        <a
                                            type="button"
                                            className="px-2 flex justify-end text-gray-500 focus:outline-none"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" fit="" height="15%" width="15%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                                {/* Password Input */}
                                <div className="mb-4 relative">
                                    <label htmlFor="companyName">Company Name</label>
                                    <div className="flex items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMhJREFUSEtjZKAxYKSx+QxEWWDgMDOAkYGxHqjYAJ+D/jP8f/CfgaHwwoH0DTB1RFlg6DDrAVChPDG+BVpw4fyBNEOSLDBymAXURzw4dyAN7nCifEBXC2Cug1mKzgf5kyIf0NwCYmKCIh9QZIGBw2wHRoZ/84FpXoEYg5DDGzkh4PQBKekd5gCSIhk9ZaD7gtjkitMHdLcAX1qnShDR3IKhHwdD1wfE5mJc6vDl5APACsKeEguANdNBYI3mQFKNRomFRNVolFgAAJf+ohlWjmH1AAAAAElFTkSuQmCC" />
                                        <input onChange={handleAuthSingUp}
                                            id="companyName"
                                            type="text"
                                            name='companyName'
                                            placeholder="Company Name"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="compnayAddress">Compnay Address</label>
                                    <div className="flex  items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVtJREFUSEu1lcFRAzEMReVlJueUABWwSwO4E8JlMzkldJKcmIQDUAlOA4mpgJQAV2ZYIUOWCbYsGw/Zo1fW+/qSbQVH/tSR80MSUOvb0wqqKYLSFFw7QQhgFaDpoFtYM9lJIkXAhV7NafNUrhLnGzO+icVEAY1ekkp1nmOhq2hr2oaLZQF5yoN0i41pZ/5qAPj2/OSFU0MJvuJJAIkOvw4+zvyeBABJfQpAyKCKACB5nwJwveAq+FV+nzTWbN8uP/6fAfhGIzs8FMNYtDK0eFnSZCp9TeOqE4DlA83/VRkAH7dmPBIBtb7TFeBTCaADaKxprQhwP/9yivtknD3uH3uSpSpi08SpjwL2pzXjovvBsdeECMi1KmZNjxav61rfDxW809jytyoCPiMMtDXXrzHrMh4cHpKTPGlRr8qvJDd5NsAF7iGu8fRkDmaSLclzEPOzZD3Zg5Kkh3s+AcZoqhlYZ8OtAAAAAElFTkSuQmCC" />
                                        <input onChange={handleAuthSingUp}
                                            id="compnayAddress"
                                            type="text"
                                            name='compnayAddress'
                                            placeholder="Compnay Address"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4 relative">
                                    <label htmlFor="country">Country</label>
                                    <div className="flex  items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKZJREFUSEtjZKAxYKSx+Qx4LTB0mHUAqMAenyP+MzAcOH8gzRGXGrwWGDnMAuonDM4dSMNpDlEWwAyAWYiLj80p9LOAmPDGFVhEBRGx4Y3NEpIsQA9fkIFUiQNcEUh1CwgnSsIqkPMGPBVREgf44gXDAnLiAF8w0t8CwiFMnApYSIzGAby0xZUZ6RdElBR26NEO9NZBYCXkABIf2CqTuASJX9XQ9wEApGa2GTDxK1UAAAAASUVORK5CYII=" />
                                        <input onChange={handleAuthSingUp}
                                            id="country"
                                            type="text"
                                            name='country'
                                            placeholder="Country"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 relative">
                                    <label htmlFor="telephone">Telephone Number</label>
                                    <div className="flex  items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZdJREFUSEvVVUtSwkAU7IklW72BeAKBCzieQDyBZhPKnZ5AvAGsrLABToCewPECEG/gEViDZOwpmCJfKglSlm/5MtM9/d7rF4EDhzgwPv6GoCUHPUCfhai5gXLn+6iMKWjI4anAcsKkNKAaUDPlXf0aQVP6gYC4SACOpspzq5LEFLA0fHRmVCYpSmAK9jhVHfamXMQImnKgmLjMgqC0N/ajXQ4e8TFlD0bswW0SREN/atRklYlKTJHfdiAmUYJ9wA1OakwdLL6YPrEkIVbngbpnrlqknJwuk35mc7vV4BMKDEhDvtQdOIFVwebONVbNpApjSqodhhAqUF4/7wGZu6glfb5YPNlLJAlIcmNJNo5/5+XG5kyuT3KXHUf2lR+vIyRzTlgvxPdY4MisEwtuj2SS5BKsX7mgL1KrI7cdZndpHFPpdkHuXNebUhglmebLNqQez1Tnzn4r9D9Y9wQP0fHdMVV9LkeeXUchAjtdAk6XF7gutj6JErFEH1wnMporTGAvmbIBy7aAJpCo2/LlOb40QVnD/X+CHyTOlRmgmoK6AAAAAElFTkSuQmCC" />
                                        <input onChange={handleAuthSingUp}
                                            id="telephone"
                                            name='telephoneNumber'
                                            type="tel"
                                            placeholder="Telephone Number"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="contactPersonal">Contact Personal</label>
                                    <div className="flex  items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[10px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAVpJREFUSEu1lcFRwzAQRVdmYLgRKgAqwKQCUUEogRwww4mkgpgOzImJOQRKoAPRQFAHpAPgGkDi2x4NJo7GirD2aK/2SX/3S4wCBwtcnxqAmE/PGLEJfsS+cE0kXkRyWqxvAE54vsDHA9/iZt1cJGXtBqDPc2zg/+EJ0GNFOw8FPqLlCPub2LbiAdDjubjM6gX7fJraIA1AmzSKtvelGL7XATG/O4xo63XdKToCzHoRfb45AUyS/ST6BhJBkt+IeX4eEc06ApRDlyr6eiTahVTLAfySYQx7ToC2Hmw6uBv3oALoD01MVgbScDrb62RM4bwnFM6kuBB/e3DPARpBpsEqyNkHimgoRVKayxbrmu0q0S0S4dj2QA8LE16bTCeAou8jKa4W7eVx9a6Yzkkik+QCKHLqk+gEcC3s5AOT1JUfrCcI/uBUTyaluAaOfSWCb57xZPLKkIEjOOAHBeacGb0uIVsAAAAASUVORK5CYII=" />
                                        <input onChange={handleAuthSingUp}
                                            id="contactPersonal"
                                            type="text"
                                            name='contactPersonal'
                                            placeholder="Compnay Address"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="Position Tiltle">Position Tiltle</label>
                                    <div className="flex  items-center rounded-lg border border-b-2 border-gray-500 py-2">
                                        <img className='mr-[5px] px-2 border-r border-5-r' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhxJREFUSEu1VdFRwkAQ3YMC1AqECgg04NkBVqB8AOOXWIFQgfjlgB/YAVgBZwNwViB2AAWQ810uByFsgjhDZm4Iye6+d+/tbQSd+BInrk8HAQI5qBeoUDFkJMgEMSEtSKhQkNbT5kceyUyAQA4DvBxh+aJsHUOksRpatTQXwALU5KBLJJ6Ok090Z6rZS+fsAWQXNyskAzi6LIGzfQLmcaba/eTzHQArS4FozjPfJtfk0BZ54OJCompSrh2AqhxY8yqHAbIltJ7MVavqa2wAXLeIcbI4gn8EmXMrB+6XWJFESOpi4blZGRJL3F8m80IyN1q1J3Gse8Vp7wMtOIrUUbrkos0CYBNbhCOG9z144cm4lKocKhS52pXH9EMKX7S6X3CyOc/MLYA7qZ1/QiaZ3sGS7wzwiXp9jW07oEC+lgQVx1lnxMoJgIs/A9jAkMS1Vk3lAN4kmE+5XcUSriARPIr8ypNoWyLZfvntHO2YlQim8KfXdhO2XArkKGKlVWMJzxbp7tnSYUzmu8GnuEMWHzCaqVYHXQdjxTMnE9umrpP4gxbSumwNtqwhgJmrdtkaXaDidxoAU/cL7zcD8uCo8AlJY73hHKHcUWHZcAcOHkTdAzbS/qb/J7TPH3Y+8H/jen+S7rRpWkv3wTHv2cMv7nhojnl0d9QHJwnmuosCFJEAjMzDPaauUdBb+6HGdVPuDrISjn1+8KN/bMF0/C8dkwYoJ7r/PwAAAABJRU5ErkJggg==" />
                                        <input onChange={handleAuthSingUp}
                                            id="Position Tiltle"
                                            type="text"
                                            name='positionTiltle'
                                            placeholder="Position Tiltle"
                                            className="w-full py-1 px-1 focus:outline-none focus:border-blue-500"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-end  justify-between w-auto mb-4">
                                    <label className="flex gap-1 items-center py-2 ">
                                        <input
                                            onClick={handelCheckBox}
                                            type="checkbox"
                                            className=""
                                            checked={marketingConsent}
                                        />
                                        <span className="text-blue">Marketing Consent</span>
                                    </label>

                                </div>
                            </div>
                            <button className="mat-flat-button bg-[gray]  text-center w-[300px] mt-6 bg-primary text-white rounded-md py-2 px-1 flex items-center justify-center mx-auto my-auto">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAPpJREFUSEvdlTESgjAQRclQegC9hU0GaNN4C72E4RZ4Cg9g7w1C5wHopY+UwR/HzCA6ZuPAiNLun327f5csi0b+2Mj5o2kAlFJLdLpljC18Hbdte4Zml6bpyWpJHZRluYd27kvu4hYCwCYEcLTiJElWPgiKedBSO/gzAGyQsKt4ZddHFvUT2SQYZNU0TS6E0N34YACbFBAdx3HOOa8cxAtwAt+2dOPGmCLLstsifB9AqdxVCYsusEgGWUQF4NmotNbDDLnv6+Br2ge869I7ZMrP83sA3IMDhjqjLMBdU+MpWZOfa3twAJDEm1BjfYuggxNQ+ZOUdA8mDbgCMnC2GV7URGYAAAAASUVORK5CYII=" />
                                <span className='pl-2'>Sign up</span>
                            </button>

                            {/* Sign Up Link */}
                            <div className="flex w-full/2 mt-3  justify-center">
                                You don't have an account?
                                <strong className='pl-2'>
                                    <Link to="/login" className="text-gray-600">
                                        Sign in
                                    </Link>
                                </strong>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Register





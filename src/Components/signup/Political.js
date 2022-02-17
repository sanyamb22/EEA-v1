import React, { useState } from 'react'
import './Political.css'
import Pagination from '@mui/material/Pagination';
import TextField from '@mui/material/TextField';




export default function Political() {

    const [page, setPage] = useState(1)

    function Credentials() {
        const [orgName, setOrgName] = useState('')
        const [orgEmail, setOrgEmail] = useState('')
        const [orgPassword, setOrgPassword] = useState('')
        const [orgRePassword, setOrgRePassword] = useState('')

        return (
            <>
                <div className="credential-main">
                    <div className="credential-info-box">
                        <h1>Credentials</h1>
                        <TextField label="Organization Name" value={orgName} variant="outlined" onChange={(e) => { setOrgName(e.target.value) }} />
                        <TextField label="Email" value={orgEmail} variant="outlined" onChange={(e) => { setOrgEmail(e.target.value) }} />
                        <TextField label="Password" value={orgPassword} variant="outlined" type='password' onChange={(e) => { setOrgPassword(e.target.value) }} />
                        <TextField label="Re-Password" value={orgRePassword} variant="outlined" type='password' onChange={(e) => { setOrgRePassword(e.target.value) }} />
                    </div>
                    <div className="credential-showoff">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quidem 
                    </div>
                </div>

            </>
        );
    }

    function Basic() {
        return (
            <>
                <h1>Basic</h1>
            </>
        );
    }
    function Founder() {
        return (
            <>
                <h1>Founder</h1>
            </>
        );
    }
    function Leader() {
        return (
            <>
                <h1>Leader</h1>
            </>
        );
    }
    function ProfilePic() {
        return (
            <>
                <h1>Profile Pic</h1>
            </>
        );
    }
    function Manifesto() {
        return (
            <>
                <h1>Manifesto</h1>
            </>
        );
    }




    function goNextPage() {
        if (page === 4) return;
        setPage((page) => page + 1);
    }
    function goBackPage() {
        if (page === 1) return;
        setPage((page) => page - 1);
    }

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            <div className="main-signup-block">
                <div className="main-signup-info">
                    {page === 1 && <Credentials />}
                    {page === 2 && <Basic />}
                    {page === 3 && <ProfilePic />}
                    {page === 4 && <Founder />}
                    {page === 5 && <Leader />}
                    {page === 6 && <Manifesto />}

                </div>
                <div className="signup-bottom-bar">
                    {page > 1 && <button id='btn-signup' onClick={goBackPage}>Back</button>}
                    <Pagination count={6} page={page} value={page} onChange={handleChange} hideNextButton={true} hidePrevButton={true} />
                    {page !== 6 && <button onClick={goNextPage}>Next</button>}
                </div>
            </div>

        </>
    );
}

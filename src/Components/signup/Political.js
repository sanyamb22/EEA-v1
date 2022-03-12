import React, { useState } from "react";
import "./Political.css";
import Pagination from "@mui/material/Pagination";
// import TextField from '@mui/material/TextField';
import Credentials from "./pe/Credentials";
import Basic from "./pe/Basic";
import Founder from "./pe/Founder";
// import Leader from "./pe/Leader";
import ProfilePic from "./pe/ProfilePic";
import Manifesto from "./pe/Manifesto";
import { NoEncryptionTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SaveIcon from '@mui/icons-material/Save';
import axios from "../../Components/axios";


export default function Political() {
    const [page, setPage] = useState(1);

    const [formData, setFormData] = useState({
        orgName: "",
        orgEmail: "",
        orgPassword: "",
        orgRePassword: "",
        orgAbout: "",
        orgAddress: "",
        orgWebsite: "",
        orgFromDate: new Date(),
        orgToDate: new Date(),
        orgProfilePic: null,
        orgFounder: null,
        orgLeader: null,
        orgMember: null,
        orgManifesto: null,
    });

    const handleClick = async (e) => {
        e.preventDefault()
        console.log(formData)
        try{
          const response = await axios.post('/api/login', formData)
          console.log(response)
        } catch (err) {
          console.log(`${err.message}`)
        }
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
                    {page === 1 && (
                        <Credentials
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                    {page === 2 && (
                        <Basic formData={formData} setFormData={setFormData} />
                    )}

                    {page === 3 && (
                        <Founder
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                    {page === 4 && (
                        <Manifesto
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )}
                </div>
                <div className="signup-bottom-bar">
                    {page > 1 && (
                        <Button
                            variant="contained"
                            startIcon={<ArrowBackIosIcon />}
                            id="btn-signup"
                            onClick={goBackPage}
                        >
                            Back
                        </Button>
                    )}
                    <Pagination
                        count={4}
                        page={page}
                        value={page}
                        onChange={handleChange}
                        hideNextButton={true}
                        hidePrevButton={true}
                    />
                    {page !== 4 && (
                        <Button
                            variant="contained"
                            endIcon={<ArrowForwardIosIcon />}
                            onClick={goNextPage}
                        >
                            Next
                        </Button>
                    )}
                    {page === 4 && (
                        <Button
                            variant="contained"
                            endIcon={<SaveIcon />}
                            onClick={handleClick}
                        >
                            Submit
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}

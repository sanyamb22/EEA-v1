import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import './Basic.css';
import DatePicker from 'react-date-picker';
// import { makeStyles } from '@mui/styles';


function Basic({ formData, setFormData }) {

    // const [orgAbout, setOrgAbout] = useState('')



    return (
        <>
            <div className="main-basic-block">
                <div className="basic-info-box">
                    <h1>Basic Info</h1>
                    <h3>Years active</h3>
                    <div className="basic-date">
                        <span>From: <DatePicker className='white' value={formData.orgFromDate} onChange={date => setFormData({ ...formData, orgFromDate: date })} /></span> <span> To: <DatePicker className='white' value={formData.orgToDate} onChange={date => setFormData({ ...formData, orgToDate: date })} /></span>
                    </div>
                    <TextField className='white' multiline fullWidth rows={3} label='About' value={formData.orgAbout} onChange={(e) => setFormData({ ...formData, orgAbout: e.target.value })} />
                    <TextField className='white' fullWidth label='Address' value={formData.orgAddress} onChange={(e) => setFormData({ ...formData, orgAddress: e.target.value })} />
                    <TextField className='white' fullWidth label='Website' value={formData.orgWebsite} onChange={(e) => setFormData({ ...formData, orgWebsite: e.target.value })} />

                </div>

            </div>
        </>
    )
}

export default Basic
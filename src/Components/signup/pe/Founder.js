import React from "react";
import "./Founder.css";
import Button from "@mui/material/Button";
// import founder from "../../../../public/";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { styled } from "@mui/material/styles";
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';

function Founder({ formData, setFormData }) {
    const founderFile = () => {
        saveAs(
            "https://docs.google.com/spreadsheets/d/1tSKXbnWl7owPB9vs3LARlFd8U_JVfTyEz4o8ESxkvo4/edit#gid=0",
            "founder.xlsx"
        );
    };

    const leaderFile = () => {
        saveAs(
            "https://docs.google.com/spreadsheets/d/1tSKXbnWl7owPB9vs3LARlFd8U_JVfTyEz4o8ESxkvo4/edit#gid=0",
            "leader.xlsx"
        );
    };

    const memberFile = () => {
        saveAs(
            "https://docs.google.com/spreadsheets/d/1tSKXbnWl7owPB9vs3LARlFd8U_JVfTyEz4o8ESxkvo4/edit#gid=0",
            "member.xlsx"
        );
    };

    const Input = styled("input")({
        display: "none",
    });

    return (
        <>
            <div className="main-box">
                <div className="founders">
                    <h1>Founders</h1>
                    <div className="founder-icons">
                        <Button
                            variant="contained"
                            onClick={founderFile}
                            endIcon={<DownloadIcon />}
                        >
                            Download file
                        </Button>{" "}
                        &nbsp; &nbsp;
                        <label htmlFor="founder-file">
                            <Input
                                id="founder-file"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        orgFounder: e.target.files[0],
                                    });
                                    console.log(formData.orgFounder);
                                }}
                            />
                            <Button 
                            variant="contained" 
                            component="span"
                            endIcon={<FileUploadIcon />}
                            >
                                Upload
                            </Button>
                        </label>
                    </div>
                    1. Download Excel File. <br />
                    2. Enter the details in provided format. <br />
                    3. Upload the file back. <br />
                </div>
                <div className="leaders">
                    <h1>Leaders</h1>
                    <div className="leader-icons">
                        <Button 
                        variant="contained" 
                        onClick={leaderFile}
                        endIcon={<DownloadIcon />}
                        >
                            Download file
                        </Button>{" "}
                        &nbsp; &nbsp;
                        <label htmlFor="leader-file">
                            <Input
                                id="leader-file"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        orgLeader: e.target.files[0],
                                    });
                                    console.log(formData.orgLeader);
                                }}
                            />
                            <Button 
                            variant="contained" 
                            component="span"
                            endIcon={<FileUploadIcon />}
                            >
                                Upload
                            </Button>
                        </label>
                    </div>
                    1. Download Excel File. <br />
                    2. Enter the details in provided format. <br />
                    3. Upload the file back. <br />
                </div>
                <div className="members">
                    <h1>Members</h1>
                    <div className="member-icons">
                        <Button 
                        variant="contained" 
                        onClick={memberFile}
                        endIcon={<DownloadIcon />}
                        >
                            Download file
                        </Button>{" "}
                        &nbsp; &nbsp;
                        <label htmlFor="member-file">
                            <Input
                                id="member-file"
                                multiple
                                type="file"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        orgMember: e.target.files[0],
                                    });
                                    console.log(formData.orgMember);
                                }}
                            />
                            <Button 
                            variant="contained" 
                            component="span"
                            endIcon={<FileUploadIcon />}
                            >
                                Upload
                            </Button>
                        </label>
                    </div>
                    1. Download Excel File. <br />
                    2. Enter the details in provided format. <br />
                    3. Upload the file back. <br />
                </div>
            </div>
        </>
    );
}

export default Founder;

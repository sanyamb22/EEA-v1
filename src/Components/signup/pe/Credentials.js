import React from "react";
import TextField from "@mui/material/TextField";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Credentials({ formData, setFormData }) {
    return (
        <>
            <div className="credential-main">
                <div className="credential-info-box">
                    <h1>Credentials</h1>
                    <TextField
                        className="white"
                        fullWidth
                        label="Organization Name"
                        value={formData.orgName}
                        variant="outlined"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                orgName: e.target.value,
                            })
                        }
                    />
                    <TextField
                        className="white"
                        fullWidth
                        label="Email"
                        value={formData.orgEmail}
                        variant="outlined"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                orgEmail: e.target.value,
                            })
                        }
                    />
                    <TextField
                        className="white"
                        fullWidth
                        label="Password"
                        value={formData.orgPassword}
                        variant="outlined"
                        type="password"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                orgPassword: e.target.value,
                            })
                        }
                    />
                    <TextField
                        className="white"
                        fullWidth
                        label="Re-Password"
                        value={formData.orgRePassword}
                        variant="outlined"
                        type="password"
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                orgRePassword: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="credential-showoff">
                    <h3>Upload Profile Picture</h3>
                    {formData.orgProfilePic != null && (
                        <img
                            src={URL.createObjectURL(formData.orgProfilePic)}
                            id="org-profile-pic"
                            height="200"
                            width="200"
                            alt="yoo"
                        />
                    )}
                    <label htmlFor="orgProfilePic">
                        <input
                            style={{ display: "none" }}
                            id="orgProfilePic"
                            name="orgProfilePic"
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                setFormData({
                                    ...formData,
                                    orgProfilePic: e.target.files[0],
                                });
                                // setPreview(URL.createObjectURL(e.target.files[0]));
                                console.log(formData.orgProfilePic);
                            }}
                        />

                        <Fab
                            color="primary"
                            size="large"
                            component="span"
                            aria-label="add"
                        >
                            <AddIcon />
                        </Fab>
                    </label>
                </div>
            </div>
        </>
    );
}

export default Credentials;

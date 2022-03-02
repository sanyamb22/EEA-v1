import React, { useState } from "react";
import { Button } from "@mui/material";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ProfilePic({ formData, setFormData }) {
    // const[preview, setPreview] = useState('');

    return (
        <>
            <label htmlFor="orgProfilePic">
                <input
                    style={{ display: "none" }}
                    id="orgProfilePic"
                    name="orgProfilePic"
                    type="file"
                    // accept="image/*"
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
                    size="small"
                    component="span"
                    aria-label="add"
                >
                    <AddIcon />
                </Fab>
            </label>
            {formData.orgProfilePic != null && (
                <img
                    src={URL.createObjectURL(formData.orgProfilePic)}
                    height="200"
                    width="200"
                    alt="yoo"
                />
            )}
        </>
    );
}

export default ProfilePic;

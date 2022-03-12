import React from "react";
import "./Manifesto.css";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function Manifesto({ formData, setFormData }) {
    return (
        <>
            <div className="manifesto-main-box">
                <div className="manifesto-secondary-box">
                    <h1>Manifesto</h1>
                    <div className="upload-manifesto">
                        <label htmlFor="orgManifesto">
                            <input
                                style={{ display: "none" }}
                                id="orgManifesto"
                                name="orgManifesto"
                                type="file"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        orgManifesto: e.target.files[0],
                                    });
                                    console.log(formData.orgManifesto);
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
                    {formData.orgManifesto != null && <h3 id="manifesto-done">DONE!</h3> }
                </div>
            </div>
        </>
    );
}

export default Manifesto;

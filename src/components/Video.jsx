import React from "react";
function Video() {

    return (
        <>
            <video className="video" autoPlay muted loop >
                <source src="/background.mp4" type="video/mp4" />
            </video>
        </>
    )
}

export default Video

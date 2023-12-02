function Video() {

    return (
        <>
            <video className="video" autoPlay muted loop >
                <source src="./src/assets/background.mp4" type="video/mp4" />
            </video>
        </>
    )
}

export default Video

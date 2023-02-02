import background from "../assets/images/bg.jpg";
function HomeCard() {
    return ( 
        <>
            <div id="home-card" className="card-started">
                <div className="profile">
                    <div className="slide" style={{backgroundImage: `url(${background})`}}>
                    </div>
                </div>
            </div>
        </>
     );
}

export default HomeCard;
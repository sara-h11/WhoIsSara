import Header from "./Header";
import HomeCard from "./HomeCard";

function AppLayout() {
    return ( 
        <>
            <div className="page new-skin">
                <div className="container opened layout-rounded-style minimal-icons-style">
                    <Header />
                    <HomeCard />
                </div>
            </div>
        </>
     );
}

export default AppLayout;
import Tiles from "./Tiles";

function Row() {
    return (
        <div className="container">
            <div className="row">
                <Tiles name='Upcomming Contest' text='To get the details for all the past and upcomming contest click on the below button' link='upcomming-contest'></Tiles>
                <Tiles name='User info' text='To search any user or to get any information about any user click on the below button'></Tiles>
                <Tiles name='Problem set' text='This section will show the different problem set for all the contest'></Tiles>
                <Tiles name='Blogs' text='If you are interested in recent happenings in the codeforces website or want to learn something then click on the below button'></Tiles>
            </div>
        </div>
    )
}

export default Row
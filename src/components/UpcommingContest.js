import React from "react";
import Back from "./Back";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";
import ContestInfo from "./ContestInfo";

function UpcommingContest() {

    const [posts, setPosts] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        axios.get(`https://codeforces.com/api/contest.list`)
            .then((res) => {
                console.log(res.data.result)
                const arr = []
                for (var i = 0; i < 10; i++) {
                    arr.push(res.data.result[i]);
                }
                setPosts(arr)
                setLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (
        <>
            <div className="page-head">
                Upcomming / Past Contests
            </div>
            {loaded ? posts.map(posts => (
                <ContestInfo key={posts.id} info={posts} />
            )) : <div class="spinner-border text-light" role="status">
                <span class="sr-only"></span>
            </div>}
            <div className="page-head">
                <Back />
            </div>

        </>
    )
}

export default UpcommingContest
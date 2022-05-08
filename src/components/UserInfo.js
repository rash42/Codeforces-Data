import React from "react";
import Back from "./Back";
import User from "./User";
import axios from "axios";
import { useState, useEffect } from "react";

function UserInfo() {
    const handle = 'Tourist'
    const name = `Genady Korotovech`
    const country = `Belarus`
    const rating = `3814`
    const rank = `legendary`
    var data;
    var arr = []

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get(`https://codeforces.com/api/user.ratedList?activeOnly=true&includeRetired=false`)
            .then((res) => {
                console.log(res.data.result)
                const arr = []
                for(var i = 0; i < 10; i++){
                    arr.push(res.data.result[i]);
                }
                setPosts(arr)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])




    return (
        <>
            <div className="page-head">
                Top 10 rated user
            </div>
            {posts.map(posts => (
                <User key={posts.handle} info={posts}/>
            ))}
            <div className="page-head">
                <Back />
            </div>

        </>
    )
}

export default UserInfo
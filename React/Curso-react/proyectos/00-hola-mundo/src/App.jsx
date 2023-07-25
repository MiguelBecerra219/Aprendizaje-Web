import React from "react";
import './index.css'
import { TwFollowCard } from "./TwFollowCard";

export function App(){

    const users = [
        {
            userName:"Yivers24" ,
            name:"Miguel Becerra",
            isFollowing:false
        },
        {
            userName:"ingrid" ,
            name:"ingrid camila",
            isFollowing:false
        },
        {
            userName:"pablo16" ,
            name:"pablo",
            isFollowing:true
        }
    ]

    const formatUser= (userName) => `@${userName}`

    return(
        <div className="app">
            {
                users.map(user => {
                    const {userName, name, isFollowing} = user;
                    return (
                        <TwFollowCard
                            key={userName}
                            userName={userName}
                            isFollowing={isFollowing}
                            formatUser={formatUser}
                        >
                            {name}
                        </TwFollowCard>
                    )
                })
            }
        </div>
    )
}
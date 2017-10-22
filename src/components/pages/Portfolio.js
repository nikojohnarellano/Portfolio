/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import PortfolioItem from "../components/PortfolioItem";

const items = [
    {
        title : "Zenwallet",
        description : "A mobile wallet app owned by Payment Source that allows cardholders using Canada Post prepaid cards to check balances, view transactions and reload money into their cards.",
        type : "mobile",
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png" },
            { name : "Expo", icon : "./assets/skills/expo.png" }
        ],
        link : {
            downloads: [
                { image : "./assets/download/appstore.png", link : "https://itunes.apple.com/ca/app/zenwallet/id900104708?mt=8"},
                { image : "./assets/download/googleplay.png", link : "https://play.google.com/store/apps/details?id=com.ezipin.wallet&hl=en" },
            ]
        },
        images : [
            "./assets/zenwallet/zenwallet1_iphone7plusgold_portrait.png",
            "./assets/zenwallet/zenwallet2_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "Collab",
        description : "A web application where students can share study notes and tips to their fellow students",
        techStack : [
            { name : "Laravel Framework", icon : "./assets/skills/laravel.png" },
            { name : "Javascript", icon : "./assets/skills/javascript.png" },
            { name : "Bootstrap", icon : "./assets/skills/bootstrap.png"},
            { name : "jQuery", icon : "./assets/skills/jquery.png" }
        ],
        link : {
            title : "Site",
            link : "http://collab-notes.ca/"
        },
        type : "web",
        images : [
            "./assets/collab-notes/collab-notes.png",
        ]
    },
    {
        title : "Whatsaround",
        description : "A mobile app that lets you see different sale listings around you in a map view.",
        type : "mobile",
        link : {
            title: "Use it through Expo",
            link: "https://expo.io/@nikoootine/project-near"
        },
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png"},
            { name : "Laravel Framework", icon : "./assets/skills/laravel.png" },
            { name : "Expo", icon : "./assets/skills/expo.png" },
        ],
        images : [
            "./assets/whatsaround/whatsaround1_iphone7plusgold_portrait.png",
            "./assets/whatsaround/whatsaround2_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "Responsetek - Admin Portal Feature Plugin",
        description : "A web plugin project for our client, Responsetek, that integrates with the company's Admin Portal software that lets the Client Managers see what features are on or off for their clients",
        type : "web",
        link : {
            title : "More about Responsetek",
            link : "https://www.responsetek.com/"
        },
        techStack : [
            { name : "ASP.Net MVC (C#)", icon : "./assets/skills/csharp.png"},
            { name : "jQuery", icon : "./assets/skills/jquery.png" },
            { name : "Javascript", icon : "./assets/skills/javascript.png" },
        ],
        images : [
            "./assets/rt-feature-plugin/rt-feature.png",
        ]
    },
    {
        title : "My eCash",
        description : "A mobile app owned by Payment Source for Now Prepay eCash merchants to check their balance and add funds using Loadhub at any Canada Post location.",
        type : "mobile",
        link : {
            downloads: [
                { image :  "./assets/download/appstore.png", link : "https://itunes.apple.com/ca/app/my-ecash/id1259466188?mt=8" },
                { image : "./assets/download/googleplay.png", link : "https://play.google.com/store/apps/details?id=ca.paymentsource.myecash&hl=en"},
            ]
        },
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png"},
            { name : "Expo", icon : "./assets/skills/expo.png" },
        ],
        images : [
            "./assets/myecash/myecash1_iphone7plusgold_portrait.png",
            "./assets/myecash/myecash2_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "Responsetek - Dynamic Data Charts",
        description : "A front end development project for our client, Responsetek, that integrates with the company's LEARN Platform.",
        type : "web",
        link : {
            title : "More about Responsetek",
            link : "https://www.responsetek.com/"
        },
        techStack : [
            { name : "D3js", icon : "./assets/skills/d3js.png"},
            { name : "jQuery", icon : "./assets/skills/jquery.png" },
        ],
        images : [
            "./assets/rt-tiles/rt-charts.png",
        ]
    },
]

export default class Portfolio extends Component {
    render() {
        return (
            <div className="fadeInUp content-custom">
                {
                    items.map((item, index) =>
                        <PortfolioItem item={item} key={index} />
                    )
                }
            </div>

        )
    }
}
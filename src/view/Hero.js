import { DownloadIcon } from "@heroicons/react/outline";

function Hero() {
    return ( <
        div className = "bg-discord_blue" >
        <
        div className = "h-screen gap-10 px-6 py-5 w-1/2" >
        <
        h1 className = "text-5xl text-white font-bold py-8" >
        Your place to talk <
        /h1> <
        h4 className = "text-white font-serif" >
        Whether you 're part of a school club, gaming group, worldwild art
        community, or just a handful of friends that want to spend time together, Discord makes it easy to talk every day and hangout more often. <
        /h4> <
        div className = "flex" >
        <
        div className = " my-5 space-x-3" >
        <
        button className = "bg-white p-2 rounded-full text-s md:text-s px-4 focus:outline-non hover:shadow-2xl hover:text-discord_blue hover:bg-black " > { DownloadIcon }
        Download < /button> <
        button className = " bg-black text-white p-2 rounded-full text-s md:text-s px-4 focus:outline-non hover:shadow-2xl hover:text-black hover:bg-white " > Open Discord in Browser < /button> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default Hero;
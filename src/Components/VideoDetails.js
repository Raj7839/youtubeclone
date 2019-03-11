import React from 'react';

const VideoDetails = ({video}) => {
    if(!video){
        return <div>LOADING...</div>
    }else{
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} />
                </div>
                <div className="ui segment">
                    <div className="ui header">{video.snippet.title}</div>
                    <p className="ui paragraph">{video.snippet.description}</p>
                    <h3>Channel Title : {video.snippet.channelTitle}</h3>
                    <p>Published At : {video.snippet.publishedAt}</p>
                    <p>BroadCast Content : {video.snippet.liveBroadcastContent}</p>
                </div>
            </div> 
        )
    }
}

export default VideoDetails;
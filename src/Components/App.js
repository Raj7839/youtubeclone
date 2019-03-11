import React from 'react';
import SearchBar from './SearchBar'
import youtubeapi from '../api/youtubeapi'; 
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component{

    state={ videos : [], seletedvideo:null};

    componentDidMount(){
        this.onTermSubmit('Motivation Videos USA')
    }

    onTermSubmit= async term => {
        
        const response = await youtubeapi.get('/search',{
            params : {
                q:term
            }
        });

        this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})

        console.log(this.state.videos)

    }

    onVideoSelect=(video)=>{
        this.setState({selectedVideo : video})
    }

    render(){
        return(
            <div className = "ui container">
                <SearchBar onTermSubmit = {this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video = {this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos = { this.state.videos } />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
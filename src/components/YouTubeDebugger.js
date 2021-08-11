import React, {Component} from 'react' 

export default class YouTubeDebugger extends Component {
    constructor(props) {
        super(props)
        this.state = {
            errors: [], 
            user: null, 
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }}
        changeBitrate = () => (
            this.setState({settings:
                {...this.state.settings, 
                bitrate: 12}})
        )
        changeResolution = () => (
            this.setState({settings:
                {...this.state.settings, 
                video: 
                {resolution: '720p'}}})
        )

        render () {
            return(
                <div>
                    <button onClick = {this.changeBitrate}>Change Bitrate</button>
                    <button onClick = {this.changeResolution}>Change Resolution</button>
                </div>
            )}

    }

import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state =  {
                    errors: [],
                    user: null,
                    settings: {
                      bitrate: 8,
                      video: {
                        resolution: '1080p'
                      }
                    }
                  }

    this.bitClick = this.bitClick.bind(this)
    this.resoClick = this.resoClick.bind(this)
  }

  bitClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12//,
      })//,
    })
  }

  resoClick() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: { resolution: '720p' }//,
      })//,
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.bitClick}>BitBoop</button>
        <button className="resolution" onClick={this.resoClick}>ResoBoop</button>
      </div>
    )
  }

}

export default YouTubeDebugger

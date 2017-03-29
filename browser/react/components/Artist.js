import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios'; 
import Album from './Album'; 
import Albums from './Albums';

export default class Artist extends Component {
    constructor(props) {
        super(props)
    }

 componentDidMount() {
    const artistId = this.props.routeParams.artistId;
    const selectedArtist = this.props.selectedArtist;

    axios.get(`/api/artists/${artistId}`)
        .then(res => res.data)
        .then(artist => this.setState({selectedArtist: artist}))

    axios.get(`/api/artists/${artistId}/albums`)
        .then(res => res.data)
        .then(albums => console.log(albums))

    axios.get(`/api/artists/${artistId}/songs`)
        .then(res => res.data)
        .then(songs => console.log(songs))
    //selectAlbum(albumId);
  }

    render() {
        return (
            <div>
                <h3>{this.props.selectedArtist.name}</h3>
                <h4>ALBUMS</h4>
                <h4>SONGS</h4>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import Album from './Album';
import Albums from './Albums';
import Songs from './Songs';

export default class Artist extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const artistId = this.props.routeParams.artistId;
        const selectArtist = this.props.selectArtist;
        const artistAlbums = this.props.artistAlbums;
        selectArtist(artistId);
    }

    render() {
        //console.log('Props', this.props)
         //console.log(this.props.artistAlbums[0])
         let songs = []; 
         this.props.artistAlbums.map(album => {
            album.songs.forEach(song => {
                songs.push(song);
            })
         })
         console.log(songs)
        return (
            <div>
                <h3>{this.props.artist.name}</h3>
                <Albums albums={this.props.artistAlbums}  />

                <Songs 
                songs={songs}
                />
                
            </div>
        )
    }
}
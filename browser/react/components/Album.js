import React, {Component} from 'react';
import Songs from '../components/Songs';

export default class Album extends Component {
  constructor(props){
    super(props)
  }
  console.log(props);
  const album = props.album;
  const currentSong = props.currentSong;
  const isPlaying = props.isPlaying;
  const toggleOne = props.toggleOne;
  componentDidMount(){
    const albumId = this.props.routeParams.albumId;
    const selectAlbum = this.props.selectAlbum;
    selectAlbum(albumId);
  }

  return (
    <div className="album">
      <div>
        <h3>{props.params.name }</h3>
        <img src={ album.imageUrl } className="img-thumbnail" />
      </div>
      <Songs
        songs={album.songs}
        currentSong={currentSong}
        isPlaying={isPlaying}
        toggleOne={toggleOne} />
    </div>
  );
}

export default Album;

const Library = function() {
    this.name = 'Some Library'
    this.creator = 'Someone'
    this.playlists = []
    this.tracks = []
}

const Playlist = function() {
    this.name = 'Good Vibes'
    this.tracks = []
    this.overallRating = function() {
        let totalRating = 0;
        this.tracks.forEach(track => {
            totalRating += track.rating;
        });
        return totalRating / this.tracks.length;
    }
    this.totalRuntime = function() {
        let totalTime = 0;
        this.tracks.forEach(track => {
            totalTime += track.runtime;
        });
        return totalTime;
    }
};

const Track = function() {
    this.title = 'unknown'
    this.artist = 'unknown'
    this.album = 'unknown'
    this.rating = 1
    this.runtime = 0
}

// build library

let vibesLibrary = new Library();
vibesLibrary.name = 'Vibes Library';
vibesLibrary.creator = 'DG All-Go-Rhythm';

// build playlist
let vibesPlaylist = new Playlist();
vibesPlaylist.name = 'Vibes Playlist';

// build tracks, song tracks not train tracks
let sweetLife = new Track();
sweetLife.title = 'Sweet Life';
sweetLife.artist = 'Frank Ocean';
sweetLife.album = 'Channel Orange';
sweetLife.rating = 10;
sweetLife.runtime = 40000;
vibesLibrary.tracks.push(sweetLife);
vibesPlaylist.tracks.push(sweetLife);

let redBone = new Track();
redBone.title = 'Redbone';
redBone.artist = 'Childish Gambino';
redBone.album = 'Awaken My Love!';
redBone.rating = 9;
redBone.runtime = 35000;
vibesLibrary.tracks.push(redBone);
vibesPlaylist.tracks.push(redBone);

vibesLibrary.playlists.push(vibesPlaylist);

console.log('\n', vibesLibrary.name, 'playlists -\n ========== \n ', vibesLibrary.playlists);
console.log('\n', vibesPlaylist.name, 'tracks -\n ========== \n ', vibesPlaylist.tracks);
console.log('\n', vibesPlaylist.name, 'overall rating -\n ========== \n ', vibesPlaylist.overallRating());
console.log('\n', vibesPlaylist.name, 'total runtime -\n ========== \n ', vibesPlaylist.totalRuntime());




const songs = [
    { id: 1, title: "Blinding Lights", artist: "The Weeknd", album: "After Hours", duration: "3:20", cover: null, color: "#ff0055" },
    { id: 2, title: "Shape of You", artist: "Ed Sheeran", album: "Divide", duration: "3:53", cover: null, color: "#00aaff" },
    { id: 3, title: "Dance Monkey", artist: "Tones and I", album: "The Kids Are Coming", duration: "3:29", cover: null, color: "#ff9900" },
    { id: 4, title: "Someone Like You", artist: "Adele", album: "21", duration: "4:45", cover: null, color: "#9933ff" },
    { id: 5, title: "Uptown Funk", artist: "Bruno Mars", album: "Uptown Special", duration: "4:30", cover: null, color: "#ff3333" },
    { id: 6, title: "Bad Guy", artist: "Billie Eilish", album: "When We All Fall Asleep", duration: "3:14", cover: null, color: "#33cc33" },
    { id: 7, title: "Rolling in the Deep", artist: "Adele", album: "21", duration: "3:53", cover: null, color: "#ff6633" },
    { id: 8, title: "Closer", artist: "The Chainsmokers", album: "Collage", duration: "4:04", cover: null, color: "#3366ff" },
    { id: 9, title: "Senorita", artist: "Shawn Mendes", album: "Senorita", duration: "3:10", cover: null, color: "#ff0066" },
    { id: 10, title: "Levitating", artist: "Dua Lipa", album: "Future Nostalgia", duration: "3:23", cover: null, color: "#cc33ff" },
    { id: 11, title: "Stay", artist: "Justin Bieber", album: "Justice", duration: "2:21", cover: null, color: "#ff3300" },
    { id: 12, title: "Watermelon Sugar", artist: "Harry Styles", album: "Fine Line", duration: "2:54", cover: null, color: "#ff3366" },
    { id: 13, title: "Heat Waves", artist: "Glass Animals", album: "Dreamland", duration: "3:58", cover: null, color: "#ff9900" },
    { id: 14, title: "As It Was", artist: "Harry Styles", album: "Harry's House", duration: "2:47", cover: null, color: "#33ff99" },
    { id: 15, title: "Anti-Hero", artist: "Taylor Swift", album: "Midnights", duration: "3:20", cover: null, color: "#99ccff" },
    { id: 16, title: "Alone Again", artist: "The Weeknd", album: "After Hours", duration: "4:10", cover: null, color: "#ff0055" },
    { id: 17, title: "Too Late", artist: "The Weeknd", album: "After Hours", duration: "6:01", cover: null, color: "#ff0055" },
    { id: 18, title: "Hardest To Love", artist: "The Weeknd", album: "After Hours", duration: "3:32", cover: null, color: "#ff0055" },
    { id: 19, title: "Scared To Live", artist: "The Weeknd", album: "After Hours", duration: "3:11", cover: null, color: "#ff0055" },
    { id: 20, title: "Snowchild", artist: "The Weeknd", album: "After Hours", duration: "4:07", cover: null, color: "#ff0055" },
    { id: 21, title: "Escape from LA", artist: "The Weeknd", album: "After Hours", duration: "6:02", cover: null, color: "#ff0055" },
    { id: 22, title: "Heartless", artist: "The Weeknd", album: "After Hours", duration: "3:18", cover: null, color: "#ff0055" },
    { id: 23, title: "Faith", artist: "The Weeknd", album: "After Hours", duration: "5:51", cover: null, color: "#ff0055" },
    { id: 24, title: "In Your Eyes", artist: "The Weeknd", album: "After Hours", duration: "3:57", cover: null, color: "#ff0055" },
    { id: 25, title: "Save Your Tears", artist: "The Weeknd", album: "After Hours", duration: "3:35", cover: null, color: "#ff0055" },
    { id: 26, title: "Repeat After Me", artist: "The Weeknd", album: "After Hours", duration: "3:59", cover: null, color: "#ff0055" },
    { id: 27, title: "After Hours", artist: "The Weeknd", album: "After Hours", duration: "6:01", cover: null, color: "#ff0055" },
    { id: 28, title: "Until I Bleed Out", artist: "The Weeknd", album: "After Hours", duration: "4:01", cover: null, color: "#ff0055" },
    { id: 29, title: "Floating Mist", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "2:53", cover: null, color: "#d4a574" },
    { id: 30, title: "A Dream Within a Dream", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "4:08", cover: null, color: "#d4a574" },
    { id: 31, title: "Everlasting Dawn at Night", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "1:45", cover: null, color: "#d4a574" },
    { id: 32, title: "Lanterns in the Moonlit Twilight", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "1:29", cover: null, color: "#d4a574" },
    { id: 33, title: "The Hazy Moon", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "1:56", cover: null, color: "#d4a574" },
    { id: 34, title: "Crescent Gildeth the Dark", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "3:34", cover: null, color: "#d4a574" },
    { id: 35, title: "The Moon's Mist-Woven Veil", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "2:10", cover: null, color: "#d4a574" },
    { id: 36, title: "Where Tender Night Embraceth Thee", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "3:16", cover: null, color: "#d4a574" },
    { id: 37, title: "A Bright, Fresh Year", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "2:00", cover: null, color: "#d4a574" },
    { id: 38, title: "summer flows", artist: "wave to earth", album: "summer flows 0.02", duration: "0:37", cover: null, color: "#7eb8da" },
    { id: 39, title: "ride", artist: "wave to earth", album: "summer flows 0.02", duration: "3:48", cover: null, color: "#7eb8da" },
    { id: 40, title: "seasons", artist: "wave to earth", album: "summer flows 0.02", duration: "4:16", cover: null, color: "#7eb8da" },
    { id: 41, title: "ocean floor", artist: "wave to earth", album: "summer flows 0.02", duration: "4:01", cover: null, color: "#7eb8da" },
    { id: 42, title: "surf.", artist: "wave to earth", album: "summer flows 0.02", duration: "3:49", cover: null, color: "#7eb8da" },
    { id: 43, title: "Moscow Mule", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "4:05", cover: null, color: "#ff6b6b" },
    { id: 44, title: "Después de la Playa", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:50", cover: null, color: "#ff6b6b" },
    { id: 45, title: "Me Porto Bonito", artist: "Bad Bunny, Chencho Corleone", album: "Un Verano Sin Ti", duration: "2:58", cover: null, color: "#ff6b6b" },
    { id: 46, title: "Tití Me Preguntó", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "4:03", cover: null, color: "#ff6b6b" },
    { id: 47, title: "Un Ratito", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:56", cover: null, color: "#ff6b6b" },
    { id: 48, title: "Yo No Soy Celoso", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:50", cover: null, color: "#ff6b6b" },
    { id: 49, title: "Tarot", artist: "Bad Bunny, JHAYCO", album: "Un Verano Sin Ti", duration: "3:57", cover: null, color: "#ff6b6b" },
    { id: 50, title: "Neverita", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:53", cover: null, color: "#ff6b6b" },
    { id: 51, title: "La Corriente", artist: "Bad Bunny, Tony Dize", album: "Un Verano Sin Ti", duration: "3:18", cover: null, color: "#ff6b6b" },
    { id: 52, title: "Efecto", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:33", cover: null, color: "#ff6b6b" },
    { id: 53, title: "Party", artist: "Bad Bunny, Rauw Alejandro", album: "Un Verano Sin Ti", duration: "3:47", cover: null, color: "#ff6b6b" },
    { id: 54, title: "Aguacero", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:30", cover: null, color: "#ff6b6b" },
    { id: 55, title: "Enséñame a Bailar", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:56", cover: null, color: "#ff6b6b" },
    { id: 56, title: "Ojitos Lindos", artist: "Bad Bunny, Bomba Estéreo", album: "Un Verano Sin Ti", duration: "4:18", cover: null, color: "#ff6b6b" },
    { id: 57, title: "Dos Mil 16", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:28", cover: null, color: "#ff6b6b" },
    { id: 58, title: "El Apagón", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:21", cover: null, color: "#ff6b6b" },
    { id: 59, title: "Otro Atardecer", artist: "Bad Bunny, The Marías", album: "Un Verano Sin Ti", duration: "4:04", cover: null, color: "#ff6b6b" },
    { id: 60, title: "Un Coco", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:16", cover: null, color: "#ff6b6b" },
    { id: 61, title: "Andrea", artist: "Bad Bunny, Buscabulla", album: "Un Verano Sin Ti", duration: "5:39", cover: null, color: "#ff6b6b" },
    { id: 62, title: "Me Fui de Vacaciones", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:00", cover: null, color: "#ff6b6b" },
    { id: 63, title: "Un Verano Sin Ti", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:28", cover: null, color: "#ff6b6b" },
    { id: 64, title: "Agosto", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:19", cover: null, color: "#ff6b6b" },
    { id: 65, title: "Callaíta", artist: "Bad Bunny, Tainy", album: "Un Verano Sin Ti", duration: "4:10", cover: null, color: "#ff6b6b" }
];

const albums = [
    { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", color: "#ff0055", image: "AfterHours-Album.webp", songs: [16, 17, 18, 19, 20, 21, 22, 23, 1, 24, 25, 26, 27, 28] },
    { id: 2, title: "Divide", artist: "Ed Sheeran", year: "2017", color: "#00aaff", songs: [2] },
    { id: 3, title: "When We All Fall Asleep", artist: "Billie Eilish", year: "2019", color: "#33cc33", songs: [6] },
    { id: 4, title: "21", artist: "Adele", year: "2011", color: "#9933ff", songs: [4, 7] },
    { id: 5, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", color: "#cc33ff", songs: [10] },
    { id: 6, title: "Harry's House", artist: "Harry Styles", year: "2022", color: "#33ff99", songs: [14] },
    { id: 7, title: "Midnights", artist: "Taylor Swift", year: "2022", color: "#99ccff", songs: [15] },
    { id: 8, title: "Dreamland", artist: "Glass Animals", year: "2020", color: "#ff9900", songs: [13] },
    { id: 9, title: "When Lanterns Echo the Moon", artist: "HOYO-MiX", year: "2026", color: "#d4a574", image: "WhenLanternsEchoTheMoon-Album.webp", songs: [29, 30, 31, 32, 33, 34, 35, 36, 37] },
    { id: 10, title: "summer flows 0.02", artist: "wave to earth", year: "2020", color: "#7eb8da", image: "SummerFlows0.02-Album.webp", songs: [38, 39, 40, 41, 42] },
    { id: 11, title: "Un Verano Sin Ti", artist: "Bad Bunny", year: "2022", color: "#ff6b6b", image: "UnVeranoSinTi-Album.webp", songs: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65] }
];

const albumPages = {
    1: 'AfterHours-Album.html',
    9: 'WhenLanternsEchoTheMoon-Album.html',
    10: 'SummerFlows0.02-Album.html',
    11: 'UnVeranoSinTi-Album.html'
};

const artists = [
    { id: 1, name: "The Weeknd", type: "Artist", color: "#ff0055" },
    { id: 2, name: "Ed Sheeran", type: "Artist", color: "#00aaff" },
    { id: 3, name: "Billie Eilish", type: "Artist", color: "#33cc33" },
    { id: 4, name: "Adele", type: "Artist", color: "#9933ff" },
    { id: 5, name: "Dua Lipa", type: "Artist", color: "#cc33ff" },
    { id: 6, name: "Harry Styles", type: "Artist", color: "#33ff99" },
    { id: 7, name: "Taylor Swift", type: "Artist", color: "#99ccff" },
    { id: 8, name: "The Chainsmokers", type: "Artist", color: "#3366ff" }
];

let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
if (!recentlyPlayed.length) {
    recentlyPlayed = [1, 2, 3, 4, 5];
}
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let userPlaylists = JSON.parse(localStorage.getItem('userPlaylists')) || [];
let currentPlaylist = null;
let currentSongIndex = -1;
let isPlaying = false;
let shuffle = false;
let repeat = false;
let audio = null;
let currentQueue = [];
let currentSong = null;
let onSongChange = null;

const pages = {};
const homePage = document.getElementById('homePage');
const discoverPage = document.getElementById('discoverPage');
const libraryPage = document.getElementById('libraryPage');
const playlistPage = document.getElementById('playlistPage');
if (homePage) pages.home = homePage;
if (discoverPage) pages.discover = discoverPage;
if (libraryPage) pages.library = libraryPage;
if (playlistPage) pages.playlist = playlistPage;

const navItems = document.querySelectorAll('.nav-item[data-page]');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const closeSidebar = document.getElementById('closeSidebar');
const overlay = document.getElementById('overlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const playlistContainer = document.getElementById('playlistContainer');
const libraryContent = document.getElementById('libraryContent');
const playlistDetail = document.getElementById('playlistDetail');
const createPlaylistBtn = document.getElementById('createPlaylistBtn');
const backToLibrary = document.getElementById('backToLibrary');
const playPauseBtn = document.getElementById('playPauseBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const playerTrackName = document.getElementById('playerTrackName');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const playerImg = document.getElementById('playerImg');
const likeBtn = document.getElementById('likeBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');

function saveState() {
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
}

function addToRecentlyPlayed(songId) {
    recentlyPlayed = recentlyPlayed.filter(id => id !== songId);
    recentlyPlayed.unshift(songId);
    if (recentlyPlayed.length > 5) recentlyPlayed = recentlyPlayed.slice(0, 5);
    saveState();
    renderRecentlyPlayed();
}

function isLiked(songId) {
    return likedSongs.includes(songId);
}

function toggleLike(songId) {
    if (isLiked(songId)) {
        likedSongs = likedSongs.filter(id => id !== songId);
    } else {
        likedSongs.push(songId);
    }
    saveState();
    renderLibraryPage();
    if (currentPlaylist === 'liked') renderPlaylistDetail('liked');
}

function getSongById(id) {
    return songs.find(s => s.id === id);
}

function getAlbumSongs(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (!album) return [];
    return album.songs.map(sid => getSongById(sid)).filter(Boolean);
}

function getPlaylistSongs(playlistName) {
    if (playlistName === 'liked') return likedSongs.map(id => getSongById(id)).filter(Boolean);
    const pl = userPlaylists.find(p => p.name === playlistName);
    if (!pl) return [];
    return pl.songs.map(id => getSongById(id)).filter(Boolean);
}

function getAlbumCoverForSong(song) {
    const album = albums.find(a => a.title === song.album && a.image);
    if (album) return album.image;
    return null;
}

function renderCard(song, showPlayBtn = true, queueIds = null) {
    const div = document.createElement('div');
    div.className = 'card-wrapper';
    const cover = getAlbumCoverForSong(song);
    const coverHtml = cover
        ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
        : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${song.title.substring(0, 2).toUpperCase()}</div>`;
    div.innerHTML = `
        <div class="card">
            <div class="card-img">
                ${coverHtml}
            </div>
            <div class="card-title">${song.title}</div>
            <div class="card-subtitle">${song.artist}</div>
            ${showPlayBtn ? `<button class="card-play-btn" onclick="event.stopPropagation(); playSong(${song.id}, null, ${queueIds ? JSON.stringify(queueIds) : 'null'})">&#9654;</button>` : ''}
        </div>
    `;
    div.addEventListener('click', () => playSong(song.id, null, queueIds));
    return div;
}

function renderArtistCard(artist) {
    const div = document.createElement('div');
    div.className = 'card artist-card';
    div.innerHTML = `
        <div class="artist-img" style="background: linear-gradient(135deg, ${artist.color}, #555);">
            ${artist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        <div class="artist-name">${artist.name}</div>
        <div class="artist-type">${artist.type}</div>
    `;
    return div;
}

function renderHorizontalSongs(containerId, songIds) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    songIds.forEach(id => {
        const song = getSongById(id);
        if (song) container.appendChild(renderCard(song, true, songIds));
    });
}

function renderHorizontalAlbums(containerId, albumIds) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    albumIds.forEach(albumId => {
        const album = albums.find(a => a.id === albumId);
        if (album) {
            const div = document.createElement('div');
            div.className = 'card-wrapper';
            const coverHtml = album.image
                ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
            div.innerHTML = `
                <div class="card">
                    <div class="card-img">
                        ${coverHtml}
                    </div>
                    <div class="card-title">${album.title}</div>
                    <div class="card-subtitle">${album.artist} - ${album.year}</div>
                    <button class="card-play-btn" onclick="event.stopPropagation(); playAlbum(${album.id})">&#9654;</button>
                </div>
            `;
            div.addEventListener('click', () => {
                const albumPage = albumPages[album.id];
                if (albumPage) {
                    window.location.href = albumPage;
                } else {
                    playAlbum(album.id);
                }
            });
            container.appendChild(div);
        }
    });
}

function renderHorizontalArtists(containerId, artistIds) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    artistIds.forEach(artistId => {
        const artist = artists.find(a => a.id === artistId);
        if (artist) container.appendChild(renderArtistCard(artist));
    });
}

function renderRecentlyPlayed() {
    const container = document.getElementById('recentlyPlayed');
    container.innerHTML = '';
    recentlyPlayed.forEach(id => {
        const song = getSongById(id);
        if (song) container.appendChild(renderCard(song, true, recentlyPlayed));
    });
}

function renderHomePage() {
    renderRecentlyPlayed();
    renderHorizontalArtists('popularArtists', artists.slice(0, 6).map(a => a.id));
}

function renderDiscoverPage() {
    renderHorizontalSongs('latestReleases', songs.slice(0, 8).map(s => s.id));
    renderHorizontalSongs('trendingSongs', [3, 6, 8, 10, 13, 1, 11, 15]);
    renderHorizontalSongs('popularSongs', [5, 2, 9, 12, 14, 4, 7, 1]);
    renderHorizontalAlbums('popularAlbums', albums.slice(0, 6).map(a => a.id));
}

function renderLibraryPage() {
    libraryContent.innerHTML = '';
    
    const likedSection = document.createElement('div');
    likedSection.innerHTML = '<div class="library-section-title">Liked Music</div>';
    const likedList = document.createElement('div');
    likedList.className = 'song-list';
    likedSongs.forEach((id, index) => {
        const song = getSongById(id);
        if (song) {
            const row = document.createElement('div');
            row.className = 'song-row';
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.75rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            row.innerHTML = `
                <div class="song-row-num">${index + 1}</div>
                <div class="song-row-img">
                    ${coverHtml}
                </div>
                <div class="song-row-info">
                    <div class="song-row-title">${song.title}</div>
                    <div class="song-row-artist">${song.artist}</div>
                </div>
                <div class="song-row-duration">${song.duration}</div>
            `;
            row.addEventListener('click', () => playSong(song.id));
            likedList.appendChild(row);
        }
    });
    if (likedSongs.length === 0) {
        likedList.innerHTML = '<div style="color: var(--text-muted); padding: 16px;">No liked songs yet. Start liking songs!</div>';
    }
    likedSection.appendChild(likedList);
    libraryContent.appendChild(likedSection);

    if (userPlaylists.length > 0) {
        const plSection = document.createElement('div');
        plSection.innerHTML = '<div class="library-section-title" style="margin-top: 24px;">Playlists</div>';
        const plList = document.createElement('div');
        plList.className = 'song-list';
        userPlaylists.forEach((pl, index) => {
            const row = document.createElement('div');
            row.className = 'song-row';
            row.innerHTML = `
                <div class="song-row-img" style="background: linear-gradient(135deg, var(--accent), #333);">&#127925;</div>
                <div class="song-row-info">
                    <div class="song-row-title">${pl.name}</div>
                    <div class="song-row-artist">${pl.songs.length} songs</div>
                </div>
                <div class="song-row-duration">${pl.songs.length > 0 ? getPlaylistSongs(pl.name).map(s => s.duration).join(', ') : ''}</div>
            `;
            row.addEventListener('click', () => openPlaylist(pl.name));
            plList.appendChild(row);
        });
        plSection.appendChild(plList);
        libraryContent.appendChild(plSection);
    }
}

function renderPlaylistDetail(playlistName) {
    const isLiked = playlistName === 'liked';
    const title = isLiked ? 'Liked Music' : playlistName;
    const plSongs = getPlaylistSongs(playlistName);
    
    let html = `<h2 class="section-title">${title}</h2>`;
    if (plSongs.length > 0) {
        html += '<div class="song-list">';
        plSongs.forEach((song, index) => {
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.75rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            html += `
                <div class="song-row" onclick="playSong(${song.id}, '${playlistName}')">
                    <div class="song-row-num">${index + 1}</div>
                    <div class="song-row-img">
                        ${coverHtml}
                    </div>
                    <div class="song-row-info">
                        <div class="song-row-title">${song.title}</div>
                        <div class="song-row-artist">${song.artist}</div>
                    </div>
                    <div class="song-row-duration">${song.duration}</div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += '<div style="color: var(--text-muted); padding: 16px;">No songs in this playlist yet.</div>';
    }
    playlistDetail.innerHTML = html;
}

function openPlaylist(name) {
    currentPlaylist = name;
    renderPlaylistDetail(name);
    showPage('playlist');
}

function showPage(pageName) {
    if (!pages[pageName]) return;
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageName].classList.add('active');
    navItems.forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-page="${pageName}"]`);
    if (activeNav) activeNav.classList.add('active');
    
    if (pageName === 'home') renderHomePage();
    if (pageName === 'discover') renderDiscoverPage();
    if (pageName === 'library') renderLibraryPage();
    
    closeSidebarFns();
}

navItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        showPage(item.dataset.page);
    });
});

function toggleSidebar() {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeSidebarFns() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

menuBtn.addEventListener('click', toggleSidebar);
closeSidebar.addEventListener('click', closeSidebarFns);
overlay.addEventListener('click', closeSidebarFns);

if (createPlaylistBtn) {
    createPlaylistBtn.addEventListener('click', () => {
        const name = prompt('Enter playlist name:');
        if (name && name.trim()) {
            userPlaylists.push({ name: name.trim(), songs: [] });
            saveState();
            updatePlaylistUI();
            renderLibraryPage();
        }
    });
}

function updatePlaylistUI() {
    const existingItems = playlistContainer.querySelectorAll('.playlist-item:not([data-playlist="liked"])');
    existingItems.forEach(item => item.remove());
    userPlaylists.forEach(pl => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = 'playlist-item';
        a.dataset.playlist = pl.name;
        a.innerHTML = `
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z"/></svg>
            <span>${pl.name}</span>
        `;
        a.addEventListener('click', e => {
            e.preventDefault();
            openPlaylist(pl.name);
        });
        playlistContainer.appendChild(a);
    });
}

if (backToLibrary) {
    backToLibrary.addEventListener('click', () => {
        currentPlaylist = null;
        showPage('library');
    });
}

function playSong(songId, playlistName = null, queueIds = null) {
    const song = getSongById(songId);
    if (!song) return;
    
    addToRecentlyPlayed(songId);
    
    if (queueIds && queueIds.length) {
        currentPlaylist = 'queue';
        currentQueue = queueIds.slice();
        currentSongIndex = currentQueue.indexOf(songId);
    } else if (playlistName) {
        currentPlaylist = playlistName;
        currentQueue = getPlaylistSongs(playlistName).map(s => s.id);
        currentSongIndex = currentQueue.indexOf(songId);
    } else if (currentPlaylist === 'liked' || currentPlaylist && currentPlaylist.startsWith('album:')) {
        currentQueue = getCurrentPlaylistSongs().map(s => s.id);
        currentSongIndex = currentQueue.indexOf(songId);
    } else if (currentPlaylist && currentPlaylist !== 'queue' && getPlaylistSongs(currentPlaylist).some(s => s.id === songId)) {
        currentQueue = getPlaylistSongs(currentPlaylist).map(s => s.id);
        currentSongIndex = currentQueue.indexOf(songId);
    } else {
        currentPlaylist = null;
        currentQueue = songs.map(s => s.id);
        currentSongIndex = currentQueue.indexOf(songId);
    }
    
    loadSong(song);
    playAudio();
}

function playAlbum(albumId) {
    const albumSongs = getAlbumSongs(albumId);
    if (albumSongs.length > 0) {
        currentPlaylist = 'album:' + albumId;
        currentQueue = albumSongs.map(s => s.id);
        currentSongIndex = 0;
        loadSong(albumSongs[0]);
        playAudio();
    }
}

function loadSong(song) {
    currentSong = song;
    playerTrackName.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    playerImg.style.display = 'flex';
    playerImg.style.background = `linear-gradient(135deg, ${song.color}, #333)`;
    playerImg.style.alignItems = 'center';
    playerImg.style.justifyContent = 'center';
    playerImg.style.color = '#fff';
    playerImg.textContent = song.title.substring(0, 2).toUpperCase();
    
    totalTimeEl.textContent = song.duration;
    currentTimeEl.textContent = '0:00';
    progressFill.style.width = '0%';
    
    updateLikeButton();

    if (typeof onSongChange === 'function') onSongChange(song);
}

function playAudio() {
    isPlaying = true;
    playPauseBtn.querySelector('.play-icon').style.display = 'none';
    playPauseBtn.querySelector('.pause-icon').style.display = 'block';
    
    if (audio) {
        audio.pause();
        audio = null;
    }
    
    if (!currentSong) currentSong = getCurrentSong();
    if (currentSong && currentSong.id) {
        const musicFiles = {
            1: 'BlindingLights-Song.mp3',
            2: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            3: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
            4: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
            5: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
            6: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
            7: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
            8: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
            9: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
            10: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
            11: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
            12: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
            13: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
            14: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
            15: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
            31: 'EverlastingDawnAtNight-Song.mp3',
            42: 'Surf-Song.mp3',
            59: 'OtroAtardecer-Song.mp3'
        };
        
        if (musicFiles[currentSong.id]) {
            audio = new Audio(musicFiles[currentSong.id]);
            audio.addEventListener('timeupdate', updateProgress);
            audio.addEventListener('ended', playNext);
            audio.play().catch(() => {});
        }
    }
}

function pauseAudio() {
    isPlaying = false;
    playPauseBtn.querySelector('.play-icon').style.display = 'block';
    playPauseBtn.querySelector('.pause-icon').style.display = 'none';
    if (audio) audio.pause();
}

function playNext() {
    if (shuffle) {
        const list = getCurrentPlaylistSongs();
        if (list.length > 0) {
            currentSongIndex = Math.floor(Math.random() * list.length);
            loadSong(list[currentSongIndex]);
            playAudio();
        }
        return;
    }
    
    const list = getCurrentPlaylistSongs();
    if (list.length > 0) {
        currentSongIndex = (currentSongIndex + 1) % list.length;
        loadSong(list[currentSongIndex]);
        playAudio();
    }
}

function playPrev() {
    const list = getCurrentPlaylistSongs();
    if (list.length > 0) {
        currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
        loadSong(list[currentSongIndex]);
        playAudio();
    }
}

function getCurrentSong() {
    const list = getCurrentPlaylistSongs();
    if (list.length > 0 && currentSongIndex >= 0 && currentSongIndex < list.length) {
        return list[currentSongIndex];
    }
    return songs[0];
}

function getCurrentPlaylistSongs() {
    if (currentPlaylist === 'queue') return currentQueue.map(id => getSongById(id)).filter(Boolean);
    if (currentPlaylist === 'liked') return likedSongs.map(id => getSongById(id)).filter(Boolean);
    if (currentPlaylist && currentPlaylist.startsWith('album:')) {
        const albumId = parseInt(currentPlaylist.replace('album:', ''));
        return getAlbumSongs(albumId);
    }
    if (currentPlaylist) return getPlaylistSongs(currentPlaylist);
    return songs;
}

function updateProgress() {
    if (!audio) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = percent + '%';
    
    const currentMins = Math.floor(audio.currentTime / 60);
    const currentSecs = Math.floor(audio.currentTime % 60);
    currentTimeEl.textContent = `${currentMins}:${currentSecs.toString().padStart(2, '0')}`;
}

function updateLikeButton() {
    const song = getCurrentSong();
    const liked = !!(song && isLiked(song.id));
    const svg = likeBtn.querySelector('svg');
    if (svg) {
        svg.setAttribute('fill', liked ? 'var(--accent)' : 'none');
        svg.setAttribute('stroke', liked ? 'var(--accent)' : 'currentColor');
    }
    likeBtn.style.color = liked ? 'var(--accent)' : 'var(--text-secondary)';
}

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
});

nextBtn.addEventListener('click', playNext);
prevBtn.addEventListener('click', playPrev);

progressBar.addEventListener('click', e => {
    if (!audio || !audio.duration) return;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    audio.currentTime = percent * audio.duration;
});

likeBtn.addEventListener('click', () => {
    const song = getCurrentSong();
    if (song) {
        toggleLike(song.id);
        updateLikeButton();
    }
});

shuffleBtn.addEventListener('click', () => {
    shuffle = !shuffle;
    shuffleBtn.style.color = shuffle ? 'var(--accent)' : 'var(--text-secondary)';
});

repeatBtn.addEventListener('click', () => {
    repeat = !repeat;
    repeatBtn.style.color = repeat ? 'var(--accent)' : 'var(--text-secondary)';
});

searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        searchResults.classList.remove('active');
        return;
    }
    
    const matchedSongs = songs.filter(s => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query));
    const matchedAlbums = albums.filter(a => a.title.toLowerCase().includes(query) || a.artist.toLowerCase().includes(query));
    const matchedArtists = artists.filter(a => a.name.toLowerCase().includes(query));
    
    let html = '';
    matchedSongs.forEach(song => {
        const cover = getAlbumCoverForSong(song);
        const coverHtml = cover
            ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
            : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${song.title.substring(0, 2).toUpperCase()}</div>`;
        html += `
            <div class="search-result-item" onclick="playSong(${song.id}); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-img">
                    ${coverHtml}
                </div>
                <div class="search-result-info">
                    <div class="search-result-name">${song.title}</div>
                    <div class="search-result-sub">${song.artist}</div>
                </div>
                <span class="search-result-type">Song</span>
            </div>
        `;
    });
    matchedAlbums.forEach(album => {
        const albumPage = albumPages[album.id];
        const action = albumPage
            ? `window.location.href='${albumPage}'`
            : `playAlbum(${album.id})`;
        const coverHtml = album.image
            ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
            : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
        html += `
            <div class="search-result-item" onclick="${action}; document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-img">
                    ${coverHtml}
                </div>
                <div class="search-result-info">
                    <div class="search-result-name">${album.title}</div>
                    <div class="search-result-sub">${album.artist}</div>
                </div>
                <span class="search-result-type">Album</span>
            </div>
        `;
    });
    matchedArtists.forEach(artist => {
        html += `
            <div class="search-result-item" onclick="document.getElementById('searchInput').value = '${artist.name}'; document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-img" style="background: linear-gradient(135deg, ${artist.color}, #555);">${artist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</div>
                <div class="search-result-info">
                    <div class="search-result-name">${artist.name}</div>
                    <div class="search-result-sub">${artist.type}</div>
                </div>
                <span class="search-result-type">Artist</span>
            </div>
        `;
    });
    
    if (!html) {
        html = '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No results found</div>';
    }
    
    searchResults.innerHTML = html;
    searchResults.classList.add('active');
});

document.addEventListener('click', e => {
    if (!e.target.closest('.search-container')) {
        searchResults.classList.remove('active');
    }
});

searchInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        const query = searchInput.value.toLowerCase().trim();
        if (query) {
            const firstSong = songs.find(s => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query));
            if (firstSong) playSong(firstSong.id);
            searchResults.classList.remove('active');
            searchInput.value = '';
        }
    }
});

document.querySelectorAll('.scroll-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.parentElement.querySelector('.scroll-container');
        const scrollAmount = 300;
        if (btn.classList.contains('scroll-left')) {
            container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});

window.playSong = playSong;
window.playAlbum = playAlbum;

if (discoverPage) {
    renderDiscoverPage();
} else if (homePage) {
    renderHomePage();
}
if (playlistContainer) {
    updatePlaylistUI();
}

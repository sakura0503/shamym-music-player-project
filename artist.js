const singlesMap = {
    1: [
        {title: "Open Hearts (single version)", year: "2025", type: "single"},
        {title: "Wake Me Up (single version) (feat. Justice)", year: "2025", type: "single"},
        {title: "Enjoy The Show (single version) (feat. Future)", year: "2025", type: "single"},
        {title: "São Paulo", year: "2024", type: "ep", explicit: true},
        {title: "Dancing In The Flames", year: "2024", type: "single"},
        {title: "Dancing In The Flames", year: "2024", type: "ep"},
        {title: "Popular (feat. Playboi Carti)", year: "2024", type: "single", explicit: true},
        {title: "One Of The Girls", year: "2024", type: "single"}
    ],
     9: [160, 161, 162, 163, 98, 164, 104],
    10: [110, 111, 112, 113, 114, 115],
    11: [
        {title: "ALAMBRE PúA", year: "2025", type: "single", explicit: true},
        {title: "PIToRRO DE COCO", year: "2024", type: "single", explicit: true},
        {title: "EL CLúB", year: "2024", type: "single", explicit: true},
        {title: "Una Velita", year: "2024", type: "single", explicit: true},
        {title: "ADIVINO", year: "2024", type: "single", explicit: true},
        {title: "Un Preview", year: "2023", type: "single", explicit: true},
        {title: "K-POP", year: "2023", type: "single", explicit: true},
        {title: "WHERE SHE GOES", year: "2023", type: "single", explicit: true},
        {title: "un x100to", year: "2023", type: "single", explicit: true},
        {title: "Gato de Noche", year: "2022", type: "single", explicit: true}
    ],
    12: [
        {title: "Side Quest King", year: "2026", type: "single"},
        {title: "Flares of the Blazing Sun", year: "2025", type: "single"},
        {title: "Nameless Faces", year: "2025", type: "single"},
        {title: "Blazing Heart", year: "2025", type: "single"},
        {title: "WHITE NIGHT", year: "2024", type: "single"},
        {title: "INSIDE", year: "2024", type: "ep"}
    ]
};

function renderArtistDetail() {
    const artistId = window.artistPageId || 1;
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;

    const artistSongs = songs.filter(s => s.artist === artist.name);
    const container = document.getElementById('artistDetail');

    const popularSongsMap = {
        1: [1, 90, 94, 86, 25, 87, 88, 91, 92, 93, 22, 24, 89, 27, 95, 18],
        9: [38, 39, 40, 41, 42, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106],
        10: [110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125],
        11: [127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142],
        12: [144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]
    };

    const popularSongIds = popularSongsMap[artistId] || artistSongs.slice(0, 16).map(s => s.id);
    const popularSongs = popularSongIds.map(id => getSongById(id)).filter(Boolean);

    const artistSingles = (singlesMap[artistId] || artistSongs.slice(0, 10)).map(single => {
        if (typeof single === 'object' && single.title) {
            return single;
        }
        return getSongById(single);
    }).filter(Boolean).slice(0, 10);

    const artistAlbums = albums.filter(a => a.artist === artist.name && (!a.type || a.type === 'album'));

    let html = `
        <div class="artist-header">
            <div class="artist-header-img" style="background: linear-gradient(135deg, ${artist.color}, #d4a574);">
                ${artist.image ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div class="artist-header-info">
                <div class="artist-header-name">${artist.name}</div>
                <div class="artist-header-meta">${artist.type}</div>
            </div>
        </div>

        <h2 class="section-title">Popular Songs</h2>
        <div class="artist-popular-songs">
    `;

    const columns = [[], [], [], []];
    popularSongs.forEach((song, index) => {
        columns[index % 4].push({ song, index });
    });

    columns.forEach((col, colIndex) => {
        html += `<div class="artist-popular-songs-col">`;
        col.forEach(({ song, index }) => {
            const isPlaying = song.id === window.artistCurrentPlayingId;
            const playIcon = isPlaying ? '&#9646;&#9646;' : '&#9654;';
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.6rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            html += `
                <div class="artist-popular-song" data-song-id="${song.id}">
                    <div class="artist-popular-song-img">
                        ${coverHtml}
                    </div>
                    <div class="artist-popular-song-info">
                        <div class="artist-popular-song-title">${song.title}</div>
                        <div class="artist-popular-song-artist">${song.artist}</div>
                    </div>
                    <button class="artist-popular-song-play" data-song-id="${song.id}">${playIcon}</button>
                    <button class="card-menu-btn" data-type="song" data-id="${song.id}" onclick="event.stopPropagation(); showCardContextMenu(this, 'song', ${song.id});">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </button>
                </div>
            `;
        });
        html += `</div>`;
    });

    html += `</div>`;

    html += `<h2 class="section-title">Albums</h2>`;
    html += `<div class="horizontal-scroll">`;
    html += `<button class="scroll-btn scroll-left" id="albumsLeft">&lt;</button>`;
    html += `<div class="scroll-container" id="albumsScroll"></div>`;
    html += `<button class="scroll-btn scroll-right" id="albumsRight">&gt;</button>`;
    html += `</div>`;

    html += `<h2 class="section-title">Singles and EPs</h2>`;
    html += `<div class="horizontal-scroll">`;
    html += `<button class="scroll-btn scroll-left" id="singlesLeft">&lt;</button>`;
    html += `<div class="scroll-container" id="singlesScroll"></div>`;
    html += `<button class="scroll-btn scroll-right" id="singlesRight">&gt;</button>`;
    html += `</div>`;

    const relatedArtists = artists.filter(a => a.id !== artistId && artistPages[a.id]).slice(0, 5);

    html += `<h2 class="section-title">You Might Also Like</h2>`;
    html += `<div class="artist-suggestions">`;

    relatedArtists.forEach(relArtist => {
        const artistPage = artistPages[relArtist.id];
        html += `
            <div class="card artist-card ${artistPage ? 'clickable' : ''}" ${artistPage ? `onclick="navigateTo('${artistPage}')"` : ''}>
                <div class="artist-img" style="background: linear-gradient(135deg, ${relArtist.color}, #555);">
                    ${relArtist.image ? `<img src="${relArtist.image}" alt="${relArtist.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : relArtist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                </div>
                <div class="artist-name">${relArtist.name}</div>
                <div class="artist-type">${relArtist.type}</div>
            </div>
        `;
    });

    html += `</div>`;

    container.innerHTML = html;

    const sortedAlbums = [...artistAlbums].sort((a, b) => {
        const da = a.date ? new Date(a.date).getTime() : parseInt(a.year);
        const db = b.date ? new Date(b.date).getTime() : parseInt(b.year);
        return db - da;
    });
    const uniqueAlbums = sortedAlbums.filter((album, index, self) => index === self.findIndex(a => a.id === album.id));
    const displayAlbums = uniqueAlbums.slice(0, 10);

    const albumsContainer = document.getElementById('albumsScroll');
    displayAlbums.forEach((album) => {
        const coverHtml = album.image
            ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
            : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;

        const albumPage = albumPages[album.id];
        const hasSongs = album.songs && album.songs.length > 0;
        const clickable = albumPage || hasSongs;
        const cardClass = clickable ? 'artist-album-card clickable' : 'artist-album-card';
        const clickAttr = albumPage ? `onclick="navigateTo('${albumPage}')"` : (hasSongs ? `onclick="playAlbum(${album.id})"` : '');
        const playBtn = clickable ? `<button class="card-play-btn" onclick="event.stopPropagation(); ${albumPage ? `navigateTo('${albumPage}')` : `playAlbum(${album.id})`}">&#9654;</button>` : '';

        const cardEl = document.createElement('div');
        cardEl.className = cardClass;
        cardEl.innerHTML = `
            <div class="card" ${clickAttr}>
                <div class="card-img">
                    ${coverHtml}
                </div>
                <div class="card-title">${album.title}</div>
                <div class="card-subtitle">${album.explicit ? '<span class="explicit-badge">E</span> • ' : ''}${album.year}</div>
                ${playBtn}
                <button class="card-menu-btn" data-type="album" data-id="${album.id}" onclick="event.stopPropagation();">
                    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                </button>
            </div>
        `;
        const albumMenuBtn = cardEl.querySelector('.card-menu-btn');
        if (albumMenuBtn && typeof showCardContextMenu === 'function') {
            albumMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showCardContextMenu(albumMenuBtn, 'album', album.id);
            });
        }
        albumsContainer.appendChild(cardEl);
    });

    const singlesContainer = document.getElementById('singlesScroll');
    artistSingles.forEach((single, index) => {
        if (typeof single === 'object' && single.title && !single.id) {
            const title = single.title;
            const sub = `${single.type === 'ep' ? 'EP' : 'Single'} • ${single.year}`;
            const cardEl = document.createElement('div');
            cardEl.className = 'artist-singles-card';
            cardEl.innerHTML = `
                <div class="card">
                    <div class="card-img" style="background: linear-gradient(135deg, ${artist.color}, #333);">
                        ${title.substring(0, 2).toUpperCase()}
                    </div>
                    <div class="card-title">${title}</div>
                    <div class="card-subtitle">${single.explicit ? '<span class="explicit-badge">E</span> • ' : ''}${sub}</div>
                    <button class="card-menu-btn" data-type="song" data-id="virtual-${index}" onclick="event.stopPropagation();">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </button>
                </div>
            `;
            const virtualMenuBtn = cardEl.querySelector('.card-menu-btn');
            if (virtualMenuBtn && typeof showCardContextMenu === 'function') {
                virtualMenuBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showCardContextMenu(virtualMenuBtn, 'song', null, single, artist);
                });
            }
            singlesContainer.appendChild(cardEl);
            return;
        }
        const info = epInfo[single.id];
        const title = info && info.title ? info.title : single.title;
        const sub = info ? `${info.type === 'ep' ? 'EP' : 'Single'} • ${info.year}` : (single.album || '');
        const albumPage = info && info.albumId ? albumPages[info.albumId] : null;
        const cover = getAlbumCoverForSong(single);
        const coverHtml = cover
            ? `<img src="${cover}" alt="${single.album}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
            : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${single.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${title.substring(0, 2).toUpperCase()}</div>`;
        const cardEl = document.createElement('div');
        cardEl.className = 'artist-singles-card';
        cardEl.innerHTML = `
            <div class="card ${albumPage ? 'clickable' : ''}" ${albumPage ? `onclick="navigateTo('${albumPage}')"` : ''}>
                <div class="card-img">
                    ${coverHtml}
                </div>
                <div class="card-title">${title}</div>
                <div class="card-subtitle">${sub}</div>
                <button class="card-play-btn" onclick="event.stopPropagation(); ${albumPage ? `navigateTo('${albumPage}')` : `artistPlaySong(${single.id})`}">&#9654;</button>
                <button class="card-menu-btn" data-type="song" data-id="${single.id}" onclick="event.stopPropagation();">
                    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                </button>
            </div>
        `;
        const singleMenuBtn = cardEl.querySelector('.card-menu-btn');
        if (singleMenuBtn && typeof showCardContextMenu === 'function') {
            singleMenuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showCardContextMenu(singleMenuBtn, 'song', single.id);
            });
        }
        singlesContainer.appendChild(cardEl);
    });

    container.querySelectorAll('.artist-popular-song').forEach(row => {
        row.addEventListener('click', () => {
            const songId = parseInt(row.dataset.songId);
            artistPlaySong(songId);
        });
    });

    container.querySelectorAll('.artist-popular-song-play').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const songId = parseInt(btn.dataset.songId);
            artistPlaySong(songId);
        });
    });

    const albumsScroll = document.getElementById('albumsScroll');
    const albumsLeft = document.getElementById('albumsLeft');
    const albumsRight = document.getElementById('albumsRight');
    if (albumsScroll && albumsLeft && albumsRight) {
        albumsLeft.addEventListener('click', () => { albumsScroll.scrollBy({ left: -180, behavior: 'smooth' }); });
        albumsRight.addEventListener('click', () => { albumsScroll.scrollBy({ left: 180, behavior: 'smooth' }); });
    }

    const singlesScroll = document.getElementById('singlesScroll');
    const singlesLeft = document.getElementById('singlesLeft');
    const singlesRight = document.getElementById('singlesRight');
    if (singlesScroll && singlesLeft && singlesRight) {
        singlesLeft.addEventListener('click', () => { singlesScroll.scrollBy({ left: -180, behavior: 'smooth' }); });
        singlesRight.addEventListener('click', () => { singlesScroll.scrollBy({ left: 180, behavior: 'smooth' }); });
    }
}

function artistPlaySong(songId) {
    window.artistCurrentPlayingId = songId;
    const song = getSongById(songId);
    if (!song) return;

    currentPlayingSongId = songId;
    currentPlaylist = 'artist';
    const artist = artists.find(a => a.id === window.artistPageId);
    const artistSongs = songs.filter(s => s.artist === artist?.name);
    currentQueue = artistSongs.map(s => s.id);
    currentSongIndex = currentQueue.indexOf(songId);

    loadSong(song);
    playAudio();
    renderArtistDetail();
}

window.artistPlaySong = artistPlaySong;

function renderArtistPage() {
    renderArtistDetail();
}

window.renderArtistPage = renderArtistPage;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderArtistPage);
} else {
    renderArtistPage();
}
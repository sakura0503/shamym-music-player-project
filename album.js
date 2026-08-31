function getAlbumSongs(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (!album) return [];
    return album.songs.map(sid => getSongById(sid)).filter(Boolean);
}

function getTotalDuration(songs) {
    let totalSeconds = 0;
    songs.forEach(song => {
        const parts = song.duration.split(':');
        if (parts.length === 2) {
            totalSeconds += parseInt(parts[0]) * 60 + parseInt(parts[1]);
        } else if (parts.length === 3) {
            totalSeconds += parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
        }
    });
    const hours = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    let result = '';
    if (hours > 0) {
        result += `${hours} hr `;
    }
    if (mins > 0) {
        result += `${mins} min${mins > 1 ? 's' : ''} `;
    }
    if (secs > 0 || (hours === 0 && mins === 0)) {
        result += `${secs} sec${secs > 1 ? 's' : ''}`;
    }
    return result.trim();
}

function renderAlbumDetail() {
    const albumId = window.albumPageId || 1;
    const album = albums.find(a => a.id === albumId);
    if (!album) return;

    const albumSongs = getAlbumSongs(albumId);
    const container = document.getElementById('albumDetail');
    const totalDuration = getTotalDuration(albumSongs);
    const artistObj = artists.find(a => a.name === album.artist);
    const artistPage = artistObj ? artistPages[artistObj.id] : null;
    const albumImage = album.image || 'AfterHours-Album.webp';

    let html = `
        <div class="album-header">
            <div class="album-header-img">
                <img src="${albumImage}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
            </div>
            <div class="album-header-info">
                <div class="album-header-title">${album.title} <span class="album-badge">${album.type === 'ep' ? 'EP' : 'Album'}</span></div>
                <div class="album-header-meta">
                    <span class="${artistPage ? 'clickable-artist' : ''}" ${artistPage ? `onclick="navigateTo('${artistPage}')"` : ''}>${album.artist}</span>
                    <span>&bull;</span>
                    <span>${album.year}</span>
                </div>
                <div class="album-header-desc">${albumSongs.length} songs &bull; ${totalDuration}</div>
                <div class="album-header-actions">
                    <button class="album-action-btn" onclick="toggleAlbumLike(${albumId})">
                        ${likedAlbums && likedAlbums.includes(albumId) 
                            ? `<svg viewBox="0 0 24 24" fill="#1a5c30" style="color:#1a5c30"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
                            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
                        }
                    </button>
                    <button class="album-action-btn album-play-btn" onclick="playAlbum(${albumId})">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button class="album-action-btn album-shuffle-btn" onclick="shuffleAlbum(${albumId})">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="album-songs-header">
            <div class="album-song-num">#</div>
            <div class="album-song-title">Title</div>
            <div class="album-song-duration">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>
        </div>
        <div class="album-songs">
    `;

    albumSongs.forEach((song, index) => {
        const isPlaying = song.id === currentPlayingSongId;
        const clickable = true;
        const liked = isLiked(song.id);
        const isExplicit = albumId === 1 ? ![8, 9, 10, 12].includes(index) : false;
        html += `
            <div class="album-song-row ${isPlaying ? 'playing' : ''}" data-song-id="${song.id}" ${clickable ? `onclick="albumPlaySong(${song.id})"` : ''}>
                <div class="album-song-num">
                    ${isPlaying ? '<svg class="playing-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : index + 1}
                </div>
                <div class="album-song-title">
                    <span class="title-text">${song.title}</span>
                    ${isExplicit ? '<span class="explicit-badge">E</span>' : ''}
                    <span class="song-artist">• ${song.artist}</span>
                </div>
                <div class="album-song-duration">
                    <span class="like-icon ${liked ? 'liked' : ''}" onclick="toggleSongLike(${song.id}, event)">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? 'var(--accent)' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </span>
                    <span class="duration-text">${song.duration}</span>
                    <span class="song-menu" onclick="event.stopPropagation(); showCardContextMenu(this, 'song', ${song.id});">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </span>
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function albumPlaySong(songId) {
    currentPlayingSongId = songId;
    const albumId = window.albumPageId || 1;
    currentPlaylist = 'album:' + albumId;
    const list = getAlbumSongs(albumId);
    currentQueue = list.map(s => s.id);
    currentSongIndex = currentQueue.indexOf(songId);

    const song = getSongById(songId);
    if (!song) return;

    loadSong(song);
    playAudio();
}

window.albumPlaySong = albumPlaySong;

function shuffleAlbum(albumId) {
    const albumSongs = getAlbumSongs(albumId);
    if (!albumSongs.length) return;
    
    currentPlaylist = 'album:' + albumId;
    currentQueue = albumSongs.map(s => s.id);
    originalQueue = currentQueue.slice();
    currentQueue = shuffleArray(currentQueue);
    currentSongIndex = 0;
    
    const song = albumSongs.find(s => s.id === currentQueue[0]);
    if (!song) return;
    
    currentPlayingSongId = song.id;
    loadSong(song);
    playAudio();
    
    shuffle = true;
    updateShuffleUI();
    renderQueuePanel();
    saveAudioState();
}

window.shuffleAlbum = shuffleAlbum;

function setFooterHeartIcon() {
    const likeBtnEl = document.getElementById('likeBtn');
    if (!likeBtnEl) return;
    likeBtnEl.innerHTML = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>';
}

function updateAlbumLikeButton(songId) {
    const likeBtnEl = document.getElementById('likeBtn');
    if (!likeBtnEl) return;
    const svg = likeBtnEl.querySelector('svg');
    if (!svg) return;
    const liked = !!(songId && isLiked(songId));
    svg.setAttribute('fill', liked ? 'var(--accent)' : 'none');
    svg.setAttribute('stroke', liked ? 'var(--accent)' : 'currentColor');
    likeBtnEl.style.color = liked ? 'var(--accent)' : 'var(--text-secondary)';
}

function toggleSongLike(songId, event) {
    if (event) event.stopPropagation();
    if (isLiked(songId)) {
        likedSongs = likedSongs.filter(id => id !== songId);
    } else {
        likedSongs.push(songId);
    }
    if (typeof saveState === 'function') saveState();
    if (songId === currentPlayingSongId) updateAlbumLikeButton(songId);
    renderAlbumDetail();
}

window.toggleSongLike = toggleSongLike;

const footerLikeBtn = document.getElementById('likeBtn');
if (footerLikeBtn) {
    footerLikeBtn.addEventListener('click', () => {
        if (currentPlayingSongId) {
            if (isLiked(currentPlayingSongId)) {
                likedSongs = likedSongs.filter(id => id !== currentPlayingSongId);
            } else {
                likedSongs.push(currentPlayingSongId);
            }
            if (typeof saveState === 'function') saveState();
            updateAlbumLikeButton(currentPlayingSongId);
            renderAlbumDetail();
        }
    });
}

const footerPlayPauseBtn = document.getElementById('playPauseBtn');
if (footerPlayPauseBtn) {
    footerPlayPauseBtn.addEventListener('click', () => {
        updateAlbumLikeButton(currentPlayingSongId);
    });
}

function renderAlbumPage() {
    setFooterHeartIcon();
    updateAlbumLikeButton(currentPlayingSongId);
    renderAlbumDetail();
    
    const footerLikeBtn = document.getElementById('likeBtn');
    if (footerLikeBtn) {
        footerLikeBtn.addEventListener('click', () => {
            if (currentPlayingSongId) {
                if (isLiked(currentPlayingSongId)) {
                    likedSongs = likedSongs.filter(id => id !== currentPlayingSongId);
                } else {
                    likedSongs.push(currentPlayingSongId);
                }
                if (typeof saveState === 'function') saveState();
                updateAlbumLikeButton(currentPlayingSongId);
                renderAlbumDetail();
            }
        });
    }
}

window.renderAlbumPage = renderAlbumPage;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        renderAlbumPage();
    });
} else {
    renderAlbumPage();
}

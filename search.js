function getSearchQuery() {
    const hash = window.location.hash;
    if (hash) {
        const query = new URLSearchParams(hash.split('?')[1]).get('q');
        if (query) return query;
    }
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('q');
}

function showSearchResultsPage(query) {
    const searchResultsPage = document.getElementById('searchResultsPage');
    const searchPageTitle = document.getElementById('searchPageTitle');

    if (!searchResultsPage) {
        console.error('searchResultsPage not found');
        return;
    }

    if (typeof songs === 'undefined' || typeof albums === 'undefined' || typeof artists === 'undefined') {
        searchResultsPage.innerHTML = '<div style="padding: 20px; color: var(--text-muted); text-align: center;">Error: Data not loaded. <a href="main-page.html#/home">Go back</a></div>';
        return;
    }

    const matchedSongs = songs.filter(s => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query));
    const seen = new Set();
    const uniqueSongs = matchedSongs.filter(s => {
        const key = s.title.toLowerCase() + '|' + s.artist.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
    });
    const matchedAlbums = albums.filter(a => a.title.toLowerCase().includes(query) || a.artist.toLowerCase().includes(query));
    const matchedArtists = artists.filter(a => a.name.toLowerCase().includes(query));

    function renderSongs() {
        if (!uniqueSongs.length) return '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No songs found</div>';
        return uniqueSongs.map(song => {
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            return `
                <div class="search-result-page-item" onclick="playSong(${song.id});">
                    <div class="search-result-page-img">${coverHtml}</div>
                    <div class="search-result-page-info">
                        <div class="search-result-page-name">${song.title}</div>
                        <div class="search-result-page-sub">${song.artist}</div>
                    </div>
                    <span class="search-result-page-type">Song</span>
                    <button class="card-menu-btn" data-type="song" data-id="${song.id}" onclick="event.stopPropagation(); showCardContextMenu(this, 'song', ${song.id});">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </button>
                </div>
            `;
        }).join('');
    }

    function renderAlbums() {
        if (!matchedAlbums.length) return '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No albums found</div>';
        return matchedAlbums.map(album => {
            const albumPage = albumPages[album.id];
            let action = '';
            if (albumPage) {
                action = `navigateTo('${albumPage}')`;
            } else if (typeof album.id === 'number') {
                action = `playAlbum(${album.id})`;
            } else {
                action = '';
            }
            const coverHtml = album.image
                ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
            const typeLabel = album.type === 'ep' ? 'EP' : (album.type === 'single' ? 'Single' : 'Album');
            return `
                <div class="search-result-page-item" onclick="${action};">
                    <div class="search-result-page-img">${coverHtml}</div>
                    <div class="search-result-page-info">
                        <div class="search-result-page-name">${album.title}</div>
                        <div class="search-result-page-sub">${album.artist}</div>
                    </div>
                    <span class="search-result-page-type">${typeLabel}</span>
                    <button class="card-menu-btn" data-type="album" data-id="${album.id}" onclick="event.stopPropagation(); showCardContextMenu(this, 'album', ${album.id});">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </button>
                </div>
            `;
        }).join('');
    }

    function renderArtists() {
        if (!matchedArtists.length) return '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No artists found</div>';
        return matchedArtists.map(artist => {
            const artistPage = artistPages[artist.id];
            const action = artistPage ? `navigateTo('${artistPage}')` : `alert('Artist page coming soon!')`;
            const imgContent = artist.image
                ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;">`
                : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2);
            return `
                <div class="search-result-page-item" onclick="${action};">
                    <div class="search-result-page-img" style="background: linear-gradient(135deg, ${artist.color}, #555); border-radius: 50%; overflow: hidden;">${imgContent}</div>
                    <div class="search-result-page-info">
                        <div class="search-result-page-name">${artist.name}</div>
                        <div class="search-result-page-sub">${artist.type}</div>
                    </div>
                    <span class="search-result-page-type">Artist</span>
                </div>
            `;
        }).join('');
    }

    if (searchPageTitle) {
        searchPageTitle.textContent = `Search Results for "${query}"`;
    }

    const songsHtml = renderSongs();
    const albumsHtml = renderAlbums();
    const artistsHtml = renderArtists();

    const panels = {
        songs: songsHtml || '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No results found</div>',
        albums: albumsHtml || '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No results found</div>',
        artists: artistsHtml || '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No results found</div>'
    };

    const panelKeys = ['songs', 'albums', 'artists'];
    let currentTab = 'songs';

    function showPanel(tab) {
        const html = panelKeys.map(key => `
            <div class="search-results-panel" data-panel="${key}" style="display: ${key === tab ? 'block' : 'none'};">${panels[key]}</div>
        `).join('');
        searchResultsPage.innerHTML = html;

        document.querySelectorAll('.search-tab').forEach(t => t.classList.remove('active'));
        const activeTab = document.querySelector(`.search-tab[data-tab="${tab}"]`);
        if (activeTab) activeTab.classList.add('active');
        currentTab = tab;
    }

    document.querySelectorAll('.search-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            showPanel(tab.dataset.tab);
        });
    });

    showPanel('songs');
    
    if (typeof addLongPressListeners === 'function') {
        addLongPressListeners();
    }
}

function renderSearchPage() {
    const query = getSearchQuery();
    if (query) {
        showSearchResultsPage(query.toLowerCase().trim());
    }
    if (searchInput) {
        searchInput.value = query || '';
    }
}

window.renderSearchPage = renderSearchPage;

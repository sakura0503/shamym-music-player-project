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
    { id: 38, title: "bad", artist: "wave to earth", album: "0.1 flaws and all.", duration: "4:23", cover: null, color: "#7eb8da" },
    { id: 39, title: "love.", artist: "wave to earth", album: "0.1 flaws and all.", duration: "5:07", cover: null, color: "#7eb8da" },
    { id: 40, title: "seasons", artist: "wave to earth", album: "summer flows 0.02", duration: "4:15", cover: null, color: "#7eb8da" },
    { id: 41, title: "light", artist: "wave to earth", album: "wave 0.01", duration: "3:45", cover: null, color: "#7eb8da" },
    { id: 42, title: "peach eyes", artist: "wave to earth", album: "0.1 flaws and all.", duration: "3:05", cover: null, color: "#7eb8da" },
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
    { id: 65, title: "Callaíta", artist: "Bad Bunny, Tainy", album: "Un Verano Sin Ti", duration: "4:10", cover: null, color: "#ff6b6b" },
    { id: 66, title: "Runway Groove", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:30", cover: null, color: "#d4a574" },
    { id: 67, title: "Midnight in Montmartre", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:24", cover: null, color: "#d4a574" },
    { id: 68, title: "Central Park", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:03", cover: null, color: "#d4a574" },
    { id: 69, title: "Final Applause", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:04", cover: null, color: "#d4a574" },
    { id: 70, title: "Drive Till Dawn", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:33", cover: null, color: "#d4a574" },
    { id: 71, title: "Soundcheck", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:40", cover: null, color: "#d4a574" },
    { id: 72, title: "Frosted Lights", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:29", cover: null, color: "#d4a574" },
    { id: 73, title: "Morning Blend", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:57", cover: null, color: "#d4a574" },
    { id: 74, title: "Park Tempo", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:22", cover: null, color: "#d4a574" },
    { id: 75, title: "Sunlight Cream", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:38", cover: null, color: "#d4a574" },
    { id: 76, title: "Open Sky", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:02", cover: null, color: "#d4a574" },
    { id: 77, title: "Streetlight Serenade", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:59", cover: null, color: "#d4a574" },
    { id: 78, title: "Sidewalk Rhythm", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:09", cover: null, color: "#d4a574" },
    { id: 79, title: "Midnight Stage", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:11", cover: null, color: "#d4a574" },
    { id: 80, title: "Runway Groove (R)", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:26", cover: null, color: "#d4a574" },
    { id: 81, title: "Next City", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:55", cover: null, color: "#d4a574" },
    { id: 82, title: "Brownstone Tempo", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:27", cover: null, color: "#d4a574" },
    { id: 83, title: "Frosted Lights (R)", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:25", cover: null, color: "#d4a574" },
    { id: 84, title: "Velvet Evenings", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:29", cover: null, color: "#d4a574" },
    { id: 85, title: "Wine & Echoes", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:19", cover: null, color: "#d4a574" },
    { id: 86, title: "The Hills", artist: "The Weeknd", album: "Beauty Behind the Madness", duration: "4:02", cover: null, color: "#ff0055" },
    { id: 87, title: "Can't Feel My Face", artist: "The Weeknd", album: "Beauty Behind the Madness", duration: "3:34", cover: null, color: "#ff0055" },
    { id: 88, title: "Earned It", artist: "The Weeknd", album: "Fifty Shades of Grey", duration: "4:10", cover: null, color: "#ff0055" },
    { id: 89, title: "Often", artist: "The Weeknd", album: "Beauty Behind the Madness", duration: "4:00", cover: null, color: "#ff0055" },
    { id: 90, title: "Starboy", artist: "The Weeknd", album: "Starboy", duration: "3:50", cover: null, color: "#ff0055" },
    { id: 91, title: "I Feel It Coming", artist: "The Weeknd", album: "Starboy", duration: "4:29", cover: null, color: "#ff0055" },
    { id: 92, title: "Party Monster", artist: "The Weeknd", album: "Starboy", duration: "4:09", cover: null, color: "#ff0055" },
    { id: 93, title: "Reminder", artist: "The Weeknd", album: "Starboy", duration: "3:38", cover: null, color: "#ff0055" },
    { id: 94, title: "Die For You", artist: "The Weeknd", album: "Starboy", duration: "4:20", cover: null, color: "#ff0055" },
    { id: 95, title: "Call Out My Name", artist: "The Weeknd", album: "My Dear Melancholy", duration: "3:48", cover: null, color: "#ff0055" },
    { id: 96, title: "sunny days", artist: "wave to earth", album: "0.1 flaws and all.", duration: "4:08", cover: null, color: "#7eb8da" },
    { id: 97, title: "homesick", artist: "wave to earth", album: "0.1 flaws and all.", duration: "5:06", cover: null, color: "#7eb8da" },
    { id: 98, title: "daisy.", artist: "wave to earth", album: "daisy.", duration: "3:38", cover: null, color: "#7eb8da" },
    { id: 99, title: "surf.", artist: "wave to earth", album: "summer flows 0.02", duration: "3:49", cover: null, color: "#7eb8da" },
    { id: 100, title: "slow dive", artist: "wave to earth", album: "0.1 flaws and all.", duration: "4:40", cover: null, color: "#7eb8da" },
    { id: 101, title: "holyland", artist: "wave to earth", album: "0.1 flaws and all.", duration: "4:16", cover: null, color: "#7eb8da" },
    { id: 102, title: "beck.", artist: "wave to earth", album: "play with earth! 0.03", duration: "4:08", cover: null, color: "#7eb8da" },
    { id: 103, title: "annie.", artist: "wave to earth", album: "play with earth! 0.03", duration: "3:50", cover: null, color: "#7eb8da" },
    { id: 104, title: "summer flows", artist: "wave to earth", album: "summer flows 0.02", duration: "0:37", cover: null, color: "#7eb8da" },
    { id: 105, title: "play with earth!", artist: "wave to earth", album: "play with earth! 0.03", duration: "3:48", cover: null, color: "#7eb8da" },
    { id: 106, title: "ocean floor", artist: "wave to earth", album: "summer flows 0.02", duration: "4:01", cover: null, color: "#7eb8da" },
    { id: 160, title: "heaven and hell", artist: "wave to earth", album: "heaven and hell", duration: "3:30", cover: null, color: "#7eb8da" },
    { id: 161, title: "dried flower", artist: "wave to earth", album: "dried flower", duration: "3:40", cover: null, color: "#7eb8da" },
    { id: 162, title: "calla", artist: "wave to earth", album: "calla", duration: "3:55", cover: null, color: "#7eb8da" },
    { id: 163, title: "nouvelle vague", artist: "wave to earth", album: "nouvelle vague", duration: "4:10", cover: null, color: "#7eb8da" },
    { id: 164, title: "pueblo", artist: "wave to earth", album: "pueblo", duration: "3:45", cover: null, color: "#7eb8da" },
    { id: 165, title: "wave", artist: "wave to earth", album: "wave 0.01", duration: "4:30", cover: null, color: "#7eb8da" },
    { id: 166, title: "ride", artist: "wave to earth", album: "summer flows 0.02", duration: "3:48", cover: null, color: "#7eb8da" },
    { id: 120, title: "Open Sky", artist: "BrownHouse", album: "BrownHouse", duration: "3:02", cover: null, color: "#d4a574" },
    { id: 121, title: "Streetlight Serenade", artist: "BrownHouse", album: "Midnight Jazz", duration: "2:59", cover: null, color: "#d4a574" },
    { id: 122, title: "Sidewalk Rhythm", artist: "BrownHouse", album: "Midnight Jazz", duration: "3:09", cover: null, color: "#d4a574" },
    { id: 123, title: "Midnight Stage", artist: "BrownHouse", album: "Midnight Jazz", duration: "3:11", cover: null, color: "#d4a574" },
    { id: 124, title: "Velvet Evenings", artist: "BrownHouse", album: "Sunset Grooves", duration: "2:29", cover: null, color: "#d4a574" },
    { id: 125, title: "Wine & Echoes", artist: "BrownHouse", album: "Sunset Grooves", duration: "3:19", cover: null, color: "#d4a574" },
    { id: 126, title: "Coffee Shop Vibes", artist: "BrownHouse", album: "Sunset Grooves", duration: "3:05", cover: null, color: "#d4a574" },
    { id: 127, title: "Moscow Mule", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "4:05", cover: null, color: "#ff6b6b" },
    { id: 128, title: "Después de la Playa", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "3:50", cover: null, color: "#ff6b6b" },
    { id: 129, title: "Me Porto Bonito", artist: "Bad Bunny", album: "Un Verano Sin Ti", duration: "2:58", cover: null, color: "#ff6b6b" },
    { id: 130, title: "Tití Me Preguntó", artist: "Bad Bunny", album: "YHLQMDLG", duration: "4:03", cover: null, color: "#ff6b6b" },
    { id: 131, title: "Dákiti", artist: "Bad Bunny", album: "YHLQMDLG", duration: "3:25", cover: null, color: "#ff6b6b" },
    { id: 132, title: "Bichiyal", artist: "Bad Bunny", album: "YHLQMDLG", duration: "3:42", cover: null, color: "#ff6b6b" },
    { id: 133, title: "Yo Perreo Sola", artist: "Bad Bunny", album: "El Último Tour Del Mundo", duration: "3:00", cover: null, color: "#ff6b6b" },
    { id: 134, title: "Diles", artist: "Bad Bunny", album: "El Último Tour Del Mundo", duration: "3:15", cover: null, color: "#ff6b6b" },
    { id: 135, title: "La Noche de Anoche", artist: "Bad Bunny", album: "El Último Tour Del Mundo", duration: "3:28", cover: null, color: "#ff6b6b" },
    { id: 136, title: "Si Veo a Tu Mamá", artist: "Bad Bunny", album: "X 100PRE", duration: "3:10", cover: null, color: "#ff6b6b" },
    { id: 137, title: "La Romana", artist: "Bad Bunny", album: "X 100PRE", duration: "3:35", cover: null, color: "#ff6b6b" },
    { id: 138, title: "Caro", artist: "Bad Bunny", album: "X 100PRE", duration: "3:48", cover: null, color: "#ff6b6b" },
    { id: 139, title: "Mía", artist: "Bad Bunny", album: "X 100PRE", duration: "3:30", cover: null, color: "#ff6b6b" },
    { id: 140, title: "Nadie Sabe", artist: "Bad Bunny", album: "Nadie Sabe Lo Que Va a Pasar Mañana", duration: "3:55", cover: null, color: "#ff6b6b" },
    { id: 141, title: "Moscow Mule (Remix)", artist: "Bad Bunny", album: "Nadie Sabe Lo Que Va a Pasar Mañana", duration: "4:10", cover: null, color: "#ff6b6b" },
    { id: 142, title: "Un Verano Sin Ti (Remix)", artist: "Bad Bunny", album: "Nadie Sabe Lo Que Va a Pasar Mañana", duration: "3:50", cover: null, color: "#ff6b6b" },
    { id: 143, title: "Debí Tirar Más Fotos", artist: "Bad Bunny", album: "Debí Tirar Más Fotos", duration: "3:20", cover: null, color: "#ff6b6b" },
    { id: 144, title: "Floating Mist", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "2:53", cover: null, color: "#d4a574" },
    { id: 145, title: "A Dream Within a Dream", artist: "HOYO-MiX", album: "When Lanterns Echo the Moon", duration: "4:08", cover: null, color: "#d4a574" },
    { id: 146, title: "Everlasting Dawn at Night", artist: "HOYO-MiX", album: "Genshin Impact Vol.1", duration: "1:45", cover: null, color: "#d4a574" },
    { id: 147, title: "Lanterns in the Moonlit Twilight", artist: "HOYO-MiX", album: "Genshin Impact Vol.1", duration: "1:29", cover: null, color: "#d4a574" },
    { id: 148, title: "The Hazy Moon", artist: "HOYO-MiX", album: "Genshin Impact Vol.1", duration: "1:56", cover: null, color: "#d4a574" },
    { id: 149, title: "Crescent Gildeth the Dark", artist: "HOYO-MiX", album: "Genshin Impact Vol.2", duration: "3:34", cover: null, color: "#d4a574" },
    { id: 150, title: "The Moon's Mist-Woven Veil", artist: "HOYO-MiX", album: "Genshin Impact Vol.2", duration: "2:10", cover: null, color: "#d4a574" },
    { id: 151, title: "Where Tender Night Embraceth Thee", artist: "HOYO-MiX", album: "Genshin Impact Vol.2", duration: "3:16", cover: null, color: "#d4a574" },
    { id: 152, title: "A Bright, Fresh Year", artist: "HOYO-MiX", album: "Honkai: Star Rail Vol.1", duration: "2:00", cover: null, color: "#d4a574" },
    { id: 153, title: "Stelle's Theme", artist: "HOYO-MiX", album: "Honkai: Star Rail Vol.1", duration: "2:30", cover: null, color: "#d4a574" },
    { id: 154, title: "Trailblaze", artist: "HOYO-MiX", album: "Honkai: Star Rail Vol.1", duration: "3:00", cover: null, color: "#d4a574" },
    { id: 155, title: "Zenless Zone Zero Main Theme", artist: "HOYO-MiX", album: "Zenless Zone Zero Vol.1", duration: "2:45", cover: null, color: "#d4a574" },
    { id: 156, title: "Liyue Harbor", artist: "HOYO-MiX", album: "Liyue Melodies", duration: "2:20", cover: null, color: "#d4a574" },
    { id: 157, title: "Moonlit Wilderness", artist: "HOYO-MiX", album: "Liyue Melodies", duration: "2:50", cover: null, color: "#d4a574" },
    { id: 158, title: "Mondstadt Theme", artist: "HOYO-MiX", album: "Mondstadt Theme", duration: "2:15", cover: null, color: "#d4a574" },
    { id: 159, title: "Genshin Impact Main Theme", artist: "HOYO-MiX", album: "Genshin Impact Main Theme", duration: "2:40", cover: null, color: "#d4a574" }
];

const albums = [
    { id: 1, title: "After Hours", artist: "The Weeknd", year: "2020", color: "#ff0055", explicit: true, image: "AfterHours-Album.webp", songs: [16, 17, 18, 19, 20, 21, 22, 23, 1, 24, 25, 26, 27, 28] },
    { id: 13, title: "Hurry Up Tomorrow", artist: "The Weeknd", year: "2025", color: "#ff0055", explicit: true, songs: [] },
    { id: 14, title: "The Highlights (Deluxe)", artist: "The Weeknd", year: "2025", color: "#ff0055", explicit: true, songs: [] },
    { id: 15, title: "Dawn FM", artist: "The Weeknd", year: "2022", color: "#ff0055", explicit: true, songs: [] },
    { id: 16, title: "Dawn FM (Alternate World)", artist: "The Weeknd", year: "2022", color: "#ff0055", songs: [] },
    { id: 38, title: "Beauty Behind the Madness", artist: "The Weeknd", year: "2015", color: "#ff0055", explicit: true, songs: [86, 87, 89] },
    { id: 39, title: "Starboy", artist: "The Weeknd", year: "2016", color: "#ff0055", explicit: true, songs: [90, 91, 92, 93, 94] },
    { id: 40, title: "My Dear Melancholy", artist: "The Weeknd", year: "2018", color: "#ff0055", explicit: true, type: "ep", songs: [95] },
    { id: 41, title: "Kiss Land", artist: "The Weeknd", year: "2013", color: "#ff0055", explicit: true, songs: [] },
    { id: 2, title: "Divide", artist: "Ed Sheeran", year: "2017", color: "#00aaff", songs: [2] },
    { id: 3, title: "When We All Fall Asleep", artist: "Billie Eilish", year: "2019", color: "#33cc33", songs: [6] },
    { id: 4, title: "21", artist: "Adele", year: "2011", color: "#9933ff", songs: [4, 7] },
    { id: 5, title: "Future Nostalgia", artist: "Dua Lipa", year: "2020", color: "#cc33ff", songs: [10] },
    { id: 6, title: "Harry's House", artist: "Harry Styles", year: "2022", color: "#33ff99", songs: [14] },
    { id: 7, title: "Midnights", artist: "Taylor Swift", year: "2022", color: "#99ccff", songs: [15] },
    { id: 8, title: "Dreamland", artist: "Glass Animals", year: "2020", color: "#ff9900", songs: [13] },
    { id: 9, title: "When Lanterns Echo the Moon", artist: "HOYO-MiX", year: "2026", date: "2026-02-06", color: "#d4a574", image: "WhenLanternsEchoTheMoon-Album.webp", songs: [29, 30, 31, 32, 33, 34, 35, 36, 37] },
    { id: 17, title: "Genshin Impact - The Stellar Moments, Vol. 6", artist: "HOYO-MiX", year: "2026", date: "2026-01-21", color: "#d4a574", songs: [] },
    { id: 18, title: "Honkai: Star Rail - Astral Theater, Vol. 3", artist: "HOYO-MiX", year: "2026", date: "2026-01-25", color: "#d4a574", songs: [] },
    { id: 19, title: "Genshin Impact - Where Roads Are Pledged to Cross", artist: "HOYO-MiX", year: "2026", date: "2026-03-11", color: "#d4a574", songs: [] },
    { id: 20, title: "Honkai: Star Rail - Let There Be Laughter, Part 1", artist: "HOYO-MiX", year: "2026", date: "2026-03-13", color: "#d4a574", songs: [] },
    { id: 21, title: "Zenless Zone Zero: Hyper Commission 2.0", artist: "HOYO-MiX", year: "2026", date: "2026-01-05", color: "#d4a574", songs: [] },
    { id: 22, title: "Genshin Impact - The Stellar Moments, Vol. 5", artist: "HOYO-MiX", year: "2025", date: "2025-01-01", color: "#d4a574", songs: [] },
    { id: 45, title: "Honkai: Star Rail - Allegory of the Cave, Part 3", artist: "HOYO-MiX", year: "2025", date: "2025-11-14", color: "#d4a574", songs: [] },
    { id: 10, title: "summer flows 0.02", artist: "wave to earth", year: "2020", type: "ep", color: "#7eb8da", image: "SummerFlows0.02-Album.webp", songs: [104, 166, 40, 106, 99] },
    { id: 23, title: "0.1 flaws and all.", artist: "wave to earth", year: "2023", type: "album", color: "#7eb8da", songs: [38, 39, 42, 96, 97, 100, 101] },
    { id: 24, title: "play with earth! 0.03", artist: "wave to earth", year: "2024", type: "album", explicit: true, color: "#7eb8da", songs: [102, 103, 105] },
    { id: 25, title: "play with earth! 0.03 (extended)", artist: "wave to earth", year: "2024", type: "album", explicit: true, color: "#7eb8da", songs: [102, 103, 105] },
    { id: 26, title: "bad pieces", artist: "wave to earth", year: "2026", type: "album", color: "#7eb8da", songs: [] },
    { id: 27, title: "daisy.", artist: "wave to earth", year: "2021", type: "single", color: "#7eb8da", songs: [98] },
    { id: 11, title: "Un Verano Sin Ti", artist: "Bad Bunny", year: "2022", date: "2022-05-06", color: "#ff6b6b", explicit: true, image: "UnVeranoSinTi-Album.webp", songs: [43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 127, 128, 129] },
    { id: 28, title: "YHLQMDLG", artist: "Bad Bunny", year: "2020", date: "2020-02-29", color: "#ff6b6b", explicit: true, songs: [130, 131, 132] },
    { id: 29, title: "El Último Tour Del Mundo", artist: "Bad Bunny", year: "2020", date: "2020-11-27", color: "#ff6b6b", explicit: true, songs: [133, 134, 135] },
    { id: 30, title: "X 100PRE", artist: "Bad Bunny", year: "2018", date: "2018-12-24", color: "#ff6b6b", explicit: true, songs: [136, 137, 138, 139] },
    { id: 31, title: "Nadie Sabe Lo Que Va a Pasar Mañana", artist: "Bad Bunny", year: "2023", date: "2023-10-13", color: "#ff6b6b", explicit: true, songs: [140, 141, 142] },
    { id: 32, title: "Debí Tirar Más Fotos", artist: "Bad Bunny", year: "2025", date: "2025-01-05", color: "#ff6b6b", explicit: true, songs: [143] },
    { id: 43, title: "Oasis (with J Balvin)", artist: "Bad Bunny", year: "2019", date: "2019-06-28", color: "#ff6b6b", explicit: true, songs: [] },
    { id: 44, title: "Las Que No Iban A Salir", artist: "Bad Bunny", year: "2020", date: "2020-05-10", color: "#ff6b6b", explicit: true, songs: [] },
    { id: 12, title: "Jazz Hiphop vol.12", artist: "BrownHouse", year: "2025", color: "#d4a574", image: "FinalApplause-Album.jpeg", songs: [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85] },
    { id: 33, title: "Jazz Hiphop vol.11", artist: "BrownHouse", year: "2024", color: "#d4a574", songs: [68, 69, 70] },
    { id: 34, title: "Jazz Hiphop vol.10", artist: "BrownHouse", year: "2023", color: "#d4a574", songs: [71, 72, 73] },
    { id: 35, title: "BrownHouse", artist: "BrownHouse", year: "2022", color: "#d4a574", songs: [74, 75, 76] },
    { id: 36, title: "Midnight Jazz", artist: "BrownHouse", year: "2021", color: "#d4a574", songs: [121, 122, 123] },
    { id: 37, title: "Sunset Grooves", artist: "BrownHouse", year: "2020", color: "#d4a574", songs: [124, 125, 126] }
];

const epInfo = {
    160: { type: 'single', year: '2026' },
    161: { type: 'single', year: '2022' },
    162: { type: 'single', year: '2022' },
    163: { type: 'single', year: '2021' },
    98:  { type: 'single', year: '2021' },
    164: { type: 'single', year: '2020' },
    104: { type: 'ep', year: '2020', title: 'summer flows 0.02', albumId: 10 },
    99:  { type: 'single', year: '2020' },
    165: { type: 'ep', year: '2020' },
    41:  { type: 'single', year: '2019' },
    95:  { type: 'single', year: '2018' },
    1:   { type: 'single', year: '2019' },
    22:  { type: 'single', year: '2019' },
    25:  { type: 'single', year: '2020' },
    24:  { type: 'single', year: '2020' },
    27:  { type: 'single', year: '2020' },
    17:  { type: 'single', year: '2020' },
    18:  { type: 'single', year: '2020' },
    19:  { type: 'single', year: '2020' },
    20:  { type: 'single', year: '2020' }
};

const albumPages = {
    1: 'AfterHours-Album.html',
    9: 'WhenLanternsEchoTheMoon-Album.html',
    10: 'SummerFlows0.02-Album.html',
    11: 'UnVeranoSinTi-Album.html',
    12: 'JazzHiphopVol12-Album.html'
};

const artistPages = {
    1: 'TheWeeknd-Artist.html',
    9: 'waveToEarth-Artist.html',
    10: 'BrownHouse-Artist.html',
    11: 'BadBunny-Artist.html',
    12: 'HOYOMiX-Artist.html'
};

const artists = [
    { id: 1, name: "The Weeknd", type: "Artist", color: "#ff0055", image: "TheWeeknd-Profile.jpg" },
    { id: 2, name: "Ed Sheeran", type: "Artist", color: "#00aaff" },
    { id: 3, name: "Billie Eilish", type: "Artist", color: "#33cc33" },
    { id: 4, name: "Adele", type: "Artist", color: "#9933ff" },
    { id: 5, name: "Dua Lipa", type: "Artist", color: "#cc33ff" },
    { id: 6, name: "Harry Styles", type: "Artist", color: "#33ff99" },
    { id: 7, name: "Taylor Swift", type: "Artist", color: "#99ccff" },
    { id: 8, name: "The Chainsmokers", type: "Artist", color: "#3366ff" },
    { id: 9, name: "wave to earth", type: "Artist", color: "#7eb8da", image: "WaveToEarth-Profile.jpg" },
    { id: 10, name: "BrownHouse", type: "Artist", color: "#d4a574" },
    { id: 11, name: "Bad Bunny", type: "Artist", color: "#ff6b6b", image: "BadBunny-Icon.jpg" },
    { id: 12, name: "HOYO-MiX", type: "Artist", color: "#d4a574", image: "HOYOMIX-Profile.jpg" }
];

let recentlyPlayed = JSON.parse(localStorage.getItem('recentlyPlayed')) || [];
if (!recentlyPlayed.length) {
    recentlyPlayed = [1, 2, 3, 4, 5];
}
let likedSongs = JSON.parse(localStorage.getItem('likedSongs')) || [];
let likedSongsTimestamps = JSON.parse(localStorage.getItem('likedSongsTimestamps')) || {};
let likedAlbums = JSON.parse(localStorage.getItem('likedAlbums')) || [];
let userPlaylists = JSON.parse(localStorage.getItem('userPlaylists')) || [];

if (likedSongs.length && !Object.keys(likedSongsTimestamps).length) {
    const now = Date.now();
    likedSongs.forEach((id, index) => {
        likedSongsTimestamps[id] = now - (likedSongs.length - 1 - index) * 60000;
    });
}
let currentPlaylist = null;
let currentSongIndex = -1;
let currentPlayingSongId = null;
let isPlaying = false;
let shuffle = false;
let repeat = 0;
let audio = null;
let currentAudioFile = null;
let currentQueue = [];
let originalQueue = [];
let currentSong = null;
let onSongChange = null;

const pages = {};
const homePage = document.getElementById('homePage');
const libraryPage = document.getElementById('libraryPage');
const playlistPage = document.getElementById('playlistPage');
const likedMusicPage = document.getElementById('likedMusicPage');
const likedAlbumsPage = document.getElementById('likedAlbumsPage');
const discoverPage = document.getElementById('discoverPage');
const albumPage = document.getElementById('albumPage');
const artistPage = document.getElementById('artistPage');
const searchPage = document.getElementById('searchPage');
const contentArea = document.getElementById('contentArea');
if (homePage) pages.home = homePage;
if (libraryPage) pages.library = libraryPage;
if (playlistPage) pages.playlist = playlistPage;
if (likedMusicPage) pages.likedMusic = likedMusicPage;
if (likedAlbumsPage) pages.likedAlbums = likedAlbumsPage;
if (discoverPage) pages.discover = discoverPage;
if (albumPage) pages.album = albumPage;
if (artistPage) pages.artist = artistPage;
if (searchPage) pages.search = searchPage;

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
const mobilePlayPauseBtn = document.getElementById('mobilePlayPauseBtn');

function saveState() {
    localStorage.setItem('recentlyPlayed', JSON.stringify(recentlyPlayed));
    localStorage.setItem('likedSongs', JSON.stringify(likedSongs));
    localStorage.setItem('likedSongsTimestamps', JSON.stringify(likedSongsTimestamps));
    localStorage.setItem('likedAlbums', JSON.stringify(likedAlbums));
    localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
}

function saveAudioState() {
    const state = {
        currentSongId: currentSong ? currentSong.id : null,
        currentPlaylist,
        currentQueue,
        currentSongIndex,
        isPlaying,
        shuffle,
        repeat,
        currentTime: audio ? audio.currentTime : (silentPlayback.isActive ? silentPlayback.offset + (Date.now() - silentPlayback.startTime) / 1000 : 0),
        silentMode: !audio && silentPlayback.isActive
    };
    localStorage.setItem('audioState', JSON.stringify(state));
}

function isAlbumMode() {
    return currentPlaylist && currentPlaylist.startsWith('album:');
}

function getDurationSeconds(duration) {
    const parts = duration.split(':');
    if (parts.length === 2) return parseInt(parts[0]) * 60 + parseInt(parts[1]);
    if (parts.length === 3) return parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    return 0;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return m + ':' + s.toString().padStart(2, '0');
}

const silentPlayback = {
    timer: null,
    startTime: 0,
    offset: 0,
    isActive: false
};

function startSilentPlayback() {
    stopSilentPlayback();
    silentPlayback.startTime = Date.now();
    silentPlayback.offset = 0;
    silentPlayback.isActive = true;
    silentPlayback.timer = setInterval(() => {
        if (!isPlaying || !currentSong || !silentPlayback.isActive) return;
        const totalSeconds = getDurationSeconds(currentSong.duration);
        const elapsed = silentPlayback.offset + (Date.now() - silentPlayback.startTime) / 1000;
        
        if (elapsed >= totalSeconds) {
            stopSilentPlayback();
            if (repeat === 1) {
                startSilentPlayback();
                if (progressFill) progressFill.style.width = '0%';
                if (currentTimeEl) currentTimeEl.textContent = '0:00';
            } else if (isAlbumMode()) {
                const list = getCurrentPlaylistSongs();
                if (repeat === 2) {
                    playNext();
                } else if (list.length > 0 && currentSongIndex === list.length - 1) {
                    pauseAudio();
                    currentTimeEl.textContent = '0:00';
                    progressFill.style.width = '0%';
                    saveAudioState();
                } else {
                    playNext();
                }
            } else {
                pauseAudio();
                currentTimeEl.textContent = '0:00';
                progressFill.style.width = '0%';
                saveAudioState();
            }
            return;
        }
        
        if (progressFill) progressFill.style.width = ((elapsed / totalSeconds) * 100) + '%';
        if (currentTimeEl) currentTimeEl.textContent = formatTime(elapsed);
        
        const now = Date.now();
        if (now - lastSaveTime > 2000) {
            lastSaveTime = now;
            saveAudioState();
        }
    }, 200);
}

function pauseSilentPlayback() {
    if (silentPlayback.timer) {
        clearInterval(silentPlayback.timer);
        silentPlayback.timer = null;
    }
    if (silentPlayback.isActive) {
        silentPlayback.offset += (Date.now() - silentPlayback.startTime) / 1000;
    }
}

function stopSilentPlayback() {
    if (silentPlayback.timer) {
        clearInterval(silentPlayback.timer);
        silentPlayback.timer = null;
    }
    silentPlayback.startTime = 0;
    silentPlayback.offset = 0;
    silentPlayback.isActive = false;
}

function seekSilentPlayback(seconds) {
    if (!currentSong) return;
    const totalSeconds = getDurationSeconds(currentSong.duration);
    silentPlayback.offset = Math.max(0, Math.min(seconds, totalSeconds));
    silentPlayback.startTime = Date.now();
    
    if (progressFill) progressFill.style.width = ((silentPlayback.offset / totalSeconds) * 100) + '%';
    if (currentTimeEl) currentTimeEl.textContent = formatTime(silentPlayback.offset);
}

function restoreAudioState() {
    const saved = localStorage.getItem('audioState');
    if (!saved) return;
    try {
        const state = JSON.parse(saved);
        currentPlaylist = state.currentPlaylist;
        currentQueue = state.currentQueue || [];
        currentSongIndex = state.currentSongIndex || -1;
        shuffle = state.shuffle || false;
        repeat = state.repeat || 0;
        isPlaying = state.isPlaying || false;
        
        if (state.currentSongId) {
            const song = getSongById(state.currentSongId);
            if (song) {
                currentSong = song;
                playerTrackName.textContent = song.title;
                playerTrackArtist.textContent = song.artist;
                
                const cover = getAlbumCoverForSong(song);
                if (cover) {
                    playerImg.src = cover;
                    playerImg.style.display = 'block';
                    playerImg.style.background = 'none';
                    playerImg.textContent = '';
                } else {
                    playerImg.removeAttribute('src');
                    playerImg.style.display = 'flex';
                    playerImg.style.background = `linear-gradient(135deg, ${song.color}, #333)`;
                    playerImg.style.alignItems = 'center';
                    playerImg.style.justifyContent = 'center';
                    playerImg.style.color = '#fff';
                    playerImg.textContent = song.title.substring(0, 2).toUpperCase();
                }
                
                totalTimeEl.textContent = song.duration;
                updateLikeButton();
                updatePlayerControlsState();
                updateRepeatUI();
                updateShuffleUI();
                
                if (isPlaying && state.currentTime) {
                    const musicFiles = {
                        1: 'BlindingLights-Song.mp3',
                        31: 'EverlastingDawnAtNight-Song.mp3',
                        99: 'Surf-Song.mp3',
                        59: 'OtroAtardecer-Song.mp3',
                        69: 'FinalApplause-Song.mp3'
                    };
                    if (musicFiles[song.id]) {
                        audio = new Audio(musicFiles[song.id]);
                        audio.currentTime = state.currentTime;
                        audio.addEventListener('timeupdate', updateProgress);
                        audio.addEventListener('ended', () => {
                            stopSilentPlayback();
                            if (repeat === 1) {
                                audio.currentTime = 0;
                                audio.play().catch(() => {});
                            } else if (isAlbumMode()) {
                                const list = getCurrentPlaylistSongs();
                                if (repeat === 2) {
                                    playNext();
                                } else if (list.length > 0 && currentSongIndex === list.length - 1) {
                                    currentSongIndex = 0;
                                    loadSong(list[0]);
                                    pauseAudio();
                                    currentTimeEl.textContent = '0:00';
                                    progressFill.style.width = '0%';
                                    saveAudioState();
                                } else {
                                    playNext();
                                }
                            } else {
                                pauseAudio();
                                currentTimeEl.textContent = '0:00';
                                progressFill.style.width = '0%';
                                saveAudioState();
                            }
                        });
                        audio.play().catch(() => {});
                        playPauseBtn.querySelector('.play-icon').style.display = 'none';
                        playPauseBtn.querySelector('.pause-icon').style.display = 'block';
                    } else if (state.silentMode) {
                        startSilentPlayback();
                        seekSilentPlayback(state.currentTime);
                        playPauseBtn.querySelector('.play-icon').style.display = 'none';
                        playPauseBtn.querySelector('.pause-icon').style.display = 'block';
                    }
                }
            }
        }
    } catch (e) {
        localStorage.removeItem('audioState');
    }
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
        delete likedSongsTimestamps[songId];
    } else {
        likedSongs.push(songId);
        likedSongsTimestamps[songId] = Date.now();
    }
    saveState();
    renderLibraryPage();
    if (currentPlaylist === 'liked') {
        renderPlaylistDetail('liked');
        const likedMusicPageEl = document.getElementById('likedMusicPage');
        if (likedMusicPageEl && likedMusicPageEl.classList.contains('active')) {
            renderLikedMusicPage();
        }
    }
}

function toggleAlbumLike(albumId) {
    const index = likedAlbums.indexOf(albumId);
    if (index > -1) {
        likedAlbums.splice(index, 1);
    } else {
        likedAlbums.unshift(albumId);
    }
    localStorage.setItem('likedAlbums', JSON.stringify(likedAlbums));
    if (typeof renderAlbumDetail === 'function') renderAlbumDetail();
    if (typeof renderLikedAlbumsPage === 'function') renderLikedAlbumsPage();
    if (typeof renderLibrary === 'function') renderLibrary();
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
    if (playlistName === 'liked') {
        return likedSongs
            .map(id => getSongById(id))
            .filter(Boolean)
            .sort((a, b) => (likedSongsTimestamps[b.id] || 0) - (likedSongsTimestamps[a.id] || 0));
    }
    const pl = userPlaylists.find(p => p.name === playlistName);
    if (!pl) return [];
    return pl.songs.map(id => getSongById(id)).filter(Boolean);
}

function getAlbumCoverForSong(song) {
    const album = albums.find(a => a.title === song.album && a.image);
    if (album) return album.image;
    return null;
}

function addLongPress(element, callback, duration = 500) {
    let timer;
    const start = (e) => {
        if (e.type === 'touchstart') {
            if (e.touches.length > 1) return;
        }
        timer = setTimeout(() => {
            callback(e);
        }, duration);
    };
    const cancel = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
    };
    element.addEventListener('touchstart', start, { passive: true });
    element.addEventListener('touchend', cancel);
    element.addEventListener('touchmove', cancel);
    element.addEventListener('touchcancel', cancel);
    element.addEventListener('mousedown', start);
    element.addEventListener('mouseup', cancel);
    element.addEventListener('mouseleave', cancel);
}

function isMobile() {
    return window.innerWidth <= 780;
}

function renderCard(song, showPlayBtn = true, queueIds = null) {
    const div = document.createElement('div');
    div.className = 'card-wrapper';
    div.dataset.songId = song.id;
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
            <button class="card-menu-btn" data-type="song" data-id="${song.id}" onclick="event.stopPropagation();">
                <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
            </button>
        </div>
    `;
    const menuBtn = div.querySelector('.card-menu-btn');
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showCardContextMenu(menuBtn, 'song', song.id);
    });
    if (isMobile()) {
        addLongPress(div, () => {
            menuBtn.classList.add('visible');
            showCardContextMenu(menuBtn, 'song', song.id);
        });
        div.addEventListener('click', (e) => {
            if (!e.target.closest('.card-menu-btn')) {
                menuBtn.classList.remove('visible');
            }
        });
    }
    div.addEventListener('click', () => playSong(song.id, null, queueIds));
    return div;
}

function renderArtistCard(artist) {
    const div = document.createElement('div');
    const artistPage = artistPages[artist.id];
    div.className = 'card artist-card' + (artistPage ? ' clickable' : '');
    div.innerHTML = `
        <div class="artist-img" style="background: linear-gradient(135deg, ${artist.color}, #555);">
            ${artist.image ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
        </div>
        <div class="artist-name">${artist.name}</div>
        <div class="artist-type">${artist.type}</div>
    `;
    if (artistPage) div.addEventListener('click', () => { navigateTo(artistPage); });
    return div;
}

function renderHorizontalSongs(containerId, songIds) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    songIds.forEach(id => {
        const song = getSongById(id);
        if (song) container.appendChild(renderCard(song, true, null));
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
            div.dataset.albumId = album.id;
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
                    <button class="card-menu-btn" data-type="album" data-id="${album.id}" onclick="event.stopPropagation();">
                        <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </button>
                </div>
            `;
            const menuBtn = div.querySelector('.card-menu-btn');
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                showCardContextMenu(menuBtn, 'album', album.id);
            });
            if (isMobile()) {
                addLongPress(div, () => {
                    menuBtn.classList.add('visible');
                    showCardContextMenu(menuBtn, 'album', album.id);
                });
                div.addEventListener('click', (e) => {
                    if (!e.target.closest('.card-menu-btn')) {
                        menuBtn.classList.remove('visible');
                    }
                });
            }
            div.addEventListener('click', () => {
                const albumPage = albumPages[album.id];
                if (albumPage) {
                    navigateTo(albumPage);
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
        if (song) container.appendChild(renderCard(song, true, null));
    });
}

function renderHomePage() {
    renderRecentlyPlayed();
    renderFavouriteAlbums();
    renderHorizontalArtists('popularArtists', artists.filter(a => artistPages[a.id]).slice(0, 6).map(a => a.id));
}

function renderFavouriteAlbums() {
    renderHorizontalAlbums('favouriteAlbums', [1, 12, 11, 9]);
}

function renderDiscoverPage() {
    renderHorizontalSongs('latestReleases', songs.slice(0, 8).map(s => s.id));
    renderHorizontalSongs('trendingSongs', [3, 6, 8, 10, 13, 1, 11, 15]);
    renderHorizontalSongs('popularSongs', [5, 2, 9, 12, 14, 4, 7, 1]);
    renderHorizontalAlbums('popularAlbums', albums.slice(0, 6).map(a => a.id));
}

function renderLibraryPage() {
    libraryContent.innerHTML = '';

    const likedSongsList = getPlaylistSongs('liked');
    const likedSongsRecent = likedSongsList.slice(0, 5);

    const likedSongsSection = document.createElement('div');
    likedSongsSection.innerHTML = '<div class="library-section-title">Liked Music</div>';
    if (likedSongsRecent.length > 0) {
        const scroll = document.createElement('div');
        scroll.className = 'horizontal-scroll';
        const container = document.createElement('div');
        container.className = 'scroll-container';
        likedSongsRecent.forEach(song => {
            container.appendChild(renderCard(song, true, null));
        });
        scroll.appendChild(container);
        likedSongsSection.appendChild(scroll);
    } else {
        likedSongsSection.innerHTML += '<div style="color: var(--text-muted); padding: 16px;">No liked songs yet. Start liking songs!</div>';
    }
    libraryContent.appendChild(likedSongsSection);

    const likedAlbumsSection = document.createElement('div');
    likedAlbumsSection.style.marginTop = '24px';
    likedAlbumsSection.innerHTML = '<div class="library-section-title">Liked Albums</div>';

    const libraryLikedAlbums = likedAlbums.map(id => albums.find(a => a.id === id)).filter(Boolean);
    if (libraryLikedAlbums.length > 0) {
        const scroll = document.createElement('div');
        scroll.className = 'horizontal-scroll';
        const container = document.createElement('div');
        container.className = 'scroll-container';
        libraryLikedAlbums.forEach(album => {
            const div = document.createElement('div');
            div.className = 'card-wrapper';
            div.dataset.albumId = album.id;
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
                </div>
            `;
            div.addEventListener('click', () => {
                const albumPage = albumPages[album.id];
                if (albumPage) {
                    navigateTo(albumPage);
                } else {
                    playAlbum(album.id);
                }
            });
            container.appendChild(div);
        });
        scroll.appendChild(container);
        likedAlbumsSection.appendChild(scroll);
    } else {
        likedAlbumsSection.innerHTML += '<div style="color: var(--text-muted); padding: 16px;">No liked albums yet. Start liking albums!</div>';
    }
    libraryContent.appendChild(likedAlbumsSection);

    if (userPlaylists.length > 0) {
        const playlistsSection = document.createElement('div');
        playlistsSection.style.marginTop = '24px';
        playlistsSection.innerHTML = '<div class="library-section-title">All Playlists</div>';
        const grid = document.createElement('div');
        grid.className = 'library-playlists-grid';
        userPlaylists.forEach(pl => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-img" style="background: linear-gradient(135deg, var(--accent), #333);">
                    <span style="font-size: 2rem; color: #fff;">&#127925;</span>
                </div>
                <div class="card-title">${pl.name}</div>
                <div class="card-subtitle">${pl.songs.length} songs</div>
            `;
            card.addEventListener('click', () => openPlaylist(pl.name));
            grid.appendChild(card);
        });
        playlistsSection.appendChild(grid);
        libraryContent.appendChild(playlistsSection);
    }
}

function renderPlaylistDetail(playlistName) {
    const isLikedPage = playlistName === 'liked';
    const plSongs = getPlaylistSongs(playlistName);
    
    if (!playlistDetail) {
        console.error('playlistDetail element not found');
        return;
    }
    
    if (isLikedPage) {
        const totalDuration = typeof getTotalDuration === 'function' ? getTotalDuration(plSongs) : '';
        let html = `
            <div class="album-header">
                <div class="album-header-img">
                    <div style="width:100%;height:100%;background: linear-gradient(135deg, #4d694e, #2d4a2e);display:flex;align-items:center;justify-content:center;border-radius:8px;">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </div>
                </div>
                <div class="album-header-info">
                    <div class="album-header-title">Liked Music</div>
                    <div class="album-header-desc">${plSongs.length} songs &bull; ${totalDuration}</div>
                <div class="album-header-actions">
                    <button class="album-action-btn album-play-btn" onclick="playLikedSongs()">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button class="album-action-btn album-shuffle-btn" onclick="shuffleLikedSongs()">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                    </button>
                </div>
                </div>
            </div>
            <div class="album-songs-header">
                <div class="album-song-num">#</div>
                <div class="album-song-title">Title</div>
                <div class="album-song-date-added">Date Added</div>
                <div class="album-song-duration">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                </div>
            </div>
            <div class="album-songs">
        `;
        
        plSongs.forEach((song, index) => {
            const isPlaying = song.id === currentPlayingSongId;
            const liked = isLiked(song.id);
            const dateAdded = likedSongsTimestamps[song.id] ? formatDateAdded(likedSongsTimestamps[song.id]) : '';
            html += `
                <div class="album-song-row ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id}, 'liked')">
                    <div class="album-song-num">
                        ${isPlaying ? '<svg class="playing-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : index + 1}
                    </div>
                    <div class="album-song-title">
                        <span class="title-text">${song.title}</span>
                        <span class="song-artist">• ${song.artist}</span>
                    </div>
                    <div class="album-song-date-added">${dateAdded}</div>
                    <div class="album-song-duration">
                        <span class="like-icon ${liked ? 'liked' : ''}" onclick="toggleLike(${song.id}); event.stopPropagation();">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? 'var(--accent)' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </span>
                        <span class="duration-text">${song.duration}</span>
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        playlistDetail.innerHTML = html;
        
        if (isMobile()) {
            addLongPressListeners();
        }
    } else {
        const title = playlistName;
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
}

function renderLikedMusicPage() {
    const likedDetail = document.getElementById('likedDetail');
    if (!likedDetail) return;
    
    const plSongs = getPlaylistSongs('liked');
    const totalDuration = typeof getTotalDuration === 'function' ? getTotalDuration(plSongs) : '';
    let html = `
        <div class="album-header">
            <div class="album-header-img">
                <img src="liked-music.jpg" alt="Liked Music" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
            </div>
            <div class="album-header-info">
                <div class="album-header-title">Liked Music</div>
                <div class="album-header-desc">${plSongs.length} songs &bull; ${totalDuration}</div>
                <div class="album-header-actions">
                    <button class="album-action-btn album-play-btn" onclick="playLikedSongs()">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button class="album-action-btn album-shuffle-btn" onclick="shuffleLikedSongs()">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                    </button>
                </div>
            </div>
        </div>
        <div class="album-songs-header">
            <div class="album-song-num">#</div>
            <div class="album-song-title">Title</div>
            <div class="album-song-date-added">Date Added</div>
            <div class="album-song-duration">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            </div>
        </div>
        <div class="album-songs">
    `;
    
    plSongs.forEach((song, index) => {
        const isPlaying = song.id === currentPlayingSongId;
        const liked = isLiked(song.id);
        const dateAdded = likedSongsTimestamps[song.id] ? formatDateAdded(likedSongsTimestamps[song.id]) : '';
        html += `
            <div class="album-song-row ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id}, 'liked')">
                <div class="album-song-num">
                    ${isPlaying ? '<svg class="playing-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : index + 1}
                </div>
                <div class="album-song-title">
                    <span class="title-text">${song.title}</span>
                    <span class="song-artist">• ${song.artist}</span>
                </div>
                <div class="album-song-date-added">${dateAdded}</div>
                <div class="album-song-duration">
                        <span class="like-icon ${liked ? 'liked' : ''}" onclick="toggleLike(${song.id}); event.stopPropagation();">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? 'var(--accent)' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                        </span>
                        <span class="duration-text">${song.duration}</span>
                    </div>
                </div>
            `;
    });
    
    html += '</div>';
    likedDetail.innerHTML = html;
    
    if (isMobile()) {
        addLongPressListeners();
    }
}

function playLikedAlbums() {
    if (!likedAlbums.length) return;
    const album = albums.find(a => a.id === likedAlbums[0]);
    if (album) playAlbum(album.id);
}

window.playLikedAlbums = playLikedAlbums;

function shuffleLikedAlbums() {
    if (!likedAlbums.length) return;
    const album = albums.find(a => a.id === likedAlbums[Math.floor(Math.random() * likedAlbums.length)]);
    if (album) playAlbum(album.id);
}

window.shuffleLikedAlbums = shuffleLikedAlbums;

function renderLikedAlbumsPage() {
    const likedAlbumsDetail = document.getElementById('likedAlbumsDetail');
    if (!likedAlbumsDetail) return;

    const sortedAlbums = likedAlbums
        .map(id => albums.find(a => a.id === id))
        .filter(Boolean);

    let html = `
        <div class="album-header">
            <div class="album-header-img">
                <img src="liked-albums.jpg" alt="Liked Albums" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">
            </div>
            <div class="album-header-info">
                <div class="album-header-title">Liked Albums</div>
                <div class="album-header-desc">${sortedAlbums.length} albums</div>
            </div>
        </div>
    `;

    if (sortedAlbums.length > 0) {
        html += '<div class="liked-albums-grid">';
        sortedAlbums.forEach(album => {
            const coverHtml = album.image
                ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
            const albumPage = albumPages[album.id];
            html += `
                <div class="card-wrapper" onclick="${albumPage ? `navigateTo('${albumPage}')` : `playAlbum(${album.id})`}">
                    <div class="card">
                        <div class="card-img">
                            ${coverHtml}
                        </div>
                        <div class="card-title">${album.title}</div>
                        <div class="card-subtitle">${album.artist} - ${album.year}</div>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    } else {
        html += '<div style="color: var(--text-muted); padding: 16px;">No liked albums yet. Start liking albums!</div>';
    }
    likedAlbumsDetail.innerHTML = html;
}

function openPlaylist(name) {
    currentPlaylist = name;
    renderPlaylistDetail(name);
    showPage('playlist');
    window.location.hash = `#/playlist/${name}`;
}

function showPage(pageName) {
    if (!pages[pageName]) return;
    Object.values(pages).forEach(p => p.classList.remove('active'));
    pages[pageName].classList.add('active');
    navItems.forEach(n => n.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-page="${pageName}"], .nav-item[data-route="${pageName}"]`);
    if (activeNav) activeNav.classList.add('active');
    
    if (pageName === 'home') renderHomePage();
    if (pageName === 'discover') renderDiscoverPage();
    if (pageName === 'library') renderLibraryPage();
    if (pageName === 'playlist') renderPlaylistDetail(currentPlaylist || 'liked');
    if (pageName === 'likedMusic') renderLikedMusicPage();
    if (pageName === 'likedAlbums') renderLikedAlbumsPage();
    if (pageName === 'album') {
        if (typeof renderAlbumPage === 'function') renderAlbumPage();
    }
    if (pageName === 'artist') {
        if (typeof renderArtistPage === 'function') renderArtistPage();
    }
    if (pageName === 'search') {
        const hash = window.location.hash;
        const query = new URLSearchParams(hash.split('?')[1]).get('q');
        if (query && typeof showSearchResultsPage === 'function') {
            showSearchResultsPage(query.toLowerCase().trim());
        }
    }
    
    closeSidebarFns();
    
    if (contentArea) {
        contentArea.scrollTop = 0;
    }
    window.scrollTo(0, 0);
}

navItems.forEach(item => {
    item.addEventListener('click', e => {
        const href = item.getAttribute('href');
        if (item.dataset.page) {
            e.preventDefault();
            window.location.hash = '#/' + item.dataset.page;
        } else if (href && href.startsWith('#/')) {
            e.preventDefault();
            window.location.hash = href;
        } else if (href && href !== '#' && !href.startsWith('http')) {
            e.preventDefault();
            navigateTo(href);
        }
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

function handleHashChange() {
    const hash = window.location.hash;
    if (!hash || hash === '#/' || hash === '#') {
        showPage('home');
        return;
    }
    
    let path = hash.replace(/^#\/?/, '');
    let query = '';
    const qIndex = path.indexOf('?');
    if (qIndex !== -1) {
        query = path.substring(qIndex);
        path = path.substring(0, qIndex);
    }
    
    const parts = path.split('/').filter(Boolean);
    const page = parts[0] || 'home';
    
    if (page === 'home') {
        showPage('home');
    } else if (page === 'discover') {
        showPage('discover');
    } else if (page === 'library') {
        showPage('library');
    } else if (page === 'playlist') {
        const playlistName = parts[1] || 'liked';
        currentPlaylist = playlistName;
        showPage('playlist');
    } else if (page === 'liked-music') {
        showPage('likedMusic');
        renderLikedMusicPage();
    } else if (page === 'liked-albums') {
        showPage('likedAlbums');
        renderLikedAlbumsPage();
    } else if (page === 'album') {
        const albumTitle = decodeURIComponent(parts[1]);
        const album = albums.find(a => a.title === albumTitle);
        if (album) {
            window.albumPageId = album.id;
            showPage('album');
        }
    } else if (page === 'artist') {
        const artistName = decodeURIComponent(parts[1]);
        const artist = artists.find(a => a.name === artistName);
        if (artist) {
            window.artistPageId = artist.id;
            showPage('artist');
        }
    } else if (page === 'search') {
        const searchQuery = new URLSearchParams(query).get('q');
        if (searchQuery) {
            showPage('search');
            if (typeof showSearchResultsPage === 'function') {
                showSearchResultsPage(searchQuery.toLowerCase().trim());
            }
        } else {
            showPage('search');
        }
    } else {
        showPage('home');
    }
}

window.addEventListener('hashchange', handleHashChange);

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
    const existingItems = playlistContainer.querySelectorAll('.playlist-item:not([data-playlist="liked"]):not([data-playlist="liked-albums"])');
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
        window.location.hash = '#/library';
    });
}

function resetShuffle() {
    shuffle = false;
    originalQueue = [];
    currentQueue = [];
    updateShuffleUI();
}

function playSong(songId, playlistName = null, queueIds = null) {
    const song = getSongById(songId);
    if (!song) return;
    
    addToRecentlyPlayed(songId);
    resetShuffle();
    
    if (queueIds && queueIds.length) {
        currentPlaylist = 'queue';
        currentQueue = queueIds.slice();
        currentSongIndex = currentQueue.indexOf(songId);
    } else if (playlistName) {
        currentPlaylist = playlistName;
        currentQueue = getPlaylistSongs(playlistName).map(s => s.id);
        currentSongIndex = currentQueue.indexOf(songId);
    } else {
        currentPlaylist = null;
        currentQueue = [songId];
        currentSongIndex = 0;
    }
    
    loadSong(song);
    playAudio();
    saveAudioState();
}

function playAlbum(albumId) {
    const albumSongs = getAlbumSongs(albumId);
    if (albumSongs.length > 0) {
        resetShuffle();
        currentPlaylist = 'album:' + albumId;
        currentQueue = albumSongs.map(s => s.id);
        currentSongIndex = 0;
        loadSong(albumSongs[0]);
        playAudio();
        saveAudioState();
    }
}

function playLikedSongs() {
    const likedSongsList = getPlaylistSongs('liked');
    if (likedSongsList.length > 0) {
        resetShuffle();
        currentPlaylist = 'liked';
        currentQueue = likedSongsList.map(s => s.id);
        currentSongIndex = 0;
        loadSong(likedSongsList[0]);
        playAudio();
        saveAudioState();
    }
}

function shuffleLikedSongs() {
    const likedSongsList = getPlaylistSongs('liked');
    if (likedSongsList.length > 0) {
        resetShuffle();
        currentPlaylist = 'liked';
        currentQueue = likedSongsList.map(s => s.id);
        currentSongIndex = 0;
        loadSong(likedSongsList[0]);
        playAudio();
        
        shuffle = true;
        originalQueue = currentQueue.slice();
        applyShuffleToQueue();
        updateShuffleUI();
        renderQueuePanel();
        saveAudioState();
    }
}

function shuffleAlbum(albumId) {
    const album = albums.find(a => a.id === albumId);
    if (!album) return;
    const albumSongs = getAlbumSongs(albumId);
    if (albumSongs.length > 0) {
        resetShuffle();
        currentPlaylist = 'album:' + albumId;
        currentQueue = albumSongs.map(s => s.id);
        currentSongIndex = 0;
        loadSong(albumSongs[0]);
        playAudio();
        
        shuffle = true;
        originalQueue = currentQueue.slice();
        applyShuffleToQueue();
        updateShuffleUI();
        renderQueuePanel();
        saveAudioState();
    }
}

function formatDateAdded(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
}

function loadSong(song) {
    currentSong = song;
    playerTrackName.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    const cover = getAlbumCoverForSong(song);
    if (cover) {
        playerImg.src = cover;
        playerImg.style.display = 'block';
        playerImg.style.background = 'none';
        playerImg.textContent = '';
    } else {
        playerImg.removeAttribute('src');
        playerImg.style.display = 'flex';
        playerImg.style.background = `linear-gradient(135deg, ${song.color}, #333)`;
        playerImg.style.alignItems = 'center';
        playerImg.style.justifyContent = 'center';
        playerImg.style.color = '#fff';
        playerImg.textContent = song.title.substring(0, 2).toUpperCase();
    }
    
    totalTimeEl.textContent = song.duration;
    currentTimeEl.textContent = '0:00';
    progressFill.style.width = '0%';
    
    const expandedTotalTime = document.getElementById('expandedTotalTime');
    const expandedCurrentTime = document.getElementById('expandedCurrentTime');
    const expandedProgressFill = document.getElementById('expandedProgressFill');
    if (expandedTotalTime) expandedTotalTime.textContent = song.duration;
    if (expandedCurrentTime) expandedCurrentTime.textContent = '0:00';
    if (expandedProgressFill) expandedProgressFill.style.width = '0%';
    
    stopSilentPlayback();
    
    updateLikeButton();

    if (typeof onSongChange === 'function') onSongChange(song);
    updatePlayerControlsState();
    
    if (isAlbumMode()) {
        currentPlayingSongId = song.id;
        const albumPageEl = document.getElementById('albumPage');
        if (albumPageEl && albumPageEl.classList.contains('active')) {
            if (typeof renderAlbumDetail === 'function') {
                renderAlbumDetail();
            }
        }
    }
    
    if (currentPlaylist === 'liked') {
        currentPlayingSongId = song.id;
        const playlistPageEl = document.getElementById('playlistPage');
        if (playlistPageEl && playlistPageEl.classList.contains('active')) {
            renderPlaylistDetail('liked');
        }
    }
}

function playAudio() {
    isPlaying = true;
    playPauseBtn.querySelector('.play-icon').style.display = 'none';
    playPauseBtn.querySelector('.pause-icon').style.display = 'block';
    
    const expandedPlayPauseBtn = document.getElementById('expandedPlayPauseBtn');
    if (expandedPlayPauseBtn) {
        expandedPlayPauseBtn.querySelector('.play-icon').style.display = 'none';
        expandedPlayPauseBtn.querySelector('.pause-icon').style.display = 'block';
    }
    
    if (mobilePlayPauseBtn) {
        mobilePlayPauseBtn.querySelector('.play-icon').style.display = 'none';
        mobilePlayPauseBtn.querySelector('.pause-icon').style.display = 'block';
    }
    
    if (!currentSong) currentSong = getCurrentSong();
    if (currentSong && currentSong.id) {
        const musicFiles = {
            1: 'BlindingLights-Song.mp3',
            31: 'EverlastingDawnAtNight-Song.mp3',
            99: 'Surf-Song.mp3',
            59: 'OtroAtardecer-Song.mp3',
            69: 'FinalApplause-Song.mp3'
        };
        
        if (musicFiles[currentSong.id]) {
            const file = musicFiles[currentSong.id];
            if (!audio || currentAudioFile !== file) {
                if (audio) {
                    audio.pause();
                    audio.removeEventListener('timeupdate', updateProgress);
                }
                audio = new Audio(file);
                currentAudioFile = file;
                audio.addEventListener('timeupdate', updateProgress);
                audio.addEventListener('ended', () => {
                    stopSilentPlayback();
                    if (repeat === 1) {
                        if (audio) {
                            audio.currentTime = 0;
                        }
                        playAudio();
                    } else if (isAlbumMode() || currentPlaylist === 'liked') {
                        const list = getCurrentPlaylistSongs();
                        if (repeat === 2) {
                            playNext();
                        } else if (list.length > 0 && currentSongIndex === list.length - 1) {
                            pauseAudio();
                            resetProgress();
                            saveAudioState();
                        } else {
                            playNext();
                        }
                    } else {
                        pauseAudio();
                        resetProgress();
                        saveAudioState();
                    }
                });
            }
            audio.play().catch(() => {});
        } else {
            if (audio) {
                audio.pause();
                audio.removeEventListener('timeupdate', updateProgress);
                audio = null;
                currentAudioFile = null;
            }
            startSilentPlayback();
        }
    }
    
    saveAudioState();
}

function pauseAudio() {
    isPlaying = false;
    playPauseBtn.querySelector('.play-icon').style.display = 'block';
    playPauseBtn.querySelector('.pause-icon').style.display = 'none';
    
    const expandedPlayPauseBtn = document.getElementById('expandedPlayPauseBtn');
    if (expandedPlayPauseBtn) {
        expandedPlayPauseBtn.querySelector('.play-icon').style.display = 'block';
        expandedPlayPauseBtn.querySelector('.pause-icon').style.display = 'none';
    }
    
    if (mobilePlayPauseBtn) {
        mobilePlayPauseBtn.querySelector('.play-icon').style.display = 'block';
        mobilePlayPauseBtn.querySelector('.pause-icon').style.display = 'none';
    }
    
    if (audio) {
        audio.pause();
    } else if (silentPlayback.isActive) {
        pauseSilentPlayback();
    }
    saveAudioState();
}

function resetProgress() {
    currentTimeEl.textContent = '0:00';
    progressFill.style.width = '0%';
    
    const expandedCurrentTime = document.getElementById('expandedCurrentTime');
    const expandedProgressFill = document.getElementById('expandedProgressFill');
    if (expandedCurrentTime) expandedCurrentTime.textContent = '0:00';
    if (expandedProgressFill) expandedProgressFill.style.width = '0%';
}

function playNext() {
    stopSilentPlayback();
    const list = getCurrentPlaylistSongs();
    if (list.length > 0) {
        if (list.length === 1) {
            currentSongIndex = 0;
            loadSong(list[0]);
            if (audio) {
                audio.currentTime = 0;
            }
            playAudio();
        } else {
            currentSongIndex = (currentSongIndex + 1) % list.length;
            loadSong(list[currentSongIndex]);
            playAudio();
        }
    }
    saveAudioState();
}

function playPrev() {
    stopSilentPlayback();
    const list = getCurrentPlaylistSongs();
    if (list.length > 0) {
        if (list.length === 1) {
            currentSongIndex = 0;
            loadSong(list[0]);
            if (audio) {
                audio.currentTime = 0;
            }
            playAudio();
        } else {
            currentSongIndex = (currentSongIndex - 1 + list.length) % list.length;
            loadSong(list[currentSongIndex]);
            playAudio();
        }
    }
    saveAudioState();
}

function getCurrentSong() {
    const list = getCurrentPlaylistSongs();
    if (list.length > 0 && currentSongIndex >= 0 && currentSongIndex < list.length) {
        return list[currentSongIndex];
    }
    return songs[0];
}

function getCurrentPlaylistSongs() {
    if (currentQueue && currentQueue.length) return currentQueue.map(id => getSongById(id)).filter(Boolean);
    if (currentPlaylist === 'liked') {
        return likedSongs
            .map(id => getSongById(id))
            .filter(Boolean)
            .sort((a, b) => (likedSongsTimestamps[b.id] || 0) - (likedSongsTimestamps[a.id] || 0));
    }
    if (currentPlaylist && currentPlaylist.startsWith('album:')) {
        const albumId = parseInt(currentPlaylist.replace('album:', ''));
        return getAlbumSongs(albumId);
    }
    if (currentPlaylist) return getPlaylistSongs(currentPlaylist);
    return songs;
}

function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function applyShuffleToQueue() {
    if (!currentQueue.length) return;
    originalQueue = currentQueue.slice();
    const currentId = currentQueue[currentSongIndex];
    const others = currentQueue.filter(id => id !== currentId);
    currentQueue = [currentId].concat(shuffleArray(others));
    currentSongIndex = 0;
}

function restoreQueueFromOriginal() {
    if (!originalQueue.length) return;
    const currentId = currentQueue[currentSongIndex];
    currentQueue = originalQueue.slice();
    currentSongIndex = currentQueue.indexOf(currentId);
    if (currentSongIndex < 0) currentSongIndex = 0;
    originalQueue = [];
}

function refreshQueueFromCurrentSource() {
    if (currentPlaylist === 'liked') {
        currentQueue = likedSongs.slice();
    } else if (currentPlaylist && currentPlaylist.startsWith('album:')) {
        const albumId = parseInt(currentPlaylist.replace('album:', ''));
        const albumSongs = getAlbumSongs(albumId);
        currentQueue = albumSongs.map(s => s.id);
    } else if (currentPlaylist) {
        currentQueue = getPlaylistSongs(currentPlaylist).map(s => s.id);
    }
}

let expandedPlayerOpen = false;
let sidebarTab = 'queue';

// Expanded player gradient handled entirely via CSS now.

const lyricsData = {
    1: `Yeah<br><br>I've been tryna call<br><br>I've been on my own for long enough<br><br>Maybe you can show me how to love, maybe<br><br>I'm goin' through withdrawals<br><br>You don't even have to do too much<br><br>You can turn me on with just a touch, baby<br><br>I look around and<br><br>Sin City's cold and empty (Oh)<br><br>No one's around to judge me (Oh)<br><br>I can't see clearly when you're gone<br><br>I said, ooh, I'm blinded by the lights<br><br>No, I can't sleep until I feel your touch (Touch)<br><br>I said, ooh, I'm drowning in the night<br><br>Oh, when I'm like this, you're the one I trust<br><br>Hey, hey, hey<br><br>I'm running out of time<br><br>'Cause I can see the sun light up the sky<br><br>So I hit the road in overdrive, baby, oh<br><br>The city's cold and empty (Oh)<br><br>No one's around to judge me (Oh)<br><br>I can't see clearly when you're gone<br><br>And I said, ooh, I'm blinded by the lights<br><br>No, I can't sleep until I feel your touch (Touch)<br><br>I said, ooh, I'm drowning in the night<br><br>Oh, when I'm like this, you're the one I trust<br><br>I'm just coming back to let you know (Back to let you know)<br><br>I could never say it on the phone (Say it on the phone)<br><br>Will never let you go this time (Ooh)<br><br>I said, ooh, I'm blinded by the lights<br><br>No, I can't sleep until I feel your touch (Touch)<br><br>Hey, hey, hey<br><br>Hey, hey, hey<br><br>I said, ooh, I'm blinded by the lights<br><br>No, I can't sleep until I feel your touch`,
    59: `Aún quedan dos botellas de vino, de vino<br><br>Por si se juntan nuestro' camino', camino'<br><br>Y no hay que encontrar el atardecer<br><br>Hay mucho de mí que te faltó conocer<br><br>Si la vida me da de nuevo el placer<br><br>Voy a volverte a besar como aquella ve' que el sol se escondió<br><br>Mientras la noche llegaba<br><br>No sé qué sucedió pero me perdí en tu mirada<br><br>Eh, eh, eh, eh<br><br>Oh, oh, mami, dime por qué te fuistе<br><br>Ey, ey, oh, oh, mami, dime qué tú me hicistе<br><br>Que pasa el tiempo y no te olvido<br><br>Búscame, ya estoy vestido<br><br>Hoy sí o sí yo me quedo en un cuarto que no es mío<br><br>Déjame acariciarte hasta quedarno' dormido'<br><br>Yo haciéndote cosas nueva' y tú improvisando gemido'<br><br>Eh, eh, eh, eh<br><br>Tú a mí me gusta' más que el dinero, eh, eh, eh<br><br>Quiero que te vengas tú primero<br><br>A vece' me pregunto qué será de tu vida<br><br>Ojalá un día de estos me escriba'<br><br>Babe, you know I'm thinking 'bout you<br><br>These days, 'cause I've been thinking 'bout you<br><br>Vamo' suavecito, me besa' tan bien<br><br>Empieza en mi ombligo, termina en mis pies<br><br>Beni, no te olvido<br><br>Yo te digo, no te fallaré<br><br>No sé qué te hizo<br><br>Pero yo nunca te dejaré<br><br>Y no hay que encontrar el atardecer<br><br>Hay mucho de mí que te faltó conocer<br><br>Si la vida me da de nuevo el placer<br><br>Voy a volverte a besar como aquella ve' que el sol se escondió<br><br>Mientras la noche llegaba<br><br>No sé qué sucedió pero me perdí en tu mirada (Mirada)`,
    99: `Dance, my babe<br><br>Dance, my friends<br><br>We don't have much time to enjoy<br><br>Just sing it, my babe<br><br>Bigger than you ever did<br><br>We don't have much time to enjoy<br><br>Our time will be gone someday<br><br>But I'm okay<br><br>Life's like surfin' anyway<br><br>We surf like plankton<br><br>We surf outside the waves<br><br>We surf like a jellyfish<br><br>We surf outside the waves, side the waves<br><br>My body is full of salt<br><br>Trying to wash it away<br><br>But you know my time is always<br><br>So sweet with you<br><br>Oh, I'm never gonna leavе<br><br>'Cause you know<br><br>The life is likе surfin' anyway<br><br>We surf like plankton<br><br>We surf outside the waves<br><br>We surf like a jellyfish<br><br>We surf outside the waves, side the waves`
};

function getLyricsFilename(song) {
    return song.title.replace(/\s+/g, '').replace(/[^a-zA-Z0-9]/g, '') + '-Lyrics.txt';
}

async function loadLyrics(song) {
    if (lyricsData[song.id]) {
        return lyricsData[song.id];
    }
    const filename = getLyricsFilename(song);
    try {
        const response = await fetch(filename);
        if (response.ok) {
            const text = await response.text();
            const lines = text.split('\n').filter(line => line.trim() !== '');
            if (lines.length > 0) {
                return lines.join('<br>');
            }
        }
    } catch (e) {
        // ignore fetch errors
    }
    return null;
}

function renderQueuePanel() {
    const panel = document.getElementById('sidebarQueuePanel');
    if (!panel) return;
    
    const list = getCurrentPlaylistSongs();
    const currentId = currentSong ? currentSong.id : null;
    
    if (list.length === 0) {
        panel.innerHTML = '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No songs in queue</div>';
        return;
    }
    
    let html = '';
    list.forEach((song, index) => {
        const isCurrentSong = song.id === currentId;
        const cover = getAlbumCoverForSong(song);
        const coverHtml = cover
            ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
            : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.7rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
        html += `
            <div class="sidebar-list-item ${isCurrentSong ? 'playing' : ''}" onclick="playSongFromExpanded(${song.id})">
                <div class="sidebar-list-img">${coverHtml}</div>
                <div class="sidebar-list-info">
                    <div class="sidebar-list-title">${song.title}</div>
                    <div class="sidebar-list-sub">${song.artist}</div>
                </div>
                <div class="sidebar-list-duration">${song.duration}</div>
                <button class="sidebar-list-menu" onclick="event.stopPropagation(); showQueueContextMenu(this, ${song.id});" title="More options">
                    <svg viewBox="0 0 24 24" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                </button>
            </div>
        `;
    });
    
    panel.innerHTML = html;
}

function playSongFromExpanded(songId) {
    const list = getCurrentPlaylistSongs();
    const index = list.findIndex(s => s.id === songId);
    if (index >= 0) {
        currentSongIndex = index;
        const song = list[index];
        addToRecentlyPlayed(songId);
        loadSong(song);
        playAudio();
        renderExpandedPlayer();
    }
}

async function renderLyricsPanel() {
    const panel = document.getElementById('sidebarLyricsPanel');
    if (!panel) return;
    
    const song = currentSong;
    if (!song) {
        panel.innerHTML = '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No song playing</div>';
        return;
    }
    
    const lyrics = await loadLyrics(song);
    if (lyrics) {
        panel.innerHTML = `<div class="lyrics-content">${lyrics}</div>`;
    } else {
        panel.innerHTML = `
            <div class="lyrics-empty">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
                <span>Lyrics not available for this song</span>
            </div>
        `;
    }
}

function renderExpandedPlayer() {
    const song = currentSong;
    const poster = document.getElementById('expandedPlayerPoster');
    const title = document.getElementById('expandedPlayerTitle');
    const subtitle = document.getElementById('expandedPlayerSubtitle');
    
    if (song) {
        const cover = getAlbumCoverForSong(song);
        if (cover) {
            poster.innerHTML = `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:12px;">`;
        } else {
            poster.innerHTML = `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:12px;color:#fff;font-weight:700;font-size:4rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
        }
        title.textContent = song.title;
        subtitle.textContent = `${song.album} • ${song.artist}`;
    } else {
        poster.innerHTML = '<div style="width:100%;height:100%;background: var(--bg-card);display:flex;align-items:center;justify-content:center;border-radius:12px;color:var(--text-muted);font-size:4rem;font-weight:700;">♪</div>';
        title.textContent = '';
        subtitle.textContent = '';
    }
    
    const expandedPlayPauseBtn = document.getElementById('expandedPlayPauseBtn');
    if (expandedPlayPauseBtn) {
        expandedPlayPauseBtn.querySelector('.play-icon').style.display = isPlaying ? 'none' : 'block';
        expandedPlayPauseBtn.querySelector('.pause-icon').style.display = isPlaying ? 'block' : 'none';
    }
    
    const expandedShuffleBtn = document.getElementById('expandedShuffleBtn');
    if (expandedShuffleBtn) {
        expandedShuffleBtn.style.color = shuffle ? 'var(--accent)' : 'var(--text-secondary)';
    }
    
    const expandedRepeatBtn = document.getElementById('expandedRepeatBtn');
    updateRepeatUI();
    
    updateLikeButton();
    
    renderQueuePanel();
    renderLyricsPanel();
}

function toggleExpandedPlayer() {
    const el = document.getElementById('expandedPlayer');
    if (!el) return;
    expandedPlayerOpen = !expandedPlayerOpen;
    if (expandedPlayerOpen) {
        el.classList.add('active');
        renderExpandedPlayer();
    } else {
        el.classList.remove('active');
    }
}

function closeExpandedPlayer() {
    const el = document.getElementById('expandedPlayer');
    if (!el) return;
    expandedPlayerOpen = false;
    el.classList.remove('active');
    const sidebar = document.getElementById('expandedPlayerSidebar');
    if (sidebar) sidebar.classList.remove('open');
}

function setSidebarTab(tab) {
    sidebarTab = tab;
    document.querySelectorAll('.sidebar-tab').forEach(t => t.classList.remove('active'));
    const activeTab = document.querySelector(`.sidebar-tab[data-tab="${tab}"]`);
    if (activeTab) activeTab.classList.add('active');
    
    const queuePanel = document.getElementById('sidebarQueuePanel');
    const lyricsPanel = document.getElementById('sidebarLyricsPanel');
    if (tab === 'queue') {
        queuePanel.style.display = 'block';
        lyricsPanel.style.display = 'none';
        renderQueuePanel();
    } else {
        queuePanel.style.display = 'none';
        lyricsPanel.style.display = 'block';
        renderLyricsPanel();
    }
}

function toggleExpandedSidebar() {
    const sidebar = document.getElementById('expandedPlayerSidebar');
    if (!sidebar) return;
    sidebar.classList.toggle('open');
}

let lastSaveTime = 0;

function updateProgress() {
    if (audio) {
        const percent = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = percent + '%';
        
        const currentMins = Math.floor(audio.currentTime / 60);
        const currentSecs = Math.floor(audio.currentTime % 60);
        currentTimeEl.textContent = `${currentMins}:${currentSecs.toString().padStart(2, '0')}`;
        
        const expandedProgressFill = document.getElementById('expandedProgressFill');
        const expandedCurrentTime = document.getElementById('expandedCurrentTime');
        if (expandedProgressFill) expandedProgressFill.style.width = percent + '%';
        if (expandedCurrentTime) expandedCurrentTime.textContent = `${currentMins}:${currentSecs.toString().padStart(2, '0')}`;
    }
    
    const now = Date.now();
    if (now - lastSaveTime > 2000) {
        lastSaveTime = now;
        saveAudioState();
    }
}

window.addEventListener('beforeunload', saveAudioState);

function updateLikeButton() {
    const song = getCurrentSong();
    const liked = !!(song && isLiked(song.id));
    const svg = likeBtn.querySelector('svg');
    if (svg) {
        svg.setAttribute('fill', liked ? 'var(--accent)' : 'none');
        svg.setAttribute('stroke', liked ? 'var(--accent)' : 'currentColor');
    }
    likeBtn.style.color = liked ? 'var(--accent)' : 'var(--text-secondary)';
    
    const expandedLikeBtn = document.getElementById('expandedLikeBtn');
    if (expandedLikeBtn) {
        const expandedSvg = expandedLikeBtn.querySelector('svg');
        if (expandedSvg) {
            expandedSvg.setAttribute('stroke', liked ? 'var(--accent)' : 'currentColor');
            expandedSvg.setAttribute('fill', liked ? 'var(--accent)' : 'none');
        }
        expandedLikeBtn.style.color = liked ? 'var(--accent)' : 'var(--text-secondary)';
    }
}

function updatePlayerControlsState() {
    const hasSong = !!currentSong;
    const controls = [playPauseBtn, prevBtn, nextBtn, likeBtn, shuffleBtn, repeatBtn];
    controls.forEach(btn => {
        if (hasSong) {
            btn.classList.remove('disabled');
        } else {
            btn.classList.add('disabled');
        }
    });
    if (!hasSong) {
        progressBar.style.pointerEvents = 'none';
        progressBar.style.opacity = '0.5';
    } else {
        progressBar.style.pointerEvents = 'auto';
        progressBar.style.opacity = '1';
    }
    if (mobilePlayPauseBtn) {
        mobilePlayPauseBtn.style.display = (hasSong && isMobile()) ? 'flex' : 'none';
        const mobilePlayIcon = mobilePlayPauseBtn.querySelector('.play-icon');
        const mobilePauseIcon = mobilePlayPauseBtn.querySelector('.pause-icon');
        if (mobilePlayIcon) mobilePlayIcon.style.display = isPlaying ? 'none' : 'block';
        if (mobilePauseIcon) mobilePauseIcon.style.display = isPlaying ? 'block' : 'none';
    }
    const expandedControls = [expandedPlayPauseBtn, expandedPrevBtn, expandedNextBtn, expandedLikeBtn, expandedShuffleBtn, expandedRepeatBtn];
    expandedControls.forEach(btn => {
        if (!btn) return;
        if (hasSong) {
            btn.classList.remove('disabled');
        } else {
            btn.classList.add('disabled');
        }
    });
    const expandedProgressBar = document.getElementById('expandedProgressBar');
    if (expandedProgressBar) {
        expandedProgressBar.style.pointerEvents = hasSong ? 'auto' : 'none';
        expandedProgressBar.style.opacity = hasSong ? '1' : '0.5';
    }
    updateRepeatUI();
    updateShuffleUI();
    
    const playerBar = document.getElementById('playerBar');
    if (playerBar) {
        playerBar.classList.toggle('visible', hasSong);
    }
}

function updateShuffleUI() {
    const buttons = [shuffleBtn, expandedShuffleBtn];
    const otherShuffleBtn = document.getElementById('shuffleBtn');
    if (otherShuffleBtn && otherShuffleBtn !== shuffleBtn) {
        buttons.push(otherShuffleBtn);
    }
    
    buttons.forEach(btn => {
        if (!btn) return;
        btn.style.color = shuffle ? 'var(--accent)' : 'var(--text-secondary)';
        const existingBadge = btn.querySelector('.shuffle-indicator');
        if (existingBadge) existingBadge.remove();
        
        if (shuffle) {
            const span = document.createElement('span');
            span.className = 'shuffle-indicator';
            span.style.cssText = 'position:absolute;top:3px;right:3px;width:4px;height:4px;background:var(--accent);border-radius:50%;';
            btn.appendChild(span);
            btn.style.position = 'relative';
        }
    });
}

function updateRepeatUI() {
    const isActive = repeat > 0;
    const repeatColor = isActive ? 'var(--accent)' : 'var(--text-secondary)';
    const svg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"/></svg>';
    
    const buttons = [repeatBtn, expandedRepeatBtn];
    const otherRepeatBtn = document.getElementById('repeatBtn');
    if (otherRepeatBtn && otherRepeatBtn !== repeatBtn) {
        buttons.push(otherRepeatBtn);
    }
    
    buttons.forEach(btn => {
        if (!btn) return;
        btn.style.color = repeatColor;
        const existingBadge = btn.querySelector('.repeat-indicator');
        if (existingBadge) existingBadge.remove();
        
        if (repeat === 1) {
            const span = document.createElement('span');
            span.className = 'repeat-indicator';
            span.textContent = '1';
            span.style.cssText = 'position:absolute;top:2px;right:2px;font-size:9px;font-weight:700;line-height:1;color:var(--accent);';
            btn.appendChild(span);
            btn.style.position = 'relative';
        } else if (repeat === 2) {
            const span = document.createElement('span');
            span.className = 'repeat-indicator';
            span.style.cssText = 'position:absolute;top:3px;right:3px;width:4px;height:4px;background:var(--accent);border-radius:50%;';
            btn.appendChild(span);
            btn.style.position = 'relative';
        }
    });
}

playPauseBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    if (isPlaying) {
        pauseAudio();
    } else {
        playAudio();
    }
});

if (mobilePlayPauseBtn) {
    mobilePlayPauseBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!currentSong) return;
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });
}

nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    playNext();
});

prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    playPrev();
});

progressBar.addEventListener('click', e => {
    e.stopPropagation();
    if (!currentSong) return;
    const rect = progressBar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    
    if (audio && audio.duration) {
        audio.currentTime = percent * audio.duration;
    } else if (silentPlayback.isActive || (!audio && currentSong)) {
        const totalSeconds = getDurationSeconds(currentSong.duration);
        seekSilentPlayback(percent * totalSeconds);
    }
});

likeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    const song = getCurrentSong();
    if (song) {
        toggleLike(song.id);
        updateLikeButton();
    }
});

shuffleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    shuffle = !shuffle;
    if (shuffle) {
        applyShuffleToQueue();
    } else {
        restoreQueueFromOriginal();
    }
    updateShuffleUI();
    renderQueuePanel();
    saveAudioState();
});

repeatBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (!currentSong) return;
    repeat = (repeat + 1) % 3;
    updateRepeatUI();
    saveAudioState();
});

searchInput.addEventListener('input', e => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
        searchResults.classList.remove('active');
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

    const matchedVirtualSingles = [];
    if (typeof singlesMap !== 'undefined') {
        Object.keys(singlesMap).forEach(aid => {
            const artistFor = artists.find(a => a.id === parseInt(aid));
            singlesMap[aid].forEach(item => {
                if (item && item.title && !item.id) {
                    const artistName = artistFor ? artistFor.name : '';
                    if (item.title.toLowerCase().includes(query) || artistName.toLowerCase().includes(query)) {
                        matchedVirtualSingles.push({ ...item, artistName });
                    }
                }
            });
        });
    }

    let html = '';
    matchedArtists.forEach(artist => {
        const artistPage = artistPages[artist.id];
        const action = artistPage ? `navigateTo('${artistPage}')` : `alert('Artist page coming soon!')`;
        const imgContent = artist.image
            ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;">`
            : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2);
        html += `
            <div class="search-result-item" onclick="${action}; document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                <div class="search-result-img" style="background: linear-gradient(135deg, ${artist.color}, #555); border-radius: 50%; overflow: hidden;">${imgContent}</div>
                <div class="search-result-info">
                    <div class="search-result-name">${artist.name}</div>
                    <div class="search-result-sub">${artist.type}</div>
                </div>
                <span class="search-result-type">Artist</span>
            </div>
        `;
    });
    matchedVirtualSingles.forEach(item => {
        const typeLabel = item.type === 'ep' ? 'EP' : 'Single';
        const closeResults = `document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');`;
        const action = item.artistName && artistPages[artists.find(a => a.name === item.artistName)?.id]
            ? `navigateTo('${artistPages[artists.find(a => a.name === item.artistName).id]}'); ${closeResults}`
            : closeResults;
        html += `
            <div class="search-result-item" onclick="${action}">
                <div class="search-result-img" style="background: linear-gradient(135deg, var(--accent), #333); display:flex; align-items:center; justify-content:center; color:#fff; font-weight:600;">${item.title.substring(0, 2).toUpperCase()}</div>
                <div class="search-result-info">
                    <div class="search-result-name">${item.title}</div>
                    <div class="search-result-sub">${item.artistName} ${item.explicit ? '<span class="explicit-badge">E</span>' : ''}</div>
                </div>
                <span class="search-result-type">${typeLabel}</span>
            </div>
        `;
    });
    uniqueSongs.forEach(song => {
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
            ? `navigateTo('${albumPage}')`
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
                <span class="search-result-type">${album.type === 'ep' ? 'EP' : 'Album'}</span>
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
        const query = searchInput.value.trim();
        if (query) {
            navigateTo(`search.html?q=${encodeURIComponent(query)}`);
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

function initScrollButtons() {
    document.querySelectorAll('.scroll-btn').forEach(btn => {
        if (btn.dataset.initialized) return;
        btn.dataset.initialized = 'true';
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
}

function addLongPressListeners() {
    if (!isMobile()) return;
    document.querySelectorAll('.artist-song-row, .album-song-row').forEach(row => {
        if (row.dataset.longPressInitialized) return;
        row.dataset.longPressInitialized = 'true';
        const songId = row.dataset.songId;
        if (!songId) return;
        const menuBtn = row.querySelector('.song-menu');
        addLongPress(row, () => {
            if (menuBtn) {
                menuBtn.classList.add('visible');
                showCardContextMenu(menuBtn, 'song', parseInt(songId));
            } else {
                showCardContextMenu(row, 'song', parseInt(songId));
            }
        });
        if (menuBtn) {
            row.addEventListener('click', (e) => {
                if (!e.target.closest('.song-menu')) {
                    menuBtn.classList.remove('visible');
                }
            });
        }
    });
}

let cardContextMenu = null;
let currentCardData = null;

function createCardContextMenu() {
    if (cardContextMenu) return;
    cardContextMenu = document.createElement('div');
    cardContextMenu.className = 'card-context-menu';
    cardContextMenu.innerHTML = `
        <div class="context-menu-header">
            <div class="context-menu-header-title"></div>
            <div class="context-menu-header-artist"></div>
            <div class="context-menu-header-date"></div>
        </div>
        <div class="card-context-menu-item" data-action="play">Play Song</div>
        <div class="card-context-menu-item" data-action="go-to-album">Go to Album</div>
        <div class="card-context-menu-item" data-action="go-to-artist">Go to Artist</div>
        <div class="card-context-menu-item disabled" data-action="play-next">Play Next</div>
        <div class="card-context-menu-item disabled" data-action="add-to-queue">Add to Queue</div>
        <div class="card-context-menu-item disabled" data-action="add-to-liked">Add to Liked Music</div>
        <div class="card-context-menu-item disabled" data-action="add-to-playlist">Add to Playlist</div>
        <div class="card-context-menu-item disabled" data-action="download">Download</div>
    `;
    document.body.appendChild(cardContextMenu);

    cardContextMenu.addEventListener('click', e => {
        const item = e.target.closest('.card-context-menu-item');
        if (!item || item.classList.contains('disabled')) return;
        const action = item.dataset.action;
        handleCardMenuAction(action);
        hideCardContextMenu();
    });
}

function showCardContextMenu(button, type, id, singleObj, artistObj) {
    if (!cardContextMenu) createCardContextMenu();
    currentCardData = { type, id, singleObj, artistObj };

    const menu = cardContextMenu;
    const playItem = menu.querySelector('[data-action="play"]');
    const goToAlbumItem = menu.querySelector('[data-action="go-to-album"]');
    const goToArtistItem = menu.querySelector('[data-action="go-to-artist"]');
    const addToLikedItem = menu.querySelector('[data-action="add-to-liked"]');

    if (type === 'song') {
        const song = getSongById(id);
        if (!song && !singleObj) return;
        const targetSong = song || singleObj;
        playItem.textContent = 'Play Song';
        playItem.classList.remove('disabled');

        const album = albums.find(a => a.title === targetSong.album);
        const albumPage = album ? albumPages[album.id] : null;
        if (albumPage) {
            goToAlbumItem.classList.remove('disabled');
            goToAlbumItem.dataset.href = albumPage;
        } else {
            goToAlbumItem.classList.add('disabled');
            goToAlbumItem.dataset.href = '';
        }

        const artist = getArtistForSong(targetSong);
        const artistPage = artist ? artistPages[artist.id] : null;
        if (artistPage) {
            goToArtistItem.classList.remove('disabled');
            goToArtistItem.dataset.href = artistPage;
        } else {
            goToArtistItem.classList.add('disabled');
            goToArtistItem.dataset.href = '';
        }

        const liked = isLiked(targetSong.id);
        addToLikedItem.textContent = liked ? 'Remove from Liked Music' : 'Add to Liked Music';
        addToLikedItem.classList.toggle('disabled', false);

        const headerTitle = menu.querySelector('.context-menu-header-title');
        const headerArtist = menu.querySelector('.context-menu-header-artist');
        const headerDate = menu.querySelector('.context-menu-header-date');
        if (headerTitle) headerTitle.textContent = targetSong.title;
        if (headerArtist) headerArtist.textContent = targetSong.artist;
        const dateAdded = likedSongsTimestamps[targetSong.id] ? formatDateAdded(likedSongsTimestamps[targetSong.id]) : '';
        if (headerDate) {
            headerDate.textContent = dateAdded;
            headerDate.style.display = dateAdded ? 'block' : 'none';
        }
    } else if (type === 'album') {
        const album = albums.find(a => a.id === id);
        if (!album) return;
        playItem.textContent = 'Play Album';
        playItem.classList.remove('disabled');

        const albumPage = albumPages[album.id];
        if (albumPage) {
            goToAlbumItem.classList.remove('disabled');
            goToAlbumItem.dataset.href = albumPage;
        } else {
            goToAlbumItem.classList.add('disabled');
            goToAlbumItem.dataset.href = '';
        }

        const artist = getArtistForSong(album);
        const artistPage = artist ? artistPages[artist.id] : null;
        if (artistPage) {
            goToArtistItem.classList.remove('disabled');
            goToArtistItem.dataset.href = artistPage;
        } else {
            goToArtistItem.classList.add('disabled');
            goToArtistItem.dataset.href = '';
        }
    }

    const rect = button.getBoundingClientRect();
    menu.style.left = rect.right + 'px';
    menu.style.top = rect.top + 'px';
    menu.classList.add('active');

    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    if (rect.right + menuWidth > window.innerWidth) {
        menu.style.left = (rect.left - menuWidth) + 'px';
    }
    if (rect.top + menuHeight > window.innerHeight) {
        menu.style.top = (rect.bottom - menuHeight) + 'px';
    }
}

function hideCardContextMenu() {
    if (cardContextMenu) {
        cardContextMenu.classList.remove('active');
    }
    currentCardData = null;
}

function getArtistForSong(songOrAlbum) {
    if (!songOrAlbum || !songOrAlbum.artist) return null;
    const artistName = songOrAlbum.artist.split(',')[0].trim();
    return artists.find(a => a.name === artistName);
}

function showQueueContextMenu(button, songId) {
    const menu = document.createElement('div');
    menu.className = 'card-context-menu';
    menu.innerHTML = `
        <div class="card-context-menu-item" data-action="go-to-album">Go to Album</div>
        <div class="card-context-menu-item" data-action="go-to-artist">Go to Artist</div>
        <div class="card-context-menu-item" data-action="play-next">Play Next</div>
        <div class="card-context-menu-item" data-action="add-to-liked">Add to Liked Music</div>
        <div class="card-context-menu-item" data-action="add-to-playlist">Add to Playlist</div>
        <div class="card-context-menu-item" data-action="download">Download</div>
        <div class="card-context-menu-item dismiss" data-action="dismiss-queue">Dismiss Queue</div>
    `;
    document.body.appendChild(menu);

    const song = getSongById(songId);
    if (!song) return;

    const goToAlbumItem = menu.querySelector('[data-action="go-to-album"]');
    const goToArtistItem = menu.querySelector('[data-action="go-to-artist"]');

    const album = albums.find(a => a.title === song.album);
    const albumPage = album ? albumPages[album.id] : null;
    if (albumPage) {
        goToAlbumItem.classList.remove('disabled');
        goToAlbumItem.dataset.href = albumPage;
    } else {
        goToAlbumItem.classList.add('disabled');
        goToAlbumItem.dataset.href = '';
    }

    const artist = getArtistForSong(song);
    const artistPage = artist ? artistPages[artist.id] : null;
    if (artistPage) {
        goToArtistItem.classList.remove('disabled');
        goToArtistItem.dataset.href = artistPage;
    } else {
        goToArtistItem.classList.add('disabled');
        goToArtistItem.dataset.href = '';
    }

    const addToLikedItem = menu.querySelector('[data-action="add-to-liked"]');
    const liked = isLiked(songId);
    addToLikedItem.textContent = liked ? 'Remove from Liked Music' : 'Add to Liked Music';
    addToLikedItem.classList.remove('disabled');

    const rect = button.getBoundingClientRect();
    menu.style.left = rect.right + 'px';
    menu.style.top = rect.top + 'px';
    menu.classList.add('active');

    const menuWidth = menu.offsetWidth;
    const menuHeight = menu.offsetHeight;
    if (rect.right + menuWidth > window.innerWidth) {
        menu.style.left = (rect.left - menuWidth) + 'px';
    }
    if (rect.top + menuHeight > window.innerHeight) {
        menu.style.top = (rect.bottom - menuHeight) + 'px';
    }

    menu.addEventListener('click', e => {
        const item = e.target.closest('.card-context-menu-item');
        if (!item || item.classList.contains('disabled')) return;
        const action = item.dataset.action;
        
        if (action === 'go-to-album') {
            const href = item.dataset.href;
            if (href) {
                closeExpandedPlayer();
                navigateTo(href);
            }
        } else if (action === 'go-to-artist') {
            const href = item.dataset.href;
            if (href) {
                closeExpandedPlayer();
                navigateTo(href);
            }
        } else if (action === 'play-next') {
            currentQueue = [songId, ...currentQueue.filter(id => id !== songId)];
            currentSongIndex = 0;
            loadSong(song);
            playAudio();
            saveAudioState();
            renderQueuePanel();
        } else if (action === 'add-to-liked') {
            if (isLiked(songId)) {
                likedSongs = likedSongs.filter(id => id !== songId);
                delete likedSongsTimestamps[songId];
            } else {
                likedSongs.push(songId);
                likedSongsTimestamps[songId] = Date.now();
            }
            saveState();
            renderLibraryPage();
            if (currentPlaylist === 'liked') {
                renderPlaylistDetail('liked');
                const likedMusicPageEl = document.getElementById('likedMusicPage');
                if (likedMusicPageEl && likedMusicPageEl.classList.contains('active')) {
                    renderLikedMusicPage();
                }
            }
            updateLikeButton();
        } else if (action === 'add-to-playlist') {
            const name = prompt('Enter playlist name:');
            if (name && name.trim()) {
                const pl = userPlaylists.find(p => p.name === name.trim());
                if (pl) {
                    if (!pl.songs.includes(songId)) {
                        pl.songs.push(songId);
                        saveState();
                    }
                } else {
                    userPlaylists.push({ name: name.trim(), songs: [songId] });
                    saveState();
                }
                updatePlaylistUI();
            }
        } else if (action === 'download') {
            if (song && song.cover) {
                const a = document.createElement('a');
                a.href = song.cover;
                a.download = song.cover.split('/').pop();
                a.click();
            }
        } else if (action === 'dismiss-queue') {
            if (audio) {
                audio.pause();
                audio.currentTime = 0;
            }
            currentSong = null;
            currentPlaylist = null;
            currentQueue = [];
            currentSongIndex = 0;
            currentPlayingSongId = null;
            audio = null;
            currentAudioFile = null;
            stopSilentPlayback();
            isPlaying = false;
            shuffle = false;
            repeat = 0;
            originalQueue = [];

            playerTrackName.textContent = 'No track playing';
            playerTrackArtist.textContent = 'Select a song to play';
            playerImg.removeAttribute('src');
            playerImg.style.display = 'flex';
            playerImg.style.background = '';
            playerImg.style.alignItems = 'center';
            playerImg.style.justifyContent = 'center';
            playerImg.style.color = '';
            playerImg.textContent = '';
            currentTimeEl.textContent = '0:00';
            totalTimeEl.textContent = '0:00';
            progressFill.style.width = '0%';

            const expandedTotalTime = document.getElementById('expandedTotalTime');
            const expandedCurrentTime = document.getElementById('expandedCurrentTime');
            const expandedProgressFill = document.getElementById('expandedProgressFill');
            if (expandedTotalTime) expandedTotalTime.textContent = '0:00';
            if (expandedCurrentTime) expandedCurrentTime.textContent = '0:00';
            if (expandedProgressFill) expandedProgressFill.style.width = '0%';

            updatePlayerControlsState();
            updateRepeatUI();
            updateShuffleUI();
            updateLikeButton();
            saveAudioState();
            renderQueuePanel();
            closeExpandedPlayer();
        }
        
        menu.remove();
    });

    setTimeout(() => {
        const hideMenu = (e) => {
            if (!menu.contains(e.target)) {
                menu.remove();
                document.removeEventListener('click', hideMenu);
            }
        };
        document.addEventListener('click', hideMenu);
    }, 10);
}

function handleCardMenuAction(action) {
    if (!currentCardData) return;
    const { type, id, singleObj, artistObj } = currentCardData;

    if (action === 'play') {
        if (type === 'song') {
            if (id) {
                playSong(id);
            } else if (singleObj && artistObj) {
                const artistSongs = songs.filter(s => s.artist === artistObj.name);
                if (artistSongs.length > 0) {
                    currentPlaylist = null;
                    currentQueue = [artistSongs[0].id];
                    currentSongIndex = 0;
                    loadSong(artistSongs[0]);
                    playAudio();
                }
            }
        } else if (type === 'album') {
            playAlbum(id);
        }
    } else if (action === 'go-to-album') {
        const item = cardContextMenu.querySelector('[data-action="go-to-album"]');
        const href = item.dataset.href;
        if (href) {
            navigateTo(href);
        }
    } else if (action === 'go-to-artist') {
        const item = cardContextMenu.querySelector('[data-action="go-to-artist"]');
        const href = item.dataset.href;
        if (href) {
            navigateTo(href);
        }
    } else if (action === 'add-to-liked') {
        if (!currentCardData) return;
        const { type, id, singleObj } = currentCardData;
        let songId = id;
        if (type === 'song' && singleObj && !id) {
            songId = singleObj.id;
        }
        if (songId) {
            if (isLiked(songId)) {
                likedSongs = likedSongs.filter(id => id !== songId);
                delete likedSongsTimestamps[songId];
            } else {
                likedSongs.push(songId);
                likedSongsTimestamps[songId] = Date.now();
            }
            saveState();
            renderLibraryPage();
            if (currentPlaylist === 'liked') {
                renderPlaylistDetail('liked');
                const likedMusicPageEl = document.getElementById('likedMusicPage');
                if (likedMusicPageEl && likedMusicPageEl.classList.contains('active')) {
                    renderLikedMusicPage();
                }
            }
            updateLikeButton();
        }
    }
}

let playerContextMenu = null;

function createPlayerContextMenu() {
    if (playerContextMenu) return;
    playerContextMenu = document.createElement('div');
    playerContextMenu.className = 'player-context-menu';
    playerContextMenu.innerHTML = `
        <div class="context-menu-header">
            <div class="context-menu-header-title"></div>
            <div class="context-menu-header-artist"></div>
            <div class="context-menu-header-date"></div>
        </div>
        <div class="player-context-menu-item" data-action="play">Play Song</div>
        <div class="player-context-menu-item" data-action="go-to-album">Go to Album</div>
        <div class="player-context-menu-item" data-action="go-to-artist">Go to Artist</div>
        <div class="player-context-menu-item" data-action="play-next">Play Next</div>
        <div class="player-context-menu-item" data-action="add-to-queue">Add to Queue</div>
        <div class="player-context-menu-item" data-action="add-to-liked">Add to Liked Music</div>
        <div class="player-context-menu-item" data-action="add-to-playlist">Add to Playlist</div>
        <div class="player-context-menu-item" data-action="download">Download</div>
        <div class="player-context-menu-item dismiss" data-action="dismiss-queue">Dismiss Queue</div>
    `;
    document.body.appendChild(playerContextMenu);

    playerContextMenu.addEventListener('click', e => {
        const item = e.target.closest('.player-context-menu-item');
        if (!item || item.classList.contains('disabled')) return;
        const action = item.dataset.action;
        handlePlayerMenuAction(action);
        hidePlayerContextMenu();
    });
}

function showPlayerContextMenu(button) {
    if (!playerContextMenu) createPlayerContextMenu();
    const song = currentSong;
    if (!song) return;

    const playItem = playerContextMenu.querySelector('[data-action="play"]');
    const goToAlbumItem = playerContextMenu.querySelector('[data-action="go-to-album"]');
    const goToArtistItem = playerContextMenu.querySelector('[data-action="go-to-artist"]');
    const addToLikedItem = playerContextMenu.querySelector('[data-action="add-to-liked"]');

    playItem.textContent = 'Play Song';
    playItem.classList.remove('disabled');

    const album = albums.find(a => a.title === song.album);
    const albumPage = album ? albumPages[album.id] : null;
    if (albumPage) {
        goToAlbumItem.classList.remove('disabled');
        goToAlbumItem.dataset.href = albumPage;
    } else {
        goToAlbumItem.classList.add('disabled');
        goToAlbumItem.dataset.href = '';
    }

    const artist = getArtistForSong(song);
    const artistPage = artist ? artistPages[artist.id] : null;
    if (artistPage) {
        goToArtistItem.classList.remove('disabled');
        goToArtistItem.dataset.href = artistPage;
    } else {
        goToArtistItem.classList.add('disabled');
        goToArtistItem.dataset.href = '';
    }

    const liked = isLiked(song.id);
    addToLikedItem.textContent = liked ? 'Remove from Liked Music' : 'Add to Liked Music';
    addToLikedItem.classList.remove('disabled');

    const headerTitle = playerContextMenu.querySelector('.context-menu-header-title');
    const headerArtist = playerContextMenu.querySelector('.context-menu-header-artist');
    const headerDate = playerContextMenu.querySelector('.context-menu-header-date');
    if (headerTitle) headerTitle.textContent = song.title;
    if (headerArtist) headerArtist.textContent = song.artist;
    const dateAdded = likedSongsTimestamps[song.id] ? formatDateAdded(likedSongsTimestamps[song.id]) : '';
    if (headerDate) {
        headerDate.textContent = dateAdded;
        headerDate.style.display = dateAdded ? 'block' : 'none';
    }

    const rect = button.getBoundingClientRect();
    playerContextMenu.style.left = rect.right + 'px';
    playerContextMenu.style.top = rect.top + 'px';
    playerContextMenu.classList.add('active');

    const menuWidth = playerContextMenu.offsetWidth;
    const menuHeight = playerContextMenu.offsetHeight;
    if (rect.right + menuWidth > window.innerWidth) {
        playerContextMenu.style.left = (rect.left - menuWidth) + 'px';
    }
    if (rect.top + menuHeight > window.innerHeight) {
        playerContextMenu.style.top = (rect.bottom - menuHeight) + 'px';
    }
}

function hidePlayerContextMenu() {
    if (playerContextMenu) {
        playerContextMenu.classList.remove('active');
    }
}

function handlePlayerMenuAction(action) {
    const song = currentSong;
    if (!song && action !== 'dismiss-queue') return;

    if (action === 'play') {
        playSong(song.id);
    } else if (action === 'go-to-album') {
        const item = playerContextMenu.querySelector('[data-action="go-to-album"]');
        const href = item.dataset.href;
        if (href) {
            closeExpandedPlayer();
            navigateTo(href);
        }
    } else if (action === 'go-to-artist') {
        const item = playerContextMenu.querySelector('[data-action="go-to-artist"]');
        const href = item.dataset.href;
        if (href) {
            closeExpandedPlayer();
            navigateTo(href);
        }
    } else if (action === 'play-next') {
        if (song) {
            currentQueue = [song.id, ...currentQueue.filter(id => id !== song.id)];
            currentSongIndex = 0;
            loadSong(song);
            playAudio();
            saveAudioState();
            renderQueuePanel();
        }
    } else if (action === 'add-to-queue') {
        if (song && !currentQueue.includes(song.id)) {
            currentQueue.push(song.id);
            saveAudioState();
            renderQueuePanel();
        }
    } else if (action === 'add-to-liked') {
        if (song) {
            if (isLiked(song.id)) {
                likedSongs = likedSongs.filter(id => id !== song.id);
                delete likedSongsTimestamps[song.id];
            } else {
                likedSongs.push(song.id);
                likedSongsTimestamps[song.id] = Date.now();
            }
            saveState();
            updateLikeButton();
        }
    } else if (action === 'dismiss-queue') {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        currentSong = null;
        currentPlaylist = null;
        currentQueue = [];
        currentSongIndex = 0;
        currentPlayingSongId = null;
        audio = null;
        currentAudioFile = null;
        stopSilentPlayback();
        isPlaying = false;
        shuffle = false;
        repeat = 0;
        originalQueue = [];

        playerTrackName.textContent = 'No track playing';
        playerTrackArtist.textContent = 'Select a song to play';
        playerImg.removeAttribute('src');
        playerImg.style.display = 'flex';
        playerImg.style.background = '';
        playerImg.style.alignItems = 'center';
        playerImg.style.justifyContent = 'center';
        playerImg.style.color = '';
        playerImg.textContent = '';
        currentTimeEl.textContent = '0:00';
        totalTimeEl.textContent = '0:00';
        progressFill.style.width = '0%';

        const expandedTotalTime = document.getElementById('expandedTotalTime');
        const expandedCurrentTime = document.getElementById('expandedCurrentTime');
        const expandedProgressFill = document.getElementById('expandedProgressFill');
        if (expandedTotalTime) expandedTotalTime.textContent = '0:00';
        if (expandedCurrentTime) expandedCurrentTime.textContent = '0:00';
        if (expandedProgressFill) expandedProgressFill.style.width = '0%';

        updatePlayerControlsState();
        updateRepeatUI();
        updateShuffleUI();
        updateLikeButton();
        saveAudioState();
        renderQueuePanel();

        if (expandedPlayerOpen) {
            closeExpandedPlayer();
        }
    }
}

document.addEventListener('click', e => {
    if (playerContextMenu && !playerContextMenu.contains(e.target) && !e.target.closest('#playerMenuBtn') && !e.target.closest('#expandedPlayerMenu')) {
        hidePlayerContextMenu();
    }
});

document.addEventListener('contextmenu', e => {
    if (e.target.closest('#playerBar') || e.target.closest('.player-bar')) {
        e.preventDefault();
        const menuBtn = document.getElementById('playerMenuBtn');
        if (menuBtn) {
            showPlayerContextMenu(menuBtn);
        }
    }
});

const playerMenuBtn = document.getElementById('playerMenuBtn');
if (playerMenuBtn) {
    playerMenuBtn.addEventListener('click', e => {
        e.stopPropagation();
        showPlayerContextMenu(playerMenuBtn);
    });
}

const expandedPlayerMenu = document.getElementById('expandedPlayerMenu');
if (expandedPlayerMenu) {
    expandedPlayerMenu.addEventListener('click', e => {
        e.stopPropagation();
        showPlayerContextMenu(expandedPlayerMenu);
    });
}

document.addEventListener('click', e => {
    if (cardContextMenu && !cardContextMenu.contains(e.target) && !e.target.closest('.card-menu-btn')) {
        hideCardContextMenu();
    }
});

if (window.location.protocol === 'file:') {
    console.warn('Running from file:// protocol - AJAX navigation will not work.');
    console.warn('Please use a local server: npx serve .  or  python -m http.server 8000');
}

window.navigateTo = function(url) {
    if (!url) return;
    
    if (url.startsWith('#') || url.startsWith('http')) {
        window.location.hash = url;
        return;
    }
    
    if (url.includes('-Artist.html')) {
        const artistId = Object.keys(artistPages).find(key => artistPages[key] === url);
        if (artistId) {
            const artist = artists.find(a => a.id === parseInt(artistId));
            if (artist) {
                window.location.hash = `#/artist/${artist.name}`;
                return;
            }
        }
    }
    if (url.includes('-Album.html')) {
        const albumId = Object.keys(albumPages).find(key => albumPages[key] === url);
        if (albumId) {
            const album = albums.find(a => a.id === parseInt(albumId));
            if (album) {
                window.location.hash = `#/album/${album.title}`;
                return;
            }
        }
    }
    if (url.includes('search.html')) {
        const query = new URLSearchParams(url.split('?')[1]).get('q');
        if (query) {
            window.location.hash = `#/search?q=${encodeURIComponent(query)}`;
            return;
        }
    }
    
    window.location.hash = '#' + url;
};

function reinitializeAfterNavigation() {
    const newNavItems = document.querySelectorAll('.nav-item[data-page]');
    const newMenuBtn = document.getElementById('menuBtn');
    const newCloseSidebar = document.getElementById('closeSidebar');
    const newOverlay = document.getElementById('overlay');
    const newSearchInput = document.getElementById('searchInput');
    const newSearchResults = document.getElementById('searchResults');
    const newPlaylistContainer = document.getElementById('playlistContainer');
    const newCreatePlaylistBtn = document.getElementById('createPlaylistBtn');
    const newBackToLibrary = document.getElementById('backToLibrary');
    const newPlayPauseBtn = document.getElementById('playPauseBtn');
    const newPrevBtn = document.getElementById('prevBtn');
    const newNextBtn = document.getElementById('nextBtn');
    const newProgressBar = document.getElementById('progressBar');
    const newLikeBtn = document.getElementById('likeBtn');
    const newShuffleBtn = document.getElementById('shuffleBtn');
    const newRepeatBtn = document.getElementById('repeatBtn');
    const newMobilePlayPauseBtn = document.getElementById('mobilePlayPauseBtn');
    
    if (newMenuBtn) newMenuBtn.addEventListener('click', toggleSidebar);
    if (newCloseSidebar) newCloseSidebar.addEventListener('click', closeSidebarFns);
    if (newOverlay) newOverlay.addEventListener('click', closeSidebarFns);
    
    if (newPlayPauseBtn) {
        newPlayPauseBtn.addEventListener('click', () => {
            if (!currentSong) return;
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
    }
    if (newMobilePlayPauseBtn) {
        newMobilePlayPauseBtn.addEventListener('click', () => {
            if (!currentSong) return;
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        });
    }
    if (newPrevBtn) {
        newPrevBtn.addEventListener('click', () => {
            if (!currentSong) return;
            playPrev();
        });
    }
    if (newNextBtn) {
        newNextBtn.addEventListener('click', () => {
            if (!currentSong) return;
            playNext();
        });
    }
    if (newProgressBar) {
        newProgressBar.addEventListener('click', e => {
            if (!currentSong) return;
            const rect = newProgressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            if (audio && audio.duration) {
                audio.currentTime = percent * audio.duration;
            } else if (silentPlayback.isActive || (!audio && currentSong)) {
                const totalSeconds = getDurationSeconds(currentSong.duration);
                seekSilentPlayback(percent * totalSeconds);
            }
        });
    }
    if (newLikeBtn) {
        newLikeBtn.addEventListener('click', () => {
            if (!currentSong) return;
            const song = getCurrentSong();
            if (song) {
                toggleLike(song.id);
                updateLikeButton();
            }
        });
    }
    if (newShuffleBtn) {
        newShuffleBtn.addEventListener('click', () => {
            if (!currentSong) return;
            shuffle = !shuffle;
            if (shuffle) {
                applyShuffleToQueue();
            } else {
                restoreQueueFromOriginal();
            }
            updateShuffleUI();
            renderQueuePanel();
            saveAudioState();
        });
    }
    if (newRepeatBtn) {
        newRepeatBtn.addEventListener('click', () => {
            if (!currentSong) return;
            repeat = (repeat + 1) % 3;
            updateRepeatUI();
            saveAudioState();
        });
    }
    
    const newPlayerMenuBtn = document.getElementById('playerMenuBtn');
    if (newPlayerMenuBtn) {
        newPlayerMenuBtn.addEventListener('click', e => {
            e.stopPropagation();
            showPlayerContextMenu(newPlayerMenuBtn);
        });
    }
    
    if (newSearchInput) {
        newSearchInput.addEventListener('input', e => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                if (newSearchResults) newSearchResults.classList.remove('active');
                return;
            }
            
            const matchedSongs = songs.filter(s => s.title.toLowerCase().includes(query) || s.artist.toLowerCase().includes(query));
            const matchedAlbums = albums.filter(a => a.title.toLowerCase().includes(query) || a.artist.toLowerCase().includes(query));
            const matchedArtists = artists.filter(a => a.name.toLowerCase().includes(query));
            
            let html = '';
            matchedArtists.forEach(artist => {
                const artistPage = artistPages[artist.id];
                const action = artistPage ? `navigateTo('${artistPage}')` : `alert('Artist page coming soon!')`;
                const imgContent = artist.image
                    ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;">`
                    : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2);
                html += `
                    <div class="search-result-item" onclick="${action}; document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                        <div class="search-result-img" style="background: linear-gradient(135deg, ${artist.color}, #555); border-radius: 50%; overflow: hidden;">${imgContent}</div>
                        <div class="search-result-info">
                            <div class="search-result-name">${artist.name}</div>
                            <div class="search-result-sub">${artist.type}</div>
                        </div>
                        <span class="search-result-type">Artist</span>
                    </div>
                `;
            });
    uniqueSongs.forEach(song => {
                const cover = getAlbumCoverForSong(song);
                const coverHtml = cover
                    ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                    : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${song.title.substring(0, 2).toUpperCase()}</div>`;
                html += `
                    <div class="search-result-item" onclick="playSong(${song.id}); document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                        <div class="search-result-img">${coverHtml}</div>
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
                const action = albumPage ? `navigateTo('${albumPage}')` : `playAlbum(${album.id})`;
                const coverHtml = album.image
                    ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                    : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
                html += `
                    <div class="search-result-item" onclick="${action}; document.getElementById('searchInput').value = ''; document.getElementById('searchResults').classList.remove('active');">
                        <div class="search-result-img">${coverHtml}</div>
                        <div class="search-result-info">
                            <div class="search-result-name">${album.title}</div>
                            <div class="search-result-sub">${album.artist}</div>
                        </div>
                        <span class="search-result-type">${album.type === 'ep' ? 'EP' : 'Album'}</span>
                    </div>
                `;
            });
            
            if (!html) {
                html = '<div style="padding: 16px; color: var(--text-muted); text-align: center;">No results found</div>';
            }
            
            if (newSearchResults) {
                newSearchResults.innerHTML = html;
                newSearchResults.classList.add('active');
            }
        });
        
        newSearchInput.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                const query = newSearchInput.value.trim();
                if (query) {
                    navigateTo(`search.html?q=${encodeURIComponent(query)}`);
                }
            }
        });
    }
    
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-container')) {
            if (newSearchResults) newSearchResults.classList.remove('active');
        }
    });
    
    if (newPlaylistContainer) {
        const existingItems = newPlaylistContainer.querySelectorAll('.playlist-item:not([data-playlist="liked"])');
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
            newPlaylistContainer.appendChild(a);
        });
    }
    
    if (newCreatePlaylistBtn) {
        newCreatePlaylistBtn.addEventListener('click', () => {
            const name = prompt('Enter playlist name:');
            if (name && name.trim()) {
                userPlaylists.push({ name: name.trim(), songs: [] });
                saveState();
                updatePlaylistUI();
                renderLibraryPage();
            }
        });
    }
    
    if (newBackToLibrary) {
        newBackToLibrary.addEventListener('click', () => {
            currentPlaylist = null;
            showPage('library');
        });
    }
    
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
    
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'discover.html') {
        renderDiscoverPage();
    } else if (currentPage === 'index.html' || currentPage === '') {
        renderHomePage();
    } else if (currentPage === 'search.html') {
        if (typeof renderSearchPage === 'function') {
            renderSearchPage();
        }
    } else if (currentPage.endsWith('-Album.html')) {
        renderAlbumPage();
    } else if (currentPage.endsWith('-Artist.html')) {
        renderArtistPage();
    }
    
    updatePlayerControlsState();
    updateRepeatUI();
}

function renderAlbumPage() {
    const albumId = window.albumPageId || 1;
    const album = albums.find(a => a.id === albumId);
    if (!album) return;
    
    const albumSongs = getAlbumSongs(albumId);
    const container = document.getElementById('albumDetail');
    if (!container) return;
    
    const totalDuration = getTotalDuration(albumSongs);
    const artistObj = artists.find(a => a.name === album.artist);
    const artistPage = artistObj ? artistPages[artistObj.id] : null;
    const albumImage = album.image || 'AfterHours-Album.webp';
    const currentPlayingSongId = window.albumCurrentPlayingId;
    const mobile = isMobile();
    
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
                ${mobile ? `
                <div class="album-header-actions">
                    <button class="album-action-btn" onclick="toggleAlbumLike(${album.id})">
                        ${likedAlbums && likedAlbums.includes(album.id) 
                            ? `<svg viewBox="0 0 24 24" fill="#1a5c30" style="color:#1a5c30"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
                            : `<svg viewBox="0 0 24 24" fill="none" stroke="#1a5c30" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
                        }
                    </button>
                    <button class="album-action-btn album-play-btn" onclick="playAlbum(${album.id})">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>
                    <button class="album-action-btn album-shuffle-btn" onclick="shuffleAlbum(${album.id})">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"/></svg>
                    </button>
                </div>
                ` : ''}
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
        html += `
            <div class="album-song-row ${isPlaying ? 'playing' : ''}" data-song-id="${song.id}" onclick="playSong(${song.id}, 'album:${albumId}')">
                <div class="album-song-num">
                    ${isPlaying ? '<svg class="playing-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>' : index + 1}
                </div>
                <div class="album-song-title">
                    <span class="title-text">${song.title}</span>
                    <span class="song-artist">${mobile ? '<br>' : ' • '}${song.artist}</span>
                </div>
                <div class="album-song-duration">
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
    
    if (mobile) {
        addLongPressListeners();
    }
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
    if (hours > 0) result += `${hours} hr `;
    if (mins > 0) result += `${mins} min${mins > 1 ? 's' : ''} `;
    if (secs > 0 || (hours === 0 && mins === 0)) result += `${secs} sec${secs > 1 ? 's' : ''}`;
    return result.trim();
}

function renderArtistPage() {
    const artistId = window.artistPageId || 1;
    const artist = artists.find(a => a.id === artistId);
    if (!artist) return;
    
    const container = document.getElementById('artistDetail');
    if (!container) return;
    
    const artistSongs = songs.filter(s => s.artist === artist.name);
    const artistAlbums = albums.filter(a => a.artist === artist.name);
    const currentPlayingSongId = window.artistCurrentPlayingId;
    const mobile = isMobile();
    
    let html = `
        <div class="artist-header">
            <div class="artist-header-img" style="background: linear-gradient(135deg, ${artist.color}, #555);">
                ${artist.image ? `<img src="${artist.image}" alt="${artist.name}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">` : artist.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
            </div>
            <div class="artist-header-info">
                <div class="artist-header-name">${artist.name}</div>
                <div class="artist-header-meta">${artistSongs.length} songs</div>
            </div>
        </div>
        <h2 class="section-title">Popular</h2>
    `;
    
    if (mobile) {
        html += `
            <div class="horizontal-scroll">
                <button class="scroll-btn scroll-left" data-target="artistPopularSongs" data-dir="left">&lt;</button>
                <div class="scroll-container" id="artistPopularSongs">
        `;
        
        artistSongs.slice(0, 10).forEach((song, index) => {
            const isPlaying = song.id === currentPlayingSongId;
            const liked = isLiked(song.id);
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.75rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            
            html += `
                <div class="artist-song-row ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id})" style="flex: 0 0 280px; min-width: 280px;">
                    <div class="artist-song-num">${index + 1}</div>
                    <div class="artist-song-img">${coverHtml}</div>
                    <div class="artist-song-info">
                        <div class="artist-song-title">${song.title}</div>
                        <div class="artist-song-album">${song.album}</div>
                    </div>
                    <span class="like-icon ${liked ? 'liked' : ''}" onclick="toggleLike(${song.id}); event.stopPropagation();">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? 'var(--accent)' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </span>
                    <span class="artist-song-duration">${song.duration}</span>
                    <span class="song-menu" onclick="event.stopPropagation(); showCardContextMenu(this, 'song', ${song.id});">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><circle cx="6" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="18" cy="12" r="2"/></svg>
                    </span>
                </div>
            `;
        });
        
        html += `
                </div>
                <button class="scroll-btn scroll-right" data-target="artistPopularSongs" data-dir="right">&gt;</button>
            </div>
        `;
    } else {
        html += `<div class="artist-songs">`;
        
        artistSongs.slice(0, 10).forEach((song, index) => {
            const isPlaying = song.id === currentPlayingSongId;
            const liked = isLiked(song.id);
            const cover = getAlbumCoverForSong(song);
            const coverHtml = cover
                ? `<img src="${cover}" alt="${song.album}" style="width:100%;height:100%;object-fit:cover;border-radius:4px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${song.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:4px;color:#fff;font-weight:600;font-size:0.75rem;">${song.title.substring(0, 2).toUpperCase()}</div>`;
            
            html += `
                <div class="artist-song-row ${isPlaying ? 'playing' : ''}" onclick="playSong(${song.id})">
                    <div class="artist-song-num">${index + 1}</div>
                    <div class="artist-song-img">${coverHtml}</div>
                    <div class="artist-song-info">
                        <div class="artist-song-title">${song.title}</div>
                        <div class="artist-song-album">${song.album}</div>
                    </div>
                    <span class="like-icon ${liked ? 'liked' : ''}" onclick="toggleLike(${song.id}); event.stopPropagation();">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="${liked ? 'var(--accent)' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                    </span>
                    <span class="artist-song-duration">${song.duration}</span>
                </div>
            `;
        });
        
        html += '</div>';
    }
    
    if (artistAlbums.length > 0) {
        html += '<h2 class="section-title">Albums</h2><div class="artist-albums">';
        artistAlbums.forEach(album => {
            const albumPage = albumPages[album.id];
            const coverHtml = album.image
                ? `<img src="${album.image}" alt="${album.title}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;">`
                : `<div style="width:100%;height:100%;background: linear-gradient(135deg, ${album.color}, #333);display:flex;align-items:center;justify-content:center;border-radius:6px;color:#fff;font-weight:600;">${album.title.substring(0, 2).toUpperCase()}</div>`;
            
            html += `
                <div class="card-wrapper" onclick="${albumPage ? `navigateTo('${albumPage}')` : `playAlbum(${album.id})`}">
                    <div class="card">
                        <div class="card-img">${coverHtml}</div>
                        <div class="card-title">${album.title}</div>
                        <div class="card-subtitle">${album.year}</div>
                        <button class="card-play-btn" onclick="event.stopPropagation(); ${albumPage ? `navigateTo('${albumPage}')` : `playAlbum(${album.id})`}">&#9654;</button>
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }
    
    container.innerHTML = html;
    
    if (mobile) {
        initScrollButtons();
        addLongPressListeners();
    }
}

window.addEventListener('popstate', e => {
    handleHashChange();
});

window.playSong = playSong;
window.playAlbum = playAlbum;
window.playLikedSongs = playLikedSongs;
window.shuffleLikedSongs = shuffleLikedSongs;
window.shuffleAlbum = shuffleAlbum;
window.showCardContextMenu = showCardContextMenu;
window.hideCardContextMenu = hideCardContextMenu;
window.navigateTo = navigateTo;
window.renderLikedAlbumsPage = renderLikedAlbumsPage;

if (!window.location.hash || window.location.hash === '#') {
    if (window.artistPageId) {
        const artist = artists.find(a => a.id === window.artistPageId);
        if (artist) {
            window.location.hash = `#/artist/${artist.name}`;
        } else {
            window.location.hash = '#/home';
        }
    } else if (window.albumPageId) {
        const album = albums.find(a => a.id === window.albumPageId);
        if (album) {
            window.location.hash = `#/album/${album.title}`;
        } else {
            window.location.hash = '#/home';
        }
    } else {
        window.location.hash = '#/home';
    }
}
handleHashChange();

if (playlistContainer) {
    updatePlaylistUI();
}

document.querySelectorAll('.playlist-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        const name = item.dataset.playlist;
        if (name === 'liked') {
            window.location.hash = '#/liked-music';
        } else if (name === 'liked-albums') {
            window.location.hash = '#/liked-albums';
        } else if (name) {
            currentPlaylist = name;
            window.location.hash = `#/playlist/${name}`;
        }
    });
});

const nowPlaying = document.getElementById('nowPlaying');
if (nowPlaying) {
    nowPlaying.addEventListener('click', e => {
        if (e.target.closest('.ctrl-btn')) return;
        if (e.target.closest('#playPauseBtn')) return;
        toggleExpandedPlayer();
    });
}

const playerBar = document.getElementById('playerBar');
if (playerBar) {
    playerBar.addEventListener('click', e => {
        if (e.target.closest('.ctrl-btn')) return;
        if (e.target.closest('#playPauseBtn')) return;
        if (e.target.closest('#nowPlaying')) return;
        if (e.target.closest('.progress-container')) return;
        if (e.target.closest('.player-controls')) return;
        toggleExpandedPlayer();
    });
}

const expandedPlayerToggle = document.getElementById('expandedPlayerToggle');
if (expandedPlayerToggle) {
    expandedPlayerToggle.addEventListener('click', toggleExpandedSidebar);
}

const expandedPlayerClose = document.getElementById('expandedPlayerClose');
if (expandedPlayerClose) {
    expandedPlayerClose.addEventListener('click', closeExpandedPlayer);
}

document.querySelectorAll('.sidebar-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        setSidebarTab(tab.dataset.tab);
    });
});

const expandedPlayPauseBtn = document.getElementById('expandedPlayPauseBtn');
if (expandedPlayPauseBtn) {
    expandedPlayPauseBtn.addEventListener('click', () => {
        if (!currentSong) return;
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });
}

const expandedPrevBtn = document.getElementById('expandedPrevBtn');
if (expandedPrevBtn) {
    expandedPrevBtn.addEventListener('click', () => {
        playPrev();
    });
}

const expandedNextBtn = document.getElementById('expandedNextBtn');
if (expandedNextBtn) {
    expandedNextBtn.addEventListener('click', () => {
        playNext();
    });
}

const expandedLikeBtn = document.getElementById('expandedLikeBtn');
if (expandedLikeBtn) {
    expandedLikeBtn.addEventListener('click', () => {
        if (!currentSong) return;
        toggleLike(currentSong.id);
        updateLikeButton();
        if (expandedPlayerOpen) renderExpandedPlayer();
    });
}

const expandedShuffleBtn = document.getElementById('expandedShuffleBtn');
if (expandedShuffleBtn) {
    expandedShuffleBtn.addEventListener('click', () => {
        if (!currentSong) return;
        shuffle = !shuffle;
        if (shuffle) {
            applyShuffleToQueue();
        } else {
            restoreQueueFromOriginal();
        }
        updateShuffleUI();
        renderQueuePanel();
        saveAudioState();
    });
}

const expandedRepeatBtn = document.getElementById('expandedRepeatBtn');
if (expandedRepeatBtn) {
    expandedRepeatBtn.addEventListener('click', () => {
        repeat = (repeat + 1) % 3;
        updateRepeatUI();
        saveAudioState();
    });
}

const expandedProgressBar = document.getElementById('expandedProgressBar');
if (expandedProgressBar) {
    expandedProgressBar.addEventListener('click', e => {
        if (!currentSong) return;
        const rect = expandedProgressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audio && audio.duration) {
            audio.currentTime = percent * audio.duration;
        } else if (silentPlayback.isActive || (!audio && currentSong)) {
            const totalSeconds = getDurationSeconds(currentSong.duration);
            seekSilentPlayback(percent * totalSeconds);
        }
    });
}

updatePlayerControlsState();
updateRepeatUI();

onSongChange = function (song) {
    if (document.getElementById('albumDetail')) {
        window.albumCurrentPlayingId = song.id;
        renderAlbumPage();
    }
    if (document.getElementById('artistDetail')) {
        window.artistCurrentPlayingId = song.id;
        renderArtistPage();
    }
    if (expandedPlayerOpen) {
        renderExpandedPlayer();
    }
};

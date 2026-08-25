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
    { id: 40, title: "seasons", artist: "wave to earth", album: "0.1 flaws and all.", duration: "4:15", cover: null, color: "#7eb8da" },
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
    { id: 110, title: "Runway Groove", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "3:30", cover: null, color: "#d4a574" },
    { id: 111, title: "Midnight in Montmartre", artist: "BrownHouse", album: "Jazz Hiphop vol.12", duration: "2:24", cover: null, color: "#d4a574" },
    { id: 112, title: "Central Park", artist: "BrownHouse", album: "Jazz Hiphop vol.11", duration: "3:03", cover: null, color: "#d4a574" },
    { id: 113, title: "Final Applause", artist: "BrownHouse", album: "Jazz Hiphop vol.11", duration: "3:04", cover: null, color: "#d4a574" },
    { id: 114, title: "Drive Till Dawn", artist: "BrownHouse", album: "Jazz Hiphop vol.11", duration: "2:33", cover: null, color: "#d4a574" },
    { id: 115, title: "Soundcheck", artist: "BrownHouse", album: "Jazz Hiphop vol.10", duration: "2:40", cover: null, color: "#d4a574" },
    { id: 116, title: "Frosted Lights", artist: "BrownHouse", album: "Jazz Hiphop vol.10", duration: "2:29", cover: null, color: "#d4a574" },
    { id: 117, title: "Morning Blend", artist: "BrownHouse", album: "Jazz Hiphop vol.10", duration: "3:57", cover: null, color: "#d4a574" },
    { id: 118, title: "Park Tempo", artist: "BrownHouse", album: "BrownHouse", duration: "3:22", cover: null, color: "#d4a574" },
    { id: 119, title: "Sunlight Cream", artist: "BrownHouse", album: "BrownHouse", duration: "3:38", cover: null, color: "#d4a574" },
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
    { id: 23, title: "0.1 flaws and all.", artist: "wave to earth", year: "2023", type: "album", color: "#7eb8da", songs: [38, 39, 40, 42, 96, 97, 100, 101] },
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
    { id: 12, title: "Jazz Hiphop vol.12", artist: "BrownHouse", year: "2025", color: "#d4a574", image: "FinalApplause-Album.jpeg", songs: [66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 110, 111] },
    { id: 33, title: "Jazz Hiphop vol.11", artist: "BrownHouse", year: "2024", color: "#d4a574", songs: [112, 113, 114] },
    { id: 34, title: "Jazz Hiphop vol.10", artist: "BrownHouse", year: "2023", color: "#d4a574", songs: [115, 116, 117] },
    { id: 35, title: "BrownHouse", artist: "BrownHouse", year: "2022", color: "#d4a574", songs: [118, 119, 120] },
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
    if (artistPage) div.addEventListener('click', () => { window.location.href = artistPage; });
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
            31: 'EverlastingDawnAtNight-Song.mp3',
            99: 'Surf-Song.mp3',
            59: 'OtroAtardecer-Song.mp3',
            69: 'FinalApplause-Song.mp3'
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
        const action = artistPage ? `window.location.href='${artistPage}'` : `alert('Artist page coming soon!')`;
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
            ? `window.location.href='${artistPages[artists.find(a => a.name === item.artistName).id]}'; ${closeResults}`
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
            window.location.href = `search.html?q=${encodeURIComponent(query)}`;
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

let cardContextMenu = null;
let currentCardData = null;

function createCardContextMenu() {
    if (cardContextMenu) return;
    cardContextMenu = document.createElement('div');
    cardContextMenu.className = 'card-context-menu';
    cardContextMenu.innerHTML = `
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

        const artist = artists.find(a => a.name === targetSong.artist);
        const artistPage = artist ? artistPages[artist.id] : null;
        if (artistPage) {
            goToArtistItem.classList.remove('disabled');
            goToArtistItem.dataset.href = artistPage;
        } else {
            goToArtistItem.classList.add('disabled');
            goToArtistItem.dataset.href = '';
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

        const artist = artists.find(a => a.name === album.artist);
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
                    currentPlaylist = 'artist';
                    currentQueue = artistSongs.map(s => s.id);
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
            window.location.href = href;
        }
    } else if (action === 'go-to-artist') {
        const item = cardContextMenu.querySelector('[data-action="go-to-artist"]');
        const href = item.dataset.href;
        if (href) {
            window.location.href = href;
        }
    }
}

document.addEventListener('click', e => {
    if (cardContextMenu && !cardContextMenu.contains(e.target) && !e.target.closest('.card-menu-btn')) {
        hideCardContextMenu();
    }
});

window.playSong = playSong;
window.playAlbum = playAlbum;
window.showCardContextMenu = showCardContextMenu;
window.hideCardContextMenu = hideCardContextMenu;

const isSearchPage = window.location.pathname.includes('search.html');

if (!isSearchPage) {
    if (discoverPage) {
        renderDiscoverPage();
    } else if (homePage) {
        renderHomePage();
    }
    if (playlistContainer) {
        updatePlaylistUI();
    }
}

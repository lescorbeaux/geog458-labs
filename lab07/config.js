// Lab 7: Write your geographic story here.
// Configuration structure inspired by https://github.com/mapbox/storytelling
var config = {
    accessToken: 'pk.eyJ1IjoianlhbmcxMjAiLCJhIjoiY211enVzaHdoMDB3NDJ4b3ppYjQxMmpheSJ9.GYRscFDXc97_IWa1Cf9skg', // Use your own public pk. token.
    style: 'mapbox://styles/mapbox/streets-v12',
    theme: 'light', // light or dark
    showMarkers: true,
    markerColor: '#147d72',
    transitionDuration: 2000, // Milliseconds; try 4000 for a slower flight.
    title: 'Tourist Guide to Père Lachaise Cemetery ',
    subtitle: 'A virtural journey through history, culture, and memory of Paris\'s most famous cemetery.',
    byline: 'Margaret Yang · GEOG 458',
    footer: 'Margaret Yang | GEOG 458 | <a href="https://pere-lachaise.com" target="_blank">Cimetière du Père Lachaise</a>',
    // The Seattle coordinates below are examples. Replace them for your own story.
    chapters: [
        {
            id: 'intro',
            label: 'Introduction',
            alignment: 'left', // left, right, center, or full
            title: '01. Welcome to Père Lachaise Cemetery',
            image: './images/Entrée_principale_Cimetière_Père_Lachaise.jpg', // Optional local path, e.g. ./images/context.jpg
            imageAlt: 'Main entrance of Père Lachaise Cemetery', // Describe the image when you add one.
            description: 'Père Lachaise Cemetery is located in the 20th arrondissement of Paris, France, is the largest cemetery in the city and one of its most famous historical landmarks. Today, the cemetery attracts visitors from around the world who come to explore its history and cultural heritage.\nIn this virtual tour, we will visit the graves of five famous individuals: Jim Morrison, Oscar Wilde, Édith Piaf, Frédéric Chopin, and Molière. We will learn about their lives, their contributions to the arts, and the stories behind their graves, discovering how different aspects of cultural history come together within Père Lachaise Cemetery.\nSource: <a href="https://commons.wikimedia.org/wiki/File:Entrée_principale_Cimetière_Père_Lachaise_Paris_9.jpg" target="_blank">Chabe01</a>, CC BY-SA 4.0, via Wikimedia Commons.',
            location: {
                center: [2.393178, 48.861636], // [longitude, latitude]
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo', // flyTo, easeTo, or jumpTo (Step 2)
            onChapterEnter: [], // Optional existing-layer opacity changes (Step 2)
            onChapterExit: []
        },
        {
            id: 'place-one',
            label: 'Jim Morrison', // Jim Morrison
            alignment: 'right',
            title: '02. Jim Morrison\'s Grave',
            image: './images/Jim_Morisson_Tomb.jpg',
            imageAlt: 'Jim Morrison\'s Grave with flowers and tributes',
            description: 'Our first stop is the grave of Jim Morrison, the lead singer of the iconic rock band The Doors. Morrison was known for his poetic lyrics, charismatic stage presence, and rebellious spirit. He moved to Paris in 1971 and passed away later that year at the age of 27. Although he was American, he was buried in Division 6 of the cemetery. Morrison\'s grave is relatively simple, but it continues to attract music fans from around the world to pay tributes to his music legacy.\nSource: <a href="https://commons.wikimedia.org/wiki/File:Jim_Morisson_Tomb.jpg" target="_blank">Tibo77</a>, CC BY-SA 3.0, via Wikimedia Commons.',
            location: {
                center: [2.3937663, 48.8592898],
                zoom: 18,
                pitch: 45,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place-two',
            label: 'Oscar Wilde', // Oscar Wilde
            alignment: 'left',
            title: '03. Oscar Wilde\'s Grave',
            image: './images/Oscar_Wilde_Tomb.jpg',
            imageAlt: 'Oscar Wilde\'s Grave with a winged sculpture and lipstick kisses',
            description: 'Our next stop is the grave of Oscar Wilde, the famous Irish writer and playwright best known for his novel "The Picture of Dorian Gray" and his play "The Importance of Being Earnest". Wilde is known for his wit and his criticism of Victorian society. He spent his final years in Paris and passed away in 1900. He was buried in Division 89.\nUnlike Jim Morrison\'s simple grave, Wilde\'s grave features a winged sculpture designed by Jacob Epstein. Over the years, visitors developed a tradition of leaving lipstick kisses on the monument as a tribute to Wilde. However, a glass barrier was installed around the tomb in 2011 to protect the monument from damage.\nSource: <a href="https://en.wikipedia.org/wiki/File:Tomb_of_Oscar_Wilde,_Père_Lachaise_cemetery,_Paris,_France.jpg" target="_blank">Agateller</a>, CC0 1.0 Universal, via Wikipedia.',
            location: {
                center: [2.3979290, 48.8618000],
                zoom: 18,
                pitch: 50,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place-three',
            label: 'Édith Piaf', // Édith Piaf
            alignment: 'right',
            title: '04. Édith Piaf\'s Grave',
            image: './images/Edith_Piaf_Tomb.jpg',
            imageAlt: 'Édith Piaf\'s Grave with flowers',
            description: 'Our next stop is the grave of Édith Piaf, one of the most famous singers in French music history. Born in Paris in 1915, Piaf became internationally famous for her emotional performances and iconic songs such as "La Vie en Rose" and "Non, je ne regrette rien". Her music often reflected themes of love, loss and resilience, which having the nickname "The Little Sparrow". Piaf passed away in 1963 and was buried in Division 97. Piaf\'s grave is quite simple, featuring a polished black stone monument, with vivid flowers and tributes left by fans.\nSource: <a href="https://commons.wikimedia.org/wiki/File:Edith_Piafs_Grave,_Père_Lachaise_Cemetery,_Paris,_France_2004-03-14_n1.jpg" target="_blank">Jim Linwood</a>, CC BY 2.0, via Wikimedia Commons.',
            location: {
                center: [2.398915, 48.859682],
                zoom: 18,
                pitch: 45,
                bearing: 40
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place-four',
            label: 'Frédéric Chopin', // Frédéric Chopin
            alignment: 'left',
            title: '05. Frédéric Chopin\'s Grave',
            image: './images/Frederic_Chopin_Tomb.JPG',
            imageAlt: 'Frédéric Chopin\'s Grave with a statue of Euterpe, the muse of music',
            description: 'Our next stop is the grave of Frédéric Chopin, a Polish composer and pianist widely regarded as one of the most influential musicians of the Romantic era. Chopin moved to Paris in 1831, where he spent much of his career composing and performing. He is best known for his expressive piano composition, including his nocturnes, études, and polonaises. While Édith Piaf became one of the most iconic voices in French music, Chopin left a lasting legacy on classical piano music.\nChopin passed away in 1849 and was buried in Division 11. His grave features a marble sculpture of Euterpe, the Greek muse of music, mourning over a broken lyre, with her head lowered in sorrow, symbolizing the loss of a great musician.\nSource: <a href="https://commons.wikimedia.org/wiki/File:Pere-Lachaise_Chopin_grave.jpg" target="_blank">Marcin L.</a>, Copyrighted Free Use, via Wikimedia Commons.',
            location: {
                center: [2.39263, 48.861636],
                zoom: 18,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'place-five',
            label: 'Molière', // Molière
            alignment: 'right',
            title: '06. Molière\'s Grave',
            image: './images/Moliere_Tomb.JPG',
            imageAlt: 'Molière\'s Grave',
            description: 'Our final stop is the tomb of Molière, one of the most influencial playwrights and actors in French literary history. Molière was famous for his satircial comedies, including "Tartuffe", and "The Misanthrope". His plays often criticed social hypocrisy, religious pretension, and human behavior through humor and satire. Molière buried in Division 25. Although he died in 1673, more than a century before the cemetery opened, his remains were transferred to Père Lachaise in 1817. Today, his tomb stands alongside fellow French writer Jean de La Fontaine, making this area a popular destination for literature and theater enthusiasts.\nSource: <a href="https://commons.wikimedia.org/wiki/File:MOLIERE_PERE_LACHAISE.JPG" target="_blank">Yvir255</a>, CC BY-SA 3.0, via Wikimedia Commons.',
            location: {
                center: [2.395272, 48.860505],
                zoom: 18,
                pitch: 45,
                bearing: -20
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'conclusion',
            label: 'Conclusion',
            alignment: 'center',
            title: '07. Exploring Père Lachaise: Beyond the Graves',
            image: '',
            imageAlt: '',
            description: 'As our virtual tour comes to an end, we have explored the graves of five famous individuals from different periods and artistic backgrounds. From rock music and classical compositions to literature and theater, each stop offers a different perspective on the cultural history made within Père Lachaise Cemetery. These graves together show how the cemetery brings together cultural figures from different countries and historical periods within a single place.\nOf course, these five graves represent only a small part of what Père Lachaise has to offer. Beyond the graves explored in this tour, countless other monuments and graves are waiting to be discovered, each with its own story to tell. It\'s up to us, the visitors, to continue exploring the cemetery\'s paths and discover more stories along the way.',
            location: {
                center: [2.395, 48.860],
                zoom: 12.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
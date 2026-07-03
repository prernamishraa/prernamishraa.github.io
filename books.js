// ————————————————————————————————————————————
// Prerna's bookshelf
// To add a book, copy any block and edit the fields.
// shelf: "currently-reading" | "favorites" | "recently-read"
// image: cover URL (Goodreads or Open Library, or any image URL)
// rating (optional, 1–5) and year (optional, e.g. "'26" or "sep '25")
//   → both show below the cover for recently-read books
// ————————————————————————————————————————————
window.BOOKS = [
  // ─── currently reading ───
  {
    shelf: 'currently-reading',
    title: 'The Vegetarian',
    author: 'Han Kang',
    link: 'https://www.goodreads.com/book/show/25489025-the-vegetarian',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1728661771l/25489025._SX98_.jpg'
  },

  // ─── favorites ───
  {
    shelf: 'favorites',
    title: 'The God of Small Things',
    author: 'Arundhati Roy',
    link: 'https://www.goodreads.com/book/show/9777.The_God_of_Small_Things',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1767305433l/9777._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'Mother Mary Comes to Me',
    author: 'Arundhati Roy',
    link: 'https://www.goodreads.com/book/show/224004055-mother-mary-comes-to-me',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1767714443i/224004055.jpg'
  },
  {
    shelf: 'favorites',
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    link: 'https://www.goodreads.com/book/show/22822858-a-little-life',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1446469353l/22822858._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'A Thousand Splendid Suns',
    author: 'Khaled Hosseini',
    link: 'https://www.goodreads.com/book/show/128029.A_Thousand_Splendid_Suns',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1655336738l/128029._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    link: 'https://www.goodreads.com/book/show/6185.Wuthering_Heights',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1388212715l/6185._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    link: 'https://www.goodreads.com/book/show/32620332-the-seven-husbands-of-evelyn-hugo',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1664458703l/32620332._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'All the Bright Places',
    author: 'Jennifer Niven',
    link: 'https://www.goodreads.com/book/show/18460392-all-the-bright-places',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1404331702l/18460392._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'Tuesdays with Morrie',
    author: 'Mitch Albom',
    link: 'https://www.goodreads.com/book/show/6900.Tuesdays_with_Morrie',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1423763749l/6900._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'Zero to One',
    author: 'Peter Thiel',
    link: 'https://www.goodreads.com/book/show/18050143-zero-to-one',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1630663027l/18050143._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    link: 'https://www.goodreads.com/book/show/41881472-the-psychology-of-money',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1581527774l/41881472._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'No Rules Rules',
    author: 'Reed Hastings',
    link: 'https://www.goodreads.com/book/show/49099937-no-rules-rules',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1595815356l/49099937._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    link: 'https://www.goodreads.com/book/show/54898389-the-almanack-of-naval-ravikant',
    image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1598011736l/54898389._SY75_.jpg'
  },
  {
    shelf: 'favorites',
    title: 'The Money Trap',
    author: 'Alok Sama',
    link: 'https://www.goodreads.com/book/show/203578944-the-money-trap',
    image: 'https://covers.openlibrary.org/b/isbn/9781250332844-L.jpg'
  },
  {
    shelf: 'favorites',
    title: 'Desperately Seeking Shah Rukh',
    author: 'Shrayana Bhattacharya',
    link: 'https://www.goodreads.com/book/show/59057886-desperately-seeking-shah-rukh',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1633087967i/59057886.jpg'
  },

  // ─── recently read (cover grid + rating/year underneath) ───
  {
    shelf: 'recently-read',
    title: 'Heart Lamp: Selected Stories',
    author: 'Banu Mushtaq',
    link: 'https://www.goodreads.com/book/show/205544315-heart-lamp',
    image: 'https://covers.openlibrary.org/b/isbn/9781916751163-L.jpg',
    rating: null,
    year: "jul '26"
  },
  {
    shelf: 'recently-read',
    title: 'The Answer Is No',
    author: 'Fredrik Backman',
    link: 'https://www.goodreads.com/book/show/219876684-the-answer-is-no',
    image: 'https://covers.openlibrary.org/b/isbn/9781662526527-L.jpg',
    rating: 4,
    year: "apr '26"
  },
  {
    shelf: 'recently-read',
    title: 'My Year of Rest and Relaxation',
    author: 'Ottessa Moshfegh',
    link: 'https://www.goodreads.com/book/show/44279110-my-year-of-rest-and-relaxation',
    image: 'https://covers.openlibrary.org/b/isbn/9780525522133-L.jpg',
    rating: null,
    year: "sep '25"
  },
  {
    shelf: 'recently-read',
    title: 'The Anthology of Balaji',
    author: 'Eric Jorgenson',
    link: 'https://www.goodreads.com/book/show/200179688-the-anthology-of-balaji',
    image: 'https://covers.openlibrary.org/b/isbn/9781544542904-L.jpg',
    rating: null,
    year: "'25"
  },
  {
    shelf: 'recently-read',
    title: 'The Sun and Her Flowers',
    author: 'Rupi Kaur',
    link: 'https://www.goodreads.com/book/show/35606560-the-sun-and-her-flowers',
    image: 'https://covers.openlibrary.org/b/isbn/9781449486792-L.jpg',
    rating: null,
    year: "'25"
  },
  {
    shelf: 'recently-read',
    title: 'Milk and Honey',
    author: 'Rupi Kaur',
    link: 'https://www.goodreads.com/book/show/23513349-milk-and-honey',
    image: 'https://covers.openlibrary.org/b/isbn/9781502784278-L.jpg',
    rating: null,
    year: "'25"
  },
  {
    shelf: 'recently-read',
    title: 'Famous Last Questions',
    author: 'Sanjana Ramachandran',
    link: 'https://www.goodreads.com/book/show/230219515-famous-last-questions',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1744015130i/230219515.jpg',
    rating: null,
    year: "'25"
  },
  {
    shelf: 'recently-read',
    title: 'The Moonshot Game',
    author: 'Rahul Chandra',
    link: 'https://www.goodreads.com/book/show/49387004-the-moonshot-game',
    image: 'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1569347387l/49387004.jpg',
    rating: 4,
    year: "jan '25"
  },
  {
    shelf: 'recently-read',
    title: 'Everything I Know About Love',
    author: 'Dolly Alderton',
    link: 'https://www.goodreads.com/book/show/46041465-everything-i-know-about-love',
    image: 'https://covers.openlibrary.org/b/isbn/9780062968784-L.jpg',
    rating: 4,
    year: "jan '24"
  },
  {
    shelf: 'recently-read',
    title: 'Before the Coffee Gets Cold',
    author: 'Toshikazu Kawaguchi',
    link: 'https://www.goodreads.com/book/show/44421460-before-the-coffee-gets-cold',
    image: 'https://covers.openlibrary.org/b/isbn/9781529029581-L.jpg',
    rating: 3,
    year: "'24"
  },
  {
    shelf: 'recently-read',
    title: 'Five Point Someone',
    author: 'Chetan Bhagat',
    link: 'https://www.goodreads.com/book/show/105576.Five_Point_Someone',
    image: 'https://covers.openlibrary.org/b/isbn/9788129104595-L.jpg',
    rating: 2,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Becoming',
    author: 'Michelle Obama',
    link: 'https://www.goodreads.com/book/show/38746485-becoming',
    image: 'https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'The Palace of Illusions',
    author: 'Chitra Banerjee Divakaruni',
    link: 'https://www.goodreads.com/book/show/1774836.The_Palace_of_Illusions',
    image: 'https://covers.openlibrary.org/b/isbn/9780385515993-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'The Metamorphosis',
    author: 'Franz Kafka',
    link: 'https://www.goodreads.com/book/show/485894.The_Metamorphosis',
    image: 'https://covers.openlibrary.org/b/isbn/9780553213690-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'The Namesake',
    author: 'Jhumpa Lahiri',
    link: 'https://www.goodreads.com/book/show/33917.The_Namesake',
    image: 'https://covers.openlibrary.org/b/isbn/9780618485222-L.jpg',
    rating: 3,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Unaccustomed Earth',
    author: 'Jhumpa Lahiri',
    link: 'https://www.goodreads.com/book/show/85301.Unaccustomed_Earth',
    image: 'https://covers.openlibrary.org/b/isbn/9780676979343-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Shoe Dog',
    author: 'Phil Knight',
    link: 'https://www.goodreads.com/book/show/27220736-shoe-dog',
    image: 'https://covers.openlibrary.org/b/isbn/9781501135910-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Factfulness',
    author: 'Hans Rosling',
    link: 'https://www.goodreads.com/book/show/34890015-factfulness',
    image: 'https://covers.openlibrary.org/b/isbn/9781473637467-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Turtles All the Way Down',
    author: 'John Green',
    link: 'https://www.goodreads.com/book/show/35504431-turtles-all-the-way-down',
    image: 'https://covers.openlibrary.org/b/isbn/9780525555360-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Ocean of Secrets',
    author: 'Aimee Friedman',
    link: 'https://www.goodreads.com/book/show/15761587-ocean-of-secrets',
    image: 'https://covers.openlibrary.org/b/isbn/9781407134598-L.jpg',
    rating: 3,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'If I Stay',
    author: 'Gayle Forman',
    link: 'https://www.goodreads.com/book/show/4374400-if-i-stay',
    image: 'https://covers.openlibrary.org/b/isbn/9780525421030-L.jpg',
    rating: 2,
    year: "'23"
  },
  // These 5 have no ISBN in your CSV, so their covers may not load.
  // If any show blank, tell me and I'll grab the Goodreads cover individually.
  {
    shelf: 'recently-read',
    title: 'Atomic Habits',
    author: 'James Clear',
    link: 'https://www.goodreads.com/book/show/40121378-atomic-habits',
    image: 'https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'The Fault in Our Stars',
    author: 'John Green',
    link: 'https://www.goodreads.com/book/show/11870085-the-fault-in-our-stars',
    image: 'https://covers.openlibrary.org/b/isbn/9780525478812-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Mindset',
    author: 'Carol S. Dweck',
    link: 'https://www.goodreads.com/book/show/40745.Mindset',
    image: 'https://covers.openlibrary.org/b/isbn/9780345472328-L.jpg',
    rating: 3,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'To the Lighthouse',
    author: 'Virginia Woolf',
    link: 'https://www.goodreads.com/book/show/59716.To_the_Lighthouse',
    image: 'https://covers.openlibrary.org/b/isbn/9780156907392-L.jpg',
    rating: 4,
    year: "'23"
  },
  {
    shelf: 'recently-read',
    title: 'Dept. of Speculation',
    author: 'Jenny Offill',
    link: 'https://www.goodreads.com/book/show/56497311-department-of-speculation',
    image: 'https://covers.openlibrary.org/b/isbn/9780345806871-L.jpg',
    rating: 3,
    year: "'23"
  }
];

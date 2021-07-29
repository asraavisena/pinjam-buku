'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(`Books`, [
      {
        name: "Sang Penguasa",
        penulis: "Niccolo Machiavelli",
        stock: 10,
        category: "Filsafat",
        description: "Buku ini, buku tentang Filsafat ya, bukan buka yang lain :)Buku ini, buku tentang Filsafat ya, bukan buka yang lain :)",
        urlImage: "https://img.my-best.id/press_component/item_part_images/cd90749313e62565b5df40fed09207e6.png?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Ensiklopedia Sains",
        penulis: "Usborn",
        stock: 4,
        category: "Sains",
        description: "Buku ini, buku tentang Sains ya, bukan buka yang lain :)",
        urlImage: "https://lite.shopee.co.id/Buku-Ensiklopedia-Sains-By-Usborne-i.13264459.1934564735?smtt=307.1.2&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOIniBY2tlYjidDvijRWjNrC1w6zMO5uYJNWuiO2xDd_LhCkaRxT_shoCbgcQAvD_BwE",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Life 3.0: Being Human in the Age of Artificial Intelligence",
        penulis: "Max Tegmark",
        stock: 10,
        category: "Teknologi",
        description: "Buku ini, buku tentang Teknologi ya, bukan buka yang lain :)",
        urlImage: "https://images-na.ssl-images-amazon.com/images/I/41-KHndhtVL._SX337_BO1,204,203,200_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Brilliant History of Color in Art Hardcover – Illustrated",
        penulis: "Victoria Finlay",
        stock: 20,
        category: "Seni",
        description: "Buku ini, buku tentang Seni ya, bukan buka yang lain :)",
        urlImage: "https://images-na.ssl-images-amazon.com/images/I/61IfdS6NaxL._SX450_BO1,204,203,200_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Secret History of the World",
        penulis: "Jonathan Black, Mark Booth",
        stock: 7,
        category: "Sejarah dan Geografi",
        description: "Buku ini, buku tentang Sejarah dan Geografi ya, bukan buka yang lain :)",
        urlImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1347596754l/1841964.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TAUBAT",
        penulis: "Yazid bin Abdul Qadir Jawas",
        stock: 16,
        category: "Agama",
        description: "Buku ini, buku tentang Agama ya, bukan buka yang lain :)",
        urlImage: "https://www.bukukita.com/babacms/displaybuku/105764_f.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Civilization and Its Discontents Reprint Edition",
        penulis: "Sigmund Freud",
        stock: 14,
        category: "Psikologi",
        description: "Buku ini, buku tentang Psikologi ya, bukan buka yang lain :)",
        urlImage: "https://images-na.ssl-images-amazon.com/images/I/51Jj12iMZnL._SX331_BO1,204,203,200_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Man's Search For Meaning",
        penulis: "Viktor E. Frankl",
        stock: 4,
        category: "Filsafat",
        description: "Buku ini, buku tentang Filsafat ya, bukan buka yang lain :)",
        urlImage: "https://img.my-best.id/press_component/item_part_images/4496778e7f7dc9e1db07a27c0f1609a9.jpg?ixlib=rails-4.2.0&q=70&lossless=0&w=640&h=640&fit=clip",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Adventures of Huckleberry Finn",
        penulis: "Mark Twain, Guy Cardwell",
        stock: 8,
        category: "Sastra",
        description: "Buku ini, buku tentang Sastra ya, bukan buka yang lain :)",
        urlImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546096879l/2956.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Love, Love, and Love pake Sihir wkwk",
        penulis: "Jin Iprit",
        stock: 999,
        category: "Tentang Cinta :)",
        description: "Buku ini dikhususkan untuk anda yang Jomblo Menahun. Sangat sad :(",
        urlImage: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1456290358l/29286955._SX318_.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'Jo
     * penulis: "",hn Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(`Books`, null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

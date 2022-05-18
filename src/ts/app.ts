import Cart from "./service/Cart";
import Book from "./domain/Book";
import MusicAlbum from "./domain/MusicAlbum";
import Movie from "./domain/Movie";

const cart = new Cart();
console.log(cart.items);

cart.add(new Book(1001, "War and Piece", "Leo Tolstoy", 2000, 1225));
cart.add(new MusicAlbum(1008, "Meteora", "Linkin Park", 900));
cart.add(
  new Movie(
    1010,
    "Мстители",
    900,
    "https://cdnn21.img.ria.ru/images/155277/80/1552778074_0:0:1108:623_600x0_80_0_0_0d3812d6d4a03d9f659db043ab84af16.jpg",
    2012,
    "США",
    "Averanges Assemble",
    "фанстастки, боевик, фэнтази",
    "137/ 02:17"
  )
);

console.log(cart.items);

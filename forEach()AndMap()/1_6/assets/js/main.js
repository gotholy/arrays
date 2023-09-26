let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];
let newAlbum = album.map((elt) => {
  let cutEnd = elt.split(".");
  if (cutEnd.length > 1) {
    return cutEnd[0].toLocaleLowerCase();
  } else {
    return "invalid";
  }
});

console.log(newAlbum);

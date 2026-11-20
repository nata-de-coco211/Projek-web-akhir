<<<<<<< Updated upstream
function scip() {
    
}
=======
const katalog = document.querySelector(".katalog, #best-seller");

if (katalog) {
  const daftarKategori = Array.from(
    katalog.querySelectorAll(".kategori-menu"),
  );
  const tombolFilter = document.querySelector("#filter-menu");
  const informasiJumlah = document.querySelector("#jumlah-menu");
  const kategoriMakanan = new Set([
    "bakery",
    "hidangan-utama",
    "brunch",
    "rujak-dan-tipat",
    "menu-indonesia",
    "pizza-pasta",
    "kids-snack",
  ]);
  const kategoriMinuman = new Set([
    "minuman-favorit",
    "coffee",
    "signature-coffee",
    "chocolate-series",
    "matcha-series",
    "milkshake",
    "tea",
    "yakult-series",
    "juice",
    "bali-aga",
    "softdrink-beer",
    "spirits",
  ]);

  if (tombolFilter && informasiJumlah && daftarKategori.length > 0) {
    const kategori = daftarKategori.map((elemen) => {
      const jenis = kategoriMakanan.has(elemen.id)
        ? "makanan"
        : kategoriMinuman.has(elemen.id)
          ? "minuman"
          : "lainnya";

      return {
        elemen,
        id: elemen.id,
        nama: elemen.querySelector("h2").textContent.trim(),
        jenis,
        jumlah: elemen.querySelectorAll(".kartu-menu").length,
      };
    });

    const jumlahKategori = (jenis) =>
      kategori
        .filter((item) => item.jenis === jenis)
        .reduce((total, item) => total + item.jumlah, 0);
    const jumlahSemua = kategori.reduce(
      (total, item) => total + item.jumlah,
      0,
    );

    function buatTombol(nama, filter, jumlah) {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "btn btn-outline-dark";
      tombol.dataset.filter = filter;
      tombol.textContent = `${nama} (${jumlah})`;
      tombol.classList.toggle("active", filter === "semua");
      tombol.setAttribute("aria-pressed", String(filter === "semua"));
      tombol.addEventListener("click", () => {
        kategori.forEach((item) => {
          item.elemen.hidden =
            filter !== "semua" &&
            item.jenis !== filter &&
            item.id !== filter;
        });

        tombolFilter.querySelectorAll("button").forEach((item) => {
          const aktif = item.dataset.filter === filter;
          item.classList.toggle("active", aktif);
          item.setAttribute("aria-pressed", String(aktif));
        });

        const jumlahTampil =
          filter === "semua"
            ? jumlahSemua
            : ["makanan", "minuman", "lainnya"].includes(filter)
              ? jumlahKategori(filter)
              : kategori.find((item) => item.id === filter).jumlah;
        informasiJumlah.textContent = `Menampilkan ${jumlahTampil} menu.`;
      });
      tombolFilter.append(tombol);
    }

    buatTombol("Semua", "semua", jumlahSemua);

    const jenisFilter = katalog.id === "best-seller" ? [] : ["makanan", "minuman", "lainnya"];
    jenisFilter.forEach((jenis) => {
      const jumlah = jumlahKategori(jenis);
      if (jumlah > 0) {
        const nama = jenis.charAt(0).toUpperCase() + jenis.slice(1);
        buatTombol(nama, jenis, jumlah);
      }
    });

    kategori.forEach((item) => {
      buatTombol(item.nama, item.id, item.jumlah);
    });

    informasiJumlah.textContent = `Menampilkan ${jumlahSemua} menu.`;
  }
}
>>>>>>> Stashed changes

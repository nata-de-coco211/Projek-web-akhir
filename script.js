const katalog = document.querySelector(".katalog");

if (katalog) {
  const kategoriMenu = Array.from(katalog.querySelectorAll(".kategori-menu"));
  const filterMenu = document.querySelector("#filter-menu");
  const jumlahMenu = document.querySelector("#jumlah-menu");
  const kategoriMakanan = new Set([
    "brunch",
    "rujak-dan-tipat",
    "menu-indonesia",
    "pizza-pasta",
    "kids-snack",
  ]);
  const kategoriMinuman = new Set([
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

  if (filterMenu && jumlahMenu && kategoriMenu.length > 0) {
    const dataKategori = kategoriMenu.map((kategori) => {
      const jumlah = kategori.querySelectorAll(".kartu-menu").length;
      const jenis = kategoriMakanan.has(kategori.id)
        ? "makanan"
        : kategoriMinuman.has(kategori.id)
          ? "minuman"
          : "lainnya";

      return {
        elemen: kategori,
        id: kategori.id,
        nama: kategori.querySelector("h2")?.textContent.trim() || "Kategori",
        jenis,
        jumlah,
      };
    });

    const jumlahSemua = dataKategori.reduce(
      (total, kategori) => total + kategori.jumlah,
      0,
    );
    const jumlahJenis = (jenis) =>
      dataKategori
        .filter((kategori) => kategori.jenis === jenis)
        .reduce((total, kategori) => total + kategori.jumlah, 0);

    function tambahTombolFilter(nama, filter, jumlah) {
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "tombol tombol-filter";
      tombol.dataset.filter = filter;
      tombol.textContent = `${nama} (${jumlah})`;
      tombol.setAttribute("aria-pressed", String(filter === "semua"));
      tombol.addEventListener("click", () => {
        dataKategori.forEach((kategori) => {
          kategori.elemen.hidden =
            filter !== "semua" &&
            kategori.jenis !== filter &&
            kategori.id !== filter;
        });

        filterMenu.querySelectorAll("button").forEach((item) => {
          item.setAttribute(
            "aria-pressed",
            String(item.dataset.filter === filter),
          );
        });

        const jumlahTampil =
          filter === "semua"
            ? jumlahSemua
            : ["makanan", "minuman", "lainnya"].includes(filter)
              ? jumlahJenis(filter)
              : dataKategori.find((kategori) => kategori.id === filter)
                  ?.jumlah || 0;
        jumlahMenu.textContent = `Menampilkan ${jumlahTampil} menu.`;
      });
      filterMenu.append(tombol);
    }

    tambahTombolFilter("Semua", "semua", jumlahSemua);

    ["makanan", "minuman", "lainnya"].forEach((jenis) => {
      const jumlah = jumlahJenis(jenis);
      if (jumlah > 0) {
        const nama = jenis.charAt(0).toUpperCase() + jenis.slice(1);
        tambahTombolFilter(nama, jenis, jumlah);
      }
    });

    dataKategori.forEach((kategori) => {
      tambahTombolFilter(kategori.nama, kategori.id, kategori.jumlah);
    });

    jumlahMenu.textContent = `Menampilkan ${jumlahSemua} menu.`;
  }
}
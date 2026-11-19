const katalog = document.querySelector(".katalog");

if (katalog) {
<<<<<<< Updated upstream
  const kategoriMenu = Array.from(katalog.querySelectorAll(".kategori-menu"));
  const filterMenu = document.querySelector("#filter-menu");
  const jumlahMenu = document.querySelector("#jumlah-menu");
=======
  const daftarKategori = Array.from(
    katalog.querySelectorAll(".kategori-menu"),
  );
  const tombolFilter = document.querySelector("#filter-menu");
  const informasiJumlah = document.querySelector("#jumlah-menu");
>>>>>>> Stashed changes
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

<<<<<<< Updated upstream
  if (filterMenu && jumlahMenu && kategoriMenu.length > 0) {
    const dataKategori = kategoriMenu.map((kategori) => {
      const jumlah = kategori.querySelectorAll(".kartu-menu").length;
      const jenis = kategoriMakanan.has(kategori.id)
        ? "makanan"
        : kategoriMinuman.has(kategori.id)
=======
  if (tombolFilter && informasiJumlah && daftarKategori.length > 0) {
    const kategori = daftarKategori.map((elemen) => {
      const jenis = kategoriMakanan.has(elemen.id)
        ? "makanan"
        : kategoriMinuman.has(elemen.id)
>>>>>>> Stashed changes
          ? "minuman"
          : "lainnya";

      return {
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
      const tombol = document.createElement("button");
      tombol.type = "button";
      tombol.className = "tombol tombol-filter";
      tombol.dataset.filter = filter;
      tombol.textContent = `${nama} (${jumlah})`;
      tombol.setAttribute("aria-pressed", String(filter === "semua"));
      tombol.addEventListener("click", () => {
<<<<<<< Updated upstream
        dataKategori.forEach((kategori) => {
          kategori.elemen.hidden =
            filter !== "semua" &&
            kategori.jenis !== filter &&
            kategori.id !== filter;
        });

        filterMenu.querySelectorAll("button").forEach((item) => {
=======
        kategori.forEach((item) => {
          item.elemen.hidden =
            filter !== "semua" &&
            item.jenis !== filter &&
            item.id !== filter;
        });

        tombolFilter.querySelectorAll("button").forEach((item) => {
>>>>>>> Stashed changes
          item.setAttribute(
            "aria-pressed",
            String(item.dataset.filter === filter),
          );
        });

        const jumlahTampil =
          filter === "semua"
            ? jumlahSemua
            : ["makanan", "minuman", "lainnya"].includes(filter)
<<<<<<< Updated upstream
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
=======
              ? jumlahKategori(filter)
              : kategori.find((item) => item.id === filter).jumlah;
        informasiJumlah.textContent = `Menampilkan ${jumlahTampil} menu.`;
      });
      tombolFilter.append(tombol);
    }

    buatTombol("Semua", "semua", jumlahSemua);

    ["makanan", "minuman", "lainnya"].forEach((jenis) => {
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

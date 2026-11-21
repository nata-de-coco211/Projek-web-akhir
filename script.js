<<<<<<< Updated upstream
document.querySelectorAll(".kartu-menu").forEach((kartu) => {
  const judul = kartu.querySelector(".isi-menu h3");
  const isi = kartu.querySelector(".isi-menu");
  const harga = isi && isi.querySelector(".harga");
  if (!judul || !isi || !harga) {
    return;
  }

  const namaMenu = judul.textContent.trim();
  const kunciFavorit = `akurasa-favorit:${namaMenu.toLowerCase()}`;
  const tombolFavorit = document.createElement("button");
  tombolFavorit.type = "button";
  tombolFavorit.className = "tombol-favorit";
  tombolFavorit.setAttribute("aria-pressed", "false");

  function perbaruiTombol(isFavorit) {
    tombolFavorit.textContent = isFavorit ? "♥" : "♡";
    tombolFavorit.setAttribute("aria-pressed", String(isFavorit));
    tombolFavorit.setAttribute(
      "aria-label",
      `${isFavorit ? "Hapus" : "Tambahkan"} ${namaMenu} ${
        isFavorit ? "dari" : "ke"
      } favorit`,
    );
  }

  const isFavorit = localStorage.getItem(kunciFavorit) === "true";
  perbaruiTombol(isFavorit);
  tombolFavorit.addEventListener("click", () => {
    const favoritBaru = tombolFavorit.getAttribute("aria-pressed") !== "true";
    if (favoritBaru) {
      localStorage.setItem(kunciFavorit, "true");
    } else {
      localStorage.removeItem(kunciFavorit);
    }
    perbaruiTombol(favoritBaru);
  });
  const barisHarga = document.createElement("div");
  barisHarga.className = "baris-harga-favorit";
  harga.parentNode.insertBefore(barisHarga, harga);
  barisHarga.append(harga, tombolFavorit);
});

const katalog = document.querySelector(".katalog");
=======
const katalog = document.querySelector(".katalog, #best-seller");
>>>>>>> Stashed changes

if (katalog) {
  const daftarKategori = Array.from(
    katalog.querySelectorAll(".kategori-menu"),
  );
  const tombolFilter = document.querySelector("#filter-menu");
  const informasiJumlah = document.querySelector("#jumlah-menu");
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
      tombol.className = "tombol tombol-filter";
      tombol.dataset.filter = filter;
      tombol.textContent = `${nama} (${jumlah})`;
      tombol.setAttribute("aria-pressed", String(filter === "semua"));
      tombol.addEventListener("click", () => {
        kategori.forEach((item) => {
          item.elemen.hidden =
            filter !== "semua" &&
            item.jenis !== filter &&
            item.id !== filter;
        });

        tombolFilter.querySelectorAll("button").forEach((item) => {
          item.setAttribute(
            "aria-pressed",
            String(item.dataset.filter === filter),
          );
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


<<<<<<< Updated upstream
let jamSekarang = new Date().getHours();

if (jamSekarang >= 9 && jamSekarang < 23) {
  document.getElementById("statustoko").textContent = 'Buka';
  document.getElementById("statustoko").style.color = 'green';
}
else {
  document.getElementById("statustoko").textContent = 'Tutup';
  document.getElementById("statustoko").style.color = 'red';
}

=======
document.querySelectorAll(".kartu-menu").forEach((kartu) => {
  const isiKartu = kartu.querySelector(".card-body");
  const harga = isiKartu?.querySelector(".mt-auto.fw-semibold.text-primary");

  if (!harga) return;

  const barisHarga = document.createElement("div");
  barisHarga.className = "baris-harga-love";

  const tombolLove = document.createElement("button");
  tombolLove.type = "button";
  tombolLove.className = "tombol-love";
  tombolLove.setAttribute("aria-label", "Sukai menu");
  tombolLove.setAttribute("aria-pressed", "false");
  tombolLove.innerHTML = '<i class="fa-regular fa-heart" aria-hidden="true"></i>';

  tombolLove.addEventListener("click", () => {
    const aktif = tombolLove.classList.toggle("aktif");
    tombolLove.setAttribute("aria-pressed", String(aktif));
    tombolLove.setAttribute("aria-label", aktif ? "Batalkan suka menu" : "Sukai menu");
    tombolLove.innerHTML = aktif
      ? '<i class="fa-solid fa-heart" aria-hidden="true"></i>'
      : '<i class="fa-regular fa-heart" aria-hidden="true"></i>';
  });

    harga.before(barisHarga);
  barisHarga.append(harga, tombolLove);
});
>>>>>>> Stashed changes

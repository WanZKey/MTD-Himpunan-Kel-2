function parse(input) {
    return new Set(input.split(",").map(x => x.trim()).filter(x => x));
}

function hitung() {
    const materi = document.getElementById("materiSelect").value;
    const A = parse(document.getElementById("setA").value);
    const B = parse(document.getElementById("setB").value);
    const out = document.getElementById("outputTable");

    let html = "";

    if (!materi) {
        out.innerHTML = `<tr><td colspan="2" style="text-align:center;">Pilih materi</td></tr>`;
        return;
    }

    // ---------- MATERI 1 ----------
    if (materi === "pengantar") {
        html = `
        <tr><td>Anggota A</td><td>${[...A].join(", ")}</td></tr>
        <tr><td>Anggota B</td><td>${[...B].join(", ")}</td></tr>
        <tr><td>Gabungan Semua</td><td>${[...new Set([...A, ...B])].join(", ")}</td></tr>
        `;
    }

    // ---------- MATERI 2 ----------
    if (materi === "representasi") {
        html = `
        <tr><td>Daftar Anggota A</td><td>{ ${[...A].join(", ")} }</td></tr>
        <tr><td>Daftar Anggota B</td><td>{ ${[...B].join(", ")} }</td></tr>
        <tr><td>Notasi Pembentuk A</td><td>A = { x | x ∈ A }</td></tr>
        `;
    }

    // ---------- MATERI 3 ----------
    if (materi === "kardinalitas") {
        html = `
        <tr><td>Kardinalitas A</td><td>${A.size}</td></tr>
        <tr><td>Kardinalitas B</td><td>${B.size}</td></tr>
        <tr><td>Total Elemen Berbeda</td><td>${[...new Set([...A, ...B])].length}</td></tr>
        `;
    }

    // ---------- MATERI 4 ----------
    if (materi === "jenis") {
        html = `
        <tr><td>A subset B?</td><td>${[...A].every(x => B.has(x)) ? "Ya" : "Tidak"}</td></tr>
        <tr><td>B subset A?</td><td>${[...B].every(x => A.has(x)) ? "Ya" : "Tidak"}</td></tr>
        <tr><td>Himpunan Sama?</td><td>${A.size === B.size && [...A].every(x => B.has(x)) ? "Ya" : "Tidak"}</td></tr>
        `;
    }

    // ---------- MATERI 5 ----------
    if (materi === "operasi") {
        html = `
        <tr><td>A ∪ B (Union)</td><td>${[...new Set([...A, ...B])].join(", ")}</td></tr>
        <tr><td>A ∩ B (Intersection)</td><td>${[...A].filter(x => B.has(x)).join(", ")}</td></tr>
        <tr><td>A − B (Difference)</td><td>${[...A].filter(x => !B.has(x)).join(", ")}</td></tr>
        <tr><td>A ⊕ B (Symmetric Difference)</td><td>${[
            ...[...A].filter(x => !B.has(x)),
            ...[...B].filter(x => !A.has(x))
        ].join(", ")}</td></tr>
        `;
    }

    out.innerHTML = html;
}

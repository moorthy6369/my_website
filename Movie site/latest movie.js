var domainp = "https://allinonestar143.blogspot.com";
var loca = window.location.href;
var num6 = Number(loca.slice(loca.lastIndexOf("p") + 1, loca.lastIndexOf("n")));
var num7 = Number(loca.slice(loca.lastIndexOf("n") + 1, loca.lastIndexOf("s")));
//?q=p1n1s
//num2 =4;
var vdnum = ["GRM STUDIO"];
if (num7 == 1) {
    for (let i = 1; 10 >= i; i++) {
        vdnum.push(i);
    }
} else {
    for (let i = 1; 10 > i; i++) {
        let hu = String(num7 - 1) + i;
        vdnum.push(Number(hu));
    };
    vdnum.push(Number(num7 + "0"))
};
const shd = '1P3dHRKvAvIdJICfVNyvrwQdyESw6SKMzH0BmwRfdpU0';
const base10 = `https://docs.google.com/spreadsheets/d/${shd}/gviz/tq?`;
const she = 'sheet1';
const query10 = encodeURIComponent('Select *')
const url10 = `${base10}&sheet=${she}&tq=${query10}`
document.addEventListener('DOMContentLoaded', init10);
function init10() {
    fetch(url10)
        .then(res => res.text())
        .then(rep => {
            //Remove additional text and extract only JSON:
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            var pgid = jsonData.table.rows[num6].c[1].v;
            const Id = pgid;
            const base = `https://docs.google.com/spreadsheets/d/${Id}/gviz/tq?`;
            const Name = 'some';
            const query = encodeURIComponent('Select *');
            const url = `${base}&sheet=${Name}&tq=${query}`;
            function init() {
                fetch(url)
                    .then(res => res.text())
                    .then(rep => {
                        const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
                        var plength = jsonData.table.rows.length;
                        var vdindex = ['GRM STUDIO'];
                        for (let i = 1; jsonData.table.rows.length > i; i++) {
                            vdindex.push(jsonData.table.rows[i].c[1].v);
                        };
                        function tmpg1(q1, q) {
                            function obf(title, link1) {
                                this.title = title;
                                this.link1 = link1;
                            };
                            let g = String("tmpg11" + q);
                            let numa = q1;
                            let tmpg11 = new obf(jsonData.table.rows[numa].c[1].v, jsonData.table.rows[numa].c[2].v);
                            return eval(g);
                        };

                        const data3 = [];
                        for (let i = 1; plength > i; i++) {
                            data3.push(jsonData.table.rows[i].c[1].v)
                        };

                        const linkz = (i) => { return domainp + "/p/download.html?q=mnweao12p" + num6 + "s" + jsonData.table.rows[i].c[0].v + "nqwetr" }

                        const searchInput = document.getElementById('search-input');
                        const dataList = document.getElementById('data-list');

                        searchInput.addEventListener('input', (event) => {
                            const searchQuery = event.target.value;
                            const filteredData = data3.filter((person) => {
                                return person.toLowerCase().includes(searchQuery.toLowerCase());
                            });

                            dataList.innerHTML = '';
                            if (searchQuery == "") { } else {
                                filteredData.slice(0, 5).forEach((person) => {
                                    const li = document.createElement('a');
                                    li.id = "slinks"; li.href = linkz(vdindex.indexOf(`${person}`));
                                    li.textContent = `${person}`;
                                    dataList.appendChild(li);
                                });
                            };
                        });

                        function getitem(i) {
                            return document.getElementById("item" + i);
                        }
                        var nofpage = Math.ceil(Number(plength - 1) / 10);

                        if (nofpage < num7) {
                            window.open(domainp + "/p/latest-movie.html?q=p" + num6 + "n" + nofpage + "s", "_self");
                            // window.open("http://127.0.0.1:5507/BLOGER%20new/MEMES%20TEMPLATE/Tamil%20memes.html?q=465872p" + num6 + "n" + nofpage + "s", "_self")
                        };
                        var plikg = ["GRM STUDIO"];
                        for (let i = 1; i <= nofpage; i++) {
                            plikg.push(domainp + "/p/latest-movie.html?q=p" + num6 + "n" + i + "s");
                        };
                        function setnum() {
                            getitem(0).href = plikg[1]; getitem(6).href = plikg[plikg.length - 1];
                            if (num7 == 1 || num7 == 2 || num7 == 3) {
                                getitem(num7).className = "item active";
                                if (nofpage > 4) {
                                    for (let i = 1; i <= 5; i++) {
                                        getitem(i).innerHTML = i;
                                        getitem(i).href = plikg[i];
                                    }
                                } else {
                                    for (let i = 1; i <= nofpage; i++) {
                                        getitem(i).innerHTML = i;
                                        getitem(i).href = plikg[i];
                                    }
                                };
                            } else {
                                if (nofpage <= num7 + 1) {
                                    getitem(3).className = "item active";
                                    let mk1 = num7 - 2; let mk2 = num7 - 1; let mk4 = nofpage >= num7 + 1 ? num7 + 1 : "--"; let mk5 = nofpage >= num7 + 2 ? num7 + 2 : "--";
                                    getitem(1).innerHTML = mk1; getitem(2).innerHTML = mk2; getitem(3).innerHTML = num7; getitem(4).innerHTML = mk4; getitem(5).innerHTML = mk5;
                                    getitem(1).href = plikg[mk1]; getitem(2).href = plikg[mk2]; mk4 == num7 + 1 ? getitem(4).href = plikg[mk4] : "";
                                    // console.log(plikg[mk4])
                                } else {
                                    getitem(3).className = "item active";
                                    let mk1 = num7 - 2; let mk2 = num7 - 1; let mk4 = num7 + 1; let mk5 = num7 + 2;
                                    getitem(1).innerHTML = mk1; getitem(2).innerHTML = mk2; getitem(3).innerHTML = num7; getitem(4).innerHTML = mk4; getitem(5).innerHTML = mk5;
                                    getitem(1).href = plikg[mk1]; getitem(2).href = plikg[mk2]; getitem(4).href = plikg[mk4]; getitem(5).href = plikg[mk5];
                                }

                            };
                        };
                        setnum();

                        var enm = ["GRM STUDIO"];
                        for (let i = 1; 10 >= i; i++) {
                            enm.push(i);
                        }

                        function vdsrc1(nm1, nm3, nm2) {
                            var ids2 = tmpg1(nm1, ".link1").slice(32, 65);
                            var vnum5 = "vdsrc" + nm3;
                            var vnumt = "vdsrct" + nm3;
                            var vnumd = "download5" + nm3;
                            let typeoflink2 = jsonData.table.rows[nm1].c[2].v.slice(0, 13) == "https://drive" ? 'https://docs.google.com/uc?id=' + ids2 : jsonData.table.rows[nm1].c[2].v;
                            var vsrc = document.getElementById(vnum5);
                            vsrc.src = typeoflink2;
                            var vsrc = document.getElementById(vnumd);
                            if (nm2 == 1) {
                                vsrc.href = 'https://docs.google.com/uc?id=' + ids2 + '&export=download';
                            } else {
                                vsrc.href = domainp + "/p/download.html?q=mnweao12p" + num6 + "s" + jsonData.table.rows[nm1].c[0].v + "nqwetr";
                            };
                            if (nm2 == 1) {
                                if (matchMedia("(max-width: 370px)").matches) {
                                    document.getElementById(vnumt).innerHTML = tmpg1(nm1, ".title").slice(0, 15) + "...";
                                } else {
                                    document.getElementById(vnumt).innerHTML = tmpg1(nm1, ".title");
                                };
                            } else {
                                document.getElementById(vnumt).innerHTML = tmpg1(nm1, ".title");
                            };
                        };
                        if (nofpage == num7) {
                            var endpagevdnum = Number.isInteger(Number(plength - 1) / 10) ? 10 : Number(String(Number(plength - 1) / 10).slice(-1));
                            // console.log(endpagevdnum);
                            for (let i = 1; endpagevdnum >= i; i++) {
                                vdsrc1(vdnum[i], i);
                            }
                            for (let i = endpagevdnum; i < 10; i++) {
                                document.getElementsByClassName("peges")[i].style.display = "none";
                            };
                        } else {
                            for (let i = 1; 10 >= i; i++) {
                                vdsrc1(vdnum[i], i);
                            }
                        }
                        document.getElementById("headline1").innerHTML = jsonData.table.rows[0].c[1].v;
                    });
            };

            init();
        })
};

// console.clear();
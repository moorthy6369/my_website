 //?q=p1s1n
 var domainp = "https://allinonestar143.blogspot.com";
 var domainp2 = "https://alonestar3dmodeldownload.on.drv.tw/website/memes-template/";
 var loca = window.location.href;
 //var num2 = Number(loca.slice(loca.lastIndexOf("s") + 1, loca.lastIndexOf("n")));
 //var num6 = Number(loca.slice(loca.lastIndexOf("p") + 1, loca.lastIndexOf("s")));
 num2 = 145;
 num6 = 1;

 function loadidem1() {
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
               var vdindex = ['GRM STUDIO'];
               for (let i = 1; jsonData.table.rows.length > i; i++) {
                 vdindex.push(jsonData.table.rows[i].c[0].v);
               };
               num2 = vdindex.indexOf(num2);

               function rpage(num) {
                 let numac = num;
                 return String(jsonData.table.rows[numac].c[4].v);
               };
               let rpage1 = rpage(num2);

               function tmpg1(q1, q) {
                 function obf(title, link1) {
                   this.title = title;
                   this.link1 = link1;
                 };
                 let g = String("tmpg11" + q);
                 let numa = q1;
                 let tmpg11 = new obf(jsonData.table.rows[numa].c[1].v, jsonData.table.rows[numa].c[2].v);
                 return eval(g);
               }
               //download site
               document.getElementById("headline1").innerHTML = jsonData.table.rows[num2].c[1].v + "movie";
               var ids = tmpg1(num2, ".link1").slice(32, 65);
               let hyu = "movie";
               let yttrailerl;
               try { yttrailerl = jsonData.table.rows[num2].c[5].v; } catch {};
               if (yttrailerl == undefined) {
                 let typeoflink2 = jsonData.table.rows[num2].c[2].v.slice(0, 13) == "https://drive" ? 'https://docs.google.com/uc?id=' + ids : jsonData.table.rows[num2].c[2].v;
                 var vsrc = document.getElementById("vdsrc");
                 vsrc.src = typeoflink2;
               } else {
                 let ytvideoid = jsonData.table.rows[num2].c[5].v.slice(jsonData.table.rows[num2].c[5].v.lastIndexOf("/"));
                 let ki = document.getElementById("iframe1");
                 ki.innerHTML = '<iframe width=100% src="https://www.youtube.com/embed/' + ytvideoid + '"></iframe>';
                 ki.style.aspectRatio = "16/9";
                 hyu = "trailer";
               };
               //yttrailerl = yttrailerl == undefined ? "#" : jsonData.table.rows[num2].c[5].v;
               document.getElementById("vdsrct").innerHTML = tmpg1(num2, ".title");
               //document.getElementById("sharebtn1").href = yttrailerl;
               //var vsrc = document.getElementById("download5");
               // vsrc.href = 'https://docs.google.com/uc?id=' + ids + '&export=download';

               function gbacklink1() {
                 bl = document.referrer;

                 bl1 = bl.slice(0, 36);

                 if (bl1 == domainp) {
                   return window.history.back();
                 }
                 else {
                   return window.open(domainp + "/p/latest-movie.html?q=p" + num6 + "n1s", "_self");
                 };
               };
               document.getElementById("gbacklink1").addEventListener("click", gbacklink1);
               let yu = [];
               let yup;
               try { yup = jsonData.table.rows[num2].c[8].v; } catch {};
               yup === undefined || yup === null ? "#" : yu.push(8);
               let yup1;
               try { yup1 = jsonData.table.rows[num2].c[9].v; } catch {};
               yup1 === undefined || yup1 === null ? "#" : yu.push(9);
               let yup2;
               try { yup2 = jsonData.table.rows[num2].c[10].v; } catch {};
               yup2 === undefined || yup2 === null ? "#" : yu.push(10);
               let yup3;
               try { yup3 = jsonData.table.rows[num2].c[11].v; } catch {};
               yup3 === undefined || yup3 === null ? "#" : yu.push(11);

               let x = [];

               let typeoflink = "";
               try { typeoflink = jsonData.table.rows[num2].c[6].v == 2 ? " GDrive" : "" } catch {};

               for (let i = 0; i < yu.length; i++) {
                 let typeoflink1 = jsonData.table.rows[num2].c[Number(yu[i])].v.slice(0, 13) == "https://drive" ? " GDrive" : "";
                 // var mlinks = jsonData.table.rows[num2].c[Number(yu[i])].v.slice(0,13)=="https://drive" ? 'https://docs.google.com/uc?id='+jsonData.table.rows[num2].c[Number(yu[i])].v.slice(32, 65)+ '&export=download' : jsonData.table.rows[num2].c[Number(yu[i])].v;

                 let ts = yu[i] == 11 /* || yu[i]==10 || yu[i]==9*/ ;

                 var types = "r" + num2 + "c" + Number(yu[i]);
                 var typel = "&ql=p" + num6 + "n1s";
                 let targetl = ts ? '/p/smdownload.html?url=' : '/p/fdownload.html?url=';
                 var mlinks1 = domainp + targetl + types + typel + "&ray=" + Id;
                 let flink = ts ? "https://shrinkme.io/st?api=2a55bb82d9f1f5c133f762ef25aa71937e7ac9bf&url=" + mlinks1 : mlinks1;
                 let locki = ts ? "lock" : "lock open";
                 let targetg = ts ? 'target="_blank"' : "";
                 x.push('<p class="paragraph">' + jsonData.table.rows[num2].c[1].v + jsonData.table.rows[0].c[yu[i]].v + ' x265 - (DD5.1 - 192Kbps)</p><div class="flexc"><a id="lk' + i + '" ' + targetg + ` onclick="ch('` + flink + `',` + i + `)"><p id="dbutton">Download ` + typeoflink1 + '<i class="' + locki + ' icon"></i></p></a></div>');
               };


               let text = "";
               for (let i = 0; i < x.length; i++) {
                 text += x[i] + "<br>";
               };


               var idas = jsonData.table.rows[num2].c[7].v.slice(jsonData.table.rows[num2].c[7].v.lastIndexOf("?") + 1);
               //console.log(idas);
               $.ajax({
                 url: 'https://api.allorigins.win/raw?url=https://vembx.one/embed-' + idas + '.html',
                 dataType: 'html',
                 success: function(response) {
                   var html = $.parseHTML(response);
                   const myString = String(response);
                   const urls1 = myString.split('https');
                   var urlset = [];
                   var qlsc = [];
                   //console.log(myString);
                   myStringd = myString.slice(65, 71);
                   //console.log(myStringd);
                   if (myStringd == 'center' || myString.slice(66, 72) == 'center') {
                     console.log('h')
                     document.getElementById("sharebtn1").innerText = "Watch online Server Error!";
                     document.getElementById("alert message").innerHTML = "<center><div class='ui red message'><div class='header'>SERVER ERROR</div>MV TAMILAN-team kindly ask for sorry" + '&#128542' + " !!<br />This movie can't play this time please check after some time!</div></centre>";
                     mn();
                     post1();
                   } else {
                     document.getElementById("sharebtn1").href = domainp + '/p/videoplayer.html?url=r' + num2 + 'c9&ql=p' + num6 + 'n1s&ray=' + Id;
                     // console.log(domainp+'/p/smdownload.html?url=r'+num2+'c9&ql=p'+num6+'n1s&ray='+Id);
                     document.getElementById("downloadlinks").innerHTML = text;
                     //console.log(text)
                   };
                 }
               });

               function mn() {
                 var m = document.getElementById("alert message").innerText;
                 var p = jsonData.table.rows[num2].c[11].v == undefined || jsonData.table.rows[num2].c[10].v == undefined || jsonData.table.rows[num2].c[9].v == undefined || jsonData.table.rows[num2].c[8].v == undefined ? "" : b();

                 function b() {
                   var o = [];
                   for (let i = 8; 11 >= i; i++) {
                     let typeoflink1 = jsonData.table.rows[num2].c[i].v.slice(0, 13) == "https://drive" ? " GDrive" : "";

                     // var mlinks = jsonData.table.rows[num2].c[Number(yu[i])].v.slice(0,13)=="https://drive" ? 'https://docs.google.com/uc?id='+jsonData.table.rows[num2].c[Number(yu[i])].v.slice(32, 65)+ '&export=download' : jsonData.table.rows[num2].c[Number(yu[i])].v;

                     let ts = yu[i] == 11 /* || yu[i]==10 || yu[i]==9*/ ;

                     var types = "r" + num2 + "c" + i;
                     var typel = "&ql=p" + num6 + "n1s";
                     let targetl = ts ? '/p/smdownload.html?url=' : '/p/fdownload.html?url=';
                     var mlinks1 = domainp + targetl + types + typel + "&ray=" + Id;
                     let flink = ts ? "https://shrinkme.io/st?api=2a55bb82d9f1f5c133f762ef25aa71937e7ac9bf&url=" + mlinks1 : mlinks1;
                     let locki = ts ? "lock" : "lock open";
                     let targetg = ts ? 'target="_blank"' : "";
                     //console.log(mlinks1)
                     jsonData.table.rows[num2].c[i].v.slice(0, 13) == "https://drive" ? o.push('<p class="paragraph">' + jsonData.table.rows[num2].c[1].v + jsonData.table.rows[0].c[i].v + ' x265 - (DD5.1 - 192Kbps)</p><div class="flexc"><a id="lk' + i + '" ' + targetg + ` onclick="ch('` + flink + `',` + i + `)"><p id="dbutton">Download ` + typeoflink1 + '<i class="' + locki + ' icon"></i></p></a></div>') : "";
                     var text1 = "";
                     for (let i1 = 0; i1 < o.length; i1++) {
                       text1 += o[i1] + "<br>";
                     };
                     document.getElementById("downloadlinks").innerHTML = text1;
                   };
                 };
               };

               function post1() {
                 const scriptURL = 'https://script.google.com/macros/s/AKfycbxKZDVo4c14XAwcoOhogO5PK77SBn-dzZ4lL36jx7CWHfanhQBH0zehx-BtMuMdDyM/exec';
                 var email = jsonData.table.rows[num2].c[1].v;
                 const formData = new FormData();
                 formData.append('email', email);

                 fetch(scriptURL, { method: 'POST', body: formData })
                   .then(response => response.json())
                   //.then(data => console.log('Success!', data))
                   .then(data => console.log('Success!'))
                   .catch(error => console.error('Error!', error.message));
               };

               //end fetch inside 
             });
         };
         init();
       })
   };
 };

 function loadidem2() {
   const sheetId = '1qVoouFtCPqk_owOct-dn6E7Vna0WEFKCtFLx7gZPw6E';
   const base1 = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
   const sheetName = 'content';
   const query1 = encodeURIComponent('Select *')
   const url1 = `${base1}&sheet=${sheetName}&tq=${query1}`
   document.addEventListener('DOMContentLoaded', init1);

   function init1() {
     fetch(url1)
       .then(res => res.text())
       .then(rep => {
         //Remove additional text and extract only JSON:
         const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

         function webc(num) {
           return jsonData.table.rows[num].c[0].v;
         };
         var rowslength1 = jsonData.table.rows.length;
         const randomIndex1 = Math.floor(Math.random() * rowslength1);
         const randomIndex2 = Math.floor(Math.random() * rowslength1);
         const randomIndex3 = Math.floor(Math.random() * rowslength1);
         const randomIndex4 = Math.floor(Math.random() * rowslength1);
         var arr = [randomIndex1, randomIndex2, randomIndex3, randomIndex4];
         const item = arr.filter((item,
           index) => arr.indexOf(item) === index);
         document.getElementsByClassName("content1")[0].innerHTML = webc(item[0]);
         document.getElementsByClassName("content1")[1].innerHTML = webc(item[1]);
         document.getElementsByClassName("content1")[2].innerHTML = webc(item[2]);
       })
   };
 };

 function loadidem3() {
   const sheetId2 = '1ifN0Ju1Y5YXvV0ykfqxPn2GlfKKqANm9_-OvLUvrw2g';
   const base2 = `https://docs.google.com/spreadsheets/d/${sheetId2}/gviz/tq?`;
   const sheetName2 = 'content';
   const query2 = encodeURIComponent('Select *')
   const url2 = `${base2}&sheet=${sheetName2}&tq=${query2}`
   document.addEventListener('DOMContentLoaded', init2);

   function init2() {
     fetch(url2)
       .then(res => res.text())
       .then(rep => {
         //Remove additional text and extract only JSON:
         const jsonData = JSON.parse(rep.substring(47).slice(0, -2));

         function webc(num) {
           return jsonData.table.rows[num].c[0].v;
         };
         var rowslength1 = jsonData.table.rows.length;
         const randomIndex1 = Math.floor(Math.random() * rowslength1);
         const randomIndex2 = Math.floor(Math.random() * rowslength1);
         const randomIndex3 = Math.floor(Math.random() * rowslength1);
         const randomIndex4 = Math.floor(Math.random() * rowslength1);
         var arr = [randomIndex1, randomIndex2, randomIndex3, randomIndex4];
         const item = arr.filter((item,
           index) => arr.indexOf(item) === index);
         document.getElementsByClassName("adc")[0].innerHTML = webc(item[0]);
         document.getElementsByClassName("adc")[1].innerHTML = webc(item[1]);
         document.getElementsByClassName("adc")[2].innerHTML = webc(item[2]);

       })
   };
 };
 loadidem1();
 //loadidem2();
 //loadidem3();
 function ch(m, c) {
   /*alert("Please share any one friend")
   if (navigator.share) {

     navigator.share({

         title: 'Tamil latest movies download',

         text: `Tamil latest movies download\nThis is my telegram channel 👇 join & get updated\nhttps://t.me/+gqUqFwu7xnw1OGU1\nThis our website you get all latest movies here 👇\n`,

         url: domainp,

       })

       .then(() => console.log('Share was successful.'))

       .catch((error) => console.log('Sharing failed:', error));

   } else {

     // Fallback for unsupported browsers

     //const shareUrl = `https://example.com/share?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent('Tamil latest movies download')}&text=${encodeURIComponent('Tamil latest movies download\nThis is my telegram channel 👇\nhttps://t.me/+gqUqFwu7xnw1OGU1\nShare with your movie lover friends 🌍')}`;

     //window.open(shareUrl, '_blank');

     alert("updated your browser")

   };*/

   let h = String('lk' + c);
   //setTimeout(function() {

     document.getElementById(h).href = m;

     document.getElementById(h).onclick = "vh()";

   //}, 5000);

 };

 function createShareButton(message) {
   navigator.share({
       title: message,
       text: message,
       url: domainp,
     })
     .then(() => console.log('Share was successful.'))
     .catch((error) => console.log('Sharing failed:', error));
 };
 if (!localStorage.getItem("go")) {
   localStorage.setItem("go", "1");

 } else {
   localStorage.setItem("go", Number(localStorage.getItem("go")) + 1);
 };

 function unlockl() {
   switch (Number(localStorage.getItem("go"))) {
     case 1:
       show("https://t.me/blr_edits");
       break;
     case 2:
       show('https://youtube.com/@grm_memes');
       break;
     case 3:
       show('//thefacux.com/4/5729275');
       break;
     default:
       createShareButton("download latest");
       break;
   };
 };
 let docs = (id, v) => { document.getElementById(id).style.display = v; };

 function show(lk) {
   // 'https://www.profitablegatetocontent.com/q8uasu7g?key=0a922fb04e21f107de27c7bb835df775'
   window.open(lk);
   setTimeout(function() {
     docs("yt", "block");
     docs("btn_yt", "none");
     docs("ytv", "none");
     docs("countdown", "block");
     docs("downloadbuttonmain", "block");
   }, 1000);
   docs("btn_yt", "none");
   docs("ytv", "block");
   docs("countdown", "block");
   docs("downloadbuttonmain", "none");
   var timeleft = 8;
   var downloadTimer = setInterval(function() {
     if (timeleft <= 0) {
       clearInterval(downloadTimer);
       document.getElementById("countdown").innerHTML = "Finished";
     } else {
       document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
     };
     timeleft -= 1;
   }, 1000);
 };

 function show15() {
   var utorant = confirm("You don't have the utorrent app?");

   if (utorant == true) {
     window.open("https://docs.google.com/uc?id=1E1vHJPx3Ni5AAuOfILE3tO52d_G1R5z9&export=download");
   }
   setTimeout(function() {
     window.open('https://www.youtube.com/channel/UCqhH1-YhkDfPWEQe-zySyHw');
   }, 5000);
 };
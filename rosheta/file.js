var imgArray = [];
var txtArray = [
`( diclac 150 قرص بعد الفطار )
  ( omepak 20 قرص بعد الفطار ) 
  (indotopic cream دهان 3 مرات) 
  (epinosin b عضل يوم بعد يوم) 
  (sirdalud 2 mg قرص قبل النوم )`, 

` (Mobic) 
  (Napizole)
   (Cymbatex 60)
    (Thiotacid 600)
     (Biovit)`, 

`(Tecnovula)
(Nolvadex)
(Chromax )
(Solupred 5)
(Vibromycin)
(Villamoral vaginal was)`,

`(Augmentin 1 gm tab)
 (After meals tab )
 (Dexilant 30 mg tab) 
 (Maalox) 
 (Gastromotil) 
 (Etaphylline)
  (Midodrine tab)
   (Librax tab)`,

`(NEXIUM40)
 (MOTILLUM TAB )
  (DOGMATIL 200 FORT )
   (DANSET 8MG)`
];

for(var i = 1; i < 6;i++){
    imgArray.push(`imgs/${i}.jpg`)
}

/* ... more images ... */

document.getElementById('nums').innerHTML="<<   عدد الروشتات " + imgArray.length + "    >>";

/*------------------------------------*/

var i = 0;

function nextItem() {
    if (i === txtArray.length) {
        alert("هل أعجبتك ؟ أعطينا تقييم للتطبيق لنرفع المزيد")
    }
    i = Math.min(txtArray.length, i + 1); // increase i by one
    //i = i % arr.length; // if we've gone too high, start from `0` again
    document.getElementById('output').textContent = txtArray[i]
    document.getElementById('output_image').src = imgArray[i]
}

function prevItem() {
    // if (i === 0) { // i would become 0
    //     i = txtArray.length; // so put it at the other end of the array
    // }
    i = Math.max(0,i - 1); // decrease by one
    document.getElementById('output').textContent = txtArray[i]
    document.getElementById('output_image').src = imgArray[i]
}

window.addEventListener('load', function () {
    document.getElementById('output').textContent = txtArray[0]; // initial value
    document.getElementById('prev_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            prevItem();
        }
    );
    
    document.getElementById('next_button').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            nextItem();
        }
    );
});






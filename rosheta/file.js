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
   ,
   `
   ديرماميد
دايفوبيت
زيرتك
   `
   ,
   `
   ميكوفللين شراب
فينآدون شـرآب
ابيمـول اكسـترا اقراص
سبكتراسيفكيور٣٠٠
   `
   ,
   `
   ارثروفاست 
   باكلوفين 25
   ايريني باثيك 
   ازورا كريم 
   روكسيكام حقن  
   `
   ,
   `
   ارتيكوسيف
فولتارين
 emazad كريم
ميديكسافلام
Zalance ا
   `
   ,
   `
   روتون
ديبوفيت
كالسيتريكس
   `
   ,
   `
   فلوتاك 
نورجيسك
نيروفيت
   `
   ,
   `
   جوينتاتيك
دانتيريلاكس
ادلور
امبيزيم
ثرومبكس
   `
   ,
   `
   زيثروماكس
الفيولين بي
بانادول
   `
   ,
   `
   رومارين 
   روبيفامين 
   ديبروكورتين حقن 
   موبيك 15مجم اقراص 
   اسيلوك 300اقراص 
   موديورتيك اقراص 
   `
   ,
   `
   ولبيترين
ديبوفيت
اوكسيتريليبازين
سيبرالكس
تيبوفورتين
   `
   ,
   `
   ديباكين شراب
تيراتام شراب
فى دروب نقط
فروتال شراب
اعشاب سيكم مهدئة
   `
   ,
   `
   افيروزوليد
   فولتارين
   كيتولاك
   كليندام300
   الفينتيرن 
   `
   ,
   `
   Mondo مرة صباحا
Perderm مرة مساءا
Fernilar شريط 
قرص قبل النوم
   `
   ,
   `
   ليبراكس
سيستون
يوفامين
تامسولين
   `
   ,
   `
   تريتوفلامين
ستارلين كريم
سينوبار 
بريتير كريم
   `
   ,
   `
   امبزيم 
   والفاكيموتريبسين حقن
    وكيورام 1جم
   ريباريل جيل 
   `
   ,
   `
   Cefotax
Curam 
ketolac
Pedicort
Tantum
   `
   ,
   `
   ارستابكس بلاس
تورسيورتك أقراص
كوندومانيا١٠
اسبويبد
تريبتزول 25 أقراص
انكونت 
سيرفيتام
ميلجا
   `
   ,
   `
   Folic acid
Ezacard
Utrocare
Prontogest 400
   `
   ,
   `
   ميكوفليين ٢سم كل ٨ساعه بعد 
الحقنة ٢سم ع البودره وياخد 1سم يوميا
   `
   ,
   `
   دولفين امبول
ديكساميثازون امبول
   `
   ,
   `
   بلاتينور ٧٥
بيجاكسين كبسول
الداكتون ٢٥ مج
فلاميبرو كبسول
ازجوفانس كبسول
كومفولكس جيل
نيوروتون امبول
   `
   ,
   `
   كيلاجون 3مرات لمدة اسبوع
يوريفين3مرات لمدة 5ايام
بيبون بلس كل 24ساعة لمدة اسبوعين
انوفا قرص يذوب ع نصف كوب ماء
كل 12ساعة لمدة يومين
   `
   ,
   `
   كلارتين اقراص
كوديلار شراب
باكتبرو شراب
كيناكورت اقراص
   `
   ,
   `
   فيروجلوبين 
فاسكولار
بي كوم
برونتو جيست لبوس تركيز ٢٠٠
زاندروس
   `
   ,
   `
   توفرانيل ١٢٥
فيلوسيف 1جرام
ديكساميثازون
   `
   ,
   `
   راني امبول
كيتولاك امبول
المودوكساسين 500mg اقراص
   `
   ,
   `
   ابيدون شرب
ايبكوفلين شرب
ديكساميثازون حقن
يونيكتام حقن 
امبريكسول
   `
   ,
   `
   لازيلاكتون100
 Aspocid 75 
 nitromak 2.5
Ator
Exanide 20
   `
   ,
   `
   ديكلوفين امبول 
كومتركس
   `,
   `
   Unipridol fort  syp
Herbacaf  syp
Fernilar
   `,
   `
   زوراكسون 
ادويفلام
بارامول
زيثروكان
   `,
   `
   هيدروكين 200 اقراص
اندوميثازين لبوس
انتي كوكس 15مجم كبسول
ايه اي جي ايزموبرازول40مجم اقراص
موتيفال اقراص
   `,
   `
   كيورسيف نقط
نيزابكس شامبو
تيكساكورت على دكتاكورت خليط
وفي برمنجات 1/8000
فنستيل نقط
   `,
   `
   بنداكس
فلوكورال
نيورتون
باترافين
لاميفين
   `,
   `
   زوفيراكس
ميجاليز
   `,
   `
   كلوفرين
يوفامين
كيتوبريك
جينوكونازول
باندرمال
   `,
   `
   يور ايد
دونيفوكسات
نابروفين
   `,
   `
   Hiderm soap 
Delarex
   `,
   `
   
ليبانتيل ٣٠٠ 
موديريتك 
اندوجابلين
انتودين 
فولتارين لبوس 
كالسيمات
   `,
   `
   Vomistop
folicap 0.5
   `,
   `
   دافلون ٥٠٠ اقراص
سافييبليد 
ميجابيو ٧٥ اقراص 
رابيدوس ٥٠ اقراص
اكسترا كريم
   `,
   `
   
Duphaston tap
Aspocid 75 tap
Omega 3 cap
Folic acid
   `,
   `
   Bon care ,25
Calcitron 
Daflon
   `,
   `
   
Rosuvast 10
Zandros
Nebasco 5
Examide 10
No migraine
   `
];

for(var i = 1; i < 51;i++){
    imgArray.push(`imgs/${i}.jpg`)
}

/* ... more images ... */

document.getElementById('nums').innerHTML="<<   عدد الروشتات " + imgArray.length + "    >>";

/*------------------------------------*/


var i = 0;
console.log(i)
function nextItem() {
    if (i === txtArray.length -1  ) {
	if (confirm('هل أعجبتك ؟ أعطينا تقييم للتطبيق لنرفع المزيد')) {
    		window.location.href = "https://play.google.com/store/apps/details?id=com.otc";

	} 
	//alert("هل أعجبتك ؟ أعطينا تقييم للتطبيق لنرفع المزيد")
     } else {
    i = i + 1; // increase i by one
    console.log(i)
    document.getElementById('output').setAttribute('style', 'white-space: pre;');
    document.getElementById('output').textContent = txtArray[i]
    document.getElementById('output_image').src = imgArray[i]
    changeinput(i) 
    if (i === 5){
      if (confirm('هل أعجبتك ؟ أعطينا تقييم للتطبيق لنرفع المزيد')) {
         window.location.href = "https://play.google.com/store/apps/details?id=com.otc";

  }
    }

}
}

function prevItem() {
    if (i > 0 ){
    i = i - 1; // decrease by one
    console.log(i)
    document.getElementById('output').textContent = txtArray[i ]
    document.getElementById('output_image').src = imgArray[i ]
    changeinput(i) 

}
}

window.addEventListener('load', function () {
    document.getElementById('output').textContent = txtArray[0]; // initial value
    document.getElementById('output_image').src = imgArray[0 ]
    //document.getElementById('prev_button').addEventListener(
     //   'click', // we want to listen for a click
      //  function (e) { // the e here is the event itself
       //     prevItem();
        //}
    //);

    
    //document.getElementById('next_button').addEventListener(
     //   'click', // we want to listen for a click
      //  function (e) { // the e here is the event itself
       //     nextItem();
       // }
    //);
});





function moveto() {
    var input
    i = parseInt(document.getElementById("roshetanum").value   ) - 1
    console.log(i)
    document.getElementById('output').textContent = txtArray[i ]
    document.getElementById('output_image').src = imgArray[i ]
  }

  function changeinput(i) {
    var input
    document.getElementById("roshetanum").value  = i 

    
  }

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
   `,
   `
   سيفوتاكس
نيوزيلكس حقن
موتليم
ستربتوكين
سبازموفين
   `,
   `
   itopride و
دايجينورم شراب
وpantoloc 20
   `,
   `
   سوبراكس 30مل
 سيتال نقط 
امبركسول نقط
   `,
   `
   سولوكورتيف
 امبيزيم 
اوجمنتين 
فلازكور
فلاموسيل ادول
   `,
   `
   زوراكسوان
فورتيكورتين
افيبكت
فاركوسولفين
   `,
   `
   
Mucotec 300 
Norhinose spray
   `,
   `
   
 سليب ايز
 كوجينتول
 كونفيجران٢٥
   `,
   `
   
يونيتون 4 كريم 
زنك بلس اقراص 
نيونيل كريم
   `,
   `
   
Ambezim g tab
Anox tab
   `,
   `
   
فروت كال
كلوسبامين فورت
ايتاترون 
ديبوفيت امبول
   `,
   `
   
دولفين ك حقن عضل يوميا
اريثركس 200 كبسول مرة بعد الفطار 
 يوريفين فوار  مرتين يوميا
   `,
   `
   
Flazacor30
Gincobiloba
Ezogast40
Betolvex amp
Escita
   `,
   `
   
كيفورك
توسيكان
كيتوبريك
كيتولاك
   `,
   `
   
Lantopep 60
Ganaton 50
Neurimax amp
Digenorm syp
   `,
   `
   
ناترى صابون
فيبراميسين
زيرتك
ديرماتوب
اليجون كريم للعين
   `,
   `
   
سيفاكسون
اسماكاست
فوراديل
ميفلونيذ
   `,
   `
   
جلوكوز
سكروفير
ابيدرون
بيكوزيم
تريكتين قرص
موتيليوم شراب
بيرفتكس امبول
   `,
   `
   
جلوكوز 5 فى الميه
ادولور 30
فيسيرالجين
دانسيت4
رايسك 40
بيمفاست1جم
جاست ريج امبول
   `,
   `
   
اوبتيرد
باتانول
   `,
   `
   
ديلاركس
تكساكورت
جنتازون
توب فلام 
بريد سول
هاي ديرم صابونة
   `,
   `
   لونجاسيف
ميكوفللين
فنتولين
   `,
   `
   
برازر كير كريم
كليروفات
   `,
   `
   
محلول جلوكوز ملحي 
فيسرالجين 
زانتاك
برمبران
ليوسيفورت
هيباتوكسيم ١ جم 
نو تريبل او ( ميمورال ) 
كل دول مع المحلول كل ١٢ ساعه 
ايميتريكس قرص 
سيرڤيتام ك
   `,
   `
   
تيكانيز اسبراي
فيناكسان
بارامول أقراص
كيتولاك امبول
فاموتين اقراص
   `,
   `
   
رواتينكس 
ك١ ايبكس اقراص
ديكسلانت30ملي 
جاناتون50ملي
   `,
   `
   
ريلاكس كريم
كلوبكس اقراص
بريستفلام أقراص
ليفابيون امبول 
اوستيوكير اقراص
   `,
   `
   
ليوميتاسين أمبول
نورفلكس
فلكسيلاكس
سيلبريج
 اوميز 20
   `,
   `
   
دلتازون
رويال فيت جى
   `,
   `
   
دلتا فيت ب ١٢ اقراص استحلاب تحت اللسان
فيا كال شيكولاته اقراص
   `,
   `
   
سيتال نقط 
انتينال شرب 
فلاجيل 
جاست ريج
   `,
   `
   
محلول ملح 
فيسرالجين امبول
سيفازون اجرام فيال
ابيدرون امبول
رآني امبول
بيرمبيران امبول 
ديبوفيت لبوس 
رواكول قراص
   `,
   `
   
اندرال40
كونتراليبسي
سيتالو
ميوفين
ناريدركس2.5
   `,
   `
   
اكني مايسن
بيوتاكسيمارك
يوني فنجاي أو كانديوازول
فاشكو
فروموز اي كريم
   `,
   `
   
فاركوتيليام
فيدروب
فنستيل
أكوا بلس
دينتونكس
   `,
   `
   
Stimulan amp
Ginkobiloba caps
Jueprin 81mg
Ator 10mg
   `,
   `
   
درموفيرين أقراص منع الحمل
امريزول ان لبوس
اوكافا تشطيف
   `,
   `
   
Duphaston tab  
folicap 0.5 cap 
neurobion amp 
ezacard ca
   `,
   `
   
موون فيس 
كوزموديرم
فوتكس كريم
سيليكي لايف
اندوفيل
اكت زينك
   `,
   `
   
كيروفيت كبسول 
دلتافيت
هيما كبسول
فوليك اسيد اقراص 
كوناديون اقراص
   `,
   `
   
هيدروكينون 
اسكربيك
بانثينول
موميسون 
اكرتين 
انفنتي صابونه
كابرون500
   `,
   `
   
سولبيريد20
ازاثيوبرين50
بنتاسا
جاسترلوك40
كلوفيرين اس ار
   `,
   `
   
ترايتون٢٠٠
سيبرديازول
فيرم1
   `,
   `
   
ميديفيت شراب
نيكسبرو اكياس
   `,
   `
   
ارسوجلوب كبسول
ارتكيوسيف كبسول
موبي ايز  جيل
انوكسيكام 20 مجم
   `,
   `
   
مكسيماش40
سبازمودايجستين
رانى  
فيسرالجين امبول
موتيليوم شراب
   `,
   `
   
ديبروفوس امبول 
ليفست ق
كيناكورت
ديرموفيت كريم
جلسرين صابونه
كبيرون
   `,
   `
   
كوردارون
اوميز
   `,
   `
   
يونيكتام 1.5 
دولفين 75 
سيبترين اقراص
 الليرجكس اقراص
 بنادول العادي
   `,
   `
   
اسيتيل ستاتين فوار
زيتوكسونال
مالوكس بلس
بروبريك
فاركولين
ميفلونيد
فوراديل
   `,
   `
   
Silymarin plus Sach 
Conadione 
Lactulose 
rentol حقنه شرجيه 
Calmag
   `,
   `
   
فيروترون
بيوفيت امبول
   `,
   `
   
الفاكيموتريبسن
ميلوفلام
كالسيدول
   `,
   `
   
ليفابيون
فولتارين
مالتي ريلاكس
رانيتاك
   `,
   `
   
R M soap.  
butaximark cream
   `,
   `
   
زيرتك
موكسفلوكساسين
باى الكوفان
   `,
   `
   
naphcon A
hyfresh
brimonacond
corner gel
   `,
   `
   
Mobitil supp
Esomuim 40
Vidrop drops
Uri aed eff
   `,
   `
   
Haemostop amp
Kapron
Dioced c
Bruffen400
   `,
   `
   
Bioglimet plus
Pregdin apex
Power b complex
   `,
   `
   
Levoflixacin
Syston 
Rowatinex.
Epimag. 
Flector
curepro
   `,
   `
   
فلاجيل
بيدياشور
هاىبيوتك ٤٦٠
   `,
   `
   
Vapozole
Quinabiotic
All vent
   `,
   `
   
كلاريثرو 
فلاجيل 
اموكسيل ٥٠٠
 استوهالت
   `,
   `
   
اندرال 40
كاربيمازول 5
زوراكال40 
توبرامات 25
جاستروموتيل
   `,
   `
   
موتيفال
كاربابكس١٠٠
   `,
   `
   
كيتوفان امبول
كتافلاي
هايبيوتيك ٦٠٠
بروفين
   `,
   `
   
بسكوبان 
فولتارين 
رينجر محلول
جاست ريج 
سبازموبينافير
   `,
   `
   
كيمبوبيم
فينتالير فورت
فياساليمول
بيتاليرج
ازماكاست
   `,
   `
   
كونتراكتيبيكس 
ديرموفيت 
ماربالين
كولشيسين
   `,
   `
   
Incont la 4mg
Urginafact
Arcalion fort
Omega3
Uripan
   `,
   `
   
يوناسين750
دولفن25
اوترفين
ستريم
فينادون
   `,
   `
   
كانيولا20
محلول ملح
فيروساك
سوبرسيز
   `,
   `
   
برونكوتيك
جى سى مول
كلافيموكس
   `,
   `
   
فلومكس 0.5 امبول
بيبي ريليف 12.5 لبوس
   `,
   `
   
يورينكس
سبازموسين
   `,
   `
   
سيردالود
ديفيدو
ميلوكسيكام
فولتارين
بروفينيد لبوس
   `,
   `
   
Anthzon 
Doxycost
Dalacin-c
Meglase
   `,
   `
   
زنتاك امبول
كورتيبلكس امبول 
فيسرالجين امبول
   `,
   `
   
سليمارين بلس 
دايجينورم 
ابيكوزيم
جيمافيتا
   `,
   `
   
سبارا 200
سيتروسيد فوار
سوليد لبوس
   `,
   `
   
سيربروليسن
تيبونينا
كيمريكا75
تريبتزول10
اميوران
سولوبريد20
انوفا
   `,
   `
   
فيناكسان٥٠٠
ايه جى ايزوميبرازول
موتيليم
   `,
   `
   
كولشيسن
اميوران
تينتا فير بخاخ
فلوتيفورم ١٢٥ 
بيتاليرج اقراص 
نيكسيكيور
   `,
   `
   
Urivin sach.
Etodin300.
Adwimove gel.
xanthubex80
   `,
   `
   
Uricorinal eff
Celebrex 200 tab
Diacerin caps
Goutyless tab
   `,
   `
   
هيماتكس
لاكتوكال
   `,
   `
   
فوراديل
ميفلونايد
سوليوبريد
كولشيسين
استيل سيستاتين
لازيلاكتون
   `,
   `
   
رانجير
بروتولانز
   `,
   `
   
ايزميوم
ديكلوتزين فوار
انتى كوكس
دروفين
ماجنابيوتك٦٢٥
ميدريست كريم
   `,
   `
   
جلسرين صابونة
درموفيت 
افيل امبول
فاستل ١٨٠ اقراص
solo  lotion و
وkeflex 500 tab
   `,
   `
   Valigen sach
Aceclecopa
Depovit
   `,
   `
   
سولوكورتيف
امبيزيم
اوجمنتين
فلاموسيل
فلازكور
ادول
   `,
   `
   
Ciprodiazol 500 
Ambezim 
Fusi cream
   `,
   `
   
زيتوكسانال 
يورينكس
   `,
   `
   
Amaryl 4 mg 
Galvus met 50/1000
Milga
Erastapex plus 40/12.5
   `,
   `
   
امريزول
زيثروسين
ويست بريث
فوراديل
مفلونيد
دكتارين
   `,
   `
   
جاروبرايد
ايزوميلودان40
جاستروبيوتيك200
   `,
   `
   nexium
mucosta
motillium
eucarbon
flagyl
nystatin
   `,
   `
   
تيبوفورتين ٨٠
ديسبركام ٢٠
   `,
   `
   
نيكسكيور ٤٠ 
ليبراكس 
دايجنورم شراب 
موتيفال اقراص شريط 
بى كوم
   `
];

for(var i = 1; i < 151;i++){
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

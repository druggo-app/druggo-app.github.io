var colds = [
  {
      "filename": "ملف المضادات الحيوية",
      "description": "سيتم إضافة وصف ملف المضادات الحيوية قريبا قريبا",
      "url":"https://drive.google.com/open?id=12stWrRpGZDqEPv1Wys-Ruyv7pGxbxTfE"
  },
  {
      "filename": "ملف أدوية البرد",
      "description": "سيتم إضافة وصف ملف البرد قريبا",
      "url":"https://drive.google.com/open?id=1F8wKnozW0pSdE19JPq52zN4UBu3WrDUO"
  },
  {
    "filename": "روشتات مشهورة",
    "description": "سيتم إضافة وصف  قريبا",
    "url":"https://drive.google.com/open?id=1XLHSzpPAb7nhQa11xdeNckOkwb7cdC9r"
  },
  {
    "filename": "كل ماتريد معرفته عن القطرة",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1LlLSH91FX06AByJtDqt-Ywhykp0aYUgt"
  },
  {
    "filename": "أدوية التلاجة",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=14n3pWTmrD8wHwpEIxYFzV1UUMOW01l9-"
  },
  {
    "filename": "الحقن بأنواعها",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1fpr_DsXbdXB-aCFzCsOFENnR6fEPXRC-"
  },
  {
    "filename": "فهم التحاليل المعملية",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1JsltMZxtF0hLo8XpsLmCI2xspICAeEQv"
  },
  {
    "filename": "أدوية امنه في الحمل",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1R_GlEDqo4anegH_2YMiNwiJ4Kgh-cw5q"
  },
  {
    "filename": "جرعات الأطفال",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=132u47HxenB6kkanhBEdyifjE2ywVYrN6"
  },
  {
    "filename": "أدوية الحمل 2",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1wUaDAKYmpRCOHjDWPYRffm2hK7wUdaKU"
  },
  {
    "filename": "المحاليل بأنواعها",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=13yYgUf1iGdmZ7DyXm71hHDyTaY2upkRy"
  },
  {
    "filename": "تجميعة اللبوس",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1Bl8ZMVmOzznt6gNWbEvThaNNB4xSXaRV"
  },
  {
    "filename": "غرز الخياطة بأنواعها",
    "description": "سيتم إضافة وصف قريبا",
    "url":"https://drive.google.com/open?id=1dq78uBhyLU8JXq3dA4dZlwhcM6db4S8S"
  },
  {
    "filename": "المزيد قادم",
    "description": "سيتم إضافة وصف قريبا",
    "url":""
  },


  
];

var ele = document.getElementById('sel');

for (var i = 0; i < colds.length; i++) {
  
  var x=colds[i]['url'];
  ele.innerHTML = ele.innerHTML +
      '<option value="'+colds[i]['description'] +'<br>'+ x +'<br>'+ '">' + colds[i]['filename'] +'</option>';
}
function show(ele) {
// GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
var msg = document.getElementById('msg');
document.getElementById("downloadlink").href=colds[ele.selectedIndex - 1]['url']; 

msg.innerHTML = 
  ' الوصف : <b>' + colds[ele.selectedIndex - 1]['description']; + '';
}
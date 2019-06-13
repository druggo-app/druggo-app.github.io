/**
 * Add two markers showing the position of Liverpool and Manchester City football clubs.
 * Clicking on a marker opens an infobubble which holds HTML content related to the marker.
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addInfoBubble(map) {
    var group = new H.map.Group();
  
    map.addObject(group);
  
    // add 'tap' event listener, that opens info bubble, to the group
    group.addEventListener('tap', function (evt) {
      // event target is the marker itself, group is a parent event target
      // for all objects that it contains
      var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
        // read custom data
        content: evt.target.getData()
      });
      // show info bubble
      ui.addBubble(bubble);
    }, false);
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\`mailto: hota_2026@yahoo.com\` >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\`tel: 01060129791\` >01060129791</a></div>` + 
        `<div>Bacalor ,2014</div>` +
        `<div> I have experience in all aspects of pharmacy more than 7 years ,l was worked at a company of drugs for part of time  ( pharma overseas)and l acquired experience in this field.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>Asmaa Nasr</h4>`  +
        `<div ><a href=\`mailto: elnagarasmaa816@gmail.com \` >elnagarasmaa816@gmail.com </a></div>` + 
        `<div ><a href=\`tel: 01068221725\` >01068221725</a></div>` + 
        `<div>Faculty of Commerce</div>` +
        `<div>انا طالبه ف كليه تجارة
اشتغلت 4 شهور ف صيدلية 
عندي خبرة لحد ما كويسة 
ابحث عن عمل ف صيدلية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1344727, lng:33.7982304},
        `<h4>Ahked Abdel Rahman Selem Azazy</h4>`  +
        `<div ><a href=\`mailto: Azazyahmed44@gmail.com\` >Azazyahmed44@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01282143287& 01060556411\` >01282143287& 01060556411</a></div>` + 
        `<div>Faculty of pharmacy Sinai Univeraity june 2016</div>` +
        `<div>
Pharmacist at sedra pharmacy from 1/10/2016 till 31/9/2018
Demonstrator at faculty of pharmacy sinai university from 1/10/2018 till now
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.6438371, lng:31.2711392},
        `<h4>Ahmed younis</h4>`  +
        `<div ><a href=\`mailto: Shooter.2022@gmail.com\` >Shooter.2022@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01014486427\` >01014486427</a></div>` + 
        `<div>Mass communication </div>` +
        `<div>Medical representatives in pharma tread 
Medical representatives  in promedical
Medical representatives  in cardinal pharma
Supervisor Medical representatives in Eagel pharma 
Sinor medical representatives in Roventis pharma </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\`mailto: hota_2026@yahoo.com\` >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\`tel: 01060129791\` >01060129791</a></div>` + 
        `<div>2014,bacalor</div>` +
        `<div>ابحث عن وظيفة ف سلسلة ادوية من السلاسل الكبري ، خبرة اكثر من 7 سنوات ف مجال الصيدليات ،اشتغلت في شركات ادوية مثل فارمااوفرسيز واكتسبت خبرة ف هذا المجال ولدي خبرة في مايختص الادوية والصيدليات من الادارة  والطلبيات والادوية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2578392, lng:29.9883729},
        `<h4>Ahmed mahmoud mohamed</h4>`  +
        `<div ><a href=\`mailto: Ahmedmahmoud242424@gmail.com\` >Ahmedmahmoud242424@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01158005237\` >01158005237</a></div>` + 
        `<div>Bachelor of science (2017)</div>` +
        `<div>Working at loran hospital from 1/1/2018 till now
Worked at wekash for network marketing (2015)
.
.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1418051, lng:30.2004118},
        `<h4>Rana maher</h4>`  +
        `<div ><a href=\`mailto: rona1maher@gmail.com\` >rona1maher@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01272123342\` >01272123342</a></div>` + 
        `<div>Fuctly of education ..science 2019</div>` +
        `<div>Worked in pharmacy 
 worked in company
Learning english in real soft house
Fuctly of education 
Department of science
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.3211544, lng:30.7901045},
        `<h4>Ahmed gooda abd alazim </h4>`  +
        `<div ><a href=\`mailto: Ahmedgooda109@gmail.com\` >Ahmedgooda109@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01093092178 \` >01093092178 </a></div>` + 
        `<div>سنه التخرج 2019  كليه تجاره جامعه بني سويف </div>` +
        `<div>عملت سابقاً كا midcal في شركه رعاية
عمالت أيضآ في المتحدة كا تلي سيلز
عمالت مندوب مبيعات في شركه ادويه حول العالم
عمالت كا midcal ع product ال pandol </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8049014, lng:30.5281105},
        `<h4>سمر رفعت خميس </h4>`  +
        `<div ><a href=\`mailto: Samarkhamis99@yahoo.com\` >Samarkhamis99@yahoo.com</a></div>` + 
        `<div ><a href=\`tel: 01062811634\` >01062811634</a></div>` + 
        `<div>بكالوريوس علوم 2019</div>` +
        `<div>1-تدريب لمدة سنة ف معمل 
2- تدريب لمدة سنة ف صيدلية 
3- تدريب لدي شركة غرب الدلتا لإنتاج الكهوباء لمدة شهر 
4- البرنامج التدريبي للسلامة والصحة المهنية لمدة اسبوع 
5- course in medical laboratory workshop and scientific research program 
5- تدريب لمدة ستة أشهر ف مستشفي 
6-تدريب لدي شركة مياة لمدة أسبوعين   </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.0738067, lng:31.1110982},
        `<h4>Essam Ramadan Mahmoud </h4>`  +
        `<div ><a href=\`mailto: Essam14shika@gmail.com \` >Essam14shika@gmail.com </a></div>` + 
        `<div ><a href=\`tel: 01147486262 \` >01147486262 </a></div>` + 
        `<div>Science 2014</div>` +
        `<div>Medizen pharmaceutical 1/2018 till now
Unipharma 12/2016 to 12/2017
Prof. Assistant in air defence college </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9694583, lng:31.1922107},
        `<h4>RANA Esam Abd El Aziz Drrag</h4>`  +
        `<div ><a href=\`mailto: dr.ranaesam@gmail.com\` >dr.ranaesam@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01148130699\` >01148130699</a></div>` + 
        `<div>Bachelor degree in science 2018 chemistry department Mansoura university </div>` +
        `<div>6 months experience at welcome pharma
Experience in derma, ortho, pedia, gyna
Have sales planning course at bepac center
Trained at El Dokki research center </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.10457, lng:29.7819054},
        `<h4>Aml Mahmoud </h4>`  +
        `<div ><a href=\`mailto: amlmahmoud2017@gmail.com \` >amlmahmoud2017@gmail.com </a></div>` + 
        `<div ><a href=\`tel: 01285253867\` >01285253867</a></div>` + 
        `<div>Faculty of science /2017</div>` +
        `<div>-Worked as meaical rep at macro group for 9 monthes
-training at mahfouz pharmacies for 2 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2188386, lng:29.9450682},
        `<h4>Mahmoud shawky </h4>`  +
        `<div ><a href=\`mailto: mash22057@gmail.com \` >mash22057@gmail.com </a></div>` + 
        `<div ><a href=\`tel: 01064928358 \` >01064928358 </a></div>` + 
        `<div>Pharmcist 2016 </div>` +
        `<div>Kobry El-Qobba hospital
Pharmacist at dr Abdalla pharmcy
Dr ahmed sad pharmcy
Training in Elazby pharmcy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.6438371, lng:31.2711392},
        `<h4>Ahmed younis</h4>`  +
        `<div ><a href=\`mailto: Shooter.2022@gmail.com\` >Shooter.2022@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01014486427\` >01014486427</a></div>` + 
        `<div>Mass communication </div>` +
        `<div>Medical representatives in pharma tread 
Medical representatives  in promedical
Medical representatives  in cardinal pharma
Supervisor Medical representatives in Eagel pharma 
Sinor medical representatives in Roventis pharma 
Area Giza center </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7970093, lng:31.6219939},
        `<h4>Ahmad Mansour</h4>`  +
        `<div ><a href=\`mailto: Www.ahmadmansouresmaiel@gmail.com\` >Www.ahmadmansouresmaiel@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01095079364\` >01095079364</a></div>` + 
        `<div>Pharmacist / 2017</div>` +
        `<div>Nothing experience 
Nothing experience
Nothing experience
Nothing experience
😇😇😇😇😇😇😇</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1363247, lng:30.1312604},
        `<h4>Mahmoud Elsayed Abd Elaziz Elshaer</h4>`  +
        `<div ><a href=\`mailto: Melshaaeer29@gmail.com\` >Melshaaeer29@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01287989380\` >01287989380</a></div>` + 
        `<div>P.of.science alex uni</div>` +
        `<div>Work as M.rep at bio cure pharm from 4/2018 to 12/2018
M.rep at medical group pharm from 1/2019 to 6/2019
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:24.0747397, lng:32.9002665},
        `<h4>محمد عصام إدفاوي محمد </h4>`  +
        `<div ><a href=\`mailto: dr.mohamedesaam55@gamil.com \` >dr.mohamedesaam55@gamil.com </a></div>` + 
        `<div ><a href=\`tel: 01021726764\` >01021726764</a></div>` + 
        `<div>بكالوريوس صيدلة النهضة ٢٠١٧ </div>` +
        `<div>Medical representative Aswan in rameda company
Work at Ahmed Ali hmad pharmacy 
Work At abden pharmacy
Training at epico company </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1477172, lng:30.1260363},
        `<h4>Mohamed samir Elkholy </h4>`  +
        `<div ><a href=\`mailto: Hamada_el5oly60@yahoo.com \` >Hamada_el5oly60@yahoo.com </a></div>` + 
        `<div ><a href=\`tel: 01272072516\` >01272072516</a></div>` + 
        `<div>Pharmacist     2017</div>` +
        `<div>ميديكال ريب في نطاق محافظه البحيره او اسكندريه 
فريش 
خريج دفعه 2017
خبره في عمل الصيدليات </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.8327534, lng:31.4909984},
        `<h4>Ali Mohamed ahmed</h4>`  +
        `<div ><a href=\`mailto: alinouh2019@gmail.com\` >alinouh2019@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01094720350\` >01094720350</a></div>` + 
        `<div>Faculty of Pharmacy 2015</div>` +
        `<div>Members in EPSF (Egyptian pharmaceutical student federations 
Training medical rep in astrazeneca Combines 
Jop pharmacist in Normandy pharmacy 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.8996293, lng:32.7244302},
        `<h4>Baher galal</h4>`  +
        `<div ><a href=\`mailto: Bahervet@yahoo.com\` >Bahervet@yahoo.com</a></div>` + 
        `<div ><a href=\`tel: ٠١٢٢٢٧٤٤٢٨٨\` >٠١٢٢٢٧٤٤٢٨٨</a></div>` + 
        `<div>Faculty of veterinary medicine 2016</div>` +
        `<div>Experience : 
Training in el ragaa pharmacy 
Worked for bluemoon animal center hurguada </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0864201, lng:31.189176},
        `<h4>Beshoy Nader Boushra </h4>`  +
        `<div ><a href=\`mailto: beshoawad13@gmail.com\` >beshoawad13@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01203207818\` >01203207818</a></div>` + 
        `<div>Yet student</div>` +
        `<div>احتاج تدريب ف شركة أدوية انا طالب ف السنة الثالثة كلية علوم جامعة حلوان قسم بيولوجي</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0261588, lng:30.4675444},
        `<h4>Farah ahmed fahmy,,,,,, in behera _damanhour</h4>`  +
        `<div ><a href=\`mailto: Memomoon96@yahoo.com\` >Memomoon96@yahoo.com</a></div>` + 
        `<div ><a href=\`tel: 01096706744\` >01096706744</a></div>` + 
        `<div>Graduated from the Faculty of Science in 2018</div>` +
        `<div>Training in the general hospital ,,,,
 First aid course in the Faculty of Science, ,,, Worked in voluntary work Orman Society ,,,, Worked in a laboratory analysis in Damanhour</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3064524, lng:31.3323955},
        `<h4>Esraa abd elhameid </h4>`  +
        `<div ><a href=\`mailto: esraaabdo5197@gmail.com\` >esraaabdo5197@gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01023585198\` >01023585198</a></div>` + 
        `<div> Faculty of Sciences
Special Chemistry Department</div>` +
        `<div>Training in oil and pharmaceutical companies

Training with analysis laboratories</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.3081242, lng:30.9654958},
        `<h4>Mahmoud Nasr Mohamed </h4>`  +
        `<div ><a href=\`mailto: Mahmoud Nasr Mohamed @gmail.com\` >Mahmoud Nasr Mohamed @gmail.com</a></div>` + 
        `<div ><a href=\`tel: 01062549726\` >01062549726</a></div>` + 
        `<div>Veterinarian graduated in 2017</div>` +
        `<div>Training in egy pharma

Very good in windows.

Very good in english

Very good yn word exel power point

Excellent in presentation and hard worker

I have good pharmaceutical basic sell skills </div>` 
        
        );
        
}
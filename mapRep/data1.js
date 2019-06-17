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
addMarkerToGroup(group, {lat:31.4476469, lng:31.6914223},
        `<h4>ibrahim smysem</h4>`  +
        `<div ><a href=\'mailto:Medicalrepibrahim@gmail.com \' >Medicalrepibrahim@gmail.com </a></div>` + 
        `<div ><a href=\'tel:+201028251523\' >+201028251523</a></div>` + 
        `<div>BSc in biological sciences 2007 </div>` +
        `<div>Sales Rep in various companies from 2003 to 2012
Senior medical Rep from 2012 to 2018in well established  companies </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.0738067, lng:31.1110982},
        `<h4>Essam Ramadan Mahmoud </h4>`  +
        `<div ><a href=\'mailto:Essam14shika@gmail.com \' >Essam14shika@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01147486262 \' >01147486262 </a></div>` + 
        `<div>Science 2014</div>` +
        `<div>Medizen pharmaceutical 1/2018 till now
Unipharma 12/2016 to 12/2017
Prof. Assistant in air defence college </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.0855883, lng:30.7557018},
        `<h4>Zeinab Mostafa Abd elgaber</h4>`  +
        `<div ><a href=\'mailto:Ph.zynaboo27@gmail.com\' >Ph.zynaboo27@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01150596511\' >01150596511</a></div>` + 
        `<div>Bachelor of Pharmacy، 2018</div>` +
        `<div>Personal Information
Nationality:            Egyptian
Contact Address:   EL Minia 
E-mail Address:   zienab.mostafa@nub.edu.eg  or    
ph.zynaboo27@yahoo.com  
Cell phone:     02-(011)50596511 & 02-(010)03443991                               
Marital status:  Single


Education
Bachelor of pharmacy   
Graduated with degree of excellence with the first honors with total GPA 3.99
- Faculty of Pharmacy – Nahda University in Beni suef (NUB).
- Now, studying premaste in Beni suef university.

Work History
Training in community pharmacy in the summer of 2015,2016  and working 2018 
Courses
1-course "practical skills" by Dr.kamal saleib, in the 5th of December, 2013
2-course "clinical pharmacology - Analgesic-and time management" by Dr. Sayed Fathy Ali , December,2013.
3-course "Marketing Session" in 2013.  
4- course "soft skills session" by Dr.Kamel Hasaballah  incjuding 
CV Writing_Interview skills
5- "Ultimate Medicl course" by Dr.Ahmed Elgwely at summer 2016


LANGUAGE SKILLS
Arabic: Native.
English: Advanced
SOFRWARE / SYSTEM SKILLS
Windows office (Word, Power point, Excel): Excellent.
Internet use: Very good. 
Programs: Good.
Personal Skills
- Team Player. 
- Hard Worker, Self-Motivated and Reliable.
- Leadership and Communication Skill.
- Work Effectively Under Pressure.
- Learning New Tasks Quickly.
- Ability to Take Decisions Especially In Critical Situations.


Experience
Related to Career: 
- Participated  in campaign sharak wafarahum . 
- Participated in numerous students activities in NUB University
- Participated in 3D EPSF project as team member in Nahda University – Beni-suef.
-Participatd in presentation about gout ,hypetanion ,Diabetes, thyroid diseases,and GARD.
-Atteded more event to Ahmed elgwaly in minia and bani swaf
-Attend events to GMP in 2015
-Training in pharmacy of Dr.Reham Mahmoud in taha hussin in minia 2017
-Training in pharmacy of Dr. Alaa raian in minia in 2018
-Training in pharmacy of Dr. Doaa ezat </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0453235, lng:31.3167134},
        `<h4>Ibrahim abdelgwad haggag </h4>`  +
        `<div ><a href=\'mailto:Ibrahimhaggag96@gmail.com\' >Ibrahimhaggag96@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01028857389\' >01028857389</a></div>` + 
        `<div>Graduated pharmacist (2019)</div>` +
        `<div>
English corse .
Otc corse .
Hard worker .
Work in pharmacy field for two years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\'mailto:hota_2026@yahoo.com\' >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01060129791\' >01060129791</a></div>` + 
        `<div>2014,bacalor</div>` +
        `<div>ابحث عن وظيفة ف سلسلة ادوية من السلاسل الكبري ، خبرة اكثر من 7 سنوات ف مجال الصيدليات ،اشتغلت في شركات ادوية مثل فارمااوفرسيز واكتسبت خبرة ف هذا المجال ولدي خبرة في مايختص الادوية والصيدليات من الادارة  والطلبيات والادوية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.3418646, lng:30.9075086},
        `<h4>Wafaa Hamdy Mahmoud</h4>`  +
        `<div ><a href=\'mailto:Wafaahamdon97@gmail.com \' >Wafaahamdon97@gmail.com </a></div>` + 
        `<div ><a href=\'tel:0102 048 1385 \' >0102 048 1385 </a></div>` + 
        `<div>Science Baccalaureus in Zoology / Chemistry</div>` +
        `<div>Fresh graduated
So i have no experience
But i learn quickly
I wish to get work
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.22702, lng:29.9832463},
        `<h4>Amr Hassan Abu-Haisa</h4>`  +
        `<div ><a href=\'mailto:amrhassan9774@gmail.com\' >amrhassan9774@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01093554265\' >01093554265</a></div>` + 
        `<div>Bachelor of science 2019 </div>` +
        `<div>I'm fresh graduated from faculty of science ,Alex Univ. 
I want to have a good job in an ambitious place to have good experience in addition to good salary . 
It may be as a chemist in pharmaceutical company or even a medical representative . 
Thanks </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1418051, lng:30.2004118},
        `<h4>Rana maher</h4>`  +
        `<div ><a href=\'mailto:rona1maher@gmail.com\' >rona1maher@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01272123342\' >01272123342</a></div>` + 
        `<div>Fuctly of education ..science 2019</div>` +
        `<div>Worked in pharmacy 
 worked in company
Learning english in real soft house
Fuctly of education 
Department of science
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0812986, lng:31.2545723},
        `<h4>Mariam Ashraf Ismail</h4>`  +
        `<div ><a href=\'mailto:mariamashraf485@gamil.com\' >mariamashraf485@gamil.com</a></div>` + 
        `<div ><a href=\'tel:01121929387\' >01121929387</a></div>` + 
        `<div>Bachelor's degree (BSc) in Science, Girls' chollege for Arts , Science , Education. Ain Shams Unversity  2015-2019</div>` +
        `<div>Traning: 

(1) Abbassia Fever Hospital

(2) National organization for drug and control research 

(3) Elkhazendara general hospital

(4) National hepatology and tropical medicine research institute

(5) Egyption Atomic Energy Authurity</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.111951, lng:30.9307982},
        `<h4>Yasmein Abdelhameid </h4>`  +
        `<div ><a href=\'mailto:yasmeina21@gmail.com\' >yasmeina21@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01069119368\' >01069119368</a></div>` + 
        `<div>Bachelor's degree Faculty Of Aquatic and Fisheries Sciences 2019 </div>` +
        `<div>Fresh graduated
Faculty Of Aquatic and Fisheries Sciences
Processing and Biotechnology Department 
Kafr El-Sheikh University </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>Asmaa Nasr</h4>`  +
        `<div ><a href=\'mailto:elnagarasmaa816@gmail.com \' >elnagarasmaa816@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01068221725\' >01068221725</a></div>` + 
        `<div>Faculty of Commerce</div>` +
        `<div>انا طالبه ف كليه تجارة
اشتغلت 4 شهور ف صيدلية 
عندي خبرة لحد ما كويسة 
ابحث عن عمل ف صيدلية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0261588, lng:30.4675444},
        `<h4>Farah ahmed fahmy,,,,,, in behera _damanhour</h4>`  +
        `<div ><a href=\'mailto:Memomoon96@yahoo.com\' >Memomoon96@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01096706744\' >01096706744</a></div>` + 
        `<div>Graduated from the Faculty of Science in 2018</div>` +
        `<div>Training in the general hospital ,,,,
 First aid course in the Faculty of Science, ,,, Worked in voluntary work Orman Society ,,,, Worked in a laboratory analysis in Damanhour</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1061339, lng:30.74998},
        `<h4>Youstina yehia khalaf </h4>`  +
        `<div ><a href=\'mailto:Youstinayehia639@yahoo.com \' >Youstinayehia639@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01159395552\' >01159395552</a></div>` + 
        `<div>بكالريوس علوم ٢٠١٩</div>` +
        `<div>Training in sanitation and drinking water 
Training in up pharma 
Training in general hospital 
Course in pcr and its application 
Complete course in super Rep</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7896306, lng:30.9788488},
        `<h4>Christeen hasabAllah marcos</h4>`  +
        `<div ><a href=\'mailto:Yokonor64@yahoo.com \' >Yokonor64@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01276208134\' >01276208134</a></div>` + 
        `<div>Graduaded fron faculty of pharmacy tanta university 2018</div>` +
        `<div>Training at eva pharma campany
Traninig at kirovist factory Qcdepartment 
Icdl certificate 
Working for a year at private pharmacy
First aid certificate
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1292085, lng:31.2953583},
        `<h4>Nadia Mustafa</h4>`  +
        `<div ><a href=\'mailto:nora96199619872018@gmail.com\' >nora96199619872018@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01119217939\' >01119217939</a></div>` + 
        `<div>Bachelor 2019</div>` +
        `<div>Experience
➢ Creative scientists team,
Media and content creation.
From: Sep 2018
To: May 2018 
➢ Al-Matareya Teaching Hospital, 
Medical analysis and blood samples.
From: 14 July 2018
To: 31 July 2018
➢ Biolinx, 
Medical representative.
From: 5 August 2018
To: 28 August 2018
➢ Theodor Bilharz Research Institute,
Medical analysis.
From: 1 September 2018
To: 15 September 2018
Computer Skills
➢ Word: good 
➢ PowerPoint: good
➢ Excel: beginner
Language Skills
➢ Arabic: mother tongue
➢ English: good
Interests
➢ Therapeutic Nutrition 
➢ Medical analysis 
➢ Reading 
➢ Coordination 
➢ Sports (walking and exercise)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2442229, lng:29.9780259},
        `<h4>Donia Tarek Elsaied </h4>`  +
        `<div ><a href=\'mailto:doniatarek375@gmail.com\' >doniatarek375@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01147206572 \' >01147206572 </a></div>` + 
        `<div>BA faculty of veterinary medicine alexanderia university 2019</div>` +
        `<div>

Courses :

    - IELTS PREPARATION COURSE

HR

ICDL

Customer service


Computer skills :  word

                            Powerpoint 

                            Internet research 


Personal skills : 

communication skills        Presentation  

 Work under stress  

 Appreciate & prefer team work 


Language : 

Arabic (mother tounge ) 

                   English 


Experience :

-Worked at vectoria pharmacy from 2015 till 2018 

_trained at Egyptian international pharmaceutical company (epico) in 2018


Self learning 

-balance between life and work from edrak learning website

-six axis of success from edrak learning website

-Humanization of trademarks from nedres learning website</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.5811193, lng:31.290103},
        `<h4>Ibrahim Mohammed Said</h4>`  +
        `<div ><a href=\'mailto:Ibrahimsaid1215@gmail.com\' >Ibrahimsaid1215@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01095996182\' >01095996182</a></div>` + 
        `<div>Faculty of Science (SCI), Cairo University.
Department of special Chemistry
Grade: very good
Graduation year: 2019</div>` +
        `<div>Training at Egyptian Iron and Steel Company for two week
Training at CMRDI (Central Metallurgical Research 
Institute) for one week
Training at NRRA (Nuclear and Radiological Regulatory 
Authority) for five week
Training at CID Pharm Company for six week
Training at HBRC (Housing and Building National Research Center) for six week</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.5341098, lng:31.2896372},
        `<h4>Mohamed Hassan abd elbaqy</h4>`  +
        `<div ><a href=\'mailto:Hmohammed455@yahoo.com \' >Hmohammed455@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01100331758 \' >01100331758 </a></div>` + 
        `<div>بكالوريوس علوم  قسم الجيوكمياء سنة التخرج 2016</div>` +
        `<div>Medical Representative at Trust Pharma. From 7. 2016 to4. 2017
Medical Representative at Prolife Pharma.. From 5. 2017 to 8. 2018</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Shimaa adel sayed </h4>`  +
        `<div ><a href=\'mailto:Shimaaadel784@gmail.com\' >Shimaaadel784@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115779004\' >01115779004</a></div>` + 
        `<div>Bachelor of pharmaceutical science (2017)</div>` +
        `<div>I have been working as a medical representative at Eipico for 18 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8424559, lng:31.3336092},
        `<h4>Amin elhawary</h4>`  +
        `<div ><a href=\'mailto:amin.ali259@gmail.com\' >amin.ali259@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01027226327\' >01027226327</a></div>` + 
        `<div>Pharmacy_2012</div>` +
        `<div>Purchasing _ replenishment_operation
Contracting _marketing_sales analysis</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.3246376, lng:30.5348036},
        `<h4>Yara zaghloul elmnzlwy </h4>`  +
        `<div ><a href=\'mailto:Yara.zaghloul55@gmail.com\' >Yara.zaghloul55@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01024217458\' >01024217458</a></div>` + 
        `<div>Graduated from faculty of science 2016</div>` +
        `<div>Medical analysis specialist since 2016 till 2019
Training at alex petroleum company 
Training at future nexius academy
Training at centeral hospital</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4764677, lng:31.2753641},
        `<h4>Osama Ayman Ahmed Wahdan </h4>`  +
        `<div ><a href=\'mailto:owhdan767@gmail.com \' >owhdan767@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01202627002 \' >01202627002 </a></div>` + 
        `<div>Faculty of veterinary medicine, graduate in 2022</div>` +
        `<div>-Medical Representative at El_kayan medical group
-certified enter preneurship student at Eyouth Company
-Public speaker in student conference at faculty of veterinary medicine
-organizer at  veterinarian Friendship Day
-good in English, computer skills
-excellent in marketing, presentation and public speaking
-have very good public relations
-Member at Vet.Scout
-Former Fundraiser (FR) at Vision team
-car licence</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1344727, lng:33.7982304},
        `<h4>Ahked Abdel Rahman Selem Azazy</h4>`  +
        `<div ><a href=\'mailto:Azazyahmed44@gmail.com\' >Azazyahmed44@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01282143287& 01060556411\' >01282143287& 01060556411</a></div>` + 
        `<div>Faculty of pharmacy Sinai Univeraity june 2016</div>` +
        `<div>
Pharmacist at sedra pharmacy from 1/10/2016 till 31/9/2018
Demonstrator at faculty of pharmacy sinai university from 1/10/2018 till now
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5672081, lng:31.7369262},
        `<h4>mahmoud adel mohamed elmaghrapy</h4>`  +
        `<div ><a href=\'mailto:mahmoudelmagrapy97@gmail.com\' >mahmoudelmagrapy97@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01118411285\' >01118411285</a></div>` + 
        `<div>facult of science</div>` +
        `<div>Mahmoud Adel Mohamed EL Maghrapy
                                            Address: Akmem , Sohag   
                                            Phone: 01118411285
                         E-mail: mahmoudelmagrapy97@gmail.com
Personal details------------------------------------------------------------------------------------
An independent , problems solver  and leader with one year of experience in
Person has self-motivating achiever with proven track  record of exceeding targets .
A highly professional person who is motivated by challenging tasks and projects.
Education--------------------------------------------------------------------------------------------
Sep 2016-present	
                                  Faculty of science sohag university chemistry department ,sohag(Egypt)
Work Experience ----------------------------------------------------------------------------------
Jun 2018
                                 Worker in Aarma company
Jun 2017
                                 Trainee in medical laboratory 
Volunteering Experience------------------------------------------------------------------------

Sep 2018-present
                                Leader of scientific commission for faculty of science 
Training and Courses-----------------------------------------------------------------------------
Nov 2018-Des 2018
                                Course Ic3 
Mar, Apr 2019
                                Training about medical rep 
Other professional experience , reference-------------------------------------------------
                                Reference are available  upon request  
Personal skills--------------------------------------------------------------------------------------
                                  Leadership skills
                               Team working
                               Work under stress
                               Cooperative
Computer skills ------------------------------------------------------------------------------------
                               Good knowledge about Microsoft programs(word ,excel, power point)
Linguistic skills -------------------------------------------------------------------------------------
                              Arabic (mother tongue)
                              English (good)




طالب فرقه رابعه قسم كيمياء خاص 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0433268, lng:31.3986577},
        `<h4>Ahmed Saad Abass</h4>`  +
        `<div ><a href=\'mailto:ahmed.saad252525@yahoo.com\' >ahmed.saad252525@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01126780968\' >01126780968</a></div>` + 
        `<div>Bachelor of science / mansoura University / 2018</div>` +
        `<div>Medical representative
Working for many pharmacies in the last 5 years 
Work for Al-abdulatif eltarshouby pharmacy 
Compelete otc course in Al-abdulatif eltarshouby organization and course in OTC , frist aid and emergency in faculty of pharmacy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4422903, lng:30.9666586},
        `<h4>Hager saeed wheeb </h4>`  +
        `<div ><a href=\'mailto:hagerwheeb198 \' >hagerwheeb198 </a></div>` + 
        `<div ><a href=\'tel:01095124976\' >01095124976</a></div>` + 
        `<div>بكالوريوس علوم مايو ٢٠١٩</div>` +
        `<div>
خريج كليه علوم ٢٠١٩ ،حاصله علي تدريب في شركه بترول طنطا ،مركز البحوث بالدقي ،وشركه المياه والصرف الصحي بمنوف </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7735765, lng:31.2634407},
        `<h4>Yasmin Elmogy</h4>`  +
        `<div ><a href=\'mailto:Ahmedelmogy052@gmail.com\' >Ahmedelmogy052@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01007141050\' >01007141050</a></div>` + 
        `<div>Frishly graduated student from faculty of vetrinary medicine zagazige university 2019</div>` +
        `<div>Very good medical back ground, speaking and writing english fluently,strong and fast ability to become learned and to apply general rules to specific problems to produce answers that make sense, Good communication skills, Ability to establish effective working relationships with people at all levels,well versed in computer pakages word and editing softwares.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1965841, lng:31.0918725},
        `<h4>norhan ezzat hassan elhdad</h4>`  +
        `<div ><a href=\'mailto:noorezzat02@gmail.com\' >noorezzat02@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01025334704\' >01025334704</a></div>` + 
        `<div>graduated from faculty of aquatic and fisheries science department of biotechnology in 2019</div>` +
        `<div>#training:
*summer training in sakha research centre in 2018.
*summer training in microbiology laboratory for about 2 months in faculty of aquatic and fisheries science .
 *training in faculty of aquatic and fisheries science 's fish manafactured  and fish feed factory.
*some field visit to some factories and fish farms in baltim and motobis.
#courses:
*isolation of fungi and bacteria in tamioz centre in faculty of agriculre kafre elshiekh university .
*hazard analysis and critical control point HACCP in faculty of aquatic and fisheries science .


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.2320748, lng:31.3321818},
        `<h4>Nourhan Khaled Sarhan</h4>`  +
        `<div ><a href=\'mailto:nk565250@gmail.com\' >nk565250@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096477875\' >01096477875</a></div>` + 
        `<div>Ain Shams University Faculty Of science</div>` +
        `<div>Medical Representative Nourhan Khaled
salary 6000L.E 
Experience 
Beuty&Byond international
dbk Pharma </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9640128, lng:30.9337077},
        `<h4> Mariam hassan</h4>`  +
        `<div ><a href=\'mailto:Mariamhassanh92@gmail.com\' >Mariamhassanh92@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099645249\' >01099645249</a></div>` + 
        `<div>طالبه بالسنه الرابعه كليه الصيدله جامعه مصر</div>` +
        `<div>ليس لدي خبرات ولكن احب مجال ال cosmatics من حيث تركباته ومجالات natural plants وتأثيراتها واحب مجال ال biotechnology واريد انا اعمل به </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.6438371, lng:31.2711392},
        `<h4>Ahmed younis</h4>`  +
        `<div ><a href=\'mailto:Shooter.2022@gmail.com\' >Shooter.2022@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014486427\' >01014486427</a></div>` + 
        `<div>Mass communication </div>` +
        `<div>Medical representatives in pharma tread 
Medical representatives  in promedical
Medical representatives  in cardinal pharma
Supervisor Medical representatives in Eagel pharma 
Sinor medical representatives in Roventis pharma 
Area Giza center </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3065423, lng:31.3326105},
        `<h4>Esraa abd elhameid</h4>`  +
        `<div ><a href=\'mailto:esraaabdo5197@gmail.com\' >esraaabdo5197@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01023585198\' >01023585198</a></div>` + 
        `<div>Chemist _  2019_very good</div>` +
        `<div>Training in pharmaceutical 
Training in petroleum
Training in water treatment
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9694583, lng:31.1922107},
        `<h4>RANA Esam Abd El Aziz Drrag</h4>`  +
        `<div ><a href=\'mailto:dr.ranaesam@gmail.com\' >dr.ranaesam@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01148130699\' >01148130699</a></div>` + 
        `<div>Bachelor degree in science 2018 chemistry department Mansoura university </div>` +
        `<div>6 months experience at welcome pharma
Experience in derma, ortho, pedia, gyna
Have sales planning course at bepac center
Trained at El Dokki research center </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.10457, lng:29.7819054},
        `<h4>Aml Mahmoud </h4>`  +
        `<div ><a href=\'mailto:amlmahmoud2017@gmail.com \' >amlmahmoud2017@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01285253867\' >01285253867</a></div>` + 
        `<div>Faculty of science /2017</div>` +
        `<div>-Worked as meaical rep at macro group for 9 monthes
-training at mahfouz pharmacies for 2 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1435828, lng:31.2836067},
        `<h4>Ahmed mamdoh sobhy abd elmalek</h4>`  +
        `<div ><a href=\'mailto:ahmedmamdoh169@gmail.com\' >ahmedmamdoh169@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123081932\' >01123081932</a></div>` + 
        `<div>Bachalor degree of veterinary medicine banha university 2018</div>` +
        `<div>Worked as medical representative at global pharmaceuticals group from 11/2018 to 4/2019</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.6438371, lng:31.2711392},
        `<h4>Ahmed younis</h4>`  +
        `<div ><a href=\'mailto:Shooter.2022@gmail.com\' >Shooter.2022@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014486427\' >01014486427</a></div>` + 
        `<div>Mass communication </div>` +
        `<div>Medical representatives in pharma tread 
Medical representatives  in promedical
Medical representatives  in cardinal pharma
Supervisor Medical representatives in Eagel pharma 
Sinor medical representatives in Roventis pharma </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5669433, lng:31.7488867},
        `<h4>Yasmeen Mahmoud fahmy</h4>`  +
        `<div ><a href=\'mailto:Yasmeenasameh2017@gmail.com\' >Yasmeenasameh2017@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01114928500\' >01114928500</a></div>` + 
        `<div>Bachelor of science 2017, chemistry department,sohag </div>` +
        `<div>1:Summer training program for drinking water and sewag company
2: IT Basics 
3:Alhekema course of medical analysis</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8049014, lng:30.5281105},
        `<h4>سمر رفعت خميس </h4>`  +
        `<div ><a href=\'mailto:Samarkhamis99@yahoo.com\' >Samarkhamis99@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01062811634\' >01062811634</a></div>` + 
        `<div>بكالوريوس علوم 2019</div>` +
        `<div>1-تدريب لمدة سنة ف معمل 
2- تدريب لمدة سنة ف صيدلية 
3- تدريب لدي شركة غرب الدلتا لإنتاج الكهوباء لمدة شهر 
4- البرنامج التدريبي للسلامة والصحة المهنية لمدة اسبوع 
5- course in medical laboratory workshop and scientific research program 
5- تدريب لمدة ستة أشهر ف مستشفي 
6-تدريب لدي شركة مياة لمدة أسبوعين   </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1227709, lng:31.2632859},
        `<h4>Shaimaa ramadan</h4>`  +
        `<div ><a href=\'mailto:Shaimaaanwar904@yahoo.com \' >Shaimaaanwar904@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01015630283\' >01015630283</a></div>` + 
        `<div>بكالريوس طب وجراحة القصر العيني </div>` +
        `<div>تدريب في صيدليه لمدة ٣ شهور
تدريب في AMD pharma لمدة شهرين A. M
تدريب لمدة ٤ شهور في مستشفى القصر العيني كطبيبه امتياز تحت التدريب
خبرة في شيفتات الrenal dialysis </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1404359, lng:31.2384839},
        `<h4>Maha Mostafa ahmed</h4>`  +
        `<div ><a href=\'mailto:MahaMostafa21@gmail.com\' >MahaMostafa21@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01129711190\' >01129711190</a></div>` + 
        `<div>2019 faculty of science , microbiology and chemistry department </div>` +
        `<div>Have an experience in  pharmacy'work,  work as assistant for 2 years 
Have an experience in laboratory,  work for 1 year 
Work as Medical Rep in MG pharm for 2 years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Noha Hesham</h4>`  +
        `<div ><a href=\'mailto:noha.hesham.hanafi97#gmail.com\' >noha.hesham.hanafi97#gmail.com</a></div>` + 
        `<div ><a href=\'tel:01141618084\' >01141618084</a></div>` + 
        `<div>2020 faculty of pharmacy ,cairo university .. fourth year</div>` +
        `<div>Trainee at seif pharmacies
Trainee at Abo elRish hospital of cairo university
Trainee at Dr.ibrahim pharmacy - hadayk al maadi</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1409991, lng:31.3587114},
        `<h4>Ahmed samy abdalhamide mosa</h4>`  +
        `<div ><a href=\'mailto:Medo_pop789@Yahoo.com\' >Medo_pop789@Yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01117657337\' >01117657337</a></div>` + 
        `<div>I graduated from science'ain shams uni /2019</div>` +
        `<div>حديث التخرج ولكن قمت بالتدريب في عدة  شركات في الإجازات الصيفيه
شركه القاهرة للبترول
شركه انابيت البترول 
شركه بدر 
المركز القومي للبحوث في الدقي 
شركه ندا الدهانات 
وشكرا اتمنى التوفيق  </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7970093, lng:31.6219939},
        `<h4>Ahmad Mansour</h4>`  +
        `<div ><a href=\'mailto:Www.ahmadmansouresmaiel@gmail.com\' >Www.ahmadmansouresmaiel@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01095079364\' >01095079364</a></div>` + 
        `<div>Pharmacist / 2017</div>` +
        `<div>Nothing experience 
Nothing experience
Nothing experience
Nothing experience
😇😇😇😇😇😇😇</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9314982, lng:31.1394143},
        `<h4>Ali Ahmed Ali Elgammal</h4>`  +
        `<div ><a href=\'mailto:Alielgammal1000@gmail.com\' >Alielgammal1000@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01068931962\' >01068931962</a></div>` + 
        `<div>Faculty of science graduated in 2019</div>` +
        `<div> english is very good 
Confidense 
Honsty 
Believing 
Love working 
Hard working 
Training in nuclear medicin  and kidney in mansoura university </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.032821, lng:30.42527},
        `<h4>Wael Zakaria Abd Elwanese</h4>`  +
        `<div ><a href=\'mailto:Wael_abdelghany2016@yahoo.com\' >Wael_abdelghany2016@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01026309198\' >01026309198</a></div>` + 
        `<div>Faculity of science2011</div>` +
        `<div>Work in devart lab as medical rep for 2.5 years then live up as key account for 1 year 
Then worked in hygint 
Then worked senior acting as super visor in chemist pharm
Now working senior in innogen pharm (Obour)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5939014, lng:31.5121985},
        `<h4>Louay emad mahmoud </h4>`  +
        `<div ><a href=\'mailto:louayemad08@gmail.com\' >louayemad08@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01003968567\' >01003968567</a></div>` + 
        `<div>	Faculty of Science, Zagazig University Dept. of chemistry and physics, May 2018  </div>` +
        `<div>	worked as medical representative at Panacea pharmaceutical company from 1\\7\\2018 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8345691, lng:31.2516686},
        `<h4>ahmed ramadan ebrahem mohamed</h4>`  +
        `<div ><a href=\'mailto:eldakamya6@gmail.com\' >eldakamya6@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01012040137\' >01012040137</a></div>` + 
        `<div>A student in the second class at faculty of science</div>` +
        `<div>خبره فى مجال التحاليل الطبيه و يوجد بعض الخبره عن الادويه ومجالاتها . خبره فى التسويق بكل انواعه سواء الكترونى او اى كان لباقه فى الحديث . خبره فى مجالات الحاسب مثل الورود والاكسيل والبور بوينت والانترنت خبره فى تسويق الادويه للدكاتره وترشيحها لهم بطريقه مبسطه وجذابه . العمل اوقات طويله .العمل تحت ضغط </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.215645, lng:29.955266},
        `<h4>محمد عبد الفتاح الشوحه</h4>`  +
        `<div ><a href=\'mailto:Medoalshoha11@gmail.com\' >Medoalshoha11@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01155846647\' >01155846647</a></div>` + 
        `<div>سنيور ف كليه العلوم جامعه المنصوره </div>` +
        `<div>اخصائي تحاليل طبيه خبره سنتين 
ميديكال ريب
اجيد سحب العينات 
سحب حديثي الولاده 
اجاده للغه الانجليزيه </div>` 
        
        );
        
addMarkerToGroup(group, {lat:24.0747397, lng:32.9002665},
        `<h4>محمد عصام إدفاوي محمد </h4>`  +
        `<div ><a href=\'mailto:dr.mohamedesaam55@gamil.com \' >dr.mohamedesaam55@gamil.com </a></div>` + 
        `<div ><a href=\'tel:01021726764\' >01021726764</a></div>` + 
        `<div>بكالوريوس صيدلة النهضة ٢٠١٧ </div>` +
        `<div>Medical representative Aswan in rameda company
Work at Ahmed Ali hmad pharmacy 
Work At abden pharmacy
Training at epico company </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5952679, lng:31.2456463},
        `<h4>رويده ابراهيم الديساوي معروف </h4>`  +
        `<div ><a href=\'mailto:Dedahema717@Gmail.com\' >Dedahema717@Gmail.com</a></div>` + 
        `<div ><a href=\'tel:01012759734\' >01012759734</a></div>` + 
        `<div>كليه الطب البيطري ..ببنها </div>` +
        `<div>تم التدريب في مزارع دينا 
تم التدريب ف مصنع اجرينا
تم التدريب ف shilter hope
تم التدريب بالوحده البيطريه بقريه بتمده</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1338556, lng:31.3314818},
        `<h4>Mohamed Ali </h4>`  +
        `<div ><a href=\'mailto:mohamed.elatroush77@gmail.com\' >mohamed.elatroush77@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01205030122\' >01205030122</a></div>` + 
        `<div>Agriculture science 2015</div>` +
        `<div>7 months at Master care company
at sales and medical rep, dermatology and orthopedic and medical knowledge of cosmo medical products hair and skin. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.9005289, lng:31.3049453},
        `<h4>Gamalat Mahmoud Anwer</h4>`  +
        `<div ><a href=\'mailto:gamalat.mahmoud.vet54@gmail.com\' >gamalat.mahmoud.vet54@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01147020584\' >01147020584</a></div>` + 
        `<div>Fresh graduated from faculty of vetrerinary medicine -Assiut university 2014-2019</div>` +
        `<div>Fresh
Training at vet.hospital
Communicatiin skills
Fast learner
Self motivation

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.444096, lng:30.9712242},
        `<h4>Norhan Nabil Mohamed</h4>`  +
        `<div ><a href=\'mailto:norhannoor1210@gmail.com\' >norhannoor1210@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01019738683\' >01019738683</a></div>` + 
        `<div>Graduated from faculty of science, Menofia university in 2018</div>` +
        `<div>Worked at linko pharm company for 3 month.
I have take course in Zewail university in "Fermentation Technology".
Courses: 
OTC drugs
Pharmacology 
Interview skills & CV writing
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.3009687, lng:30.7101259},
        `<h4>Warda mohamed ali</h4>`  +
        `<div ><a href=\'mailto:wardamohamed617@yahoo.co.\' >wardamohamed617@yahoo.co.</a></div>` + 
        `<div ><a href=\'tel:01092898735\' >01092898735</a></div>` + 
        `<div>Faculty of science minya universty 2019</div>` +
        `<div>I need to this job
My Skills
-training in company of water and hospital
-presentation skills
-communication skills
-good user of power point, word and Excel
-good researcher on the internet
-writing skills
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.8996293, lng:32.7244302},
        `<h4>Baher galal</h4>`  +
        `<div ><a href=\'mailto:Bahervet@yahoo.com\' >Bahervet@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٢٢٧٤٤٢٨٨\' >٠١٢٢٢٧٤٤٢٨٨</a></div>` + 
        `<div>Faculty of veterinary medicine 2016</div>` +
        `<div>Experience : 
Training in el ragaa pharmacy 
Worked for bluemoon animal center hurguada </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9305821, lng:30.8140324},
        `<h4>Ahmed Ragb Ahmed Elsayed </h4>`  +
        `<div ><a href=\'mailto:ragba8880@gmail.com\' >ragba8880@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094494346\' >01094494346</a></div>` + 
        `<div>Bachelor of Science  2019</div>` +
        `<div>my name is ahmed. 
faculty of science, tanta university. 
i want to work as a quality control engineer,
or as a medical rep 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2578392, lng:29.9883729},
        `<h4>Ahmed mahmoud mohamed</h4>`  +
        `<div ><a href=\'mailto:Ahmedmahmoud242424@gmail.com\' >Ahmedmahmoud242424@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01158005237\' >01158005237</a></div>` + 
        `<div>Bachelor of science (2017)</div>` +
        `<div>Working at loran hospital from 1/1/2018 till now
Worked at wekash for network marketing (2015)
.
.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2188386, lng:29.9450682},
        `<h4>Mahmoud shawky </h4>`  +
        `<div ><a href=\'mailto:mash22057@gmail.com \' >mash22057@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01064928358 \' >01064928358 </a></div>` + 
        `<div>Pharmcist 2016 </div>` +
        `<div>Kobry El-Qobba hospital
Pharmacist at dr Abdalla pharmcy
Dr ahmed sad pharmcy
Training in Elazby pharmcy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8242783, lng:31.3776258},
        `<h4>Syada Hany Hamdy</h4>`  +
        `<div ><a href=\'mailto:syada.sakr@gmail.com \' >syada.sakr@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01116033572\' >01116033572</a></div>` + 
        `<div>Bachelor of science - of chemistry/ microbiology department  - 2019</div>` +
        `<div>-Fresh graduated 
-Volunteer in infinity as HR head , project management member , DCR member 
 - trained in national research center 
- excellent in microsoft word and power point , good in excel 
- good in English 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.082999, lng:31.6017448},
        `<h4>ahmed tharwat el sayed</h4>`  +
        `<div ><a href=\'mailto:amonhero@hotmail.com\' >amonhero@hotmail.com</a></div>` + 
        `<div ><a href=\'tel:00201095956450\' >00201095956450</a></div>` + 
        `<div>veterinary medicine 2008</div>` +
        `<div>medical rep apex oct 2010 to sep 2011
excutive med. rep novartis pharma sep 2011 to dec 2014
medical rep nature care ksa feb 2015 to sep 2015
senior med.rep tabuk pharmaceuticals ksa sep 2015 to april 2019</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5805814, lng:31.4902151},
        `<h4>Mohamed hesham abdelhamid abdelhady ahmed sakr</h4>`  +
        `<div ><a href=\'mailto:drmohamedheshamsakr@gmail.com\' >drmohamedheshamsakr@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01066818873\' >01066818873</a></div>` + 
        `<div>Bachelor degree of medicine and surgery 2018</div>` +
        `<div> I can manage cases in 1ry health care units as i have minor surgical skills and enough information to manage critical and emergent cases untill emergency team arrive or the patient is transported to them
I have worked in the general practice at my university hospital
Also i can represent pharmaceutical companies 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.6851811, lng:31.478595},
        `<h4>Nader Mohamed mahmoud</h4>`  +
        `<div ><a href=\'mailto:nadhrmhmd733@gmail.com \' >nadhrmhmd733@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01096978620 \' >01096978620 </a></div>` + 
        `<div>graduated at faculty of veterinary medicine 2019</div>` +
        `<div>-Skills and selling course
-enteurprneurship course
-organized at zoonosis department event for awareness people about zoonotic diseases organized by sohag University
-Self motivated, problem solving, work under stress and strategic thinking</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0864201, lng:31.189176},
        `<h4>Beshoy Nader Boushra </h4>`  +
        `<div ><a href=\'mailto:beshoawad13@gmail.com\' >beshoawad13@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203207818\' >01203207818</a></div>` + 
        `<div>Yet student</div>` +
        `<div>احتاج تدريب ف شركة أدوية انا طالب ف السنة الثالثة كلية علوم جامعة حلوان قسم بيولوجي</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2391502, lng:31.6510819},
        `<h4>Mohamed Nader</h4>`  +
        `<div ><a href=\'mailto:mohamednader51297@gmail.com\' >mohamednader51297@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01020104938\' >01020104938</a></div>` + 
        `<div>third degree of pharmacy </div>` +
        `<div>Team leader at Swaed Portsaid 2018-2019
Marketing at la maison espace d'art 2018 
public relations at Swaed Suiz 2017-2019
Volunteering as a doctor in virus C campaign  ( 100 Million Health) 
Scientific committee  in student union At port said university 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1511413, lng:31.4288202},
        `<h4>Eman abdelaziem elsayed</h4>`  +
        `<div ><a href=\'mailto:Abdelaziememan0@gmail.com\' >Abdelaziememan0@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092860705\' >01092860705</a></div>` + 
        `<div>علوم -2019</div>` +
        `<div>Very good in using computer 
Good presentation and communication
Very good in arabic and english (read,spoken and written)
Fast learner</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.032821, lng:30.42527},
        `<h4>Mahmoud Aly Mahmoud Hasan</h4>`  +
        `<div ><a href=\'mailto: Mahmoudaly77790@yahoo.com \' > Mahmoudaly77790@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01024777108\' >01024777108</a></div>` + 
        `<div>Bachelor of Pharmaceutical Sciences Tanta university 2016 </div>` +
        `<div>Public pharmacies in Egypt
Working in saudia Arabia 
Public hospital Itay el-baroud
2018
Roshdy pharmacies
2017</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0336084, lng:30.4585552},
        `<h4>John Joseph Said Ragheb</h4>`  +
        `<div ><a href=\'mailto:Jj934291@gmail.com\' >Jj934291@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01276791531\' >01276791531</a></div>` + 
        `<div>4th year student at faculty of science damanhour university</div>` +
        `<div>-Summer 2016: Training at Alshimaa pharmacy.
-From October 2017 to May 2018: Worked at Elraee Elslaeh hospital(GSH).
-Summer 2018:water treatment training at water company of damanhour.
-Training at Alrahma pharmacy.
-From May 2019 till now: Worked at Dr.Moheb pharmacy.
-I participated in blood donation campaign in damanhour
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1113334, lng:31.3200278},
        `<h4>Dr Moataz</h4>`  +
        `<div ><a href=\'mailto:moamoa729@gmail.com\' >moamoa729@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094923468\' >01094923468</a></div>` + 
        `<div>صيدله 2019</div>` +
        `<div>Community pharmacies. Quality assurance department in pharmacy school. Formal representative for co-workers. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1390763, lng:30.6525252},
        `<h4>Alaa Samir </h4>`  +
        `<div ><a href=\'mailto:Alaasamir325@gmail.com\' >Alaasamir325@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01004870218\' >01004870218</a></div>` + 
        `<div>Graduated from pharmacy 2018</div>` +
        `<div>Product specialist in EZ-PAC COMPANY 
from September 2018 until now 
Mahfouz pharmacy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3064524, lng:31.3323955},
        `<h4>Esraa abd elhameid </h4>`  +
        `<div ><a href=\'mailto:esraaabdo5197@gmail.com\' >esraaabdo5197@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01023585198\' >01023585198</a></div>` + 
        `<div> Faculty of Sciences
Special Chemistry Department</div>` +
        `<div>Training in oil and pharmaceutical companies

Training with analysis laboratories</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8807468, lng:31.4574538},
        `<h4>Abdo Emad</h4>`  +
        `<div ><a href=\'mailto:elshishtawy.a@yahoo.com\' >elshishtawy.a@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01091765938\' >01091765938</a></div>` + 
        `<div>Clinical Pharmacist -2019</div>` +
        `<div>Rameda company training
Tharwat pharmacy training
Abu-elftouh pharmacy training
Amr samir Pharmacy training
Elbauomi pharmacy training
Mansoura Gastrology hospital
Radiology and nuclear medicine oncology center</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8797449, lng:31.2555072},
        `<h4>eman ahmed elsaid ahmed</h4>`  +
        `<div ><a href=\'mailto:ea769475@gmail. com\' >ea769475@gmail. com</a></div>` + 
        `<div ><a href=\'tel:01013456079\' >01013456079</a></div>` + 
        `<div>graduated from college of pharmacy2019</div>` +
        `<div>I'am fresh graduate. search for traning or jop in company like sanofy. I have trained in factory, and also have trained in pharmacy. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1869929, lng:31.1922975},
        `<h4>Sarah Yousef Basta </h4>`  +
        `<div ><a href=\'mailto:sarah.yousef234@gmail.com \' >sarah.yousef234@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01145784473\' >01145784473</a></div>` + 
        `<div>Factury of science chemistry and Microbiology department Assuit university fresh graduated  </div>` +
        `<div>Training for Dr Dalia Elsa3ed pharmacy 
Training for Sofia Pharmacy 
Training for Somaia pharmacy 
Training for career coaching camp in Assuit university </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.9683812, lng:30.9302843},
        `<h4>shahd bahgt ahmed </h4>`  +
        `<div ><a href=\'mailto:shahd_bahgt@yahoo.com\' >shahd_bahgt@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01124629160\' >01124629160</a></div>` + 
        `<div>كلية العلوم 2016 </div>` +
        `<div>كيميائي او مدرس كيميا او ميديكال ريب او اي مراقب جودة درست ف كلية العلوم ومعي دبلومة كيميا حيوية وتدربت ف معهد بحوث البترول ف مدينة نصروشركة المياة والصرف الصحي ببني سويف وحصلت ع المركز الأول ف مشروع التخرج  ومعامل تحاليل واود العمل ف مصنع او معمل </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1363247, lng:30.1312604},
        `<h4>Mahmoud Elsayed Abd Elaziz Elshaer</h4>`  +
        `<div ><a href=\'mailto:Melshaaeer29@gmail.com\' >Melshaaeer29@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01287989380\' >01287989380</a></div>` + 
        `<div>P.of.science alex uni</div>` +
        `<div>Work as M.rep at bio cure pharm from 4/2018 to 12/2018
M.rep at medical group pharm from 1/2019 to 6/2019
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0827291, lng:31.2343487},
        `<h4>Mahmoud Mohamed taha</h4>`  +
        `<div ><a href=\'mailto:mahmoooooud14@gmail.com\' >mahmoooooud14@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01154634029\' >01154634029</a></div>` + 
        `<div>Bachelor of Science      2019</div>` +
        `<div>Medical rip 
 Experience : - Vodafone egypt
       - TE _data company 
       - training in agiba petroleum company  
                   </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7514921, lng:31.021764},
        `<h4>Mohamed nasr elfiky </h4>`  +
        `<div ><a href=\'mailto: Mohamedef183@gmail.com\' > Mohamedef183@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01113901600\' >01113901600</a></div>` + 
        `<div>صيدله /2019</div>` +
        `<div>I have a big back ground about sales and marketing and customer convince I have trained to utopia company for two months 
Learned how to make call to doctor and take feed back from pharmacist. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9943401, lng:31.1886653},
        `<h4>Kerellos Adolf Lameae</h4>`  +
        `<div ><a href=\'mailto:kerellosadolph@gmail.com\' >kerellosadolph@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01030329506\' >01030329506</a></div>` + 
        `<div>B.Sc  of Science 2017</div>` +
        `<div>worked as sales representative of treatment water company 2014
worked as co-founder and secretary of SEG SUSC ( Sohag University Student Chapter) 2015 - 2016
worked as member of Konna Zayak Initiative. 2016
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Menna tullah magdy abdo ibrahim</h4>`  +
        `<div ><a href=\'mailto:Mennamagdyalkady1@gmail.com\' >Mennamagdyalkady1@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01098442265\' >01098442265</a></div>` + 
        `<div>Bachelor of science cairo university biotechnology biomolecular chemistry 2018</div>` +
        `<div>Teacher assistant for ayear at october university 
Fresh graduated
I had a training at lab unit in baheya hospital
I have passed ilets exam with band 6
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.850693, lng:31.3770008},
        `<h4>Mohamed Mansour Abdelftah</h4>`  +
        `<div ><a href=\'mailto:Mohamedmansour0097@gmail.com\' >Mohamedmansour0097@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01018844678\' >01018844678</a></div>` + 
        `<div>بكالوريس صيدله 2019</div>` +
        `<div>Mohamed Mansour Abdelftah                                         

Address:    Fourth Neighborhood, 15th of May City, Cairo.
Mobile:      015 525 495 92
E-Mail:       mohamedmansour0097@gmail HYPERLINK 

Personal Data: 
•	Date of birth: June 27th, 1996.
•	Nationality: Egyptian.  
•	Marital status: single.
•	Military status: undetermined.

Objective:
•	Type of jop: full-time.
•	Goals: professional development, implementation of skills and learning of new elements.

Education: 
•	MTI University, faculty of pharmacy- level five, (2014-Now).
      Last year grade: very good.
•	Graduated from Omar Ibn Elkhatab school in (2014), general secondary certificate with grade (93.5%).  

Student Activity:
•	EPSF-MTI member, local exchange office, 2018/2019.
•	EPSF-MTI member, professional development committee, 2018/2019.

Courses: 
•	OTC with Ezz-Eldeen Academy at Mentarcise office, July, 2018. 
•	Clinical pharmacy orientation course (CPOC) with Pharmacists Syndicate Giza, Aug. 2016.
•	Basic frist aid and clinical skills with ECC, July, 2016 

Summer Training:
•	Medical Department, Pfizer, Egypt, September, 2018.
•	Out marketing, Seif pharmacies, August, 2018.
•	Out marketing, Ezz El-Deen pharmacies, July, 2018.
•	Community pharmacy, Islam pharmacy, August, 2017.
•	Clinical Department, Imbaba Hospital, Aug. 2016.
•	Community pharmacy, Shaemaa pharmacy, July, 2016.
•	Community pharmacy, Omraa pharmacies, June, 2016.
•	Community pharmacy, Azza pharmacy, August, 2015.
•	Community pharmacy, Ahmed pharmacy, July, 2015.
      
Skills:
•	Professional skills: foreign languages: English – intermediate.
                                driving license: yes.
•	Computer skills: MS word - MS power point. 
•	Soft skills:  ability to work under pressure.
                   adaptive and creative.
                   excellent teamwork.
                   good communication skills.
•	Organizational skills: ability to prioritize work.   

Conferences and Events:
•	Step on the way at Cairo University, Jan. 28th 2019 – Jan. 31st 2019.
•	Information session of Knight-Hennessy scholars (Stanford University) at AUC,   Dec. 9th, 2018.
•	EPSF 23rd national annual congress at Cataract Pyramids Resort, Oct. 17th, 2018 – Oct. 20th, 2018. 

All References are available upon request
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0885602, lng:31.4127329},
        `<h4>   Aya Hamed Ahmed Abd elmoiem</h4>`  +
        `<div ><a href=\'mailto:ayahammed155@gmail.com\' >ayahammed155@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002499364\' >01002499364</a></div>` + 
        `<div>Bachelore in vetrinary medicine  Mansoura university. 2018</div>` +
        `<div>I have worked for 6 months in Ronesca company in nutrtional line in KSA market. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4980909, lng:30.9949661},
        `<h4>Hasnaa hassan serag eldin</h4>`  +
        `<div ><a href=\'mailto:hasnaaserag85@yahoo.com\' >hasnaaserag85@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01093728553\' >01093728553</a></div>` + 
        `<div>Bachlory of veterinary medicine 2007</div>` +
        `<div>District manager in delta search for work at pharmaceutical companies &has managerial experience for 3years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1061339, lng:30.74998},
        `<h4>يوستينا يحيي خلف </h4>`  +
        `<div ><a href=\'mailto:Youstinayehia639@yahoo.com \' >Youstinayehia639@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01159395552\' >01159395552</a></div>` + 
        `<div>كليه العلوم 2019</div>` +
        `<div>Training in sanitation and drinking water 
Training in up pharma 
Training in general hospital 
Course in pcr and its application 
Complete course in super Rep</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2049302, lng:29.9292443},
        `<h4>Ahmed Mshaly</h4>`  +
        `<div ><a href=\'mailto:ahmed.a.mshaly@gmail.com\' >ahmed.a.mshaly@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092365283\' >01092365283</a></div>` + 
        `<div>Faculty of pharmacy , 2019</div>` +
        `<div>Work at IQVIA
Training at IQVIA
Worked at Manshit Alnozha Pharmacy
Training at dr. Mahmoud Yassin pharmacy
Vice chairman at Organising Committee at EPSF-Alex
Organising Committee chairman at Different And Support team 
Head of Masters Pharma Team</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9864815, lng:31.2832428},
        `<h4>Doha mohsen fouad </h4>`  +
        `<div ><a href=\'mailto:doha.mohsen111@gmail.com \' >doha.mohsen111@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01126377699\' >01126377699</a></div>` + 
        `<div>Graduated from biotechnology /biomolecular chemistry progarm cairo university 2019</div>` +
        `<div>Very good in english 
Can work under stress 
Fresh graduated 
Gpa 3.36</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1409991, lng:31.3587114},
        `<h4>الاء الرحمن محمد يحيى حفني</h4>`  +
        `<div ><a href=\'mailto:Medo_pop789@Yahoo.com\' >Medo_pop789@Yahoo.com</a></div>` + 
        `<div ><a href=\'tel:+20 100 359 7980\' >+20 100 359 7980</a></div>` + 
        `<div>I graduated from science'ain shams uni /2019</div>` +
        `<div>حديث التخرج ولكن قمت بالتدريب في عدة  شركات في الإجازات الصيفيه
شركه باكين 
المركز القومي للبحوث في الدقي 

وشكرا اتمنى التوفيق  </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mina Fouad Sedrak</h4>`  +
        `<div ><a href=\'mailto:minafouad71@gmail.com\' >minafouad71@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01280632388\' >01280632388</a></div>` + 
        `<div>Faculty of acience helwan university 2019</div>` +
        `<div>مينا فؤاد مساعد صيدلي اشتغلت في صيدليات اكتر من سنتين بس كان في تقطعات في النص بسبب الدراسة لكن الان متخرج و عندي جيش في شهر ١</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.3081242, lng:30.9654958},
        `<h4>Mahmoud Nasr Mohamed </h4>`  +
        `<div ><a href=\'mailto:Mahmoud Nasr Mohamed @gmail.com\' >Mahmoud Nasr Mohamed @gmail.com</a></div>` + 
        `<div ><a href=\'tel:01062549726\' >01062549726</a></div>` + 
        `<div>Veterinarian graduated in 2017</div>` +
        `<div>Training in egy pharma

Very good in windows.

Very good in english

Very good yn word exel power point

Excellent in presentation and hard worker

I have good pharmaceutical basic sell skills </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1383552, lng:31.3738809},
        `<h4>Margaret Anis Shenouda</h4>`  +
        `<div ><a href=\'mailto:margaret.anis@pharma.asu.edu.eg\' >margaret.anis@pharma.asu.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01097856597\' >01097856597</a></div>` + 
        `<div>Bachelor of Pharmacy, Ain Shams University (2020)</div>` +
        `<div>Experience:
	Nov. 2018- till now : Field Researcher at Infomine Marketing Research – Healthcare
	2018- till now  : Fundraiser in CSTA (student activity at Faculty of Pharmacy Ain Shams University)
	October  2017- till now:I am a Member in Pharmatopia Team at Faculty of Pharmacy Ain Shams University:
	Organizing events.
	Helping our classmates in explaining the difficult     courses like Pharmaceutics, Biochemistry, Biopharmaceutics and Toxicology.
	In last event, I participate in lecturing a session to audience of 250 persons.
	June 2018: volunteer in Medical Caravan 2018 at Faculty of Pharmacy Ain Shams University as Public awareness member.
Conferences : 13 - 15 Nov. 2018
2^nd ICPASU ( International Conference Of The Faculty Of Pharmacy Ain Shams University ) 

Courses: 
-Online courses: First Aid course , Basics of clinical pharmacology .
-Practical of Basic Life Support-FirstAid & Forensic & (Hematology, Heart attack sections)
-Pharmacy practice & Scientific Research.
-ICDL course.
-Human development course.

Skills
-Perfect Communication skills.
-Perfect presentation skills.
-Computer skills: Windows 10 , Microsoft power point 2010 , Word 2010 , Excel 2010 , and Access 2010 , internet explorer.
-Time management.
-Maintaining accuracy even under stress conditions. 
-Ability to work as Team.

Hobbies:
-Reading: Human Development and Psychology books.
-director: I directed three short movies, one of them is awareness movie about Angina (symptoms- causes- treatment) 
-Photography
-Drawing: Images of saints. 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6959559, lng:31.0951329},
        `<h4>Shimaa Shanab</h4>`  +
        `<div ><a href=\'mailto:shimaashanab2015@gmail.com\' >shimaashanab2015@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01098471402\' >01098471402</a></div>` + 
        `<div>Forth year student</div>` +
        `<div>Cancer fighter
Hcv confran
Skill trainer
Online course ( courcera)
Language ( English, french, little etaly)
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8797449, lng:31.2555072},
        `<h4>eman ahmed elsaid ahmed</h4>`  +
        `<div ><a href=\'mailto:ea7694745@gmail. com \' >ea7694745@gmail. com </a></div>` + 
        `<div ><a href=\'tel:01013456079\' >01013456079</a></div>` + 
        `<div>graduted from college of pharmacy 2019</div>` +
        `<div>I'am fresh graduate. search for traning or jop in company like sanofy. I have trained in factory, and also have trained in pharmacy. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.036373, lng:31.380691},
        `<h4>Mohamed Ahmed Elsherbini</h4>`  +
        `<div ><a href=\'mailto:Mohamedelsherbini46@gmail.com\' >Mohamedelsherbini46@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01000697656\' >01000697656</a></div>` + 
        `<div>
   Bachelor's Degree 
Faculty of Pharmacy Al-Azhar University fifth class.    2014-2019   </div>` +
        `<div>
community pharmacist for two years 2015-2017 (Two years of training and working at a community pharmacy (Khalifa Pharmacy). I have high knowledge in dealing with drugs, Organized and stocked all medication ensuring proper storage and safety precautions, Instructed patients on the proper dosage of medication how to take it possible side effects when to call the doctor, etc. Speak with customers and answer any questions they may have, Excellent using B-connect system) . 

working group of Professional Development Committee of EPSF-AZHAR ASSIUT 2015-2016.

Organizer for  "The Second International Conference for New Horizons in Basic and Applied Sciences, 1-6 August 2015, Hurghada, Egypt" ,( certified ).</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1186508, lng:29.786359},
        `<h4>مصطفي هاشم محمد </h4>`  +
        `<div ><a href=\'mailto:Mostafahashem2011@yahoo.con\' >Mostafahashem2011@yahoo.con</a></div>` + 
        `<div ><a href=\'tel:01210511416\' >01210511416</a></div>` + 
        `<div>خريج علوم </div>` +
        `<div>فريش لسه متخرج
 وكنت شغال سيلز في فودافوان
 واشتغلت في صيدليات قبل كده 
ولسه مستني شهادة التخرج 
 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8242783, lng:31.3776258},
        `<h4>Syada Hany Hamdy</h4>`  +
        `<div ><a href=\'mailto:syada.sakr@gmail.com \' >syada.sakr@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01116033572\' >01116033572</a></div>` + 
        `<div>Bachelor of science - of chemistry/ microbiology department  - 2019</div>` +
        `<div>-Fresh graduated 
-Volunteer in infinity as HR head , project management member , DCR member 
 - trained in national research center 
- excellent in microsoft word and power point , good in excel 
- good in English 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1477172, lng:30.1260363},
        `<h4>Mohamed samir Elkholy </h4>`  +
        `<div ><a href=\'mailto:Hamada_el5oly60@yahoo.com \' >Hamada_el5oly60@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01272072516\' >01272072516</a></div>` + 
        `<div>Pharmacist     2017</div>` +
        `<div>ميديكال ريب في نطاق محافظه البحيره او اسكندريه 
فريش 
خريج دفعه 2017
خبره في عمل الصيدليات </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4662174, lng:31.1238112},
        `<h4>Amany Nabil Saad</h4>`  +
        `<div ><a href=\'mailto:dr.amanyismail@gmail.com\' >dr.amanyismail@gmail.com</a></div>` + 
        `<div ><a href=\'tel:+201002181327\' >+201002181327</a></div>` + 
        `<div>Vetrinary medicine 2017</div>` +
        `<div>Worked at alandalous medical company from jan 2018 till dec 2018 
 Workes at borg medical industry from april 2019 till now</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.982185, lng:31.16065},
        `<h4>Enas Helal Elsayed Hassanin</h4>`  +
        `<div ><a href=\'mailto:sci.enas20@gmail.com\' >sci.enas20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014743308\' >01014743308</a></div>` + 
        `<div>Student at faculty of science at 3rd year</div>` +
        `<div>
-I have volunteered at Resala charity organisation.
-I have participed in sport activities in my college. 
-Fluent in computer usage. 
-i have Good communication skills. 
-i taked courses in English , soft skills and medical analysis</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5939014, lng:31.5121985},
        `<h4>Louay emad mahmoud </h4>`  +
        `<div ><a href=\'mailto:louayemad08@gmail.com\' >louayemad08@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01003968567\' >01003968567</a></div>` + 
        `<div>	Faculty of Science, Zagazig University Dept. of chemistry and physics, May 2018  </div>` +
        `<div>	worked as medical representative at Panacea pharmaceutical company from 1\\7\\2018 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Rami mohmed salllam</h4>`  +
        `<div ><a href=\'mailto:Romeosallam@gamil.com\' >Romeosallam@gamil.com</a></div>` + 
        `<div ><a href=\'tel:01126413395\' >01126413395</a></div>` + 
        `<div>Cairo. University commerce</div>` +
        `<div>#انا بشتغل في مجال ادويه في مخازن و صيدليات منذ ٨ سنوات
#العمل في مجال التسويق 
#القدره علي تحمل شفتات بمفردي و رفع كفاءه المكان 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.3211544, lng:30.7901045},
        `<h4>Ahmed gooda abd alazim </h4>`  +
        `<div ><a href=\'mailto:Ahmedgooda109@gmail.com\' >Ahmedgooda109@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01093092178 \' >01093092178 </a></div>` + 
        `<div>سنه التخرج 2019  كليه تجاره جامعه بني سويف </div>` +
        `<div>عملت سابقاً كا midcal في شركه رعاية
عمالت أيضآ في المتحدة كا تلي سيلز
عمالت مندوب مبيعات في شركه ادويه حول العالم
عمالت كا midcal ع product ال pandol </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.0447684, lng:31.3172849},
        `<h4>Salma gamal </h4>`  +
        `<div ><a href=\'mailto:salmagamal001@gmail.com\' >salmagamal001@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01065270258\' >01065270258</a></div>` + 
        `<div>Faculty of veterinary medicin svu  2018</div>` +
        `<div>Training (medical analysis ) 
Training in pharmacy 2 months 
Course of ic3
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6027707, lng:31.506845},
        `<h4>Aya Ibrahim Abd Elwahid </h4>`  +
        `<div ><a href=\'mailto:taya.ibrahim@yahoo.com\' >taya.ibrahim@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01026021962\' >01026021962</a></div>` + 
        `<div>2018 bachelor of pharmacy </div>` +
        `<div>2014-2015Training in  Amira pharmacy, zagazig , Sharqia.
2015- 2016 Taining in Al Esraa pharmacy , zagazig , sharqia .
2018 - 2019Working in  pharmacy (Nehal El Shafei) , zagazig ,sharqia .
Other information:
Volunteer in Medical convoys .
Valid Driving license.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\'mailto:hota_2026@yahoo.com\' >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01060129791\' >01060129791</a></div>` + 
        `<div>Bacalor ,2014</div>` +
        `<div> I have experience in all aspects of pharmacy more than 7 years ,l was worked at a company of drugs for part of time  ( pharma overseas)and l acquired experience in this field.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2391502, lng:31.6510819},
        `<h4>Mohamed Nader</h4>`  +
        `<div ><a href=\'mailto:mohamednader51297@gmail.com\' >mohamednader51297@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01020104938\' >01020104938</a></div>` + 
        `<div>third degree of pharmacy </div>` +
        `<div>Team leader at Swaed Portsaid 2018-2019
Marketing at la maison espace d'art 2018 
public relations at Swaed Suiz 2017-2019
Volunteering as a doctor in virus C campaign  ( 100 Million Health) 
Scientific committee  in student union At port said university 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1596916, lng:29.8670634},
        `<h4>Ehab Abdelazez</h4>`  +
        `<div ><a href=\'mailto:ehababdelazez33@gmail.com\' >ehababdelazez33@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01140520565\' >01140520565</a></div>` + 
        `<div> Pharmacist class 2017</div>` +
        `<div>Have good experience in community pharmacy
Fresh graduated
Have marketing skills course at 2015 
Language is Excellent
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7896306, lng:30.9788488},
        `<h4>Christeen hasabAllah marcos</h4>`  +
        `<div ><a href=\'mailto:Yokonor64@yahoo.com \' >Yokonor64@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01276208134\' >01276208134</a></div>` + 
        `<div>Graduaded fron faculty of pharmacy tanta university 2018</div>` +
        `<div>Training at eva pharma campany
Traninig at kirovist factory Qcdepartment 
Icdl certificate 
Working for a year at private pharmacy
First aid certificate
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0504816, lng:31.3772816},
        `<h4>amgd el saeed</h4>`  +
        `<div ><a href=\'mailto:amgds3ied@gmail.com\' >amgds3ied@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092459811\' >01092459811</a></div>` + 
        `<div>Faculty of law</div>` +
        `<div>Title: sales supervisor or sales manager
Area: dakhlia
Salary:6000 : 8000
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9315765, lng:30.9206123},
        `<h4>Aya Abd elsalam Abdallah</h4>`  +
        `<div ><a href=\'mailto:ayaabdelsalam005@gmail.com\' >ayaabdelsalam005@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01147463632\' >01147463632</a></div>` + 
        `<div>2019" fresh graduated " Bachelor of science"chemistry&microbiology"..with grade :very good </div>` +
        `<div>Aya abd elsalam
Fresh graduated  from faculty of Science, chemistry &microbiology department  
With Grade :very good 

Good in English ,internet &icdl 

Work under stress 

Applied for :Medical representive or quality control </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.032821, lng:30.42527},
        `<h4>Menna Allah Ahmed Abdella </h4>`  +
        `<div ><a href=\'mailto:Mennaahmed043@gmail.com \' >Mennaahmed043@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01023065070 \' >01023065070 </a></div>` + 
        `<div>Graduated from faculty of science in Damanhour university 2019</div>` +
        `<div>Trained medical Rep for two months at Marvel Pharmaceuticals company

Trained in SRTA_city for four weeks

Training in Elrahma matared pharmacy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1742076, lng:31.1938001},
        `<h4>Ebram Nabeeh Eshak Zakhary  </h4>`  +
        `<div ><a href=\'mailto:ebramnabeeh@yahoo.com\' >ebramnabeeh@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01019642330\' >01019642330</a></div>` + 
        `<div>Veterinary medicine 2019</div>` +
        `<div>Trained at shenouda el-gendy farmacy. 
A group member at student union. 
Active member at IVSA. 
Viseted a johayna factory at 2017.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.982185, lng:31.16065},
        `<h4>Enas Helal Elsayed Hassanin</h4>`  +
        `<div ><a href=\'mailto:sci.enas20@gmail.com\' >sci.enas20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014743308\' >01014743308</a></div>` + 
        `<div>Student at faculty of science in 3rd year.. i 'll graduated in 2020</div>` +
        `<div>
-I have volunteered at Resala charity organisation.
-I have participed in sport activities in my college. 
-Fluent in computer usage. 
-i have Good communication skills. 
-i taked courses in English , soft skills and medical analysis</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2628265, lng:32.2711305},
        `<h4>khaled elzalaat</h4>`  +
        `<div ><a href=\'mailto:khaledelzalaat19@gmail.com\' >khaledelzalaat19@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01114188472\' >01114188472</a></div>` + 
        `<div>(Bachelor of science) (year 2016) Grade (V. Good) </div>` +
        `<div>As a pharmacist in big pharmacies (Dalia Shawky , El-Desouki , Mohamed&Ahmed , Islam El-Arif).
Medical Representitive At Penta Pharma combany for mediciens
Medical Representitive At Healthy Pharma combany for mediciens
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Yousra magdy elenany</h4>`  +
        `<div ><a href=\'mailto:Yousraahmed426@gmail.com\' >Yousraahmed426@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014268992\' >01014268992</a></div>` + 
        `<div>Bachelor of vet . medicine. .....2016</div>` +
        `<div>Veterinarian 
26 years 
Fresh. 
Indoor job 
Salary. 3000 
Training...
Pharmacy 2012.......2015
Fitst aid course. .April 2014
Marketing and selling skills training2015
Field training course from June to August 2015 


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1569423, lng:32.7271043},
        `<h4>Lolla Albeir Ishak</h4>`  +
        `<div ><a href=\'mailto:lollaalbeir20@gmail.com\' >lollaalbeir20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01207958783\' >01207958783</a></div>` + 
        `<div>Still student</div>` +
        `<div>I have good  information about drugs , marketing and how to persuade the clients with the product. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1061339, lng:30.74998},
        `<h4>Youstina yehia khalaf </h4>`  +
        `<div ><a href=\'mailto:Youstinayehia639@yahoo.com \' >Youstinayehia639@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01159395552\' >01159395552</a></div>` + 
        `<div>بكالريوس علوم ٢٠١٩</div>` +
        `<div>Training in sanitation and drinking water 
Training in up pharma 
Training in general hospital 
Course in pcr and its application 
Complete course in super Rep</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0885602, lng:31.4127329},
        `<h4>   Aya Hamed Ahmed Abd elmoiem</h4>`  +
        `<div ><a href=\'mailto:ayahammed155@gmail.com\' >ayahammed155@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002499364\' >01002499364</a></div>` + 
        `<div>Bachelore in vetrinary medicine 2018</div>` +
        `<div>I have worked for 6 months in Ronesca company in nutrtional line in KSA market. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.8327534, lng:31.4909984},
        `<h4>Ali Mohamed ahmed</h4>`  +
        `<div ><a href=\'mailto:alinouh2019@gmail.com\' >alinouh2019@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094720350\' >01094720350</a></div>` + 
        `<div>Faculty of Pharmacy 2015</div>` +
        `<div>Members in EPSF (Egyptian pharmaceutical student federations 
Training medical rep in astrazeneca Combines 
Jop pharmacist in Normandy pharmacy 

</div>` 
        
        );
        
}
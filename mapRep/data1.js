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
addMarkerToGroup(group, {lat:28.5551244, lng:30.7445141},
        `<h4>Walaa magdy mahmoud</h4>`  +
        `<div ><a href=\'mailto:wm11753@gmail.com\' >wm11753@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123876552\' >01123876552</a></div>` + 
        `<div>Faculty of pharmacy ...graduation date; feb  2019</div>` +
        `<div>1-Training in chemical industries development co (CID)
2- Clinical training in hospital of Beni-suef university for one month.
3- Training in a pharmacy for 3 months.
4- Certificate of appreciation (7 days in practical life) [ Research _ First 
aid _ Otc _ Soft skills].
5- certificate of cittendance (step the way)
6- certificate of appreciation presented from pharmacology_ toxicology</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0885602, lng:31.4127329},
        `<h4>   Aya Hamed Ahmed Abd elmoiem</h4>`  +
        `<div ><a href=\'mailto:ayahammed155@gmail.com\' >ayahammed155@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002499364\' >01002499364</a></div>` + 
        `<div>Bachelore in vetrinary medicine 2018</div>` +
        `<div>I have worked for 6 months in Ronesca company in nutrtional line in KSA market. </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7866171, lng:31.0142827},
        `<h4>Fatma abozaid salama</h4>`  +
        `<div ><a href=\'mailto:fsalama921@gmail.com\' >fsalama921@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01008041599\' >01008041599</a></div>` + 
        `<div>Faculty of pharmacy tanta university</div>` +
        `<div>I have trained in two different pharmacies
1-mohamed nabel pharmacy 
2-Elserfy pharmacy</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.512449, lng:31.5475314},
        `<h4>Ahmed Daoud</h4>`  +
        `<div ><a href=\'mailto:www.daoud2017@gmail.com\' >www.daoud2017@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092029256 \' >01092029256 </a></div>` + 
        `<div>Bachelor of science in microbiology chemistry 2017 </div>` +
        `<div>
2017:  Certificate and Training in Microbiology and molecular biology   laboratories(ASIUTUNIVERSITY).


2016:  Certificate in water chemical analysis and use the best ways of
quality in water and sanitation (potable Water and sanitation,Sharkia)

2016.               : Certificate in criminal investigation and relationship with pure and
Applicable science (the forensic Medicine And science studies
Center,Asiut). .

2015: Certificate of training in peace and professional health and
environmental protection.(petroleum Pipelines Company,Mostorod_
Kaliubia)

2015:                  Certificate of training  quality 
control,rawMarital and Microbiology sections
(EIPICOCompany,ElasherfromRamadan city)

2014:  Certificate of Achievement in practical applications of medical
laboratory investigation</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.2169387, lng:31.4515099},
        `<h4>Mohamed hassan</h4>`  +
        `<div ><a href=\'mailto:mohammed.hassan@pharma.asu.edu.eg\' >mohammed.hassan@pharma.asu.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01147118551\' >01147118551</a></div>` + 
        `<div>faculty of pharmacy Ain shams university 2020</div>` +
        `<div>Leader team for Market research Infomine company 
Organiser for Loreal 'Laroshe posey pharmacy attack 
Rep for Utopia Lab 
As pharmacist for Ibram pharmacy,Normandy 'training',Omnia El swaf pharmacy 
Head for Awareness team Medical caravan 
Head for fundraising at EPSF,Ainshams Union
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0856429, lng:31.2005777},
        `<h4>Asmaa tarek mohamed ragheb</h4>`  +
        `<div ><a href=\'mailto:Asmaatarek2710@gmail.com\' >Asmaatarek2710@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01152007033_01288177036\' >01152007033_01288177036</a></div>` + 
        `<div>Pharmacist (2019) </div>` +
        `<div>Pharmacist at community pharmacy
Dr/mohamed kamal pharmacy
Dr/Eslam syam pharmacy
El_Esaf El_kobra pharmacy
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6923659, lng:31.6487877},
        `<h4>Mohammed El sayed Mohammed hanafy </h4>`  +
        `<div ><a href=\'mailto:Hanafymohammad45@gmail.com \' >Hanafymohammad45@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01151445857\' >01151445857</a></div>` + 
        `<div>Faculty of Science, Al - Azhar University, Department of Chemistry, 2019</div>` +
        `<div>Working as medical rep in the field of medicines in companies located in Sharkia or neighboring province </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.099389, lng:30.7585928},
        `<h4>Andrew Samer Fawzy</h4>`  +
        `<div ><a href=\'mailto:andrwsmyr@gmail.com\' >andrwsmyr@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01221985922\' >01221985922</a></div>` + 
        `<div>خريج كلية علوم 2019 قسم كيميا حيوي و ابحث عن مديكال ريب في المنيا او القاهرة او الاسكندرية</div>` +
        `<div>One month in medical laboratory.

Two weeks in pharmaceutical industry in Up pharma factory.

Two weeks in water and waste water company.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.0900635, lng:30.7546721},
        `<h4>هبة احمد عبد النعيم</h4>`  +
        `<div ><a href=\'mailto:hebaahmed23541@yahoo.com\' >hebaahmed23541@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01097154897\' >01097154897</a></div>` + 
        `<div>بكالوريوس علوم قسم النبات والمكيروبيولوجى 2015</div>` +
        `<div>Therapy pharmaceutical company
Pharma medica pharmaceutical company
Fap pharmaceutical company</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1480225, lng:31.278194},
        `<h4>Osama Fayez</h4>`  +
        `<div ><a href=\'mailto:ph.osama.fayez@gmail.com\' >ph.osama.fayez@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01289444125\' >01289444125</a></div>` + 
        `<div>Bachelor Of Pharmacy - Ainshams University .. Graduation Year : 2019</div>` +
        `<div>Training In Amoun Pharmaceutical As a Medical Representative In Summer 2018 

Training In Community Phamacy ( Wagdy Pharmacy ) In Summer 2014

Working In Community Pharmacy ( Wagdy Pharmacy ) In Summer of each 2015 & 2016 & 2017 & 2018</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5627518, lng:31.7145129},
        `<h4>Engy Victor Adeeb</h4>`  +
        `<div ><a href=\'mailto:dr.engy.adeeb@gmail.com\' >dr.engy.adeeb@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01286008308\' >01286008308</a></div>` + 
        `<div>Veterinary medicine 2014</div>` +
        `<div>Worked for Biomed pharmaceutical company
Working for Habib Scientific office since 2016 till now</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.582007, lng:31.6535474},
        `<h4>Mariam Monuir Aziz</h4>`  +
        `<div ><a href=\'mailto:mariammonuir123@gmail.com\' >mariammonuir123@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01229379580\' >01229379580</a></div>` + 
        `<div>Bacaloria of Science at Sohag University in 2019</div>` +
        `<div>SKILLS
Team Work:
Member of seek team as a 
student activity to help students 
improve their English language 
and provide them with different 
skills.
Leadership:
I'm an administrator in the 
scientific page on the social 
media ₺Facebook₺ with a team 
work from students to work a 
raise the scientific culture for the 
followers.

EDUCATION:
College: Faculty of Science .
Graduation Year: 2019
University : Sohag
Grade : Good 

COURSES:
ICDL Course for 42 hours.
English Online Course from Coursera for 5 weeks.
Employment Skills Course for 40 hours.
Essential work Skills Course for 30 hours.
Frist Aid Online from Edraak Course for 
15 hours.


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3580308, lng:31.3822386},
        `<h4>Mostafa Gamal Saad Mahmoud Khalil </h4>`  +
        `<div ><a href=\'mailto:Dr.mostafa5alil@gmail.com \' >Dr.mostafa5alil@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01018960975\' >01018960975</a></div>` + 
        `<div>Veterinary medicine - zagazig university - fresh graduated 2019</div>` +
        `<div>Trying to be committed to a medical sales 
representative, professional and dynamic center with a high 
degree and has a proven track record of achieving results in very 
competitive environments, and seek for a position in the company 
in the center of the respectable to apply current skills and also to 
add to your organization

- Successfully completed Theoretical and practical training in Soft skills package
- Completed the training course of Know yourself during December 2014
- Successfully completed Theoretical and practical training in American conversation 
- Attended and passed the course successfully with grade Very good in ICDL
- Attended the first national scientific conference of international veterinary student’s association (IVSA) – Egypt on 23th of march 2017

- Great communication skills.
• Effectively able to perform in both individually and as team player.
• Highly Organized, Enthusiastic, Helpful and able to work under pressure.

- DEAL WITH windows , ME , XP , INTERNET WEB SITE , WORD XP, AND EXCEL</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0233379, lng:31.1737183},
        `<h4>fatma mohamed</h4>`  +
        `<div ><a href=\'mailto:fatmamohammed271996@gmail.com\' >fatmamohammed271996@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01155887512\' >01155887512</a></div>` + 
        `<div>Bs. C of science, Ain shams university 2019</div>` +
        `<div>           Traning and working  in labolatory  and training in National research inslite                                 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.508551, lng:31.1564108},
        `<h4>Mahmoud Abd-Alati Eltantawy</h4>`  +
        `<div ><a href=\'mailto:Mahmoudzayed740@gmail.com\' >Mahmoudzayed740@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01113839520\' >01113839520</a></div>` + 
        `<div>Student at faculty of pharmacy ; grade 3 .</div>` +
        `<div>I have experience for 2 years at community pharmacy .
I have watched more than 70 medical vedio.
More than 100 vedio about psychatry and psychology . 
More than 200 vedio about self development .
I have read more than 85 book about self development , selling , marketting ,persuation , body language ,leadership ,creativity , self steam ,ethics ,mastering , self motivation , different types of thinking .
SKILLS
critical thinking .
self steem .
selling .
Marketting .
Persuation .
Negotiantion .
working under any type of stress .
Time management .
Self development 
Social intellegance .
Emotional intellegance .
Creative intellegance .
Speaking at stage perfectly .

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.3749043, lng:32.5587988},
        `<h4>Mariam Gamil </h4>`  +
        `<div ><a href=\'mailto:mariam2gamil@gmail.com \' >mariam2gamil@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01555665201 \' >01555665201 </a></div>` + 
        `<div>bachelor 2019 veterinary medicine south valley university </div>` +
        `<div>training at medical unit of the veterinary medicine 
training at pharmacy
training at laboratory of Veterinary Medicine 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.4476469, lng:31.6914223},
        `<h4>ibrahim smysem</h4>`  +
        `<div ><a href=\'mailto:Medicalrepibrahim@gmail.com \' >Medicalrepibrahim@gmail.com </a></div>` + 
        `<div ><a href=\'tel:+201028251523\' >+201028251523</a></div>` + 
        `<div>BSc in biological sciences 2007 </div>` +
        `<div>Sales Rep in various companies from 2003 to 2012
Senior medical Rep from 2012 to 2018in well established  companies </div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.3257849, lng:32.5865749},
        `<h4>Maha abdelraheem mohamed</h4>`  +
        `<div ><a href=\'mailto:Mahaabdelraheem77@gmail.com\' >Mahaabdelraheem77@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01202428946\' >01202428946</a></div>` + 
        `<div>Faculty of veterinary medicine south valley university</div>` +
        `<div>PERSONAL
INFORMATION
Name :
Maha abdelraheem
mohamed
Age:
22 year
Date of birth:
7/7/1997
Nationality:
Egyptian
Place of birth :
esna_Luxor _Egypt
Marital status :
single
Gender:
female
Current address:
esna_Luxor
Email :
mahaabdelraheem77@gmail.com
Tel :
01202428946
Education and training :
faculty of veterinary medicine south valley
university
Personal skills
Mother language : arabic
Other language : English
Self assessment
Listening : good
Speaking : good
Reading : very good</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.7404895, lng:30.7476677},
        `<h4>Ahmed shaban</h4>`  +
        `<div ><a href=\'mailto:aiadahmed1122@gmail.com\' >aiadahmed1122@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022616128\' >01022616128</a></div>` + 
        `<div>ثانويه عامه  وطالب بجامعه خاصه حاليا </div>` +
        `<div>خبره كبيره اكثر من 8 سنوات متاح للعمل شيفت نايت او خدمه ليليه في ااكتوبر او زايد مدير شيفت سابقا </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1610387, lng:31.1833781},
        `<h4>Amr Mohamed Saad</h4>`  +
        `<div ><a href=\'mailto:amrmohamedsaad5@gmail.com\' >amrmohamedsaad5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01001094125\' >01001094125</a></div>` + 
        `<div>B.Sc.  department of chemistry Assiut University in 2017</div>` +
        `<div>A fresh graduate, looking for agood position in high staut  company .
I work at pharmacy a short time.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5629791, lng:31.6888378},
        `<h4>kerollos mansour kerollos</h4>`  +
        `<div ><a href=\'mailto:kero_mansour11@yahoo.com\' >kero_mansour11@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01223231310\' >01223231310</a></div>` + 
        `<div>Science 2013 micro biology</div>` +
        `<div>Top pharm...one year
Adwia ...one year
Biomed...two year
4 years in medical rep and senior at sohag area</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Ahmed Reda Mohamed </h4>`  +
        `<div ><a href=\'mailto:ahmdr8322@gmail.com\' >ahmdr8322@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123787128\' >01123787128</a></div>` + 
        `<div>Clinical pharmacy 2019 </div>` +
        `<div>Clinical pharmacist 
2019 graduation 
Past Work  /Community pharmacy 
Nutrition TOT

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7536621, lng:30.6990643},
        `<h4>Ahmed elsayed abdel-Rasol gebreel</h4>`  +
        `<div ><a href=\'mailto:ahmed.abdelrasol.gebreel@gmail.com\' >ahmed.abdelrasol.gebreel@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01144103877\' >01144103877</a></div>` + 
        `<div>Biochemistry and chemistry 2020</div>` +
        `<div>محتاج تدريب صيفي لتالته علوم قريب من محل الاقامه بالبحيره او الاسكندريه تخصص كيمياء حيوية كيمياء 
I need summer training opportunity
At the available and suitable department 
Q.C , safety or Medical representative 
My cv is ready to be reviewed and so strong linkedin profile 13,900 + connections
 
GPA 3.57 EXCELLENT 


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.956637, lng:31.1637008},
        `<h4>Mahmoud saed el-refaay el-bahery</h4>`  +
        `<div ><a href=\'mailto:mahmoudsaed611@gmail.com\' >mahmoudsaed611@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01009511623\' >01009511623</a></div>` + 
        `<div> Science from mansoura university 2015</div>` +
        `<div> مندوب مبيعات طبيه دوائيه  لشركه دوائيه 
 انا لسه فريش  وعاوز فيكتت  فى شركه دوائيه  الغربيه  المحله و سمنود و زفتى </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.5341098, lng:31.2896372},
        `<h4>Mohamed Hassan abd elbaqy</h4>`  +
        `<div ><a href=\'mailto:Hmohammed455@yahoo.com \' >Hmohammed455@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01100331758 \' >01100331758 </a></div>` + 
        `<div>بكالوريوس علوم  قسم الجيوكمياء سنة التخرج 2016</div>` +
        `<div>Medical Representative at Trust Pharma. From 7. 2016 to4. 2017
Medical Representative at Prolife Pharma.. From 5. 2017 to 8. 2018</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>Dina Mahmoud Elsayed Mohamed </h4>`  +
        `<div ><a href=\'mailto:doda123456vet@gmail.com\' >doda123456vet@gmail.com</a></div>` + 
        `<div ><a href=\'tel: 01122144561\' > 01122144561</a></div>` + 
        `<div>Baclor of facility of Veterinary medicine zagazig University</div>` +
        `<div>I have acourse of communication skills from zagazig 
Good speaking English
I am skillful and very excellant woman</div>` 
        
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
        
addMarkerToGroup(group, {lat:27.1806295, lng:31.1912864},
        `<h4>Ahmed Eliwa</h4>`  +
        `<div ><a href=\'mailto:A7mad_3lewa@yahoo.com\' >A7mad_3lewa@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01008731069\' >01008731069</a></div>` + 
        `<div>B. A. Arts 2007</div>` +
        `<div>Upper Egypt sales supervisor at:
- Cemipharm
- Rameda
Sales representative at:
- AUG
- Helth well Egypt</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.830541, lng:31.3805786},
        `<h4>Shrouk kamel helmy</h4>`  +
        `<div ><a href=\'mailto:Shroukkamel36@gmail.com\' >Shroukkamel36@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01148621573\' >01148621573</a></div>` + 
        `<div>كلية الزراعة قسم بايو تكنولوجى خريجة 2017</div>` +
        `<div>حديثة التخرج 
تم التدريب فى معمل تحاليل طبيه
التدريب فى المركز القومى للبحوث</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.58155, lng:31.4958411},
        `<h4>Yara Elsayed Mohamed Abedlsallem </h4>`  +
        `<div ><a href=\'mailto:yaraelsayed57@gmail.com \' >yaraelsayed57@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01093837535\' >01093837535</a></div>` + 
        `<div> fresh graduate from pharmacy</div>` +
        `<div>تدريب ف صيدليه ساره ف الصيف
تدريب ف صيدليه الحياه
تدريب ف مستشغي الوراق بالجيزه
تدريبات skills ف شركه bio pharma بالتجمع 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8797449, lng:31.2555072},
        `<h4>eman ahmed elsaid ahmed</h4>`  +
        `<div ><a href=\'mailto:ea769475@gmail. com\' >ea769475@gmail. com</a></div>` + 
        `<div ><a href=\'tel:01013456079\' >01013456079</a></div>` + 
        `<div>graduated from college of pharmacy2019</div>` +
        `<div>I'am fresh graduate. search for traning or jop in company like sanofy. I have trained in factory, and also have trained in pharmacy. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.556952, lng:31.694785},
        `<h4>Abodaif ahmed</h4>`  +
        `<div ><a href=\'mailto:drahmedabodaif@gmail.com\' >drahmedabodaif@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115901230\' >01115901230</a></div>` + 
        `<div>صيدلة دفعة ٢٠١٩</div>` +
        `<div>Fresh graduated pharmacist
trained in community pharmacy 
And in astrazenca company</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.2080948, lng:32.1285544},
        `<h4>ناريمان حميد مطاوع </h4>`  +
        `<div ><a href=\'mailto:Narimanhemad@gmail.com \' >Narimanhemad@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01012722612\' >01012722612</a></div>` + 
        `<div>بكالوريوس علوم  2015</div>` +
        `<div>خبرة فى مجال التحاليل الطبية لمدة سنة ومجال معالجة مياه الشرب والصرف الصحي  لمدة سنة</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.3056373, lng:31.0478312},
        `<h4>Shaimaa samir jafer</h4>`  +
        `<div ><a href=\'mailto:Shimaasamir561@gmail.com\' >Shimaasamir561@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٠٦٩٨٣٠٣٢٩\' >٠١٠٦٩٨٣٠٣٢٩</a></div>` + 
        `<div>2019Bachelor of science</div>` +
        `<div>I am Fresh graduate from the faculty of science .
I trained and worked in laboratory in the last summer.
I like working in general and acheiving the target  .
I have trained in forensic medicine and center of cancer research 
I appreciate the way of dealing that pharmaceutical companies use 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.5534273, lng:30.8147062},
        `<h4>Mariem Fayez ayed</h4>`  +
        `<div ><a href=\'mailto:mariem.fayez300@gmail.com\' >mariem.fayez300@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٢٥٣٠٥٩٥٥\' >٠١٢٢٥٣٠٥٩٥٥</a></div>` + 
        `<div>صيدله 2019</div>` +
        `<div>خريجه جديد 
تدريب في صيدليه ٣ شهور
High communication skills 
Work under pressure 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.4941465, lng:30.8137655},
        `<h4>George bhr nagiub </h4>`  +
        `<div ><a href=\'mailto:gourg.baher@gmail.com\' >gourg.baher@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203019092\' >01203019092</a></div>` + 
        `<div>Faculty of pharmacy 2019</div>` +
        `<div>Marketing and drug promotion course
Qualified in Ms - programs ( windows_ word_ power point)
Developed good communication and representing skills
Obtained adaptability, flexibility ,and deadline meetings
Acquired research, investigation and analytical skills</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.788471, lng:31.001921},
        `<h4>Mohamed Elsaaed Mahmoud Ali Elbeheiry </h4>`  +
        `<div ><a href=\'mailto:Mohamedelbeheiry15@gmail.com\' >Mohamedelbeheiry15@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022957804\' >01022957804</a></div>` + 
        `<div>Bachelor Of Science. 2019</div>` +
        `<div>work under pressure
Good speaker
The persuasion is easy
Good at software</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1409971, lng:31.3587098},
        `<h4>Ahmed Samuel </h4>`  +
        `<div ><a href=\'mailto:Ahmed1997samy@Gmail.com\' >Ahmed1997samy@Gmail.com</a></div>` + 
        `<div ><a href=\'tel:01117657337\' >01117657337</a></div>` + 
        `<div>Graduated from Faculty of Science 2019</div>` +
        `<div>كليه علوم قسم كمياء حديث التخرج ارغب العمل 
في أي مجال من مجالات الكمياء في الشركات أو المصانع اي شغل لا يرغب الخبرة حتى تكتسب خبرة في سوق العمل </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1068682, lng:30.9350663},
        `<h4>Sahar Elsayed Elhadad</h4>`  +
        `<div ><a href=\'mailto:Saharelhadad205@gmail.com\' >Saharelhadad205@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094653366 \' >01094653366 </a></div>` + 
        `<div>Bachelor of pharmacy 2019 </div>` +
        `<div>* Pharmacist at Dr. Aml rihan pharmacy from august 2017 till now
* Performed in the first scientific conference for pharmacists 2019
* Joined job fair 2018, 2019
* Trained a year in Dr. Aml rihan pharmacy 2016
* Trained for 2 years in Dr. Salah al-dein pharmacy 2014, 2015
* joined orientation day 2014
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.4771852, lng:31.7986931},
        `<h4>Mahmoud abdelhady</h4>`  +
        `<div ><a href=\'mailto:realhady425@gmail.com\' >realhady425@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01090954241\' >01090954241</a></div>` + 
        `<div>Science 2015</div>` +
        `<div>Medical Rep in
Multicare Pharma (sistar company of Pharma care) from Jan 2016 till dec 2016
Pharco B from Jan 2017 till dec2018
Delta bio from Jan 2019 till now 
 </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.008079, lng:31.210931},
        `<h4>Ramy adel</h4>`  +
        `<div ><a href=\'mailto:Adelramy555@gmail.com\' >Adelramy555@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01146193716\' >01146193716</a></div>` + 
        `<div>2018.بكاريوس تمريض</div>` +
        `<div>اشتغلت ف مستشفي الدمرداش رعايه 
مستشفي سان بيتر الدولي ادوار 
اشتغلت ف اليوم الواحد بحلوان طؤلري
واشتغلت ف مستشفي اليوناني رعايه

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1596992, lng:31.346817},
        `<h4>Mohamed Adel Hassan moustafa </h4>`  +
        `<div ><a href=\'mailto:drssama@hotmail.com \' >drssama@hotmail.com </a></div>` + 
        `<div ><a href=\'tel:01277692206 \' >01277692206 </a></div>` + 
        `<div>Bachelor of science 2008 </div>` +
        `<div>Senior medical representative at october pharma from 2013 till now

Medical Representative at El Amirya from 2011 to 2013

Medical Representative at pharo pharma from 2009 to 2011 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2047337, lng:29.8811048},
        `<h4>Belal Fawzy</h4>`  +
        `<div ><a href=\'mailto:bfawzy60@gmail.com\' >bfawzy60@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01225743640\' >01225743640</a></div>` + 
        `<div>بكالوريوس علوم قسم كيمياء دفعه ٢٠١٦</div>` +
        `<div>مندوب مبيعات طبيه شركه رويال للاعشاب لمده سنتين 
مندوب مبيعات طبيه شركة روفنتس فارما لمدة ٦ شهور 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7253373, lng:31.1220292},
        `<h4>Asmaa Hany </h4>`  +
        `<div ><a href=\'mailto:asmahany191@gmail.com \' >asmahany191@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01096796421\' >01096796421</a></div>` + 
        `<div>Faculty of science </div>` +
        `<div>Medical rep in Tanta عاوزه اشتغل ف شركه ادويه انا بقالي سنه يعني عندي خبره وخريجه علوم 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1731022, lng:32.7260835},
        `<h4>Martina Magdy Helmy</h4>`  +
        `<div ><a href=\'mailto:martina.magdy2000@gmail.com\' >martina.magdy2000@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01009515432\' >01009515432</a></div>` + 
        `<div>Faculty of Science 2018</div>` +
        `<div>-Medical Rep. at Sanofi PPG
-Training at Laboratory of Aluminum Egyptian company</div>` 
        
        );
        
addMarkerToGroup(group, {lat:24.979708, lng:32.8908709},
        `<h4>Heba hassan elsayed</h4>`  +
        `<div ><a href=\'mailto:He.245@yahoi.com\' >He.245@yahoi.com</a></div>` + 
        `<div ><a href=\'tel:01091218494\' >01091218494</a></div>` + 
        `<div>Fresh graduated from faculty of veterinary medicine aswan university</div>` +
        `<div>•	Principles of medical representative certificate from The Veterinary Syndicate




I worked in Salah Elden pharmacy when I was a student which enable me to gain the following experiences such as:
1.	Read Prescriptions 
2.	Patients injection
3.	Receive and Prepare Orders

       


</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1338556, lng:31.3314818},
        `<h4>Mohamed Ali </h4>`  +
        `<div ><a href=\'mailto:mohamed.elatroush77@gmail.com\' >mohamed.elatroush77@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01205030122\' >01205030122</a></div>` + 
        `<div>Agriculture science 2015</div>` +
        `<div>7 months at Master care company
at sales and medical rep, dermatology and orthopedic and medical knowledge of cosmo medical products hair and skin. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.0843273, lng:30.7270181},
        `<h4>Kareema Khalaf youssef</h4>`  +
        `<div ><a href=\'mailto:Kareema. Khalaf 48@yahoo.com \' >Kareema. Khalaf 48@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01100725729\' >01100725729</a></div>` + 
        `<div>Faculty of science 2019</div>` +
        `<div>Education:A Bachelor of Chemistry, Chemistry department, minia university. 
General grade:good
Languages:Arabic and English speaking a little, writing, reading very good
Courses:first aids cours, summer training in drinking water and stanitation company. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.139136, lng:31.6271817},
        `<h4>Eman elhossiny shindy</h4>`  +
        `<div ><a href=\'mailto:Emanelhossiny123@gmail.com\' >Emanelhossiny123@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01154088057\' >01154088057</a></div>` + 
        `<div>2018graduated -mansoura veterinary medicine.</div>` +
        `<div>Iam a vet from mansoura .menyatelnasr
Recently graduated
Iwant to work a medical rep in the farasawy line.
 I taked english course and first aid -emergancy-otc-soft skills course.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.041319, lng:31.4006576},
        `<h4>Mohamed Ahmed Elhelw</h4>`  +
        `<div ><a href=\'mailto:mohamedelhelw59@gmail.com\' >mohamedelhelw59@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01156515631\' >01156515631</a></div>` + 
        `<div>faculty of science 2017</div>` +
        `<div>Eldebiky Pharma
Jan 2019 - Current
Medical Representative
Worked on : Antibiotics , Antispasmotics and cosmotics
Experience with gyna-ortho-pedia-IM
Area : Belkas - Sherbin - French line

Tri Star Medical Group
Jan 2018 - Jan 2019
Medical Representative
Worked on antibiotics and supplements
Experience with Gyna - IM - Ent - Surg
Area : Aga - Sinbellawin - Mansoura Center</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8452186, lng:30.9035286},
        `<h4>Merna Naguib Elsakkar</h4>`  +
        `<div ><a href=\'mailto:mernanageb@yahoo.com \' >mernanageb@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01201423860\' >01201423860</a></div>` + 
        `<div>Bachelor’s degree in science 2019. Zoo_chemistry department. </div>` +
        `<div>Fresh graduated.
I don't have  good experience in medical rep career but I can learn in short time and I will do my best. </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1401183, lng:33.8300716},
        `<h4>Reem Mahmoud Ramadan</h4>`  +
        `<div ><a href=\'mailto:reemhamuda640@gmail.com\' >reemhamuda640@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01005228570\' >01005228570</a></div>` + 
        `<div>Science biochemistry Ain shams 2010</div>` +
        `<div>Medical rep. at medicine company 
Salary 4000 L.E.
Working for Unipharma for about 5 years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9295448, lng:31.3096601},
        `<h4>Mohamed mostafa kamel gomaa</h4>`  +
        `<div ><a href=\'mailto:Hatem1fawzy2@gmail.com\' >Hatem1fawzy2@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094438962\' >01094438962</a></div>` + 
        `<div>..2019Graduated from azhar pharmasy</div>` +
        `<div>خبره في الادويه
حسن التعامل
مهارت وفن التعامل مع الاخرين
جيد في التعامل تحت الضغط
حسن المظهر</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.2177396, lng:31.3679216},
        `<h4>محمد محمود عبد العال العيسوي </h4>`  +
        `<div ><a href=\'mailto:melesawy471@gmail.com\' >melesawy471@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01226459958\' >01226459958</a></div>` + 
        `<div>بكالريوس علوم جامعه بنها 1/2020</div>` +
        `<div>مندوب تسويقي للادوات المكتبيه وتوريدات عامه للمحلات الجمله والشركات الخاصه فترة 2014-2018
مندوب تسويقي لمستحضرات التجميل على محلات الجمله  فترة2018-2019
مستوى متوسط باللغه الانجليزي 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.0025698, lng:32.8181462},
        `<h4>مصطفي محمد رفاعي سليمان</h4>`  +
        `<div ><a href=\'mailto:Mostafarefay981@yahoo.com\' >Mostafarefay981@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٧٢٨١٧١٦٦\' >٠١٢٧٢٨١٧١٦٦</a></div>` + 
        `<div>بكلوريوس صيدلة اسيوط٢٠١٧ </div>` +
        `<div>صيدلية د حسن عبد الرشيد بالقلعة مركز قفط 
سنة في مستشفي الغردقة العسكري 
شهرين في صيدليات عابدين في قنا
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1753721, lng:30.7604701},
        `<h4>Remoon Refaat Farouk </h4>`  +
        `<div ><a href=\'mailto:remoonrefaat111@gmail.com\' >remoonrefaat111@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01200652005 \' >01200652005 </a></div>` + 
        `<div>Faculty of Veterinary Medicine 
Assiut University 
Graduated in 2017</div>` +
        `<div>-Trainiag in a pharmacy in elminia 
-Responsiable of medical point of shooting club of the armed forces- Giza</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5939014, lng:31.5121985},
        `<h4>Louay emad mahmoud </h4>`  +
        `<div ><a href=\'mailto:louayemad08@gmail.com\' >louayemad08@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01003968567\' >01003968567</a></div>` + 
        `<div>	Faculty of Science, Zagazig University Dept. of chemistry and physics, May 2018  </div>` +
        `<div>	worked as medical representative at Panacea pharmaceutical company from 1
7
2018 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.416477, lng:31.813316},
        `<h4>Mahmoud ahmed elsayad</h4>`  +
        `<div ><a href=\'mailto:mahmoudelsayad88@gmail.com\' >mahmoudelsayad88@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01090431206\' >01090431206</a></div>` + 
        `<div>بكالريوس علوم سنه 2009</div>` +
        `<div>مندوب دعايه طبيه في شركه الفرعونيه للادويه لمده عام ونصف
مندوب دعايه طبيه في شركه دلتا فارما للادويه لمده عام
مندوب دعايه طبيه في شركه بيوميد للادويه لمده عامين</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7739949, lng:30.9896188},
        `<h4>Mahmoud elhassanein elemam </h4>`  +
        `<div ><a href=\'mailto:dodoelprof@gmail.com\' >dodoelprof@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01157993885\' >01157993885</a></div>` + 
        `<div>Faculty of science (chemistry / Microbiolog)  2017 very good (tanta)</div>` +
        `<div>Medical rep
Mahmiud elhassanein 
 Faculty of science 
Chemistry /Microbiology (very good)2017 
Tanta 
Gharbia area</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9928906, lng:31.328077},
        `<h4>Mostafa Tarek Reda</h4>`  +
        `<div ><a href=\'mailto:Sasaa55.2020@gmail.com\' >Sasaa55.2020@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01015488853\' >01015488853</a></div>` + 
        `<div>Pharmacist, 2020</div>` +
        `<div>Summer internship pharmacist 
Training as med. Rep
Level 5 
..... 
Work for 2 years at pharmacy still present 
Work hard, flexible, friendly 
Good at (PowerPoint, word, excel) 
Member at EPSF team </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8424559, lng:31.3336092},
        `<h4>Amin elhawary</h4>`  +
        `<div ><a href=\'mailto:amin.ali259@gmail.com\' >amin.ali259@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01027226327\' >01027226327</a></div>` + 
        `<div>Pharmacy_2012</div>` +
        `<div>Purchasing _ replenishment_operation
Contracting _marketing_sales analysis</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1665, lng:31.31867},
        `<h4>Magdy mahamad ahmad ali</h4>`  +
        `<div ><a href=\'mailto:Magdy55mahamad@gmail.com\' >Magdy55mahamad@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01111239192\' >01111239192</a></div>` + 
        `<div>Physics and chemistry department of science -2019 year of graduation</div>` +
        `<div>I trained at maslaha of chemistry

I trained at paken company
I work for resala charity 
I work at many farmacies</div>` 
        
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
        
addMarkerToGroup(group, {lat:27.745061, lng:30.8436172},
        `<h4>mostafa el maghraby </h4>`  +
        `<div ><a href=\'mailto:mostafa_elmaghraby@hotmail.com\' >mostafa_elmaghraby@hotmail.com</a></div>` + 
        `<div ><a href=\'tel:01065090822\' >01065090822</a></div>` + 
        `<div>veterinary medicine 2006</div>` +
        `<div>Medical representative at pharco,inspire.
senior medical representative at pharmed hc.
supervisor at Marvel. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.6107079, lng:30.7867974},
        `<h4>Ayman khalaf mossad</h4>`  +
        `<div ><a href=\'mailto:Aymanhamdi47@gmail.com \' >Aymanhamdi47@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01017911802\' >01017911802</a></div>` + 
        `<div>Pharmacutical science and pharmaceutical industries bachelor  feb 2019 </div>` +
        `<div>Experience in Community pharmacies
Attended:
1) OTC course in ain shams university
2) pharmacy career pathway conference in MUST
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7924177, lng:31.9065718},
        `<h4>Walaa Ibrahim Thabet</h4>`  +
        `<div ><a href=\'mailto:Walaa14219@hu.edu.eg\' >Walaa14219@hu.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01014420173\' >01014420173</a></div>` + 
        `<div>Pharmacy 2019</div>` +
        `<div>Fresh graduated 2019
GPA : 3.4
Trained in Misr pharmacies
Trained in ElWaraq hospital 
Trained in future for pharmaceutical industries</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1600437, lng:31.4557949},
        `<h4>Mira Ayoub Matta </h4>`  +
        `<div ><a href=\'mailto:Mira.ayoub.matta@gmail.com \' >Mira.ayoub.matta@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01207053446 \' >01207053446 </a></div>` + 
        `<div>Faculty of pharmacy 2018</div>` +
        `<div>Looking for a fulfilling position as a medical representative in a reputable organization where ability to provide information regarding drug effect and dosage will be fully utilized.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9894498, lng:31.1643093},
        `<h4>Ragas Abdel baset hamza</h4>`  +
        `<div ><a href=\'mailto:hadyelnasraby@gmail.com\' >hadyelnasraby@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01013930777\' >01013930777</a></div>` + 
        `<div>Pharmacy 2009</div>` +
        `<div> خريجه كليه صيدلة جامعة اسيوط دفعه 2009 كنت اعمل لدى وزارة الصحة  واخذت إجازة تحسين دخل 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1318722, lng:31.3143273},
        `<h4>Hager Mohamed Mahmoud</h4>`  +
        `<div ><a href=\'mailto:hagermohamad1997@gmail.com\' >hagermohamad1997@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01205733311\' >01205733311</a></div>` + 
        `<div>Student , graduation year 2020</div>` +
        `<div>Trainin at pharmcy in El marg and Ain shams .
member in EPSF
Attended Aero Brain event at the Auc and finshied :professional selling skills 
How to be Marketer </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.552581, lng:31.009035},
        `<h4>Hasnaa fawzy mahgoub </h4>`  +
        `<div ><a href=\'mailto: noaa44@gmail .com \' > noaa44@gmail .com </a></div>` + 
        `<div ><a href=\'tel:01024351650 \' >01024351650 </a></div>` + 
        `<div>Bacalorios 3olom 2017</div>` +
        `<div>Worked in lab field 
Analysis 
Training in National research center 
Worked in hospital and know about it 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5567109, lng:31.6867987},
        `<h4>Nancy gamal</h4>`  +
        `<div ><a href=\'mailto:nancygamal222@yahoo.com\' >nancygamal222@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01270652798\' >01270652798</a></div>` + 
        `<div>Master of public law,assuit university</div>` +
        `<div>public relations in the company of water and sanitation in Sohag . from 2016 to 2017
•	work as a lawyer from 2017 to 2018
•	Accounting Officer at Spring Water Filters from 2018 to now
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.813567, lng:30.9173713},
        `<h4>Mohamed wagdy mohamed risha </h4>`  +
        `<div ><a href=\'mailto:Mohwagdy25@yahoo.com \' >Mohwagdy25@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01068985514\' >01068985514</a></div>` + 
        `<div>Bachelor of pharmacy 2017</div>` +
        `<div>Pharmacist at largest chains of pharmacies in cairo for 1 years
Manger of drug store in tanta for 6 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0192488, lng:31.6478488},
        `<h4>Ahmed Gameel Ahmed Ismail</h4>`  +
        `<div ><a href=\'mailto:Ahmed.gameel996@gmail.com\' >Ahmed.gameel996@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01018450945\' >01018450945</a></div>` + 
        `<div>I'm from Bani-obied (Dakahlia)</div>` +
        `<div>I'm Fresh graduate  from faculty of science , Chemistry department ,At Al-Azhar university.
Grade: Very Good (82.5%)
I have a Diploma in Analytical Biochemistry From Menoufia university
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2122927, lng:29.9670398},
        `<h4>Mohamed hamdy elnaggar</h4>`  +
        `<div ><a href=\'mailto:jokerian100@gmail.com\' >jokerian100@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01124544286\' >01124544286</a></div>` + 
        `<div>طالب سنة رابعة علوم طبية جامعة فااروس</div>` +
        `<div>انا اتدربت قبل كدا فى معمل ماسة فى سيدى بشر بالاسكندرية واخدت شهادات اتمام تدريب وعندى خبرة ف الشغل 
واتدربت قبل كدا ف معمل تكنولاب  </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.0180704, lng:32.8005662},
        `<h4>Shaimaa Saad Mahmoud Abdou</h4>`  +
        `<div ><a href=\'mailto:shemo96saad@gmail.com\' >shemo96saad@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01067405046\' >01067405046</a></div>` + 
        `<div>Graduate2019</div>` +
        `<div>Team member at Cancer Killers.
Pharmacology course.
Participate in scientific research pioneers.
Organizer at cancer conference in Luxor in cooperation with El_ormanhospital.
Attended many events in collage of pharmacy sohag university.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.3147008, lng:30.7130939},
        `<h4>Yaseen khamees</h4>`  +
        `<div ><a href=\'mailto:Yaseenkhamees10@gmail.com\' >Yaseenkhamees10@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123201608\' >01123201608</a></div>` + 
        `<div>Student at 4th y in faculty of pharmacy ... 2021</div>` +
        `<div>
Social skills
Confident
Work under stress
Rapid learning
Hard work
Work long times

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
        
addMarkerToGroup(group, {lat:31.1019824, lng:30.3170634},
        `<h4>Eslam Emad</h4>`  +
        `<div ><a href=\'mailto:ee6605760@gmail.com\' >ee6605760@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01204823373\' >01204823373</a></div>` + 
        `<div>Faculty of Science (2016) </div>` +
        `<div>From feb 2018 till Nov 2018 Medical rep at Sonesta pharma
From Nov 2018 till Now lab Chemist at Elsafwa lab in AboHomous
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1346737, lng:31.3361137},
        `<h4>Alaa Mohamed Taha Mangoud</h4>`  +
        `<div ><a href=\'mailto:Alaataha730@gmail.com\' >Alaataha730@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01067938633\' >01067938633</a></div>` + 
        `<div>Good , 2019</div>` +
        `<div>I am fresh graduated.
And trying to have many experience .
Also can work under stress.
And always coming in time .</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9651222, lng:31.237114},
        `<h4>Asmaa Mohamed </h4>`  +
        `<div ><a href=\'mailto:Asmaamoh96@gmail.com \' >Asmaamoh96@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01203605242\' >01203605242</a></div>` + 
        `<div>Faculty of veterinary medicine  G 2019</div>` +
        `<div>Medical representatives at orthomedics company 
Director at Mohamed Gaber pharmacy 
Fashionista and seller at clothes shop </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7795072, lng:30.9848083},
        `<h4>محمد جمال رمضام</h4>`  +
        `<div ><a href=\'mailto:mgr545454@gmail.com\' >mgr545454@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096399458\' >01096399458</a></div>` + 
        `<div>بكالوريوس صيدلة جامعة طنطا</div>` +
        `<div>صيدلي بصيدلبات دوائي 7/2018الى 10/2018
صيدلي بصيدليات سيف7/2016الى 10/2016</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5030214, lng:31.1567887},
        `<h4>ebrahim khaled fahmy</h4>`  +
        `<div ><a href=\'mailto:fahmyebrahim9@gmail.com\' >fahmyebrahim9@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01063819951\' >01063819951</a></div>` + 
        `<div> faculty of science/2019</div>` +
        `<div>Training at sigma company/and National centre of recherch/and cource of PcR/and cource of DNA extraction</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.2566589, lng:31.2847063},
        `<h4>Neama Mohamed Mohamed </h4>`  +
        `<div ><a href=\'mailto:esraa_ahmed123450@yahoo.com \' >esraa_ahmed123450@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01024471690\' >01024471690</a></div>` + 
        `<div>صيدله عين شمس ...2019 </div>` +
        `<div>Training in community pharmacy ..course in Noah's research center ...course in frist aids ..member in scop's</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0119734, lng:31.1710794},
        `<h4>Nagwa Khaled kamel</h4>`  +
        `<div ><a href=\'mailto:Nagwakhaled38@gmail.com\' >Nagwakhaled38@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٠٠٤٩٨٠٤١٦\' >٠١٠٠٤٩٨٠٤١٦</a></div>` + 
        `<div>صيدله القاهره دفعه ٢٠١٨</div>` +
        `<div>د. نجوي كامل 
صيدله القاهره ٢٠١٨
خبره في صيدليات شادي حاليا
لم توجد خبره سوي العمل بصيدليات شادي </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.2999906, lng:30.8332759},
        `<h4>Abdelrahman Omar</h4>`  +
        `<div ><a href=\'mailto:abdelrahmanomar2295@gmail.com\' >abdelrahmanomar2295@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01129658654\' >01129658654</a></div>` + 
        `<div>Bsc in science 2017 with excellent with honor</div>` +
        `<div>Medical representative at uni pharma
Quality control engineer at geo egypt for soil investigation and QC </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.2167134, lng:31.1896558},
        `<h4>Ahmed Elsaed Nagah </h4>`  +
        `<div ><a href=\'mailto:ahmeds.nagah@yahoo.com \' >ahmeds.nagah@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01090074926 \' >01090074926 </a></div>` + 
        `<div>Pharmacy 2019 </div>` +
        `<div>Former trainee at Fresenius Kabi (Jun-Aug 2018) 
          - Job description: full time am hospital visits, pm clinics visits
                                          Pharmacies coding for our distributor, hospital stock follow-up 
                                          Coordinate meetings with medical staff and product presentations
                                          Provide data bases of oncology and surgery specialities. 
The best achiever of Johnson & Johnson summer training (Aug 2018).
                                        - Health care products promotion and collect orders (Asyut, Minya).                                                                                                     
Former trainee at El-Ezaby pharmacies (Jul 2018).
Former trainee at Abdin Pharmacies (Jun 2018) 
                                             - organize Abdin pharmacies promotion events. 
The best trainee of Sanofi Aventis Future access program (Aug 2017)
                                        - Promotion for a new launched product.                                                                                
Former trainee at Zein El-abdin pharmacy (Aug 2017). 
Former trainee at Khalid Ibn Elwalid pharmacy (Jul 2017).
Former trainee at Asyut oil refining company's pharmacy (Aug 2016).
Former trainee at Dr.Mohammed Elsaed Nagah pharmacy (Jul 2016).</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.621242, lng:31.5820038},
        `<h4>Ahmed Helmy mohammed Abdel_wahab</h4>`  +
        `<div ><a href=\'mailto:Paramidoaz@yahoo.com\' >Paramidoaz@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01127752427\' >01127752427</a></div>` + 
        `<div>Medical biochemistry diploma2018.Fuclty of science.
Chemistry and zoology department2013
</div>` +
        `<div>Experience :
1-Np pharmaceutical. 
2-Landmark pharma. 
3-Chemist pharm. 
</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.0099055, lng:30.9256481},
        `<h4>فاتن عاطف محمد</h4>`  +
        `<div ><a href=\'mailto:Needyou102@yahoo.com\' >Needyou102@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01227640513\' >01227640513</a></div>` + 
        `<div>بكالريوس علوم ٢٠١٧ ودبلومه كيمياء حيويه ٢٠١٨</div>` +
        `<div>كورس انجليزي المستوي ٦  
العمل في معمل المستقبل 
العمل في معمل مركز رابعه العدويه 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1705286, lng:32.7296073},
        `<h4>Abdelrhman Mohamed attia</h4>`  +
        `<div ><a href=\'mailto:antaa42@gmail.com\' >antaa42@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01020022393\' >01020022393</a></div>` + 
        `<div>Veterinary medicine bachelor's 2019</div>` +
        `<div>Fresh graduated
From veterinary medicine faculty
South valley University</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1253496, lng:31.2645902},
        `<h4>Jihad esam</h4>`  +
        `<div ><a href=\'mailto:gehadesam612@yahoo.com\' >gehadesam612@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01151651584\' >01151651584</a></div>` + 
        `<div>علوم عين شمس بيولوجي ٢٠١٨</div>` +
        `<div>تدريب كأخصائية تحاليل في مستشفي ناصر
التدريب في مركز الحشرات الطبية
العمل كمساعد صيدلي ٥ سنين
Worked as a medical rep from march until now in pixil pharma

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\'mailto:hota_2026@yahoo.com\' >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01060129791\' >01060129791</a></div>` + 
        `<div>Bacalor ,2014</div>` +
        `<div> I have experience in all aspects of pharmacy more than 7 years ,l was worked at a company of drugs for part of time  ( pharma overseas)and l acquired experience in this field.</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Youssef Sabri Hasan</h4>`  +
        `<div ><a href=\'mailto:Gossef5000@gmail.com\' >Gossef5000@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115157344\' >01115157344</a></div>` + 
        `<div>2019 - Bachelor of Science</div>` +
        `<div>-Training at iron and steel company .
-Training at Metals Research and Development Center.
-Training at Nuclear and Radiological Supervisory Authority.
-Work at all Architectural Constructions works
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.2230782, lng:30.508757},
        `<h4>Saada zakzouk </h4>`  +
        `<div ><a href=\'mailto:Saadazakzouk7@gmail.com \' >Saadazakzouk7@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01287729400\' >01287729400</a></div>` + 
        `<div>Veterinary medicine 2015_2020</div>` +
        `<div>

Faculty 
faculty of Veterinary Medicine , Damanhur University 2015_2020

Personal Skills
Work under stress 	Flexible
Working on team  	Active 
Highly Organized	Ambitious
Quick learning 	

Language:
      -Arabic: Native
             -English: Good

Work Experience: 
1.	Worked at laboratory for two years 
2.	Training at animal health research center in damanhour

Certificates: 
 
1.	Participated in organizing the events of graduation ceremony paid in 2017 at the University
2.	Attended first scientific conference of IVSA Egypt
3.	O.c  member at future vets team of the Veterinarians Association in Al beheira
4.	Participated in organizing the first scientific conference of the Department of Animal Medicine, College 4-10-2016
5.	Participated in organizing the events of graduation ceremony paid in May2016 at the University
6.	Participated in organizing the events of the second scientific conference of the department of anatomy and embryology in April 2016
7.	Participated in organizing the events of the university's first training conference 8-11 February 2016
8.	Participate in awareness campaigns and early testing of  virus C in the Governorates of Al beheira 
9.	Participation in the organization of the events of the college graduates 
10.	Access to the first aids and relief from the Red Crescent Club in Al Beheira, 3-3-2015 
11.	Organize the conference of endemic diseases in Behira 
12.	Participate in the organization of the first student camp "our university with its youth "
13.	Participate in organization the first Japanese scientific forum in Egypt and damanhour university 




 
 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1569423, lng:32.7271043},
        `<h4>Lolla Albeir Ishak</h4>`  +
        `<div ><a href=\'mailto:lollaalbeir20@gmail.com\' >lollaalbeir20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01207958783\' >01207958783</a></div>` + 
        `<div>Still student</div>` +
        `<div>I have good  information about drugs , marketing and how to persuade the clients with the product. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1808698, lng:31.1779254},
        `<h4>Amira khaled Mahmoud</h4>`  +
        `<div ><a href=\'mailto:drmrmr5051@yahoo.com\' >drmrmr5051@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01095365002\' >01095365002</a></div>` + 
        `<div>Vet.Medicine .. 2014</div>` +
        `<div>1-Napco (4/2015)
2-therapy (1/2016)
2-pharco-b (4/2016 till 12/2017)
3-pharmacure ( now)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6279261, lng:31.3257566},
        `<h4>Abdallah Madboully Galal </h4>`  +
        `<div ><a href=\'mailto:abdallahmadboully1320@gmail.com\' >abdallahmadboully1320@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01141720115\' >01141720115</a></div>` + 
        `<div>Faculty of veterinary medicine Zagazig university of 2019 </div>` +
        `<div>Certification of sharing at the 3rd Employment forum that held at faculty of veterinary medicine of Zagagzig University at 1st April 2019 
    * Certification of attendance of Employability skills course that made possible by USAID, ASPIRE training solutions, American University in Cairo & Zagazig University from 17th to 21th  march 2019.
    * Certification of attendance of the Fifth national Scientific conference of Food Safety and Human Health that held at Damnhour University at 13th October 2018.
* Get the 1st prize & foundation for the best presentation & feasibility study for rabbit project from V-solution team under supervision of Vet. Medicine of Benha University.
   * Certification of attendance training course of Fundamentals of Pet Animals Care and Ultrasonography that organized at Sharkia veterinary Syndicate in collaboration with Faculty of vet. Medicine, Zagazig University from 12th to 15th August 2018.
    * Certification of attendance of training course of Management, disease & Ultrasonographic Uses in Dairy Cattle that organized at Sharkia veterinary Syndicate at 4th to 8th August 2018. 
     * Certification of attendance of training course of introduction in selling,    presentation& communication skills that held at Faculty of vet. Medicine,    Zagazig University at 15th to 17th July 2018
 * Certification of attendance of the first national scientific conference of international veterinary students' Association (IVSA)-Egypt in cairo University on 23th march 2017.
 * Certification of attendance training course about poultry (management of poultry farm, vaccination, drug interaction, diseases, treatment and post mortem examination of most common diseases) that held with vet united in  faculty of vet. Medicine, Benha University from 23th to 26th August 2016.
* Certification of attendance rabbit round (behavior, anatomy, physiology, pathology, marketing and business) that was organized by V-solution team under supervision of faculty of vet. Medicine of Benha University from 3rd July to 13th August 2016.
* Certification of attendance of preparatory course for medical laboratory from Zewail Academy under supervision of Al-Obour Hospital at Zagazig from 9th to 19th July 2016.
* Trained at vet. Clinic for 1 Year.
* Trained at Medical Lab. for 6 months.
* Intel learn program for technology at work and community (Microsoft office).
* Volunteer at RESALA charitable organization
.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1159189, lng:31.2570926},
        `<h4>David nabil</h4>`  +
        `<div ><a href=\'mailto:David.nabil550@gmail.com \' >David.nabil550@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01277535479 \' >01277535479 </a></div>` + 
        `<div>Bachelor Degree of science </div>` +
        `<div>1-Medical representative at pescado pharmaceutical since 1/2019 till now. area shoubra misr & shoubra el khema, line: IM, GIT, GP
2- medical representative at medi-pharm company since 9/2018 to 12/2018
Area :shoubra misr & shoubra el khema
Line: ortho, derma</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1013054, lng:31.3405367},
        `<h4>Madline khalil gendy</h4>`  +
        `<div ><a href=\'mailto:Khalilmadline13@gmail.com\' >Khalilmadline13@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01211039289 _01553273780_shoubra misr or new cairo area\' >01211039289 _01553273780_shoubra misr or new cairo area</a></div>` + 
        `<div>Pharmasist 2018</div>` +
        `<div>Worked in large pharmsies in newcairo
Online marketing courses 
Otc courses</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9780754, lng:31.4544264},
        `<h4>Laila Adel Ibrahim Mahmoud</h4>`  +
        `<div ><a href=\'mailto:Lailaadel631@gmail.com\' >Lailaadel631@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01008625289\' >01008625289</a></div>` + 
        `<div>Graduated From Delta University For Science And Technology ,Faculty Of Pharmacy 2019</div>` +
        `<div>6 Months in Pharmacy ,Course CBR ,Grade A+ in graduation Project (Antioxidant and Anti-inflammatory Effect of Rosella Extract on Excition Wound Model of Rat) And  Training in Delt Grand Pharma for Pharmaceutical Industries from 12 to 15-8-2018</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.838783, lng:30.8659089},
        `<h4>Esraa Abdo</h4>`  +
        `<div ><a href=\'mailto:Esraaabdo619@gmail.com\' >Esraaabdo619@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284123496\' >01284123496</a></div>` + 
        `<div>Veterinary medicine 2019</div>` +
        `<div>Trainer at a pharmacy
Trainer at a pet clinic
HR online course
English course</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7735765, lng:31.2634407},
        `<h4>Yasmin Elmogy</h4>`  +
        `<div ><a href=\'mailto:Ahmedelmogy052@gmail.com\' >Ahmedelmogy052@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01007141050\' >01007141050</a></div>` + 
        `<div>Frishly graduated student from faculty of vetrinary medicine zagazige university 2019</div>` +
        `<div>Very good medical back ground, speaking and writing english fluently,strong and fast ability to become learned and to apply general rules to specific problems to produce answers that make sense, Good communication skills, Ability to establish effective working relationships with people at all levels,well versed in computer pakages word and editing softwares.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1402376, lng:31.3543418},
        `<h4>اندرو مجدى مترى رملة </h4>`  +
        `<div ><a href=\'mailto:magdyandro874@gmail.com\' >magdyandro874@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022691233\' >01022691233</a></div>` + 
        `<div>بكالريوس نظم معلومات اداريه</div>` +
        `<div>عملت بشركة العربى فارما جروب لتجارة وتوزيع الادوية من مارس 2013 الى مارس 2016 
عملت بشركة فارما بروفت للادوية من مارس 2016 مايو 2017 
اعمل الان بشركة سوفيكو فارم للادوية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1538568, lng:30.8696488},
        `<h4> Ahmed Hassan Ibrahim Belal</h4>`  +
        `<div ><a href=\'mailto:abelal708@gmail.com\' >abelal708@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01091206249\' >01091206249</a></div>` + 
        `<div>Bachelor of Pharmaceutical Sciences ...Graduation year 2019</div>` +
        `<div>Comunity pharmacist from 2015
Trained as medical rep in EPICO
Member in EPSF
First Aid course</div>` 
        
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
        
addMarkerToGroup(group, {lat:27.9319168, lng:30.8207468},
        `<h4>Abanob Ashraf Saad</h4>`  +
        `<div ><a href=\'mailto:abanobashraf1@yahoo.com\' >abanobashraf1@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01211051772 \' >01211051772 </a></div>` + 
        `<div>Bachelor of Science Zoology Department in 2017</div>` +
        `<div>Biochemistry Diploma in 2018 Beni Swief Uniersity
miliatry service done
worked as medical analysis in Elmasry Laboratory for one year 9/2015 to 9/2016
Training in ESK-Pharma for pharmaceuticalsand Cosmoceuticals for in 10/2016
Training in company of Drinking water and Sanitation in 7/2016 to 8/2016
Using Microsoft Office Word Package
Good in speaking English</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.2189418, lng:33.8317163},
        `<h4>George Malky</h4>`  +
        `<div ><a href=\'mailto:George_malky2000@yahoo.com\' >George_malky2000@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:+201222310005\' >+201222310005</a></div>` + 
        `<div>Pharmacist from 2009</div>` +
        `<div>From 2009 till december 2017 in habib scientific office&from jan 2019 area manger in abdeen pharmacy till june 2019</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.8790542, lng:31.8845443},
        `<h4>Khaled Hazem Mohammed</h4>`  +
        `<div ><a href=\'mailto:Khaledhazem2026@gmail.com\' >Khaledhazem2026@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002422936\' >01002422936</a></div>` + 
        `<div>Bachelor of Veterinary Medical Sciences/2019</div>` +
        `<div>Vet medicine.                        
HACCP.                       
ISO 22000.                                  
Volley ball player.                         </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.881267, lng:31.2052174},
        `<h4>Asmaa Asr</h4>`  +
        `<div ><a href=\'mailto:asmaa.ibrahim.asr@gmail.com\' >asmaa.ibrahim.asr@gmail.com</a></div>` + 
        `<div ><a href=\'tel: , 01205419555 \' > , 01205419555 </a></div>` + 
        `<div>Pharmacist ..2019</div>` +
        `<div>Trainee at Mohamed Makled pharmacy
                   [one year]
Work activities 1-	Assist and instruct customers in the purchase of non-prescription medications and medical equipment when they are in need of help.
2-	Instruct pharmacy customers of the proper usage and dosage of medication as well as any precautions that should be taken or possible side effects.
3-	Ensure all supplies are stored and disposed of properly.
4-	Keep in contact with doctors and hospitals regarding patients when necessary 
 .

trainee at Delta Grand pharma                                                                                                                                                  
                          [ 4days]

Work activities
analysis of one product in the analytical laboratory
determine the percentage of sterilization by planting a swab on the agar


 	Soft skills
keen to learn, improve skills and learner.
having the ability to work within a team and enjoying a leading personality.
Excellent Communication skills & Organizational and Time Management.
Self-motivated, driven to learn quick and willing to “go the extra mile”
Able to take on responsibility, punctuality and time-keeping.
 
	Courses    -Industrial safety -Nutrition  -food analysis  -Pharmacoeconomics  -professional ethics -effective implantation of mobile bases program in pharmacy training 
-cv writing workshop - career orientation   
 	Computer Skills
Professional using Microsoft package (Windows & Office All Versions).

Language Skills
Arabic	Native
English	Very good (written & spoken)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3272208, lng:31.2531665},
        `<h4>Naglaa Ali Mahmoud Ibrahim</h4>`  +
        `<div ><a href=\'mailto:naglaaali951995@gmail.com\' >naglaaali951995@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096554011\' >01096554011</a></div>` + 
        `<div>B.Sc,special zoology department,faculty of science ,benha university</div>` +
        `<div>Fresh graduated.
I have no experience.
Traniee at national research center .
Have a many  student activity.</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mai hussein mohamed</h4>`  +
        `<div ><a href=\'mailto:Maihussein9541@gmail.com\' >Maihussein9541@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01110764843\' >01110764843</a></div>` + 
        `<div> Faculty of Veterinary medicine 2019</div>` +
        `<div>Traning in medical lap in assuit  /  english course/ training in medicine preparing company in assuit</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1947372, lng:29.9339587},
        `<h4>Ahmed Farag</h4>`  +
        `<div ><a href=\'mailto:ahmedmsoura52@yahoo.com\' >ahmedmsoura52@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01287971721\' >01287971721</a></div>` + 
        `<div>Medical student in the 6th year in Alex medical school</div>` +
        `<div>Medical student 
in the 6th year
 in Alex medical school
Trained well </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9640128, lng:30.9337077},
        `<h4> Mariam hassan</h4>`  +
        `<div ><a href=\'mailto:Mariamhassanh92@gmail.com\' >Mariamhassanh92@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099645249\' >01099645249</a></div>` + 
        `<div>طالبه بالسنه الرابعه كليه الصيدله جامعه مصر</div>` +
        `<div>ليس لدي خبرات ولكن احب مجال ال cosmatics من حيث تركباته ومجالات natural plants وتأثيراتها واحب مجال ال biotechnology واريد انا اعمل به </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0383587, lng:31.3623839},
        `<h4>Yassmen Mohammed Mohammed Kabadaya</h4>`  +
        `<div ><a href=\'mailto:Yassmenkabadaya@gmail.com\' >Yassmenkabadaya@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01275929825\' >01275929825</a></div>` + 
        `<div>Bachelor of veterinary medicine Mansoura university 2019</div>` +
        `<div>Fresh graduated
Training in vet clinic 2018
Human development courses2019
Attendance in foodex conference2019

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1869809, lng:31.1923046},
        `<h4>Sarah Yousef Basta </h4>`  +
        `<div ><a href=\'mailto:sarah.yousef234@gmail.com \' >sarah.yousef234@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01145784473\' >01145784473</a></div>` + 
        `<div>Factury of science </div>` +
        `<div>Fresh graduated of factury of science chemistry and Microbiology department looking for job medical rep for assuit area 
I'm training for Dr Dalia Elsa3ed pharmacy 
Training for Sofia Pharmacy 
Training for Somaia pharmacy 
Training for El sharq pharmacy 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5976081, lng:31.1568438},
        `<h4>Enas ahmed megahed </h4>`  +
        `<div ><a href=\'mailto:enasahmed1006@gmail.com\' >enasahmed1006@gmail.com</a></div>` + 
        `<div ><a href=\'tel: 01093992952\' > 01093992952</a></div>` + 
        `<div>Faculty of science , 2021</div>` +
        `<div>Medical sales , Medical rep 
Undergraduate , science 
Area minufyah 
Cosmatic campany </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.118804, lng:32.4621158},
        `<h4>zeinab Mohamed Mahmoud rashed</h4>`  +
        `<div ><a href=\'mailto:zozorashed580@Yahoo.com\' >zozorashed580@Yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01027112043\' >01027112043</a></div>` + 
        `<div>faculty of science 2015</div>` +
        `<div>أنا خريجة كلية علوم جامعة جنوب الوادى بكالوريوس فيزياء وإلكترونيات
ولدى خبرة سنتان في التحاليل الطبية
وكنت اعمل سابقا في مجال الأدوية
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5548423, lng:31.7192265},
        `<h4>Tarek Magdy Ahmed </h4>`  +
        `<div ><a href=\'mailto:Magdytarek1550@gmail.com\' >Magdytarek1550@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01119735663\' >01119735663</a></div>` + 
        `<div>Fresh graduate special chemistry, faculty of science </div>` +
        `<div>أرغب ف الحصول ع وظيفة مساعد صيدلي
انا خريج فريش علوم سوهاج قسم كيماء خاص 2019
إتدربت لمدة 3 شهور ف صيدلية د خالد وصيدلية د طارق 
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.2707664, lng:30.0022574},
        `<h4>Gina shawky kamel sidhom</h4>`  +
        `<div ><a href=\'mailto:Gina_shawky@yahoo.com
\' >Gina_shawky@yahoo.com
</a></div>` + 
        `<div ><a href=\'tel:01229513854\' >01229513854</a></div>` + 
        `<div>B.A (2006 -2010 )</div>` +
        `<div>Training :
In a laboratory 
In Misr petrol company
 
 Worked at :
Medical representative at Sigma pharm Co.
                                                     From (7/2010) to (8/2011) .
Medical representative at Zeta pharm Co.
                                         From (1/2012) to (5/2013) .
Medical representative and manager for two branches at Hassab Labs .
                                         From (6/2013) to (1/2018 ) .
Senior corporate sales at Hassab Labs .
                                         From ( 1/1/2018 )  Until now .
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.9116372, lng:31.4315447},
        `<h4>Alaa Abd El-Wahab</h4>`  +
        `<div ><a href=\'mailto:alaaabdelwahab96.aa@gmail.com\' >alaaabdelwahab96.aa@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01095949069\' >01095949069</a></div>` + 
        `<div>Graduated from faculty of pharmacy Assuit university class 2019</div>` +
        `<div>Trainee at Abdien pharmacies 
Trainee at Dr.Mahmoud Elbardasy pharmacy</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.7328054, lng:30.837153},
        `<h4>ramy eid fadl</h4>`  +
        `<div ><a href=\'mailto:Ramy_noody@yahoo.com\' >Ramy_noody@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01004234137\' >01004234137</a></div>` + 
        `<div>BSC in biology science,minya university,2009</div>` +
        `<div>GNPI pharma from 2011 till 2014 (embaba & dokki)
MASH PREMIER from 2015 till 2016 (embaba & dokki)                                                      Beauty&beyond pharma from 2016 till 1/2/2017
INFINITY Pharma from 1/2/2017 till 1/6/2017
PHARCO from 1/6/2017 till now (minia & Qena)</div>` 
        
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
        
addMarkerToGroup(group, {lat:25.9173761, lng:32.7497513},
        `<h4>Bassem fathy hemdan </h4>`  +
        `<div ><a href=\'mailto:Bassemfathy203@gmail.com\' >Bassemfathy203@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01154833981\' >01154833981</a></div>` + 
        `<div>فني صحي ٢٠١٥</div>` +
        `<div>فنى معمل خبرة ٨ سنين فمجال التحاليل الطبية عملت فالمستشفيات الاتية (قنا العام + الحميات + بنك الدم الاقليمي + مستشفي قوص)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Emad Ramadan Hamed</h4>`  +
        `<div ><a href=\'mailto:emadramadan754@gmail.com\' >emadramadan754@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01550739584\' >01550739584</a></div>` + 
        `<div>Fuclty of pharmacy /Al Azhar universty /Assuit/2019/very good</div>` +
        `<div>العمل بصيدليه د حازم احمد من 6/2015 الى9/2017
العمل كميديكال ريب بشركة الحمد للمستلزمات الطبيه ومستحضرات التجميل من 1/2018الى2/2019</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7161334, lng:31.2363833},
        `<h4>Ali fathy ali gaballah</h4>`  +
        `<div ><a href=\'mailto:Alifathy21@yahoo.com\' >Alifathy21@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01013957311\' >01013957311</a></div>` + 
        `<div>بكاليوريس علوم ٢٠١٨</div>` +
        `<div>متدرب في مستشفي 
جيد في للغه الانجليزيه 
يجيد التعامل مع الاخرين 
تقدير جيد جدا 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.737096, lng:30.8003515},
        `<h4>Marwa reda mohammed</h4>`  +
        `<div ><a href=\'mailto:marwareda16112018@gmail.com\' >marwareda16112018@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01148171604\' >01148171604</a></div>` + 
        `<div>bachelorsof science .chemistry.2019</div>` +
        `<div>مندوب مبيعات بشركةأدوية فى نطاق شمال المنيا او بنى سويف. اتقن اللغة الإنجليزية احب السفر والتعامل مع أشخاص جديدة واكتساب مهارات اتمكن من العمل لفترات طويلة تدربت فى المركز القومى للبحوث ومستشفى مغاغه العام ومستشفى العدوة</div>` 
        
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
Training at CMRDI (Central Metallurgical Research Institute) for one week
Training at NRRA (Nuclear and Radiological Regulatory Authority) for five week
Training at CID Pharm Company for six week
Training at HBRC (Housing and Building National Research Center) for six week</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.6768297, lng:31.4911453},
        `<h4>Marihan fathy</h4>`  +
        `<div ><a href=\'mailto:fathymarihan@gmail.com\' >fathymarihan@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01279889348\' >01279889348</a></div>` + 
        `<div> Fresh graduated 2019  veterinary medicine </div>` +
        `<div>Fast understanding of customers and needs
Ability to work  on group
Excellent user of Microsoft </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.552581, lng:31.009035},
        `<h4>Norhan Swelam Mohamed Abdelhameed</h4>`  +
        `<div ><a href=\'mailto:nourswelam22@gmail.com\' >nourswelam22@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01281345882\' >01281345882</a></div>` + 
        `<div>Bachelor of Science Department of Chemistry&Microbiology University of Menoufia</div>` +
        `<div>(  Chemist & Microbiologist ) 
Study Microbiology four years and treat with food and water microorganisms and Study how to use microorganisms in useful applications such as medecin and food</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.4153901, lng:31.827439},
        `<h4>Mohammed ashraf</h4>`  +
        `<div ><a href=\'mailto:m.ashrafor@gmail.com\' >m.ashrafor@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01021218285\' >01021218285</a></div>` + 
        `<div>Pharmacy graduated, 2 / 2019 , MSA university</div>` +
        `<div>Trained in Tabarak pharmacy in Damietta as a pharmacist  and as a medical rep when i was a student in astrazeneca</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.2503656, lng:33.8027067},
        `<h4>Mohamed Elshahat Mohamed </h4>`  +
        `<div ><a href=\'mailto:melshahat499@gmail.com \' >melshahat499@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01013180164\' >01013180164</a></div>` + 
        `<div>faculty of science  2019</div>` +
        `<div>-training in hurghada public hospital 
-experience for 3 years in medical analysis 
-English language is very good 
-computer is very good 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1113334, lng:31.3200278},
        `<h4>Dr Moataz</h4>`  +
        `<div ><a href=\'mailto:moamoa729@gmail.com\' >moamoa729@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094923468\' >01094923468</a></div>` + 
        `<div>صيدله 2019</div>` +
        `<div>Community pharmacies. Quality assurance department in pharmacy school. Formal representative for co-workers. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5591058, lng:31.6903235},
        `<h4>Michael gad ata </h4>`  +
        `<div ><a href=\'mailto:Michaelgad2013@gmail.com\' >Michaelgad2013@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01155309757\' >01155309757</a></div>` + 
        `<div>Bacelory of sciense ,sohag university 2017</div>` +
        `<div>خبرة ما يقرب سنه ونص في  وظيفة ال medical rep  في شركات elrazy pharma .unitrade pharma .credo pharma</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1523802, lng:30.1215248},
        `<h4>Abdelrahman Usama</h4>`  +
        `<div ><a href=\'mailto:abdoelbaya3@gmail.com\' >abdoelbaya3@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01127847254\' >01127847254</a></div>` + 
        `<div>2019 1st level degree ( bachelor)</div>` +
        `<div>Fresh graduate from faculty of pharmacy damnhour university 
Trainee at fayoumi pharmacy 
Trainee at elkharashy pharmacy 
Can speak fluent english </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.032821, lng:30.42527},
        `<h4>Menna Allah Ahmed Abdella </h4>`  +
        `<div ><a href=\'mailto:Mennaahmed043@gmail.com \' >Mennaahmed043@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01023065070 \' >01023065070 </a></div>` + 
        `<div>Graduated from faculty of science in Damanhour university 2019</div>` +
        `<div>Trained medical Rep for two months at Marvel Pharmaceuticals company

Trained in SRTA_city for four weeks

Training in Elrahma matared pharmacy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.6457883, lng:30.8539164},
        `<h4>shereen kasem</h4>`  +
        `<div ><a href=\'mailto:shereenkasem50@gmail.com\' >shereenkasem50@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01010506982\' >01010506982</a></div>` + 
        `<div>بكالريوس علوم (كمياء حيويه) 2016</div>` +
        `<div>العمل لدي شركه فارما كيور لمده 3 سنوات متواصل حتي 2019.
العمل لدي الديبكي فارما 4 شهور.
تدريب فشركه المياه والصرف الصحي بالمنيا
العمل في صيدليه الاشراف.

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8116132, lng:31.0041469},
        `<h4>Ahmed Ragb Ahmed Elsayed </h4>`  +
        `<div ><a href=\'mailto:ragba8880@gmail.com\' >ragba8880@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094494346\' >01094494346</a></div>` + 
        `<div>Bacalorious of science </div>` +
        `<div>training in cairo oil refining company from{ Jul 2017 – Aug 2017 }. 
training in Basion modern laboratory for medical analysis. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.297775, lng:32.5484167},
        `<h4>Mohamed Abd_Elsattar Abd_Elhamid</h4>`  +
        `<div ><a href=\'mailto:Mohamedafa99@gmail.com\' >Mohamedafa99@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01154077106\' >01154077106</a></div>` + 
        `<div>2019 Bachalor pharmacy _ Assuit university</div>` +
        `<div>Very good user windows, word, powerpoint,  Excel
Training at pharmacy series
Training in seed factory for pharmaceutical
Having first aid course
Active member in EPSF Assuit team 
Active member in Ehyaa team 
Good skils with other people
</div>` 
        
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
        
addMarkerToGroup(group, {lat:25.695858, lng:32.643592},
        `<h4>Shereen Abdel Sattar Wahhab</h4>`  +
        `<div ><a href=\'mailto:swahhab6363@gmail.com \' >swahhab6363@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01016875396\' >01016875396</a></div>` + 
        `<div>Faculty of Science - 2018 </div>` +
        `<div>Work at APIC for 9 months. 
I have been working in the following specialties: internal medicine, Dermatology & Ophthalmology. 
Salary 4000 LE </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.215645, lng:29.955266},
        `<h4>Pavlyzarif</h4>`  +
        `<div ><a href=\'mailto:Pavlyzarif@yahoo.com \' >Pavlyzarif@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01211893903\' >01211893903</a></div>` + 
        `<div>Faculty of science Alexandria university </div>` +
        `<div>Personal Data

Birth date: 6/6/1996
Military Status: postpone
Nationality: Egyptian
Marital status: single

Contact 

Address: EL ZAMAKSHRY ST. GE LIM
Telephone: 01211893903
Email: Pavlyzarif@yahoo.com

Work experience: 

1/ Worked at Rotabiogen Pharmaceutione cal Company as Product Specialist in east 1,2,3l
(Experience in orthopedic, GP, gynecologic, neurologic, dentist doctors) o
2/ Head of P&M team for tourism
3/ Worked. At el Basma pharmacy
4/ tour guide AT Media Palace Company for Tourism
5/ Volunteer at Scientific Professions Association
6/ Human resource at SPARA 17 PROJECT
7/ Member at Student Union at Faculty of Science Alexandria University
8/ SOCIAL MEDIA MARKETER AT NEW BLUE BIRD FOR TOURISM

Training and courses: 

1/ Osha safety general and construction international
2/ Trainee at Bechtel and British petroleum and Petro jet in safety 
3/ Diploma in petroleum and petrochemical
4/ Gas turbines course 
5/ Natural gas refining course 
6/ Water treatment course 
7/ Trainee at European Egyptian Pharmaceutical Industries
8_ Trainee at pharco Pharmaceutical Industries

Education: 

Graduated from faculty of science Alexandria university 
(Bachelor degree)
CGPA: 2.7 
Major: Chemistry    Minor: Oceanography 
Graduation Project at MIDOR Company 
Graduation project Grade : Excellent 
Graduating Year : 2018 


Skills:

Microsoft Windows and Office product
Social media marketing (Facebook & linked in & YouTube).
Video editor on (Sony Vegas & after effect) programs.
Perfect tour guide worked at different tourism company.
HYSYS (Process Engineering Simulation Program).
Detail-oriented
Strong Visualization
Good Eye for Detail
Competitive Spirit
hard worker and ambitious.
Negotiation skills
Fast learner and sociable.
team worker.
self-motivated and adaptable.
Time management and good at administration
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.565341, lng:31.6869446},
        `<h4>Breksam alksan fathy </h4>`  +
        `<div ><a href=\'mailto:rookaalexan@gmail.com\' >rookaalexan@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٢٠١٠٦٨٤٣\' >٠١٢٢٠١٠٦٨٤٣</a></div>` + 
        `<div>كلية صيدلة ٢٠١٨</div>` +
        `<div>خريجة فريش 
تدريب في صيدليات الفؤاد 
تدريب في صيدليات العزبي
عمل لمدة ٣ اشهر في صيدلية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9827429, lng:31.2496267},
        `<h4>bassem hussein</h4>`  +
        `<div ><a href=\'mailto:basemmohamed1987@gmail.com\' >basemmohamed1987@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01004062988\' >01004062988</a></div>` + 
        `<div>Bachelor of science at Cairo university 2010</div>` +
        `<div>·	Direct and oversee an organization's sales policies, strategy, objectives and initiatives.  

·	Implement sales programs by developing field sales action plans.

·	· Responsible to manage and oversee the performance of six medical representative located in different territories

·	Manage, develop, coach, control and motivate the sales force to develop their skill to ensure that a high professional standard is achieved and monthly sales target and KPI target are met.

·	Assess the strengths and weaknesses of the sales team and manage the sales program accordingly.

·	Provide on-the-ground support for sales teams.

·	Meet with Client to discuss their evolving needs and to assess the quality of our company’s relationship with them.

·	Covered A lot of areas and KOL Orthopaedic , surgery , ph. Th. &AMP; neuro surgery  at (Giza ,Faysal ,Haram ,October ,Downtown ,Maadi)

·	covered mostly chain pharmacies</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1193393, lng:31.3146963},
        `<h4>Hoda Mahmoud Kandel Hegazy </h4>`  +
        `<div ><a href=\'mailto:hhegazy629@gmail.com\' >hhegazy629@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01117281462 \' >01117281462 </a></div>` + 
        `<div>faculty of science Cairo University 2019</div>` +
        `<div>Arab Drug Company
Memphis company
CID company
Cairo drug companies
and training in them in quantity control and production </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Amin waheed amin</h4>`  +
        `<div ><a href=\'mailto:Aminwaheed18@gmail.com\' >Aminwaheed18@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01552576776\' >01552576776</a></div>` + 
        `<div>BSc of science</div>` +
        `<div>District manager cairo
Worked as medical representative at danone from 2007 till 2012
Worked as district manager at launch company from 2012 till 2017</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0770732, lng:31.205933},
        `<h4>Ahmed Hissen</h4>`  +
        `<div ><a href=\'mailto:ahissen489@gmail.com\' >ahissen489@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01120153511\' >01120153511</a></div>` + 
        `<div>بكالوريوس زراعه عين شمس2018_2019</div>` +
        `<div>العمل كمساعد صيدلى
العمل فى شركات مكافحه
اللغه جيد 
العمل فى مخازن ادويه
وبعض الأعمال الحره
والتسويق</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7495131, lng:31.0219684},
        `<h4>Abdelhamed mohamed abozaid</h4>`  +
        `<div ><a href=\'mailto:abdelhamed_m17@yahoo.com\' >abdelhamed_m17@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01008445439\' >01008445439</a></div>` + 
        `<div>Bachelor of pharmacy 2016</div>` +
        `<div>*salaheddin pharmacy
*elshabasy pharmacy
*elbarbary pharmacy
*hoda abo hussien pharmacy</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.9903953, lng:31.1702255},
        `<h4>nader fathy</h4>`  +
        `<div ><a href=\'mailto:naderfathy15555@gmaul.com\' >naderfathy15555@gmaul.com</a></div>` + 
        `<div ><a href=\'tel:01221898839-01148624332\' >01221898839-01148624332</a></div>` + 
        `<div>Fresh graduated from science mansoura university</div>` +
        `<div>Skills:working with people
Highly organized
Ambitious
Achieving results and flexible 
Word and powepoint
Language : arabic- english (very good)
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4422903, lng:30.9666586},
        `<h4>Hager saeed wheeb </h4>`  +
        `<div ><a href=\'mailto:hagerwheeb198 \' >hagerwheeb198 </a></div>` + 
        `<div ><a href=\'tel:01095124976\' >01095124976</a></div>` + 
        `<div>بكالوريوس علوم مايو ٢٠١٩</div>` +
        `<div>
خريج كليه علوم ٢٠١٩ ،حاصله علي تدريب في شركه بترول طنطا ،مركز البحوث بالدقي ،وشركه المياه والصرف الصحي بمنوف </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.4425255, lng:30.8206574},
        `<h4>Marwa mostafa sayed</h4>`  +
        `<div ><a href=\'mailto:mrwamoustapha333@gmail.com\' >mrwamoustapha333@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01010272279\' >01010272279</a></div>` + 
        `<div>Graduated from faculty of pharmacy assiut university 2013_2018 my grade is good </div>` +
        `<div>_EDUCATION
.communication skill course from faculty of pharmacy
.otc course 
.continuce pharmacutical education from faculty of pharmacy 
_Additional skills 
.team worker
.fast leaner
.crisis solving 
_CANDIDATE IN PHATMACEUTICAL SYNDICATE ELECTIONS 
_live in assiut ..qusiya city</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4254957, lng:31.3576517},
        `<h4>عمر محروس محمد حسن علي </h4>`  +
        `<div ><a href=\'mailto:a.elnagar3094@su.edu.eg\' >a.elnagar3094@su.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01093098461\' >01093098461</a></div>` + 
        `<div>طالب بكليه الصيدله الفرقه ٣</div>` +
        `<div>انا طالب بكليه الصيدله..... ليفل ٣.......بتدرب في صيدليه منذ سنتين... وانا الان لدي من القدره والخبره للقيام بشيفت في صيدليه...... أنا من الشرقيه مركز منيا القمح </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1033228, lng:30.3136192},
        `<h4>Dalia elsayed mohamed abd elmoety</h4>`  +
        `<div ><a href=\'mailto:daliaelaraby205@gmail.com\' >daliaelaraby205@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01021380989\' >01021380989</a></div>` + 
        `<div>Faculty of science ,, chemistry and microbiology department ,, class 2017</div>` +
        `<div>Trained in drinking water and sanitation company.
Worked at pharmacy for 6 months .
Worked at western pharma as medical rep  for 1 year</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.215645, lng:29.955266},
        `<h4>Bedoor farid elkarashy </h4>`  +
        `<div ><a href=\'mailto:Bedoor .farid @yahoo.com\' >Bedoor .farid @yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01116015259\' >01116015259</a></div>` + 
        `<div> Pharmacist</div>` +
        `<div> Training and working in pharmacy 
Training in drug information center 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.3266118, lng:30.9124129},
        `<h4>Christina Romany Nazer</h4>`  +
        `<div ><a href=\'mailto:christinaromany5@gmail.com\' >christinaromany5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01120466402\' >01120466402</a></div>` + 
        `<div>Graduated from the Faculty of Pharmacy, Assiut University, 2019</div>` +
        `<div>Participated in chess tournament at the level of faculties of the university from 2016 until 2019
 
I trained at Dina Pharmacy in Manfalout from San Tania Pharmacy

Participated in the 4th University Youth City February 2016

Participated in the 11th University Youth Week, September 2017

Medical convoys were followed by the family of Anba Abram the physician and the family of the saint Verena the good</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.556952, lng:31.694785},
        `<h4>Asmaa alshinawy ali yassen</h4>`  +
        `<div ><a href=\'mailto:asmaaalshinawy021@gmail.com\' >asmaaalshinawy021@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01033341974\' >01033341974</a></div>` + 
        `<div>Faculity of science assuit university 2016</div>` +
        `<div>Worked in nova pharm until now
IT cours
Traning in mabra hospital labratory
Water analysis cours</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5981596, lng:32.2582663},
        `<h4>Abdallah mohamed</h4>`  +
        `<div ><a href=\'mailto:Abdallah.m.mohamed2@gmail.com\' >Abdallah.m.mohamed2@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01069938095\' >01069938095</a></div>` + 
        `<div>Faculty of science chemistry department since 2018</div>` +
        `<div>1- pharmacist assistant for 2 years 
2- 6 months as medical representative </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>كريم محمد علي </h4>`  +
        `<div ><a href=\'mailto:ka454106@gmail.com \' >ka454106@gmail.com </a></div>` + 
        `<div ><a href=\'tel:٠١١٥٧٦٦٧٥٦٥\' >٠١١٥٧٦٦٧٥٦٥</a></div>` + 
        `<div>طالب  حسبات ونظم ومعلومات </div>` +
        `<div>انا بستغل مساعد صيدلي
خبره ٧سنوات  


شغل في صيدليه رانيه في الرحاب   سنه 
والباقي في الارياف شفت لوحدي 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Ahmed Ibrahim Mohamed</h4>`  +
        `<div ><a href=\'mailto:ahmedhassanin28@gmail.com\' >ahmedhassanin28@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01142288265\' >01142288265</a></div>` + 
        `<div>بكالوريوس صيدلة 2005</div>` +
        `<div>من 2017 الى 2019 في صيدليتي الخاصه 
من ديسمبر2007 الى يونيو 2017 
كصيدلي في سلسلة زهرة الروضة في السعودية الرياض
من يناير 2007 الى ديسمبر 2007 في SANOFI AVENTIS 
AS PATIENT EDUCATOR
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.9525805, lng:30.8238718},
        `<h4>Samer samir azer</h4>`  +
        `<div ><a href=\'mailto:Dr.samer223@gmail.com\' >Dr.samer223@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٨١٤٠٣٩٢٦\' >٠١٢٨١٤٠٣٩٢٦</a></div>` + 
        `<div>Graduated Faculty of science2019</div>` +
        `<div>حاصل ع كورس pcr  
حاصل ع تدريب ف شركه ادويه
حاصل ع تدريب ف مستشفي للتحاليل
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.2214863, lng:29.9315899},
        `<h4>Mina Onsy</h4>`  +
        `<div ><a href=\'mailto:minaonsy20@gmail.com\' >minaonsy20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284989571\' >01284989571</a></div>` + 
        `<div>Pharmacy - 2019</div>` +
        `<div>Pharmacy Graduate 2019
Seeking a medical rep. Vacant in Alex Center
Already have an experience in this field </div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.3018027, lng:30.7116529},
        `<h4>Ebtehal Ashraf</h4>`  +
        `<div ><a href=\'mailto:ebtehalashraf6667@gmail.com\' >ebtehalashraf6667@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01019303343\' >01019303343</a></div>` + 
        `<div>Faculty of Veterinary Medicine 2019</div>` +
        `<div>Freshly graduated
Vet Medicine Minia university
Medical rip 
Training in college 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0317402, lng:31.1787343},
        `<h4>Eman mamdouh elmadawy </h4>`  +
        `<div ><a href=\'mailto:emanelmadawy297@gmail.com \' >emanelmadawy297@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01006357253 \' >01006357253 </a></div>` + 
        `<div>Graduate chemistry and zoology department Faculty of Science.(2015-2019)</div>` +
        `<div>
Summer Training
National Research center until 2018
Medical laboratory until 2017

Skills
Computer Skills:
Very Good in using computer(Windows).
Operating programs (Microsoft office).
Language Skills:
Arabic mother language
English good in speaking and   writing </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5671652, lng:31.6922217},
        `<h4>Nada Mostafa Khalifa</h4>`  +
        `<div ><a href=\'mailto:nadoooo5113@gmail.com\' >nadoooo5113@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01117918357\' >01117918357</a></div>` + 
        `<div>Faculty of veterinary medicine / Sohag University /2018</div>` +
        `<div>Working at Pharaoh Pharmaceutical company for 7 months
From 21/11/2018</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.1450014, lng:31.1431477},
        `<h4>Shaimaa mousa mahfouz </h4>`  +
        `<div ><a href=\'mailto:shaimaamosamahfouz@yahoo.com\' >shaimaamosamahfouz@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01099044517\' >01099044517</a></div>` + 
        `<div>Bachlore of pharmaceutical science 2010</div>` +
        `<div>1_6years experience in private pharmacies 

2_medical rep in Al rowad pharmaceutical company for 1year from 8-2017 till 8-2018
With  specialites :
IM,GYNA,URO,SUR

3_med.rep in mash premiere company for 7 mounths from 8-2018 till 2-2019 responsible from bani suif & fayoum area 
with Specialties :cardio ,im

4_med.rep in AL andalous company from 2_2019  till now </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5564948, lng:31.6871714},
        `<h4>mohammed Ahmed </h4>`  +
        `<div ><a href=\'mailto:Dr.Mohamed_Zaed@hotmail.com\' >Dr.Mohamed_Zaed@hotmail.com</a></div>` + 
        `<div ><a href=\'tel:01200676806\' >01200676806</a></div>` + 
        `<div>Faculty of science </div>` +
        `<div>My name is Mohamed Ahmed. From sohag. Graduated from Faculty of science in 2016 by grade good. 
Looking for Medical representative
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
        
addMarkerToGroup(group, {lat:30.104792, lng:31.2842051},
        `<h4>Hadeer Ibrahem Mohamed</h4>`  +
        `<div ><a href=\'mailto:Hadeeribrahem.52@gmail \' >Hadeeribrahem.52@gmail </a></div>` + 
        `<div ><a href=\'tel:01112624886\' >01112624886</a></div>` + 
        `<div>Bacaloria's degree  , Biotechnology program , faculty of Agriculture , Ain Shams university ( 2019 )</div>` +
        `<div>● Trainee at molecular lab at ACGEB 
●trainee at theodor bilhariz research instiute</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8792335, lng:31.3118368},
        `<h4>Doaa Soliman mahmoud </h4>`  +
        `<div ><a href=\'mailto:Doaasoliman727@gmail.com \' >Doaasoliman727@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01155585416 \' >01155585416 </a></div>` + 
        `<div>Baclory of sience 2011</div>` +
        `<div>As M. R  at Borg company for 1 year
Cobad company for 6months
Biopharm company for 2 year
Cairolab as Specialest medical laboratory tests for 4years
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0824803, lng:31.2344465},
        `<h4>Mostafa Ibrahim</h4>`  +
        `<div ><a href=\'mailto:tofa282@gmail.com\' >tofa282@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01152086587\' >01152086587</a></div>` + 
        `<div>بكالوريوس زراعه </div>` +
        `<div>مساعد صيدلي لمده خمس سنين 
كول سنتر فودافون سنه
كورسات تحليل 
و شتغلت فى الدعايه و الاعلان 
</div>` 
        
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
        
addMarkerToGroup(group, {lat:28.9683812, lng:30.9302843},
        `<h4>shahd bahgt ahmed </h4>`  +
        `<div ><a href=\'mailto:shahd_bahgt@yahoo.com\' >shahd_bahgt@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01124629160\' >01124629160</a></div>` + 
        `<div>كلية العلوم 2016 </div>` +
        `<div>كيميائي او مدرس كيميا او ميديكال ريب او اي مراقب جودة درست ف كلية العلوم ومعي دبلومة كيميا حيوية وتدربت ف معهد بحوث البترول ف مدينة نصروشركة المياة والصرف الصحي ببني سويف وحصلت ع المركز الأول ف مشروع التخرج  ومعامل تحاليل واود العمل ف مصنع او معمل </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.552581, lng:31.009035},
        `<h4>Mahmoud Diab</h4>`  +
        `<div ><a href=\'mailto:diab1794@yahoo.com\' >diab1794@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01004958363\' >01004958363</a></div>` + 
        `<div>Faculty of pharmacy future university in Egypt 2017 </div>` +
        `<div>مندوب دعايه طبيه medical representative 
Have experience 1year and half need full time job </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1053308, lng:31.6910515},
        `<h4>Mahmoud Mohamed Ezzeldein</h4>`  +
        `<div ><a href=\'mailto:ezzm2498@gmail.com\' >ezzm2498@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092323669\' >01092323669</a></div>` + 
        `<div>Bachelor of pharmacy , mansoura university 2018 </div>` +
        `<div>1/medical representative at amoun pharmaceuticals.
2/pharmacist at Elsalam community pharmacy 
3/Trainer at demo pharmacy , mansoura university 
4/ coordinator of scientific research program at EPSF 
5/ coordinator of data gathering at public health committee EPSF 
6/ studying diploma in toxicology and forensic at faculty of pharmacy , mansoura university</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.173327, lng:32.7247531},
        `<h4>Mena Shawky Azer</h4>`  +
        `<div ><a href=\'mailto:menashawky0@gmail.com\' >menashawky0@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01272636247\' >01272636247</a></div>` + 
        `<div>Faculty of Science 2019</div>` +
        `<div>Training at Qena hospital.
Al Nour lab for blood analysis.
Al Haya Lab
El Khodery lab</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0081701, lng:31.4776944},
        `<h4>nourhan hamido</h4>`  +
        `<div ><a href=\'mailto:nourhanhamido20@gmail.com\' >nourhanhamido20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014805929\' >01014805929</a></div>` + 
        `<div>Bachelor degree of pahramcy (GUC) 2019</div>` +
        `<div>Internship at :
Amoun 2017/8
Jedco 2018/9
El yoser pharmacy for month 2018/8
Clinical pharmacy course at zeweal university
2019/7
57357 hospital 2017 /7 </div>` 
        
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
        
addMarkerToGroup(group, {lat:26.5640396, lng:31.714882},
        `<h4>Mark Fared Fadel Atteia</h4>`  +
        `<div ><a href=\'mailto:Markfared125@gmail.com\' >Markfared125@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01227875732\' >01227875732</a></div>` + 
        `<div>بكالريوس علوم سوهاج ٢٠١٨</div>` +
        `<div>١-تدريب بصيدليه لمده ١٥يوم 
٢-تدريب بمعمل للتخاليل للطبيه ثم العمل بالمعمل لمده سنه ٣-تدريب بشرمه المياه </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.4459667, lng:31.1718457},
        `<h4>Mohamed Mohamed Rabea</h4>`  +
        `<div ><a href=\'mailto:muhamadrabea@gmail.com\' >muhamadrabea@gmail.com</a></div>` + 
        `<div ><a href=\'tel:+201017174960\' >+201017174960</a></div>` + 
        `<div>Bachelor of Science Class of 2015</div>` +
        `<div>Assistant Pharmacist at Dr. Hany Kandil pharmacy (2014)
Lab Engineer at CEL (2017-2018)
Lab Engineer at Sama Misr international (2018-2019)
QC Lab supervisor at Filomix Ready Mix Concrete Al-Mostakbal Batch Plant (April 2019 - Now)
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
        
addMarkerToGroup(group, {lat:26.5367777, lng:31.7070601},
        `<h4>Ahmed Medhat Mohammad </h4>`  +
        `<div ><a href=\'mailto:amedhat2400@gmail.com \' >amedhat2400@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01093480760\' >01093480760</a></div>` + 
        `<div>Bachelor of pharmacy  ,2018</div>` +
        `<div>Pharmacist at Elsalama pharmacy from 09/2018-present(shift manager, and responsible for Purchasing)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.180956, lng:31.183683},
        `<h4>Christina Badry Adly</h4>`  +
        `<div ><a href=\'mailto:christina.badry@yahoo.com\' >christina.badry@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01285503430\' >01285503430</a></div>` + 
        `<div>Vet medicine ..2018</div>` +
        `<div>Worked 3 months at future line Amoun 
Area...Assuit center & south
Training in Egypt air (quality control)
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mohamed Gamal</h4>`  +
        `<div ><a href=\'mailto:gamal494@gmail.com\' >gamal494@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01014276364\' >01014276364</a></div>` + 
        `<div>Bio chemistry 2008</div>` +
        `<div> Sales representative in memsa lab
Medical rep in atos pharm
Product specialist  crespin gel injection elafco pharm
Product manager for intraarticular injection promedical pharm </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1591409, lng:32.7309789},
        `<h4>Shymaa essam eldin mansour</h4>`  +
        `<div ><a href=\'mailto:Shymaaessam@facebook .com\' >Shymaaessam@facebook .com</a></div>` + 
        `<div ><a href=\'tel:01007760369\' >01007760369</a></div>` + 
        `<div>Bachlor of science 2014</div>` +
        `<div>Al delta pharmaceutical company
Al andalous pharmaceutical company
Rotabiogen pharmaceutical company</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1456834, lng:31.3251504},
        `<h4>Abanob Shafeek</h4>`  +
        `<div ><a href=\'mailto:abanobshafeek5@gmail.com\' >abanobshafeek5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284888914\' >01284888914</a></div>` + 
        `<div>Faculty of pharmacy.. 2018 </div>` +
        `<div>Working 4 years at a pharmacy from 2014
Working at chemipharmain
Line GIT
Area:Ain shams 2 </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.9510244, lng:35.9082272},
        `<h4>Muna Ahmad  Mubark  weshah</h4>`  +
        `<div ><a href=\'mailto:Manooshana2014@gmail.com \' >Manooshana2014@gmail.com </a></div>` + 
        `<div ><a href=\'tel:0790257627\' >0790257627</a></div>` + 
        `<div>Diploma of Pharmacy
 from AL-balqa Applied University (2015)
High Schools Diploma.
 Completed high school
</div>` +
        `<div>
WORK EXPERIENCE
 Farah Hospital pharmacy from Jan 2017 until now
 Shrouk Kloob pharmacy from Nov 2015 to Nov 2016</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.556952, lng:31.694785},
        `<h4>Mena Emad Abdo</h4>`  +
        `<div ><a href=\'mailto:mena.emad991@gmail.com\' >mena.emad991@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01222846239\' >01222846239</a></div>` + 
        `<div>بكالريوس صيدلة 2019</div>` +
        `<div>I'm Mena Emad Abdo
23 years old fresh

Locking for Medical rep for sohag area </div>` 
        
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
        
addMarkerToGroup(group, {lat:27.2900955, lng:30.9545514},
        `<h4>Fatma MohamedAbd-Elrady</h4>`  +
        `<div ><a href=\'mailto:drfatmamohamed8@gmail.com\' >drfatmamohamed8@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01128948026\' >01128948026</a></div>` + 
        `<div>Student At Faculty Of Pharmacy'sAssuit</div>` +
        `<div>1-Iam recent Training at series pharmacies.
2-I had summer OTC coures.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.552581, lng:31.009035},
        `<h4>Ahmed Abd El Aziz</h4>`  +
        `<div ><a href=\'mailto:Shikoadel9988@gmail.com \' >Shikoadel9988@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01022437227 \' >01022437227 </a></div>` + 
        `<div>Applied Chemical Science,Banha University, 
Egypt, January 018</div>` +
        `<div>
Coursework included : Organic Chemistry , Inorganic Chemistry, Analytical chemistry,
Practical Analytical Chemistry
I NTERNSHIP E XPERIENCE:
→Trainee, Menofia Water and Sewage Holding Company , Met Mousa water
treatment Plant ,Menofia, Egypt, (July - August 2016).
Cairo Petroleum & Petrochemical Company
Work E xperience
I have been working at Al-Nakhba Laboratories for medical analysis since 2015
S KILLS :
Computer:
A-Very Good User of Windows, Word, PowerPoint, Excel 2016.
B-Good Surfing Skill on The Internet.
Language: Fluent in Arabic (Mother Tong), and very good command of English.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1137516, lng:30.9587107},
        `<h4>Reda Adel Ahmed</h4>`  +
        `<div ><a href=\'mailto:Reda_adel_9@yahoo.com\' >Reda_adel_9@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01001803119\' >01001803119</a></div>` + 
        `<div>Agriculture</div>` +
        `<div>Working experience


(jan2019-up till now)

(2018-2019)
(2015-2018

(2013- 2015)

(2012-2013)

(2008- 2013)


(2005-2008)	 	 	



Medical representative- API pharm – Egypt

Senior – Rova-med – Egypt
Senior –nova pharm –Egypt

Medical representative- nova pharm - egypt

Medical representative – part time -  for horlicks  product –GSK–Saudi Arabia

Supervisor at Americana group , Saudi Arabia

Manger at  Nor- el Hoda company for aluminum steel  trading 


 	
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9385016, lng:31.2842733},
        `<h4>Ayatullah Ahmed</h4>`  +
        `<div ><a href=\'mailto:ayatallhahmed@gmail.com\' >ayatallhahmed@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01143071751 \' >01143071751 </a></div>` + 
        `<div>بكالوريوس علوم كمسترى و بيوكمسرتى </div>` +
        `<div>Medical rep in Proact Astrazeneca Helwan area for 1 year 
Medical rep in beauty and beyond for 4 months 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1435828, lng:31.2836067},
        `<h4>Ahmed mamdoh sobhy abd elmalek</h4>`  +
        `<div ><a href=\'mailto:ahmedmamdoh169@gmail.com\' >ahmedmamdoh169@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123081932\' >01123081932</a></div>` + 
        `<div>Bachalor degree of veterinary medicine banha university 2018</div>` +
        `<div>Worked as medical representative at global pharmaceuticals group from 11/2018 to 4/2019</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.912143, lng:32.7646079},
        `<h4>Mohamed Abd elhamed Abou elmagd Elmasry </h4>`  +
        `<div ><a href=\'mailto:mmasry069@gmail.com\' >mmasry069@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01153547648\' >01153547648</a></div>` + 
        `<div>Faculty of pharmacy Assiut University</div>` +
        `<div>صيدلي خريج 2018 ابحث عن شغل بساعة محترمة
خبرة سنتين خبرة سنة ف صيدليات سيف </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.7465975, lng:30.7839399},
        `<h4>Mohamed Ahmed Hassan </h4>`  +
        `<div ><a href=\'mailto:mohamedvet560@yahoo.com\' >mohamedvet560@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01228431477\' >01228431477</a></div>` + 
        `<div>Vet  medicine BSU  graduated 2018</div>` +
        `<div>Training at Dr Khaled Pharmacy 2017.
 Postgraduate course 2017.
 Presentation skills .
 Summer training at faculty of vet med labs .
Communications 
Ability to learn.
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Reham ayman shakeeb</h4>`  +
        `<div ><a href=\'mailto:Rehamayman254@gmail.com\' >Rehamayman254@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٠٦٦٧٤٧٢٣٣\' >٠١٠٦٦٧٤٧٢٣٣</a></div>` + 
        `<div>طالبة صيدلية بكاليريوس تخرج سنة ٢٠٢٠</div>` +
        `<div>طالبة صيدلة حلوان فى اخر سنة بكالريوس خبرة بسيطة
عمل فى صيدليتين بالعباسية 
إجادة استخدام الoffice 
تدريب بمستفى امبابة الحكومى على الصيدلة الاكلينكية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1001312, lng:30.7416405},
        `<h4>Amal mohamed Zomrah </h4>`  +
        `<div ><a href=\'mailto:soha.mohamed@aol.com \' >soha.mohamed@aol.com </a></div>` + 
        `<div ><a href=\'tel:01099484696\' >01099484696</a></div>` + 
        `<div>Faculty of aquatic science </div>` +
        `<div>Summer Trainee
Kafr El-Sheikh University
1- Visitting to the hatchery and fish farm of Engineer Ahmed Al-Shraki

2- visitting to Al-Akhwaa fish feed production plant

3- visitting to the Kom Al-Tawil factory for the manufacture of salted mullet fish

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4578595, lng:31.1828018},
        `<h4>Mina naier aead</h4>`  +
        `<div ><a href=\'mailto:minanair23@gmail.com\' >minanair23@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01207204006\' >01207204006</a></div>` + 
        `<div>2016  BSC of science </div>` +
        `<div>medical rep. (qalubia-benha) from benha center
expeeiance 2 years in qalubia total 
(benha-tokh-qalub-shebin kanater -kanater khayria - ana remot areas ) 
work at pharco corp. from 2018 till now 
worked at our way pharm from 2016 to 2017
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5574546, lng:31.6881147},
        `<h4>Mariam karam</h4>`  +
        `<div ><a href=\'mailto:Mariamkaramfayek@gmail.com\' >Mariamkaramfayek@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284656963\' >01284656963</a></div>` + 
        `<div>Graduated from fauclty of pharmacy  2019</div>` +
        `<div>Summer training in astrazinca 2017
Event manager
Epsf member
Problem solving</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1166129, lng:31.8845944},
        `<h4>Mohamed Elezaby</h4>`  +
        `<div ><a href=\'mailto:mohamedelezaby715@gmail.com\' >mohamedelezaby715@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01004742315\' >01004742315</a></div>` + 
        `<div>Bachelor of pharmacy "2019"</div>` +
        `<div>Fresh graduated from alex university 
I worked in elbeisy pharmacy for 4 years
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1309505, lng:30.7456437},
        `<h4>Radwa Momen</h4>`  +
        `<div ><a href=\'mailto:radwamomen931@gmail.com\' >radwamomen931@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٥٥٥٧٢٠٩٣١\' >٠١٥٥٥٧٢٠٩٣١</a></div>` + 
        `<div>طالبه في كليه العلوم التخرج سنه ٢٠٢٠</div>` +
        `<div>طالبه في السنه الرابعه 
اللغه الانجليزيه جيده
خبره في مجال التحاليل 
تدريب لمده شهر في شركه مياه
كورس في digital markting شهاده من google, icdl</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9534481, lng:31.20195},
        `<h4>abdalrhim ebrahim</h4>`  +
        `<div ><a href=\'mailto:amrebrahim2020@live.com\' >amrebrahim2020@live.com</a></div>` + 
        `<div ><a href=\'tel:01147872499\' >01147872499</a></div>` + 
        `<div>ليسانس اداب </div>` +
        `<div>خبره سبع سنوات في مجال الادويه   
مستوي اللغه جيد 
اتمتع بلباقه في الكلام 
القدرة علي الاقناع</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.214983, lng:32.6329028},
        `<h4>Mohamed Zaher Askar</h4>`  +
        `<div ><a href=\'mailto:mohamedzaher2211995@gmail.com\' >mohamedzaher2211995@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01143889362\' >01143889362</a></div>` + 
        `<div>PHARMACIST .. 2017 year of graduation</div>` +
        `<div>Studying MBA AT AASTMT .. 
3 YEARS WORKED AT MISR AND SUDAN HOSPITAL .. 
SKILLS AT COMPUTER .. 
GOOD ENGLISH .. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6171254, lng:32.2925424},
        `<h4>كوثر جمال رجب </h4>`  +
        `<div ><a href=\'mailto:Kawther. gmal @yahoo.com\' >Kawther. gmal @yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01027277528\' >01027277528</a></div>` + 
        `<div>بكالوريوس علوم عام 2017وحاصله علي دبلومه فسيولوجي وكيميا حيوي </div>` +
        `<div>خريجه علوم  قسم علم حيوان حاصله علي دبلومه فسيولوجي وكيميا حيوي ابحث عن وظيفه في مركز للتلقيح المجهري او معمل تحاليل او شركة ادويه</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9016844, lng:31.3919736},
        `<h4>Ahmed Hussein Elgharbawy</h4>`  +
        `<div ><a href=\'mailto:ahmedelgharbawyah18@gmail.com\' >ahmedelgharbawyah18@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002593013\' >01002593013</a></div>` + 
        `<div>Faculty of science Masoura university</div>` +
        `<div>Freshly graduated
First aid training 
Medical analysis course
Human development course
Charity work at Altakaful Charity</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0299546, lng:31.2283302},
        `<h4>لوقا صابر</h4>`  +
        `<div ><a href=\'mailto:Kf2595@gmail.com\' >Kf2595@gmail.com</a></div>` + 
        `<div ><a href=\'tel:029999999\' >029999999</a></div>` + 
        `<div>طب بشري القصر العيني</div>` +
        `<div>معايا بكالوريوس علوم من امريكا واشتغلت في الابحاث العلمية و درست طب في جامعة كولومبيا نيويورك
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
        
addMarkerToGroup(group, {lat:25.695858, lng:32.643592},
        `<h4>Samira abd elhakim amer hussin</h4>`  +
        `<div ><a href=\'mailto:Samirahakim111997@gmail.com\' >Samirahakim111997@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099472797\' >01099472797</a></div>` + 
        `<div>Faculty of science at south valley universty ....2018_2019 </div>` +
        `<div>Fresh graduated 
Very good in english 
Work under stress
Good at time keeping
Good communication skills</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7514921, lng:31.021764},
        `<h4>Mohamed nasr elfiky </h4>`  +
        `<div ><a href=\'mailto: Mohamedef183@gmail.com\' > Mohamedef183@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01113901600\' >01113901600</a></div>` + 
        `<div>صيدله /2019</div>` +
        `<div>I have a big back ground about sales and marketing and customer convince I have trained to utopia company for two months 
Learned how to make call to doctor and take feed back from pharmacist. </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1594205, lng:29.87218},
        `<h4>Raniamohamedabdelhamed</h4>`  +
        `<div ><a href=\'mailto:Raniamabdelhameed@gmail.com \' >Raniamabdelhameed@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01011989124\' >01011989124</a></div>` + 
        `<div>faculty of science alexandria university Graduatedin2018</div>` +
        `<div>work under stress 
v-good in english 
good in computer skills
work before at elhaya lab </div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.310517, lng:32.5515922},
        `<h4>Ahmed Nasr Abo-elhassan</h4>`  +
        `<div ><a href=\'mailto:a.nasr202040@gmail.com\' >a.nasr202040@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01156153419\' >01156153419</a></div>` + 
        `<div>Faculty of pharmacy assuit university,2017</div>` +
        `<div>3months working in abd-elsalam nor-eleslam pharmacy and still working in esna/luxor.
1 year working in the medical team in the egyptian military forces.
6months working in mohamed ali pharmacy in esna/luxor.
3 months working in khaled abo-elhassan pharmacy in esna/luxor.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.6620508, lng:32.6341796},
        `<h4>Nahed shirbiny mohamed ahmed </h4>`  +
        `<div ><a href=\'mailto:Nano01097988470@gmail.com \' >Nano01097988470@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01097988470\' >01097988470</a></div>` + 
        `<div>Faculty Of science south valley university in 2016</div>` +
        `<div>Diploma in Biochemistry From Aswan
Course of IC3
Work in laboratory for 1year
Work as Medical Rep in Rovamed pharma from april 2018 to Now </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.5867967, lng:30.8129102},
        `<h4>Armia Nabil wadea </h4>`  +
        `<div ><a href=\'mailto:Nabilarmia00@gmail.com \' >Nabilarmia00@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01201580582 \' >01201580582 </a></div>` + 
        `<div>Faculty of science 2016</div>` +
        `<div>Graduated from faculty of science 2016
Joined egyption armed forces as resirved officer in 2016 to 2019z</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.0692612, lng:31.3610984},
        `<h4>Hamada Ahmed Rady</h4>`  +
        `<div ><a href=\'mailto:ha488150@gmail.com \' >ha488150@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01033970808\' >01033970808</a></div>` + 
        `<div>Fucalty of science, graduation year 2017</div>` +
        `<div>كيميائي خريج كلية العلوم قسم كيمياء ميكروبيولوجي، خبرة سنه ف مجال التحاليل
اريد عمل في معمل تحاليل براتب لا يقل عن 2000 شيفت مسائي </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1360201, lng:31.2411976},
        `<h4>mohamed khalil</h4>`  +
        `<div ><a href=\'mailto:mohamed.khalil261@yahoo.com\' >mohamed.khalil261@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01141264729\' >01141264729</a></div>` + 
        `<div>Pharmacy 2019 </div>` +
        `<div>Traning at Pfizer
At community pharmacy
Working in pharmacy
Course first aid , marketing , soft skills</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0230261, lng:31.1819997},
        `<h4>Muhamed Emam Abdelnabi</h4>`  +
        `<div ><a href=\'mailto:M.emam1245@gmail.com\' >M.emam1245@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01005566191\' >01005566191</a></div>` + 
        `<div>Graduated from faculty of vetreinary medicin</div>` +
        `<div>_Worked as medical rep at Egy phar for 4 month from 6/2015 to 9/2015
_Worked as medical rep at Rota biogen for 3mont from 6/2016 to 8/2016
_Worked as apharmasist at (dr amged pharmacy) for 9 month from 11/2016 to 5/2017
_Worked as apharmacisit at (dr safaa ahmed pharmacy ) for 10 mont from(6/2017 to 3/2018)
_

 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.556952, lng:31.694785},
        `<h4>Zeinab khalaf mahmoud</h4>`  +
        `<div ><a href=\'mailto:Zeinabkhalaf52@gmail.com\' >Zeinabkhalaf52@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01148451073\' >01148451073</a></div>` + 
        `<div>Pharmacist-2019</div>` +
        `<div>practicing in:

 -scientific researchs
-member of EPSF
-practical medical awarness in univeristy
-charitable activities
1-hard working
2-qualified
3-ambitious
4- good experience with drug and marketing
5-speak fluent english
6-ability to cooperate with computer
7-good comunication skills
8-ability to adapt tovariable andwork intensively
9-ability to work and collaberate with groups
10-available at any time
11-ability to persaudes other about my opinion
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7575667, lng:30.4762888},
        `<h4>Mohamed Fathallah Mostafa </h4>`  +
        `<div ><a href=\'mailto:mohamefathalla579@gmail.com\' >mohamefathalla579@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01158598223/01061198961\' >01158598223/01061198961</a></div>` + 
        `<div>Bachelor of Science</div>` +
        `<div>Workshop and Conferences:                 

First aid  and medical skills course       
Practical application of medical laboratory        investigations
Paint and coating technology
2nd international conference in medical analysis and tumor diagnosis
Aquaponic and its role as an advanced aquaculture technique in sustainable developement and job creation for young people
Cement technology
Water analysis and water treatment
Quality control in the chemical laboratory
Good Manufacturing practice for pharmathutical fields  

Courses:                               

Cell Biology at Medical Research Institute 2018
Parasitology and Cell Biology at Medical Research Institute 2018

Volunteering:                            

Member of Sociologicals Leaders Charity
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9682586, lng:31.2865543},
        `<h4>Eman Ehab</h4>`  +
        `<div ><a href=\'mailto:eman.ehab@msa.edu.eg\' >eman.ehab@msa.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01158711234\' >01158711234</a></div>` + 
        `<div>Graduated from MSA UNIVERSITY faculty of pharmacy class of 2019</div>` +
        `<div>Trained at utopia pharmaceutical for 3 months as medical representative working on blokatens line and torsertic .</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.680805, lng:31.5285562},
        `<h4>Donia ELsayed Ahmed </h4>`  +
        `<div ><a href=\'mailto:doniaelsayed534@gmail.com\' >doniaelsayed534@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01144740719\' >01144740719</a></div>` + 
        `<div>Student 4th year pharmacy student</div>` +
        `<div>Summer training in pharmacy and epico company
Course in first aid mangement
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1392355, lng:30.1259094},
        `<h4>Mahmoud gamal mokhtar</h4>`  +
        `<div ><a href=\'mailto:Mahmoud4all00@yahoo.com\' >Mahmoud4all00@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01275579817\' >01275579817</a></div>` + 
        `<div>Faculty of science 2017</div>` +
        `<div>Fresh graduated
Just finished army sevice
Hard worker
Trained in el masry pharmacy</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9633502, lng:30.9362359},
        `<h4>Alaa mohamed</h4>`  +
        `<div ><a href=\'mailto:am1211996@gmail.com\' >am1211996@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096994448\' >01096994448</a></div>` + 
        `<div>Pharmacist 2019</div>` +
        `<div>Trained as MR at AstraZeneca
Trained as MR at DBK 
Trained at community pharmacy for 3 month 
High communication skills
Very good at english
Trained at sed factory 
Can work under stress
It's okay with traveling </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7317447, lng:30.7755214},
        `<h4>محمد عبدالمقصود عبدالحفيظ يونس</h4>`  +
        `<div ><a href=\'mailto:mohamedyounis891@yahoo.com\' >mohamedyounis891@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01063076192\' >01063076192</a></div>` + 
        `<div>بكالريوس صيدلة اسكندرية 2018</div>` +
        `<div>العمل في مصانع ادوية وشركات توزيع خبرة سنة في سوق الدواء المصري صيدليات</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6761618, lng:31.4224345},
        `<h4>Hassan Mohamed Abdeldayem </h4>`  +
        `<div ><a href=\'mailto:Hassandemo72@gmail.com \' >Hassandemo72@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01156551074 \' >01156551074 </a></div>` + 
        `<div>Bachelor of Pharmacy graduate in 2019</div>` +
        `<div>I worked at metwally Pharmacy for 2 years
I passed a project in marketing course in collage </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0085252, lng:31.1536774},
        `<h4>مصطفى عمر محمود صديق </h4>`  +
        `<div ><a href=\'mailto:mostafa.omar313@gmail.com\' >mostafa.omar313@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01158404696\' >01158404696</a></div>` + 
        `<div>بكالوريوس صيدلة 2019</div>` +
        `<div>اشتغلت فى صيدليات العزبى  
اشتغلت فى صيدليات مصر 
سافرت لبروجيكت فى روسيا 
اخدت summer training فى شركة فايزر 
اخدت كورس ماركتينج وسيلز فى الجامعه الامريكية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Shimaa adel sayed </h4>`  +
        `<div ><a href=\'mailto:Shimaaadel784@gmail.com\' >Shimaaadel784@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115779004\' >01115779004</a></div>` + 
        `<div>Bachelor of pharmaceutical science (2017)</div>` +
        `<div>I have been working as a medical representative at Eipico for 18 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.1298271, lng:30.1176889},
        `<h4>Saied alomda</h4>`  +
        `<div ><a href=\'mailto:saiedalomda5@gmail.com\' >saiedalomda5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01204808232\' >01204808232</a></div>` + 
        `<div>Bachelor degree of science </div>` +
        `<div>Trained at Amryia pharmaceutical 
Trained at petroment campany(safety)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4707924, lng:31.6471851},
        `<h4>Aya Sabry Mohamed </h4>`  +
        `<div ><a href=\'mailto:ayasabry089@gmail.com\' >ayasabry089@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01121534147 \' >01121534147 </a></div>` + 
        `<div>Bachelor's degree in Microbiology </div>` +
        `<div>I'm microbiologist fresh graduate seeking to work in pharmaceutical companies </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.180956, lng:31.183683},
        `<h4>محمد مصطفي عبدالعليم</h4>`  +
        `<div ><a href=\'mailto:mohamed.moustafaa995@gmail.com\' >mohamed.moustafaa995@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01146510511\' >01146510511</a></div>` + 
        `<div>بكالوريوس الصيدله والعلوم الطبيه </div>` +
        `<div>التدريب ف عدة صيدليات خاصه وكيفيه صرف الأدوية وقراءه الوصفات الطبيه وصرف أدوية ال OTC وقياس ضغط الدم والسكر وقراءه التحاليل الطبية . </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.4145043, lng:30.8621407},
        `<h4>Demian Boshra abd ElMalk wasef</h4>`  +
        `<div ><a href=\'mailto:demianboshra@gmail.com\' >demianboshra@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01097269100\' >01097269100</a></div>` + 
        `<div>License arts</div>` +
        `<div>خدمة عملاء وصراف في شركة تنمية لتمويل المشروعات الصغيرة
اعمال تجاريه حرة </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Hussien Ibrahim </h4>`  +
        `<div ><a href=\'mailto:hibrahim1923@gmail.com\' >hibrahim1923@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099987344\' >01099987344</a></div>` + 
        `<div>Science /2011</div>` +
        `<div>Work experience
Work in vodafone company Customer service 
And data entry and finally sales outdoor
Work in Ecs company for oil and gas servics 
 Work as Medical rep in pharma serv company
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.2086682, lng:31.6377127},
        `<h4>AbdulRhman Ahdi Hafez Elhamamssy</h4>`  +
        `<div ><a href=\'mailto:abdulrhman.ahdi96@gmail.com\' >abdulrhman.ahdi96@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01068713407\' >01068713407</a></div>` + 
        `<div>بكاليورس صيدلة؛سنة التخرج 2020</div>` +
        `<div>1-training at Hegazy pharmacy in 2018
2-training at Damettia institute of oncology in 2018
3-training in Nutritional and food supplements in Delta university 
4-Training in From zero to Hero in Delta Univerist
5-perticipate in Participated in the annual pharmacists' conference in the Damietta Pharmacists Syndicate

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1345265, lng:31.3130398},
        `<h4>Heba Gafer Mahmoud </h4>`  +
        `<div ><a href=\'mailto:Hebagafer28@gmail.com \' >Hebagafer28@gmail.com </a></div>` + 
        `<div ><a href=\'tel:٠١١٤٧٤٨٧٢٩٣ \' >٠١١٤٧٤٨٧٢٩٣ </a></div>` + 
        `<div>Bachelor of science 2019</div>` +
        `<div>Iam fresh graduated 2019
From faculty of science
Effective and easy to learn
</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.0000916, lng:31.424011},
        `<h4>محمد عبدالناصر</h4>`  +
        `<div ><a href=\'mailto:Mohmedabdalnasser92@gmail.com\' >Mohmedabdalnasser92@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01153850789\' >01153850789</a></div>` + 
        `<div>علوم كيمياء خاصه</div>` +
        `<div>فرش حديث التخرج خريج علوم جامعه الازهر اسيوط يبحث عن شغل في مجال التسويق</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.1180694, lng:30.7441549},
        `<h4>Al shaimaa ahmed mohamed khaled</h4>`  +
        `<div ><a href=\'mailto:Shamskhaled117@gmail.com\' >Shamskhaled117@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01200997431\' >01200997431</a></div>` + 
        `<div>Faculty of science minia university 2012</div>` +
        `<div>Medical rep or chemist or scince teatcher
Good salary
Working at magic farma as amedical rep from 2016 and still
Worked as amedical rep at macro group for 1 year</div>` 
        
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
        
addMarkerToGroup(group, {lat:26.3015763, lng:31.9944264},
        `<h4>Mohamed Abolmagd</h4>`  +
        `<div ><a href=\'mailto:mohamedaboelmaged926@yahoo.com\' >mohamedaboelmaged926@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01118808610\' >01118808610</a></div>` + 
        `<div>Bachelor's degree in pharmaceutical industry (class 2016)</div>` +
        `<div>-community pharmacist at hossam pharmacy(2014-2015)
-community pharmacist at elezapy pharmacies (2016)
-pharmacist at main medical warehouse of Egyptian Armed Forces (2017)
-pharmaciest at ministry of health and population (2018 - till now) </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1756396, lng:31.2002075},
        `<h4>Mohamed hammad iraqi </h4>`  +
        `<div ><a href=\'mailto:m.h.iraqi89@gmail.com\' >m.h.iraqi89@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01026120594 \' >01026120594 </a></div>` + 
        `<div>بكالوريوس علوم 2011</div>` +
        `<div>خبره 8 سنوات في المجال الطبي
اتمنى الحصول على وظيفه مناسبه
سنتين في الدعايا الطبيه
و تعاقدات وعلاقات عامه</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.25023, lng:32.2785211},
        `<h4>Nourhan ashraf ali khalaf</h4>`  +
        `<div ><a href=\'mailto:Ashrafnour782@gmail.com\' >Ashrafnour782@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01275699279\' >01275699279</a></div>` + 
        `<div>Pharmacy 2019</div>` +
        `<div>I trained at pharmacy
 but iam fresh graduate.
i'am graduate of MTI
I have a passion for work </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1415641, lng:31.2767085},
        `<h4>Omar Abdelwahed mohamed hamed nasser</h4>`  +
        `<div ><a href=\'mailto:Oabdelwahed362@gmail.com\' >Oabdelwahed362@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01126008577\' >01126008577</a></div>` + 
        `<div>Bachelor of pharmacy - 2019</div>` +
        `<div>-	FEB 2015:  EPSF-Helwan 2014/15 Member.
-	JAN 2017 : VICE OF SCOUTS COMMITTEE OF STUDENTS’ UNION.
-	SEP 2017 – FEB 2018 : Worked at " Dr/ Marwa Mostafa pharmacy."
-	FEB 2018 – JUN 2019 : Worked at “Dr/ Saeed Nasr pharmacy."

TRAINING COURSES
-	DEC 2014: Emergency First aid course.
-	JUNE 2015: Training at " Dr/ Tarek Mamdouh pharmacy."
-	JAN   2016: market reasearcher at AWE marketing.
-	JUNE 2016: OTC course.
-	June 2017: Training at pentapharma company.
-	DEC 2017: Finished 5 levels English course.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0261588, lng:30.4675444},
        `<h4>Farah ahmed fahmy,,,,,, in behera _damanhour</h4>`  +
        `<div ><a href=\'mailto:Memomoon96@yahoo.com\' >Memomoon96@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01096706744\' >01096706744</a></div>` + 
        `<div>Graduated from the Faculty of Science in 2018</div>` +
        `<div>Training in the general hospital ,,,,
 First aid course in the Faculty of Science, ,,, Worked in voluntary work Orman Society ,,,, Worked in a laboratory analysis in Damanhour</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.9265838, lng:30.8272358},
        `<h4>مريان عدلي نان</h4>`  +
        `<div ><a href=\'mailto:Marian. Adly. 75@gmail.com\' >Marian. Adly. 75@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01228357236\' >01228357236</a></div>` + 
        `<div>طب بيطري دفعه 2018</div>` +
        `<div>اشتغلت لمده سنه في صيدليه بشري
 واشتغلت مع دكتور بيطري تدريب لبعض الاشهر
نزلت تدريب في معمل تحاليل 
قمت بزياره بعض مزارع الفراخ البياض</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.8112503, lng:30.9869062},
        `<h4>Rofeda hesham mohammed abdelfatah bar </h4>`  +
        `<div ><a href=\'mailto:rofedahesham87@gmail.com\' >rofedahesham87@gmail.com</a></div>` + 
        `<div ><a href=\'tel: 01289788821\' > 01289788821</a></div>` + 
        `<div>خريجة طب بيطرى عام 2019</div>` +
        `<div>حضرت مؤتمرات طبية مثل اجرينا و مؤتمر طبى ف ااقاهرة 
خدت كورسات ف المجال البيطرى مثل ف مجال الاحصنة و الاغذية و الجودة و الايزو 
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
        
addMarkerToGroup(group, {lat:30.4565117, lng:31.448248},
        `<h4>Abdelwahab sobhi abdelwahab </h4>`  +
        `<div ><a href=\'mailto:Abdelwahabsobhi94@gmail.com \' >Abdelwahabsobhi94@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01022495403\' >01022495403</a></div>` + 
        `<div>Bachelor of pharmacy in 2017</div>` +
        `<div>Badr sobhi pharmacy 
Pharmacist at the ministry of health 
Training in AstraZeneca </div>` 
        
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
        
addMarkerToGroup(group, {lat:25.3097322, lng:32.5510302},
        `<h4>Helbees refaat takla </h4>`  +
        `<div ><a href=\'mailto:Refaathelbees@gmail.com \' >Refaathelbees@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01222877399\' >01222877399</a></div>` + 
        `<div>2014 pharmacy Graduated </div>` +
        `<div>From May 2018 uptill now working in Mash premiere company

Working in three different pharmacys dr moamen
Dr Ragaaey
El mahata pharmacy
I am aleader for together team [national sarvice] </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.9394903, lng:30.8218363},
        `<h4>Marina Lewez fahiem</h4>`  +
        `<div ><a href=\'mailto:Marinalewez2@gmail.com\' >Marinalewez2@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01275857512\' >01275857512</a></div>` + 
        `<div>Graduate in 2018 at faculty of science, Minia University </div>` +
        `<div>Works as medical rep at Golbe pharma incorporation pharmaceutical company from October 2018 till january 2019.
June-July 2017" trained at water and sanitation company at at Minia.
"June-July 2018" trained at Al-Asaaf pharmacy.
Analysis course at European Academy.
Firs Aid produced by German University and Future Team. 
basics of body language online course.
Excellent user of Microsoft (word, excel & power point).
Proficient in Internet and Social Media Use. 
Ability to communicate well with different characters.
Flexibility and Team work spirit. 
Ability to work in a group or individually according to the job requirement.
Self-motivated.
good communication skills.
Work under stress.
Having high determination to achieve my targets and goals.
Preparation of presentations. Making relationships with people.
Using internet to reach my goals.
Very well skills in all media. 	
</div>` 
        
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
        
addMarkerToGroup(group, {lat:21.3957006, lng:39.2992591},
        `<h4>Tawfiq Ali Mohammed Jubarah</h4>`  +
        `<div ><a href=\'mailto:0565483466tawfiq@gmail.com \' >0565483466tawfiq@gmail.com </a></div>` + 
        `<div ><a href=\'tel:0565483466\' >0565483466</a></div>` + 
        `<div>بكالوريوس صيدله 2018</div>` +
        `<div>توفيق علي محمد جباره٠
صيدلي بكالوريوس٠
درجة امتياز ٠
خبره لا تقل عن سنه ٠
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.5856263, lng:30.8172798},
        `<h4>Yousef nabil</h4>`  +
        `<div ><a href=\'mailto:Yousefelksywaqeem@gmail.com \' >Yousefelksywaqeem@gmail.com </a></div>` + 
        `<div ><a href=\'tel:٠١٥٥٢٥٨٨٤٩٥\' >٠١٥٥٢٥٨٨٤٩٥</a></div>` + 
        `<div>صيدله اكلنيكال ٢٠١٩</div>` +
        `<div>نحصل علي تدريب منتظم بمستشفي الجامعه كل اسبوع
متدرب كل سنه بصيدليه اثناء الاجازه الصيفية 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.4113646, lng:30.8664958},
        `<h4>Aya Tarek Mohamed </h4>`  +
        `<div ><a href=\'mailto:ayatarek058@gmail.com\' >ayatarek058@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01006252737\' >01006252737</a></div>` + 
        `<div>Senior 2019 at faculty of science Fayoum university Botany and chemistry department</div>` +
        `<div>-	Coordinator at Sc Titans Team student activity at faculty of science .(2018/2019) .
-	Head of marketing and social media at student for Egypt (faculty of Science)( 2017 
 2018 ).
-	 Vice head  of marketing in IEEE student  activity chapter. (2017/2018).
-	Member at  Resala family at (faculty of science ).
-	Organizer at (ICBSEA ).
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.459065, lng:31.178577},
        `<h4>Bassant essam mohamed </h4>`  +
        `<div ><a href=\'mailto: bassantessa473@gmail.com\' > bassantessa473@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022947634\' >01022947634</a></div>` + 
        `<div>BSc in biotechnology 2017 ,diploma medical bio chemistry 2018,pre master in biotechnology 2019</div>` +
        `<div>I worked in magic pharam (cosmo, obesity ) from 2017 to 2019 
I worked in log pharma group (obesity ) 
I had experience in  (nutrition, ped ,gyna, derma ) clinics as well as hospital, in addition to relationship between pharmacy and drug store. 
 I am medical analysis specialist  ( I worked in laboratory ) 
I love tissue culture and chemistry 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.1857533, lng:31.1788195},
        `<h4>David adel jacoup</h4>`  +
        `<div ><a href=\'mailto:Eng.david.adel@gmail.com\' >Eng.david.adel@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01272502879\' >01272502879</a></div>` + 
        `<div>Engineering . 2016</div>` +
        `<div>Iam working as aSales engineer for trashed company
Also lam working as a musical teacher in many special centers
I worked for Dar company as asite engineer
I worked for east delta company as asite engineer</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0481456, lng:31.4076713},
        `<h4>Ahmed saad mohammed</h4>`  +
        `<div ><a href=\'mailto:Abokhashaba565@gmail.com\' >Abokhashaba565@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01551334341\' >01551334341</a></div>` + 
        `<div>5th grade medical student</div>` +
        `<div>4 year in emmergancy room 
V.good clinical pharmacology
3 month training in pharmacy 
3 months training in general surgery department
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
        
addMarkerToGroup(group, {lat:30.1196363, lng:31.2556488},
        `<h4>Islam Ibrahim ALI</h4>`  +
        `<div ><a href=\'mailto:dr.islamali2013@gmail.com\' >dr.islamali2013@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01007219725\' >01007219725</a></div>` + 
        `<div>B. A in science, Biology, May 2009, GRADE : GOOD</div>` +
        `<div>From Dec.2009 to Dec.2012 Medical Rep at perla pharm.

From feb2013 to Sept 2016 Medical Rep at valera pharm.

From Oct 2016 to Nov2017 Medical Lab Rep  at cairo scan lab .

From Dec 2017 until now Medical Lab Rep  at elborg lab .


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Name/Ameen kasem saeed galeb</h4>`  +
        `<div ><a href=\'mailto:ameenkasem@44gmail.com\' >ameenkasem@44gmail.com</a></div>` + 
        `<div ><a href=\'tel:00967776038679\' >00967776038679</a></div>` + 
        `<div>pharmacy  2019</div>` +
        `<div>الاسم/امين قاسم سعيد غالب 
الجنسيه/يمني 
المحافظه /تعز 
مديريه/ مقبنه 
 
الوظيفه /  صيدلي </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.5600371, lng:30.8159884},
        `<h4>Hayam Abdelrahman Mehany</h4>`  +
        `<div ><a href=\'mailto:Hayam.mehany92@yahoo.com\' >Hayam.mehany92@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01007503442\' >01007503442</a></div>` + 
        `<div>Veterinary medicine 2016</div>` +
        `<div>1-medical rep.
2-regulatory affairs specialist
Fresh in this fields 
Graduated from faculty of veterinary medicine class 2016

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0777558, lng:31.2298579},
        `<h4>Michael Alfons George </h4>`  +
        `<div ><a href=\'mailto:michol36@hotmail.com \' >michol36@hotmail.com </a></div>` + 
        `<div ><a href=\'tel:01273100551 \' >01273100551 </a></div>` + 
        `<div>Faculty of pharmacy Ain shames University 2018</div>` +
        `<div>Part time rameda medical rep. 
Habib training as medical rep. 
Mina pharm production and QC
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.880878, lng:31.292957},
        `<h4>Marina mansour gad</h4>`  +
        `<div ><a href=\'mailto:Marinagad92@yahoo.com \' >Marinagad92@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01287194808\' >01287194808</a></div>` + 
        `<div>Faculty of pharmacy cairo university 2014</div>` +
        `<div>Medical education or medical representative  in a pharmaceutical company 
Area helwan or maadi</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8345691, lng:31.2516686},
        `<h4>ahmed ramadan ebrahem mohamed</h4>`  +
        `<div ><a href=\'mailto:eldakamya6@gmail.com\' >eldakamya6@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01012040137\' >01012040137</a></div>` + 
        `<div>A student in the second class at faculty of science</div>` +
        `<div>خبره فى مجال التحاليل الطبيه و يوجد بعض الخبره عن الادويه ومجالاتها . خبره فى التسويق بكل انواعه سواء الكترونى او اى كان لباقه فى الحديث . خبره فى مجالات الحاسب مثل الورود والاكسيل والبور بوينت والانترنت خبره فى تسويق الادويه للدكاتره وترشيحها لهم بطريقه مبسطه وجذابه . العمل اوقات طويله .العمل تحت ضغط </div>` 
        
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
        
addMarkerToGroup(group, {lat:27.1786176, lng:31.1720987},
        `<h4>Ahmed hassan sayed</h4>`  +
        `<div ><a href=\'mailto:A7med7assan7738@gmail.com\' >A7med7assan7738@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01066514405\' >01066514405</a></div>` + 
        `<div>Faculty of science (2015)</div>` +
        `<div>Work at glenmark pharmacutical assuit from 7/2018 still now.

Worked at zoser pharma assuit from 11/2017 to 6/2018.

Worked at leaders pharma assuit from 4/2017 to 11/2017</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5668936, lng:31.7491909},
        `<h4>Sabrin Mohamed Tawfeek </h4>`  +
        `<div ><a href=\'mailto:Sabrinebeid1996@gmail.com \' >Sabrinebeid1996@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01148736687\' >01148736687</a></div>` + 
        `<div>Faculty of Pharmacy _ graduate _ good </div>` +
        `<div>1-Trained in yara pharmacy 
 2-worked in mohamed Abdelrheem's pharmacy  3-worked as organizer for OTC course by dr. Ahmed ElGweily
4-attend course of management of Pharmacy by dr. Yehia elEzaby
5- attend course of management of hypertension and diabetes by dr. Amr elkady</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.1404401, lng:31.0102337},
        `<h4>Hossam kamal taha</h4>`  +
        `<div ><a href=\'mailto:Hossam.almaghraby3@gmail.com\' >Hossam.almaghraby3@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203702123\' >01203702123</a></div>` + 
        `<div>Faculty of science ,special chemistry, Al Azhar university in cairo 2019</div>` +
        `<div>I earned atraining in health well egypt for 5 months as medical rep. And for honest pharma for one month 
 and l am good in english and compuer science such as microsoft windows and i am self motivated.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7858599, lng:31.0074597},
        `<h4>Manal Anwar Mohammed</h4>`  +
        `<div ><a href=\'mailto:manalanwar14695@gmail.com\' >manalanwar14695@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203592432\' >01203592432</a></div>` + 
        `<div>Veterinary medicine Cairo University 2018</div>` +
        `<div>Start as a medical rep.in credo pharma from August 2018 and pleased to be the best achievee.</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mahmoud khattab</h4>`  +
        `<div ><a href=\'mailto:mahamoudkhattab210@gmail.com\' >mahamoudkhattab210@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01016181201\' >01016181201</a></div>` + 
        `<div>Fuculty of science 2019</div>` +
        `<div>خريج سنة 2019  اجيد العمل علي الحاسوب والإنترنت أجيد العمل تحت ضغط وقادر علي مواجهه الكثسر من التحديات والعملع علي رفع شأن المكان واجيد العمل في تيم جماعي حيث استطيع التقدم والعمل في جماعة .
شكرا </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.6545407, lng:31.1338401},
        `<h4>ايمان طارق فوده </h4>`  +
        `<div ><a href=\'mailto:emanfouda12345t@gmail.com\' >emanfouda12345t@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096084773\' >01096084773</a></div>` + 
        `<div>بكالوريوس علوم قسم كيمياء </div>` +
        `<div>fresh graduated
Trainee at national liver instatues in shibin el khom
Trainee at oil refining company
Take courses in pharma</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.2965098, lng:30.974542},
        `<h4>Mostafa mohamed sayer</h4>`  +
        `<div ><a href=\'mailto:Mostafasayer07@gmail.com\' >Mostafasayer07@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096359319\' >01096359319</a></div>` + 
        `<div>Faculty of science .. monafia university  .. graduated year 2019</div>` +
        `<div>

Team work spirit and co-operation..
Hard work under stress ..
Ability to solve proplem&ability to face.
Good leadership skills.
Ability to acquisition new skills in a short time .</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4087103, lng:30.9455962},
        `<h4>Fadia farag assad hana</h4>`  +
        `<div ><a href=\'mailto:Fadiafarag61@gmail.com \' >Fadiafarag61@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01025719804\' >01025719804</a></div>` + 
        `<div>Student.. 3rd year at faculty of  pharmacy</div>` +
        `<div>There is not any experience.... I have worked at different pharmacies.... I can work under stress... I can work for long time and while I studying</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.3233593, lng:30.7059643},
        `<h4>Gehad Ramadan Ahmed </h4>`  +
        `<div ><a href=\'mailto:gehadramadan45@gmail.com\' >gehadramadan45@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01027305470\' >01027305470</a></div>` + 
        `<div> Bachelor of Science
·	Graduation Year:    ( 2019)
</div>` +
        `<div>Additional skills:

Excellent knowledge internet.
·	Ability to work long time with helpful team.
·	Excellent communication & interpersonal skills.
·	Honest Co-operative, Self-Confidence & Open minded. 
·	Excellent team player.
·	Helpful & friendly to customers.
                                                                                                                                     trainung &courses:

Have a course of English and soft skills course in whynot academy
Have a training on soft skills and employment skills at masr ta3mal
Attend a course of professional selling skills and time management  at pharco pharmaceutical
 Icdl certificate                                                                                                                                                Work Experience:

 fikraah family at faculty of science. 

      </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.775922, lng:31.0002875},
        `<h4>Rania Reda Ali Mahmoud </h4>`  +
        `<div ><a href=\'mailto:Raniareda183@gmail.com \' >Raniareda183@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01030854699\' >01030854699</a></div>` + 
        `<div>Faculty of science Tanta university  :  Chemistry / Biochemsitry  department 
   Grade          :  Very good 
   Graduation  year       :       2017
</div>` +
        `<div>Worked   as biochemist in Ibn sina lab
Worked   as biochemist  in  Aspire lab
Worked      as marketing  representative for Aspire lab
Worked   as biochemist in Elmasry lab
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.3069964, lng:31.7744511},
        `<h4>Ayat mohamed tawfiek</h4>`  +
        `<div ><a href=\'mailto:Ayatmohamed29@yahoo.com\' >Ayatmohamed29@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01146520122\' >01146520122</a></div>` + 
        `<div>Medical Studient</div>` +
        `<div>أنا طالبه طب 
داخله 5 طب بإذن الله
محتاجه اشتغل او اتدرب ف استقبال
تدربت مره ف صيدليه 
ونزلت فتره مستشفي الاحرار</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Islam hesham zakreya mahmoud</h4>`  +
        `<div ><a href=\'mailto:islamhesham415@gmail.com \' >islamhesham415@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01033657742 \' >01033657742 </a></div>` + 
        `<div>2019 graduated from faculty of science,Helwan university </div>` +
        `<div>Customer servies
Telesales
content creator
good marketing and sales skills
good Communication skills </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>عبد الرحمن صفوت احمد</h4>`  +
        `<div ><a href=\'mailto:abdelrahmansafwat20@yahoo.com \' >abdelrahmansafwat20@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01110321335\' >01110321335</a></div>` + 
        `<div>سنه خمسه صيدله</div>` +
        `<div>محتاج شغل في نطاق الزقازيق في صيدليه  ..........................        ........... </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2383395, lng:29.9974268},
        `<h4>Alaa mohamed DaRwish </h4>`  +
        `<div ><a href=\'mailto:alaa.darwish.elhwary@gmail.com\' >alaa.darwish.elhwary@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١٢٧٣٧٢٣٣٨٨\' >٠١٢٧٣٧٢٣٣٨٨</a></div>` + 
        `<div>Graduated from faculty of science Alexandria University </div>` +
        `<div>26 years old 
Live in Alexandria in elsyouf shmaa 
Need vacant in center1 or center 2
I haven't experience in this field
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:24.9803056, lng:32.8910773},
        `<h4>Ahmed Asaad</h4>`  +
        `<div ><a href=\'mailto:ahmedassad883@gmail.com\' >ahmedassad883@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01111859830\' >01111859830</a></div>` + 
        `<div>Bachelor degree in veterinary medicine Aswan university 2017</div>` +
        `<div>
Work in vet pharmacy
Training 2months in vet hospital from 1st of July till last of August of 2015 
Training the same in 2016</div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.7037204, lng:32.6470038},
        `<h4>Merna Montaser fahmy </h4>`  +
        `<div ><a href=\'mailto:Montasermerna@gmail.com\' >Montasermerna@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01201343674\' >01201343674</a></div>` + 
        `<div>Bachlor of Pharmacy in 2019</div>` +
        `<div>حاصلة على البكالوريوس في كلية الصيدلة ٢٠١٩
صيدلي شفت صباحي
المرتب ٢٠٠٠ أو ١٧٠٠</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.10457, lng:29.7819054},
        `<h4>Aml Mahmoud </h4>`  +
        `<div ><a href=\'mailto:amlmahmoud2017@gmail.com \' >amlmahmoud2017@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01285253867\' >01285253867</a></div>` + 
        `<div>Faculty of science /2017</div>` +
        `<div>-Worked as meaical rep at macro group for 9 monthes
-training at mahfouz pharmacies for 2 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0518422, lng:31.4484038},
        `<h4>Khaled mohammed</h4>`  +
        `<div ><a href=\'mailto:khaled.afify2018@gmail.com\' >khaled.afify2018@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01064985160\' >01064985160</a></div>` + 
        `<div>Faculty of pharmacy  2018</div>` +
        `<div>Sally pharmacy 
Heba pharmacy
Ayman badwy pharmacy
Mohammed elmadboly pharmacy</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1150639, lng:31.3192165},
        `<h4>Ahmed Osama</h4>`  +
        `<div ><a href=\'mailto:osamaa1266@yahoo.com\' >osamaa1266@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01094643621\' >01094643621</a></div>` + 
        `<div>Bachelor of science, 2019</div>` +
        `<div>I have 2-years of experience in the field of sales as I worked as a medical rep. for both Royal Lab and El-Shams Labs for Medical Examinations </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.137661, lng:31.2908665},
        `<h4>Amany refaat ali</h4>`  +
        `<div ><a href=\'mailto:Refaatamany6@gmail.com\' >Refaatamany6@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01127996288\' >01127996288</a></div>` + 
        `<div>Bachelor of science at2019</div>` +
        `<div>I have alittle experience in medical as i worked before as pharmacist 's assistant for 3 months.also i was training in a medical lab for 4 months and worked in lab with adoctor for 3 months . And worked as ateacher before . I want to learn a new thing in every holiday i taken from my collage .</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.9811989, lng:31.4448563},
        `<h4>Marwa salah mohamed Mahmoud </h4>`  +
        `<div ><a href=\'mailto:ms8858098@gmail. com\' >ms8858098@gmail. com</a></div>` + 
        `<div ><a href=\'tel:01012758038\' >01012758038</a></div>` + 
        `<div>B.S.C in (chemistary &biology  department )faculty of science assuit university. 2018</div>` +
        `<div>1-(July 2017) molecular biology research center. 2-criminal  investigation  3-cancer chemotherapy. 4-medical  analysis. 5-English skills .6-setting  goals&self  discovery.7-internet  and computing core certification  (IC3).8-self  planning and time management. 9-team work skills. 10-hard worker.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5805352, lng:31.5119371},
        `<h4>Ebtehal Elrefaay</h4>`  +
        `<div ><a href=\'mailto:Ebtehal.Elrefaay@gmail.com\' >Ebtehal.Elrefaay@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099802901\' >01099802901</a></div>` + 
        `<div>Bsc. faculty of veterinary medicine zagazig university</div>` +
        `<div>-Medical Rep. intern, Visit 90 pharmacy in 2 weeks.                                     summer 2018
-Trainee at Elwey pharmacy.  February 2018.                                                  </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.7352584, lng:30.8423489},
        `<h4>Mohamed Essam</h4>`  +
        `<div ><a href=\'mailto:Dr.mo.essam93@gmail.com\' >Dr.mo.essam93@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01012400080\' >01012400080</a></div>` + 
        `<div>Bachelor degree of pharmaceutical science..2016</div>` +
        `<div>Pharmacist Al.sawaf.pharmacies.
Pharmacist.Almagd.pharmacis
Pharmacist.Alnile pharmacy
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
        
addMarkerToGroup(group, {lat:27.1703081, lng:31.1914713},
        `<h4>Ghada ibraheem</h4>`  +
        `<div ><a href=\'mailto:Ghada_tarak2018@yahoo.com\' >Ghada_tarak2018@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01065768521\' >01065768521</a></div>` + 
        `<div>Veterinary medicine 2009</div>` +
        `<div>Medical rep in deltapharma
Senior medical rep in unipharma
Senior in medizin
Senior in deltabio
Courses of mangerial skills and leadership</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1664463, lng:31.3280882},
        `<h4>كيرلس عبد الملاك </h4>`  +
        `<div ><a href=\'mailto:Keromalak2710@gmail.com\' >Keromalak2710@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01280142762\' >01280142762</a></div>` + 
        `<div>طالب في المستوي الرابع كليه العلوم</div>` +
        `<div>العمل في فرع موزع لخدمه تي اي داتا لمده سنه
متخصص في برنامج photoshop
جيد في استخدام برنامج word
جيد في اللغه الانجليزيه</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4662174, lng:31.1238112},
        `<h4>Amany Nabil Saad</h4>`  +
        `<div ><a href=\'mailto:dr.amanyismail@gmail.com\' >dr.amanyismail@gmail.com</a></div>` + 
        `<div ><a href=\'tel:+201002181327\' >+201002181327</a></div>` + 
        `<div>Vetrinary medicine 2017</div>` +
        `<div>Worked at alandalous medical company from jan 2018 till dec 2018 
 Workes at borg medical industry from april 2019 till now</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.467527, lng:31.3349302},
        `<h4>Mohamed ibrahim elsayed</h4>`  +
        `<div ><a href=\'mailto:sekkymalwany@gmail.com\' >sekkymalwany@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01066940853\' >01066940853</a></div>` + 
        `<div>A fresh graduate from faculty of pharmacy zagazig university</div>` +
        `<div>- community pharmacy trainee for 1 year 
- Enactus zu member where i contribute in both planning and organizing events .</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9647887, lng:31.1685973},
        `<h4>Rawan aly essa</h4>`  +
        `<div ><a href=\'mailto:Alirawan405@gmail.com\' >Alirawan405@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01114526024\' >01114526024</a></div>` + 
        `<div>Faculty of pharmacy mansoura university 2019</div>` +
        `<div>_have a training at a good company
_worked at  a pharmacy for 2 years
_excellent english skills 
_excellent with microsoft
_excellent selling skills
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2294649, lng:29.9586526},
        `<h4>Esraa fawzy khamis</h4>`  +
        `<div ><a href=\'mailto:Esraasho3la@gmail.com\' >Esraasho3la@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01000062450 \' >01000062450 </a></div>` + 
        `<div>Graduated from faculty of pharmacy and drug manufacturing  from pharos university</div>` +
        `<div>Tainted at onsi pharmacy
Trained at el feel pharmacy
Trained at ras el teen hospital 
Trained at el andalosia hospital 


</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mina Fouad Sedrak</h4>`  +
        `<div ><a href=\'mailto:minafouad71@gmail.com\' >minafouad71@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01280632388\' >01280632388</a></div>` + 
        `<div>Faculty of acience helwan university 2019</div>` +
        `<div>مينا فؤاد مساعد صيدلي اشتغلت في صيدليات اكتر من سنتين بس كان في تقطعات في النص بسبب الدراسة لكن الان متخرج و عندي جيش في شهر ١</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8085324, lng:30.9938696},
        `<h4> omnia ezzat saad ghoraba</h4>`  +
        `<div ><a href=\'mailto:omniaghoraba22@gmail.com\' >omniaghoraba22@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01282596307\' >01282596307</a></div>` + 
        `<div>graduated from vet medinine 2019</div>` +
        `<div>امنية عزت سعد غرابة 
طبيبة بيطرية 
حديثة التخرج
2000 جنية مصري 
تم التدريب ف مدرية الطب البيطري ف الغربية والمجزر الالي بطنطا</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.9624293, lng:31.350874},
        `<h4>Dalia gamal shehata</h4>`  +
        `<div ><a href=\'mailto:daliaallam1496@gmail.com\' >daliaallam1496@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01207620191\' >01207620191</a></div>` + 
        `<div>Faculty of pharmacy feb2019</div>` +
        `<div>Pharmacist at seif pharmacy
Work as community pharmacy in dr hassan pharmacy
Work as community pharmacy in dr hemmad pharmacy </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.164179, lng:32.72671},
        `<h4>Hoda abd elnaser</h4>`  +
        `<div ><a href=\'mailto:hodanaser329@yahoo.com\' >hodanaser329@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01015491370\' >01015491370</a></div>` + 
        `<div>Bachelor of veteŕinary medicine _2019</div>` +
        `<div>Fresh graduated 
Experience in Engilsh 
Communication 
Course usaid entrepreneurship
First aid course</div>` 
        
        );
        
addMarkerToGroup(group, {lat:24.093433, lng:32.907038},
        `<h4>Ahmed hassan metwally</h4>`  +
        `<div ><a href=\'mailto:A7med.has99@gmail.com \' >A7med.has99@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01156698512\' >01156698512</a></div>` + 
        `<div>Faculty Of Science. June 2017</div>` +
        `<div>Trained in environmental affairs agency
Trained in sukari mine .
Have ICTB certificate from aswan university. 
 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.9050049, lng:31.43488},
        `<h4>Fam safwat</h4>`  +
        `<div ><a href=\'mailto:fammetri@gmail.com\' >fammetri@gmail.com</a></div>` + 
        `<div ><a href=\'tel:+201283313399\' >+201283313399</a></div>` + 
        `<div>صيدلى ٢٠١٩</div>` +
        `<div>Training in astrazenica as medical Rep 
Certification from AEO for First Aids 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Abed Mohamed Tarek </h4>`  +
        `<div ><a href=\'mailto:Abedtarek99@gmail.com \' >Abedtarek99@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01015862117\' >01015862117</a></div>` + 
        `<div>BCS of science graduation date 2017</div>` +
        `<div>Medical Rep now I working in ppg Sanofi
I have a lot of experience which I learned from pervious jobs like solve problem, enthusiasm, creative, have a good vision for the future of the business and the ability to work with others in the future and to be successful in the future. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8044484, lng:30.9937655},
        `<h4>Ismaeil mahdy</h4>`  +
        `<div ><a href=\'mailto:Mahdyshady1@gmail.com\' >Mahdyshady1@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١١٢٠٠٤٧١١٨\' >٠١١٢٠٠٤٧١١٨</a></div>` + 
        `<div>Science 2015</div>` +
        `<div>Medical representative
Basic salary 5000
Area gharbia
3 years experience at adwia company 
Ortho line 
Launching adwitine with 300% ach.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5605221, lng:31.7145928},
        `<h4>Anas Mohammad Ahmad</h4>`  +
        `<div ><a href=\'mailto:Anasmalek86@yahoo.com\' >Anasmalek86@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:+201144183686\' >+201144183686</a></div>` + 
        `<div>Bachelor of science 2010</div>` +
        `<div>مندوب دعاية طبية medical representative
عملت لمدة سنة في احدى شركات الأدوية
ابحث عن عمل لبعض الوقت part time</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5837738, lng:31.5228844},
        `<h4>Hassan Adel Hassan </h4>`  +
        `<div ><a href=\'mailto:hassanyousef14501@gmail.com\' >hassanyousef14501@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01270670839\' >01270670839</a></div>` + 
        `<div>Fresh graduated pharmacist 2019 </div>` +
        `<div>Fresh graduated pharmacist without experience. I know that I'm not professional in all fields as i newly graduated but i can learn anything faster than you think. </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.215645, lng:29.955266},
        `<h4>Moamen saleh</h4>`  +
        `<div ><a href=\'mailto:momensaleh95@yahoo.com\' >momensaleh95@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01023234883\' >01023234883</a></div>` + 
        `<div>Bachelor of science,2012</div>` +
        `<div>Working experience
Sales representative at unity supplies from 2015- till now.
Sales representative at medineeds from 2014-2015.
Academic profile
Master of science,alexandria universty,
Petrochemical diploma , Alexandria university,2013
</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.2410641, lng:29.9935771},
        `<h4>Doha Salem Harera</h4>`  +
        `<div ><a href=\'mailto:Dohasalem27@gmail.com\' >Dohasalem27@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01279214029\' >01279214029</a></div>` + 
        `<div>Faculty of science Alexandria University  ,chemistry department, fresh graduated 2019</div>` +
        `<div> 
Fresh graduated 
Public relation at 3ommar team 
 English Teacher assistant  
Chemistry teacher</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.0621369, lng:31.4024258},
        `<h4>Aya Ali Ebrahim Elhograty</h4>`  +
        `<div ><a href=\'mailto:yoyo.msr@gmail.com\' >yoyo.msr@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01006934900\' >01006934900</a></div>` + 
        `<div>Faculty Of Pharmacy .. Class of 2019</div>` +
        `<div>Trainee at Pharmacy .. summer 2017 and 2018
Very good at using computer skill ( Windows - Word - power point )
Human development sessions about ( setting goals & time management )
Hard worker
Good Negotiation skills
Good Communication skills
Good treatment with agents and work team
Excellent Performance to boss order
Working under stress</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.0864201, lng:31.189176},
        `<h4>Beshoy Nader Boushra </h4>`  +
        `<div ><a href=\'mailto:beshoawad13@gmail.com\' >beshoawad13@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203207818\' >01203207818</a></div>` + 
        `<div>Yet student</div>` +
        `<div>احتاج تدريب ف شركة أدوية انا طالب ف السنة الثالثة كلية علوم جامعة حلوان قسم بيولوجي</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1804124, lng:30.5204159},
        `<h4> Thanaa Mohamed Ahmed Ali</h4>`  +
        `<div ><a href=\'mailto:thanaaahmedali@gmail.com\' >thanaaahmedali@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01092945805\' >01092945805</a></div>` + 
        `<div>B.V.Sc. faculty of veterinary medicine Alexandria University 2013</div>` +
        `<div>Graduate diploma in Hygiene of Meat and meat products 2015.
, Master in Hygiene of Meat and Meat products 2018.
- Working at Mabara and Nabil abd ElSalam pharmacies.
- Working as vet in many veterinary clinics.
- Working as supervisor of poultry farms.</div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.9985786, lng:31.146771},
        `<h4>Basma ahmed moussa</h4>`  +
        `<div ><a href=\'mailto:Basmaelkady5@gmail.com\' >Basmaelkady5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002089499\' >01002089499</a></div>` + 
        `<div>A student in the last year of the Faculty of Science .. Biochemistry and microbiology</div>` +
        `<div>I worked in sales .. I worked as a pharmacist assistant .. I participated in volunteering .. I participated in student activities (details in the cv)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9902649, lng:31.170418},
        `<h4>Nader fathy abd el rhman</h4>`  +
        `<div ><a href=\'mailto:naderfathy15555@gmail.com\' >naderfathy15555@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01221898839\' >01221898839</a></div>` + 
        `<div>Graduated from faculty of science mansoura university</div>` +
        `<div>Im fresh graduated i dont have experience 
My skills english very good 
I can use computer(word-powerpoint)
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.9570538, lng:31.2469158},
        `<h4>Ahmed mashaly</h4>`  +
        `<div ><a href=\'mailto:amashaly22@gmail.com\' >amashaly22@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01068478824\' >01068478824</a></div>` + 
        `<div>2017. Bachlor in pharmacy</div>` +
        `<div>Summer training as medical rep at  eva pharma
Pharmacist at eltarshouby group</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5766624, lng:30.8994818},
        `<h4>Hend Hamdy </h4>`  +
        `<div ><a href=\'mailto:Eyadhend663@gmail.com\' >Eyadhend663@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01009503732\' >01009503732</a></div>` + 
        `<div>Veterinarian</div>` +
        `<div>Medical representatives 
Female
25 years old
El.monofia
Graduated 2017
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4980909, lng:30.9949661},
        `<h4>Hasnaa hassan serag eldin</h4>`  +
        `<div ><a href=\'mailto:hasnaaserag85@yahoo.com\' >hasnaaserag85@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01093728553\' >01093728553</a></div>` + 
        `<div>Bachlory of veterinary medicine 2007</div>` +
        `<div>District manager in delta search for work at pharmaceutical companies &has managerial experience for 3years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.4792865, lng:30.7177425},
        `<h4>hasnaa sholkamy rasekh </h4>`  +
        `<div ><a href=\'mailto:nouraleslam893@gmail.com\' >nouraleslam893@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01148837620\' >01148837620</a></div>` + 
        `<div>faculty of science chemistry and zoology department Minia University 2017-2018</div>` +
        `<div>Computer skills(M.S.Word and power point)   
•Language (Very good in english) 
Interpersonal:
•Negotiation and persuasion ability and fast learner
•Ability to work under pressure in a high efficiency (single or in team worker)
• High communication skills in different levels
 • Leadership and decision making skills </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Hussien Adel Mohammed </h4>`  +
        `<div ><a href=\'mailto:hibrahim1923@gmail.com\' >hibrahim1923@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099987344 \' >01099987344 </a></div>` + 
        `<div>Science 2011</div>` +
        `<div>Medical rep in pharma serv company


Vodafone company Customer service & sales outdoor 

Escs company for oil & gas servics 
</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.4070619, lng:31.2563983},
        `<h4>Ahmed abd elmon'em elagamy</h4>`  +
        `<div ><a href=\'mailto:Ahmed.Ajami@students.Kasralainy.edu.eg\' >Ahmed.Ajami@students.Kasralainy.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01145599648\' >01145599648</a></div>` + 
        `<div>طالب بكلية طب قصر العيني الفرقه الثالثه</div>` +
        `<div>طالب بكلية طب قصر العيني الفرقه الثالثه
ليست هناك خبرة 
عمل لاول مره 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.180956, lng:31.183683},
        `<h4>Abdallah Ahmed Abdallah</h4>`  +
        `<div ><a href=\'mailto:abdo56994307@gmail.com\' >abdo56994307@gmail.com</a></div>` + 
        `<div ><a href=\'tel:00201015757006\' >00201015757006</a></div>` + 
        `<div>Bechelor of pharmacy 2018</div>` +
        `<div>I worked for Biomy pharmcy (cairo)
as pharmacist for 6 monthes

Also I worked for Donia pharmcy 
for 3 monthes</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.0701146, lng:31.1072759},
        `<h4>Mohamed Ahmed Galal</h4>`  +
        `<div ><a href=\'mailto:mg4700781@gmail. com\' >mg4700781@gmail. com</a></div>` + 
        `<div ><a href=\'tel:01149193927\' >01149193927</a></div>` + 
        `<div>bachelor's science faculty of bani suef chemistry specialist with degree very good</div>` +
        `<div>Work in Calcuim carbonate industry for 1 year 
Work in angel yeast for 3 months 
Work as medical rep for 3 months in Nova pharma 
Work as medical rep for 8 months in chemist pharma 
(Gyna/Pedia/Derma) specialists </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.2976966, lng:30.5297852},
        `<h4>Mohammed Mamdouh Zidan</h4>`  +
        `<div ><a href=\'mailto:mhmdzidan959@gmail.com\' >mhmdzidan959@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01097899038\' >01097899038</a></div>` + 
        `<div>بكالوريوس علوم قسم كيمياء وحيوان</div>` +
        `<div>
خريج كلية العلوم قسم كيمياء وحيوان جامعة المنصورة 2015 ابحث عن وظيفة كيميائي او ميديكال ريب 
 </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.7744345, lng:31.4555522},
        `<h4>خلود احمد عبدالرحمن احمد </h4>`  +
        `<div ><a href=\'mailto:Kholoudahmed963@gmail.com\' >Kholoudahmed963@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01142809439\' >01142809439</a></div>` + 
        `<div>كليه صيدله جامعه سوهاج 2018-2019</div>` +
        `<div>خريج كليه صيدله سوهاج 2019 
 ميديكال ريب 3000-4000$
Course of digital marketing  
Course of communication skills  from sohag university 
تدربت في صيدليات فالاجازات الصيفيه 
</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7161334, lng:31.2363833},
        `<h4>Nora saleh ali abdo</h4>`  +
        `<div ><a href=\'mailto:Norasaleh416@yahoo.com\' >Norasaleh416@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01097082563\' >01097082563</a></div>` + 
        `<div>بكالريوس علوم جامعه طنطا 2018</div>` +
        `<div>متدرب في مستشفي 
جيد في للغه الانجليزيه 
يجيد التعامل مع الاخرين 
تقدير جيد جدا 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.6456552, lng:30.8319561},
        `<h4>Aya Sayed Mahmoud</h4>`  +
        `<div ><a href=\'mailto:Aya.sayed2014@yhoo.com\' >Aya.sayed2014@yhoo.com</a></div>` + 
        `<div ><a href=\'tel:01024145516\' >01024145516</a></div>` + 
        `<div> grduated from Faculty of education English department 2017</div>` +
        `<div>I worked in Teba private school for two years and now I,m working in centre for courses </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8197748, lng:31.0071425},
        `<h4>Abdullah alsawaf</h4>`  +
        `<div ><a href=\'mailto:Dr.a.alsawaf@gmail.com \' >Dr.a.alsawaf@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01275180960\' >01275180960</a></div>` + 
        `<div>Since 2010</div>` +
        `<div>District Manager 
شركات الادويه medical Rep
والدعايا الطبيه
Exp/ medical Rep  (5 years)
Exp/District Manager Delta Gharbia  (5 years )</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.5605681, lng:31.6876051},
        `<h4>mohamed abazed</h4>`  +
        `<div ><a href=\'mailto:abazedmohamed59@gmail.com\' >abazedmohamed59@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١١٤٦٤٧٧٩٧٩\' >٠١١٤٦٤٧٧٩٧٩</a></div>` + 
        `<div>طالب كليه العلوم</div>` +
        `<div>مساعد صيدلي لاكتساب الخبرة
ميديكل ريب 
وظائف في المجال الطبي
لا يهم المرتب 
اي توقيت 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4718087, lng:30.974174},
        `<h4>Dina samir abdeltwab mansour</h4>`  +
        `<div ><a href=\'mailto:Dinasamir277@gmail.com\' >Dinasamir277@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01147239007\' >01147239007</a></div>` + 
        `<div>Bachelor degree of science 2019</div>` +
        `<div>eperience one year in pharmacy
Trainning in water and sewage company
Work in analysis lab 

</div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.0433351, lng:31.3177846},
        `<h4>Reham ashraf azmy</h4>`  +
        `<div ><a href=\'mailto:rehaaamashrafff@gmail.com\' >rehaaamashrafff@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01152252449\' >01152252449</a></div>` + 
        `<div>Faculty of science 2019</div>` +
        `<div>-Gpa: 3
-Training 3 months in pharmacy 
-Cours icdl 
-Training 3 months in lab 

interested in meeting new people and talking with them 
Drive cars 
And acheive my goals 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1424501, lng:32.7677959},
        `<h4>Ahmed mansour saeed</h4>`  +
        `<div ><a href=\'mailto:ahmedmansour5599@gmail.com\' >ahmedmansour5599@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01118565787\' >01118565787</a></div>` + 
        `<div>خريج كلية العلوم سنة 2019</div>` +
        `<div>حديث التخرج Fresh  .المؤهل بكاليوريوس الكيمياء والميكروبيولجى كلية العلوم جامعة جنوب الوادى تقدير عام جيد ج دا  سنة 2019-اسكن فى مدينة قنا  - </div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1651025, lng:32.7158493},
        `<h4>Alaa Ahmed Ramadan</h4>`  +
        `<div ><a href=\'mailto:alaaramadan725@gmail.com\' >alaaramadan725@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01019760760\' >01019760760</a></div>` + 
        `<div>Pharmacist ....2019</div>` +
        `<div>_Trainer at shefaa orman in 2018
_Worked at Amira's pharmacy from july to September 2018
_Trainer in General Hospinal Qena in summer training 2018
_Trainer at Qena Oncology center 'summer training in 2017'
_Trainer at Abdeen pharmacy from may to july in 2017
_had succssefully trained soft skill courses online in 2017.&.2016
_First Aid course in 2017&2016</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.5010548, lng:31.1985902},
        `<h4>Sara Amin Ebrahim </h4>`  +
        `<div ><a href=\'mailto:chemsaraamin@gmail.com\' >chemsaraamin@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01093354980\' >01093354980</a></div>` + 
        `<div>Bachelor of science </div>` +
        `<div>Medical representative for fresh graduated 
Faculty of science with good presentation skills </div>` 
        
        );
        
addMarkerToGroup(group, {lat:27.180956, lng:31.183683},
        `<h4>Abanoub mandouh khiralla</h4>`  +
        `<div ><a href=\'mailto:bebomamdouh88@gmail.com\' >bebomamdouh88@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01281124646\' >01281124646</a></div>` + 
        `<div>2018 science</div>` +
        `<div>Medical rep worked in company top pharma and medizen pharm.       And worked in assuit south.                    And worked on surgery diabetic and ortho and pediatric and neuro</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.7659621, lng:31.5071653},
        `<h4>Mahmoud mohamed khalifa</h4>`  +
        `<div ><a href=\'mailto:Mahmoudkhalifap94@gmail.com\' >Mahmoudkhalifap94@gmail.com</a></div>` + 
        `<div ><a href=\'tel:٠١١٥٤١٣٦٢٠٠\' >٠١١٥٤١٣٦٢٠٠</a></div>` + 
        `<div> Bach. Pharmacy assuit university.  2016</div>` +
        `<div>Pharmacist in international misr hospital. 
Pharmacist in dar-eltab hospital
Pharmacist in islam fatahy pharmacies. 
Ph. In  international el-haya hospital.  </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.2960265, lng:30.9781317},
        `<h4>محمد عاطف عبد العزيز مليحة</h4>`  +
        `<div ><a href=\'mailto:ninomeleha7@gmail.com\' >ninomeleha7@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01097472732\' >01097472732</a></div>` + 
        `<div>كليه العلوم جامعه المنوفيه 2015</div>` +
        `<div>Medical Representative
Salary 5000
Area.Menofia 2
Experience. 3months as medical representative in Nova company</div>` 
        
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
        
addMarkerToGroup(group, {lat:25.6201217, lng:32.5436359},
        `<h4>Randa Abdelbasset Hassan</h4>`  +
        `<div ><a href=\'mailto:Randaabdelbasset22@gmail.com \' >Randaabdelbasset22@gmail.com </a></div>` + 
        `<div ><a href=\'tel:0013 0981343 \' >0013 0981343 </a></div>` + 
        `<div>Faculty of pharmacy, Assiut University, graduation year 2019</div>` +
        `<div>Time management, work under stress, solving the problem, planning, sales, marketing</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mahmoud sobhy kofory</h4>`  +
        `<div ><a href=\'mailto:Mahmoud.kofory21@gmail.com\' >Mahmoud.kofory21@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01093794433\' >01093794433</a></div>` + 
        `<div>Neonatal resident</div>` +
        `<div>General practitioner for 3years .... emergency Management for 1year .....now resident Neonatal at dar el shefa in cairo
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.7752242, lng:31.4978639},
        `<h4>Esraa Hany Abd elfattah Mohamed</h4>`  +
        `<div ><a href=\'mailto:esraahany1212@gmail.com\' >esraahany1212@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01013352129\' >01013352129</a></div>` + 
        `<div>Graduated from Sohag Veterinary medicine 2019</div>` +
        `<div>شركه ادويه pharma لخريجه طب بيطري 2019
راتب لا يقل عن 4000
I had trained & worked in El NOR veterinary clinic for 1 year</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7183542, lng:31.794639},
        `<h4>Abd elrahman samir</h4>`  +
        `<div ><a href=\'mailto:Samirabdelrahman85@gmail.com\' >Samirabdelrahman85@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01065095966\' >01065095966</a></div>` + 
        `<div>بكالريوس صيدله سنه التخرج 2019</div>` +
        `<div>كورس otc 
مؤتمر شركه الرواد 
تدريب ف الصيدليه
خبره فى ال community pharmacy
</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.074409, lng:31.097848},
        `<h4>Alaa Alam </h4>`  +
        `<div ><a href=\'mailto:Ama201290@yahoo.com \' >Ama201290@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01112095058 \' >01112095058 </a></div>` + 
        `<div>Faculty of arts english departement 2011</div>` +
        `<div>I worked in tiba feed company
Elmasria company also for medicine
I worked also in global fed international company
I worked in True pharma Company
All in banisuief area </div>` 
        
        );
        
addMarkerToGroup(group, {lat:25.9923931, lng:32.8146458},
        `<h4>Beshoy Romany shafik </h4>`  +
        `<div ><a href=\'mailto:Beshoy9524@gmail.com\' >Beshoy9524@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01208232019\' >01208232019</a></div>` + 
        `<div>بكالوريوس علوم 2019</div>` +
        `<div>التدريب في مستشفي قفط المركزي 
التدريب في مستشفي قنا العام 
التدريب في معمل د/ عبدالرازق للتحاليل الطبيه 
التدريب في صيدليه الفادي</div>` 
        
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
        
}
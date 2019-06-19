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
        
addMarkerToGroup(group, {lat:29.4145043, lng:30.8621407},
        `<h4>Demian Boshra abd ElMalk wasef</h4>`  +
        `<div ><a href=\'mailto:demianboshra@gmail.com\' >demianboshra@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01097269100\' >01097269100</a></div>` + 
        `<div>License arts</div>` +
        `<div>خدمة عملاء وصراف في شركة تنمية لتمويل المشروعات الصغيرة
اعمال تجاريه حرة </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.8797449, lng:31.2555072},
        `<h4>eman ahmed elsaid ahmed</h4>`  +
        `<div ><a href=\'mailto:ea7694745@gmail. com \' >ea7694745@gmail. com </a></div>` + 
        `<div ><a href=\'tel:01013456079\' >01013456079</a></div>` + 
        `<div>graduted from college of pharmacy 2019</div>` +
        `<div>I'am fresh graduate. search for traning or jop in company like sanofy. I have trained in factory, and also have trained in pharmacy. </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7924177, lng:31.9065718},
        `<h4>Walaa Ibrahim Ahmed Thabet</h4>`  +
        `<div ><a href=\'mailto:Walaa14219@hu.edu.eg\' >Walaa14219@hu.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01014420173\' >01014420173</a></div>` + 
        `<div>Faculty of pharmacy 2019 </div>` +
        `<div>Fresh graduated 
GPA : 3.4
Trained in misr pharmacies 
Future industry for pharmacutical products In Badr city
Trianed in ElWarq hospital 
Member at EPESF</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.4422903, lng:30.9666586},
        `<h4>Hager saeed wheeb </h4>`  +
        `<div ><a href=\'mailto:hagerwheeb198 \' >hagerwheeb198 </a></div>` + 
        `<div ><a href=\'tel:01095124976\' >01095124976</a></div>` + 
        `<div>بكالوريوس علوم مايو ٢٠١٩</div>` +
        `<div>
خريج كليه علوم ٢٠١٩ ،حاصله علي تدريب في شركه بترول طنطا ،مركز البحوث بالدقي ،وشركه المياه والصرف الصحي بمنوف </div>` 
        
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
        
addMarkerToGroup(group, {lat:28.6456552, lng:30.8319561},
        `<h4>Aya Sayed Mahmoud</h4>`  +
        `<div ><a href=\'mailto:Aya.sayed2014@yhoo.com\' >Aya.sayed2014@yhoo.com</a></div>` + 
        `<div ><a href=\'tel:01024145516\' >01024145516</a></div>` + 
        `<div> grduated from Faculty of education English department 2017</div>` +
        `<div>I worked in Teba private school for two years and now I,m working in centre for courses </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.5805352, lng:31.5119371},
        `<h4>Ebtehal Elrefaay</h4>`  +
        `<div ><a href=\'mailto:Ebtehal.Elrefaay@gmail.com\' >Ebtehal.Elrefaay@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099802901\' >01099802901</a></div>` + 
        `<div>Bsc. faculty of veterinary medicine zagazig university</div>` +
        `<div>-Medical Rep. intern, Visit 90 pharmacy in 2 weeks.                                     summer 2018
-Trainee at Elwey pharmacy.  February 2018.                                                  </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.5957898, lng:32.2584082},
        `<h4>Abdallah</h4>`  +
        `<div ><a href=\'mailto:abdallah.m.mohamed2@gmail.com\' >abdallah.m.mohamed2@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01069938095\' >01069938095</a></div>` + 
        `<div>Science of chemistry </div>` +
        `<div>6 months as med sales rep
2 years as a pharmacy assistant
6 month as productive engineering 
 </div>` 
        
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
        
addMarkerToGroup(group, {lat:28.7404895, lng:30.7476677},
        `<h4>Ahmed shaban</h4>`  +
        `<div ><a href=\'mailto:aiadahmed1122@gmail.com\' >aiadahmed1122@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022616128\' >01022616128</a></div>` + 
        `<div>ثانويه عامه  وطالب بجامعه خاصه حاليا </div>` +
        `<div>خبره كبيره اكثر من 8 سنوات متاح للعمل شيفت نايت او خدمه ليليه في ااكتوبر او زايد مدير شيفت سابقا </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.8797449, lng:31.2555072},
        `<h4>eman ahmed elsaid ahmed</h4>`  +
        `<div ><a href=\'mailto:ea769475@gmail. com\' >ea769475@gmail. com</a></div>` + 
        `<div ><a href=\'tel:01013456079\' >01013456079</a></div>` + 
        `<div>graduated from college of pharmacy2019</div>` +
        `<div>I'am fresh graduate. search for traning or jop in company like sanofy. I have trained in factory, and also have trained in pharmacy. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.8424559, lng:31.3336092},
        `<h4>Amin elhawary</h4>`  +
        `<div ><a href=\'mailto:amin.ali259@gmail.com\' >amin.ali259@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01027226327\' >01027226327</a></div>` + 
        `<div>Pharmacy_2012</div>` +
        `<div>Purchasing _ replenishment_operation
Contracting _marketing_sales analysis</div>` 
        
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
        
addMarkerToGroup(group, {lat:26.556952, lng:31.694785},
        `<h4>Abodaif ahmed</h4>`  +
        `<div ><a href=\'mailto:drahmedabodaif@gmail.com\' >drahmedabodaif@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115901230\' >01115901230</a></div>` + 
        `<div>صيدلة دفعة ٢٠١٩</div>` +
        `<div>Fresh graduated pharmacist
trained in community pharmacy 
And in astrazenca company</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mina Fouad Sedrak</h4>`  +
        `<div ><a href=\'mailto:minafouad71@gmail.com\' >minafouad71@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01280632388\' >01280632388</a></div>` + 
        `<div>Faculty of acience helwan university 2019</div>` +
        `<div>مينا فؤاد مساعد صيدلي اشتغلت في صيدليات اكتر من سنتين بس كان في تقطعات في النص بسبب الدراسة لكن الان متخرج و عندي جيش في شهر ١</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.4565117, lng:31.448248},
        `<h4>Abdelwahab sobhi abdelwahab </h4>`  +
        `<div ><a href=\'mailto:Abdelwahabsobhi94@gmail.com \' >Abdelwahabsobhi94@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01022495403\' >01022495403</a></div>` + 
        `<div>Bachelor of pharmacy in 2017</div>` +
        `<div>Badr sobhi pharmacy 
Pharmacist at the ministry of health 
Training in AstraZeneca </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1401183, lng:33.8300716},
        `<h4>Reem Mahmoud Ramadan</h4>`  +
        `<div ><a href=\'mailto:reemhamuda640@gmail.com\' >reemhamuda640@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01005228570\' >01005228570</a></div>` + 
        `<div>Science biochemistry Ain shams 2010</div>` +
        `<div>Medical rep. at medicine company 
Salary 4000 L.E.
Working for Unipharma for about 5 years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:26.1569423, lng:32.7271043},
        `<h4>Lolla Albeir Ishak</h4>`  +
        `<div ><a href=\'mailto:lollaalbeir20@gmail.com\' >lollaalbeir20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01207958783\' >01207958783</a></div>` + 
        `<div>Still student</div>` +
        `<div>I have good  information about drugs , marketing and how to persuade the clients with the product. </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1409971, lng:31.3587098},
        `<h4>Ahmed Samuel </h4>`  +
        `<div ><a href=\'mailto:Ahmed1997samy@Gmail.com\' >Ahmed1997samy@Gmail.com</a></div>` + 
        `<div ><a href=\'tel:01117657337\' >01117657337</a></div>` + 
        `<div>Graduated from Faculty of Science 2019</div>` +
        `<div>كليه علوم قسم كمياء حديث التخرج ارغب العمل 
في أي مجال من مجالات الكمياء في الشركات أو المصانع اي شغل لا يرغب الخبرة حتى تكتسب خبرة في سوق العمل </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.4565117, lng:31.448248},
        `<h4>Abdelwahab sobhi abdelwahab </h4>`  +
        `<div ><a href=\'mailto:Abdelwahabsobhi94@gmail.com \' >Abdelwahabsobhi94@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01022495403\' >01022495403</a></div>` + 
        `<div>Bachelor of pharmacy in 2017</div>` +
        `<div>Badr sobhi pharmacy 
Pharmacist at the ministry of health 
Training in AstraZeneca </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.552581, lng:31.009035},
        `<h4>Mahmoud Diab</h4>`  +
        `<div ><a href=\'mailto:diab1794@yahoo.com\' >diab1794@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01004958363\' >01004958363</a></div>` + 
        `<div>Faculty of pharmacy future university in Egypt 2017 </div>` +
        `<div>مندوب دعايه طبيه medical representative 
Have experience 1year and half need full time job </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.0261588, lng:30.4675444},
        `<h4>Farah ahmed fahmy,,,,,, in behera _damanhour</h4>`  +
        `<div ><a href=\'mailto:Memomoon96@yahoo.com\' >Memomoon96@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01096706744\' >01096706744</a></div>` + 
        `<div>Graduated from the Faculty of Science in 2018</div>` +
        `<div>Training in the general hospital ,,,,
 First aid course in the Faculty of Science, ,,, Worked in voluntary work Orman Society ,,,, Worked in a laboratory analysis in Damanhour</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.587676, lng:31.501997},
        `<h4>عبد الرحمن صفوت احمد</h4>`  +
        `<div ><a href=\'mailto:abdelrahmansafwat20@yahoo.com \' >abdelrahmansafwat20@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01110321335\' >01110321335</a></div>` + 
        `<div>سنه خمسه صيدله</div>` +
        `<div>محتاج شغل في نطاق الزقازيق في صيدليه  ..........................        ........... </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1113334, lng:31.3200278},
        `<h4>Dr Moataz</h4>`  +
        `<div ><a href=\'mailto:moamoa729@gmail.com\' >moamoa729@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01094923468\' >01094923468</a></div>` + 
        `<div>صيدله 2019</div>` +
        `<div>Community pharmacies. Quality assurance department in pharmacy school. Formal representative for co-workers. </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.9640128, lng:30.9337077},
        `<h4> Mariam hassan</h4>`  +
        `<div ><a href=\'mailto:Mariamhassanh92@gmail.com\' >Mariamhassanh92@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01099645249\' >01099645249</a></div>` + 
        `<div>طالبه بالسنه الرابعه كليه الصيدله جامعه مصر</div>` +
        `<div>ليس لدي خبرات ولكن احب مجال ال cosmatics من حيث تركباته ومجالات natural plants وتأثيراتها واحب مجال ال biotechnology واريد انا اعمل به </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7795072, lng:30.9848083},
        `<h4>محمد جمال رمضام</h4>`  +
        `<div ><a href=\'mailto:mgr545454@gmail.com\' >mgr545454@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01096399458\' >01096399458</a></div>` + 
        `<div>بكالوريوس صيدلة جامعة طنطا</div>` +
        `<div>صيدلي بصيدلبات دوائي 7/2018الى 10/2018
صيدلي بصيدليات سيف7/2016الى 10/2016</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Shimaa adel sayed </h4>`  +
        `<div ><a href=\'mailto:Shimaaadel784@gmail.com\' >Shimaaadel784@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01115779004\' >01115779004</a></div>` + 
        `<div>Bachelor of pharmaceutical science (2017)</div>` +
        `<div>I have been working as a medical representative at Eipico for 18 months </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4662174, lng:31.1238112},
        `<h4>Amany Nabil Saad</h4>`  +
        `<div ><a href=\'mailto:dr.amanyismail@gmail.com\' >dr.amanyismail@gmail.com</a></div>` + 
        `<div ><a href=\'tel:+201002181327\' >+201002181327</a></div>` + 
        `<div>Vetrinary medicine 2017</div>` +
        `<div>Worked at alandalous medical company from jan 2018 till dec 2018 
 Workes at borg medical industry from april 2019 till now</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.5939014, lng:31.5121985},
        `<h4>Louay emad mahmoud </h4>`  +
        `<div ><a href=\'mailto:louayemad08@gmail.com\' >louayemad08@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01003968567\' >01003968567</a></div>` + 
        `<div>	Faculty of Science, Zagazig University Dept. of chemistry and physics, May 2018  </div>` +
        `<div>	worked as medical representative at Panacea pharmaceutical company from 1
7
2018 </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.137661, lng:31.2908665},
        `<h4>Amany refaat ali</h4>`  +
        `<div ><a href=\'mailto:Refaatamany6@gmail.com\' >Refaatamany6@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01127996288\' >01127996288</a></div>` + 
        `<div>Bachelor of science at2019</div>` +
        `<div>I have alittle experience in medical as i worked before as pharmacist 's assistant for 3 months.also i was training in a medical lab for 4 months and worked in lab with adoctor for 3 months . And worked as ateacher before . I want to learn a new thing in every holiday i taken from my collage .</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\'mailto:hota_2026@yahoo.com\' >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01060129791\' >01060129791</a></div>` + 
        `<div>Bacalor ,2014</div>` +
        `<div> I have experience in all aspects of pharmacy more than 7 years ,l was worked at a company of drugs for part of time  ( pharma overseas)and l acquired experience in this field.</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7514921, lng:31.021764},
        `<h4>Mohamed nasr elfiky </h4>`  +
        `<div ><a href=\'mailto: Mohamedef183@gmail.com\' > Mohamedef183@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01113901600\' >01113901600</a></div>` + 
        `<div>صيدله /2019</div>` +
        `<div>I have a big back ground about sales and marketing and customer convince I have trained to utopia company for two months 
Learned how to make call to doctor and take feed back from pharmacist. </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.2999906, lng:30.8332759},
        `<h4>Abdelrahman Omar</h4>`  +
        `<div ><a href=\'mailto:abdelrahmanomar2295@gmail.com\' >abdelrahmanomar2295@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01129658654\' >01129658654</a></div>` + 
        `<div>Bsc in science 2017 with excellent with honor</div>` +
        `<div>Medical representative at uni pharma
Quality control engineer at geo egypt for soil investigation and QC </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1404359, lng:31.2384839},
        `<h4>Maha Mostafa ahmed</h4>`  +
        `<div ><a href=\'mailto:MahaMostafa21@gmail.com\' >MahaMostafa21@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01129711190\' >01129711190</a></div>` + 
        `<div>2019 faculty of science , microbiology and chemistry department </div>` +
        `<div>Have an experience in  pharmacy'work,  work as assistant for 2 years 
Have an experience in laboratory,  work for 1 year 
Work as Medical Rep in MG pharm for 2 years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.4254957, lng:31.3576517},
        `<h4>عمر محروس محمد حسن علي </h4>`  +
        `<div ><a href=\'mailto:a.elnagar3094@su.edu.eg\' >a.elnagar3094@su.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01093098461\' >01093098461</a></div>` + 
        `<div>طالب بكليه الصيدله الفرقه ٣</div>` +
        `<div>انا طالب بكليه الصيدله..... ليفل ٣.......بتدرب في صيدليه منذ سنتين... وانا الان لدي من القدره والخبره للقيام بشيفت في صيدليه...... أنا من الشرقيه مركز منيا القمح </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.880878, lng:31.292957},
        `<h4>Marina mansour gad</h4>`  +
        `<div ><a href=\'mailto:Marinagad92@yahoo.com \' >Marinagad92@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01287194808\' >01287194808</a></div>` + 
        `<div>Faculty of pharmacy cairo university 2014</div>` +
        `<div>Medical education or medical representative  in a pharmaceutical company 
Area helwan or maadi</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7575667, lng:30.4762888},
        `<h4>Mohamed Fathallah Mostafa </h4>`  +
        `<div ><a href=\'mailto:mohamefathalla579@gmail.com\' >mohamefathalla579@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01158598223/01061198961\' >01158598223/01061198961</a></div>` + 
        `<div>Bachelor of Science.   Graduate2019</div>` +
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Mahmoud khattab</h4>`  +
        `<div ><a href=\'mailto:mahamoudkhattab210@gmail.com\' >mahamoudkhattab210@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01016181201\' >01016181201</a></div>` + 
        `<div>Fuculty of science 2019</div>` +
        `<div>خريج سنة 2019  اجيد العمل علي الحاسوب والإنترنت أجيد العمل تحت ضغط وقادر علي مواجهه الكثسر من التحديات والعملع علي رفع شأن المكان واجيد العمل في تيم جماعي حيث استطيع التقدم والعمل في جماعة .
شكرا </div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.4476469, lng:31.6914223},
        `<h4>ibrahim smysem</h4>`  +
        `<div ><a href=\'mailto:Medicalrepibrahim@gmail.com \' >Medicalrepibrahim@gmail.com </a></div>` + 
        `<div ><a href=\'tel:+201028251523\' >+201028251523</a></div>` + 
        `<div>BSc in biological sciences 2007 </div>` +
        `<div>Sales Rep in various companies from 2003 to 2012
Senior medical Rep from 2012 to 2018in well established  companies </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.0738067, lng:31.1110982},
        `<h4>Essam Ramadan Mahmoud </h4>`  +
        `<div ><a href=\'mailto:Essam14shika@gmail.com \' >Essam14shika@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01147486262 \' >01147486262 </a></div>` + 
        `<div>Science 2014</div>` +
        `<div>Medizen pharmaceutical 1/2018 till now
Unipharma 12/2016 to 12/2017
Prof. Assistant in air defence college </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.5010548, lng:31.1985902},
        `<h4>Sara Amin Ebrahim </h4>`  +
        `<div ><a href=\'mailto:chemsaraamin@gmail.com\' >chemsaraamin@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01093354980\' >01093354980</a></div>` + 
        `<div>Bachelor of science </div>` +
        `<div>Medical representative for fresh graduated 
Faculty of science with good presentation skills </div>` 
        
        );
        
addMarkerToGroup(group, {lat:29.309949, lng:30.841804},
        `<h4>Mahmoud Ahmed fathy</h4>`  +
        `<div ><a href=\'mailto:hota_2026@yahoo.com\' >hota_2026@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01060129791\' >01060129791</a></div>` + 
        `<div>2014,bacalor</div>` +
        `<div>ابحث عن وظيفة ف سلسلة ادوية من السلاسل الكبري ، خبرة اكثر من 7 سنوات ف مجال الصيدليات ،اشتغلت في شركات ادوية مثل فارمااوفرسيز واكتسبت خبرة ف هذا المجال ولدي خبرة في مايختص الادوية والصيدليات من الادارة  والطلبيات والادوية </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1338556, lng:31.3314818},
        `<h4>Mohamed Ali </h4>`  +
        `<div ><a href=\'mailto:mohamed.elatroush77@gmail.com\' >mohamed.elatroush77@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01205030122\' >01205030122</a></div>` + 
        `<div>Agriculture science 2015</div>` +
        `<div>7 months at Master care company
at sales and medical rep, dermatology and orthopedic and medical knowledge of cosmo medical products hair and skin. </div>` 
        
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
        
addMarkerToGroup(group, {lat:25.912143, lng:32.7646079},
        `<h4>Mohamed Abd elhamed Abou elmagd Elmasry </h4>`  +
        `<div ><a href=\'mailto:mmasry069@gmail.com\' >mmasry069@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01153547648\' >01153547648</a></div>` + 
        `<div>Faculty of pharmacy Assiut University</div>` +
        `<div>صيدلي خريج 2018 ابحث عن شغل بساعة محترمة
خبرة سنتين خبرة سنة ف صيدليات سيف </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7735765, lng:31.2634407},
        `<h4>Yasmin Elmogy</h4>`  +
        `<div ><a href=\'mailto:Ahmedelmogy052@gmail.com\' >Ahmedelmogy052@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01007141050\' >01007141050</a></div>` + 
        `<div>Frishly graduated student from faculty of vetrinary medicine zagazige university 2019</div>` +
        `<div>Very good medical back ground, speaking and writing english fluently,strong and fast ability to become learned and to apply general rules to specific problems to produce answers that make sense, Good communication skills, Ability to establish effective working relationships with people at all levels,well versed in computer pakages word and editing softwares.</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.1363247, lng:30.1312604},
        `<h4>Mahmoud Elsayed Abd Elaziz Elshaer</h4>`  +
        `<div ><a href=\'mailto:Melshaaeer29@gmail.com\' >Melshaaeer29@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01287989380\' >01287989380</a></div>` + 
        `<div>P.of.science alex uni</div>` +
        `<div>Work as M.rep at bio cure pharm from 4/2018 to 12/2018
M.rep at medical group pharm from 1/2019 to 6/2019
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Noha Hesham</h4>`  +
        `<div ><a href=\'mailto:noha.hesham.hanafi97#gmail.com\' >noha.hesham.hanafi97#gmail.com</a></div>` + 
        `<div ><a href=\'tel:01141618084\' >01141618084</a></div>` + 
        `<div>2020 faculty of pharmacy ,cairo university .. fourth year</div>` +
        `<div>Trainee at seif pharmacies
Trainee at Abo elRish hospital of cairo university
Trainee at Dr.ibrahim pharmacy - hadayk al maadi</div>` 
        
        );
        
addMarkerToGroup(group, {lat:28.9683812, lng:30.9302843},
        `<h4>shahd bahgt ahmed </h4>`  +
        `<div ><a href=\'mailto:shahd_bahgt@yahoo.com\' >shahd_bahgt@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01124629160\' >01124629160</a></div>` + 
        `<div>كلية العلوم 2016 </div>` +
        `<div>كيميائي او مدرس كيميا او ميديكال ريب او اي مراقب جودة درست ف كلية العلوم ومعي دبلومة كيميا حيوية وتدربت ف معهد بحوث البترول ف مدينة نصروشركة المياة والصرف الصحي ببني سويف وحصلت ع المركز الأول ف مشروع التخرج  ومعامل تحاليل واود العمل ف مصنع او معمل </div>` 
        
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
        
addMarkerToGroup(group, {lat:31.0885602, lng:31.4127329},
        `<h4>   Aya Hamed Ahmed Abd elmoiem</h4>`  +
        `<div ><a href=\'mailto:ayahammed155@gmail.com\' >ayahammed155@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002499364\' >01002499364</a></div>` + 
        `<div>Bachelore in vetrinary medicine  Mansoura university. 2018</div>` +
        `<div>I have worked for 6 months in Ronesca company in nutrtional line in KSA market. </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.9385016, lng:31.2842733},
        `<h4>Ayatullah Ahmed</h4>`  +
        `<div ><a href=\'mailto:ayatallhahmed@gmail.com\' >ayatallhahmed@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01143071751 \' >01143071751 </a></div>` + 
        `<div>بكالوريوس علوم كمسترى و بيوكمسرتى </div>` +
        `<div>Medical rep in Proact Astrazeneca Helwan area for 1 year 
Medical rep in beauty and beyond for 4 months 
</div>` 
        
        );
        
addMarkerToGroup(group, {lat:31.10457, lng:29.7819054},
        `<h4>Aml Mahmoud </h4>`  +
        `<div ><a href=\'mailto:amlmahmoud2017@gmail.com \' >amlmahmoud2017@gmail.com </a></div>` + 
        `<div ><a href=\'tel:01285253867\' >01285253867</a></div>` + 
        `<div>Faculty of science /2017</div>` +
        `<div>-Worked as meaical rep at macro group for 9 monthes
-training at mahfouz pharmacies for 2 months </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.4980909, lng:30.9949661},
        `<h4>Hasnaa hassan serag eldin</h4>`  +
        `<div ><a href=\'mailto:hasnaaserag85@yahoo.com\' >hasnaaserag85@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01093728553\' >01093728553</a></div>` + 
        `<div>Bachlory of veterinary medicine 2007</div>` +
        `<div>District manager in delta search for work at pharmaceutical companies &has managerial experience for 3years</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7924177, lng:31.9065718},
        `<h4>Walaa ibrahim ahmed thabet</h4>`  +
        `<div ><a href=\'mailto:walaa14219@hu.edu.eg\' >walaa14219@hu.edu.eg</a></div>` + 
        `<div ><a href=\'tel:01014420173\' >01014420173</a></div>` + 
        `<div>Faculty of pharmacy 2019</div>` +
        `<div>Fresh graduated 2019
GPA : 3.4
Trained in Misr pharmacies
Trained in ElWaraq hospital 
Trained in future for pharmaceutical industries</div>` 
        
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
        `<h4>Bedoor farid elkarashy </h4>`  +
        `<div ><a href=\'mailto:Bedoor .farid @yahoo.com\' >Bedoor .farid @yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01116015259\' >01116015259</a></div>` + 
        `<div> Pharmacist</div>` +
        `<div> Training and working in pharmacy 
Training in drug information center 
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
        
addMarkerToGroup(group, {lat:31.2214863, lng:29.9315899},
        `<h4>Mina Onsy</h4>`  +
        `<div ><a href=\'mailto:minaonsy20@gmail.com\' >minaonsy20@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284989571\' >01284989571</a></div>` + 
        `<div>Pharmacy - 2019</div>` +
        `<div>Pharmacy Graduate 2019
Seeking a medical rep. Vacant in Alex Center
Already have an experience in this field </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1402376, lng:31.3543418},
        `<h4>اندرو مجدى مترى</h4>`  +
        `<div ><a href=\'mailto:magdyandro874@gmail.com\' >magdyandro874@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01022691233\' >01022691233</a></div>` + 
        `<div>بكالريوس نظم معلومات اداريه 2010</div>` +
        `<div>عملت بشركة العربى فارما جروب لتجارة وتوزيع الادوية من مارس 2013 الى مارس 2016 
عملت بشركة فارما بروفت للادوية من مارس 2016 مايو 2017 
اعمل الان بشركة سوفيكو فارم للادوية </div>` 
        
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
        
addMarkerToGroup(group, {lat:29.8345691, lng:31.2516686},
        `<h4>ahmed ramadan ebrahem mohamed</h4>`  +
        `<div ><a href=\'mailto:eldakamya6@gmail.com\' >eldakamya6@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01012040137\' >01012040137</a></div>` + 
        `<div>A student in the second class at faculty of science</div>` +
        `<div>خبره فى مجال التحاليل الطبيه و يوجد بعض الخبره عن الادويه ومجالاتها . خبره فى التسويق بكل انواعه سواء الكترونى او اى كان لباقه فى الحديث . خبره فى مجالات الحاسب مثل الورود والاكسيل والبور بوينت والانترنت خبره فى تسويق الادويه للدكاتره وترشيحها لهم بطريقه مبسطه وجذابه . العمل اوقات طويله .العمل تحت ضغط </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.838783, lng:30.8659089},
        `<h4>Esraa Abdo</h4>`  +
        `<div ><a href=\'mailto:Esraaabdo619@gmail.com\' >Esraaabdo619@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01284123496\' >01284123496</a></div>` + 
        `<div>Veterinary medicine /2019</div>` +
        `<div>Trainer at a pharmacy
Trainer at a pet clinic
HR online course
English course</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.5939014, lng:31.5121985},
        `<h4>Louay emad mahmoud </h4>`  +
        `<div ><a href=\'mailto:louayemad08@gmail.com\' >louayemad08@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01003968567\' >01003968567</a></div>` + 
        `<div>	Faculty of Science, Zagazig University Dept. of chemistry and physics, May 2018  </div>` +
        `<div>	worked as medical representative at Panacea pharmaceutical company from 1
7
2018 </div>` 
        
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
        
addMarkerToGroup(group, {lat:30.1435828, lng:31.2836067},
        `<h4>Ahmed mamdoh sobhy abd elmalek</h4>`  +
        `<div ><a href=\'mailto:ahmedmamdoh169@gmail.com\' >ahmedmamdoh169@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01123081932\' >01123081932</a></div>` + 
        `<div>Bachalor degree of veterinary medicine banha university 2018</div>` +
        `<div>Worked as medical representative at global pharmaceuticals group from 11/2018 to 4/2019</div>` 
        
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
        
addMarkerToGroup(group, {lat:31.0885602, lng:31.4127329},
        `<h4>   Aya Hamed Ahmed Abd elmoiem</h4>`  +
        `<div ><a href=\'mailto:ayahammed155@gmail.com\' >ayahammed155@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002499364\' >01002499364</a></div>` + 
        `<div>Bachelore in vetrinary medicine 2018</div>` +
        `<div>I have worked for 6 months in Ronesca company in nutrtional line in KSA market. </div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.7924177, lng:31.9065718},
        `<h4>Walaa Ibrahim Ahmed Thabet</h4>`  +
        `<div ><a href=\'mailto:walaa14219@hu.edu.eg.com\' >walaa14219@hu.edu.eg.com</a></div>` + 
        `<div ><a href=\'tel:01014420173\' >01014420173</a></div>` + 
        `<div>Faculty of pharmacy and drug technology </div>` +
        `<div>Fresh graduated 2019
GPA : 3.4
Trained in Misr pharmacies
Trained in ElWaraq hospital 
Trained in future for pharmaceutical industries</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.5341098, lng:31.2896372},
        `<h4>Mohamed Hassan abd elbaqy</h4>`  +
        `<div ><a href=\'mailto:Hmohammed455@yahoo.com \' >Hmohammed455@yahoo.com </a></div>` + 
        `<div ><a href=\'tel:01100331758 \' >01100331758 </a></div>` + 
        `<div>بكالوريوس علوم  قسم الجيوكمياء سنة التخرج 2016</div>` +
        `<div>Medical Representative at Trust Pharma. From 7. 2016 to4. 2017
Medical Representative at Prolife Pharma.. From 5. 2017 to 8. 2018</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.0864201, lng:31.189176},
        `<h4>Beshoy Nader Boushra </h4>`  +
        `<div ><a href=\'mailto:beshoawad13@gmail.com\' >beshoawad13@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203207818\' >01203207818</a></div>` + 
        `<div>Yet student</div>` +
        `<div>احتاج تدريب ف شركة أدوية انا طالب ف السنة الثالثة كلية علوم جامعة حلوان قسم بيولوجي</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.7858599, lng:31.0074597},
        `<h4>Manal Anwar Mohammed</h4>`  +
        `<div ><a href=\'mailto:manalanwar14695@gmail.com\' >manalanwar14695@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01203592432\' >01203592432</a></div>` + 
        `<div>Veterinary medicine Cairo University 2018</div>` +
        `<div>Start as a medical rep.in credo pharma from August 2018 and pleased to be the best achievee.</div>` 
        
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
        
addMarkerToGroup(group, {lat:30.07708, lng:31.285909},
        `<h4>Amin waheed amin</h4>`  +
        `<div ><a href=\'mailto:Aminwaheed18@gmail.com\' >Aminwaheed18@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01552576776\' >01552576776</a></div>` + 
        `<div>BSc of science</div>` +
        `<div>District manager cairo
Worked as medical representative at danone from 2007 till 2012
Worked as district manager at launch company from 2012 till 2017</div>` 
        
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
        
addMarkerToGroup(group, {lat:29.9985786, lng:31.146771},
        `<h4>Basma ahmed moussa</h4>`  +
        `<div ><a href=\'mailto:Basmaelkady5@gmail.com\' >Basmaelkady5@gmail.com</a></div>` + 
        `<div ><a href=\'tel:01002089499\' >01002089499</a></div>` + 
        `<div>A student in the last year of the Faculty of Science .. Biochemistry and microbiology</div>` +
        `<div>I worked in sales .. I worked as a pharmacist assistant .. I participated in volunteering .. I participated in student activities (details in the cv)</div>` 
        
        );
        
addMarkerToGroup(group, {lat:30.1150639, lng:31.3192165},
        `<h4>Ahmed Osama</h4>`  +
        `<div ><a href=\'mailto:osamaa1266@yahoo.com\' >osamaa1266@yahoo.com</a></div>` + 
        `<div ><a href=\'tel:01094643621\' >01094643621</a></div>` + 
        `<div>Bachelor of science, 2019</div>` +
        `<div>I have 2-years of experience in the field of sales as I worked as a medical rep. for both Royal Lab and El-Shams Labs for Medical Examinations </div>` 
        
        );
        
}
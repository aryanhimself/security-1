// PAGES DATA
export const HOMEPAGE = {
  title: "SERVICIUL DE INFORMAȚII EXTERNE",
  description1: "Bun venit în prima linie de apărare a României",
  description2: `Punem ţara înainte de orice, datoria înainte de propria
                  persoană, suntem mândri ştiind că tot ceea ce facem este
                  pentru România.`,
};

export const UNIQUE_FEATURE_SECTION = {
  sectionTitle: "Ai în față un viitor valoros și unic, aplică la SIE!",
  sectionId: "unique__feature__section",
  // videoUrl: "/video/Intro Cariere Dan, Ana, Alex 2 iunie/n2Afeu.m3u8",
  videoUrl: "/video/cariere_1/output.m3u8",
  videoPoster: "/images/thumbnails/Ai_in.webp",
  sectionHref: "#section-12",
  sectionName: "Formular de aplicare",
};

export const EMPLOYER_SECTION = {
  sectionId: "employer__section",
  sectionHeading: "AFLĂ",
  sectionSubheading: "SIE ca angajator",
  sectionTitle: "O echipă de elită, o viață specială",
  videoUrl: "/video/cariere_2/output.m3u8",
  videoPoster: "/images/thumbnails/o_echipa.webp",
  sectionHref: "#section-12",
  sectionName: "Formular de aplicare",
};

export const LIFE_SECTION = {
  sectionTitle: "Experiențe unice relatate de colegii noștri",
  sectionHeading: "DESCOPERĂ",
  sectionSubheading: "Viața în SIE",
  sectionId: "life__section_1",
  videosdata: [
    {
      poster: "/images/thumbnails/adina.webp",
      url: "/video/adina/output.m3u8",
      title: "Adina",
      description: `"O meserie cu dinamică aparte"`,
    },
    {
      poster: "/images/thumbnails/radu.webp",
      url: "/video/radu/output.m3u8",
      title: "Radu",
      description: `"Viața bate filmul!"`,
    },
    {
      poster: "/images/thumbnails/vlad.webp",
      url: "/video/vlad/output.m3u8",
      title: "Vlad",
      description: `"O familie puternică şi unită"`,
    },
    {
      poster: "/images/thumbnails/ioana.webp",
      url: "/video/ioana/output.m3u8",
      title: "loana",
      description: `"Perseverenţa este răsplătită!"`,
    },
  ],
  sectionFooter:
    "*experiențele sunt reale, dar numele au fost schimbate, iar imaginile sunt ale unor avataruri",
};

export const OPPORTUNITY_SECTION = {
  id: "opportunitie__section",
  heading: "DECIDE",
  subheading: "Oportunități de angajare",
  title: "Urmează-ți vocația cu curaj!",
  poster: "/images/thumbnails/Urmeaza.webp",
  url: "/video/cariere_3/output.m3u8",
  href: "#section-13",
  name: "Întreabă orice!",
};

export const OFFER_SECTION = {
  title: "O ofertă performantă în slujba securității României",
  accordion: {
    title: "Beneficiile încadrării în SIE",
    description: [
      "A fi angajat al SIE înseamnă să fii în prima linie de apărare a României.",
      "Înseamnă responsabilitate, dar și distincție.",
      "Oferim un mediu care te ajută să te formezi și să te dezvolți, după cele mai înalte criterii, învățând de la oameni cu abilități de excepție.",
      "Beneficiile angajării în SIE sunt:",
    ],
    list: [
      "program personalizat de integrare în organizație",
      `dezvoltare personală continuă, formare de noi competențe de noi competențe profesionale, prin participarea la cursuri, seminarii, conferințe, workshopuri etc, în țară sau în străinătate;`,
      "oportunități de evoluție profesională; consiliere în carieră;",
      "consiliere și asistență psihologică, facilități de petrecere a concediului de odihnă și a timpului liber;",
      "asistență medicală gratuită, pentru tine și familie;",
      "program flexibil de 8 ore, adaptat nevoilor tale;",
      "compensarea chiriei, în limita unui plafon conform legislației și, dacă îți achiziționezi un imobil, această sumă se va acorda pentru achitarea unei părți din rată;",
      "decontarea cheltuielilor de transport pe timpul concediului de odihnă;",
      "vouchere de vacanță;",
      "concediu de studii plătit, permisii.",
    ],
  },
  heading: "DECIDE",
  subHeading: "O ofertă unică",
  poster: "/images/thumbnails/O_oferta.webp",
  url: "/video/cariere_4/output.m3u8",
  id: "offer__section",
  href: "#section-12",
  name: "Formular de aplicare",
};

export const CAREER_SECTION = {
  id: "career__section",
  heading: "DECIDE",
  subHeading: "Idei de carieră",
  title: "Ce spun colegii despre job-urile lor",
  videosdata: [
    {
      poster: "/images/thumbnails/alina.webp",
      url: "/video/alina/output.m3u8",
      title: "Alina",
      description: `"Aşteaptă-te la neașteptat!"`,
    },
    {
      poster: "/images/thumbnails/cristi.webp",
      url: "/video/cristi/output.m3u8",
      title: "Lucian",
      description: `"Motivat de contribuția la comunitate"`,
    },
    {
      poster: "/images/thumbnails/laurentiu.webp",
      url: "/video/laurentiu/output.m3u8",
      title: "Laurențiu",
      description: `"Veghem la cele 3 culori!"`,
    },
    {
      poster: "/images/thumbnails/olivia.webp",
      url: "/video/olivia/output.m3u8",
      title: "Olivia",
      description: `"O dinamică aparte!"`,
    },
  ],
  buttons: [
    {
      href: "#section-14",
      name: "Condiții încadrare",
    },
    {
      href: "#section-13",
      name: "Întreabă orice",
    },
    {
      href: "#section-12",
      name: "Formular de aplicare",
    },
  ],
};

export const newsData = [
  {
    title:
      "**Serviciul de Informații Externe** organizează un stagiu de practică în perioada **30 iunie - 25 iulie 2025**, în domeniul **Criptologie**.",
    date: `**10** Aprilie 2025`,
    mainImage: "/images/news/stagiu-criptografie-thumb.jpg",
    slug: "noutati_practica_stagiu_cripto_2025",
    newsDetails: `![enter image description here](/images/news-details/afis-stagiu-cripto-2025.jpg)`,
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informații Externe** organizează un stagiu de practică în domeniul **OSINT/Open Source Intelligence**",
    date: `**04** Aprilie 2025`,
    mainImage: "/images/news/OSINT_2025.jpg",
    slug: "noutati_practica_OSINT_2025",
    newsDetails: `## Stagiu de practică în domeniul OSINT organizat de <br/> Serviciul de Informații Externe în 2025

  

&nbsp;&nbsp; &nbsp;&nbsp; În cursul anului 2025,  **Serviciul de Informații Externe**  organizează o nouă ediție a stagiului de practică în domeniul  **OSINT/Open Source Intelligence**  destinat studenților aflați în anii II și III de licență, respectiv masterat din  **cadrul instituțiilor de învățământ superior din România**  (_Facultățile de Jurnalism și Științele Comunicării, Limbi și Literaturi Străine, Istorie, Litere, Științe Politice, Drept, Studii de securitate, Studii europene, Relații internaționale, etc._).

&nbsp;&nbsp; &nbsp;&nbsp; Stagiul cuprinde două serii de practică, desfășurate în lunile  **iulie**  și  **august**, la fiecare serie putând participa maximum 10 studenți.

&nbsp;&nbsp; &nbsp;&nbsp; Stagiul oferă studenților participanți posibilitatea de a dobândi experiență practică, complementară studiilor universitare, într-un domeniu de activitate rezervat profesioniștilor de elită. Prin exerciții, dezbateri și prezentări captivante, participanții vor dobândi abilitățile necesare pentru monitorizarea și validarea de surse deschise, dar și pentru identificarea, evaluarea și analizarea informațiilor de interes pentru un serviciu de informații.

&nbsp;&nbsp; &nbsp;&nbsp; Pentru a fi acceptați la stagiul de practică, candidații trebuie să îndeplinească în mod cumulativ următoarele  **condiții**:

-   sunt studenți în anii II și III de licență, respectiv masterat;
-   au cetățenia română și domiciliul în România;
-   nu au cazier judiciar.

&nbsp;&nbsp; &nbsp;&nbsp; Mediile obținute la examenele de licență și masterat constituie criterii de departajare în procesul de selecție pentru participarea la stagiul de practică.

&nbsp;&nbsp; &nbsp;&nbsp; În vederea participării la stagiu, studenții interesați vor depune până la  **3 mai 2025**  un dosar de înscriere la adresa e-mail  [**stagiiosint@sie.ro**](mailto:stagiiosint@sie.ro), care va conține:

1.  **scrisoare de intenție**  care să cuprindă motivația participării la stagiul de practică;
2.  **curriculum vitae**  actualizat;
3.  o  **recomandare**  din partea unor personalități academice sau universitare din domeniul de referință științifică al studentului;
4.  **documente care atestă studiile absolvite**  (copie diplomă bacalaureat/ licență/ adeverință care să ateste nota de la licență; adeverință care să ateste urmarea cursurilor universitare de masterat, cu menționarea notei de admitere și a mediei ultimei sesiuni; adeverință care să ateste media ultimei sesiuni din anul universitar de licență);
5.  **copie a actului de identitate**.

&nbsp;&nbsp; &nbsp;&nbsp; Selecția studenților care îndeplinesc condițiile de participare se realizează la nivelul Serviciului de Informații Externe. Având în vedere specificul instituției, procesul de selecție urmărește identificarea cu precădere a studenților/masteranzilor interesați de  **domeniile geopoliticii și relațiilor internaționale**, care au abilități de gândire strategică și cunosc  **limbi străine**. Analiza dosarelor depuse de candidați și confirmarea candidaturilor se realizează în intervalul  **5 mai - 27 iunie 2025**.

&nbsp;&nbsp; &nbsp;&nbsp; **_Informații suplimentare pot fi solicitate la adresa e-mail:  [**stagiiosint@sie.ro**](mailto:stagiiosint@sie.ro) și tel.  [0757.922.255](tel:0757922255)_** .

  

&nbsp;&nbsp; &nbsp;&nbsp; _**Atenție**: Stagiul  **nu**  va suplini practica obligatorie din timpul anilor de studiu_.`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informații Externe**  a prelungit perioada de înscriere pentru admiterea în cadrul  **instituțiilor de învățământ universitar și postliceal ale Ministerului Apărării Naționale**, pe locurile de școlarizare alocate SIE, până la data de  **04.04.2025**.",
    date: `**24** Martie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_SMSJPRF",
    newsDetails: `## Prelungirea perioadei de înscriere pentru locurile Serviciului de Informații Externe scoase la concurs în cadrul instituțiilor militare de învățământ universitar și postliceal ale MApN

  

Serviciul de Informații Externe a prelungit perioada de înscriere,  **până la data de 04 aprilie 2025**, pentru locurile scoase la concurs în cadrul instituțiilor militare de învățământ universitar și postliceal ale MApN.

Detalii cu privire la oferta educațională pot fi regăsite accesând secțiunea dedicată fiecărei instituții militare de învățământ din pagina „Noutăți”.

Reamintim că programul de studii este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârstă maximă de 23 de ani (pentru programele de licență), respectiv 28 de ani (pentru învățământul postliceal), care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare constă în:

-   **I. Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  [021.231.24.55](tel:0212312455)  și  [0741.319.205](tel:0741319205)  în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **până la data de 02 mai**  - interviu de selecție și evaluare psihologică.
-   **05 - 23 mai**  – control medical.

Etapele procesului de selecție organizate de Serviciul de Informații Externe sunt programate telefonic de reprezentanții Unității Resurse Umane și se desfășoară în București.

-   **II. Susținerea examenului de admitere corespunzător instituției de învățământ/ specializării vizate**  (în cazul școlilor de  **învățământ postliceal**  admiterea se va realiza în baza  **concursului de dosare**).`,
    detailsImage: "/images/news-details/logo-black-gryphon-sie.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **25 locuri** în cadrul **Academiei Tehnice Militare „Ferdinand I” din București**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_ATM",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI TEHNICE MILITARE „FERDINAND I” din București

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Tehnice Militare „Ferdinand I” din București**, pentru programul de licență  **2025 – 2029**, următoarele locuri:


<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr>
      <th rowspan="2">Facultatea</th>
      <th rowspan="2">Domeniul</th>
      <th rowspan="2">Specializarea</th>
      <th rowspan="2">Formare</th>
      <th rowspan="2">Număr locuri</th>
      <th colspan="2">Proveniența</th>
    </tr>
    <tr>
      <th>Colegii militare</th>
      <th>Colegii civile</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <td rowspan="3">Facultatea de Comunicații și Sisteme Electronice pentru Apărare și Securitate</td>
      <td rowspan="3">Inginerie electronică, telecomunicații și tehnologii informaționale</td>
      <td>Echipamente și sisteme electronice militare</td>
      <td>Ofițeri</td>
      <td>8</td>
      <td>-</td>
      <td>8</td>
    </tr>
    <tr>
      <td>Comunicații pentru apărare și securitate</td>
      <td></td>
      <td>5</td>
      <td>-</td>
      <td>5</td>
    </tr>
    <tr>
      <td>Echipamente și sisteme electronice militare, electronică și radio-electronică de aviație</td>
      <td>Ofițeri</td>
      <td>1</td>
      <td>-</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Facultatea de Sisteme Informatice și Securitate Cibernetică</td>
      <td>Calculatoare și tehnologia informației</td>
      <td>Calculatoare și sisteme informatice pentru apărare și securitate națională</td>
      <td>Ofițeri</td>
      <td>8</td>
      <td>-</td>
      <td>8</td>
    </tr>
    <tr>
      <td rowspan="2">Facultatea de Sisteme Integrate de Armament, Geniu și Mecatronică</td>
      <td rowspan="2">Inginerie civilă<br>Inginerie geodezică</td>
      <td>Construcții și fortificații</td>
      <td>Ofițeri</td>
      <td>2</td>
      <td>-</td>
      <td>2</td>
    </tr>
    <tr>
      <td>Topogeodezie și automatizarea asigurării topogeodezice</td>
      <td>Ofițeri</td>
      <td>1</td>
      <td>1</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă se află într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să dețină și să prezinte un certificat care atestă nivelul de competență lingvistică pentru limba engleză, echivalent nivelului B2 din  _Cadrul european comun de referință pentru limbi străine_, obținut în urma susținerii probei de evaluare a examenului național de bacalaureat sau la alte examene cu recunoaștere internațională pentru certificarea competențelor lingvistice.

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II. Concursul de admitere este organizat de Academia Tehnică Militară „Ferdinand I” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **17 locuri** în cadrul **Academiei Forțelor Terestre „Nicolae Bălcescu” din Sibiu**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_AFT",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI FORȚELOR TERESTRE „NICOLAE BĂLCESCU” din SIBIU

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Forțelor Terestre „Nicolae Bălcescu” din Sibiu**, pentru programul de licență  **2025 – 2028 / 2025 – 2029**, următoarele locuri:

<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
            <tr>
                <th rowspan="2">Facultatea</th>
                <th rowspan="2">Domeniul</th>
                <th rowspan="2">Specializarea / Durata</th>
                <th rowspan="2">Formare</th>
                <th rowspan="2">Număr locuri</th>
                <th colspan="2">Proveniența</th>
            </tr>
            <tr>
                <th>Colegii militare</th>
                <th>Colegii civile</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">Facultatea de Management Militar</td>
                <td>Științe militare, informații și ordine publică</td>
                <td>Managementul sistemelor tehnice de tancuri și auto/ Auto <b>(4 ani)</b></td>
                <td>Ofițeri</td>
                <td>1</td>
                <td>-</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Inginerie și management</td>
                <td>Inginerie și management în domeniul comunicațiilor militare/ Comunicații <b>(4 ani)</b></td>
                <td>Ofițeri</td>
                <td>11</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td rowspan="2">Facultatea de Științe Economice și Administrative</td>
                <td>Contabilitate</td>
                <td>Contabilitate și informatică de gestiune/ Finanțe-contabilitate <b>(3 ani)</b></td>
                <td>Ofițeri</td>
                <td>2</td>
                <td>2</td>
                <td>-</td>
            </tr>
            <tr>
                <td>Științe militare, informații și ordine publică</td>
                <td>Managementul sistemelor speciale de protecție și pază/ Poliție militară <b>(4 ani)</b></td>
                <td>Ofițeri</td>
                <td>3</td>
                <td>2</td>
                <td>1</td>
            </tr>
        </tbody>
</table>

</div>



Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai**  - interviu de selecție și evaluare psihologică.
-   **05 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să dețină și să prezinte un certificat care atestă nivelul de competență lingvistică pentru limba engleză, echivalent nivelului B2 din  _Cadrul european comun de referință pentru limbi străine_, obținut în urma susținerii probei de evaluare a examenului național de bacalaureat sau la alte examene cu recunoaștere internațională pentru certificarea competențelor lingvistice.

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II. Concursul de admitere este organizat de Academia Forțelor Terestre „Nicolae Bălcescu” din Sibiu, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **4 locuri** în cadrul **Academiei Forțelor Aeriene „Henri Coandă” din Brașov**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_AFA",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI FORȚELOR AERIENE „HENRI COANDĂ” din Brașov

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Forțelor Aeriene „Henri Coandă” din Brașov**, pentru programul de licență  **2025 – 2028**, următoarele locuri:


<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
            <tr>
                <th rowspan="2">Facultatea</th>
                <th rowspan="2">Domeniul</th>
                <th rowspan="2">Specializarea / Durata</th>
                <th rowspan="2">Formare</th>
                <th rowspan="2">Număr locuri</th>
                <th colspan="2">Proveniența</th>
            </tr>
            <tr>
                <th>Colegii militare</th>
                <th>Colegii civile</th>
            </tr>
        </thead>
            <tr>
                <td rowspan="2">Facultatea de Sisteme de Securitate Aeriană	</td>
                <td rowspan="2">Științe militare, informații și ordine publică</td>
                <td>Managementul sistemelor de supraveghere aeriană/ Radiolocație	</td>
                <td rowspan="2">Ofițeri</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Managementul sistemelor de supraveghere aeriană/ Război electronic</td>
                <td>2</td>
                <td>1</td>
                <td>1</td>
            </tr>
            
</table>

</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai**  - interviu de selecție și evaluare psihologică.
-   **05 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să dețină și să prezinte un certificat care atestă nivelul de competență lingvistică pentru limba engleză, echivalent nivelului B2 din  _Cadrul european comun de referință pentru limbi străine_, obținut în urma susținerii probei de evaluare a examenului național de bacalaureat sau la alte examene cu recunoaștere internațională pentru certificarea competențelor lingvistice.

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II.Concursul de admitere este organizat de Academia Forțelor Aeriene „Henri Coandă” din Brașov, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **6 locuri** în cadrul **Academiei Navale „Mircea cel Bătrân” din Constanța**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_ANMB",
    newsDetails: `

## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI NAVALE „MIRCEA CEL BĂTRÂN” din Constanța

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Navale „Mircea cel Bătrân” din Constanța**, pentru programul de licență  **2025 – 2029**, următoarele locuri:


<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
            <tr>
                <th rowspan="2" style="text-align: center;padding:10px 10px">Facultatea</th>
                <th rowspan="2" style="text-align: center;padding:10px 10px">Domeniul</th>
                <th rowspan="2" style="text-align: center;padding:10px 10px">Specializarea / Durata</th>
                <th rowspan="2" style="text-align: center;padding:10px 10px">Formare</th>
                <th rowspan="2" style="text-align: center;padding:10px 10px">Număr locuri</th>
                <th colspan="2" style="text-align: center;padding:10px 10px">Proveniența</th>
            </tr>
            <tr>
                <th style="text-align: center;padding:10px 10px">Colegii militare</th>
                <th style="text-align: center;padding:10px 10px">Colegii civile</th>
            </tr>
        </thead>
            <tr>
                <td style="text-align: center;padding:10px 10px">Facultatea de Inginerie Marină</td>
                <td style="text-align: center;padding:10px 10px"> Inginerie electrică	</td>
                <td style="text-align: center;padding:10px 10px">Electromecanică	</td>
                <td style="text-align: center;padding:10px 10px">Ofițeri</td>
                <td style="text-align: center;padding:10px 10px">6</td>
                <td style="text-align: center;padding:10px 10px">3</td>
                <td style="text-align: center;padding:10px 10px">3</td>
            </tr>
            
</table>

</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai**  - interviu de selecție și evaluare psihologică.
-   **05 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să dețină și să prezinte un certificat care atestă nivelul de competență lingvistică pentru limba engleză, echivalent nivelului B2 din  _Cadrul european comun de referință pentru limbi străine_, obținut în urma susținerii probei de evaluare a examenului național de bacalaureat sau la alte examene cu recunoaștere internațională pentru certificarea competențelor lingvistice.

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II.Concursul de admitere este organizat de Academia Forțelor Aeriene „Henri Coandă” din Brașov, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **15 locuri** în cadrul **Școlii Militare de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_SMCIS",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ȘCOLII MILITARE DE MAIȘTRI MILITARI ȘI SUBOFIȚERI PENTRU COMUNICAȚII, TEHNOLOGIA INFORMAȚIEI

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Școlii Militare de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu**, pentru promoțiile  **2025-2026 / 2025-2027**, următoarele locuri:

  
<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
            <tr>
                <th rowspan="2">Facultatea</th>
                <th rowspan="2">Formare</th>
                <th rowspan="2">Durată școlarizare	</th>
                <th rowspan="2">Număr locuri</th>
                <th colspan="2">Proveniența</th>
            </tr>
            <tr>
                <th>Colegii militare</th>
                <th>Colegii civile</th>
            </tr>
        </thead>
            <tr>
                <td>Comunicații</td>
                <td>Subofițeri</td>
                <td>1 an	</td>
                <td>5</td>
                <td>-</td>
                <td>5</td>
            </tr>
            <tr>
            <td>Comunicații</td>
            <td rowspan="3">Maiștri militari</td>
            <td rowspan="3">2 ani</td>
            <td>4</td>
            <td>-</td>
            <td>4</td>
            </tr>
            <tr>
            <td>Tehnologia informației</td>
            <td>4</td>
            <td>-</td>
            <td>4</td>
            </tr>
            <tr>
            <td>Apărare cibernetică	</td>
            <td>2</td>
            <td>-</td>
            <td>2</td>
            </tr>
            
</table>

</div>

  

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta de cel mult 28 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai** - interviu de selecție și evaluare psihologică.
-   **05 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 28 ani împliniți în anul organizării concursului;

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II. Admiterea se va face în baza concursului de dosare, organizat de Școala Militară de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe** scoate la concurs **4 locuri** în cadrul **Școlii Militare de Maiștri Militari a Forțelor Navale „Amiral I. Murgescu” din Constanța**.",
    date: `**18** Februarie 2025`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2025_SMMMFN",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ȘCOLII MILITARE DE MAIȘTRI MILITARI A FORȚELOR NAVALE „Amiral I. Murgescu” din Constanța

  

Serviciul de Informații Externe scoate la concurs, în cadrul  **Școlii Militare de Maiștri Militari a Forțelor Navale „Amiral I. Murgescu” din Constanța**, pentru promoțiile  **2025-2027**, următoarele locuri:

  
<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <thead>
            <tr>
                <th rowspan="2">Specializarea</th>
                <th rowspan="2">Formare</th>
                <th rowspan="2">Durată școlarizare	</th>
                <th rowspan="2">Număr locuri</th>
                <th colspan="2">Proveniența</th>
            </tr>
            <tr>
                <th>Colegii militare</th>
                <th>Colegii civile</th>
            </tr>
        </thead>
            <tr>
                <td>Comunicații navale și informatică	</td>
                <td rowspan="2">Maiștri militari</td>
                <td rowspan="2">2 ani	</td>
                <td>3</td>
                <td>-</td>
                <td>3</td>
            </tr>
            <tr>
            <td>Motoare și instalații electrice navale</td>
            <td>1</td>
            <td>-</td>
            <td>1</td>
            </tr>
            
            
</table>

</div>

  


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 28 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

  

Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **21 martie 2025**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).
  
2.  Susținerea probelor eliminatorii:

-   **03 martie – 02 mai** - interviu de selecție și evaluare psihologică.
-   **05 – 23 mai**  – control medical.

  
3.  Întocmirea dosarului de admitere

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 28 ani împliniți în anul organizării concursului;

**_Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări._**

-   **II. Admiterea se va face în baza concursului de dosare, organizat de Școala Militară de Maiștri Militari a Forțelor Navale „Amiral I. Murgescu” din Constanța.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title:
      "**Serviciul de Informaţii Externe**  scoate la concurs  **7 locuri** în cadrul  **Școlii Militare de Subofițeri de Jandarmi „Petru Rareș” din Fălticeni**.",
    date: `**01** August 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_SMSJPRF",
    newsDetails: `## Oferta de școlarizare a SERVICIULUI DE INFORMAȚII EXTERNE în cadrul ȘCOLII MILITARE DE SUBOFIȚERI DE JANDARMI „PETRU RAREȘ” din Fălticeni


Serviciul de Informații Externe scoate la concurs, în cadrul  **ȘCOLII MILITARE DE SUBOFIȚERI DE JANDARMI „PETRU RAREȘ” din Fălticeni**, pentru anul școlar  **2024-2025**, următoarele locuri:

| Specializarea |Formare| Număr locuri |
|--|--|--|
| Subofițer de jandarmi	 | Subofițer | 7 |


Programul este adresat absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 27 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:


-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

1.  Înscrierea candidaților  - se poate face până la data de  **27 septembrie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55**  și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **05 august – 25 octombrie**  - interviu de selecție și evaluare psihologică.
-   **16 septembrie – 15 noiembrie** – control medical.

Etapele procesului de selecție organizat de Serviciul de Informații Externe sunt programate telefonic de reprezentanții Unității Resurse Umane și se desfășoară în București.

Candidații la concursul de admitere, pe locurile Serviciului de Informații Externe trebuie să îndeplinească cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 27 ani împliniți în anul organizării concursului.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

**II.Concursul de admitere organizat de Școala Militară de Subofițeri de Jandarmi „Petru Rareș” din Fălticeni, prin:**

-   a. evaluarea performanței fizice;
-   b. parcurgerea probelor de examen.

`,
    detailsImage: "/images/news-details/logo-black-gryphon-sie.png",
    isBackground: true,
  },
  {
    title: `
**Serviciul de Informaţii Externe** scoate la concurs **7 locuri** în cadrul **Școlii Militare de Subofițeri de Jandarmi „Grigore Alexandru Ghica” din Drăgășani**.`,
    date: `**01** August 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_SMSJGAGD",
    newsDetails: `## Oferta de școlarizare a SERVICIULUI DE INFORMAȚII EXTERNE în cadrul ȘCOLII MILITARE DE SUBOFIȚERI DE JANDARMI „GRIGORE ALEXANDRU GHICA” din Drăgășani



Serviciul de Informații Externe scoate la concurs, în cadrul  **ȘCOLII MILITARE DE SUBOFIȚERI DE JANDARMI „GRIGORE ALEXANDRU GHICA” din Drăgășani**, pentru anul școlar  **2024-2025**, următoarele locuri:

| Specializarea |Formare| Număr locuri |
|--|--|--|
| Subofițer de jandarmi	 | Subofițer | 7 |

Programul este adresat absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 27 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

1.  Înscrierea candidaților  - se poate face până la data de  **27 septembrie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55**  și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **05 august – 25 octombrie**  - interviu de selecție și evaluare psihologică.
-   **16 septembrie – 15 noiembrie** – control medical.

Etapele procesului de selecție organizat de Serviciul de Informații Externe sunt programate telefonic de reprezentanții Unității Resurse Umane și se desfășoară în București.

Candidații la concursul de admitere, pe locurile Serviciului de Informații Externe trebuie să îndeplinească cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 27 ani împliniți în anul organizării concursului.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

**II. Concursul de admitere organizat de Școala Militară de Subofițeri de Jandarmi „Grigore Alexandru Ghica” din Drăgășani, prin:**

-   a. evaluarea performanței fizice;
-   b. parcurgerea probelor de examen.

`,
    detailsImage: "/images/news-details/logo-black-gryphon-sie.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe**  scoate la concurs  **7 locuri** în cadrul  **Școlii de Subofițeri de Pompieri și Protecție Civilă „Pavel Zăgănescu” din Boldești**.`,
    date: `**01** August 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_SSPPCPZB",
    newsDetails: `## Oferta de școlarizare a SERVICIULUI DE INFORMAȚII EXTERNE în cadrul ȘCOLII DE SUBOFIȚERI DE POMPIERI ȘI PROTECȚIE CIVILĂ „PAVEL ZĂGĂNESCU” din Boldești



Serviciul de Informații Externe scoate la concurs, în cadrul  **ȘCOLII DE SUBOFIȚERI DE POMPIERI ȘI PROTECȚIE CIVILĂ „PAVEL ZĂGĂNESCU” din Boldești**, pentru promoțiile  **2024-2025 / 2024-2026**, următoarele locuri:


| Specializarea |Formare| Număr locuri |
|--|--|--|
| Subofițer de pompieri și protecție civilă		 | Subofițer (1 an)	 | 6 |
| Maistru militar auto		| Maistru militar (2 ani)		 | 1 |


Programul este adresat absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 27 de ani, care își doresc o carieră în domeniul securității naționale.

Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

1.  Înscrierea candidaților  - se poate face până la data de  **27 septembrie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55**  și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **05 august – 25 octombrie**  - interviu de selecție și evaluare psihologică.
-   **16 septembrie – 15 noiembrie** – control medical.

Etapele procesului de selecție organizat de Serviciul de Informații Externe sunt programate telefonic de reprezentanții Unității Resurse Umane și se desfășoară în București.

Candidații la concursul de admitere, pe locurile Serviciului de Informații Externe trebuie să îndeplinească cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 27 ani împliniți în anul organizării concursului.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

**II.Concursul de admitere organizat de Școala de Subofițeri de Pompieri și Protecție Civilă „Pavel Zăgănescu” din Boldești prin:**

-   a. evaluarea performanței fizice;
-   b. parcurgerea probelor de examen.
`,
    detailsImage: "/images/news-details/logo-black-gryphon-sie.png",
    isBackground: true,
  },
  {
    title: `**Gl.lt.(rtg.) Mihail Caraman**, fost Director al Serviciului de Informații Externe, a încetat din viață.`,
    date: `**25** Iulie 2024`,
    mainImage: "/images/news/slider-comunicat-caraman.png",
    slug: "noutati_comunicat_caraman",
    newsDetails: `
## Gl.lt.(rtg.) Mihail Caraman, fost Director al Serviciului de Informații Externe, a încetat din viață


<div style="display:flex;gap:30px;">

![](https://sie.ro/pictures/comunicat-caraman/caraman.png)

<div style="width:185%;">

La 25 iulie 2024, gl.lt.(rtg.) Mihail Caraman, fost director al Serviciului de Informații Externe, a încetat din viață. În luna noiembrie ar fi împlinit venerabila vârstă de 96 de ani.

Născut în localitatea Oancea, județul Galați, Mihail Caraman și-a început cariera în spionaj în anul 1956, trecând prin toate treptele ierarhice ale managementului instituțional, asumându-și cu un angajament neobosit valorile și principiile fundamentale ale activității de spionaj.

Veteran al activității de Intelligence din România, Mihail Caraman a fost comandant al Centrului de Informații Externe în perioada 1990-1991, urmând ca între anii 1991-1992 să preia conducerea Serviciului de Informații Externe. Cu o activitate desfășurată de-a lungul a câtorva decenii, rămâne un exemplu de longevitate și tenacitate.

_Dumnezeu să-l odihnească în pace!_

</div>

</div>


`,
    isBackground: true,
  },
  {
    title: `**Serviciul de Informații Externe** a prelungit termenul de înscriere la stagiul de practică în domeniul **Criptologie** până la data de 31.05.2024.`,
    date: `**16** Mai 2024`,
    mainImage: "/images/news/cripto2024.png",
    slug: "noutati_prelungire_practica_stagiu_cripto_2024",
    newsDetails: `![enter image description here](/images/news-details/Prelungire_Poster_Practica_Cripto_2024.jpg)`,
    isBackground: true,
  },
  {
    title: `**Serviciul de Informații Externe** organizează un stagiu de practică în perioada **iunie-iulie 2024**, în domeniul **Criptologiei**.`,
    date: `**19** Aprilie 2024`,
    mainImage: "/images/news/cripto2024.png",
    slug: "noutati_practica_stagiu_cripto_2024",
    newsDetails: `![enter image description here](/images/news-details/Poster_Practica_Cripto_2024.jpg)`,
    isBackground: true,
  },
  {
    title: `**Serviciul de Informații Externe** organizează un stagiu de practică în domeniul **OSINT/Open Source Intelligence**`,
    date: `**28** Februarie 2024`,
    mainImage: "/images/news/OSINT_2024.png",
    slug: "noutati_practica_OSINT_2024",
    newsDetails: `## Stagiu de practică în domeniul OSINT organizat de Serviciul de Informații Externe în anul 2024



În cursul anului 2024  **Serviciul de Informații Externe**  organizează un stagiu de practică în domeniul  **OSINT/Open Source Intelligence**  destinat studenților aflați în anii II și III de licență, respectiv masterat din cadrul  **Academiei de Studii Economice din București**/ASE și  **Universității din București**/UB (_Facultățile de Jurnalism și Științele Comunicării, Limbi și Literaturi Străine, Istorie, Litere și Științe Politice_).

Stagiul cuprinde  **2 serii de practică**, desfășurate în lunile  **iulie**  și  **august**, la fiecare serie putând participa maximum  **10 studenți**.

Stagiul oferă studenților participanți posibilitatea de a dobândi experiență practică, complementară studiilor universitare, într-un domeniu de activitate rezervat profesioniștilor de elită. Prin exerciții, dezbateri și prezentări captivante, participanții vor dobândi abilitățile necesare pentru monitorizarea și validarea de surse deschise, dar și pentru identificarea, evaluarea și analizarea informațiilor de interes pentru un serviciu de informații.

Pentru a fi acceptați la stagiul de practică, candidații trebuie să îndeplinească în mod cumulativ următoarele  **condiții**:

-   sunt studenți în anii II și III de licență, respectiv masterat;
-   au cetățenia română și domiciliul în România;
-   nu au cazier judiciar.

Mediile obținute la examenele de licență și masterat constituie criterii de departajare în procesul de selecție pentru participarea la stagiul de practică.

În vederea participării la stagiu, studenții interesați vor transmite, până la data de  **12 aprilie 2024**  un dosar de înscriere, la adresa e-mail  [**stagiiosint@sie.ro**](mailto:stagiiosint@sie.ro), care va conține:

1.  **scrisoare de intenție**  care să cuprindă motivația participării la stagiul de practică;
2.  **curriculum vitae**  actualizat;
3.  cel puțin  **două recomandări**  din partea unor personalități academice sau universitare din domeniul de referință științifică al studentului;
4.  **documente care atestă studiile absolvite**  (copie diplomă bacalaureat/ licență/ adeverință care să ateste nota de la licență/ adeverință care să ateste urmarea cursurilor universitare de masterat, cu menționarea notei de admitere și a mediei ultimei sesiuni; adeverință care să ateste media ultimei sesiuni din anul universitar de licență);
5.  **copie a actului de identitate**.

Selecția studenților care îndeplinesc condițiile de participare se realizează la nivelul Serviciului de Informații Externe.

Având în vedere specificul instituției, procesul de selecție urmărește identificarea cu precădere a studenților/masteranzilor interesați de  **domeniile geopoliticii și relațiilor internaționale**, care au abilități de gândire strategică și cunosc  **limbi străine**.

Analiza dosarelor depuse de candidați și confirmarea candidaturilor se realizează în intervalul  **15 aprilie - 28 iunie**.

**_Informații suplimentare pot fi solicitate la adresa e-mail:  [**stagiiosint@sie.ro**](mailto:stagiiosint@sie.ro)  și tel. 0755.785.628_** _( în zilele lucrătoare, intervalul orar 08:00-20:00_).



_**Atenție**: Stagiul  **nu**  va suplini practica obligatorie din timpul anilor de studiu_.`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **20 locuri** în cadrul **Academiei Naționale de Informații “Mihai Viteazul” din București**.`,
    date: `**09** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_ANIMV",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI NAȚIONALE DE INFORMAȚII „MIHAI VITEAZUL” din BUCUREȘTI



Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Naționale de Informații „Mihai Viteazul” din București**, pentru programul de licență  **2024 - 2027**, următoarele locuri:

<div style="overflow:scroll">

| Facultatea | Specializarea | Formare | Număr locuri |
|--|--|--|--|
| Facultatea de Informații | Operațiuni de intelligence | Ofițer | 10 |
| Facultatea de Studii de Intelligence			| Studii de securitate și informații |	Ofițer | 10 |

</div>

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale.
Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere  pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B2 mediu.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Academia Națională de Informații „Mihai Viteazul” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **12 locuri** în cadrul **Academiei Tehnice Militare „Ferdinand I” din București**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_ATM",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI TEHNICE MILITARE „FERDINAND I” din București



Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Tehnice Militare „Ferdinand I” din București**, pentru programul de licență  **2024 – 2028**, următoarele locuri:
<div style="overflow:scroll">
<table border="1" style="border-collapse: collapse; width: 100%;">
  <tr>
    <th style="text-align: center;">Facultatea</th>
    <th style="text-align: center;">Domeniul</th>
    <th style="text-align: center;">Specializarea / Durata</th>
    <th style="text-align: center;">Formare</th>
    <th style="text-align: center;">Număr locuri</th>
  </tr>
  <tr>
    <td style="text-align: center;padding:10px 10px" rowspan="3" >Facultatea de Comunicații și Sisteme Electronice pentru Apărare și Securitate</td>
    <td style="text-align: center;padding:10px 10px" rowspan="3">Inginerie electronică, telecomunicații și tehnologii informaționale</td>
    <td style="text-align: center;padding:10px 10px">Echipamente și sisteme electronice militare</td>
    <td style="text-align: center;padding:10px 10px">Ofițer</td>
    <td style="text-align: center;padding:10px 10px">2</td>
  </tr>
  <tr>
    <td style="text-align: center;padding:10px 10px">Comunicații pentru apărare și securitate</td>
    <td style="text-align: center;padding:10px 10px"rowspan="2">Ofițer</td>
    <td style="text-align: center;padding:10px 10px">2</td>
  </tr>
  <tr>
    <td style="text-align: center;padding:10px 10px">Echipamente și sisteme electronice militare, electronică și radio-electronică de aviație</td>
    <td style="text-align: center;padding:10px 10px">1</td>
  </tr>
  <tr>
    <td style="text-align: center;padding:10px 10px">Facultatea de Sisteme Informatice și Securitate Cibernetică</td>
    <td style="text-align: center;padding:10px 10px">Calculatoare și tehnologia informației</td>
    <td style="text-align: center;padding:10px 10px">Calculatoare și sisteme informatice pentru apărare și securitate națională</td>
    <td style="text-align: center;padding:10px 10px">Ofițer</td>
    <td style="text-align: center;padding:10px 10px">4</td>
  </tr>
  <tr>
    <td style="text-align: center;padding:10px 10px" rowspan="2">Facultatea de Sisteme Integrate de Armament, Geniu și Mecatronică</td>
    <td style="text-align: center;padding:10px 10px">Inginerie geodezică</td>
    <td style="text-align: center;padding:10px 10px">Topogeodezie și automatizarea asigurării topogeodezice</td>
    <td style="text-align: center;padding:10px 10px"rowspan="2">Ofițer</td>
    <td style="text-align: center;padding:10px 10px">2</td>
  </tr>
  <tr>
  <td style="text-align: center;padding:10px 10px">Inginerie de armament, rachete și muniții</td>
  <td style="text-align: center;padding:10px 10px">Muniții, rachete, explozivi și pulberi</td>
  <td style="text-align: center;padding:10px 10px">1</td>
  </tr>
</table>

</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B1 începător.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Academia Tehnică Militară „Ferdinand I” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**


`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **6 locuri** în cadrul **Academiei Forțelor Terestre „Nicolae Bălcescu” din Sibiu**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_AFT",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI FORȚELOR TERESTRE „NICOLAE BĂLCESCU” din SIBIU



Serviciul de Informații Externe scoate la concurs, în cadrul  **Terestre „Nicolae Bălcescu” din Sibiu**, pentru programul de licență  **2024 – 2027 / 2024– 2028**, următoarele locuri:

<div style="overflow:scroll">

  | Facultatea                                                    | Domeniul                                           | Specializarea / Durata                                                                     | Formare | Număr locuri |
|---------------------------------------------------------------|---------------------------------------------------|--------------------------------------------------------------------------------------------|---------|--------------|
| Facultatea de Științe Militare                                | Științe militare, informații și ordine publică    | Leadership militar - Cercetare (4 ani)                                                     | Ofițer  | 2            |
| Facultatea de Management Militar                              | Inginerie și management                           | Inginerie și management în domeniul comunicațiilor militare - Comunicații (4 ani)           | Ofițer  | 2            |
| Facultatea de Științe Economice și Administrative             | Contabilitate                                     | Contabilitate și informatică de gestiune - Finanțe-contabilitate (3 ani)                   | Ofițer  | 2            |

</div>

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B1 începător.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Academia Forțelor Terestre „Nicolae Bălcescu” din Sibiu, prin parcurgerea probelor de examen corespunzătoare specializării alese.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **10 locuri** în cadrul **Academiei Forțelor Aeriene „Henri Coandă” din Brașov**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_AFA",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI FORȚELOR AERIENE „HENRI COANDĂ” din Brașov



Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Forțelor Aeriene „Henri Coandă” din Brașov**, pentru programul de licență  **2024 – 2027**, următoarele locuri:

<div style="overflow:scroll">
<table border="1" cellspacing="0" cellpadding="10" style="width: 100%; border-collapse: collapse; font-family: Arial, sans-serif;">
        <thead>
            <tr>
                <th>Facultatea</th>
                <th>Domeniul</th>
                <th>Specializarea / Durata</th>
                <th>Formare</th>
                <th>Număr locuri</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: center;padding:5px;">Facultatea de Management Aeronautic</td>
                <td rowspan="3" style="text-align: center;padding:5px;">
                    Științe militare, informații și ordine publică
                </td>
                <td style="text-align: center;padding:5px;">Managementul traficului aerian/ Informații militare</td>
                <td rowspan="3" style="text-align: center;padding:5px;">
                    Ofițer
                </td>
                <td style="text-align: center;padding:5px;">3</td>
            </tr>
            <tr>
                <td style="text-align: center;padding:5px;" rowspan="2">Facultatea de Sisteme de Securitate Aeriană</td>
                <td style="text-align: center;padding:5px;">Managementul sistemelor de supraveghere aeriană/ Radiolocație</td>
                <td style="text-align: center;padding:5px;">3</td>
            </tr>
            <tr>
                <td style="text-align: center;padding:5px;">Managementul sistemelor de supraveghere aeriană / Război electronic	</td>
                <td style="text-align: center;padding:5px;">4</td>
                
  </tr>
  </tbody>
</table>
</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B1 începător.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II.Concursul de admitere organizat de Universitatea Națională de Apărare „Carol I” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **5 locuri** în cadrul **Academiei Navale „Mircea cel Bătrân” din Constanța**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_ANV",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ACADEMIEI NAVALE „MIRCEA CEL BĂTRÂN” din Constanța



Serviciul de Informații Externe scoate la concurs, în cadrul  **Academiei Navale „Mircea cel Bătrân” din Constanța**, pentru programul de licență  **2024 – 2028**, următoarele locuri:

<div style="overflow:scroll">

| Facultatea | Domeniul | Specializarea / Durata	 | Formare | Număr locuri |
|--|--|--|--|--|
| Facultatea de Inginerie Marină | Inginerie electrică	 | Echipamente electrice și electronice navale	 | Ofițer | 5 |

</div>

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741 319 205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.

<br />

3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B1 începător.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Academia Forțelor Terestre „Nicolae Bălcescu” din Sibiu, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
				`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **1 loc** în cadrul **Universității Naționale de Apărare „Carol I” din București**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_UNAp",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul UNIVERSITĂȚII NAȚIONALE DE APĂRARE „CAROL I” din București



Serviciul de Informații Externe scoate la concurs, în cadrul  **Universității Naționale de Apărare „Carol I” din București**, pentru promoțiile  **2024 - 2028**, următoarele locuri:


<div style="overflow:scroll">

| Facultatea | Domeniul | Specializarea	 | Formare | Număr locuri |
|--|--|--|--|--|
| Facultatea de Comandă și Stat Major	 | Științe militare, informații și ordine publică		 | Intendență	 | Ofițer | 1 |

</div>

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta maximă de 23 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter obligatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai** - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 23 ani împliniți în anul organizării concursului;
-   să cunoască o limbă străină la nivel B1 începător.

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Universitatea Națională de Apărare „Carol I” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**

`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **1 loc** în cadrul **Școlii Militare de Maiștri Militari și Subofițeri a Forțelor Terestre „Basarab I” din Piteşti**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_BasarabI",
    newsDetails: `## Oferta de școlarizare a Serviciului de Informații Externe în cadrul Școlii Militare de Maiștri Militari și Subofițeri a Forțelor Terestre „Basarab I” din Pitești



Serviciul de Informații Externe scoate la concurs, în cadrul  **Școlii Militare de Maiștri Militari și Subofițeri a Forțelor Terestre „Basarab I” din Pitești**, pentru programul de licență  **2024 – 2026**, următoarele locuri:

<div style="overflow:scroll">

| Specializarea | Formare | Durată școlarizare	 | Număr locuri |
|--|--|--|--|
| Auto | Maiștri militari | 2 ani	 | 1 |

</div>

Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta de cel mult 28 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 28 ani împliniți în anul organizării concursului;

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Școala Militară de Maiștri Militari și Subofițeri a Forțelor Terestre „Basarab I” din Pitești, prin parcurgerea probelor de examen corespunzătoare specializării alese.**
`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  {
    title: `**Serviciul de Informaţii Externe** scoate la concurs **9 locuri** în cadrul **Școlii Militare de Maiștri Militari și Subofițeri de Logistică „Gheorghe Lazăr” din București**.`,
    date: `**02** Februarie 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "noutati_scolarizare_2024_GheorgheLazar",
    newsDetails: `
## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ȘCOLII MILITARE DE MAIȘTRI MILITARI ȘI SUBOFIȚERI DE LOGISTICĂ „GHEORGHE LAZĂR” din București



Serviciul de Informații Externe scoate la concurs, în cadrul  **Școlii Militare de Maiștri Militari și Subofițeri de Logistică „Gheorghe Lazăr” din București**, pentru promoțiile  **2024-2025 / 2024-2026**, următoarele locuri:

<div style="overflow:scroll">
    <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
        <thead>
            <tr>
                <th>Specializarea</th>
                <th>Formare</th>
                <th>Durată școlarizare</th>
                <th>Număr locuri</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align: center;padding:5px;">Intendență</td>
                <td style="text-align: center;padding:5px;" rowspan="2">Subofițeri</td>
                <td style="text-align: center;padding:5px;" rowspan="2">1 an</td>
                <td style="text-align: center;padding:5px;">2</td>
            </tr>
            <tr>
                <td style="text-align: center;padding:5px;">Administrare proprietate imobiliară	</td>
                <td style="text-align: center;padding:5px;">3</td>
            </tr>
            <tr>
                <td style="text-align: center;padding:5px;">Administrare proprietate imobiliară	</td>
                <td style="text-align: center;padding:5px;" rowspan="2">Maiștri militari</td>
                <td style="text-align: center;padding:5px;" rowspan="2">2 an</td>
                <td style="text-align: center;padding:5px;">2</td>
            </tr>
            <tr>
                <td style="text-align: center;padding:5px;">Intendență</td>
                <td style="text-align: center;padding:5px;">2</td>
            </tr>
        </tbody>
    </table>
</div>


Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta de cel mult 28 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

-   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**



Procesul de selecție cuprinde următoarele etape:

1.  Înscrierea candidaților  - se poate face până la data de  **23 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

2.  Susținerea probelor eliminatorii:

-   **04 martie – 03 mai**  - interviu de selecție și evaluare psihologică.
-   **06 – 24 mai**  – evaluare cunoștințe limbă străină și control medical.


3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

-   să aibă cetățenie română și domiciliul stabil în România;
-   să nu aibă cazier judiciar și/sau fiscal;
-   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
-   să fie declarați „apt psihologic”;
-   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
-   să nu facă parte din organizații secrete sau interzise de lege;
-   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
-   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
-   să aibă situația militară clarificată;
-   să aibă vârsta de maximum 28 ani împliniți în anul organizării concursului;

**Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

-   **II. Concursul de admitere este organizat de Școala Militară de Maiștri Militari și Subofițeri de Logistică „Gheorghe Lazăr” din București, prin parcurgerea probelor de examen corespunzătoare specializării alese.**`,
    detailsImage: "/images/news-details/LogoAnunt.png",
    isBackground: true,
  },
  //   {
  //     title: `**Serviciul de Informaţii Externe** scoate la concurs **6 locuri** în cadrul **Școlii Militare de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu**.`,
  //     date: `**02** Februarie 2024`,
  //     mainImage: "/images/news/noutati_sediu2.png",
  //     slug: "noutati_scolarizare_2024_SMCIS",
  //     newsDetails: `
  // ## Oferta de școlarizare a Serviciului de Informații Externe în cadrul ȘCOLII MILITARE DE MAIȘTRI MILITARI ȘI SUBOFIȚERI PENTRU COMUNICAȚII, TEHNOLOGIA INFORMAȚIEI ȘI APĂRARE CIBERNETICĂ din SIBIU

  // Serviciul de Informații Externe scoate la concurs, în cadrul  **Școlii Militare de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu**, pentru promoțiile  **2024-2025 / 2024-2026**, următoarele locuri:

  // <div style="overflow:scroll">
  // <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%; text-align: center;">
  //         <thead>
  //             <tr>
  //                 <th>Specializarea</th>
  //                 <th>Formare</th>
  //                 <th>Durată școlarizare</th>
  //                 <th>Număr locuri</th>
  //             </tr>
  //         </thead>
  //         <tbody>
  //             <tr>
  //                 <td style="text-align: center;padding:5px;">Comunicații</td>
  //                 <td style="text-align: center;padding:5px;" rowspan="4">Maiștri militari</td>
  //                 <td style="text-align: center;padding:5px;" rowspan="4">2 ani</td>
  //                 <td style="text-align: center;padding:5px;">1</td>
  //             </tr>
  //             <tr>
  //                 <td style="text-align: center;padding:5px;">Tehnologia informației</td>
  //                 <td style="text-align: center;padding:5px;">1</td>
  //             </tr>
  //             <tr>
  //                 <td style="text-align: center;padding:5px;">Apărare cibernetică</td>
  //                 <td style="text-align: center;padding:5px;">1</td>
  //             </tr>
  //             <tr>
  //                 <td style="text-align: center;padding:5px;">Securitate militară	</td>
  //                 <td style="text-align: center;padding:5px;">1</td>
  //             </tr>
  //             <tr>
  //                 <td style="text-align: center;padding:5px;">Comunicații</td>
  //                 <td style="text-align: center;padding:5px;">Subofițeri</td>
  //                 <td style="text-align: center;padding:5px;">1 ani</td>
  //                 <td style="text-align: center;padding:5px;">2</td>
  //             </tr>

  //   </tbody>
  // </table>
  // </div>

  // Programul este adresat atât elevilor aflați în clasa a XII-a, cât și absolvenților cu diplomă de bacalaureat, cu vârsta de cel mult 28 de ani, care își doresc o carieră în domeniul securității naționale. Procesul de evaluare pentru accesarea locurilor scoase la concurs de Serviciul de Informații Externe constă în:

  // -   **I.Selecția candidaților, organizată de Serviciul de Informații Externe, conform criteriilor și procedurilor instituționale (etapă cu caracter eliminatoriu).**

  // Procesul de selecție cuprinde următoarele etape:

  // 1.  Înscrierea candidaților  - se poate face până la data de  **22 martie 2024**. Persoanele interesate se pot adresa Unității Resurse Umane a Serviciului de Informații Externe, la numerele de telefon  **021.231.24.55** și  **0741.319.205**, în zilele lucrătoare, intervalul orar 08:00-20:00, sau prin accesarea adresei de e-mail  [resurse_umane@sie.ro](mailto:resurse_umane@sie.ro).

  // 2.  Susținerea probelor eliminatorii:

  // -   **06 martie – 05 mai** - interviu de selecție și evaluare psihologică.
  // -   **08 – 26 mai**  – control medical.

  // 3.  Întocmirea dosarului de admitere pe locurile Serviciului de Informații Externe.

  // Etapele procesului de selecție sunt programate telefonic de reprezentanții Unității Resurse Umane a Serviciului de Informații Externe și se desfășoară în București.

  // Candidații la concursul de admitere pe locurile Serviciului de Informații Externe trebuie să îndeplinească, cumulativ, următoarele  **cerințe**:

  // -   să aibă cetățenie română și domiciliul stabil în România;
  // -   să nu aibă cazier judiciar și/sau fiscal;
  // -   să nu se afle în preocuparea autorităților pentru fapte antisociale de orice natură;
  // -   să fie declarați „apt psihologic”;
  // -   să fie declarați „apt medical”, conform baremelor medico-militare în vigoare;
  // -   să nu facă parte din organizații secrete sau interzise de lege;
  // -   să nu fie înscriși în partide politice, organizații politice ori să se angajeze în scris că vor renunța la această calitate și la orice activitate politică odată cu admiterea în instituția militară de învățământ;
  // -   să nu fie asociați unici, acționari majoritari ori să participe direct la administrarea sau conducerea unor societăți comerciale, iar dacă sunt într-una dintre aceste situații, să se angajeze în scris că, în termen de 15 zile de la admitere, vor întreprinde demersurile pentru a renunța la această calitate;
  // -   să aibă situația militară clarificată;
  // -   să aibă vârsta de maximum 28 ani împliniți în anul organizării concursului;

  // **Notă: De la condițiile de înscriere prezentate, nu se acordă derogări și nu se admit reexaminări.**

  // -   **II. Concursul de admitere este organizat de Școala Militară de Maiștri Militari și Subofițeri pentru Comunicații, Tehnologia Informației și Apărare Cibernetică din Sibiu, prin parcurgerea probelor de examen corespunzătoare specializării alese.**`,
  //     detailsImage: "/images/news-details/LogoAnunt.png",
  //     isBackground: true,
  //   },
];

export const mediaData = [
  {
    title: `**Comunicat de presă** - 10 decembrie 2024`,
    date: `**10** Dec 2024`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "comunicat20221213",
    newsDetails: `<p style="color: #163153; text-align: left">10 decembrie 2024</p>

**<h2 style="color: #163153; text-align: left">Comunicat de presă</h2>**

<br/>

Față de articolul publicat la 09.12.2024 de G4media.ro, precum și față de informațiile preluate și vehiculate în spațiul public, ce induc în mod greșit ideea că deplasarea Conducerii Serviciului de Informații Externe la Baku s-a realizat în interes privat, pentru corecta informare a opiniei publice, precizăm că delegația SIE a realizat deplasarea în cadrul unei misiuni externe, la invitația omologilor azeri pentru a participa la Baku Security Forum, eveniment ce a reunit delegații din peste 50 de țări. Evenimentul a reprezentat o bună oportunitate pentru delegația SIE de a discuta în format bilateral și multilateral subiecte privind securitatea regională și globală. Detalii cu privire la misiunile externe ale Serviciului și personalul participant nu pot fi comunicate, având în vedere prevederile legale indicate în răspunsul la solicitarea de presă inițială, care a vizat perioada ianuarie 2020 – prezent.

<br/>

Totodată, luând act de interesul public manifestat față de participarea la Marele Premiu de Formula 1 de la Baku, facem precizarea că aceasta s-a realizat prin grija gazdelor care au invitat delegațiile la eveniment.

<br/>

Referitor la prezența Directorului SIE la Abu Dhabi precizăm că, aceasta a fost o misiune externă, deplasarea s-a efectuat cu un avion de linie, iar participarea la cursă a avut loc la invitația gazdelor.

<br/>

În ceea ce privește participarea la Marele Premiu al Italiei, aceasta a fost o deplasare privată, efectuată cu avion de linie, costurile aferente fiind suportate personal.`,
    isBackground: false,
  },
  {
    title: `**Mesajul Serviciului de Informații Externe adresat Serviciului de Telecomunicații Speciale**`,
    date: `**18** Dec 2022`,
    mainImage: "/images/news/noutati_siglaSTS.png",
    slug: "comunicat20221213",
    newsDetails: `
<p style="color: #173153;font-weight: bold;margin-bottom: 10px;">București, 18 Decembrie 2022<p>

**<h2 style="color: #173153;">Mesajul Serviciului de Informații Externe adresat Serviciului de Telecomunicații Speciale, cu prilejul aniversării a 30 de ani de activitate neîntreruptă de comunicații și tehnologia informației, în sprijinul autorităților publice, centrale și locale din România</h2>**

![STS - SIE](https://sie.ro/pictures/logoSTS.png)

<p style="font-weight: bold;">Stimate Domnule Director,</p>

 În semn de respect pentru cooperarea dintre instituțiile noastre, cu ocazia aniversării a trei decenii de când Serviciul de Telecomunicații Speciale și-a asumat o misiune importantă în arhitectura de securitate a României, vă felicit pentru contribuția permanentă și relevantă în slujba țării și îmi exprim întreaga apreciere pentru eforturile continue depuse de cadrele Serviciului pe care îl reprezentați, în promovarea și susținerea, prin fiecare acțiune, a valorilor de angajament și performanță împărtășite de către instituțiile noastre.

Țin să vă mulțumesc pe această cale pentru dialogul asumat și profesionist derulat de-a lungul anilor și vă asigur de întreaga disponibilitate pentru o relație interinstituțională coezivă, definită de principiile fundamentale ale statului român.

Vă doresc succes și determinare în împlinirea tuturor aspirațiilor și păstrarea statutului Serviciului de Telecomunicații Speciale ca factor de profesionalism și expertiză națională, alături de sănătate și realizări deosebite în plan profesional și personal!



<p style="font-weight: bold;margin-top: 20px;">La mulți ani!</p>



**<h2 style="color: #173153; margin-bottom: 10px;">Gabriel VLASE</h2>**
<h2 style="color: #173153;font-weight: bold;margin-top: -10px;text-align: center;">Directorul Serviciului de Informații Externe</h2>

**<h2 style="color: #173153;text-align: start;text-align: center;">Domnului general ing. IONEL-SORIN BĂLAN
Directorul Serviciului de Telecomunicații Speciale**</h2>`,
    isBackground: false,
  },
  {
    title: `**Comunicat „Vizită Papa Francisc - 2019”**`,
    date: `**20** Mar 2019`,
    mainImage: "/images/news/noutati_sigla.jpg",
    slug: "comunicat20190320",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">20 Martie 2019</p>

**<h2 style="color: #173153;">Comandamentul Operativ Național „Vizită Papa Francisc - 2019”</h2>**

![SNA](https://sie.ro/pictures/imgSNA.png)


În contextul vizitei pe care Sanctitatea Sa Papa Francisc o va efectua în România, la nivelul conducerilor instituțiilor din Sistemul Naţional de Apărare, Ordine Publică şi Siguranţă Naţională - MApN, MAI, SRI, SIE, STS şi SPP - a fost constituit Comandamentul Operativ Național „Vizită Papa Francisc - 2019”.
<br/>
<br/>
Fiecare instituţie, în limitele competențelor stabilite prin lege, va stabili și adapta măsurile de securitate necesare, astfel încât să permită desfăşurarea în condiții normale a activităților cotidiene și fără să impună restricții deosebite.
<br/>
<br/>
Sanctitatea Sa va vizita, în perioada 31 mai – 2 iunie 2019, orașele București, Iași, Blaj și Sanctuarul marian de la Șumuleu Ciuc.
<br/>
<br/>
Având în vedere importanţa istorică a vizitei şi numărul mare de participanți preconizaţi pentru cele patru evenimente, Comandamentul Operativ Național a organizat ședințe de lucru atât în București, cât și în teritoriu. De asemenea, au avut loc mai multe întâlniri cu autorităţile locale din Iaşi, Alba şi Harghita, dar şi cu reprezentanţii Bisericilor Ortodoxă şi Catolică.




**<h2 style="color: #173153;margin-top: 50px;">Comandamentul Operativ Național „Vizită Papa Francisc - 2019”</h2>**

### **[mapn.ro](http://www.mapn.ro/) &nbsp;&nbsp;&nbsp; [mai.gov.ro](http://www.mai.gov.ro/) &nbsp;&nbsp;&nbsp; [sri.ro](http://www.sri.ro/) &nbsp;&nbsp;&nbsp;[sie.ro](http://www.sie.ro/) &nbsp;&nbsp;&nbsp;[stsnet.ro](http://www.stsnet.ro/)&nbsp;&nbsp;&nbsp; [spp.ro](http://www.spp.ro/)**`,
    isBackground: false,
  },
  {
    title: `**Campania de comunicare în mediul digital**`,
    date: `**10** Mar 2017`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "comunicat20170510",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">10 Mai 2017<p>

 **<h2 style="text-align: start;color: #173153;">Campania de comunicare în mediul digital</h2>**
    <br />
În perioada 01.02 – 05.05.2017, Serviciul de Informații Externe a desfășurat o campanie de comunicare în mediul digital având ca obiective principale promovarea carierei în SIE, conturarea imaginii de angajator a serviciului și atragerea de candidați bine pregătiți, în contextul campaniei de recrutare a 85 noi cadre.
<br/>
<br/>
Strategia de campanie a implicat un mix de canale, tactici și metode specifice, incluzând:

- Invitarea unor bloggeri, relevanți pentru audiența căutată, la discuții libere cu personal SIE;
-   Realizarea unei vizite la facilitățile de pregătire SIE (training bootcamp) în urma căreia fiecare blogger a descris ceea ce a văzut;
-   Realizarea unei secțiuni în site dedicată acestui proiect  [(www.sie.ro/bloggeri-la-sie/)](https://sie.ro/bloggeri-la-sie);
-   Utilizarea de tehnologii web specifice pentru înregistrarea gradului de engagement al fiecărui utilizator atins de campanie;
-   Campania media de promovare a mesajelor de recrutare prin intermediul Google, Facebook și Avandor (programmatic audience-buying și retargeting);
-   Lansarea unui portal dedicat înscrierilor/ depunerii candidaturilor și dosarelor electronice.

<br/>
<br/>
Campania s-a bucurat de un real succes, ajutând la atingerea obiectivului campaniei de recrutare precum și la prezentarea unei imagini corecte în spațiul public în ceea ce privește modul de lucru, motivațiile, organizarea și responsabilitățile Serviciului de Informații Externe, fapt dovedit prin numărul mare de mesaje de apreciere primite inclusiv de la publicul larg.
<br/>
<br/>
În plus, întrucât campania a stârnit și interesul altor bloggeri, jurnaliști și instituții media, a ajuns mult mai departe decât publicul țintă stabilit în strategie.

În contextul finalizării campaniei, Serviciul de Informații Externe dorește să mulțumească tuturor celor implicați în acest proiect, în special domnilor  **Cetin Ametcea, Vali Petcu, Cabral Ibacka, Răzvan Baciu, Costin Cocioabă și Victor Kapra**  - pentru contribuția la transmiterea mesajului nostru, respectiv  **Marius Deak**  (GreenPixel) - pentru strategie și coordonare.`,
    isBackground: false,
  },
  {
    title: `**Mesajul Președintelui României cu ocazia zilei SIE**`,
    date: `**08** Feb 2017`,
    mainImage: "/images/news/noutati_sigla.jpg",
    slug: "comunicat20170208",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">8 Februarie 2017
<p>
<br />

 **<h2 style="text-align: start;color: #173153;">Mesajul Președintelui României, domnul Klaus Iohannis, adresat cu ocazia aniversării a 27 de ani de la înfiinţarea Serviciului de Informaţii Externe</h2>**

<br />
„Astăzi, 8 februarie 2017, marcăm 27 de ani de la înfiinţarea Serviciului de Informaţii Externe, o structură importantă a sistemului naţional de securitate.

<br />
Acest prilej îmi oferă oportunitatea de a-mi exprima aprecierea şi de a adresa mulţumiri pentru întreaga activitate desfăşurată de instituţia dumneavoastră în slujba României.

<br />
<br />
Prin specificul activităţii Serviciului, reprezentaţi una dintre cele mai avansate linii de apărare a statului român şi a intereselor sale, iar prin prezenţa dumneavoastră în zone ostile şi prin asumarea conştientă a riscurilor, contribuiţi consistent la fundamentarea deciziilor de politică externă şi de securitate. Vă faceţi datoria pe deplin, cu eficienţă şi seriozitate, profesionalismul dumneavoastră contribuind la asigurarea climatului de securitate al statului român.

<br />
<br />
În actualul context internaţional, dar mai ales în cel regional, Serviciul de Informaţii Externe şi-a asumat rolul proeminent pe dimensiunea intelligence-ului extern, definindu-se ca un partener credibil în comunitatea informativă euroatlantică. Totodată, Serviciul a contribuit la consolidarea profilului ţării noastre de promotor al principiilor şi valorilor euroatlantice şi participant activ şi predictibil la asigurarea stabilităţii regionale.

<br />
<br />
Rolul Serviciului de Informaţii Externe este important şi în planul relaţiilor şi cooperării internaţionale. România are multiple interese strategice, atât din perspectiva parteneriatului strategic cu SUA şi aliaţii europeni, cât şi în alte regiuni, de la cele vecine până la cele mai îndepărtate, în Orientul Mijlociu şi Nordul Africii, precum şi în Asia - toate având ca numitor comun nivelul ridicat şi diversificat de ameninţări şi riscuri.

<br />
<br />
Sunt conştient de dificultăţile cu care vă confruntaţi, de la lipsa de resurse umane şi materiale, la o legislaţie ce nu mai corespunde pe deplin provocărilor actuale de securitate. Remarc modul în care instituţia a evoluat în această perioadă, adaptându-şi pregătirea şi intervenţia în funcţie de riscuri şi ameninţări şi vă asigur că eforturile dumneavoastră sunt apreciate şi recunoscute la justa lor valoare.

<br />
<br />
O activitate atât de complexă precum cea desfăşurată de către dumneavoastră necesită un nivel maxim de profesionalism şi dedicaţie, experienţă şi implicare - componente determinante ale profilului ofiţerilor de informaţii, în general - care trebuie să se regăsească nu doar în rândul oamenilor din instituţie, ci şi la nivelul conducerii acesteia. Ca militari într-o democraţie, aveţi un rol deosebit de important în apărarea acesteia şi a statului de drept.
<br/>
<br/>
Într-o lume în permanentă schimbare, marcată de pericolele manifestărilor teroriste la adresa democraţiei şi a drepturilor omului, îmi exprim convingerea că Serviciul de Informaţii Externe va continua să-şi îndeplinească la standarde înalte misiunile specifice.

<br />
În aceste clipe aniversare, vă urez mult succes în activitate.

<br />
La mulţi ani!”`,
    isBackground: false,
  },
  {
    title: `**Comunicat de presă** - 25 Ianuarie 2017`,
    date: `**25** Ian 2017`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "comunicat20170125",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">25 Ianuarie 2017<p>
<br />

 **<h2 style="text-align: start;color: #173153;">Comunicat de presă</h2>**
 <br />

**Serviciul de Informații Externe**  constată existența unei ample campanii de manipulare și dezinformare prin lansarea unor așa-zise ”informații” ajunse ”pe surse din SIE” la diverși vectori media periferici și preluate apoi de presa scrisă cu audiență extinsă sau de posturile TV cu acoperire națională.

<br />
Folosirea numelui și autorității  **Serviciului de Informații Externe**  pentru a da credibilitate unor informații false și invocarea ”informațiilor din surse apropiate” scutește autorii de obligația de a aduce probe în favoarea alegațiilor prezentate.
<br />
<br />
În acest fel demersuri inițiate de vectori media minori doar din dorința de notorietate devin, prin preluarea, difuzarea și comentarea unor informații false, un element de natură să inducă confuzie și teamă în rândul populației.
<br />
<br />

**Dorim să precizăm că niciuna dintre ”știrile” vehiculate în ultimele zile, cu atât mai mult existența vreunui document ce urmează a fi prezentat Consiliului Suprem de Apărare a Țării privind ”scenarii de destabilizare a României puse la cale de servicii secrete din Rusia, Ungaria și Moldova” NU SUNT REALE.**`,
    isBackground: false,
  },
  {
    title: `**Comunicat de presă** - 30 Iunie 2016`,
    date: `**30** Iun 2016`,
    mainImage: "/images/news/noutati_sigla.jpg",
    slug: "comunicat20160630",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">30 Iunie 2016<p>
<br />

 **<h2 style="text-align: start;color: #173153;">Comunicat de presă</h2>**

<br />
<h2 style="text-align: start;">În contextul comunicatului de presă al Bitdefender – ”Instituțiile românești din străinătate, ținta unor amenințări cibernetice complexe, menite să sustragă informații”, biroul de presă este abilitat să comunice următoarele:</h2>
<br />
În conformitate cu prevederile în vigoare, ”pentru reprezentanţele României în străinătate, coordonarea activităţii şi controlul măsurilor privitoare la protecţia informaţiilor secrete de stat se realizează de Serviciul de Informaţii Externe, în condițiile prezentei legi” (Legea nr.182/2002, art.26 (1)). Măsurile din domeniul INFOSEC sunt parte integrantă din protecția informațiilor clasificate și acoperă securitatea calculatoarelor, a transmisiilor, a emisiilor, securitatea criptografică, precum şi depistarea şi prevenirea ameninţărilor la care sunt expuse informaţiile şi sistemele.

<br />
<br />
Pe parcursul ultimilor ani, specialiștii SIE au identificat o serie de ”documente” suspecte primite prin Internet pe adrese de e-mail ale unor reprezentanțe diplomatice ale României. În conformitate cu procedurile, fișierele infectate au fost blocate și înlăturate prin folosirea soluțiilor de securitate informatică, printre care și cele produse de Bitdefender. Menționăm că, prin măsurile INFOSEC aplicate de SIE, s-a asigurat protecția sistemelor informatice de comunicații în obiectivele asigurate, neexistând situații de extragere/ compromitere de informații clasificate.

<br />
<br />
Analiza acestor fișiere, efectuată atât intern cât și împreună cu furnizorul de soluții de securitate Bitdefender, cu care am cooperat în acest caz, a permis cunoașterea modului de funcționare a unor programe avansate tehnologic de extragere în secret a informațiilor din calculatoarele conectate la Internet. Acțiunea realizată în cooperare de SIE cu Bitdefender a permis identificarea și corelarea indicatorilor de compromitere, contribuind astfel la creșterea securității informatice.

<br />
<br />
Amenințarea cibernetică este dinamică, modalitățile de atac fiind într-o permanentă evoluție, cum rezultă, de altfel, și din comunicatul Bitdefender. Având în vedere această realitate, minimizarea pericolului se poate realiza, pe de o parte, prin conștientizarea utilizatorilor și aplicarea strictă a procedurilor de securitate și, pe de altă parte, prin acțiuni de cooperare de genul celei de mai sus, care au ca rezultat upgradarea soluțiilor de securitate informatică și, pe cale de consecință, o mai bună protecție a sistemelor informatice.`,
    isBackground: false,
  },
  {
    title: `**Comunicat de presă** - 26 Aprilie 2016`,
    date: `**26** Apr 2016`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "comunicat20160426",
    newsDetails: `
<p style="color: #173153;font-weight: bold;">26 Aprilie 2016<p>
<br />

 **<h2 style="text-align: start;color: #173153;">Comunicat de presă</h2>**

<br />
<h2 style="text-align: start;color: #173153;">Referitor la afirmațiile doamnei Laura Codruța Kovesi, procuror șef DNA, biroul de presă este abilitat să comunice următoarele:</h2>
<br />
<br />
Activitatea SIE se desfășoară în concordanță cu prevederile legale, în speță vizează amenințările la adresa securității naționale așa cum sunt acestea expres și limitativ prevăzute în Legea nr.51/1991, obiectivele informative ale Serviciului fiind stabilite prin Planul Național de Priorități Informative, aprobat anual de CSAT. Totodată, în acord cu specificul și misiunea sa, Serviciul de Informații Externe desfășoară o activitate care are ca prioritate prevenția, prin avertizarea timpurie a beneficiarilor în legătură cu intenții ale entităților ostile care pot aducere atingere securității naționale sau intereselor României.
<br />
<br />
Apreciem că punctul de vedere al doamnei procuror-șef este generat de o neînțelegere a specificului pe care îl incumbă activitatea de informații externe/ spionajul, în speță faptul că obținerea de informații secrete sau confidențiale ce vizează securitatea națională și apărarea intereselor României se realizează preponderent prin surse umane (HUMINT) și metode și mijloace specifice.
<br />
<br />

**SIE nu monitorizează cetățenii români aflați în străinătate**, această practică fiind una specifică fostei Securități, așa cum nu monitorizează conturile și transferurile bancare, achizițiile imobiliare sau de altă natură efectuate de cetățenii români în străinătate. 
<br />
<br />

**În acord cu tratatele internaționale la care România este parte, SIE nu desfășoară activitate specifică pe spațiile aliate (UE, NATO)**, ca urmare nu desfășoară activitate specifică nici în Franța, stat menționat ca exemplu de procurorul șef DNA.
<br />
<br />

**Orice acțiune pe spațiile aliate se desfășoară doar în parteneriat cu structurile de informații locale și strict în limita competențelor serviciilor de informații, așa cum sunt acestea prevăzute și înțelese în Comunitatea Informativă Nord-Atlantică/ UE.**
<br />
<br />
  Activitatea de spionaj este ilegală raportat la statul țintă. Un serviciu de spionaj nu poate obține, în străinătate, în mod autonom și legal, documente clasificate, baze de date, evidențe, date despre conturi, transferuri bancare, etc.  **Accesul se poate realiza prin intermediul surselor umane, persoane recrutate și gestionate conspirat și legendat și care, prin acțiunile lor, încalcă legislația statului de origine, săvârșind infracțiunea de spionaj/ trădare. Activitatea de spionaj este o resursă foarte importantă a statului, focalizată pe obținerea de informații secrete, protejate de state/ entități, vizând amenințări la adresa securității naționale.**  Având în vedere riscurile inerente activității, riscuri pe care ofițerii SIE sunt pregătiți să și le asume și antrenați să le gestioneze,  **spionajul este angrenat în zone care nu pot fi accesate pe altă cale, în speță atunci când informațiile nu pot fi obținute pe canale legale cum sunt cele generate de cooperarea polițienească, schimbul de date între instituții cu atribuții de control financiar, mecanisme judiciare sau, în unele situații, chiar prin abonamente la baze de date publice.**

<br />
<br />
În cursul cercetării informative, SIE obține, țintit sau colateral, și informații referitoare la intenții de încălcare a legii de către persoane fizice sau juridice române sau străine. Informațiile SIE nu se pot constitui în probe în instanță, întrucât sunt obținute prin surse umane cetățeni străini, cu mijloace și metode specifice, care  _”nu pot fi dezvăluite nimănui și în nicio împrejurare”._**Respectând cu strictețe atât propria lege de organizare și funcționare cât și protocoalele de cooperare și competențele celorlalte structuri din Sistemul Securității Naționale, acest tip de informații sunt transmise spre completare, validare și exploatare acelor instituții ale statului cu atribuții și posibilități legale, în speță SRI, MAI, ONPCSB, etc.**
<br />
<br />

**Astfel, în cursul anului 2015 și în primele luni ale anului 2016, SIE a transmis către SRI, MAI, ONPCSB, ANAF, MApN/DGIA sau alți beneficiari 35 note informative/ semnalări/ alerte vizând aspecte corelate fenomenului de corupție/ infracțiunilor economice.**
<br />
<br />
Totodată, în același interval de timp, SIE a transmis beneficiarilor legali 10 materiale (analize strategice/ buletine tematice/ note de informare) pe subiecte vizând riscuri la adresa securității economice (inclusiv aspecte privind economia subterană, perpetuarea corupției).
<br />
<br />

**Menționăm, de asemenea, că Serviciul primește în mod curent și răspunde cu promptitudine la solicitări punctuale de verificare vizând entități economice, persoane fizice sau juridice cu interese de afaceri în România (credibilitate acționari, implicare în acțiuni ilegale conexe traficului de droguri, finanțarea organizațiilor teroriste, etc. ). În perioada de referință, SIE a răspuns la 30 astfel de solicitări, beneficiarii principali fiind, de asemenea, SRI și MAI.**

<br />
<br />
Pentru corecta informare a opiniei publice, precizăm faptul că, în contextul în care SIE nu are acces la activitatea sau dosarele aflate în lucru la DNA sau la identitatea suspecților din aceste dosare, în intervalul temporal la care face trimitere procurorul șef DNA,  **SIE nu a primit nicio solicitare de verificare sau obținere de informații vizând vreo persoană fizică sau juridică cercetată pentru fapte de corupție.**`,
    isBackground: false,
  },
  {
    title: `_Discursul susținut de domnul Mihai-Răzvan UNGUREANU, director al Serviciului de Informații Externe, în cadrul conferinței de la Viena, din perioada 7 - 8 aprilie 2016_ ...`,
    date: `**19** Mar 2016`,
    mainImage: "/images/news/noutati_sediu2.png",
    slug: "interviu20160419",
    newsDetails: `
# **Cooperarea dintre Austria și țările din vecinătate, cu accent pe criza refugiaților, combaterea terorismului și extremismului și cooperarea economică**

<h2 style="color: #173153;">(Viena, 7-8 aprilie 2016)</h2>
<br />


**Extremismul islamic: grupurile de migranți reprezintă o țintă în sensul penetrării lor de către extremiști? Este aceasta o problemă pentru Austria? Este aceasta o problemă importantă la nivel pan-european?**
<br />
<br />
 Într-o Uniune Europeană marcată de provocări structurale, tema fluxului migraționist readuce în discuție principiile de bază ale construcției comunitare, fie că vorbim despre dreptul indivizilor la protecție împotriva persecuției și liberă circulație sau despre comunicarea liberă și onestă între partenerii europeni. Subiectul refugiaților a depășit cadrul deciziilor politice și administrative, devenind un debușeu al problemelor sociale, temerilor latente și clivajelor ce caracterizează societatea europeană.
<br />
<br />
Mizele mari, multitudinea actorilor implicați și a punctelor lor de vedere au deviat dezbaterea: societatea europeană caută în continuare soluții la problema refugiaților, când de fapt  _supapa migraționistă a fost soluția strategică cu impact pe termen mediu/lung_  menită să prevină consecințe mult mai dramatice pentru arealul de securitate european și interesele UE în plan global.
<br />
<br />

Creșterea bruscă a fluxului migratoriu spre Europa1  a fost cauzată de deteriorarea accentuată a situației de securitate în Orientul Mijlociu/Africa de Nord, mai ales ca urmare a extinderii prezenței DAESH şi radicalismului. La aceasta s-au adăugat destabilizarea situației de securitate din regiunea Afganistan/Pakistan, insurgența ISWAP/Boko Haram în Nigeria, situația umanitară din Sudanul de Sud, extinderea operațiunilor DAESH în Somalia și condițiile dificile de trai din Eritreea, care au mobilizat în același flux un număr considerabil de migranți din Asia de Sud și Africa.
<br />
<br />
Debușeul european a permis reducerea presiunii migraționiste asupra statelor din vecinătatea ariei Siria-Irak (Turcia, Libanul și Iordania fiind parteneri importanți ai UE și actori-cheie în menținerea balanței de securitate în regiune) și a prevenit reorientarea rutelor prin Libia. În caz contrar, afluxul masiv de refugiaţi ar fi agravat situația de securitate și echilibrul confesional fragil din regiune, riscând alimentarea tensiunilor intertribale și conflictului sectar, care ar fi favorizat expansiunea DAESH spre granițele Europei, dislocând un număr și mai mare de persoane.
<br />
<br />
În acest moment numai o înțelegere profundă în societatea europeană a acestei conjuncturi geopolitice, dar mai ales a propriilor predispoziții cognitive, va imprima dezbaterii publice pe temă relevanța și obiectivitatea necesare.
<br />
<br />
Reevaluarea modului de abordare a fenomenului migraționist devine vitală pentru viitorul construcției europene, deoarece în substratul dezbaterilor sunt chestionate principiile democrației, iar actuala percepție asupra riscului de proliferare a extremismului islamic este cel mai bun exemplu.
<br />
<br />

**1.**  Modul de abordare a acestui subiect în dezbaterea occidentală, pe tonalități mai mult sau mai puțin emoționale, încalcă  **principiul nediscriminării**  și alimentează xenofobia. Se omite transformarea inerentă pe care indivizii o suferă sub acțiunea societății și faptul că refugiații nu sunt a priori purtătorii unor concepții radicale, ci persoane al căror sistem de valori se adaptează relativ facil la lumea înconjurătoare. În plus, majoritatea sunt victime ale Islamului radical.
<br />
<br />
Riscul de proliferare a extremismului islamic riscă să devină expresia profeției autoîmplinite. Acesta nu constituie o variabilă independentă în ecuația de securitate a UE, ci depinde de capacitatea societății de a integra grupurile de refugiaţi. Eventualele viziuni radicale se pot modera ca formă de adaptare la o societate primitoare, în schimb izolarea refugiaților va conduce la segregare, iar comunitățile vor deveni teren propice pentru propagarea ideilor extremiste, favorizând apariția unor subculturi ale urii.
<br />
<br />

 **2.**  Retorica antimigraționistă a formațiunilor extremiste capitalizează politic subiectul extremismului islamic, cu impact asupra  **principiului diversității culturale**, promovat la nivel european. Se introduce subtil ideea conflictului între valorile occidentale și cele islamice, în care refugiații reprezintă „arma din spatele frontului”.
<br />
<br />
 Valorificând impactul emoțional produs în societățile europene de atrocitățile DAESH și atentatele comise în Europa, formațiunile extremiste exagerează anvergura extremismului. Este eludată varietatea ce caracterizează personalitățile incluse sub eticheta colectivă de refugiați, iar extremismul islamic devine în mentalul colectiv cartea de vizită a Islamului, favorizând pe termen mediu/lung tensiuni interconfesionale în spațiul european.
<br />
<br />
 În plus, această retorică valorifică predispoziția actuală a audienței europene la subiecte cu caracter naționalist și xenofob, încurajând actele de violență la adresa refugiaților și centrelor de cazare, cu consecințe imediate în planul securității interne.
<br />
<br />

 **3.**  Teama de a recunoaște deficiențele înregistrate în domeniul integrării sustenabile a migranților favorizează o spirală a greșelii, încălcând  **principiul comunicării oneste și constructive**  între partenerii europeni.
<br />
<br />
 Riscul unor noi atentate teroriste pe teritoriul european este asociat tot mai mult în percepția publică cu scenariul infiltrării elementelor radicale între refugiați. Se omite, însă, diferența dintre acțiunile inspirate de grupări teroriste (comise de cetățeni europeni, a căror integrare precară în societatea-gazdă a generat un conflict între valorile specifice societății de referință și cele ale societății de apartenență), respectiv cele coordonate de aceste grupări (intră în categoria amenințărilor externe, vectorul lor fiind un actor non-statal internațional; în același timp contextul migraționist este doar conjunctural, în absența sa grupările teroriste orientându-se către alte pârghii).
<br />
<br />

 **4.**  Percepțiile radical diferite asupra riscului de proliferare a extremismului islamic în spațiul european sunt  **expresia unei duble crize de neîncredere**: cea a cetățenilor europeni în deciziile politice naționale (consecință a nemulțumirilor, exploatate în retorica actorilor antisistem), respectiv a cetățenilor și decidenților naționali în sustenabilitatea proiectului european (consecință a pozițiilor naționale divergente și disponibilității la compromis tot mai reduse a partenerilor).
<br />
<br />
În dezbaterea privind extremismul islamic devine tot mai vizibil clivajul între:
<br />
<br />

**(i)**  agenda publică și cea oficială - populația invocă exhaustiv riscul elementelor radicale pentru continentul european, ignorând declarațiile instituțiilor oficiale, rezervate în lansarea scenariilor apocaliptice și promotoare ale unor abordări echilibrate;
<br />
<br />

 **(ii)**  agenda națională și cea comunitară - măsurile de urgență adoptate de unele state europene în domeniul migrației sunt soluții temporare și pot fi înțelese ca necesitate de securitate națională pe termen scurt, dar permanentizarea lor creează vulnerabilități pentru toți actorii europeni și proiectul comunitar în ansamblu. Interesele particulare ale statelor membre sunt percepute drept subiect tabu la nivel comunitar, dar acceptarea realității pluralității viziunilor reprezintă un prim pas spre identificarea unei soluții comune durabile.
<br />
<br />

 **5.**  Predispoziția societății europene de a judeca politicile comunitare exclusiv prin prisma avantajelor imediate (consecință a nemulțumirilor accentuate și lipsei de încredere în administrația națională/europeană) împiedică  **implementarea eficientă a unor strategii proactive pe termen lung**, precum cea în domeniul migrației.
<br />
<br />
Mediul internațional s-a schimbat radical, iar orizontul riscurilor s-a lărgit. Preocuparea excesivă față de presupuse riscuri imediate - cum este cazul alimentării artificiale a temei extremismului islamic - împiedică identificarea și gestionarea corespunzătoare a adevăratelor amenințări, care țin în acest moment de reechilibrarea balanței geopolitice.
<br />
<br />
 În „dosarul” migrației miza este, de fapt, rolul global al UE. Pe de o parte, trebuie să demonstreze că este capabilă să asigure securitatea actuală și viitoare a propriei vecinătăți (MENA trece printr-un proces profund/amplu de metamorfoză, iar interacțiunea elitelor din aceste state - acum în majoritate cu statut de refugiați - cu societatea occidentală va contribui pe termen lung la reconstrucția pe baze solide a statelor arabe), iar pe de alta trebuie să infirme acuzele legate de abordarea reactivă a problemelor de securitate, demonstrând capabilități proactive și gândire strategică pe termen lung.
<br />
<br />
 Migrația nu este un dosar singular, aceeași logică se aplică problemelor legate de protecția mediului înconjurător și folosirea judicioasă a resurselor, sistemul educațional și piața muncii, toate fiind expresia investițiilor în viitor.
<br />
<br />

 **6.**  Un factor agravat în dezbaterea publică europeană pe tema extremismului islamic îl constituie  **folosirea abuzivă a libertății de exprimare**.
<br />
<br />
 Supramediatizarea și redările părtinitoare din presa occidentală pe tema extremismului islamic alimentează predispozițiile cognitive ale audienței, făcând apel mai curând la latura emoțională decât la rațiune.
<br />
<br />
 Dezbaterea privind riscul reprezentat de grupurile de refugiaţi pentru statele europene se confruntă cu principala problemă a societății informaționale specifică secolului XXI: societatea are acces la un volum colosal de informații, dar deține tot mai puține instrumente pentru a discerne informațiile cu adevărat relevante. Succesul propagandei ostile nu mai depinde de capacitatea de a ascunde informațiile cum se întâmpla în timpul Războiului Rece, ci de capacitatea de a desfășura un bombardament informațional capabil să distragă atenția canalizând-o doar spre anumite fațete ale realității.
<br />
<br />
 Dincolo de ecourile sociale ale acestei dezbateri rămân, însă, lecțiile de fond despre societatea europeană. Absența unei abordări critice asupra fenomenelor și a unei comunicări oneste între parteneri întârzie identificarea de soluții durabile și propagă un model social nesustenabil, ce supraestimează posibilităţile reale de schimbare și incriminează învățarea din greșeli.



----------

  <pre> </pre>


----------

1  Potrivit Agenției ONU pentru refugiați, mai mult de 700.000 de persoane au ajuns în 2015 în state europene (comparativ cu 280.000 în 2014). Dintre acestea, peste 560.000 au intrat în Grecia și 140.000 în Italia, state care rămân principalele puncte de intrare în UE. Numărul exact al refugiaţilor este, însă, dificil de estimat, având în vedere că mulți reușesc să treacă fraudulos granițele sau evită completarea cererilor de azil în încercarea de a ascunde motivația economică a migrației sau interesul de a ajunge într-o anumită țară din Europa.`,
    isBackground: false,
  },
  {
    title: `_Alocuțiunea susținută de domnul Mihai-Răzvan UNGUREANU, director al Serviciului de Informații Externe, în cadrul dezbaterii publice organizate de Comisia pentru Afaceri Europene, Camera Deputaților_ ...`,
    date: `**17** Mar 2016`,
    mainImage: "/images/news/noutati_sigla.jpg",
    slug: "interviu20160317",
    newsDetails: `
# „**Securitatea cibernetică în contextul amenințărilor asimetrice și riscurilor emergente”**

<h2 style="color: #173153;">(Comisia pentru Afaceri Europene din Camera Deputaților, 17 martie 2016)</h2>
<br />
<br />
 Invenția scrisului a permis omenirii să depășească perioada preistorică, iar progresul ulterior al tehnologiei informației și comunicării a transformat permanent societatea. Astăzi, însă, dezvoltarea fără precedent a tehnologiei digitale face tot mai dificilă adaptarea societății la ritmul schimbării: dacă dezvoltarea telefoniei sau rețelelor de televiziune a durat decenii, timp în care societatea a avut timp să asimileze inovațiile, în prezent crearea unui serviciu media durează doar câteva săptămâni. Milioane de oameni ajung să-l folosească la câteva zile de la lansare, ideile lor propagându-se în câteva ore de la un continent la altul.
<br />
<br />
 Internetul a devenit indispensabil în cotidianul secolului XXI, fiind strâns legat de viața noastră socială, obiceiurile de consum, activitatea profesională, relația cu instituțiile publice și accesul la utilități. Societatea este tot mai dependentă de o tehnologie ale cărei beneficii evidente riscă să ascundă implicații complexe, deseori necunoscute publicului.
<br />
<br />

 **1. Dependența de tehnologie**, ca orice altă dependență, este percepută de actorii ostili drept o  **vulnerabilitate a societăților dezvoltate**, ce poate fi lesne exploatată în absența conștientizării de către indivizi a riscurilor existente în mediul digital.
<br />
<br />
 Securitatea cibernetică este legată de fiecare aspect al vieții noastre în care tehnologia a reușit deja să pătrundă (datele personale, fie ele de identitate, bancare sau legate de sănătate, proprietatea intelectuală, secrete industriale, secrete de stat etc.), fiind la fel de importantă pentru viitorul nostru ca și securitatea fizică. Concomitent, instituțiile de stat funcționează pe baza unor sisteme informatice complexe, ce pot fi cu ușurință dereglate de programe de tip malware.
<br />
<br />
 Actuala dinamică a spațiului cibernetic, atât în termeni de inovații tehnologice cât și de diversitate geografică a furnizorilor de echipamente, nu permite înlăturarea acestei amenințări, ci doar gestionarea sa prin:
<br />
<br />

**(i)**  responsabilizarea tuturor actorilor sociali cu privire la formele diferite pe care le pot lua atacurile cibernetice, de la compromiterea infrastructurii critice, până la furtul de informații clasificate, de date personale sau inovații tehnologice;

**(ii)**  actualizarea permanentă a instrumentelor de apărare prin instalarea unor aplicații puternice menite să împiedice accesarea neautorizată a echipamentelor de la distanță;

**(iii)**  vigilența sporită în privința furnizorilor de servicii/echipamente, care pot introduce hardware sau software compromis în diferite etape ale lanțului de aprovizionare.

<br />
<br />

 **2.**  La nivel global a  **crescut frecvența, amploarea, complexitatea și gravitatea atacurilor de tip cibernetic, concomitent cu diversificarea țintelor acestora**. Tot mai mulți actori internaționali dezvoltă instrumente puternice în spațiul cibernetic pe care le folosesc ofensiv pentru a-și promova interesele ideologice, politice sau economice. Pe de altă parte, capabilitățile defensive se dezvoltă, cel puțin deocamdată, reactiv.

<br />
<br />

Principalii vinovați rămân actorii statali, cei non-statali - precum grupările teroriste și anti-sistem - rezumându-se deocamdată la a folosi tehnologia în special pentru comunicații, colectare/diseminare de informații, colectare de fonduri și recrutare.

<br />
<br />

Deși terorismul cibernetic nu a produs încă pagube însemnate, este clar că tehnologia atacurilor evoluează de la pagube medii la amenințări serioase la adresa securității informațiilor și infrastructurii critice naționale.
<br />
<br />

Amploarea acestui fenomen va crește pe măsură ce tot mai mulți actori internaționali vor conștientiza câștigurile însemnate ce pot fi obținute în urma unor atacuri cibernetice: efortul de realizare este relativ redus, inițial atacatorul deține toate avantajele, nu există nicio formă reală de descurajare, iar riscul de retaliere este minimal (este dificil de diferențiat între inițiativele actorilor statali și celor non-statali, dacă aceștia cooperează deschis sau tacit sau folosesc instrumente similare).

<br />
<br />

Cu toate acestea, riscul de atacuri cibernetice este în continuare dificil de estimat, de regulă lipsind datele necesare pentru a anticipa cu certitudine probabilitatea și consecințele acestora, ceea ce dă naștere unor interpretări subiective.

<br />
<br />

De regulă, pentru instituțiile din domeniul securității consecințele dezastruoase ale unui atac cibernetic de anvergură primează în fața probabilității reduse ca acesta să se întâmple. Astfel, există tendința de supraevaluare a riscului în cazul terorismului și războiului cibernetic. În același timp, pentru indivizi/companii impactul redus al unor episoade de criminalitate cibernetică și  _hacking_  atrage o subevaluare a riscului, în pofida frecvenței mari a acestor incidente și pierderilor cumulate semnificative.
<br />
<br />

**3.**  Statele și societățile s-au definit tradițional pe criterii geografice, iar spațiul cibernetic le provoacă să se adapteze unei noi fațete a globalizării, cea în care interacțiunile virtuale transcend în timp record granițele convenționale. Din acest motiv  **statele încearcă să controleze diferitele dimensiuni ale internetului:**
<br />
<br />

 →  _conținutul datelor circulate_  în mediul virtual, din rațiuni pornind de la respectarea drepturilor de proprietate intelectuală (temă specifică societăților democratice), până la cele de cenzurare a datelor (specifice regimurilor autoritare).
<br />
<br />

Concomitent se recurge la conștientizarea populației asupra instrumentelor de tip propagandă folosite în mediul virtual pentru a promova interesele diferiților actori.
<br />
<br />

Impactul geopolitic al efervescenței din spațiul digital crește exponențial odată cu schimbarea rapidă a demografiei utilizatorilor spațiului virtual dinspre Nord și Vest către Sud și Est. Este foarte posibil ca într-un viitor nu foarte îndepărtat alte voci decât cele americane și europene să vorbească mai răspicat în mediul virtual, promovând valori și idei diferite de cele cu care societatea occidentală este obișnuită;
<br />
<br />

→  _nucleul tehnic al Internetului_  (format din protocoalele, standarde, sisteme de alocare a numelor de domenii etc.). Anterior domeniu adresat exclusiv „comunității tehnice”, acesta a intrat recent în sfera preocupărilor de securitate națională1.
<br />
<br />

Astfel, se pune problema respectării în domeniul datelor digitale a principiilor de confidențialitate (țintă a spionajului cibernetic), integritate (ținta criminalității cibernetice) și disponibilitate (ținta atacurilor de tip DOS și a ștergerii de date).
<br />
<br />

În absența unor norme unanim recunoscute ale spațiului digital, garantate de instituții cu atribuții în domeniu, acțiunile statelor de promovare a intereselor politico-economice la nivel global prin intermediul Internetului au transformat mediul digital într-un nou Vest Sălbatic.
<br />
<br />

Pe parcursul istoriei inovațiile tehnologice au contribuit decisiv la schimbarea balanței de putere, iar mediul digital nu face excepție, absența reglementărilor favorizând o cursă contra-timp a primilor veniți, urmată de o cursă digitală a înarmărilor între actorii consacrați. Mediul digital și-a câștigat, astfel, statutul de  _armă specifică războiului hibrid al secolului XXI_, în detrimentul celui de  _bun comun global_, caracterizat de respectarea valorilor universalității, interoperabilității și accesibilității datelor.
<br />
<br />

_Deși probabilitatea unui atac cibernetic catastrofic la adresa României rămâne redusă, dependența în creștere a societății de tehnologie și interdependențele sistemice între diferitele sectoare ale infrastructurii critice creează aceleași vulnerabilități pentru toate statele dezvoltate. Acestea expun întreaga societate la atacuri cibernetice de amploare redusă și moderată, derulate cu o frecvență mare, ale căror costuri cumulative pot afecta sever interesele de securitate națională, fie că vorbim despre protejarea instituțiilor publice sau de competitivitatea companiilor autohtone pe o piața globală._
<br />
<br />



----------


  <pre> </pre>

----------

1Exemple:  _S-a ridicat problema ieșirii de sub influență americană a sistemului de administrare a numelor și numerelor pe internet/IANA, respectiv cea a integrării sistemelor de certificate de securitate/CERT._`,
    isBackground: false,
  },
];

export const EMPLOYER_CONDITION = {
  title: "Condiții Generale de Încadrare",
  list: [
    {
      id: 1,
      title: "Cetățenie / țara de reședință",
      description: [
        "Cetățenia română și domiciliul stabil în România sunt condiții stipulate prin legislația în vigoare.",
      ],
    },
    {
      id: 2,

      title: "Discreție",
      description: [
        "Intenția de a candida pentru un post în SIE nu trebuie dezvăluită decât persoanelor autorizate să cunoască aceste aspecte.",
        "Statutul de cadru SIE este special, iar cunoașterea calității reale poate periclita desfășurarea misiunilor încredințate și siguranța personală.",
        "Personalul este obligat să fie discret în ceea ce privește informațiile și documentele gestionate în timpul activității profesionale sau prin prisma funcției pe care o ocupă.",
      ],
    },
    {
      id: 3,
      title: "Studii",
      subTitle:
        "Candidații pentru posturile de ofițer trebuie să fie absolvenți cu diplomă de licență a unei instituții de învățământ superior acreditate.",
      description: [
        "Pentru o carieră în unele activități de suport logistic, administrativ, secretariat, operator baze de date și pază, care presupun încadrarea pe posturi de subofițer, sunt suficiente studiile liceale.",
        "Media de absolvire și rezultatele obținute pe parcursul anilor de studiu reprezintă criterii de departajare.",
      ],
    },
    {
      id: 4,
      title: "Cunoștințe de limbi străine",
      description: [
        "Aspiranții la o carieră de ofițer în SIE trebuie să cunoască cel puțin o limbă străină, pe care să o utilizeze în conversație, citit și scris. De asemenea, să posede aptitudini pentru învățarea altor limbi străine, în funcție de necesitățile concrete ale SIE. Cerința este similară și pentru candidații pe posturi de subofițer pază.",
        "Constituie un avantaj pentru încadrare cunoașterea mai multor limbi străine sau a unei limbi rare.",
      ],
    },
    {
      id: 5,
      title: "Calități specifice domeniului operativ",
      description: [
        "Un viitor ofițer în domeniul informațiilor externe trebuie să aibă calități și aptitudini care să-i permită să stabilească și să cultive cu ușurință relații personale, respectiv dinamism, îndrăzneală, adaptabilitate, spontaneitate, creativitate, deschidere socială, provocare continuă de dezvoltare personală.",
        'Calitățile trebuie să fie însoțite de dorința de a merge pe căi neumblate, de a cunoaște diverse medii sociale și culturale. Meseria, văzută ca „misterioasă", este făcută de oameni cu o structură aparte, oameni care acceptă să lucreze "fără publicitate", care nu pot vorbi despre ei înșiși, nu pot deveni celebri.',
      ],
    },
    {
      id: 6,
      title: "Cerințe speciale",
      description: [
        "Este obligatoriu ca persoanele care aspiră la o carieră în SIE să nu fi suferit condamnări penale sau să se afle în preocuparea autorităților române sau internaționale pentru încălcarea legii. De asemenea sunt incompatibili candidații care fac parte din organizații interzise de lege sau din organizații secrete, precum și cei care sunt consumatori de droguri sau dependenți de alcool.",
        "Angajarea în SIE presupune relocarea în București.",
      ],
    },
    {
      id: 7,
      title: "Apartenența la organizații și partide politice",
      description: [
        "Neimplicarea politică reprezintă un principiu de bază al activității SIE. În consecință, angajaților SIE nu li se permite să fie înscriși în partide, organizații politice, sindicale sau să desfășoare activități de natură politică.",
      ],
    },
    {
      id: 8,
      title: "Starea de sănătate",
      description: [
        "Candidații trebuie să corespundă criteriilor stabilite prin baremul medico- militar.",
      ],
    },
    {
      id: 9,
      title: "Limite de vârstă",
      description: [
        "Pentru domeniul operativ - 35 de ani.",
        "Pentru domeniul pază - 32 de ani.",
        "Pentru celelalte domenii de activitate - 45 ani.",
      ],
    },
    {
      id: 10,
      title: "Prezintă un avantaj deținerea",
      description: [
        "permisului de conducere categoria B.",
        "de competențe operare PC",
      ],
    },
    {
      id: "11",
      title: "Etapele necesare a fi parcurse pentru încadrare:",
      description: [
        "Interviul de cunoaștere;",
        "Evaluarea psihologică;",
        "Evaluarea profesională/ assessment center;",
        "Evaluarea cunoștințelor de limbă străină, după caz;",
        "Verificările de securitate;",
        "Controlul medical;",
        "Comisia de evaluare finală.",
      ],
    },
    {
      id: 12,
      title:
        "Etapele de evaluare au ca scop cunoașterea și evaluarea calităților și abilităților candidatului, în scopul identificării celei mai bune poziții pentru acesta, acolo unde performanța lui poate ajunge la cel mai înalt nivel.",
    },
  ],
};

export const JOB_OFFER = {
  title: "APLICĂ",
  subTitle: "Oferta de joburi",
  heading: "Iată oferta de joburi disponibile",
  headingSpan: "ACUM!",
  secondHeading: "Aplicați până în 15 iunie 2023",
  data: [
    {
      title: "Ofițer operativ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior
    

-   inteligență peste medie și cultură generală solidă
    

-   abilități excelente de comunicare / relaționare
    

-   creativitate, spontaneitate, adaptabilitate, flexibilitate și spirit organizatoric
    

-   capacitate de analiză, de luare a deciziilor și, implicit, de asumare a responsabilității
    

-   disponibilitate de a executa misiuni externe
    

-   cunoașterea fluentă a unei limbi de circulație internațională (cunoștințele de limbi străine rare reprezintă un avantaj)
    

#### Responsabilități:

-   desfășoară activități operative care implică relaționare, analiză și luare de decizii în contexte variate, inclusiv internaționale
    

-   gestionează informații sensibile și își adaptează constant acțiunile la situații neprevăzute`,
    },
    {
      title: "Ofițer analiză strategică",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior
    

-   gândire critică, curiozitate, interes pentru studiu/cercetare; atenție la detalii
    

-   capacitate bună de selectare, sintetizare, conexare a informațiilor și redare a concluziilor în scris și oral
    

-   abilități de comunicare/ relaționare și capacitate bună de lucru în echipă
    

-   inteligență de nivel superior și cunoștințe avansate de cultură generală
    

-   interes pentru dezvoltare profesională continuă
    

-   cunoașterea fluentă a unei limbi de circulație internațională
    

#### Responsabilități:

-   realizează activități de analiză strategică prin colectarea, interpretarea și sintetizarea informațiilor relevante, contribuind la fundamentarea deciziilor
    

-   participă activ la procese de documentare, redactare și dezvoltare continuă în domeniul său de expertiză`,
    },
    {
      title: "Ofițer analiză rețele sociale/ exploatare mediul online ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior (constituie avantaj specializările: marketing și comunicare, sociologie, științe politice, relații internaționale/diplomație, limbi străine)
    

-   cunoașterea fluentă a limbii engleze (cunoașterea mai multor limbi străine reprezintă un avantaj)
    

-   cunoștințe de operare PC și de navigare în mediul online (cunoaște particularitățile/  utilizează rețele de socializare, aplicații de chat)
    

-   bune abilități de comunicare și persuasiune
    

-   creativitate, curiozitate și pasiune pentru explorarea mediului virtual
    

-   gândire critică/gândire laterală pentru gestionarea unor situații complexe (abordare inovativă pentru identificarea de soluții într-un context dinamic)
    

-   persoană energică/entuziastă, cu interes pentru autodezvoltare și deschisă la activități noi.
    

#### Responsabilități:

- identifică în mediul online de informații tactice de interes național

- elaborează materiale analitice de complexitate crescută privind agresiuni informaționale derulate de actori ostili la adresa României`,
    },
    {
      title: "Ofițer analiză surse deschise/ monitorizare media ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior (constituie avantaj specializările: jurnalism, limbi străine, științe politice, relații internaționale, securitate, istorie)
    

-   cunoștințe avansate de limba engleză (cunoașterea mai multor limbi străine reprezintă un avantaj)
    

-   cunoștințe de operare PC și de navigare în mediul online
    

-   gândire critică, analitică, argumentare logică și exprimare concisă
    

-   adaptabilitate, corectitudine și rezistență la stres
    

-   persoană energică/entuziastă, flexibilă, cu inițiativă și deschisă la activități noi
    

#### Responsabilități:

-   semnalează operativ informațiile de interes pentru SIE din mass media și social media, inclusiv elementele care indică probabilitatea apariției unor crize la nivel internațional
    

-   elaborează materiale analitice complexe din mass media/social media, pe teme de actualitate`,
    },
    {
      title: "Ofițer cybersecurity ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior profil automatică, informatică, electronică, telecomunicații
    

-   cunoștințe generale despre proiectarea, implementarea și administrarea sistemelor informatice și de comunicații
    

-   cunoștințe solide despre securitatea informației: sisteme de operare (client/server), aplicații, rețele de date, comunicații
    

-   înțelegerea amenințărilor și vulnerabilităților asociate serviciilor și soluțiilor it&c
    

-   familiaritate cu utilizarea soluțiilor de scanare a vulnerabilităților
    

-   abilități de analiză și sinteză a informațiilor din multiple surse de securitate și de redactare de rapoarte tehnice
    

#### Constituie avantaj:

-   experiență în utilizarea instrumentelor specifice de monitorizare, analiză și răspuns la incidente
    

-   cunoștințe de scripting (ex: Bash, Python, PowerShell etc.)
    

#### Responsabilități:

-   proiectează, implementează, administrează și operează sisteme de monitorizare, detecție și răspuns la atacuri cibernetice
    

-   evaluează informațiile de audit generate de sistemele monitorizate
    

-   identifică și analizează incidentele de securitate și elaborează documentații tehnice specifice domeniului securității cibernetice`,
    },
    {
      title: "Ofițer cercetare/dezvoltare software/hardware ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ superior de specialitate (perspectiva de carieră se adresează inclusiv studenților în ani terminali)
    

-   cunoștințe de programare în cel puțin un limbaj: C/C++, C#, Java, Kotlin, JavaScript, Python, Verilog, VHDL, PHP
    

-   experiență în dezvoltarea de aplicații web, server, mobile sau desktop (ex: WCF, SOAP, JSON, Celery, schedulers)
    

-   cunoștințe solide despre securitatea informației: sisteme de operare, aplicații, rețele, comunicații, amenințări și vulnerabilități IT&C
    

-   familiaritate cu jQuery și framework-uri web (ASP.NET, Django, ReactJS, Angular)
    

-   experiență cu metodologii de dezvoltare Scrum/Agile și cu platforme de versionare (GitHub, Bitbucket)
    

-   cunoștințe privind baze de date relaționale (RDBMS/SQL) și/sau NoSQL (Elasticsearch, MongoDB)
    

-   noțiuni de inteligență artificială: computer vision, NLP, RPA, machine  learning, rețele neuronale, robotică IA, procesarea vorbirii
    

#### Constituie avantaj:

-   experiență cu proiecte care includ componente criptografice
    

-   certificări în dezvoltare software
    

-   realizări personale concrete în dezvoltare software (mobile/web/server/desktop, librării proprii, AI etc.)
    

-   cunoștințe despre testare automată: Unit Testing, TDD, Selenium, Cypress, Postman
    

-   înțelegerea arhitecturilor software și a design pattern-urilor
    

-   experiență de lucru cu distribuții Linux, Git, mașini virtuale, containere Docker
    

-   familiaritate cu metodologia DevOps și tehnologii CI/CD (GitLab, Jenkins)
    

-   cunoștințe de matematică relevante pentru IA (algebră liniară, statistică, probabilități, analiză matematică)
    

-   noțiuni de teorie a informației, data mining și data visualization
    

#### Responsabilități:

-   proiectează și dezvoltă soluții tehnice cu rol ofensiv și defensiv în cadrul unor proiecte complexe ce implică software, hardware și inteligență artificială
    

-   analizează și testează tehnologii noi pentru a propune și implementa soluții inovatoare de automatizare și optimizare a proceselor`,
    },
    {
      title: "Ofițer criptologie ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ universitar în domeniul matematicii sau IT&C
    

-   cunoștințe solide în unul sau mai multe dintre următoarele domenii:
    

-   teoria informației
    

-   teoria numerelor
    

-   geometrie diferențială
    

-   teoria algoritmilor
    

-   statistică și probabilități
    

-   algebră
    

-   abilitatea de a aplica cunoștințele teoretice în criptologie sau securitate informațională
    

-   cunoștințe de informatică și programare; stăpânirea a cel puțin unui limbaj de programare
    

#### Constituie avantaj:

-   cunoștințe despre criptologie clasică și modernă
    

-   capacitatea de analiză și interpretare a datelor statistice și cantitative
    

-   familiarizare cu arhitecturi software și pattern-uri de programare
    

#### Responsabilități:

-   proiectează și dezvoltă algoritmi și mecanisme criptografice adaptate nevoilor instituționale
    

-   realizează criptanaliza și evaluează nivelul de securitate asigurat de diferite soluții criptografice în funcție de serviciile de securitate implementate într-un sistem`,
    },
    {
      title: "Ofițer evaluare criptografică ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ universitar în domeniul IT&C sau inginerie electronică
    

-   cunoștințe de bază despre crearea și administrarea rețelelor de calculatoare
    

-   noțiuni privind instalarea, configurarea și utilizarea sistemelor de operare (Windows, Linux) și a mașinilor virtuale
    

-   cunoștințe de bază despre securitatea comunicațiilor prin internet și elemente de criptografie
    

-   cunoștințe de programare la nivel începător, utilizând cel puțin un limbaj high-level (ex: Python, JavaScript, TypeScript, Go, C#, C++, Java, Kotlin)
    

-   abilități de planificare, realizare și finalizare a proceselor de testare
    

#### Constituie avantaj:

-   experiență anterioară ca tester
    

-   cunoștințe avansate în criptografie și securitatea comunicațiilor online
    

-   familiaritate cu metodologii de testare (funcțională, securitate, cod sursă, conformitate – FIPS, Common Criteria)
    

-   stăpânirea a cel puțin două limbaje de programare la nivel mediu
    

-   utilizarea unor platforme și instrumente specifice pentru testare
    

-   noțiuni privind șabloane de programare și arhitecturi software
    

#### Responsabilități:

-   testează și evaluează produsele criptografice în vederea validării nivelului de protecție oferit asupra informațiilor, conform cerințelor instituționale și standardelor de securitate.`,
    },
    {
      title: "Ofițer exploatare cifru ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ universitar
    

-   cunoștințe de operare pc: sisteme de operare, pachet office, e-mail și securitate informatică de bază
    

-   înțelegerea componentelor funcționale ale calculatoarelor și întreținerea echipamentelor
    

-   noțiuni de gestionare a documentelor în format electronic și fizic
    

-   cunoștințe de bază privind rețele locale de calculatoare
    

-   capacitatea de gestionare a dispozitivelor de stocare a datelor
    

-   aptitudini de diagnoză a defecțiunilor echipamentelor în timpul procesării informațiilor
    

#### Constituie avantaj:

-   experiență în domenii tehnice sau conexe (ex: Call Center, tehnician IT, service, mentenanță etc.)
    

-   cunoștințe teoretice de informatică
    

-   experiență în administrarea unei pagini web
    

-   noțiuni tehnice legate de telefonie fixă/centrale telefonice
    

-   înțelegerea arhitecturii sistemelor de comunicații (ex: satelit, VPN, file sharing)
    

-   abilități de analiză și sinteză a informațiilor din surse deschise (OSINT)
    

#### Responsabilități:

-   procesează criptografic și transmite/recepționează fluxuri de comunicații cifrate între instituție și misiunile diplomatice ale României sau alți beneficiari legali
    

-   exploatează echipamentele criptografice și de comunicații
    

-   participă la misiuni externe, atât de lungă durată cât și temporare, în funcție de necesitățile instituției`,
    },
    {
      title: "Ofițer/Subofițer administrare rețele de telecomunicații ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență sau diplomă de bacalaureat al unei instituții acreditate de învățământ din domeniile automatică, electronică, informatică, electrotehnică, energetică, comunicații (perspectiva de carieră se adresează inclusiv studenților în ani terminali)
    

-   cunoștințe despre modelul ISO/OSI și protocoalele aferente
    

-   cunoștințe de routing & switching
    

-   competențe în proiectarea, dezvoltarea și optimizarea rețelelor de comunicații
    

-   cunoștințe despre comunicații securizate (VPN)
    

-   familiaritate cu arhitectura rețelelor mobile și protocoale radio (2G, 3G, 4G, 5G, HF, comunicații satelitare)
    

-   înțelegerea tehnologiilor pentru comunicații prin satelit și a sistemelor de prelucrare a semnalelor radio
    

-   competențe în proiectarea și optimizarea sistemelor pentru transmisia semnalelor, propagare radio și elemente radiante
    

#### Constituie avantaj:

-   certificări sau competențe în domeniul comunicațiilor de date, inclusiv:
    

-   configurare echipamente de rețea (routing & switching)
    

-   configurare sisteme/rețele voip
    

-   configurare echipamente de securizare a comunicațiilor (VPN)
    

#### Responsabilități:

-   proiectează, dezvoltă, administrează și întreține sisteme și rețele de comunicații (Voce/Date)
    

-   monitorizează rețelele și serviciile de comunicații, asigurând funcționarea continuă și disponibilitatea acestora
    

-   implementează și întreține sisteme de comunicații radio, inclusiv analiza și planificarea semnalului radio
    

-   asigură mentenanța echipamentelor și suport tehnic pentru utilizatori
    

-   utilizează echipamente de măsură pentru evaluarea nivelului de protecție a informațiilor și dezvoltă aplicații software pentru analiza și prelucrarea semnalelor radio`,
    },
    {
      title: "Ofițer/subofițer tehnologia informației ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență sau diplomă de bacalaureat al unei instituții acreditate de învățământ cu profil de tehnologii și sisteme de calcul/ telecomunicații
    

-   cunoștințe privind utilizarea, instalarea, configurarea și securizarea sistemelor de operare Windows și Linux
    

-   cunoștințe în operarea și administrarea serviciilor: Windows Server, Active Directory, WSUS, File Server, SQL Server, precum și tehnici de virtualizare
    

-   competențe în proiectarea, dezvoltarea și optimizarea sistemelor pentru transmisia și prelucrarea semnalelor, inclusiv a elementelor radiante și propagarea undelor radio
    

-   înțelegerea arhitecturilor, protocoalelor și tehnologiilor rețelelor mobile, radiocomunicațiilor terestre și satelitare
    

-   abilitatea de a lucra eficient în echipă și independent
    

#### Responsabilități:

-   administrează sistemele și rețelele de comunicații, monitorizează funcționarea acestora și asigură mentenanța echipamentelor, precum și suportul tehnic pentru utilizatori
    

-   implementează soluții informatice, instalează, configurează și administrează sisteme de operare client/server și politici de securitate, domenii și conturi
    

-   gestionează configurațiile hardware și software, asigurând disponibilitatea serviciilor și aplicațiilor operaționale
    

-   dezvoltă și implementează soluții tehnice și informatice, intervenind prompt în remedierea disfuncționalităților tehnice identificate`,
    },
    {
      title: "Ofițer/subofițer inginerie mecanică / mecatronică ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență sau diplomă de bacalaureat al unei instituții acreditate de învățământ cu profil de electromecanică și electrotehnică
    

-   cunoștințe de proiectare 3D CAD/CAM
    

-   cunoștințe teoretice și practice privind prelucrarea prin așchiere
    

-   noțiuni despre tratamente termice, structura materialelor și punctele de topire
    

-   experiență în operarea mașinilor-unelte pentru prelucrarea metalelor și a lemnului
    

-   cunoștințe de bază în domeniul sudurii
    

-   cunoștințe privind mecanica auto și demontarea elementelor de caroserie
    

-   abilități de lucru atât în echipă, cât și independent
    

#### Constituie avantaj:

-   cunoștințe de operare în programul de proiectare 3D SolidWorks
    

#### Responsabilități:

-   proiectează și concepe echipamente și componente mecanice, fie ca ansambluri întregi, fie ca subansamble
    

-   realizează desenele tehnice necesare producției și coordonează procesul de asamblare
    

-   supraveghează procesul de fabricație pentru a asigura conformitatea pieselor cu cerințele tehnice
    

-   evaluează periodic necesarul de componente și subansamble necesare construcției sistemelor proiectate`,
    },
    {
      title: "Ofițer jurist ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de licență al unei instituții acreditate de învățământ
    

-   cunoștințe solide în domeniu și raționamente juridice eficiente
    

-   atitudine proactivă, capacitate de adaptare la schimbări și o bună gestionare a situațiilor urgente/neprevăzute
    

-   atenție la detalii și orientare spre calitate și rezultate
    

-   capacitate de sinteză și analiză
    

-   abilități de organizare și prioritizare a sarcinilor
    

-   aptitudini de comunicare și negociere
    

#### Responsabilități:

-   desfășoară activități de specialitate în domeniul propriu, contribuind la îndeplinirea obiectivelor organizației prin expertiză profesională, implicare responsabilă și adaptare la cerințele specifice postului.`,
    },
    {
      title: "Ofițer psiholog ",
      data: `
#### Cerințe:

-   absolvent de studii universitare de licență în psihologie
    

-   reprezintă un avantaj studiile de masterat în domeniul resurse umane sau siguranță națională
    

-   bune abilități de comunicare
    

-   abilități de lucru în echipă
    

-   un nivel bun al rezistenței la stres
    

-   deschidere spre dezvoltare personală și profesională.
    

#### Responsabilități:

-   desfășoară activități de specialitate în domeniul propriu, contribuind la îndeplinirea obiectivelor organizației prin expertiză profesională, implicare responsabilă și adaptare la cerințele specifice postului.`,
    },
    {
      title: "Ofițer limbi străine ",
      data: `
#### Cerințe:

-   student în an terminal sau absolvent de studii universitare de licență
    

-   bune cunoștințe de limba engleză
    

-   cunoștințe de limba rusă, arabă, chineză sau germană – nivel B2
    

-   excelente abilități de comunicare
    

#### Responsabilități:

-   utilizează cunoștințele de limbi străine în activitatea de traducere și interpretariat, în scopul îndeplinirii obiectivelor organizației
    

-   este interesat de dezvoltare profesională continuă și îmbunătățirea competențelor lingvistice.`,
    },
    {
      title: "Subofițer pază ",
      data: `
#### Cerințe:

-   absolvent cu diplomă de bacalaureat obținută la o instituție de învățământ liceal acreditată
    

-   condiție fizică bună, constituție atletică
    

-   spirit de observație dezvoltat
    

-   capacitate de reacție rapidă
    

-   disponibilitate de a desfășura activitatea în București și în străinătate
    

-   disponibilitate pentru activitate în regim de ture
    

#### Responsabilități:

-   asigură protecția obiectivelor, persoanelor și informațiilor`,
    },
    {
      title: "Personal tehnic-administrativ ",
      data: `
#### Instalator

#### Cerințe:

-   calificare în meseria de instalator
    

-   receptivitate la solicitări multiple
    

-   rigoare și autonomie în desfășurarea activității
    

#### Responsabilități:

-   execută lucrări de instalații sanitare și termice
    

-   asigură funcționarea optimă a instalațiilor și echipamentelor aferente în sediile instituției
    

#### Electrician / Electrician autorizat ANRE

#### Cerințe:

-   calificare ca electrician și/sau autorizare ANRE
    

-   seriozitate și corectitudine
    

-   capacitatea de a gestiona eficient situațiile de urgență
    

#### Responsabilități:

-   execută lucrări de instalații electrice
    

-   asigură funcționarea în condiții de siguranță a echipamentelor electrice din dotarea sediilor
    

#### Conducător auto

#### Cerințe:

-   permis de conducere valabil pentru categoriile B, C, D și E
    

-   spirit de echipă și bune abilități de colaborare
    

#### Responsabilități:

-   asigură activitățile de transport cu vehiculele din dotarea instituției
    

#### Frigotehnist

#### Cerințe:

-   calificare în domeniul frigotehnic
    

-   capacitate de reacție rapidă în situații tehnice
    

#### Responsabilități:

-   execută lucrări de instalații pentru climatizare
    

-   asigură funcționarea echipamentelor de climatizare, ventilație și refrigerare
    

#### Lăcătuș mecanic

#### Cerințe:

-   calificare în meseria de lăcătuș mecanic
    

-   utilizare corectă a echipamentelor specifice
    

-   abilități de organizare și planificare
    

#### Responsabilități:

-   execută lucrări de lăcătușărie și construcții metalice în cadrul sediilor instituției
    

#### Zugrav

#### Cerințe:

-   calificare în meseria de zugrav
    

-   atenție la detalii și precizie în execuție
    

#### Responsabilități:

-   execută lucrări de zugrăveli și reparații interioare
    

-   realizează retușuri și lucrări de vopsitorie la lemn și metal
    

#### Îngrijitor

#### Cerințe:

-   seriozitate, responsabilitate și disponibilitate pentru activități repetitive
    

-   dorința de stabilitate profesională
    

#### Responsabilități:

-   execută activități de curățenie și întreținere în spațiile instituției`,
    },
  ],
  requirements: "Cerințe",
  responsibility: "Responsabilități",
  buttonText: "Formular Aplicare",
  buttonHref: "#section-12",
};
export const QUESTION_SECTION_DATA = {
  subTitle: "Întrebări Frecvente",
  heading: "Ești curios? Răspundem candidaților",
  questionData: [
    {
      id: "1",
      title: `"Ce restricții sau limitări de drepturi există pentru personalul instituției?"`,
      poster: "/images/thumbnails/faq_1.webp",
      videoUrl: "/video/faq_1/output.m3u8",
      buttonText: "Citește mai mult",

      description: `**Răspuns scurt**

SIE impune restricții și limitări de drepturi personalului său pentru a proteja securitatea națională. Printre acestea se numără obligația de a păstra confidențialitatea informațiilor, limitarea accesului la activități politice sau asociative, precum și respectarea normelor stricte privind gestionarea informațiilor clasificate. Aceste măsuri, reglementate prin legi precum Legea nr. 1/1998 și Legea nr. 182/2002, asigură neutralitatea, integritatea și eficiența activităților desfășurate. Restricțiile sunt necesare și proporționale cu specificul activității, contribuind la protejarea intereselor României și ale cetățenilor săi.

  

  

**Răspuns detaliat**

Personalul Serviciului de Informații Externe (SIE) din România este supus unor restricții și limitări ale drepturilor, având în vedere specificul activităților desfășurate în domeniul securității naționale. Aceste restricții sunt reglementate de mai multe acte normative, printre care:

-   **Legea nr. 1/1998 privind organizarea și funcționarea Serviciului de Informații Externe**: Această lege stabilește cadrul general de funcționare al SIE și prevede obligații specifice pentru personalul său. De exemplu, personalul SIE este obligat să păstreze confidențialitatea informațiilor la care are acces și să evite orice activități care ar putea compromite securitatea națională.
-   **Legea nr. 182/2002 privind protecția informațiilor clasificate**: Această lege impune personalului SIE obligația de a proteja informațiile clasificate și de a respecta normele privind accesul și gestionarea acestora. Nerespectarea acestor obligații poate atrage sancțiuni disciplinare sau penale.
-   **Legea nr. 80/1995 privind statutul cadrelor militare**: Deoarece o parte din personalul SIE are statut militar, această lege se aplică în mod corespunzător. Printre restricțiile impuse se numără limitări ale dreptului la libera exprimare, la asociere și la participarea în activități politice, pentru a asigura neutralitatea și imparțialitatea în exercitarea funcțiilor.

  

Este important de menționat că aceste restricții sunt justificate prin necesitatea protejării securității naționale și a intereselor României. Ele sunt conforme cu prevederile constituționale și cu obligațiile internaționale asumate de România în domeniul drepturilor omului.

  

Pentru informații mai detaliate, se recomandă consultarea actelor normative menționate și a regulamentelor interne ale SIE, care pot oferi clarificări suplimentare privind restricțiile și obligațiile specifice impuse personalului instituției.`,
    },
    {
      id: "2",
      title: `"Care sunt riscurile activităţii profesionale pe care mi le asum, intrând în SIE?"`,
      buttonText: "Citește mai mult",
      poster: "/images/thumbnails/faq_2.webp",
      videoUrl: "/video/faq_2/output.m3u8",
      description: `
**Răspuns scurt**

Intrând în SIE, îți asumi riscuri profesionale specifice domeniului securității naționale. Printre acestea se numără expunerea la situații de pericol în operațiuni internaționale, riscul compromiterii identității și al repercusiunilor asupra vieții personale, precum și stresul psihologic asociat responsabilităților mari și confidențialității. De asemenea, există riscuri juridice și disciplinare în cazul încălcării regulamentelor stricte. Aceste riscuri sunt echilibrate prin măsuri de protecție și suport din partea instituției, fiind parte din angajamentul de a apăra interesele și securitatea României.

  

  

**Răspuns detaliat**

Activitatea în cadrul Serviciului de Informații Externe (SIE) implică asumarea unor riscuri profesionale specifice, reglementate prin legislația în vigoare. Conform **Legii nr. 1/1998 privind organizarea și funcționarea Serviciului de Informații Externe**, personalul SIE se compune din cadre militare și salariați civili, fiecare având drepturi și obligații specifice .

<div class="panel faq_2">
  
**Riscuri profesionale asumate de personalul SIE:**
-   **<div>Expunerea la pericole în operațiuni externe:</div>**

	-   Participarea la misiuni în medii ostile sau instabile poate pune în pericol integritatea fizică și psihică a personalului.


-   **Compromiterea identității și a securității personale:**

	-   Deconspirarea identității poate atrage amenințări la adresa securității personale și a familiei.

-   **Stres psihologic și emoțional:**

	-   Gestionarea informațiilor clasificate și responsabilitățile asociate pot genera stres și presiune constantă.

-   **Răspundere juridică și disciplinară:**

	-   Încălcarea obligațiilor legale, precum divulgarea informațiilor secrete, atrage sancțiuni conform legii.


</div>

**Obligații și restricții legale:**

-   **Păstrarea confidențialității:** Personalul are obligația de a păstra secretul datelor și informațiilor cunoscute, inclusiv după încetarea activității în SIE .
-   **Neutralitate politică:** Este interzisă apartenența la partide sau organizații politice și desfășurarea de propagandă în favoarea acestora .
-   **Respectarea reglementărilor interne:** Personalul trebuie să respecte regulamentele specifice SIE și legislația națională privind securitatea națională și protecția informațiilor clasificate.

  

Aceste riscuri și obligații sunt parte integrantă a angajamentului de a proteja securitatea națională și interesele României. Instituția oferă măsuri de protecție și suport pentru a gestiona aceste provocări, asigurând un cadru legal și operațional adecvat pentru desfășurarea activităților specifice.`,
    },
    {
      id: "3",
      title: `"Cum afectează activitatea în SIE viața personală și relațiile familiale, având în vedere nivelul de confidențialitate și restricțiile impuse?"`,
      poster: "/images/thumbnails/faq_3.webp",
      buttonText: "Citește mai mult",
      videoUrl: "/video/faq_3/output.m3u8",
      description: `
**Răspuns scurt**

Activitatea în SIE impune un nivel ridicat de confidențialitate, care poate afecta viața personală și relațiile familiale. Angajații trebuie să limiteze divulgarea detaliilor despre munca lor, să accepte restricții de călătorie și să gestioneze stresul și responsabilitățile specifice domeniului. Aceste provocări pot genera dificultăți în relații, dar instituția oferă suport psihologic și măsuri de protecție pentru a le gestiona.

  

  

**Răspuns detaliat**

Activitatea în cadrul Serviciului de Informații Externe este caracterizată printr-un grad ridicat de confidențialitate și restricții, care influențează semnificativ viața personală și relațiile familiale. Conform legislației, inclusiv **Legea nr. 1/1998**, angajații nu pot dezvălui natura activității lor nici măcar celor apropiați, ceea ce poate crea bariere în comunicare și înțelegere în cadrul familiei.

<div class="panel faq_2">
  

**Aspecte specifice care afectează viața personală:**

-   **Confidențialitatea absolută:**

	-   Angajații nu pot discuta detalii despre atribuțiile lor profesionale, locațiile de desfășurare a activității sau despre operațiunile în care sunt implicați.
	-   Acest lucru poate duce la sentimentul de izolare și dificultăți în construirea unor relații de încredere cu familia și prietenii.

-   **Restricții de deplasare:**

	-   Personalul poate avea limitări privind călătoriile în anumite țări sau regiuni care prezintă riscuri de securitate, ceea ce poate afecta planurile familiale sau sociale.

-   **Impactul psihologic:**

	-   Gestionarea informațiilor clasificate și presiunea de a menține standarde înalte de discreție pot genera stres și anxietate, afectând viața de zi cu zi și interacțiunile familiale.

-   **Timpul și disponibilitatea limitată:**

	-   Misiunile externe sau de lungă durată pot reduce semnificativ timpul petrecut cu familia, ceea ce poate afecta relațiile apropiate.

  
</div>

**Măsuri de sprijin din partea instituției:**

-   SIE oferă programe de suport psihologic și consiliere pentru angajați, astfel încât aceștia să poată gestiona mai bine provocările vieții personale.
-   În anumite cazuri, familia este informată în mod confidențial despre aspecte esențiale ale muncii angajatului pentru a înțelege mai bine natura activității acestuia.

  

**Concluzie:**

  

Activitatea în SIE necesită un angajament semnificativ, care poate pune la încercare viața personală. Totuși, instituția încearcă să echilibreze aceste aspecte prin măsuri de sprijin și protecție, ajutând angajații să gestioneze mai bine impactul asupra relațiilor și vieții private.`,
    },

    {
      id: "4",
      title: `"Ce se întâmplă dacă, din motive personale sau de securitate, un angajat dorește să părăsească instituția înainte de termenul stabilit?"`,
      videoUrl: "/video/faq_4/output.m3u8",
      buttonText: "Citește mai mult",
      poster: "/images/thumbnails/faq_4.webp",
      description: `
**Răspuns scurt**

Dacă un angajat dorește să părăsească SIE înainte de termen, acesta trebuie să depună o cerere scrisă și să respecte procedurile legale și contractuale. Obligația de confidențialitate rămâne valabilă pe termen nelimitat, iar în cazul unor cursuri sau pregătiri finanțate de instituție, pot exista obligații financiare. După plecare, angajatul poate fi supus verificărilor de securitate pentru a proteja informațiile clasificate.

  

  

**Răspuns detaliat**

În cazul în care un angajat al Serviciului de Informații Externe dorește să părăsească instituția înainte de termen, există proceduri stricte care trebuie urmate, stabilite prin legislația specifică, cum ar fi **Legea nr. 1/1998** și regulamentele interne. Acestea includ:

<div class="panel faq_2">


-   **Notificarea prealabilă:**

	-   Angajatul trebuie să depună o cerere scrisă de demisie sau încetare a activității, respectând termenii contractului de muncă sau angajamentului militar, dacă este cazul.

-   **Verificările de securitate:**

	-   După plecare, angajatul poate fi supus unor verificări pentru a se asigura că informațiile clasificate rămân protejate.
	-   Acest proces poate implica semnarea unui angajament suplimentar de confidențialitate valabil și după încetarea activității.

-   **Obligațiile post-angajare:**

	-   Conform legii, obligația de păstrare a confidențialității se menține pe termen nelimitat. Nerespectarea acesteia poate atrage sancțiuni legale.

-   **Compensații sau penalizări financiare:**

	-   Dacă angajatul a beneficiat de formare profesională plătită de instituție, poate fi obligat să restituie costurile dacă pleacă înainte de o anumită perioadă minimă de angajament, conform contractului.

</div>

**Riscuri și implicații:**

-   Decizia de a părăsi SIE trebuie luată cu grijă, având în vedere posibilele repercusiuni legale sau impactul asupra carierei și vieții private.
-   În cazul unor motive serioase, cum ar fi sănătatea sau situații personale, instituția poate oferi suport pentru a facilita tranziția.

  

Această abordare strictă reflectă necesitatea de a proteja informațiile clasificate și de a asigura integritatea instituției, chiar și după plecarea unui angajat.`,
    },
    {
      id: "5",
      title: `"Ce garanții oferă instituția în cazul în care un angajat este implicat în incidente de securitate sau este deconspirat în timpul unei misiuni?"`,
      buttonText: "Citește mai mult",
      poster: "/images/thumbnails/faq_5.webp",
      videoUrl: "/video/faq_5/output.m3u8",
      description: `
**Răspuns scurt**

În cazul unui incident de securitate sau al deconspirării, SIE oferă protecție angajatului și familiei acestuia prin măsuri de securitate specifice, inclusiv relocare, sprijin logistic și consiliere. În funcție de gravitate, instituția colaborează cu autoritățile naționale și internaționale pentru a asigura siguranța personalului. Totuși, riscurile inerente profesiei nu pot fi complet eliminate, iar angajații sunt instruiți să gestioneze astfel de situații.

  

  

**Răspuns detaliat**

  

În cazul unui incident de securitate sau al deconspirării identității unui angajat al Serviciului de Informații Externe (SIE), instituția implementează o serie de măsuri pentru a proteja atât persoana în cauză, cât și familia acesteia. Aceste măsuri sunt prevăzute de legislația relevantă, cum ar fi **Legea nr. 1/1998**, și regulamentele interne ale SIE.

<div class="panel faq_2">


**Măsuri imediate de protecție:**

-   **Relocare și anonimizare:**

	-   Dacă angajatul sau familia sa este expusă unui risc, SIE poate decide relocarea într-un loc sigur, atât în țară, cât și în afara acesteia.
	-   Se pot lua măsuri pentru a proteja identitatea și activitățile anterioare ale angajatului, inclusiv schimbarea documentelor de identitate.

-   **Protecție fizică:**

	-   Instituția poate asigura protecție fizică prin echipe specializate, atât pentru angajat, cât și pentru membrii familiei, dacă aceștia sunt vizați.

-   **Asistență juridică și psihologică:**

	-   Angajații și familiile lor beneficiază de suport juridic în cazul unor repercusiuni legale sau de altă natură asociate incidentului.
	-   Consilierea psihologică este disponibilă pentru a gestiona impactul emoțional al evenimentului.

-   **Colaborare cu autoritățile:**

	-   În situații de risc grav, SIE colaborează cu alte instituții naționale, precum Ministerul Afacerilor Interne, pentru a implementa măsuri de siguranță suplimentare.
	-   În cazul misiunilor externe, se implică autoritățile diplomatice și partenerii internaționali pentru a asigura sprijin local.

-   **Responsabilitatea angajatului:**

	-   În astfel de situații, angajatul este obligat să respecte toate instrucțiunile primite pentru a-și asigura propria siguranță și pe cea a familiei.
	-   Instruirea prealabilă oferită de instituție este esențială pentru a permite gestionarea eficientă a riscurilor.

-   **Limitările măsurilor:**

	-   Deși SIE ia toate măsurile posibile pentru protecție, riscurile profesionale nu pot fi complet eliminate. Acesta este un aspect asumat de angajați la intrarea în instituție, în conformitate cu specificul activității din domeniul securității naționale.

</div>

**Concluzie:**

  

SIE are protocoale bine definite pentru gestionarea incidentelor de securitate și pentru protecția angajaților săi. Cu toate acestea, angajarea în astfel de funcții implică riscuri inerente, pe care instituția le gestionează printr-un echilibru între măsurile de siguranță și responsabilitatea personală a angajatului.`,
    },
  ],
};

export const TEST_DATA = {
  title: "DECIDE",
  subTitle: "Teste",
  heading: "Joacă-te serios",
  subHeading: "Testează-ți cunoștințele!",
  tests: [
    {
      title: "Testează cunoștințele de IT",
      category: "it",
      color: "orange",
    },
    // {
    //   title: "Testeaza logica!",
    //   category: "logica",
    //   color: "blue",
    // },
    {
      title: "Ai cunoștințe tehnice?",
      category: "support",
      color: "white",
    },
    {
      // title: "Cât de bun ofițer operativ ai putea fi?",
      title: "Te pasionează criptografia?",
      category: "criptologi",
      color: "orange",
    },

    {
      title: "Te pasionează criptografia?",
      category: "logica",
      color: "white",
    },
    {
      title: "Analiză strategică?",
      category: "analiza",
      color: "blue",
    },
  ],
  buttonText: "Formular Aplicare",
  buttonHref: "#section-12",
};

export const VIDEO_SECTION = {
  sectionId: "unique__feature__section",
  heading: "Ai în față un viitor valoros și unic, aplică la SIE!",
  videoUrl: "/video/Intro Cariere Dan, Ana, Alex 2 iunie/n2Afeu.m3u8",
  videoPoster: "/images/thumbnails/Ai_în_față_un_viitor.png",
  buttonText: "Formular de aplicare",
  buttonId: "Formular de aplicare",
};

export const FOREIGN_INTELLIGENCE_SECTION = {
  title: "SERVICIUL DE INFORMAȚII EXTERNE",
  description:
    "Suntem instituţia de stat specializată în domeniul informaţiilor externe privind siguranţa naţională, apărarea României şi a intereselor sale.",
  mission: {
    title: "MISIUNEA",
    description: "Începem acolo unde ceilalți nu mai pot continua",
    missionLists: [
      {
        title: "CULEGERE INFORMAȚII",
        content:
          "Culegerea de informaţii relevante pentru securitatea naţională a României, informaţii care asigură baza de decizie pentru autorităţile statului;",
      },
      {
        title: "AVERTIZAREA TIMPURIE",
        content:
          "Avertizarea timpurie asupra riscurilor şi ameninţărilor, precum şi întocmirea de evaluări strategice ale mediului internaţional de securitate;",
      },
      {
        title: "APĂRARE ȘI PROMOVARE",
        content:
          "Desfăşurarea de operaţiuni pentru apărarea şi promovarea intereselor României.",
      },
    ],
  },
  valori: {
    title: "VALORI",
    description: "Suntem pregătiți pentru orice sacrificiu",
    valoriLists: [
      {
        title: "PATRIOTISM",
        content:
          "Punem ţara înainte de orice, datoria înainte de propria persoană, suntem mândri ştiind că tot ceea ce facem este pentru România.",
      },
      {
        title: "INTEGRITATE",
        content:
          "Ne asumăm cele mai înalte standarde de etică, onestitate şi corectitudine. Respectându-ne beneficiarii, ne respectăm pe noi.",
      },
      {
        title: "EXCELENȚĂ PROFESIONALĂ",
        content:
          "Avem standarde înalte de calitate. Acţionăm cu profesionalism şi pragmatism. Dăm tot ce e mai bun, pentru că numai aşa ne putem atinge obiectivele.",
      },
    ],
  },
};

export const COOPERATION_DATA = [
  {
    title: "COOPERARE",
    description: `SIE este organizat ca autoritate administrativă autonomă cu personalitate juridică, componentă a sistemului de securitate naţională a României.
    <pre> </pre>
    
SIE face parte din Comunitatea Naţională de Informaţii (conform Hotărârii CSAT nr. 146/2005), şi este reprezentat în Comitetul coordonator pentru comunitatea naţională de informaţii de către Directorul instituţiei şi în Consiliul operativ al Comunităţii Naţionale de Informaţii de către adjunctul pentru activitatea operativă. De asemenea, prin specialişti şi experţi este reprezentat în Oficiul pentru Informaţii Integrate din cadrul comunităţii. Cooperarea SIE cu celelalte structuri cu atribuţii în domeniul securităţii naţionale se materializează printr-un schimb operativ de informaţii pe problematica de interes comun, precum şi în alte aspecte sau forme de lucru care concură la asigurarea securităţii naţionale.
  <pre> </pre>

Dat fiind caracterul indivizibil al securităţii şi preponderenţa factorului extern în constituirea ameninţărilor asimetrice, Serviciul de Informaţii Externe este parte a unui sistem complex de contacte şi schimburi în comunitatea de intelligence internaţională. Contribuţiile SIE la activitatea diverselor forme de cooperare externă se traduc nu numai în operaţiuni reuşite de contracarare a unor ameninţări la adresa ţării noastre, ci şi în consolidarea profilului României de contributor la asigurarea securităţii europene şi aliate.`,
  },
  {
    title: "COMUNICARE",
    description: `În realizarea legăturii cu societatea civilă şi mass-media, SIE asigură echilibrul necesar între dreptul cetăţeanului de a fi informat în condiţii de transparenţă şi obligaţia păstrării secretului asupra acelor date care, conform legii, nu pot fi făcute publice. 
  <pre> </pre>
    
Rezultă, inevitabil, o serie de restricţii determinate de specificul activităţii, care se regăsesc, de altfel, în cazul tuturor serviciilor de informaţii din statele democratice.`,
  },
  {
    title: "ORGANIZARE, COORDONARE, CONTROL",
    description: `Activitatea Serviciului de Informaţii Externe este organizată şi coordonată de către Consiliul Suprem de Apărare a Ţării. Directorul SIE prezintă CSAT, anual sau ori de câte ori se impune, rapoarte referitoare la modul de îndeplinire de către Serviciu a atribuţiilor care îi revin. Controlul asupra activităţii SIE este exercitat de Parlamentul României, prin Comisia parlamentară specială, cu respectarea secretului asupra mijloacelor şi surselor de informare. Controlul parlamentar are ca obiectiv verificarea concordanţei activităţii Serviciului de Informaţii Externe cu Constituţia României şi cu politica statului român. În exercitarea atribuţiilor care îi revin, comisia solicită SIE, prin intermediul directorului acestuia, documente, date şi informaţii şi poate audia persoane în legătură cu problemele analizate.
  <pre> </pre>

Pe linie financiară, activitatea Serviciului de Informaţii Externe este controlată de Ministerul Finanţelor Publice, care exercită controlul financiar preventiv delegat, şi de Curtea de Conturi, prin controlul ulterior al execuţiei bugetului de venituri şi cheltuieli.`,
  },
];

export const CONDUCEREA_DATA = [
  {
    title: "GABRIEL VLASE",
    description: "Director al Serviciului de Informații Externe",
    content: `
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Gabriel VLASE este directorul Serviciului de Informații Externe din 4 iulie 2018, numit în funcție prin Hotărârea nr.23 a Parlamentului României.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A obținut licența la Universitatea Politehnică București în 1996, în specializarea inginerie mecanică, a absolvit studii universitare de masterat în specializarea ”Management și administrarea afacerilor” la Universitatea Tehnică ”Gheorghe Asachi” Iași în 2004, programul de perfecționare pentru înalți funcționari publici la Institutul Național de Administrație (2004-2005), cursuri postuniversitare în domeniul securității naționale în cadrul Universității Naționale de Apărare ”Carol I” (2005) și Academiei Naționale de Informații (2006) precum și programul pentru Înalți Oficiali la Centrul European Marshall pentru Studii de Securitate. În 2010 a dobândit titlul științific de doctor în științe militare și informații la Academia Națională de Informații.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A fost consilier local și subprefect al județului Bacău iar din 2004 până în 4 iulie 2018 a fost deputat în Parlamentul României. Ca deputat, a fost membru în Comisia de apărare, ordine publică și siguranță națională, vicepreședinte (2004-2008) și ulterior președinte (2008-2012) al Comisiei speciale a Camerei Deputaților și Senatului pentru exercitarea controlului parlamentar asupra activității SIE.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În legislatura 2012 – 2016 a fost șeful Delegației Parlamentului României la Adunarea Parlamentară a NATO iar din februarie 2017 până la numirea în funcția actuală a fost vicepreședinte al Camerei Deputaților.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În cadrul Adunării Parlamentare a NATO a îndeplinit funcțiile de vicepreședinte (2013-2015) și vicepreședinte onorific (2015-2017).
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vorbește fluent limba engleză.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pentru merite deosebite a fost decorat de către Președintele României cu Ordinul Național Steaua României în grad de Ofițer, cu însemne pentru civili.`,
  },
  {
    title: "General EUGEN-MIHAIL NEDELCU",
    description:
      "Prim adjunct al directorului SIE, șef al Directoratului de Informații",
    content: `
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; General Eugen-Mihail NEDELCU, 58 ani, este prim adjunct al directorului SIE, șef al Directoratului de Informații, Operațiuni și Analize Strategice, numit în funcție prin Hotărârea Consiliului Suprem de Apărare a Țării nr. 49 din 25.06.2019.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A obținut licența la Academia de Poliție „Alexandru Ioan Cuza”, în specializarea Drept și a absolvit cursuri postuniversitare în cadrul Universității București – Facultatea de jurnalism și științele comunicării și în cadrul Universității Naționale de Apărare – Colegiul Național de Apărare.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Încadrat în Serviciul de Informații Externe din anul 1994, a desfășurat și coordonat activități operative pe linie de intelligence, antiterorism, combaterea criminalității organizate, operațiuni speciale și protecție internă, contribuind activ la dezvoltarea parteneriatelor strategice și consolidarea profilului Serviciului în Comunitatea informativă euroatlantică.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A executat misiuni în străinătate - temporare și de lungă durată, iar în țară a ocupat următoarele funcții manageriale în domeniul operativ: șef birou, locțiitor șef direcție și șef direcție generală.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pentru rezultatele obținute a fost recompensat cu înaintări în grad - înainte de termen și în mod excepțional - și decorat cu Ordinul Național „Pentru Merit” în grad de Mare Cruce, cu însemn pentru militari, Ordinul Național „Serviciul Credincios” în grad de Cavaler, cu însemn pentru militari și Ordinul Național „Steaua României” în grad de Ofițer, cu însemn pentru militari.
<pre> </pre>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este căsătorit și are doi copii.`,
  },
  {
    title: "General IOAN-OCTAVIAN BRIȚA",
    description:
      "Adjunct al directorului SIE, șef al Directoratului de Resurse",
    content: `
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; General Ioan-Octavian BRIȚA, 54 ani, este adjunct al directorului SIE, șef al Directoratului de Resurse, numit în funcție prin Hotărârea Consiliului Suprem de Apărare a Țării nr. 49 din 25.06.2019.\
<pre> </pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A obținut licența la Universitatea Politehnică București, în specializarea Electrotehnică și a absolvit cursuri postuniversitare în cadrul Universității București – Facultatea de jurnalism și științele comunicării.
<pre> </pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Încadrat în Serviciul de Informații Externe din anul 1995, a desfășurat și coordonat activități operative pe linie de intelligence și a contribuit activ la dezvoltarea și consolidarea parteneriatelor Serviciului pe linie de cooperare externă.
<pre> </pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A executat misiuni în străinătate - temporare și de lungă durată, iar în țară a ocupat următoarele funcții manageriale în domeniul operativ: locțiitor șef direcție, șef direcție și șef direcție generală.
<pre> </pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pentru rezultatele obținute, a fost recompensat cu înaintări în grad, înainte de termen, și decorat cu Ordinul Național „Pentru Merit” în grad de Cavaler, Ordinul Național „Serviciul Credincios” în grad de Ofițer, Ordinul „Bărbăție și Credință” în grad de Comandor, cu însemne pentru militari și Ordinul Național „Steaua României” în grad de Cavaler, cu însemn pentru militari.
<pre> </pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Este căsătorit și are doi copii.`,
  },
];

export const LEGISLATIE_DATA = [
  {
    title:
      "Legea nr. 1/1998 privind organizarea şi funcţionarea Serviciului de Informaţii Externe",
    link: "../../../pdf/legislation/1.pdf",
  },
  {
    title: "Legea nr. 51/1991 privind securitatea naţională a României",
    link: "../../../pdf/legislation/51.pdf",
  },
  {
    title:
      "Legea nr. 415/2002 privind organizarea şi funcţionarea Consiliului Suprem de Apărare a Ţării",
    link: "../../../pdf/legislation/415.pdf",
  },
  {
    title:
      "Hotărârea Parlamentului României nr. 44/1998 privind constituirea, organizarea şi funcţionarea Comisiei parlamentare speciale pentru controlul activităţii Serviciului de Informaţii Externe",
    link: "../../../pdf/legislation/44.pdf",
  },
  {
    title: "Legea nr. 80/1995 privind statutul cadrelor militare",
    link: "../../../pdf/legislation/80.pdf",
  },
  {
    title: "Legea nr. 53/2003 – Codul Muncii",
    link: "../../../pdf/legislation/53.pdf",
  },
  {
    title:
      "Legea nr. 544/2001 privind liberul acces la informaţiile de interes public",
    link: "../../../pdf/legislation/544.pdf",
  },
  {
    title: "Legea nr. 182/2002 privind protecţia informaţiilor clasificate",
    link: "../../../pdf/legislation/182.pdf",
  },
  {
    title: "Legea nr. 535/2004 privind prevenirea şi combaterea terorismului",
    link: "../../../pdf/legislation/535.pdf",
  },
  {
    title:
      "Hotărârea de Guvern nr. 585/2002 pentru aprobarea Standardelor naţionale de protecţie a informaţiilor clasificate în România",
    link: "../../../pdf/legislation/585.pdf",
  },
];

export const HEALTH_DATA = [
  {
    id: 1,
    title: "Gabriel Vlase",
    list: [
      {
        id: 1,
        date: "2018",
        link1: "../../../pdf/health/di_gv.pdf",
        link2: "../../../pdf/health/da_gv.pdf",
      },
      {
        id: 2,
        date: "2019",
        link1: "../../../pdf/health/DI_GVmai2019.pdf",
        link2: "../../../pdf/health/DA_GVmai2019.pdf",
      },
      {
        id: 3,
        date: "2020",
        link1: "../../../pdf/health/DI_GV_2020.pdf",
        link2: "../../../pdf/health/DA_GV_2020.pdf",
      },
      {
        id: 4,
        date: "2021",
        link1: "../../../pdf/health/DI_GV_2021.pdf",
        link2: "../../../pdf/health/DA_GV_2021.pdf",
      },
      {
        id: 5,
        date: "2022",
        link1: "../../../pdf/health/DI_GV_2022.pdf",
        link2: "../../../pdf/health/DA_GV_2022.pdf",
      },
      {
        id: 6,
        date: "2023",
        link1: "../../../pdf/health/DI__GV.pdf",
        link2: "../../../pdf/health/DA__GV.pdf",
      },
      {
        id: 7,
        date: "2024",
        link1: "../../../pdf/health/DI_GV2024.pdf",
        link2: "../../../pdf/health/DA_GV2024.pdf",
      },
    ],
  },
  {
    id: 2,
    title: "Eugen Mihail Nedelcu",
    list: [
      {
        id: 2,
        date: "2019",
        link1: "../../../pdf/health/DI_NE2019.pdf",
        link2: "../../../pdf/health/DA_NE2019.pdf",
      },
      {
        id: 3,
        date: "2020",
        link1: "../../../pdf/health/DI_NE_2020.pdf",
        link2: "../../../pdf/health/DA_NE_2020.pdf",
      },
      {
        id: 4,
        date: "2021",
        link1: "../../../pdf/health/DI_NE_2021.pdf",
        link2: "../../../pdf/health/DA_NE_2021.pdf",
      },
      {
        id: 5,
        date: "2022",
        link1: "../../../pdf/health/DI_NE_2022.pdf",
        link2: "../../../pdf/health/DA_NE_2022.pdf",
      },
      {
        id: 6,
        date: "2023",
        link1: "../../../pdf/health/DI_NE.pdf",
        link2: "../../../pdf/health/DA_NE.pdf",
      },
      {
        id: 7,
        date: "2024",
        link1: "../../../pdf/health/DI_NE2024.pdf",
        link2: "../../../pdf/health/DA_NE2024.pdf",
      },
    ],
  },
  {
    id: 3,
    title: "Ioan Octavian Brița",
    list: [
      {
        id: 2,
        date: "2019",
        link1: "../../../pdf/health/DI_BI2019.pdf",
        link2: "../../../pdf/health/DA_BI_2019.pdf",
      },
      {
        id: 3,
        date: "2020",
        link1: "../../../pdf/health/DI_BI_2020.pdf",
        link2: "../../../pdf/health/DA_BI_2020.pdf",
      },
      {
        id: 4,
        date: "2021",
        link1: "../../../pdf/health/DI_BI_2021.pdf",
        link2: "../../../pdf/health/DA_BI_2021.pdf",
      },
      {
        id: 5,
        date: "2022",
        link1: "../../../pdf/health/DI_BI_2022.pdf",
        link2: "../../../pdf/health/DA_BI_2022.pdf",
      },
      {
        id: 6,
        date: "2023",
        link1: "../../../pdf/health/DI_BI.pdf",
        link2: "../../../pdf/health/DA_BI.pdf",
      },
      {
        id: 7,
        date: "2024",
        link1: "../../../pdf/health/DI_BI2024.pdf",
        link2: "../../../pdf/health/DA_BI2024.pdf",
      },
    ],
  },
];

export const ABOUTUS_DATA = {
  title: "EMBLEMA",
  imageOne: "/images/emblema.png",
  imageTwo: "/images/emblema_second.png",
  firstParagraph: `În viaţa de zi cu zi, simbolurile constituie veritabile
  repere, care, prin natura lor, au rolul de "a vorbi" despre
  conţinuturi ce nu sunt întotdeauna accesibile celor care vin
  în contact cu ele. Reprezentarea devine astfel esenţială nu
  doar prin înţelesurile ei, ci şi prin rolul pe care îl joacă
  în comunicarea cu ceilalţi.`,
  secondParagraph: `Incursiunea noastră în mitologie are ca punct de referinţă un
  simbol aparte, care are menirea de a ne introduce într-o lume
  aflată sub imperiul forţei şi, deopotrivă, al inteligenţei, o
  lume care rămâne pentru mulţi o veritabilă "enigmă".`,
  thirdParagraph: `Vorbim, în fapt, de reprezentarea unei lumi ale cărei înţelesuri
  se prefac în rostul său de a fi, de a sluji, sub semnul credinţei
  şi al raţiunii, naţiunea pe care o reprezintă. Această lume
  capătă, în reprezentările celor care o slujesc, identitatea unei
  puteri ce reuneşte forţa pământeană cu energiile supraomeneşti.`,
  fourthParagraph: `Forma acestei identităţi o reprezintă GRIFONUL, o fiinţă
  fabuloasă care îmbină - prin capul şi ghearele de vultur -
  energia celestă cu puterea terestră - sugerată de corpul de
  leu. Se cunoaşte că antichitatea a consacrat grifonului
  sarcina de paznic al comorilor. Grifonul apare frecvent pe
  pietrele dacice anterioare cuceririi romane - cât şi după.`,
  fifthParagraph: `La fel, le găsim şi pe Columna Traiană împodobind armele
  dacice. Celebrele coifuri dacice, numeroase fibule, piese de
  harnaşament, atestă o bogată tradiţie geto-dacică legată de
  grifon. Acest lucru nu este întâmplător. Anticii Pindar,
  Apollonius din Rhodos, Virgilius, vorbesc despre grifoni ca
  făcând parte din panteonul tracic. Astfel, Apollo apare
  frecvent însoţit de grifoni. Pindar: "Apollo după ce a
  construit împreună cu Eac şi Neptun cetatea Troiei, s-a întors
  în patria lui, dincolo de Istru (Dunărea) la Hiperboreeni". Grifonul: jumătate vultur - jumătate leu - este aşadar o
  figură hieratică aparţinând în primul rând lumii geto-dacice
  şi tracice (a se vedea pietrele de la Alba-Iulia unde Apollo
  zboară ajutat de grifoni).`,
  sixthParagraph: `O altă legendă povesteşte despre Alexandru Macedon care a
  încercat să se înalţe cu ajutorul unor grifoni ademeniţi cu
  hălci de carne. Vulturul ţine crucea în cioc – amintind prin
  aceasta de vulturul cruciat românesc (stema ţării). În gheare
  poartă cheile (este un paznic al comorilor), simbol al puterii
  închiderii şi deschiderii secretelor de orice fel. Vulturul
  care l-a însoţit întotdeauna pe Apollon, dar şi pe Zeus şi
  Jupiterul roman (unde a devenit stema cezarilor) este un feroce
  vânător dotat cu o privire ageră. Tradiţia heraldică, cât şi
  reprezentările antice ale acesteia, adaugă vulturului urechi –
  pentru a-i spori vigilenţa şi a adăuga auzul privirii
  pătrunzătoare.`,
  seventhParagraph: `A defini un simbol este, fără îndoială, o încercare care
  presupune, deopotrivă, cunoaştere şi imaginaţie. A ne raporta
  la el înseamnă a-l înţelege. Vorbim aici de o lume în care
  secretul
  este însăşi condiţia existenţei sale. Simbolul unei astfel de
  lumi, aşa cum este el descris mai sus, este reprezentat în istorie
  ca făcând parte din tot ceea ce înseamnă păstrarea şi transmiterea
  unor tradiţii care dăinuie de mii de ani.`,
};

export const CRONLOGOY_DATA = [
  {
    date: "1859",
    title: "12 noiembrie, **1859**",
    description:
      "Domnitorul Alexandru Ioan Cuza (1859-1866) a semnat Înaltul Ordin de Zi nr. 83, prin care s-a înfiinţat Statul Major General al Armatei, în cadrul căruia funcţiona Secţia a II-a, primul serviciu de informaţii al armatei române şi al României.",
  },
  {
    date: "1877-1878",
    title: "**1877-1878**",
    description:
      "Războiul de Independenţă împotriva Imperiului otoman, în care armata română a luptat alături de armata rusă. Ordinul de Zi pe Armată nr. 26/6 iulie 1877 a prezentat mijloacele şi metodele care pot fi utilizate pentru a obţine informaţii asupra armatei turce. Acestea erau: prizonierii, dezertorii, locuitorii, spionii şi alte indicii.",
  },
  {
    date: "1908",
    title: "25 martie **1908**",
    description: `Infiinţarea Direcţiunii Poliţiei şi Siguranţei Generale, condusă de <a href="istoria_ion_panaitescu.jpg">Ion (Iancu) Panaitescu</a>, director general. Pentru conspirativitate şi compartimentare au fost introduse, pentru prima dată în România, munca de infiltrare în medii de interes, lucrul cu agenţi acoperiţi, recrutare sub steag străin, utilizarea numerelor pentru conspirarea agenţilor interni şi a literelor pentru agenţii externi.`,
  },
  {
    date: "1914",
    title: "1914",
    description: `Primul Război Mondial între cele două blocuri politico-militare: Antanta (Franţa, Anglia, Rusia) şi Puterile Centrale (Imperiul austro-ungar, Imperiul german şi Imperiul otoman). România s-a declarat neutră însă şi-a întărit aparatul informativ/contrainformativ.`,
  },
  {
    date: "1916",
    title: "1916",
    description: `Au fost elaborate "Instrucţiunile pentru funcţionarea Biroului Informaţii pe timpul operaţiunilor", care prevedeau sarcina de a obţine informaţii asupra inamicului prin căutarea, centralizarea şi exploatarea datelor. Obţinerea de date trebuia realizată prin recunoaşteri aeriene, agenţi secreţi, autorităţi militare şi civile de la frontieră.`,
  },
  {
    date: "1916",
    title: "25 august **1916**",
    description: `După ce România a declarat război Imperiului austro-ungar, Biroul Informaţii a elaborat "Directive pentru serviciul de informaţiuni şi contraspionaj în ţară străină".`,
  },
  {
    date: "1917",
    title: "20 februarie **1917**",
    description: `Intră în vigoare <a href="istoria_instructiuni.jpg" >"Instrucţiunile asupra organizării şi funcţionării Serviciului de Informaţii"</a>, care au prevăzut, printre altele, înfiinţarea unei structuri acoperite, condusă direct de Marele Cartier General şi intitulată Serviciul Secret.`,
  },
  {
    date: "1918",
    title: "ianuarie **1918**",
    description: `Intră în vigoare "Instrucţiunile cu privire la îndatoririle diferitelor eşaloane ale Serviciului de Informaţii", acestea fiind o continuare la "Instrucţiunile …" din 20 februarie 1917.`,
  },
  {
    date: "1918",
    title: "12 iunie 1918",
    description: `A luat fiinţă Secţia a IV-a Informaţii din Marele Stat Major, cu următoarea organizare: Biroul 1 studiul armatelor străine şi informaţii directe, Biroul 2 informaţii secrete şi contraspionaj, Biroul 3 studiul corespondenţei secrete.`,
  },
  {
    date: "1918",
    title: "1 decembrie 1918",
    description: `Marea Adunare de la Alba-Iulia prin care Transilvania s-a unit cu România, desăvârşindu-se România Mare. Conducerea a fost asumată de Consiliul Dirigent, iar pentru zona de securitate s-a înfiinţat Serviciul Siguranţei.`,
  },
  {
    date: "1919",
    title: "15 martie 1919",
    description: `Serviciul Siguranţei din Consiliul Dirigent a informat despre infiltrarea unui agent în "comuniunea bolşevicilor din Budapesta", de unde a comunicat numele românilor aderenţi la această mişcare (29), data afilierii şi motivul.`,
  },
  {
    date: "1919",
    title: "18 aprilie 1919",
    description: `Reorganizarea Marelui Stat Major, alcătuit din două diviziuni, care gestionau activitatea a opt secţii. În cadrul Diviziunii a II-a îşi desfăşura activitatea Secţia a V-a Informaţii şi Contrainformaţii, cu două birouri: Biroul 1 Informaţii şi Biroul 2 Contrainformaţii (Serviciul secret şi Serviciul de contraspionaj). Primul şef al Serviciului Secret a fost maiorul Alexandru Bursan.`,
  },
  {
    date: "1921",
    title: "1921",
    description: `Direcţiunea Poliţiei şi Siguranţei Generale a înfiinţat <a href="istoria_raport_Viena.jpg" >un birou de informaţii externe la Viena</a>, cu scopul de a monitoriza acţiunile antiromâneşti desfăşurate de URSS şi Ungaria.`,
  },
  {
    date: "1925",
    title: "1 mai 1925",
    description: `<a href="istoria_moruzov.jpg">Mihail Moruzov</a> este numit la conducerea Serviciului Secret.`,
  },
  {
    date: "1927",
    title: "1 octombrie 1927",
    description: `Intră în vigoare "Instrucţiunile provizorii asupra informaţiilor". Informaţia: "orice document, orice întâmplare, orice observaţie, de orice natură ar fi, dobândită prin orice mijloace şi care poate să ajute la cunoaşterea inamicului şi a teatrului de operaţie".`,
  },
  {
    date: "1933",
    title: "8 noiembrie 1933",
    description: `Regulament privind Serviciul Secret:
    <ul>
      <li style="list-style: none;">
      - art.1. Serviciul "S" constituie organul tehnic (de agentură) al Serviciului de informaţii al Marelui Stat Major;
      </li>
      <li style="list-style: none;">
      - art.2. Misiunea Serviciului "S" este de a recruta şi a forma elementele necesare, capabile să procure materialul informativ (extern şi intern), conform cerinţelor Marelui Stat Major.
      </li>
    </ul>
`,
  },
  {
    date: "1934",
    title: "20 aprilie 1934",
    description: `Intră în vigoare "Instrucţiunile provizorii asupra informaţiilor". Informaţia: "orice document, orice întâmplare, orice observaţie, de orice natură ar fi, dobândită prin orice mijloace şi care poate să ajute la cunoaşterea inamicului şi a teatrului de operaţie".`,
  },
  {
    date: "1939",
    title: "1939",
    description: `Redenumirea Serviciului Secret în Serviciul Special de Informaţii (SSI).`,
  },
  {
    date: "1940",
    title: "12 noiembrie 1940",
    description: `Prin Decretul-Lege nr. 3813 pentru organizarea şi funcţionarea SSI, Eugen Cristescu este numit director general al SSI.`,
  },
  {
    date: "1942",
    title: "1942",
    description: `<a href="istoria_reorganizare_SSI.jpg">Reorganizarea SSI</a> în conformitate cu cerinţele politico-militare la 12 secţii. Acestea erau: Secţia I Informaţii Externe, Secţia a II-a Contrainformaţii, Secţia a III-a Relaţii Externe, Secţia a IV-a Contraspionaj, Secţia a V-a Contrasabotaj, Secţia a VI-a Filaj şi Cenzura Corespondenţei, Secţia a VII-a Personal, Secţia a VIII-a Juridică, Secţia a IX-a Tehnică, Secţia a X-a Radio, Secţia a XI-a Auto şi Secţia a XII-a Administrativă.`,
  },
  {
    date: "1941-1944",
    title: "iunie 1941 – august 1944",
    description: `<a href="istoria_SSI_frontul_EST.jpg">SSI acţionează în sprijinul trupelor române pe Frontul de Est.</a> `,
  },
  {
    date: "1944",
    title: "30 august 1944",
    description: `SSI este redenumit Serviciul de Informaţii şi trece în subordinea Ministerului de Război. Noul director general este colonelul Victor Siminel.`,
  },
  {
    date: "1944",
    title: "24 octombrie 1944",
    description: `Prin Decizia Ministerială nr. 2075 privind organizarea, funcţionarea şi atribuţiile Serviciului de Informaţii, misiunile sunt căutarea de informaţii generale "ce interesează apărarea naţională"; organizarea s-a redus la cinci secţii: Secţia I Informaţii Externe, Secţia a II-a Contrainformaţii, Secţia a III-a Tehnică, Secţia a IV-a Administrativă şi Secţia a V-a Personal şi MONT.`,
  },
  {
    date: "1945",
    title: "18 aprilie 1945",
    description: `Revenirea la denumirea SSI şi în subordinea Preşedinţiei Consiliului de Miniştri; organizarea cuprinde două secţii: Secţia I Informaţii Externe şi Secţia a II-a Contrainformaţii.`,
  },
  {
    date: "1951",
    title: "2 aprilie 1951",
    description: `SSI şi-a încheiat existenţa fiind inclusă în Direcţia Generală a Securităţii Statului ca Direcţia "A" Informaţii Externe.`,
  },
  {
    date: "1952-1953",
    title: "20 septembrie 1952 - 7 septembrie 1953",
    description: `Direcţia Generală a Securităţii Statului este reorganizată sub denumirea de Ministerul Securităţii Statului, însă Direcţia "A" îşi păstrează specificul. <a href="istoria_schema_organizare.jpg">Vezi schema de organizare a Direcţiei I Informaţii Externe în 1955</a>`,
  },
  {
    date: "1956",
    title: "1 iulie 1956",
    description: `Se stabileşte o nouă structură a Ministerului Afacerilor Interne (MAI), organizat pe două departamente: Departamentul Securităţii şi Departamentul Internelor. Din 1954 Direcţia "A" Informaţii Externe devine Direcţia I Informaţii Externe.

`,
  },
  {
    date: "1958-1968",
    title: "1958-1968",
    description: `Mihai Caraman, şeful rezidenţei din Paris, a organizat o reţea informativă care a reuşit să penetreze Cartierul General al NATO.`,
  },
  {
    date: "1968",
    title: "4 aprilie 1968",
    description: `Se înfiinţează Consiliul Securităţii Statului, separat de MAI, în subordinea căruia se află şi DGIE.`,
  },
  {
    date: "1963",
    title: "1963",
    description: `Direcţia I devine Direcţia Generală de Informaţii Externe (DGIE), în cadrul MAI.`,
  },
  {
    date: "1972",
    title: "19 aprilie 1972",
    description: `Prin Decretul nr.130 Consiliul Securităţii Statului este comasat cu MAI. DGIE devine Departamentul de Informaţii Externe (DIE).`,
  },
  {
    date: "1978",
    title: "iulie 1978",
    description: `Generalul Ion Mihai Pacepa, prim-adjunct al şefului DIE, secretar de stat în Consiliul Securităţii Statului şi consilier prezidenţial pentru securitate naţională şi dezvoltare tehnologică, a defectat, cerând azil politic în SUA. Defectarea sa a generat reorganizarea DIE şi retragerea din exterior a unui număr foarte mare de cadre. În iulie 1999 Curtea Supremă de Justiţie din România l-a reabilitat şi l-a repus în toate drepturile.`,
  },

  {
    date: "1990",
    title: "8 februarie 1990",
    description: `Prin Decretul nr. 111 al Consiliului Frontului Salvării Naţionale, CIE a fost reorganizat.`,
  },
  {
    date: "1990",
    title: "13 decembrie 1990",
    description: `Legea nr. 39 prevede înfiinţarea Serviciului de Informaţii Externe (SIE), subordonat Consiliului Suprem de Apărare a Ţării (CSAT).`,
  },
  {
    date: "1998",
    title: "6 ianuarie 1998",
    description: `A fost adoptată Legea nr.1 privind organizarea, funcţionarea şi activitatea SIE, act normativ aflat în vigoare.`,
  },
];

export const SEFII_INFORMATION_DATA = [
  {
    data: [
      {
        title: "# **MIHAIL MORUZOV**",
        description: `şef al Serviciului Secret de Informaţii (12.04.1924 - 13.09.1940).`,
      },
      {
        title: "# **EUGEN CRISTESCU**",
        description: `director al Serviciului Secret de Informaţii, care, din 13.11.1940, se va numi Serviciul Special de Informaţii - SSI (12.11.1940 - 23.08.1944).şef al Serviciului Secret de Informaţii (12.04.1924 - 13.09.1940).`,
      },
      {
        title: "# **VICTOR SIMINEL**",
        description: `director general al SSI (25.08.1944 - 20.09.1944).`,
      },
      {
        title: "# **IOAN LISSIEVICI**",
        description: `director general al SSI (25.09.1944 - 25.12.1944).`,
      },
      {
        title: "# **GHEORGHE SĂVOIU**",
        description: `director general al SSI (25.12.1944 - 06.03.1945).`,
      },
      {
        title: "# **NICOLAE STĂNESCU**",
        description: `director general al SSI (12.03.1945 - 12.07.1945).`,
      },
    ],
  },
  {
    data: [
      {
        title: "# **LUCIAN STUPINEANU**",
        description: `director general al SSI (12.07.1945 - ianuarie 1947).`,
      },
      {
        title: "# **SERGHEI NICOLAU**",
        description: `director general al SSI (ianuarie 1947-aprilie 1951); Şeful Direcţiei A - Informaţii Externe, din cadrul Direcţiei Generale a Securităţii Statului - DGSS (aprilie 1951 - martie 1954).`,
      },
      {
        title: "# **VASILE VÂLCU**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (martie 1954 - 16.12.1955).`,
      },
      {
        title: "# **MIHAI GAVRILIUC**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (16.12.1955 - 15.07.1959).`,
      },
      {
        title: "# **NICOLAE DOICARU**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (1959 - 1963); adjunct al ministrului de interne şi şef al Direcţiei Generale de Informaţii Externe, din cadrul Consiliului Securităţii Statului - CSS (1963 - 1972); prim-adjunct al ministrului de interne şi şef al Departamentului de Informaţii Externe - DIE, din cadrul CSS (1972 - 04.03.1978).`,
      },
      {
        title: "# **ALEXANDRU DĂNESCU**",
        description: `şef al DIE, din cadrul Departamentului Securităţii Statului - DSS (iunie 1978 - octombrie 1978).`,
      },
    ],
  },
  {
    data: [
      {
        title: "# **NICOLAE PLEŞIŢĂ**",
        description: `prim-adjunct al ministrului de interne şi şef al CIE, din cadrul DSS (01.09.1980 - 01.12.1984).`,
      },
      {
        title: "# **ROMUS DIMA**",
        description: `secretar de stat la Ministerul de Interne şi şef al Centrului de Informaţii Externe - CIE, din cadrul DSS (15.10.1978 - 01.09.1980).`,
      },
      {
        title: "# **ARISTOTEL STAMATOIU**",
        description: `adjunct al ministrului de interne şi şef al CIE, din cadrul DSS (01.12.1984 - 06.01.1990).`,
      },
    ],
  },
];
export const SEFII_INFORMATION_DATA_MOBILEVIEW = [
  {
    data: [
      {
        title: "# **MIHAIL MORUZOV**",
        description: `şef al Serviciului Secret de Informaţii (12.04.1924 - 13.09.1940).`,
      },
      {
        title: "# **EUGEN CRISTESCU**",
        description: `director al Serviciului Secret de Informaţii, care, din 13.11.1940, se va numi Serviciul Special de Informaţii - SSI (12.11.1940 - 23.08.1944).şef al Serviciului Secret de Informaţii (12.04.1924 - 13.09.1940).`,
      },
      {
        title: "# **VICTOR SIMINEL**",
        description: `director general al SSI (25.08.1944 - 20.09.1944).`,
      },
      {
        title: "# **IOAN LISSIEVICI**",
        description: `director general al SSI (25.09.1944 - 25.12.1944).`,
      },
      {
        title: "# **GHEORGHE SĂVOIU**",
        description: `director general al SSI (25.12.1944 - 06.03.1945).`,
      },
      {
        title: "# **NICOLAE STĂNESCU**",
        description: `director general al SSI (12.03.1945 - 12.07.1945).`,
      },
      {
        title: "# **LUCIAN STUPINEANU**",
        description: `director general al SSI (12.07.1945 - ianuarie 1947).`,
      },
      {
        title: "# **ARISTOTEL STAMATOIU**",
        description: `adjunct al ministrului de interne şi şef al CIE, din cadrul DSS (01.12.1984 - 06.01.1990).`,
      },
    ],
  },
  {
    data: [
      {
        title: "# **SERGHEI NICOLAU**",
        description: `director general al SSI (ianuarie 1947-aprilie 1951); Şeful Direcţiei A - Informaţii Externe, din cadrul Direcţiei Generale a Securităţii Statului - DGSS (aprilie 1951 - martie 1954).`,
      },
      {
        title: "# **VASILE VÂLCU**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (martie 1954 - 16.12.1955).`,
      },
      {
        title: "# **MIHAI GAVRILIUC**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (16.12.1955 - 15.07.1959).`,
      },
      {
        title: "# **NICOLAE DOICARU**",
        description: `şeful Direcţiei I - Informaţii Externe, din cadrul DGSS (1959 - 1963); adjunct al ministrului de interne şi şef al Direcţiei Generale de Informaţii Externe, din cadrul Consiliului Securităţii Statului - CSS (1963 - 1972); prim-adjunct al ministrului de interne şi şef al Departamentului de Informaţii Externe - DIE, din cadrul CSS (1972 - 04.03.1978).`,
      },
      {
        title: "# **ALEXANDRU DĂNESCU**",
        description: `şef al DIE, din cadrul Departamentului Securităţii Statului - DSS (iunie 1978 - octombrie 1978).`,
      },
      {
        title: "# **NICOLAE PLEŞIŢĂ**",
        description: `prim-adjunct al ministrului de interne şi şef al CIE, din cadrul DSS (01.09.1980 - 01.12.1984).`,
      },
      {
        title: "# **ROMUS DIMA**",
        description: `secretar de stat la Ministerul de Interne şi şef al Centrului de Informaţii Externe - CIE, din cadrul DSS (15.10.1978 - 01.09.1980).`,
      },
    ],
  },
];

export const SEFII_FOREIGN_DATA = [
  {
    data: [
      {
        title: "# **MIHAI CARAMAN**",
        description: `adjunct al ministrului apărării naţionale şi comandant al CIE (18.01.1990 - 13.12.1990); director al Serviciului de Informaţii Externe - SIE (13.12.1990 - 09.04.1992).`,
      },
      {
        title: "# **IOAN TALPEŞ**",
        description: `director al SIE (09.04.1992 - 31.07.1997).`,
      },
      {
        title: `# **<a rel="true" href="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Gheorghe Fulga a fost directorul Serviciului de Informații Externe în perioada februarie 2001 – iulie 2006.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Filosofie a Universității București și a obținut titlul științific de doctor la aceeași universitate. </p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; După absolvirea facultății a fost sociolog la ”Tractorul” Brașov iar din 1979 a devenit cadru didactic universitar la Universitatea Transilvania Brașov. După 1990 a îndeplinit funcțiile de expert și consilier la Președinția României (1990 - 1992), prefect al județului Brașov (1992- 1994), consilier prezidențial (1994-1996) și deputat în Parlamentul României, calitate din care a demisionat odată cu numirea în funcția de director al SIE.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Gheorghe Fulga are meritul incontestabil de a fi înțeles nevoia de modernizare reală a Serviciului, sens în care a inițiat și încurajat un amplu proces de reformă instituțională (2004 -2010), conceput și implementat sub coordonarea unui comitet de reformă, condus de cei doi adjuncți ai directorului, domnii generali Predoiu și Sarcă.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A fost decorat cu Ordinul Național ”Steaua României” (2002 – în grad de cavaler, 2005 – în grad de ofițer) precum și cu Ordinul ”Légion d’Honneur”(2005).</p>">GHEORGHE FULGA</a>**`,
        description: `director al SIE (12.02.2001 - 20.07.2006).`,
      },
      {
        title: "# **CĂTĂLIN HARNAGEA**",
        description: `director al SIE (31.07.1997 - 31.12.2000).`,
      },
      {
        title: `# **<a rel="true" href="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Teodor Meleșcanu a fost directorul Serviciului de Informații Externe în perioada februarie 2012 – august 2014.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Drept a Universității București și a urmat cursuri postuniversitare în domeniul relațiilor internaționale la Universitatea București și Universitatea din Geneva. În 1973 a obținut titlul științific de doctor în specializarea drept internațional la Universitatea din Geneva.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diplomat de carieră, domnul Teodor Meleșcanu are o prodigioasă carieră diplomatică și politică, fiind subsecretar de stat și secretar de stat în MAE (1990-1991), Ministru al Afacerilor Externe, Ministru al Apărării, Ministru interimar al Justiției. În perioada 1996-2012 a fost senator, membru al Parlamentului României.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În decembrie 2012 fost decorat cu Ordinul Național ”Steaua României ” în grad de cavaler.</p></br>">TEODOR-VIOREL MELEŞCANU</a>**`,
        description: `director al SIE (27.02.2012 - 22.09.2014).`,
      },
      {
        title: "# **CLAUDIU SĂFTOIU**",
        description: `director al SIE (04.10.2006 - 24.04.2007).`,
      },
    ],
  },
  {
    data: [
      {
        title: `# **<a rel="true" href="<p/></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul general Silviu Predoiu a fost prim-adjunct al directorului SIE între 2005 și 2018 și director interimar al Serviciului de Informații Externe în perioadele 20.07 - 04.10.2006, 24.04.2007 – 08.12.2007, 08-27.02.2012, 22.09.2014 - 30.06.2015 şi 26.09.2016 - 04.07.2018.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Geologie-Geografie a Universității București, cursuri postuniversitare în specializările ”Jurnalism” - în cadrul SNSPA și ”Gestiunea proiectelor” în cadrul ASE, precum și programe de pregătire specifică organizate de serviciile partenere nord-atlantice.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A parcurs toate etapele unei cariere operative  și a desfășurat activitate operativă pe mai multe linii de muncă – contraspionaj extern, combaterea criminalității organizate, antiterorism, protecție internă. Începând cu anul 2000 a îndeplinit succesiv funcțiile de șef direcție, șef direcție generală și prim-adjunct al directorului SIE.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A fost avansat în gradul de general de brigadă în 2004 și înaintat în gradele de general-maior în 2006, general-locotenent în 2008 și general în 2011.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub coordonarea domnului general Predoiu, Serviciului de Informații Externe a parcurs un amplu proces de reformă instituțională, fapt ce a asigurat integrarea deplină a SIE în comunitatea informativă nord-atlantică și poziționarea sa ca unul dintre cele mai eficiente și profesioniste servicii de informații.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pentru rezultatele excepționale obținute în carieră, domnul general Silviu Predoiu a fost decorat cu Ordinul Național ”Steaua României” (2009- în grad de cavaler, 2012- în grad de ofițer, 2017 – în grad de comandor) și Ordinul Național ”Pentru Merit” precum și cu medalia ”George Tenet”.</p></br>">SILVIU PREDOIU</a>**`,
        description: `director interimar al SIE (20.07 - 04.10.2006, 24.04.2007 – 08.12.2007, 08-27.02.2012, 22.09.2014 - 30.06.2015 şi 26.09.2016 - 04.07.2018).`,
      },
      {
        title: `# **<a rel="true" href="<p/></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Mihai-Răzvan Ungureanu a deținut două mandate de director al Serviciului de Informații Externe, primul între decembrie 2007 – februarie 2012, al doilea în perioada iulie 2015 – septembrie 2016.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de istorie a Universității Al. I. Cuza din Iași și a urmat cursuri postuniversitare la Centre for Jewish and Hebrew Studies, St. Cross College, University of Oxford. În 2004 a obținut titlul științific de doctor în specializarea istorie la Universitatea Al. I. Cuza Iași.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Începând cu 1992, a parcurs toate etapele carierei academice, de la preparator universitar la profesor universitar (2007). Din 1998, odată cu numirea sa ca secretar de stat în MAE, domnul Mihai-Răzvan Ungureanu a avut o prodigioasă carieră diplomatică, ocupând succesiv funcțiile de Director general – Emisar special al Pactului de stabilitate pentru Europa de Sud-Est,  Coordonator adjunct, Inițiativa de Cooperare pentru Europa de Sud-Est și Ministru al Afacerilor Externe.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Între 9 februarie - 7 mai 2012 a fost Prim–ministru al Guvernului României iar în perioada decembrie 2012 – iunie 2015 a fost senator în Parlamentul României.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În perioada primului mandat al domnul Mihai-Răzvan Ungureanu, Serviciul de Informații Externe a finalizat procesul de reformă instituțională, domnia sa asumându-și și susținând implementarea măsurilor din programul de reformă demarat în mandatul domnului Gheorghe Fulga.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pe parcursul carierei a primit numeroase distincții și premii. A fost decorat cu Ordinul Național ”Steaua României” (2008 – în grad de cavaler, 2011 – în grad de ofițer), Ordinul Național ”Pentru Merit” (2000), Ordinul ”Meritul Diplomatic” (2007), Ordinul Regal ”Dannebrog” (Danemarca, 2000).</p></br>">MIHAI-RĂZVAN UNGUREANU</a>**`,
        description: `director al SIE (08.12.2007 - 08.02.2012 şi 30.06.2015 - 26.09.2016).`,
      },
    ],
  },
];
export const SEFII_FOREIGN_DATA_MOBILEVIEW = [
  {
    data: [
      {
        title: "# **MIHAI CARAMAN**",
        description: `adjunct al ministrului apărării naţionale şi comandant al CIE (18.01.1990 - 13.12.1990); director al Serviciului de Informaţii Externe - SIE (13.12.1990 - 09.04.1992).`,
      },
      {
        title: "# **IOAN TALPEŞ**",
        description: `director al SIE (09.04.1992 - 31.07.1997).`,
      },
      {
        title: `# **<a rel="true" href="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Gheorghe Fulga a fost directorul Serviciului de Informații Externe în perioada februarie 2001 – iulie 2006.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Filosofie a Universității București și a obținut titlul științific de doctor la aceeași universitate. </p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; După absolvirea facultății a fost sociolog la ”Tractorul” Brașov iar din 1979 a devenit cadru didactic universitar la Universitatea Transilvania Brașov. După 1990 a îndeplinit funcțiile de expert și consilier la Președinția României (1990 - 1992), prefect al județului Brașov (1992- 1994), consilier prezidențial (1994-1996) și deputat în Parlamentul României, calitate din care a demisionat odată cu numirea în funcția de director al SIE.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Gheorghe Fulga are meritul incontestabil de a fi înțeles nevoia de modernizare reală a Serviciului, sens în care a inițiat și încurajat un amplu proces de reformă instituțională (2004 -2010), conceput și implementat sub coordonarea unui comitet de reformă, condus de cei doi adjuncți ai directorului, domnii generali Predoiu și Sarcă.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A fost decorat cu Ordinul Național ”Steaua României” (2002 – în grad de cavaler, 2005 – în grad de ofițer) precum și cu Ordinul ”Légion d’Honneur”(2005).</p>">GHEORGHE FULGA</a>**`,
        description: `director al SIE (12.02.2001 - 20.07.2006).`,
      },

      {
        title: `# **<a rel="true" href="<p/></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Mihai-Răzvan Ungureanu a deținut două mandate de director al Serviciului de Informații Externe, primul între decembrie 2007 – februarie 2012, al doilea în perioada iulie 2015 – septembrie 2016.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de istorie a Universității Al. I. Cuza din Iași și a urmat cursuri postuniversitare la Centre for Jewish and Hebrew Studies, St. Cross College, University of Oxford. În 2004 a obținut titlul științific de doctor în specializarea istorie la Universitatea Al. I. Cuza Iași.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Începând cu 1992, a parcurs toate etapele carierei academice, de la preparator universitar la profesor universitar (2007). Din 1998, odată cu numirea sa ca secretar de stat în MAE, domnul Mihai-Răzvan Ungureanu a avut o prodigioasă carieră diplomatică, ocupând succesiv funcțiile de Director general – Emisar special al Pactului de stabilitate pentru Europa de Sud-Est,  Coordonator adjunct, Inițiativa de Cooperare pentru Europa de Sud-Est și Ministru al Afacerilor Externe.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Între 9 februarie - 7 mai 2012 a fost Prim–ministru al Guvernului României iar în perioada decembrie 2012 – iunie 2015 a fost senator în Parlamentul României.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În perioada primului mandat al domnul Mihai-Răzvan Ungureanu, Serviciul de Informații Externe a finalizat procesul de reformă instituțională, domnia sa asumându-și și susținând implementarea măsurilor din programul de reformă demarat în mandatul domnului Gheorghe Fulga.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pe parcursul carierei a primit numeroase distincții și premii. A fost decorat cu Ordinul Național ”Steaua României” (2008 – în grad de cavaler, 2011 – în grad de ofițer), Ordinul Național ”Pentru Merit” (2000), Ordinul ”Meritul Diplomatic” (2007), Ordinul Regal ”Dannebrog” (Danemarca, 2000).</p></br>">MIHAI-RĂZVAN UNGUREANU</a>**`,
        description: `director al SIE (08.12.2007 - 08.02.2012 şi 30.06.2015 - 26.09.2016).`,
      },
    ],
  },
  {
    data: [
      {
        title: `# **<a rel="true" href="<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul Teodor Meleșcanu a fost directorul Serviciului de Informații Externe în perioada februarie 2012 – august 2014.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Drept a Universității București și a urmat cursuri postuniversitare în domeniul relațiilor internaționale la Universitatea București și Universitatea din Geneva. În 1973 a obținut titlul științific de doctor în specializarea drept internațional la Universitatea din Geneva.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Diplomat de carieră, domnul Teodor Meleșcanu are o prodigioasă carieră diplomatică și politică, fiind subsecretar de stat și secretar de stat în MAE (1990-1991), Ministru al Afacerilor Externe, Ministru al Apărării, Ministru interimar al Justiției. În perioada 1996-2012 a fost senator, membru al Parlamentului României.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; În decembrie 2012 fost decorat cu Ordinul Național ”Steaua României ” în grad de cavaler.</p></br>">TEODOR-VIOREL MELEŞCANU</a>**`,
        description: `director al SIE (27.02.2012 - 22.09.2014).`,
      },
      {
        title: "# **CLAUDIU SĂFTOIU**",
        description: `director al SIE (04.10.2006 - 24.04.2007).`,
      },
      {
        title: `# **<a rel="true" href="<p/></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Domnul general Silviu Predoiu a fost prim-adjunct al directorului SIE între 2005 și 2018 și director interimar al Serviciului de Informații Externe în perioadele 20.07 - 04.10.2006, 24.04.2007 – 08.12.2007, 08-27.02.2012, 22.09.2014 - 30.06.2015 şi 26.09.2016 - 04.07.2018.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A absolvit Facultatea de Geologie-Geografie a Universității București, cursuri postuniversitare în specializările ”Jurnalism” - în cadrul SNSPA și ”Gestiunea proiectelor” în cadrul ASE, precum și programe de pregătire specifică organizate de serviciile partenere nord-atlantice.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A parcurs toate etapele unei cariere operative  și a desfășurat activitate operativă pe mai multe linii de muncă – contraspionaj extern, combaterea criminalității organizate, antiterorism, protecție internă. Începând cu anul 2000 a îndeplinit succesiv funcțiile de șef direcție, șef direcție generală și prim-adjunct al directorului SIE.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A fost avansat în gradul de general de brigadă în 2004 și înaintat în gradele de general-maior în 2006, general-locotenent în 2008 și general în 2011.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sub coordonarea domnului general Predoiu, Serviciului de Informații Externe a parcurs un amplu proces de reformă instituțională, fapt ce a asigurat integrarea deplină a SIE în comunitatea informativă nord-atlantică și poziționarea sa ca unul dintre cele mai eficiente și profesioniste servicii de informații.</p></br><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Pentru rezultatele excepționale obținute în carieră, domnul general Silviu Predoiu a fost decorat cu Ordinul Național ”Steaua României” (2009- în grad de cavaler, 2012- în grad de ofițer, 2017 – în grad de comandor) și Ordinul Național ”Pentru Merit” precum și cu medalia ”George Tenet”.</p></br>">SILVIU PREDOIU</a>**`,
        description: `director interimar al SIE (20.07 - 04.10.2006, 24.04.2007 – 08.12.2007, 08-27.02.2012, 22.09.2014 - 30.06.2015 şi 26.09.2016 - 04.07.2018).`,
      },
      {
        title: "# **CĂTĂLIN HARNAGEA**",
        description: `director al SIE (31.07.1997 - 31.12.2000).`,
      },
    ],
  },
];

var tooltips_heroes = {
    "A. F. Karla" : "Passt die ersten zwei Züge. Beginnt mit je einem Diener der Gasthaustufe 3 und 4",
    "Brann Bronzebart" : "Nachdem ihr einen Diener mit Kampfschrei ausgespielt habt verleiht einem zufälligem Diener +1/+1",
    "Der Grauselhurz" : "",
    "Der große Akazamzarak" : "Entdeckt ein Geheimnis. Kostet (2) Gold",
    "Der Kurator" : "Beginnt mit einer alptraumhaften Mutation",
    "Der Lichkönig" : "Verleiht eurem Diener ganz rechts Wiederkehr. Kostet (3) Gold",
    "Der Rattenkönig" : "Euer nächstes Wildtier in diesem Zug hat +1/+1. Wechselt in jedem Zug",
    "Der steppende Steppke" : "",
    "Edwin van Cleef" : "",
    "Elise Sternensucher" : "",
    "Erzschurke Rafaam" : "Erhaltet den ersten Diener der im nächsten Zug als erstes Stirbt auf die Hand. Kostet (1) Gold",
    "Flickwerk" : "Beginnt mit 50 Leben",
    "Galliwix" : "",
    "Gustav der Gefallene" : "Verleiht einem Diener Gottesschild. Kostet (4) Gold",
    "Käpt'n Glubschauge" : "",
    "König Mukla" : "",
    "Königin Wagtoggel" : "Verleiht einem Mech, Dämon, Wildtier und Murloc +1/+1. Kostet (2) Gold",
    "Lich Baz'hial" : "",
    "Lord Jaraxxus" : "Verleiht euren Dämonen +1/+1. Kostet (2) Gold",
    "Millificient Manasturm" : "Eure Mechs haben im Gasthaus +1/+1",
    "Nefarian" : "Fügt allen gegnerischen Dienern zu Beginn eures Zuges 1 Schaden zu. Kostet (1) Gold",
    "Pyramidos" : "",
    "Ragnaros der Feuerfürst" : "Fügt zwei gegnerischen Dienern 8 Schaden zu. Kostet (3) Gold",
    "Sindragosa" : "Eingefrorene Diener haben +1/+1",
    "Sir Finley Mrrgglton" : "",
    "Sylvanas Windläufer" : "",
    "Thekotron" : "",
    "Toki die Unendliche" : "Heuert einen Gast aus einer höheren Gasthausstufe an. Kostet (2) Gold",
    "Yogg-Saron" : ""
    
};

var spiele = 
    [
        ["14.11.19", 1, 3886, 0, 6, "A. F. Karla"],
        ["", 2,	3912,	26,	2, "Flickwerk"],
        [ "",  3,	3930,	18,	3,	"Millificient Manasturm"],
        ["",    4,	3964,	34,	1,	"Königin Wagtoggel"],
        ["",    5,	3969,	5,	4,	"Pyramidos"],
        ["",    6,	3950,	-19,	7, "Der Grauselhurz"],
        ["",    7,	3975,	25,	2,	"König Mukla"],
        ["15.11.19",	8,	3999,	24,	2, "Millificient Manasturm"],	
        ["",    9,	4031,	32,	1,	"Käpt'n Glubschauge"],
        ["",    10,	4040,	9,	4,	"Ragnaros der Feuerfürst"],
        ["",    11,	4064,	24,	2,	"König Mukla"],
        ["",    12,	4074,	10,	2,	"Käpt'n Glubschauge"],
        ["",    13,	4054,	-20,	8,	"A. F. Karla"],
        ["",    14,	4076,	22,	2,	"Millificient Manasturm"],
        ["",    15,	4078,	2,	4,	"Gustav der Gefallene"],
        ["",    16,	4076,	6,	2,	"Millificient Manasturm"],
        ["",    17,	4117,	41,	4,	"Der Kurator"],
        ["",    18,	4098,	-19,	8,	"König Mukla"],
        ["",    19,	4127,	29,	1,	"Königin Wagtoggel"],
        ["",    20,	4143,	16,	3,	"Königin Wagtoggel"],
        ["",    21,	4159,	16,	3,	"König Mukla"],
        ["",    22,	4188,	29,	1,	"Der Rattenkönig"],
        ["",    23,	4200,	12,	4,	"Thekotron"],
        ["",    24,	4198,	-2,	6,	"Pyramidos"],
        ["",    25,	4186,	-12,	7,	"Gustav der Gefallene"],
        ["16.11.19",	26,	4201,	15,	3,	"Thekotron"],
        ["",    27,	4192,	-9,	7,	"Der Rattenkönig"],
        ["",    28,	4180,	-12,	7,	"Flickwerk"],
        ["",    29,	4202,	22,	2,	"Flickwerk"],
        ["",    30,	4225,	23,	2,	"Millificient Manasturm"],
        ["",    31,	4223,	-2,	6,	"Pyramidos"],
        ["",    32,	4203,	-20,	8,	"Königin Wagtoggel"],
        ["",    33,	4183,	-20,	8,	"Käpt'n Glubschauge"],
        ["",    34,	4206,	23,	2,	"Toki die Unendliche"],
        ["",    35,	4204,	-2,	6,	"Ragnaros der Feuerfürst"],
        ["",    36,	4209,	5,	4,	"Lord Jaraxxus"],
        ["",    37,	4193,	-16,	8,	"Galliwix"],
        ["",    38,	4208,	15,	3,	"Lord Jaraxxus"],
        ["",    39,	4196,	-12,	7,	"Der große Akazamzarak"],
        ["",    40,	4176,	-20,	8,	"Toki die Unendliche"],
        ["",    41,	4199,	23,	2,	"Flickwerk"],
        ["",    42,	4214,	15,	3,	"Brann Bronzebart"],
        ["17.11.19",	43,	4230,	16,	3, "Nefarian"],	
        ["",    44,	4228,	-2,	5,	"Der große Akazamzarak"],
        ["",    45,	4208,	-20,	8,	"Brann Bronzebart"],
        ["18.11.19",	46,	4206,	-2,	5, "Millificient Manasturm"],	
        ["19.11.19",	47,	4236,	30,	1,	"Der Rattenkönig"],
        ["",   48,	4216,	-20,	8,	"Lich Baz'hial"],
        ["",    49,	4221,	5,	4,	"Gustav der Gefallene"],
        ["20.11.19",	50,	4201,	-20,	8,	"Pyramidos"],
        ["",    51,	4234,	33,	3,	"Nefarian"],
        ["21.11.19",	52,	4211,	-23,	6,	"Sindragosa"],
        ["",    53,	4258,	47,	3,	"Brann Bronzebart"],
        ["22.11.19",	54,	4193,	-65,	7,	"Sir Finley Mrrgglton"],
        ["",    55,	4268,	75,	2,	"Flickwerk"],
        ["",    56,	4245,	-23,	5,	"A. F. Karla"],
        ["",    57,	4320,	75,	2,	"Sindragosa"],
        ["",    58,	4297,	-23,	6,	"Brann Bronzebart"],
        ["",    59,	4232,	-65,	7,	"Der Rattenkönig"],
        ["",    60,	4223,	-9,	5,	"Lord Jaraxxus"],
        ["",    61,	4256,	33,	4,	"Käpt'n Glubschauge"],
        ["",    62,	4360,	104,	1,	"Lord Jaraxxus"],
        ["23.11.19",	63,	4407,	47,	3,	"Der Grauselhurz"],
        ["",    64,	4509,	102,	1,	"Galliwix"],
        ["",    65,	4444,	-65,	7,	"Der steppende Steppke"],
        ["",    66,	4491,	47,	3,	"Gustav der Gefallene"],
        ["",    67,	4496,	5,	5,	"Elise Sternensucher"],
        ["",    68,	4501,	5,	5,	"Brann Bronzebart"],
        ["",    69,	4603,	102,	1,	"Sindragosa"],
        ["",    70,	4565,	-38,	6,	"Der Grauselhurz"],
        ["24.11.19",	71,	4527,	-38,	6,	"Der Kurator"],
        ["",    72,	4573,	46,	3,	"A. F. Karla"],
        ["",    73,	4577,	4,	4,	"Elise Sternensucher"],
        ["",    74,	4539,	-38,	6,	"Gustav der Gefallene"],
        ["",    75,	4474,	-65,	7,	"Flickwerk"],
        ["",    76,	4576,	102,	1,	"Nefarian"],
        ["",    77,	4510,	-66,	7,	"Der Rattenkönig"],
        ["25.11.19",	78,	4556,	46,	3,	"Lord Jaraxxus"],
        ["",    79,	4532,	-24,	5,	"Sindragosa"],
        ["",    80,	4481,	-51,	6,	"Ragnaros der Feuerfürst"],
        ["",    81,	4444,	-37,	6,	"Der steppende Steppke"],
        ["27.11.19",	82,	4518,	74,	2,	"Gustav der Gefallene"],
        [ "",   83,	4439,	-79,	7,	"Nefarian"],
        ["",    84,	4346,	-93,	8,	"Lord Jaraxxus"],
        [ "",   85,	4252,	-94,	8,	"Sindragosa"],
        ["",    86,	4290,	103,	1,	"Flickwerk"],
        ["",    87,	4366,	76,	2,	"Der Rattenkönig"],
        [ "",   88,	4301,	-65,	7,	"Lord Jaraxxus"],
        ["",    89,	4376,	75,	2,	"Käpt'n Glubschauge"],
        ["28.11.19",	90,	4394,	18,	4,	"Gustav der Gefallene"],
        ["",    91,	4442,	48,	3,	"Nefarian"],
        [ "",           92,	4433,	-9,	5,	"Elise Sternensucher"],
        ["29.11.19",	93,	4507,	74,	2,	"Brann Bronzebart"],
        ["",    94,	4539,	32,	3,	"Sindragosa"],
        [ "",   95,	4557,	18,	4,	"Sindragosa"],
        [ "",   96,	4547,	-10,	5,	"Sindragosa"],
        ["",    97,	4496,	-51,	6,	"Flickwerk"],
        ["",            98,	4488,	-8,	5,	"Gustav der Gefallene"],
        ["",    99,	4534,	46,	3,	"Elise Sternensucher"],
        ["",    100,	4608,	74,	2,	"Nefarian"],
        ["",    101,	4542,	-66,	7,	"Gustav der Gefallene"],
        ["",    102,	4504,	-38,	6,	"Käpt'n Glubschauge"],
        ["",    103,	4466,	-38,	6,	"Ragnaros der Feuerfürst"],
        ["",    104,	4387,	-79,	7,	"Lord Jaraxxus"],
        ["",    105,	4392,	5,	5,	"Der Kurator"],
        ["",    106,	4440,	48,	3,	"A. F. Karla"],
        ["30.11.19",	107,	4403,	-37,	5,	"A. F. Karla"],
        ["",    108,	4450,	47,	3,	"Der Kurator"],
        ["",    109,	4440,	-10,	5,	"A. F. Karla"],
        ["",    110,	4403,	-37,	6,	"Der Kurator"],
        ["",    111,	4478,	75,	2,	"Der Rattenkönig"],
        ["",    112,	4385,	-93,	8,	"Elise Sternensucher"],
        ["",    113,	4362,	-23,	5,	"Lord Jaraxxus"],
        ["",    114,	4465,	103,	1,	"Pyramidos"],
        ["",    115,	4484,	19,	4,	"Nefarian"],
        ["",    116,	4476,	-8,	5,	"Sindragosa"],
        ["01.12.19",	117,	4522,	46,	3,	"Sindragosa"],
        ["",    118,	4526,	4,	4,	"Lord Jaraxxus"],
        ["",    119,	4600,	74,	2,	"Nefarian"],
        ["",    120,	4646,	46,	3,	"Der Lichkönig"],
        ["",    121,	4720,	74,	2,	"Sindragosa"],
        ["", 122, 4752, 32, 4, "Sir Finley Mrrgglton"],
        ["02.12.19", 123, 4658, -94, 8, "Elise Sternensucher"],
        ["", 124, 4620, -38, 6, "Toki die Unendliche"],
        ["", 125, 4652, 32, 3, "Der Rattenkönig"],
        ["03.12.19", 126, 4628, -24, 6, "Flickwerk"],
        ["", 127, 4562, -66, 7, "Käpt'n Glubschauge"],
        ["04.12.19", 128, 4664, 102, 1, "Der Kurator"],
        ["", 129, 4640, -24, 5, "Brann Bronzebart"],
        ["", 130, 4714, 74, 2, "Königin Wagtoggel"],
        ["", 131, 4789, 75, 2, "Sindragosa"],
        ["", 132, 4849, 60, 3, "Thekotron"],
        ["05.12.19", 133, 4867, 18, 4, "Nefarian"],
        ["06.12.19", 134, 4886, 19, 4, "Der Rattenkönig"],
        ["", 135, 4759, -127, 8, "Edwin van Cleef"],
        ["", 136, 4786, 27, 4, "Der Rattenkönig"],
        ["", 137, 4719, -67, 6, "Millificient Manasturm"],
        ["", 138, 4838, 119, 2, "Sindragosa"],
        ["", 139, 4725, -113, 8, "Lord Jaraxxus"],
        ["", 140, 4773, 48, 3, "Der Rattenkönig"],
        ["", 141, 4800, 27, 4, "Lord Jaraxxus"],
        ["", 142, 4691, -109, 7, "Der Kurator"],
        ["", 143, 4645, -46, 5, "Der Grauselhurz"],
        ["07.12.19", 144, 4482, -163, 8, "Brann Bronzebart"],
        ["", 145, 4434, -48, 6, "Millificient Manasturm"],
        ["", 146, 4362, -72, 6, "Der große Akazamzarak"],
        ["", 147, 4317, -45, 5, "Der Rattenkönig"],
        ["", 148, 4442, 125, 2, "Millificient Manasturm"],
        ["", 149, 4447, 5, 4, "Yogg-Saron"],
        ["", 150, 4607, 160, 1, "Edwin van Cleef"],
        ["", 151, 4568, -39, 5, "Sir Finley Mrrgglton"],
        ["", 152, 4427, -141, 8, "Toki die Unendliche"],
        ["", 153, 4472, 45, 3, "Der Rattenkönig"],
        ["", 154, 4515, 43, 3, "Erzschurke Rafaam"],
        ["08.12.19", 155, 4463, -52, 6, "Sylvanas Windläufer"],
        ["", 156, 4450, -13, 5, "Der Kurator"],
        ["", 157, 4420, -30, 6, "Flickwerk"],
        ["", 158, 4476, 56, 3, "Millificient Manasturm"],
        ["", 159, 4398, -78, 7, "Gustav der Gefallene"],
        ["", 160, 4420, 22, 4, "Der Rattenkönig"],
        ["09.12.19", 161, 4378, -42, 6, "A. F. Karla"],
        ["", 162, 4397, 19, 4, "Königin Wagtoggel"],
        ["", 163, 4387, -10, 5, "Der Rattenkönig"],
        ["", 164, 4465, 78, 2, "Ragnaros der Feuerfürst"],
        ["", 165, 4441, -24, 6, "Der steppende Steppke"],
        ["", 166, 4363, -78, 7, "Nefarian"],
        ["", 167, 4382, 19, 4, "Erzschurke Rafaam"],
        ["", 168, 4317, -65, 7, "Sylvanas Windläufer"],
        ["", 169, 4322, 5, 4, "Gustav der Gefallene"],
        ["", 170, 4369, 47, 3, "Der Rattenkönig"],
        ["10.12.19", 171, 4444, 75, 2, "Millificient Manasturm"],
        ["", 172, 4546, 102, 1, "Edwin van Cleef"],
        ["", 173, 4620, 74, 2, "Der Rattenkönig"],
        ["11.12.19", 174, 4666, 46, 3, "Edwin van Cleef"],
        ["", 175, 4656, -10, 4, "A. F. Karla"],
        ["", 176, 4702, 46, 3, "Edwin van Cleef"],
        ["", 177, 4720, 18, 4, "Königin Wagtoggel"],
        ["", 178, 4752, 32, 3, "Erzschurke Rafaam"],
        ["12.12.19", 179, 4742, -10, 5, "Erzschurke Rafaam"],
        ["", 180, 4732, -10, 5, "Sindragosa"],
        ["", 181, 4694, -38, 6, "Lord Jaraxxus"],
        ["", 182, 4712, 18, 4, "Der Rattenkönig"],
        ["13.12.19", 183, 4632, -80, 8, "Erzschurke Rafaam"],
        ["", 184, 4608, -24, 6, "Der Rattenkönig"],
        ["", 185, 4570, -38, 5, "Flickwerk"],
        ["", 186, 4602, 32, 3, "Gustav der Gefallene"],
        ["", 187, 4592, -10, 5, "Der Kurator"],
        ["", 188, 4667, 75, 2, "Erzschurke Rafaam"],
        ["", 189, 4741, 74, 2, "Gustav der Gefallene"],
        ["", 190, 4703, -38, 6, "Der Grauselhurz"],
        ["17.12.19", 191, 4679, -24, 6, "Flickwerk"],
        ["", 192, 4683, 5, 3, "Der große Akazamzarak"],
        ["", 193, 4715, 32, 3, "Lord Jaraxxus"],
        ["", 194, 4761, 46, 3, "Yogg-Saron"],
        ["", 195, 4779, 18, 4, "Sylvanas Windläufer"],
        ["19.12.19", 196, 4826, 47, 3, "Brann Bronzebart"],
        ["", 197, 4732, -94, 8, "Der Rattenkönig"],
        ["", 198, 4722, -10, 5, "Millificient Manasturm"],
        ["", 199, 4768, 46, 3, "Sindragosa"],
        ["", 200, 4674, -94, 8, "Erzschurke Rafaam"],
        ["", 201, 4664, -10, 6, "Flickwerk"],
        ["", 202, 4654, -10, 5, "Edwin van Cleef"],
        ["", 203, 4575, -79, 7, "Gustav der Gefallene"],
        ["", 204, 4621, 46, 3, "Brann Bronzebart"],
        ["", 205, 4610, -11, 5, "Nefarian"],
        ["", 206, 4558, -52, 7, "Sindragosa"],
        ["", 207, 4605, 47, 3, "Brann Bronzebart"],
        ["", 208, 4679, 74, 2, "A. F. Karla"],
        ["", 209, 4754, 75, 2, "Elise Sternensucher"],
        ["", 210, 4800, 46, 3, "Sindragosa"],
        ["", 211, 4832, 32, 3, "Millificient Manasturm"],
        ["", 212, 4876, 44, 3, "Sindragosa"],
        ["20.12.19", 213, 4866, -10, 5, "Erzschurke Rafaam"],
        ["", 214, 4940, 74, 2, "A. F. Karla"],
        ["", 215, 5013, 73, 2, "Der Kurator"],
        ["", 216, 5114, 101, 1, "Millificient Manasturm"],
        ["", 217, 5132, 18, 4, "Sylvanas Windläufer"],
        ["", 218, 5233, 101, 1, "Der Kurator"],
        ["", 219, 5222, -11, 5, "Sylvanas Windläufer"],
        ["", 220, 5197, -25, 5, "Elise Sternensucher"],
        ["", 221, 5229, 32, 3, "Nefarian"],
        ["", 222, 5274, 45, 3, "Thekotron"],
        ["", 223, 5178, -96, 8, "Nefarian"],
        ["", 224, 5195, 17, 3, "Erzschurke Rafaam"],
        ["", 225, 5198, 3, 5, "Erzschurke Rafaam"],
        ["21.12.19", 226, 5158, -40, 6, "Der Grauselhurz"],
        ["", 227, 5189, 31, 4, "A. F. Karla"],
        ["", 228, 5220, 32, 3, "Thekotron"],
        ["", 229, 5265, 45, 3, "Der Kurator"],
        ["", 230, 5198, -67, 7, "Der Rattenkönig"],
        ["", 231, 5173, -25, 6, "Ragnaros der Feuerfürst"],
        ["", 232, 5106, -67, 6, "Gustav der Gefallene"],
        ["", 233, 5151, 45, 3, "Thekotron"],
        ["22.12.19", 234, 5182, 31, 3, "A. F. Karla"],
        ["", 235, 5283, 101, 1, "Edwin van Cleef"],
        ["", 236, 5273, -10, 5, "Edwin van Cleef"],
        ["", 237, 5318, 45, 3, "Edwin van Cleef"],
        ["23.12.19", 238, 5222, -96, 8, "Nefarian"],
        ["", 239, 5169, -53, 7, "A. F. Karla"],
        ["", 240, 5172, 3, 4, "Lord Jaraxxus"],
        ["", 241, 5245, 73, 2, "Lord Jaraxxus"],
        ["", 242, 5179, -66, 7, "Flickwerk"],
        ["", 243, 5182, 3, 5, "Elise Sternensucher"],
        ["", 244, 5115, -67, 7, "Millificient Manasturm"],
        ["", 245, 5020, -95, 8, "Der Lichkönig"],
        ["", 246, 5065, 45, 3, "Flickwerk"],
        ["", 247, 5040, -25, 5, "Sindragosa"],
        ["", 248, 5002, -38, 6, "Sindragosa"],
        ["", 249, 4936, -66, 7, "Erzschurke Rafaam"],
        ["24.12.19", 250, 4912, -24,  5, "Thekotron"],
        ["", 251, 4902, -10, 5, "Der Kurator"],
        ["", 252, 4976, 74, 2, "A. F. Karla"],
        ["", 253, 4910, -66, 7, "Der Kurator"],
        ["", 254, 5012, 102, 1, "Der Kurator"],
        ["", 255, 4917, -95, 8, "Edwin van Cleef"],
        ["", 256, 4863, -54, 6, "Toki die Unendliche"],
        ["", 257, 4854, -9, 5, "Sindragosa"],
        ["", 258, 4829, -25, 5, "Erzschurke Rafaam"]
    ];

var platzierungen = {"1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0};
var heroes = [];

function calculateStats() {
    calculateRanks();
    calculateHeroes();
}

function calculateRanks() {
   $.each( spiele, function( index, value ){
        switch(value[4]) {
            case 1:
                platzierungen["1"]++;
                break;
            case 2:
                platzierungen["2"]++;
                break;
            case 3:
                platzierungen["3"]++;
                break;
            case 4:
                platzierungen["4"]++;
                break;
            case 5:
                platzierungen["5"]++;
                break;
            case 6:
                platzierungen["6"]++;
                break;
            case 7:
                platzierungen["7"]++;
                break;
            case 8:
                platzierungen["8"]++;
                break;
        }
    }); 
}

function getHeroFromHeroes(heroname) {
    var returnHero = null;
    heroes.forEach(function(hero, index) {
        if (hero["name"] == heroname) {
            returnHero = hero;
        }
    });

    if (returnHero == null) {
        var newHero = {"name" : heroname, "Spiele": 0, "Top4": 0, "Top2": 0, "Punkte": 0, "Platzierungen" : []};
        heroes.push(newHero);
    }

    heroes.forEach(function(hero, index) {
        if (hero["name"] == heroname) {
            returnHero = hero;
        }
    });

    return returnHero;
}

function calculateHeroes() {
    $.each( spiele, function( index, value ){
        var hero = getHeroFromHeroes(value[5]);

        // Spiele
         hero["Spiele"]++;

        // Top 4
        if (value[4] <= 4) {
            hero["Top4"]++;
        }

        // Top 
        if (value[4] <= 2) {
            hero["Top2"]++;
        }

        // Punktedifferenz
        hero["Punkte"] += value[3];

        // Platzierung
        hero["Platzierungen"].push(value[4]);
    });

    console.log(heroes);
}

$(document).ready(function(){
    google.charts.load('current', {'packages':['corechart']}); 
    calculateStats();
    drawGamesTableAnScroll();
    drawPlatzierungenTable();
    drawHeros("Spiele");
    google.charts.setOnLoadCallback(drawPunkteLinechart);
    google.charts.setOnLoadCallback(drawPlatzierungenLinechart);

    $('#button_hero_spiele').click(function(){
        drawHeros("Spiele");
        $('.button').removeClass("active");
        $("#button_hero_spiele").addClass("active");
    });

    $('#button_hero_top2ins').click(function(){
        drawHeros("Top2");
        $('.button').removeClass("active");
        $("#button_hero_top2ins").addClass("active");
    });

    $('#button_hero_top2prozent').click(function(){
        drawHeros("Top2Prozent");
        $('.button').removeClass("active");
        $("#button_hero_top2prozent").addClass("active");
    });

    $('#button_hero_top4ins').click(function(){
        drawHeros("Top4");
        $('.button').removeClass("active");
        $("#button_hero_top4ins").addClass("active");
    });

    $('#button_hero_top4prozent').click(function(){
        drawHeros("Top4Prozent");
        $('.button').removeClass("active");
        $("#button_hero_top4prozent").addClass("active");
    });

    $('#button_hero_punkte').click(function(){
        drawHeros("Punkte");
        $('.button').removeClass("active");
        $("#button_hero_punkte").addClass("active");
    });

    $('.hero_img').tooltip({});
});

/**
 * Table für alle Spiele
 * Inkludiert: Datum, Spielnr., Punkte, Punktedifferenz, Platzierung und Hero
 */
function drawGamesTableAnScroll() {
    // Platzierungen Table zusammenbauen
    var html_games_table = '';
    $.each( spiele, function( index, value ){
        var odd = index%2 == 0;
        var rank = "";
        if (value[4] < 3) rank = "platz_high";
        else if (value[4] > 6) rank = "platz_low"
        else rank = "platz_mid";

        html_games_table += "<tr class=\"";
        if (odd) html_games_table += " tablerow_odd ";
        html_games_table += "\">"
        html_games_table += "<td>" + value[0] + "</td>";
        html_games_table += "<td>" + value[1] + "</td>";
        html_games_table += "<td>" + value[2] + "</td>";
        html_games_table += "<td>" + value[3] + "</td>";
        html_games_table += "<td class=\"" + rank + "\">" + value[4] + "</td>";
        html_games_table += "<td>" + value[5] + "</td>";
        html_games_table += "</tr>";
        $("#table_games > tbody").html(html_games_table);
    });
    $("#div_table_games").animate({ scrollTop: $('#div_table_games').prop("scrollHeight")}, 2000);
}

/**
 * Malt das Table für die Platzierungsübersicht + Das Columntable
 */
function drawPlatzierungenTable() {
    var durchschnitt = (1*platzierungen["1"] + 2*platzierungen["2"] + 3*platzierungen["3"] + 4*platzierungen["4"] + 5*platzierungen["5"] + 6*platzierungen["6"] + 7*platzierungen["7"] + 8*platzierungen["8"]) / (platzierungen["1"] + platzierungen["2"] + platzierungen["3"] + platzierungen["4"] + platzierungen["5"] + platzierungen["6"] + platzierungen["7"] + platzierungen["8"]);
    var top4 = platzierungen["1"] + platzierungen["2"] + platzierungen["3"] + platzierungen["4"];
    var top2 = platzierungen["1"] + platzierungen["2"];
    var top4percent = (top4 / spiele.length * 100).toPrecision(4);
    var top2percent = (top2 / spiele.length * 100).toPrecision(4);

    var html_platzierungen_table = "<tr><td class=\"platz_high_ranks\">1</td><td>" + platzierungen["1"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_high_ranks\">2</td><td>" + platzierungen["2"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_mid_ranks\">3</td><td>" + platzierungen["3"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_mid_ranks\">4</td><td>" + platzierungen["4"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_mid_ranks\">5</td><td>" + platzierungen["5"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_mid_ranks\">6</td><td>" + platzierungen["6"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_low_ranks\">7</td><td>" + platzierungen["7"] + "</td></tr>";
    html_platzierungen_table += "<tr><td class=\"platz_low_ranks\">8</td><td>" + platzierungen["8"] + "</td></tr>";
    html_platzierungen_table += "<tr><td>Gesamt</td><td>" + spiele.length + "</td></tr>";
    html_platzierungen_table += "<tr><td>Top 2</td><td>" + top2 + " (" + top2percent + "%)</td></tr>";
    html_platzierungen_table += "<tr><td>Top 4</td><td>" + top4 + " (" + top4percent + "%)</td></tr>";
    html_platzierungen_table += "<tr><td>Durchschnitt</td><td>" + durchschnitt.toPrecision(3) + "</td></tr>";
    $("#table_platzierungen > tbody").html(html_platzierungen_table);

    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawPlatzierungenColumnChart);
}

/**
 * Malt das Columntable für die Platzierungsübersicht
 */
function drawPlatzierungenColumnChart() {
    var data = google.visualization.arrayToDataTable([
        ["Platz", "Anzahl", { role: 'style' }],
        [1, platzierungen["1"], 'black'],
        [2, platzierungen["2"], 'black'],
        [3, platzierungen["3"], 'black'],
        [4, platzierungen["4"], 'black'],
        [5, platzierungen["5"], 'black'],
        [6, platzierungen["6"], 'black'],
        [7, platzierungen["7"], 'black'],
        [8, platzierungen["8"], 'black']
    ]);

    var options = {
        backgroundColor: { fill:'transparent' },
        legend: { position: 'none' },
        height: 300,
        hAxis: {gridlines: {count: 0}},
        vAxis: {gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}}
    }

    var chart = new google.visualization.ColumnChart(document.getElementById('div_columnchart_platzierungen'));
    chart.draw(data, options);
}

/**
 * Malt das Linechart für den Punkteverlauf
 */
function drawPunkteLinechart() {
    var dataArray = []
    var date = '';
    $.each( spiele, function( index, value ){
        if (value[0] != "") {
            date = value[0];
        }

        var tooltip = "<b>Datum:</b> " + date + "<br><b>Punkte:</b> " + value[2] + "<br><b>Differenz:</b> " + value[3] + "<br><b>Platzierung:</b> " + value[4] + "<br><b>Hero:</b> " + value[5];
        dataArray.push([date, value[2], tooltip]);
    });
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn('string', 'Datum');
    dataTable.addColumn('number', 'Punkte');
    dataTable.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}})
    dataTable.addRows(dataArray);

    var options = {
        legend: { position: 'none' },
        backgroundColor: { fill:'transparent' },
        series: {
            0: { color: 'black' }
        },
        height: 500,
        chartArea: {
            height: 400,
            width: 1000
        },
        tooltip: { isHtml: true },
        hAxis: {gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}},
        vAxis: {gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}}
      };

      var chart = new google.visualization.LineChart(document.getElementById('div_linechart_punkte'));
      chart.draw(dataTable, options);
}

/**
 * Malt das Platzierungen Linechart
 */
function drawPlatzierungenLinechart() {
    var dataArray = [["Datum", "Platz"]]
    var date = '';
    $.each( spiele, function( index, value ){
        if (value[0] != "") {
            date = value[0];
        }

        dataArray.push([date, value[4]]);
    });
    var data = google.visualization.arrayToDataTable(dataArray);

    var options = {
        legend: { position: 'none' },
        backgroundColor: { fill:'transparent' },
        series: {
            0: { color: 'black' }
        },
        vAxis: {
            direction: '-1',
            gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}
        },
        hAxis: {gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}},
      };

      var chart = new google.visualization.LineChart(document.getElementById('div_linechart_platzierungen'));
      chart.draw(data, options);
}

/**
 * Malt die verwendeten Helden, aufsteigend nach gespielten Spielen
 */
function drawHeros(sortBy) {
    var sort = sortBy.includes("Prozent") ? sortBy.replace("Prozent", "") : sortBy;
    var prozent = sortBy.includes("Prozent");
   
    heroes.sort(function(a, b) {
        if (prozent) {
            return (b[sort]/b["Spiele"]*100) - (a[sort]/a["Spiele"]*100);
        }

        return b[sort] - a[sort];
    });

    var heroes_html ="<div id=\"heroes_placeholder\" class=\"row\">";
    $.each( heroes, function( index, hero ){
        if (index != 0 && index%4 == 0) {
            heroes_html += "</div><div class=\"row\">"
        }
        heroes_html += "<div class=\"col\">";
        heroes_html += "<div class=\"hero_img\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"" + tooltips_heroes[hero["name"]] + "\"><img src=\"img/heroes/" + getHeroImgName(hero["name"]) + "\"\></div>";
        heroes_html += "<div><h5>" + hero["name"] + "</h5></div>";
        heroes_html += "<div>Gespielte Spiele: <b>" + hero["Spiele"] + "</b></div>";
        heroes_html += "<div>Top2: <b>" + hero["Top2"] + "</b> (" + (hero["Top2"]/hero["Spiele"] * 100).toPrecision(4) + "%)</div>";
        heroes_html += "<div>Top4: <b>" + hero["Top4"] + "</b> (" + (hero["Top4"]/hero["Spiele"] * 100).toPrecision(4) + "%)</div>";
        heroes_html += "<div>Punkte: <b>" + hero["Punkte"] + "</b></div>";
        heroes_html += "<div id=\"hero_chart_" + getHeroImgName(hero["name"], false) + "\"></div>";
        heroes_html += "</div>";
    });
    heroes_html += "</div>";
    $("#heroes_placeholder").html(heroes_html);

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawHeroesLinecharts);
}

function drawHeroesLinecharts() {
    $.each( heroes, function( index, hero ){
        var dataArray = [];
        
        $.each(hero["Platzierungen"], function(index, platzierung){
            var tooltip = "<b>Platzierung</b>: " + platzierung;
            dataArray.push(["", platzierung, tooltip]);
        });

        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn('string', 'Datum');
        dataTable.addColumn('number', 'Platzierung');
        dataTable.addColumn({type: 'string', role: 'tooltip', 'p': {'html': true}})
        dataTable.addRows(dataArray);

        var options = {
            legend: { position: 'none' },
            backgroundColor: { fill:'transparent' },
            series: {
                0: { color: 'black' }
            },
            height: 100,
            chartArea: {
                height: 80,
            },
            tooltip: { isHtml: true },
            hAxis: {baselineColor: "#caae85", gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}},
            vAxis: {baselineColor: "#caae85", gridlines: {color: '#caae85'}, minorGridlines: {color: '#caae85'}, direction: '-1'}
          };
    
          var chart = new google.visualization.LineChart(document.getElementById("hero_chart_" + getHeroImgName(hero["name"], false)));
          chart.draw(dataTable, options);
    });
}

/**
 * Liefert den Bildnamen des Heroes zurück
 */
function getHeroImgName(name, withPng = true) { //value[0]
    console.log(name);
    var imgstr = name.allReplace({"ß": "ss", "-": "_", ".": "", " ": "_", "ä":"ae", "ö":"oe", "ü":"ue", "'":""});
    imgstr = imgstr.allReplace({"ß": "ss", "-": "_", ".": "", " ": "_", "ä":"ae", "ö":"oe", "ü":"ue", "'":""});
    imgstr = imgstr.allReplace({"ß": "ss", "-": "_", ".": "", " ": "_", "ä":"ae", "ö":"oe", "ü":"ue", "'":""});
    imgstr = imgstr.toLowerCase();
    
    if (withPng) {
        imgstr = imgstr + ".png";
    }

    return imgstr;
}

/**
 * Ersetzt vorkommen in Strings durch ihre Replaces
 */
String.prototype.allReplace = function(obj) {
    var retStr = this;
    for (var x in obj) {
        retStr = retStr.replace(x, obj[x]);
    }
    return retStr;
};
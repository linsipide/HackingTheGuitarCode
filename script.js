let listeA = {
  ' do Mineur Mélodique' : ['do', 'ré', 'ré#', 'fa', 'sol', 'la', 'si', "",],
  ' do# Mineur Mélodique' : ['do#', 'ré#', 'mi', 'fa#', 'sol#', 'la#', 'do', "",],
  ' ré Mineur Mélodique' : ['ré', 'mi', 'fa', 'sol', 'la', 'si', 'do#', ""],
  ' ré# Mineur Mélodique' : ['ré#', 'fa', 'fa#', 'sol#', 'la#', 'do', 'ré', ""],
  ' mi Mineur Mélodique' : ['mi', 'fa#', 'sol', 'la', 'si', 'do#', 'ré#', ""],
  ' fa Mineur Mélodique' : ['fa', 'sol', 'sol#', 'la#', 'do', 'ré', 'mi', ""],
  ' fa# Mineur Mélodique' : ['fa#', 'sol#', 'la', 'si', 'do#', 'ré#', 'fa', ""],
  ' sol Mineur Mélodique' : ['sol', 'la', 'la#', 'do', 'ré', 'mi', 'fa#', ""],
  ' sol# Mineur Mélodique' : ['sol#', 'la#', 'si', 'do#', 'ré#', 'fa', 'sol', ""],
  ' la Mineur Mélodique' : ['la', 'si', 'do', 'ré', 'mi', 'fa#', 'sol#', ""],
  ' la# Mineur Mélodique' : ['la#', 'do', 'do#', 'ré#', 'fa', 'sol', 'la', ""],
  ' si Mineur Mélodique' : ['si', 'do#', 'ré', 'mi', 'fa#', 'sol#', 'la#', ""],

  'do Mineure Harmonique' : ['do','ré','ré#','fa','sol','sol#','si', ""],
  'do# Mineure harmonique' : ['do#', 'ré#', 'mi', 'fa#', 'sol#', 'la', 'si', ""],
  'ré Mineure harmonique' : ['ré', 'mi', 'fa', 'sol', 'la', 'la#', 'do#', ""],
  'ré# Mineure Harmonique' : ['ré#','fa','fa#','sol#','la#','si','ré', ""],
  'mi Mineure harmonique' : ['mi', 'fa#', 'sol', 'la', 'si', 'do', 'ré#', ""],
  'fa Mineure harmonique' : ['fa', 'sol', 'sol#', 'la#', 'do', 'ré', 'mi', ""],
  'fa# Mineure Harmonique' : ['fa#','sol#','la','si','do#','ré','fa', ""],
  'sol Mineure harmonique' : ['sol', 'la', 'la#', 'do', 'ré', 'ré#', 'fa#', ""],
  'sol# Mineure Harmonique' : ['sol#','la#','si','do#','ré#','mi','sol', ""],
  'la Mineure harmonique' : ['la', 'si', 'do', 'ré', 'mi', 'fa', 'sol#', ""],
  'la# Mineure harmonique' : ['la#', 'do', 'do#', 'ré#', 'fa', 'fa#', 'la', ""],
  'si Mineure harmonique' : ['si', 'do#', 'ré', 'mi', 'fa#', 'sol', 'la#', ""],


  'do Mineur naturel' : ['do', 'ré', 'ré#', 'fa', 'sol', "sol#", "la#", ""], 
  'do# Mineur naturel' : ['do#', 'ré#', 'mi', 'fa#', 'sol#', "la", "si", ""], 
  'ré Mineur naturel' : ['ré', 'mi', 'fa', 'sol', 'la', "la#", "do", ""], 
  'ré# Mineur naturel' : ['ré#', 'fa', 'fa#', 'sol#', 'la#', "do", "do#", ""], 
  'mi Mineur naturel' : ['mi', 'fa#', 'sol', 'la', 'si', "do", "ré", ""], 
  'fa Mineur naturel' : ['fa', 'sol', 'sol#', 'la#', 'do', "do#", "ré#", ""], 
  'fa# Mineur naturel' : ['fa#', 'sol#', 'la', 'si', 'do#', "ré", "mi", ""], 
  'sol Mineur naturel' : ['sol', 'la', 'la#', 'do', 'ré', "ré#", "fa", ""], 
  'sol# Mineur naturel' : ['sol#', 'la#', 'si', 'do#', 'ré#', "mi", "fa#", ""], 
  'la Mineur naturel' : ['la', 'si', 'do', 'ré', 'mi', "fa", "sol", ""], 
  'la# Mineur naturel' : ['la#', 'do', 'do#', 'ré#', 'fa', "fa#", "sol#", ""], 
  'si/do♭ Mineur naturel' : ['si', 'do#', 'ré', 'mi', 'fa#', "sol", "la", ""], 

  'do Pentatonique majeure' : ['do', 'ré', 'mi', 'sol', 'la', "", ""],
  'do# Pentatonique majeure' : ['do#', 'ré#', 'fa', 'sol#', 'la#', "", ""],
  'ré Pentatonique majeure' : ['ré', 'mi', 'fa#', 'la', 'si', "", ""],
  'ré# Pentatonique majeure' : ['ré#', 'fa', 'sol', 'la#', 'do', "", ""],
  'mi Pentatonique majeure' : ['mi', 'fa#', 'sol#', 'si', 'do#', "", ""],
  'fa Pentatonique majeure' : ['fa', 'sol', 'la', 'do', 'ré', "", ""],
  'fa# Pentatonique majeure' : ['fa#', 'sol#', 'la#', 'do#', 'ré#', "", ""],
  'sol Pentatonique majeure' : ['sol', 'la', 'si', 'ré', 'mi', "", ""],
  'sol# Pentatonique majeure' : ['sol#', 'la#', 'do', 'ré#', 'fa', "", ""],
  'la Pentatonique majeure' : ['la', 'si', 'do#', 'mi', 'fa#', "", ""],
  'la# Pentatonique majeure' : ['la#', 'do', 'ré', 'fa', 'sol', "", ""],
  'si Pentatonique majeure' : ['si', 'do#', 'ré#', 'fa#', 'sol#', "", ""],

  'Do Pentatonique Mineure' : ["do", "ré#", "fa", "sol", "la#","",""],
  'Do# Pentatonique Mineure' : ["do#", "mi", "fa#", "sol#", "si","",""],
  'Ré Pentatonique Mineure' : ["ré", "fa", "sol", "la", "do","",""],
  'Ré# Pentatonique Mineure' : ["ré#", "fa#", "sol#", "la#", "do#","",""],
  'Mi Pentatonique Mineure' : ["mi", "sol", "la", "si", "ré","","",""],
  'Fa Pentatonique Mineure' : ["fa", "sol#", "la#", "do", "ré#","",""],
  'Fa# Pentatonique Mineure' : ["fa#", "la", "si", "do#", "mi","",""],
  'Sol Pentatonique Mineure' : ["sol", "la#", "do", "ré", "fa","",""],
  'Sol# Pentatonique Mineure' : ["sol#", "si", "do#", "mi", "fa#","",""],
  'La Pentatonique Mineure' : ["la", "do", "ré", "mi", "sol","",""],
  'La# Pentatonique Mineure' : ["la#", "do#", "ré#", "fa", "sol#","",""],
  'Si Pentatonique Mineure' : ["si", "ré", "mi", "fa#", "la","",""],

  'Do Blues Mineur' : ["do", "ré#", "fa", "fa#", "sol", "la#",""],
  'Do# Blues Mineur' : ["do#", "mi", "fa#", "sol", "sol#", "si",""],
  'Ré Blues Mineur' : ["ré", "fa", "sol", "sol#", "la", "do",""],
  'Ré# Blues Mineur' : ["ré#", "fa#", "sol#", "la", "la#", "do#",""],
  'Mi Blues Mineur' : ["mi", "sol", "la", "la#", "si", "ré",""],
  'Fa Blues Mineur' : ["fa", "sol#", "la#", "si", "do", "ré#",""],
  'Fa# Blues Mineur' : ["fa#", "la", "si", "do", "do#", "mi",""],
  'Sol Blues Mineur' : ["sol", "la#", "do", "do#", "ré", "fa",""],
  'Sol# Blues Mineur' : ["sol#", "si", "do#", "ré", "ré#", "fa#",""],
  'La Blues Mineur' : ["la", "do", "ré", "ré#", "mi", "sol",""],
  'La# Blues Mineur' : ["la#", "do#", "ré#", "mi", "fa", "sol#",""],
  'Si Blues Mineur' : ["do", "ré#", "fa", "fa#", "sol", "la#",""],

  'Do Blues Majeur' : ["do", "ré", "ré#", "mi", "sol", "la",""],
  'Do# Blues Majeur' : ["do#", "ré#", "mi", "fa", "sol#", "la#",""],
  'Ré Blues Majeur' : ["ré", "mi", "fa", "fa#", "la", "si",""],
  'Ré# Blues Majeur' : ["ré#", "fa", "fa#", "sol", "la#", "do",""],
  'Mi Blues Majeur' : ["mi", "fa#", "sol", "sol#", "si", "do#",""],
  'Fa Blues Majeur' : ["fa", "sol", "sol#", "la", "do", "ré",""],
  'Fa# Blues Majeur' : ["fa#", "sol#", "la", "la#", "do#", "ré#",""],
  'Sol Blues Majeur' : ["sol", "la", "la#", "si", "ré", "mi",""],
  'Sol# Blues Majeur' : ["sol#", "la#", "si", "do", "ré#", "fa",""],
  'La Blues Majeur' : ["la", "si", "do", "do#", "mi", "fa#",""],
  'La# Blues Majeur' : ["la#", "do", "do#", "ré", "fa", "sol",""],
  'Si Blues Majeur' : ["si", "do#", "ré", "ré#", "fa#", "sol#",""],

'Do Ionique (parent: Do majeur)' : ["do", "ré", "mi", "fa", "sol", "la", "si",""],
  'Do# Ionique (parent: Do# majeur)' : ["do#", "ré#", "fa", "fa#", "sol#", "la#", "do",""],
  'Ré Ionique (parent: Ré majeur)' : ["ré", "mi", "fa#", "sol", "la", "si", "do#",""],
  'Ré# Ionique (parent: Ré# majeur)' : ["ré#", "fa", "sol", "sol#", "la#", "do", "ré",""],
  'Mi Ionique (parent: Mi majeur)' : ["mi", "fa#", "sol#", "la", "si", "do#", "ré#",""],
  'Fa Ionique (parent: Fa majeur)' : ["fa", "sol", "la", "la#", "do", "ré", "mi",""],
  'Fa# Ionique (parent: Fa# majeur)' : ["fa#", "sol#", "la#", "si", "do#", "ré#", "fa",""],
  'Sol Ionique (parent: Sol majeur)' : ["sol", "la", "si", "do", "ré", "mi", "fa#",""],
  'Sol# Ionique (parent: Sol# majeur)' : ["sol#", "la#", "do", "do#", "ré#", "fa", "sol",""],
  'La Ionique (parent: La majeur)' : ["la", "si", "do#", "ré", "mi", "fa#", "sol#",""],
  'La# Ionique (parent: La# majeur)' : ["la#", "do", "ré", "ré#", "fa", "sol", "sol#",""],
  'Si Ionique (parent: Si majeur)' : ["si", "do#", "ré#", "mi", "fa#", "sol#", "la#",""],

  // Dorian - parent is a whole step below
  'Do Dorien (parent: La# majeur)' : ["do", "ré", "ré#", "fa", "sol", "la", "la#",""],
  'Do# Dorien (parent: Si majeur)' : ["do#", "ré#", "mi", "fa#", "sol#", "la#", "si",""],
  'Ré Dorien (parent: Do majeur)' : ["ré", "mi", "fa", "sol", "la", "si", "do",""],
  'Ré# Dorien (parent: Do# majeur)' : ["ré#", "fa", "fa#", "sol#", "la#", "do", "do#",""],
  'Mi Dorien (parent: Ré majeur)' : ["mi", "fa#", "sol", "la", "si", "do#", "ré",""],
  'Fa Dorien (parent: Ré# majeur)' : ["fa", "sol", "sol#", "la#", "do", "ré", "ré#",""],
  'Fa# Dorien (parent: Mi majeur)' : ["fa#", "sol#", "la", "si", "do#", "ré#", "mi",""],
  'Sol Dorien (parent: Fa majeur)' : ["sol", "la", "la#", "do", "ré", "mi", "fa",""],
  'Sol# Dorien (parent: Fa# majeur)' : ["sol#", "la#", "si", "do#", "ré#", "fa", "fa#",""],
  'La Dorien (parent: Sol majeur)' : ["la", "si", "do", "ré", "mi", "fa#", "sol",""],
  'La# Dorien (parent: Sol# majeur)' : ["la#", "do", "do#", "ré#", "fa", "sol", "sol#",""],
  'Si Dorien (parent: La majeur)' : ["si", "do#", "ré", "mi", "fa#", "sol#", "la",""],

  // Phrygian - parent is a major third below
  'Do Phrygien (parent: Sol# majeur)' : ["do", "do#", "ré#", "fa", "sol", "sol#", "la#",""],
  'Do# Phrygien (parent: La majeur)' : ["do#", "ré", "mi", "fa#", "sol#", "la", "si",""],
  'Ré Phrygien (parent: La# majeur)' : ["ré", "ré#", "fa", "sol", "la", "la#", "do",""],
  'Ré# Phrygien (parent: Si majeur)' : ["ré#", "mi", "fa#", "sol#", "la#", "si", "do#",""],
  'Mi Phrygien (parent: Do majeur)' : ["mi", "fa", "sol", "la", "si", "do", "ré",""],
  'Fa Phrygien (parent: Do# majeur)' : ["fa", "fa#", "sol#", "la#", "do", "do#", "ré#",""],
  'Fa# Phrygien (parent: Ré majeur)' : ["fa#", "sol", "la", "si", "do#", "ré", "mi",""],
  'Sol Phrygien (parent: Ré# majeur)' : ["sol", "sol#", "la#", "do", "ré", "ré#", "fa",""],
  'Sol# Phrygien (parent: Mi majeur)' : ["sol#", "la", "si", "do#", "ré#", "mi", "fa#",""],
  'La Phrygien (parent: Fa majeur)' : ["la", "la#", "do", "ré", "mi", "fa", "sol",""],
  'La# Phrygien (parent: Fa# majeur)' : ["la#", "si", "do#", "ré#", "fa", "fa#", "sol#",""],
  'Si Phrygien (parent: Sol majeur)' : ["si", "do", "ré", "mi", "fa#", "sol", "la",""],

  // Lydian - parent is a perfect fourth below
  'Do Lydienne (parent: Sol majeur)' : ["do", "ré", "mi", "fa#", "sol", "la", "si",""],
  'Do# Lydienne (parent: Sol# majeur)' : ["do#", "ré#", "fa", "sol", "sol#", "la#", "do",""],
  'Ré Lydienne (parent: La majeur)' : ["ré", "mi", "fa#", "sol#", "la", "si", "do#",""],
  'Ré# Lydienne (parent: La# majeur)' : ["ré#", "fa", "sol", "la", "la#", "do", "ré",""],
  'Mi Lydienne (parent: Si majeur)' : ["mi", "fa#", "sol#", "la#", "si", "do#", "ré#",""],
  'Fa Lydienne (parent: Do majeur)' : ["fa", "sol", "la", "si", "do", "ré", "mi",""],
  'Fa# Lydienne (parent: Do# majeur)' : ["fa#", "sol#", "la#", "do", "do#", "ré#", "fa",""],
  'Sol Lydienne (parent: Ré majeur)' : ["sol", "la", "si", "do#", "ré", "mi", "fa#",""],
  'Sol# Lydienne (parent: Ré# majeur)' : ["sol#", "la#", "do", "ré", "ré#", "fa", "sol",""],
  'La Lydienne (parent: Mi majeur)' : ["la", "si", "do#", "ré#", "mi", "fa#", "sol#",""],
  'La# Lydienne (parent: Fa majeur)' : ["la#", "do", "ré", "mi", "fa", "sol", "la",""],
  'Si Lydienne (parent: Fa# majeur)' : ["si", "do#", "ré#", "fa", "fa#", "sol#", "la#",""],

  // Mixolydian - parent is a perfect fifth below
  'Do Mixolydienne (parent: Fa majeur)' : ["do", "ré", "mi", "fa", "sol", "la", "la#",""],
  'Do# Mixolydienne (parent: Fa# majeur)' : ["do#", "ré#", "fa", "fa#", "sol#", "la#", "si",""],
  'Ré Mixolydienne (parent: Sol majeur)' : ["ré", "mi", "fa#", "sol", "la", "si", "do",""],
  'Ré# Mixolydienne (parent: Sol# majeur)' : ["ré#", "fa", "sol", "sol#", "la#", "do", "do#",""],
  'Mi Mixolydienne (parent: La majeur)' : ["mi", "fa#", "sol#", "la", "si", "do#", "ré",""],
  'Fa Mixolydienne (parent: La# majeur)' : ["fa", "sol", "la", "la#", "do", "ré", "ré#",""],
  'Fa# Mixolydienne (parent: Si majeur)' : ["fa#", "sol#", "la#", "si", "do#", "ré#", "mi",""],
  'Sol Mixolydienne (parent: Do majeur)' : ["sol", "la", "si", "do", "ré", "mi", "fa",""],
  'Sol# Mixolydienne (parent: Do# majeur)' : ["sol#", "la#", "do", "do#", "ré#", "fa", "fa#",""],
  'La Mixolydienne (parent: Ré majeur)' : ["la", "si", "do#", "ré", "mi", "fa#", "sol",""],
  'La# Mixolydienne (parent: Ré# majeur)' : ["la#", "do", "ré", "ré#", "fa", "sol", "sol#",""],
  'Si Mixolydienne (parent: Mi majeur)' : ["si", "do#", "ré#", "mi", "fa#", "sol#", "la",""],

  // Locrian - parent is a minor seventh below
  'Do Locrienne (parent: Ré# majeur)' : ["do", "do#", "ré#", "fa", "fa#", "sol#", "la#",""],
  'Do# Locrienne (parent: Mi majeur)' : ["do#", "ré", "mi", "fa#", "sol", "la", "si",""],
  'Ré Locrienne (parent: Fa majeur)' : ["ré", "ré#", "fa", "sol", "sol#", "la#", "do",""],
  'Ré# Locrienne (parent: Fa# majeur)' : ["ré#", "mi", "fa#", "sol#", "la", "si", "do#",""],
  'Mi Locrienne (parent: Sol majeur)' : ["mi", "fa", "sol", "la", "la#", "do", "ré",""],
  'Fa Locrienne (parent: Sol# majeur)' : ["fa", "fa#", "sol#", "la#", "do", "do#", "ré#",""],
  'Fa# Locrienne (parent: La majeur)' : ["fa#", "sol", "la", "si", "do", "ré", "mi",""],
  'Sol Locrienne (parent: La# majeur)' : ["sol", "sol#", "la#", "do", "so#", "ré#", "fa"],
  'Sol# Locrienne (parent: Si majeur)' : ["sol#", "la", "si", "do#", "ré", "mi", "fa#",""],
  'La Locrienne (parent: Do majeur)' : ["la", "la#", "do", "ré", "ré#", "fa", "sol",""],
  'La# Locrienne (parent: Do# majeur)' : ["la#", "si", "do#", "ré#", "mi", "fa#", "sol#",""],
  'Si Locrienne (parent: Ré majeur)' : ["si", "do", "ré", "mi", "fa", "sol", "la",""],

  ' Do unitonique' :  ["do", "ré", "mi", "fa#", "sol#", "la#", "",],
  ' Do# unitonique' : ["do#", "ré#", "fa", "sol", "la", "si", "",],
  ' Ré unitonique' :  ["ré", "mi", "fa#", "sol#", "la#", "do", "",],
  ' Ré# unitonique' : ["ré#", "fa", "sol", "la", "si", "do#", "",""],
  ' Mi unitonique' :  ["mi", "fa#", "sol#", "la#", "do", "ré", "",""],
  ' Fa unitonique' :  ["fa", "sol", "la", "si", "do#", "ré#", "",""],
  ' Fa# unitonique' : ["fa#", "sol#", "la#", "do", "ré", "mi", "",""],
  ' Sol unitonique' : ["sol", "la", "si", "do#", "ré#", "fa", ""],
  ' Sol# unitonique' :["sol#", "la#", "do", "ré", "mi", "fa#", "",""],
  ' La unitonique' :  ["la", "si", "do#", "ré#", "fa", "sol", "",""],
  ' La# unitonique' : ["la#", "do", "ré", "mi", "fa#", "sol#", "",""],
  ' Si unitonique' :  ["si", "do#", "ré#", "fa", "sol", "la", "",""],
};

let valuesToFind = [];

function allStuff() {

let note0 = document.getElementById("note0");
let note1 = document.getElementById("note1");
let note2 = document.getElementById("note2");
let note3 = document.getElementById("note3");
let note4 = document.getElementById("note4");
let note5 = document.getElementById("note5");
let note6 = document.getElementById("note6");




////////////////////////////////////////////////////////////////////////////////////////////////
function checkBoxes() {
  
let value0 = note0.value
let value1 = note1.value
let value2 = note2.value
let value3 = note3.value
let value4 = note4.value
let value5 = note5.value
let value6 = note6.value

  for (let x = 1 ; x < 73 ; x++) {

    let eValue = document.querySelector("#n"+ x );

    if (eValue.value == valuesToFind[0] || eValue.value == valuesToFind[1] || eValue.value == valuesToFind[2] ||
      eValue.value == valuesToFind[3] || eValue.value == valuesToFind[4] || eValue.value == valuesToFind[5] ||
      eValue.value == valuesToFind[6]) {

      eValue.checked = true;
    }

    if (eValue.value !== valuesToFind[0] && eValue.value !== valuesToFind[1] && eValue.value !== valuesToFind[2] &&
      eValue.value !== valuesToFind[3] && eValue.value !== valuesToFind[4] & eValue.value !== valuesToFind[5] &&
      eValue.value !== valuesToFind[6]) {

      eValue.checked = false;
    }

    
  }

  for (let i = 1 ; i < 73 ; i++) {

    let eValue = document.querySelector("#n"+ i )

      
      if (eValue.value == "do")
      eValue.style = "accent-color: red"
  
      if (eValue.value == "do#")
      eValue.style = "accent-color: coral"
  
      if (eValue.value == "ré")
      eValue.style = "accent-color: orange"
  
      if (eValue.value == "ré#")
      eValue.style = "accent-color: gold"
  
      if (eValue.value == "mi")
      eValue.style = "accent-color: yellow"
  
      if (eValue.value == "fa")
      eValue.style = "accent-color: greenyellow"
  
      if (eValue.value == "fa#")
      eValue.style = "accent-color: darkseagreen"
  
      if (eValue.value == "sol")
      eValue.style = "accent-color: darkturquoise"
  
      if (eValue.value == "sol#")
      eValue.style = "accent-color: deepskyblue"
  
      if (eValue.value == "la")
      eValue.style = "accent-color: blueviolet"
  
      if (eValue.value == "la#")
      eValue.style = "accent-color: mediumorchid"
  
      if (eValue.value == "si")
      eValue.style = "accent-color: mediumvioletred"
      
    //////////////////////////////Colors of box 1///////////////////////////////////////
  ////////////:: DO ::///////////
      if (value0 == "do")
      note0.style = "background-color: red"
      
      if (value1 == "do")
      note1.style = "background-color: red"
  
      if (value2 == "do")
      note2.style = "background-color: red"
  
      if (value3 == "do")
      note3.style = "background-color: red"
  
      if (value4 == "do")
      note4.style = "background-color: red"
  
      if (value5 == "do")
      note5.style = "background-color: red"
  
      if (value6 == "do")
      note6.style = "background-color: red"
  
  ////////////:: DO# ::///////////
  
      if (value0 == "do#")
      note0.style = "background-color: coral"
  
      if (value1 == "do#")
      note1.style = "background-color: coral"
  
      if (value2 == "do#")
      note2.style = "background-color: coral"
  
      if (value3 == "do#")
      note3.style = "background-color: coral"
  
      if (value4 == "do#")
      note4.style = "background-color: coral"
  
      if (value5 == "do#")
      note5.style = "background-color: coral"
  
      if (value6 == "do#")
  
      note6.style = "background-color: coral"
  
  ////////////:: RE ::///////////
  
      if (value0 == "ré")
  
      note0.style = "background-color: orange"
  
      if (value1 == "ré")
  
      note1.style = "background-color: orange"
  
      if (value2 == "ré")
  
      note2.style = "background-color: orange"
  
      if (value3 == "ré")
  
      note3.style = "background-color: orange"
  
      if (value4 == "ré")
  
      note4.style = "background-color: orange"
  
      if (value5 == "ré")
  
      note5.style = "background-color: orange"
  
      if (value6 == "ré")
  
      note6.style = "background-color: orange"
      
  ////////////:: RE# ::///////////
  
      if (value0 == "ré#")
  
      note0.style = "background-color: gold"
  
      if (value1 == "ré#")
  
      note1.style = "background-color: gold"
  
      if (value2 == "ré#")
  
      note2.style = "background-color: gold"
  
      if (value3 == "ré#")
  
      note3.style = "background-color: gold"
  
      if (value4 == "ré#")
  
      note4.style = "background-color: gold"
  
      if (value5 == "ré#")
  
      note5.style = "background-color: gold"
  
      if (value6 == "ré#")
  
      note6.style = "background-color: gold"
  
  ////////////:: MI ::///////////
  
      if (value0 == "mi")
  
      note0.style = "background-color: yellow"
  
      if (value1 == "mi")
  
      note1.style = "background-color: yellow"
  
      if (value2 == "mi")
  
      note2.style = "background-color: yellow"
  
      if (value3 == "mi")
  
      note3.style = "background-color: yellow"
  
      if (value4 == "mi")
  
      note4.style = "background-color: yellow"
  
      if (value5 == "mi")
  
      note5.style = "background-color: yellow"
  
      if (value6 == "mi")
  
      note6.style = "background-color: yellow"
  
  ////////////:: FA ::///////////
  
      if (value0 == "fa")
  
      note0.style = "background-color: greenyellow"
  
      if (value1 == "fa")
  
      note1.style = "background-color: greenyellow"
  
      if (value2 == "fa")
  
      note2.style = "background-color: greenyellow"
  
      if (value3 == "fa")
  
      note3.style = "background-color: greenyellow"
  
      if (value4 == "fa")
  
      note4.style = "background-color: greenyellow"
  
      if (value5 == "fa")
  
      note5.style = "background-color: greenyellow"
  
      if (value6 == "fa")
  
      note6.style = "background-color: greenyellow"
  
  ////////////:: FA# ::///////////
  
      if (value0 == "fa#")
  
      note0.style = "background-color: darkseagreen"
  
      if (value1 == "fa#")
  
      note1.style = "background-color: darkseagreen"
  
      if (value2 == "fa#")
  
      note2.style = "background-color: darkseagreen"
  
      if (value3 == "fa#")
  
      note3.style = "background-color: darkseagreen"
  
      if (value4 == "fa#")
  
      note4.style = "background-color: darkseagreen"
  
      if (value5 == "fa#")
  
      note5.style = "background-color: darkseagreen"
  
      if (value6 == "fa#")
  
      note6.style = "background-color: darkseagreen"
  
  ////////////:: SOL ::///////////
  
      if (value0 == "sol")
  
      note0.style = "background-color: darkturquoise"
  
      if (value1 == "sol")
  
      note1.style = "background-color: darkturquoise"
  
      if (value2 == "sol")
  
      note2.style = "background-color: darkturquoise"
  
      if (value3 == "sol")
  
      note3.style = "background-color: darkturquoise"
  
      if (value4 == "sol")
  
      note4.style = "background-color: darkturquoise"
  
      if (value5 == "sol")
  
      note5.style = "background-color: darkturquoise"
  
      if (value6 == "sol")
  
      note6.style = "background-color: darkturquoise"
  
  ////////////:: SOL# ::///////////
  
      if (value0 == "sol#")
  
      note0.style = "background-color: deepskyblue"
  
      if (value1 == "sol#")
  
      note1.style = "background-color: deepskyblue"
  
      if (value2 == "sol#")
  
      note2.style = "background-color: deepskyblue"
  
      if (value3 == "sol#")
  
      note3.style = "background-color: deepskyblue"
  
      if (value4 == "sol#")
  
      note4.style = "background-color: deepskyblue"
  
      if (value5 == "sol#")
  
      note5.style = "background-color: deepskyblue"
  
      if (value6 == "sol#")
  
      note6.style = "background-color: deepskyblue"
  
  ////////////:: LA ::///////////
  
      if (value0 == "la")
  
      note0.style = "background-color: blueviolet"
  
      if (value1 == "la")
  
      note1.style = "background-color: blueviolet"
  
      if (value2 == "la")
  
      note2.style = "background-color: blueviolet"
  
      if (value3 == "la")
  
      note3.style = "background-color: blueviolet"
  
      if (value4 == "la")
  
      note4.style = "background-color: blueviolet"
  
      if (value5 == "la")
  
      note5.style = "background-color: blueviolet"
  
      if (value6 == "la")
  
      note6.style = "background-color: blueviolet"
  
  ////////////:: LA# ::///////////
  
      if (value0 == "la#")
  
      note0.style = "background-color: mediumorchid"
  
      if (value1 == "la#")
  
      note1.style = "background-color:  mediumorchid"
  
      if (value2 == "la#")
  
      note2.style = "background-color:  mediumorchid"
  
      if (value3 == "la#")
  
      note3.style = "background-color: mediumorchid"
  
      if (value4 == "la#")
  
      note4.style = "background-color:  mediumorchid"
  
      if (value5 == "la#")
  
      note5.style = "background-color:  mediumorchid"
  
      if (value6 == "la#")
  
      note6.style = "background-color:  mediumorchid"
  
  ////////////:: SI ::///////////
  
      if (value0 == "si")
  
      note0.style = "background-color: mediumvioletred"
  
      if (value1 == "si")
  
      note1.style = "background-color: mediumvioletred"
      if (value2 == "si")
  
      note2.style = "background-color: mediumvioletred"
  
      if (value3 == "si")
  
      note3.style = "background-color: mediumvioletred"
      if (value4 == "si")
  
      note4.style = "background-color: mediumvioletred"
  
      if (value5 == "si")
  
      note5.style = "background-color: mediumvioletred"
      if (value6 == "si")
  
      note6.style = "background-color: mediumvioletred"
      
  
    }
  
  
  
  }
////////////////////////////////////////////////////////////////////////////////////////////////
  

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////




function processTicks() {


  valuesToFind = [note0.value, note1.value, note2.value, note3.value, note4.value, note5.value, note6.value];



  for (let i = 1 ; i < 73 ; i++) {

    let eValue = document.querySelector("#n"+ i )

    if (eValue.checked !== false && valuesToFind.includes(eValue.value) == false )

    {
      if ( valuesToFind[0] == "" && valuesToFind[1] == "" &&  valuesToFind[2] == "" && 
    valuesToFind[3] == "" &&  valuesToFind[4] == "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[0] = eValue.value;}
    
    
     else if ( valuesToFind[0] !== "" && valuesToFind[1] == "" &&  valuesToFind[2] == "" && 
    valuesToFind[3] == "" &&  valuesToFind[4] == "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[1] = eValue.value;}
    
      else if ( valuesToFind[0] !== "" && valuesToFind[1] !== "" &&  valuesToFind[2] == "" && 
    valuesToFind[3] == "" &&  valuesToFind[4] == "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[2] = eValue.value;}
    
      else if ( valuesToFind[0] !== "" && valuesToFind[1] !== "" &&  valuesToFind[2] !== "" && 
    valuesToFind[3] == "" &&  valuesToFind[4] == "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[3] = eValue.value;}
    
      else if ( valuesToFind[0] !== "" && valuesToFind[1] !== "" &&  valuesToFind[2] !== "" && 
    valuesToFind[3] !== "" &&  valuesToFind[4] == "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[4] = eValue.value;}
    
      else if ( valuesToFind[0] !== "" && valuesToFind[1] !== "" &&  valuesToFind[2] !== "" && 
    valuesToFind[3] !== "" &&  valuesToFind[4] !== "" &&  valuesToFind[5] == "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[5] = eValue.value;}
  
      else if ( valuesToFind[0] !== "" && valuesToFind[1] !== "" &&  valuesToFind[2] !== "" && 
    valuesToFind[3] !== "" &&  valuesToFind[4] !== "" &&  valuesToFind[5] !== "" && 
    valuesToFind[6] == "" ) {
      valuesToFind[6] = eValue.value;}
    }

  }

  for (let x = 1 ; x < 73 ; x++) {
    let eValue = document.querySelector("#n"+ x );

      if (eValue.value !== "" && eValue.checked == true)
      {

      let valueStored = eValue.value

       for (let y = 1 ; y < 73 ; y++) {
          let dValue = document.querySelector("#n"+ y );
            if (dValue.value == valueStored) {
              dValue.checked=true;
             }
         }
      }

  }
  


  if (valuesToFind.length > 7 ) {
    

    valuesToFind.splice(7,20);

  } 
  
  

    onChange();

}

function onChange() {

  note1.value = valuesToFind[1];
  note2.value = valuesToFind[2];
  note3.value = valuesToFind[3];
  note4.value = valuesToFind[4];
  note5.value = valuesToFind[5];
  note6.value = valuesToFind[6];
  note0.value = valuesToFind[0]
}



function findKeysContainingValues(obj, values) {

  
  let  value0 = valuesToFind[0];
  
      const keysContainingValues = [];
        
  
      for (const key in obj) {
  
        if (obj.hasOwnProperty(key)) {
  
          const keyValues = obj[key];
          const containsAllValues = values.every(value => keyValues.includes(value));
  
          /* 
          const containsAllValues declares variable.
          values.every(...) every method, checks if all elements of an array meets a condition,
            it takes a /!\ function /!\ as an argument, 
            and applies the function to each element of the array.
          value => keyValues.includes(value) is /!\ the function /!\ that serves as a condition for 
            the .every method,
            It checks whether 'value' is included in 'keyValues' using the .includes method
              the .includes method returns true if the array contains the specified value, false otherwise.
          
          The line of code checks if 'keyValues' array contains every element in the 'values' array.
  
          ( 'values' is equal to valuesToFind )
  
          */
  
          const isFirstValueMatch = keyValues.length > 0 && keyValues[0] == value0;
  
          /*
          const isFirstValueMatch declares variable.
          keyValues.length > 0  checks whether the length of keyValues is greatet than 0
          && operator
          keyValues[0] == value1  checks if the first element of keyValues is equal to value1
          value1 is the "note0".
          returns true if conditions met.
  
          */
  
  
          if (containsAllValues && isFirstValueMatch) {
  
            // if both previous conditions are true
  
            keysContainingValues.push(key);
  
            // add the name of the key containing the notes to the output value. 'keysContainingValues'
  
          }
        }
      }
    
      return keysContainingValues;
      
    } 

function trouverNotes() {
  
  let keysToDisplay = findKeysContainingValues(listeA, valuesToFind);
  console.log(keysToDisplay);
  let keyDisplay = document.querySelector("#keyDisplay")
  for (let i = 0 ; i < 13; i++) {

    let idTarget = "key"+i;
    let target = document.querySelector("#"+idTarget) 
    target.textContent = keysToDisplay[i];
    target.setAttribute("class", "key");
    target.setAttribute("value", keysToDisplay[i]);

    target.addEventListener("click", function() {

      if (listeA.hasOwnProperty(target.value)) {

      note0.value = listeA[target.value][0];
      note1.value = listeA[target.value][1];
      note2.value = listeA[target.value][2];
      note3.value = listeA[target.value][3];
      note4.value = listeA[target.value][4];
      note5.value = listeA[target.value][5];
      note6.value = listeA[target.value][6];

      console.log(listeA[target.value])
      let gammeTrouvee = document.querySelector(".titre")
      keyDisplay.remove(target);
      gammeTrouvee.textContent = target.value;

      allStuff();
      checkBoxes();
      onChange();


      }


    })


  }

}


const selectOption = document.querySelector(".select");

selectOption.addEventListener("change", function(){
})

const checkCase = document.querySelector(".checkCase");

checkCase.addEventListener("click", function() {
  onChange();
  allStuff();
  checkBoxes();
})

const submitButton = document.querySelector("#submitButton");

submitButton.addEventListener("click", function(){
trouverNotes();
});

valuesToFind = [note0.value, note1.value, note3.value, note4.value, note5.value, note6.value]

processTicks();
checkBoxes();
onChange();
trouverNotes();

}

allStuff();


const paper = document.querySelector("#paper");
//select canvas


pen = paper.getContext("2d");
//contexte 2dimensions

const startTime = performance.now();
//capter l'heure

const draw = () => {
//fonction de dessin
  
  paper.width = paper.clientWidth;
  paper.height = paper.clientHeight;
  
  const currentTime = performance.now(),
        elapsedTime = (currentTime - startTime) / 1000,
        velocity = elapsedTime * 3;
  //capter le temps écoulé depuis l'ouverture de la page
  
  
  const start = {
    x: paper.width * 0,
    y: paper.height * 0.5
  }
    const end = { 
  x: paper.width,
  y: paper.height*0.5
  }

    pen.strokeStyle ="transparent";
  
 
  pen.beginPath();
  pen.moveTo(start.x, start.y);
  pen.lineTo(end.x, end.y);
  pen.stroke();
  // ligne centrale
  
    pen.strokeStyle ="black";
    pen.lineWidth = 45;
  
  const center = {
    x:paper.width * 0.5,
    y: paper.height * 0.5
  }
  // position du centre de la ligne centrale
 
  
  const length = end.x - start.x;
  
  
     pen.beginPath();
  pen.arc(center.x, center.y, length * 0.05, 0, Math.PI*2);
  pen.stroke();
  
   pen.beginPath();
  pen.arc(center.x, center.y, length * 0.075, 0, Math.PI*2);
  pen.stroke();
  
  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.100, 0, Math.PI*2);
  pen.stroke();
  
    pen.beginPath();
  pen.arc(center.x, center.y, length * 0.125, 0, Math.PI*2);
  pen.stroke();
  
      pen.beginPath();
  pen.arc(center.x, center.y, length * 0.150, 0, Math.PI*2);
  pen.stroke();
  

  pen.beginPath();
  pen.arc(center.x, center.y, length * 0.175, 0, Math.PI*2);
  pen.stroke();

  const maxAngle = 2*Math.PI;
  
  const arcRadius0 = length * 0.175,
        distance0 = Math.PI + (velocity /18),
        moddistance0 = distance0 % maxAngle;
  
  const x0 = center.x +arcRadius0 * Math.cos(moddistance0),
        y0 = center.y +arcRadius0 * Math.sin(distance0);
  

  const arcRadius1 = length * 0.150,
        distance1 = Math.PI + (velocity /12),
        moddistance1 = distance1 % maxAngle;
  
  const x1 = center.x +arcRadius1 * Math.cos(moddistance1),
        y1 = center.y +arcRadius1 * Math.sin(distance1);
  
   const arcRadius2 = length * 0.125,
         distance2 = Math.PI + (velocity / 9 ),
         moddistance2 = distance2 % maxAngle;
  
  const x2 = center.x +arcRadius2 * Math.cos(moddistance2),
        y2 = center.y +arcRadius2 * Math.sin(moddistance2);
  
  const arcRadius3 = length * 0.100,
           distance3 = Math.PI + (velocity / 6),
         moddistance3 = distance3 % maxAngle;
  
  
  const x3 = center.x +arcRadius3 * Math.cos(moddistance3),
        y3 = center.y +arcRadius3 * Math.sin(moddistance3);
  
       const arcRadius4 = length * 0.075,
           distance4 = Math.PI + (velocity /4),
         moddistance4 = distance4 % maxAngle;
  
  const x4 = center.x +arcRadius4 * Math.cos(moddistance4),
        y4 = center.y +arcRadius4 * Math.sin(moddistance4);
  
       const arcRadius5 = length * 0.05,
           distance5 = Math.PI + (velocity /3),
         moddistance5 = distance5 % maxAngle;
  
  
  const x5 = center.x +arcRadius5 * Math.cos(moddistance5),
        y5 = center.y +arcRadius5 * Math.sin(moddistance5);
  
        pen.fillStyle = "transparent";

  if ( note0.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note0.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note0.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note0.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note0.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note0.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note0.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note0.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note0.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note0.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note0.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note0.value == "ré#") {
      pen.fillStyle = "gold";}


      pen.beginPath();
      pen.arc(center.x, center.y, length * 0.04, 0, Math.PI*2);
      pen.fill(); 
      
      if ( note6.value == "mi") {
        pen.fillStyle = "yellow";}
    
      if ( note6.value == "fa") {
        pen.fillStyle = "greenyellow";}
    
      if ( note6.value == "fa#") {
        pen.fillStyle = "darkseagreen";}
    
      if ( note6.value == "sol") {
        pen.fillStyle = "darkturquoise";}
    
      if ( note6.value == "sol#") {
        pen.fillStyle = "deepskyblue";}
    
      if ( note6.value == "la") {
        pen.fillStyle = "blueviolet";}
    
      if ( note6.value == "la#") {
        pen.fillStyle = "mediumorchid";}
      
      if ( note6.value == "si") {
        pen.fillStyle = "mediumvioletred";}
    
      if ( note6.value == "do") {
          pen.fillStyle = "red";}
      
      if ( note6.value == "do#") {
          pen.fillStyle = "coral";}
        
      if ( note6.value == "ré") {
          pen.fillStyle = "orange";}
      
      if ( note6.value == "ré#") {
          pen.fillStyle = "gold";}


  if ( note6.value == "") {
    pen.fillStyle = "transparent";}
    
    
          pen.beginPath();
          pen.arc(x0, y0, length * 0.008, 0, Math.PI*2);
          pen.fill(); 
  

  if ( note5.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note5.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note5.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note5.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note5.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note5.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note5.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note5.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note5.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note5.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note5.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note5.value == "ré#") {
      pen.fillStyle = "gold";}

  
      if ( note5.value == "") {
        pen.fillStyle = "transparent";}

      pen.beginPath();
  pen.arc(x1, y1, length * 0.015, 0, Math.PI*2);
  pen.fill();


  if ( note4.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note4.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note4.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note4.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note4.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note4.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note4.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note4.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note4.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note4.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note4.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note4.value == "ré#") {
      pen.fillStyle = "gold";}

  
  if ( note4.value == "") {
        pen.fillStyle = "transparent";}

  pen.beginPath();
  pen.arc(x2, y2, length * 0.01, 0, Math.PI*2);
  pen.fill();


  if ( note3.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note3.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note3.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note3.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note3.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note3.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note3.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note3.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note3.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note3.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note3.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note3.value == "ré#") {
      pen.fillStyle = "gold";}
  
  if ( note3.value == "") {
        pen.fillStyle = "transparent";}


      pen.beginPath();
      pen.arc(x3, y3, length * 0.0075, 0, Math.PI*2);
      pen.fill();

  if ( note2.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note2.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note2.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note2.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note2.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note2.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note2.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note2.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note2.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note2.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note2.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note2.value == "ré#") {
      pen.fillStyle = "gold";}

      if ( note2.value == "") {
        pen.fillStyle = "transparent";}

      pen.beginPath();
      pen.arc(x4, y4, length * 0.015, 0, Math.PI*2);
      pen.fill();
    


  if ( note1.value == "mi") {
    pen.fillStyle = "yellow";}

  if ( note1.value == "fa") {
    pen.fillStyle = "greenyellow";}

  if ( note1.value == "fa#") {
    pen.fillStyle = "darkseagreen";}

  if ( note1.value == "sol") {
    pen.fillStyle = "darkturquoise";}

  if ( note1.value == "sol#") {
    pen.fillStyle = "deepskyblue";}

  if ( note1.value == "la") {
    pen.fillStyle = "blueviolet";}

  if ( note1.value == "la#") {
    pen.fillStyle = "mediumorchid";}
  
  if ( note1.value == "si") {
    pen.fillStyle = "mediumvioletred";}

  if ( note1.value == "do") {
      pen.fillStyle = "red";}
  
  if ( note1.value == "do#") {
      pen.fillStyle = "coral";}
    
  if ( note1.value == "ré") {
      pen.fillStyle = "orange";}
  
  if ( note1.value == "ré#") {
      pen.fillStyle = "gold";}


  if ( note1.value == "") {
    pen.fillStyle = "transparent";}

      pen.beginPath();
      pen.arc(x5, y5, length * 0.0075, 0, Math.PI*2);
      pen.fill();
  
  requestAnimationFrame(draw);
}

draw();

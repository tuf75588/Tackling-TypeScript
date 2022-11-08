enum NoYes  {
  No = 0,
  Yes = 1,
}


function toGerman(value: NoYes) {
  switch(value) {
    case NoYes.No: 
      return 'Nein';
    case NoYes.Yes: 
      return 'Ja'
  }
}


enum Enum {
  One = 'One',
  Two = 'Two',
  Three = 3,
  Four = 4,
}
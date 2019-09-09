export function bagsDeclension(num) {
  if (num === 1) {
    return "worek";
  } else if (num <= 4) {
    return "worki";
  } else {
    return "worków";
  }
}

export function donationDeclension(clothes, clothesToRecycle, toys, books, other) {
  console.log(clothes);
  const donation = [];
  (clothes === true) && donation.push("ubrań w dobrym stanie");
  (clothesToRecycle === true) && donation.push("ubrań do recyklingu");
  (toys === true) && donation.push("zabawek");
  (books === true) && donation.push("książek");
  (other === true) && donation.push("rzeczy");

  return (donation.join(", "));
}

export function beneficientDeclension(str) {
  switch (str) {
    case "dzieci":
      return "dla dzieci";
    case "samotne matki":
      return "dla samotnych matek";
    case "bezdomni":
      return "dla bezdomnych";
    case "niepełnosprawni":
      return "dla niepełnosprawnych";
    case "osoby starsze":
      return "dla osób starszych";
    default:
      return "";
  }
}

export function orgDeclension(str) {
  switch (str) {
    case "Fundacja":
      return "Dla Fundacji";
    case "Organizacja pozarządowa":
      return "Dla Organizacji pozarządowej";
    case "Lokalna zbiórka":
      return "Dla Lokalnej zbiórki";
    default:
      return "";
  }
}

export function cityDeclension(str) {
  switch (str) {
    case "Poznań":
      return "w Poznaniu";
    case "Warszawa":
      return "w Warszawie";
    case "Kraków":
      return "w Krakowie";
    case "Gdańsk":
      return "w Gdańsku";
    default:
      return "";
  }
}

// var expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + expr + '.');
// }

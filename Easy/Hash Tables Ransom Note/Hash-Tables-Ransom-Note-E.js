function checkMagazine(magazine, note) {
  for (let i = 0; i < note.length; i++) {
    let finder = magazine.indexOf(note[i]);
    if (finder != -1) {
      magazine[finder] = "";
      if (i === note.length - 1) {
        console.log("Yes");
      }
    } else {
      console.log("No");
      break;
    }
  }
}

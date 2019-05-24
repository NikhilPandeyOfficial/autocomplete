function algo(str) {
  const arr = str.split(" ");
  let my_stack = [];
  let word_max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (word_max < arr[i].length) {
      word_max = arr[i].length;
    }
  }
  for (let i = 0; i < word_max; i++) {
    let sti = "";
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) {
        sti += "#";
      } else {
        sti += " ";
      }
    }
    my_stack.push(sti);
  }
  for (let i = 0; i < my_stack.length; i++) {
    console.log(my_stack.pop());
  }
}

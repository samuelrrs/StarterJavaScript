var skills = ["Javascript", "ReactJS", "React Native"];

function ocaraSabe(skills) {
  if (skills.includes("Javascript")) {
    console.log("O cara sabe isso ai");
    console.log(skills.indexOf("Javascript"));
  } else {
    console.log("N existe");
  }
}
ocaraSabe(skills);

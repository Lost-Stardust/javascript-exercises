const findTheOldest = function(people) {
  const oldest = people.reduce((current, nextPerson) => {
    let currentYear = new Date().getUTCFullYear();
    if (!current.yearOfDeath) {
      let currentAge = currentYear - current.yearOfBirth;
      let personAge = currentYear - nextPerson.yearOfBirth;
      console.log(currentAge)
      console.log(personAge)
      if (personAge > currentAge) {
        current = nextPerson;
      }
  
    }

    let currentAge = current.yearOfDeath - current.yearOfBirth; 
    let personAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;
    if (personAge > currentAge) {
      current = nextPerson;
    }

    return current
  });
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

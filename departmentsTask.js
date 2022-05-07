let firstDepartment = {
    Bob : 4,
    Tom : 8,
    Ron : 14,
    Jonh : 25,
    Mark : 37
  };
  
  function calculateSalaryForFirstDepartment(experience) {
    let startSalary = 0;
      if (experience >= 4) {
      const COUNT_SALARY_FIRST = (experience -  3) < 9 ? experience - 3 : 9;
      startSalary += 100 * COUNT_SALARY_FIRST;
      };
      if (experience >= 13) {
      const COUNT_SALARY_SECOND = (experience -  12) < 12 ? experience - 12 : 12;
      startSalary += 500 * COUNT_SALARY_SECOND;
      };
      if (experience >= 25) {
      const COUNT_SALARY_THIRD = (experience -  24) < 12 ? experience - 24 : 12;
      startSalary += 250 * COUNT_SALARY_THIRD;
      };
      if (experience >= 37) {
      const COUNT_SALARY_FOURTH = experience - 36;
      startSalary += 2000 * COUNT_SALARY_FOURTH;
      };
    return startSalary;
  };
  
  function calculatePremyForFirstDepartment(employee, salary) {
    const MONTHS = firstDepartment[employee];
    const YEARS = Math.floor(MONTHS / 12);
    const PREMY_FIRST = Math.floor(salary * (0.1 * YEARS));
    console.log(`${employee} from first department has premy: ${PREMY_FIRST}$`);
  };
  
  for (let user in firstDepartment) {
    const EXPERIENSE = firstDepartment[user];
    const CALCULATED_SALARY = calculateSalaryForFirstDepartment(EXPERIENSE);
    console.log(`${user} from first department has salary: ${CALCULATED_SALARY}$`);
    calculatePremyForFirstDepartment(user, CALCULATED_SALARY);
  };
  
  let secondDepartment = {
    Grisha : 10,
    Sanya : 16,
    Bony : 26,
    Semen : 12,
    Kristian : 48
  };
  
  function calculateSalaryForSecondDepartment(experienceNext) {
    let startSalaryNext = 0;
      if (experienceNext > 1) {
      const AMOUNT_OF_SALARY_ONE = experienceNext > 12 ? 12 : experienceNext;
      startSalaryNext += 500 * ((0.02 * AMOUNT_OF_SALARY_ONE) + 1);
      };
      if (experienceNext >= 13) {
      const AMOUNT_OF_SALARY_TWO = (experienceNext -  12) < 12 ? experienceNext - 12 : 12;
      startSalaryNext += 1000 * ((0.05 * AMOUNT_OF_SALARY_TWO) + 1);
      };
      if (experienceNext >= 25) {
      const AMOUNT_OF_SALARY_THREE = (experienceNext -  24) < 12 ? experienceNext - 24 : 12;
      startSalaryNext += 1500 * ((0.15 * AMOUNT_OF_SALARY_THREE) + 1);
      };
      if (experienceNext >= 37) {
      const AMOUNT_OF_SALARY_FOUR = experienceNext - 36;
      startSalaryNext += 1500 * ((0.27 * AMOUNT_OF_SALARY_FOUR) + 1);
      };
    return startSalaryNext;
  };
  
  function calculatePremyForSecondDepartment(experienceNext, wage) {
    const MONTH = secondDepartment[experienceNext];
    const YEAR = Math.floor(MONTH / 12);
    const PREMY_SECOND = Math.floor(wage * (0.1 * YEAR));
    console.log(`${experienceNext} from second department has premy: ${PREMY_SECOND}$`);
  };
  
  for (let employee in secondDepartment) {
    const PRACTICE = secondDepartment[employee];
    const CALCULATE_SALARY = calculateSalaryForSecondDepartment(PRACTICE);
    console.log(`${employee} from second department has salary: ${CALCULATE_SALARY}$`);
    calculatePremyForSecondDepartment(employee, CALCULATE_SALARY);
  };
  
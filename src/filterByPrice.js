export default (courses = [], query = []) => {
  // проверка, являются ли переданные параметры массивом
  if (!Array.isArray(courses) || !Array.isArray(courses)) {
    return false;
  }
  const [min, max] = query;
  // если заданы минимальное и максимальное значение в запросе
  if (min && max) {
    return courses.filter((course) => (course.prices[1] >= min && course.prices[0] <= max)
    || !course.prices[0]);
  } if (min && !max) { // только минимальное
    return courses.filter((course) => course.prices[0] >= min || course.prices[1] >= min);
  } if (!min && max) { // только максимальное
    return courses.filter((course) => (course.prices[1] <= max && course.prices[1])
    || course.prices[0] <= max);
  }

  return courses;
};
/*
  при выполнении задания я исходила из того, что под значением null в цене курсов подразумевается
  любая цена и ошибкой это не является. Например, в этом случае -
  { name: "Courses in France", prices: [null, null] } курсы оплачиваются по желанию.
*/

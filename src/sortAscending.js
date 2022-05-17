export default (courses) => courses.sort((course1, course2) => course1.prices[0] - course2.prices[0]
|| course1.prices[1] - course2.prices[1]);

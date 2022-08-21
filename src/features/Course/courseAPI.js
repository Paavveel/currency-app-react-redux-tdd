export const API = 'https://www.cbr-xml-daily.ru/daily_json.js';

export const fetchCourse = async () => {
  try {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

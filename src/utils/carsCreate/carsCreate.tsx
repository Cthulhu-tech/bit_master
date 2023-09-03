import { faker } from "@faker-js/faker";

export const CarsCreate = () => {
  const cars = {
    code: faker.number.int({ min: 1, max: 99999 }),
    descr: "OK",
    data: {
      crews_info: [
        {
          crew_id: faker.number.int({ min: 1, max: 99999 }),
          car_mark: faker.word.words(),
          car_model: "",
          car_color: faker.color.human(),
          car_number: faker.vehicle.manufacturer(),
          driver_name: faker.person.firstName() + " " + faker.person.lastName(),
          driver_phone: faker.phone.number("+7-###-###-## ##"),
          lat: 0,
          lon: 0,
          distance: faker.number.int({ min: 1, max: 400 }),
        },
      ],
    },
  };
  for (let i = 0; i <= faker.number.int({ min: 3, max: 10 }); i++) {
    cars.data.crews_info.push({
      crew_id: faker.number.int({ min: 1, max: 99999 }),
      car_mark: faker.word.words(),
      car_model: "",
      car_color: faker.color.human(),
      car_number: faker.vehicle.manufacturer(),
      driver_name: faker.person.firstName() + " " + faker.person.lastName(),
      driver_phone: faker.phone.number("+7-###-###-## ##"),
      lat: 0,
      lon: 0,
      distance: faker.number.int({ min: 1, max: 400 }),
    });
  }
  return cars;
};

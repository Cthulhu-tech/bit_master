import { SearchTaxiData } from "../../redux/taxiPlaceMarket/asyncAction/type";
import { faker } from "@faker-js/faker";

export const CarsCreate = (userPosition: SearchTaxiData) => {
  const cars = {
    code: faker.number.int({ min: 1, max: 99999 }),
    descr: "OK",
    data: {
      crews_info: [
        {
          crew_id: faker.number.int({ min: 1, max: 99999 }),
          car_mark: faker.vehicle.manufacturer(),
          car_model: faker.vehicle.model(),
          car_color: faker.color.human(),
          car_number: faker.vehicle.vrm(),
          driver_name: faker.person.firstName() + " " + faker.person.lastName(),
          driver_phone: faker.phone.number("+7-###-###-## ##"),
          lat:
            userPosition.addresses[0].lat +
            faker.number.float({ min: -0.01, max: 0.01 }),
          lon:
            userPosition.addresses[0].lon +
            faker.number.float({ min: -0.01, max: 0.01 }),
          distance: faker.number.int({ min: 1, max: 400 }),
        },
      ],
    },
  };
  for (let i = 0; i <= faker.number.int({ min: 3, max: 10 }); i++) {
    cars.data.crews_info.push({
      crew_id: faker.number.int({ min: 1, max: 99999 }),
      car_mark: faker.vehicle.manufacturer(),
      car_model: faker.vehicle.model(),
      car_color: faker.color.human(),
      car_number: faker.vehicle.vrm(),
      driver_name: faker.person.firstName() + " " + faker.person.lastName(),
      driver_phone: faker.phone.number("+7-###-###-## ##"),
      lat:
        userPosition.addresses[0].lat +
        faker.number.float({ min: -0.01, max: 0.01 }),
      lon:
        userPosition.addresses[0].lon +
        faker.number.float({ min: -0.01, max: 0.01 }),
      distance: faker.number.int({ min: 1, max: 400 }),
    });
  }
  return cars;
};

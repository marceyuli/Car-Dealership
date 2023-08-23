import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      name: 'Toyou',
      model: '2019',
    },
    {
      id: 2,
      name: 'Mazda',
      model: '2018',
    },
    {
      id: 3,
      name: 'BMW',
      model: '2017',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new BadRequestException(`Car with id ${id} not found`);
    }
    return car;
  }
}

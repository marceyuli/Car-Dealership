import { BadRequestException, Injectable } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      name: 'Toyou',
      model: '2019',
    },
    {
      id: uuid(),
      name: 'Mazda',
      model: '2018',
    },
    {
      id: uuid(),
      name: 'BMW',
      model: '2017',
    },
  ];
  findAll() {
    return this.cars;
  }
  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new BadRequestException(`Car with id ${id} not found`);
    }
    return car;
  }
}

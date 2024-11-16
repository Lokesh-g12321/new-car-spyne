import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private storageKey = 'cars';

  getCars() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveCars(cars: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(cars));
  }

  addCar(car: any) {
    const cars = this.getCars();
    cars.push(car);
    this.saveCars(cars);
  }

  updateCar(index: number, updatedCar: any) {
    const cars = this.getCars();
    cars[index] = updatedCar;
    this.saveCars(cars);
  }

  deleteCar(index: number) {
    const cars = this.getCars();
    cars.splice(index, 1);
    this.saveCars(cars);
  }
}

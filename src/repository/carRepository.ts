import { prisma } from "../config/database.js";

async function getCars() {
  const cars = await prisma.cars.findMany();
  return cars;
}

async function getCar(id: number) {
  const car = await prisma.cars.findUnique({
    where: {id},
  });

  return car;
}

async function getCarWithLicensePlate(licensePlate: string) {
  return await prisma.cars.findUnique({
    where: {licensePlate},
  });
}

async function createCar(model: string, licensePlate: string, year: number, color: string) {
  return await prisma.cars.create({
    data: {
      color,
      licensePlate,
      year,
      model
    }
  })
}

async function deleteCar(id: number) {
  await prisma.cars.delete({
    where: {id},
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;
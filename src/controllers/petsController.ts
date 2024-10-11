import { Request, Response } from "express";
import { PetsService } from "../services/petsService";

const service = new PetsService();

export const listPets = async (req: Request, res: Response) => {
  const pets = await service.fetchPets();
  res.status(200).json(pets);
};

export const creatPet =  async(req: Request, res: Response) => {
  const creatPet = await service.creatPet(req.body);
  res.status(201).json(creatPet);
};

export const getPetById = async(req: Request, res: Response) => {
  const petId = parseInt(req.params.petId);
  const pet = await service.getPet(petId);
  res.status
};

export const updatePetById = async (req: Request, res: Response) => {
  const petId = parseInt(req.params.petId)
  await service.updatePet
};

export const deletePetById = async(req: Request, res: Response) => {
};
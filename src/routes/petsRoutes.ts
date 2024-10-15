import { Router } from "express";
import {
  createPet,
  deletePetById,
  getPetById,
  listPets,
  updatePetById,
} from "../controllers/petsController";

export const petsRouter = Router();
petsRouter.get("/pets", listPets);
petsRouter.post("/pets", createPet);
petsRouter.delete("/pets/:petId(\\d+)", deletePetById);
petsRouter.put("/pets/petId(\\d+)", updatePetById);
petsRouter.get("/pets/petId(\\d+)", getPetById);

export default petsRouter;
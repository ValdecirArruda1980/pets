import { Router } from "express";
import {
  creatPet,
  deletePetById,
  getPetById,
  listPets,
  updatePetById,
} from "../controllers/petsController";

export const petsRouter = Router();
.get("/pets", listPets);
.post("/pets", creatPet);
.delete("/pets/:petId(\\d+)", deletePetById);
.put("/pets/petId(\\d+)", updatePetById);
.get("/pets/petId(\\d+)", getPetById);

export default petsRouter;
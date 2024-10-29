
import type { GymsRepository } from "./GymsRepository";
import type { Gym } from "@prisma/client";

export class InMemoryGymsRepository implements GymsRepository{
  public items: Gym[] = []
  async findById(id: string): Promise<Gym|null> {
    
    const gym = this.items.find((gym) => gym.id === id)

    if(!gym){
      return null
    }
    return gym
  }
}

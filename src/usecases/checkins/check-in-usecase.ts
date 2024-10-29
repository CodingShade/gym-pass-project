import type { GymsRepository } from "@/repositories/GymsRepository"
import type { CheckInsRepository } from "@/repositories/check-ins-repository"
import {CheckIn} from "@prisma/client"
import { error } from "node:console"
import { ResourceNotFoundError } from "../errors/resource-not-found-error"

export interface CheckInUseCaseRequest {
  userId: string
  gymId: string
  userLatitude: number
  userLongitude: number
}

export interface CheckInUseCaseResponse {
  checkIn: CheckIn
}

export class CheckInUseCase {
  constructor(
    private checkInsRepository: CheckInsRepository,
    private gymsRepository:GymsRepository
  ) {}
  async execute({userId, gymId}:CheckInUseCaseRequest): Promise<CheckInUseCaseResponse>{
    const gym = await this.gymsRepository.findById(gymId)
    if(!gym){
      throw new ResourceNotFoundError()
    }
    const checkInOnSameDay = await this.checkInsRepository.findByUserIdOnDate(userId, new Date());
  if(checkInOnSameDay){
    throw new Error()
  }

    const checkIn = await this.checkInsRepository.create({
      user_id: userId,
      gym_id: gymId,
    })
    return { checkIn }
  }
}

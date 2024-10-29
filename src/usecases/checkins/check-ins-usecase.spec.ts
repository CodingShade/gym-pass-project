import { InMemoryCheckInsRepository } from "@/repositories/in-memory-check-ins-repository";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { CheckInUseCase } from "./check-in-usecase";
import { after, afterEach } from "node:test";

let checkInsRepository:InMemoryCheckInsRepository
let sut: CheckInUseCase
describe("Check in use case", () => {
  beforeEach(() =>{
    checkInsRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(checkInsRepository)
    vi.useFakeTimers()
  })
  afterEach(() =>{
    vi.useRealTimers()
  })

  it("should be able to check in", async ()=>{
    vi.setSystemTime(new Date(2024,9,24,22,22,0))
    const {checkIn} = await sut.execute({
      userId: "usuario-0001",
      gymId: "abl-0001"
    })
    console.log(checkIn.created_at)
    expect(checkIn.id).toEqual(expect.any(String))

  })

   // Teste 02 -TDD (test driven development)
   // red, green, refactor
  it('It should not be able to check in twice in same day',
  async () => {
    vi.setSystemTime(new Date(2024,9,20,16,0,0))
    const { checkIn } = await sut.execute({
      userId: "0001",
      gymId: "171"
    })

    await expect(() => sut.execute({
      userId: "0001",
      gymId: "171"
    }))
    .rejects.toBeInstanceOf(Error)

  })
  //teste 3
  it('It should be able to check in twice in different days',
  async () => {
    vi.setSystemTime(new Date(2024,9,20,16,0,0))
    await sut.execute({
      userId: "0001",
      gymId: "171"
    })

    vi.setSystemTime(new Date(2024,9,23,16,0,0))
    const {checkIn} = await sut.execute({
      userId: "0001",
      gymId: "171"
    })
    expect(checkIn.id).toEqual(expect.any(String))

  })

})

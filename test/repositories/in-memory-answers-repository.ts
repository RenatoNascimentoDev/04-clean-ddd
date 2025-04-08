import { AnswersRepository } from "@/domaion/forum/aplication/repositories/answers-repository";
import { Answer } from "@/domaion/forum/enterprise/entities/answer";

export class InMemoryAnswersRepository implements AnswersRepository {
  public items: Answer[] = [];

  async create(answer: Answer) {
    this.items.push(answer);
  }
}

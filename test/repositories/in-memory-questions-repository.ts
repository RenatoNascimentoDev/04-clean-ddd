import { QuestionRepository } from "@/domaion/forum/aplication/repositories/questions-repository";
import { Question } from "@/domaion/forum/enterprise/entities/question";

export class InMemoryQuestionsRepository implements QuestionRepository {
  public items: Question[] = [];

  async create(question: Question) {
    this.items.push(question);
  }
}

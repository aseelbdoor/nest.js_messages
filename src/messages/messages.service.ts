import { MessageRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService{
    constructor(public messagesRepo:MessageRepository){}

    async findOne(id:string){
        return  await this.messagesRepo.findOne(id);
    }
    async findAll(){
        return   await this.messagesRepo.findAll();
    }
    async create(content:string){
        return  await this.messagesRepo.create(content);
    }
}
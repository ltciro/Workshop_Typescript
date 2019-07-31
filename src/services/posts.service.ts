'use strict'
import { Repository } from "../data_access/repository.interface";
import { Post } from "../models/post.model";

export class PostsService {
	constructor(private postsRepository: Repository<Post>) {
	}

	getAll(){
		return this.postsRepository.getAll();
	}

	getById(id: number ){
		return this.postsRepository.getById(id);
	}
}
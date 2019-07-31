'use strict'
import { Repository } from "../data_access/repository.interface";
import { Post } from "../models/post.model";

export class PostsService {
	constructor(private postsRepository: Repository<Post>) {
	}

	getAll(): Post[]{
		return this.postsRepository.getAll();
	}

	getById(id: number): Post{
		return this.postsRepository.getById(id);
	}
}
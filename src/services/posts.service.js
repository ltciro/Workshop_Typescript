'use strict'
class PostsService {
    constructor(_postsRepository) {
        this.postsRepository = _postsRepository
    }

    getAll(){
        return this.postsRepository.getAll();
    }

    getById(id){
        return this.postsRepository.getById(id);
    }
}

module.exports = PostsService;

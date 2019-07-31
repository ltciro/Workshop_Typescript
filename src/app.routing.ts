'use strict'
import {postsController} from './api/posts.controller';
import {InMemoryPostsRepository} from './data_access/in-memory-posts.repository';
import {PostsService} from './services/posts.service';
import {Application} from 'express'

let postsService = new PostsService(new InMemoryPostsRepository());
export function setRouting(app: Application): void {
    app.use('/api/posts', postsController(postsService));
}



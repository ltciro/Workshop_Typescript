'use strict'
const postsController =  require('./api/posts.controller');
import {InMemoryPostsRepository} from './data_access/in-memory-posts.repository';
import {PostsService} from './services/posts.service';


let postsService = new PostsService(new InMemoryPostsRepository());
function setRouting(app) {
    app.use('/api/posts', postsController(postsService));
}

module.exports = setRouting;

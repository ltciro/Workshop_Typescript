'use strict'
const postsController =  require('./api/posts.controller');
const InMemoryPostsRepository = require ('./data_access/in-memory-posts.repository');
const PostsService = require('./services/posts.service');

console.log(InMemoryPostsRepository, PostsService, postsController)
let postsService = new PostsService(new InMemoryPostsRepository());
console.log(postsService)
function setRouting(app) {
    app.use('/api/posts', postsController(postsService));
}

module.exports = setRouting;
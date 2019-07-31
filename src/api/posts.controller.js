const express = require('express');

let router = express.Router();

function postsController(postsService) {

    router.get('/', (request, response) => {
        var posts = postsService.getAll();
        response.json(posts);
    });

    router.get('/:id', (request, response ) => {
        var id = request.params.id;
        var post = postsService.getById(id);

        if (post == null) {
            response.sendStatus(404);
        } else {
            response.json(post);
        }
    });

    router.put('/:id', (request, response ) => {
        // HTTP 501 code stands for `Not implemented`
        response.sendStatus(501);
    });

    return router;
}

module.exports = postsController;

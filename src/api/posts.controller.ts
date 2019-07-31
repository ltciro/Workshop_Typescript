import { Request, Response, Router} from 'express';
import { PostsService } from '../services/posts.service';


let router: Router = Router();

export function postsController(postsService: PostsService): Router {

    router.get('/', (request: Request, response: Response) => {
        var posts = postsService.getAll();
        response.json(posts);
    });

    router.get('/:id', (request: Request, response: Response) => {
        var id = request.params.id;
        var post = postsService.getById(id);

        if (post == null) {
            response.sendStatus(404);
        } else {
            response.json(post);
        }
    });

    router.put('/:id', (request: Request, response: Response) => {
        // HTTP 501 code stands for `Not implemented`
        response.sendStatus(501);
    });

    return router;
}

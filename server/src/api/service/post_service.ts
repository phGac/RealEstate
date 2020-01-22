import logger from '../../loaders/logger';
import messages from '../../config/messages';

const Post = require('../../db/models').Post;

export default {
    create: async (idBroker: number, idProperty: number, description: string) => {
        let newPost, success;
        await Post.create({
            idBroker,
            idProperty,
            description
        }).then((post: any) => {
            if(post) {
                newPost = post;
                success = true;
            } else {
                success = false;
            }
        }).catch((err: any) => {
            logger.error(`Error on create post: ${err}`);
            success = false;
        });

        return {
            post: newPost,
            success
        };
    }
};
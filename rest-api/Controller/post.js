import prisma from "../DB/db-config.js";

export const getAllPost = async (req, res) => {
    const allPost = await prisma.post.findMany();
    res.status(200).json({data:allPost})
}

export const deletePostById = async (req, res) => {
    const id = req.params.id;

    const post = await prisma.post.delete({
        where: {id: id}
    })
    res.status(200).json({data:post})
}

export const createPost = async (req, res) => {
    const {title, post, user_id } = req.body;

    const newPost = await prisma.post.create({
        data: { title, post, user_id },
      });

    res.status(200).json({ data: newPost, message:"Post Created!"});
}

export const userPost = async (req, res) => {
    const userId = Number(req.params.userId);
    const userPosts = await prisma.user.findMany({
        where: {
          id: userId,
        },
        select: {
          id: true,
          name: true,
          email: true,
          post: {
            select: {
              title: true,
            },
          },
        },
      });

    // select or include, can not use at the same level.  
    /*
    const userPosts = await prisma.user.findMany({  
        include: {
            post: {
                select: {
                    title: true
                }
            },
        },
        where: {
            id: userId,
        }
    });
    */
    res.status(200).json({data:userPosts})
}
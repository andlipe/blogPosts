import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'GET') {
        const fetchPost = await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json());
        const fetchUsers = await fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());
        let arrayUsers = [];

        fetchUsers.map(user => (
            arrayUsers.push({
                id: user.id,
                name: user.name
            })
        ))
        
        fetchPost.forEach((post) => {
            let user = arrayUsers.find(element => element.id === post.userId);
            Object.assign(post, 
            {user}
            )
        })

        const postList = fetchPost.reverse();


        res.statusCode = 200;
        res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

        return res.json(postList)
    } 
}

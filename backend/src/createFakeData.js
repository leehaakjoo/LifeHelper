import Post from './models/post';

export default function createFakeData(){
    const posts = [...Array(40).keys()].map( i => ({
        title: `포스트 #${i}`,
        body: `${i} 번째 포스트 입니다`,
        comments:{
            body : '댓글',
        },
    }));
    Post.insertMany(posts, (err, docs) => {
        console.log(docs);
    });
}
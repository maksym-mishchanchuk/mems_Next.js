
export type Meme = {
    id: number;
    title: string;
    imageUrl: string;
    likes: number | null;
    link: string;
};

const generateRandomLikes = () => Math.floor(Math.random() * 100);

export const defaultMemes: Meme[] = [
    {
        id: 1,
        title: "Doge",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5f/Original_Doge_meme.jpg",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/doge"
    },
    {
        id: 2,
        title: "Said Thank You Once?",
        imageUrl: "https://sadanduseless.b-cdn.net/wp-content/uploads/2025/03/jd-vance-memes1.jpg",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/photos/3019305-jd-vance-have-you-said-thank-you-once"
    },
    {
        id: 3,
        title: "Tariffs",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/003/039/835/ec3.jpeg",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/donald-trumps-reciprocal-tariffs-trump-recession"
    },
    {
        id: 4,
        title: "Sieg Heil",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/002/992/286/afc",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/elon-musk-sieg-heil-salute-at-donald-trump-inauguration"
    },
    {
        id: 5,
        title: "Sock Puppet",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/002/812/943/009.png",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/adrian-dittmann-elon-musk-sock-puppet-theory"
    },
    {
        id: 6,
        title: "Mexican Alien Bodies",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/002/661/496/f78.png",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/mexican-alien-bodies"
    },
    {
        id: 7,
        title: "Chinese Spy Balloon",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/002/525/436/326.jpg",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/chinese-spy-balloon"
    },
    {
        id: 8,
        title: "Dashcon",
        imageUrl: "https://i.kym-cdn.com/photos/images/masonry/000/956/780/db9.jpg",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/dashcon"
    },
    {
        id: 9,
        title: "Queen Elizabeth II's Death",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/002/435/940/154",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/events/queen-elizabeth-iis-death"
    },
    {
        id: 10,
        title: "Sad Joe Biden",
        imageUrl: "https://i.kym-cdn.com/photos/images/newsfeed/000/877/027/3aa.png",
        likes: generateRandomLikes(),
        link: "https://knowyourmeme.com/memes/sad-joe-biden"
    }
];

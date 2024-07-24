const API_KEY = '5ea18bec76d7463b9616cd62d2204109';

export const fetchPosts = async (page) => {
    const response = await fetch(
        `https://newsapi.org/v2/everything?q=javascript&apiKey=${API_KEY}&page=${page}&pageSize=9`
    );
    const data = await response.json();
    return data;
};


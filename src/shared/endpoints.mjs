// API document: https://api.devptt.site:5000
const backend = 'https://api.devptt.site:3457';

export const getPopularArticles = (options) => {
  const { limit = 10, desc = "true" } = options ?? {};
  return fetch(
    `${backend}/api/articles/popular?limit=${limit}&desc=${desc}`
  )
};

export const getPopularBoards = () => {
  return fetch(
    `${backend}/api/boards/popular`
  )
};

export const getArticlesByBoard = (boardId, options) => {
  const { limit = 10, desc = "true" } = options;
  return fetch(
    `${backend}/api/board/${boardId}/articles?limit=${limit}&desc=${desc}`
  )
}

export const getArticle = (articleId, boardId) => {
  return fetch(
    `${backend}/api/board/${boardId}/article/${articleId}`
  )
}

export const getComments = (articleId, boardId) => {
  return fetch(
    `${backend}/api/board/${boardId}/article/${articleId}/comments`
  )
}

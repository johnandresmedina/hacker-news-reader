import request from './api';

const JSON_QUERY = '.json?print=pretty';
const PAGE_LIMIT = 20;

const getPageSlice = (limit, page = 0) => ({ begin: page * limit, end: (page + 1) * limit });
const getPageValues = ({ begin, end, items }) => items.slice(begin, end);

const getTopStoryIds = async () => {
  const response = await request({
    url: `/topstories${JSON_QUERY}`,
    method: 'GET',
  });

  return response;
};

const getStory = async storyId => {
  const response = await request({
    url: `/item/${storyId}${JSON_QUERY}`,
    method: 'GET',
  });

  return response;
};

const getStoriesByPage = (storiesIds, page) => {
  const { begin, end } = getPageSlice(PAGE_LIMIT, page);
  const activeIds = getPageValues({ begin, end, items: storiesIds });
  const storyPromises = activeIds.map(id => getStory(id));

  return Promise.all(storyPromises);
};

const hackerNewsService = {
  getTopStoryIds,
  getStory,
  getStoriesByPage,
};

export default hackerNewsService;

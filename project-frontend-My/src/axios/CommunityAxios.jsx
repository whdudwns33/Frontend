import axios from "axios";
import Common from "../utils/common.jsx";

const CommunityAxiosApi = {
  // 게시글 조회
  getCommunityList: async (page, size) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/list/page?page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 게시글 조회 (카테고리 별)
  getCommunityListByCategory: async (categoryId, page, size) => {
    return await axios.get(
      Common.DOMAIN +
        `/api/community/list/page/category?categoryId=${categoryId}&page=${page}&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 카테고리 조회
  cateList: async () => {
    return await axios.get(Common.DOMAIN + `/api/category/list`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 페이지 수 조회
  getCommunityTotalPages: async (size) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/count?size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 카테고리에 따른 페이지 수 조회
  getCommunityTotalPagesByCategory: async (categoryId, size) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/count/${categoryId}?page=0&size=${size}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 게시글 등록
  communityPost: async (communityDTO) => {
    return await axios.post(
      Common.DOMAIN + "/api/community/new",
      communityDTO,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 게시글 상세 조회
  getCommunityDetail: async (communityId) => {
    return await axios.get(
      Common.DOMAIN + `/api/community/detail/${communityId}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 댓글 리스트 조회
  getCommentList: async (
    communityId,
    sortType = "등록순",
    page = 0,
    size = 10
  ) => {
    return await axios.get(
      Common.DOMAIN + `/api/comment/list/${communityId}/page`,
      {
        params: {
          sortType,
          page,
          size,
        },
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },

  // 댓글 쓰기
  commentWrite: async (
    email,
    nickName,
    password,
    communityId,
    content,
    parentCommentId
  ) => {
    const comment = {
      email: email,
      nickName: nickName,
      password: password,
      communityId: communityId,
      content: content,
      parentCommentId: parentCommentId,
    };
    return await axios.post(Common.DOMAIN + `/api/comment/new`, comment, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  // 대댓글 쓰기
  replyWrite: async (
    email,
    nickName,
    password,
    communityId,
    content,
    parentCommentId
  ) => {
    const reply = {
      email: email,
      nickName: nickName,
      password: password,
      communityId: communityId,
      content: content,
      parentCommentId: parentCommentId,
    };
    return await axios.post(Common.DOMAIN + `/api/comment/reply/new`, reply, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  //개념글 추천
  vote: async (communityId, isUpvote) => {
    return await axios.post(
      `${Common.DOMAIN}/api/community/vote/${communityId}/${isUpvote}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  // 실시간 랭킹 조회
  getRealtimeRanking: async () => {
    return await axios.get(Common.DOMAIN + "/api/community/ranking/realtime", {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
};
export default CommunityAxiosApi;

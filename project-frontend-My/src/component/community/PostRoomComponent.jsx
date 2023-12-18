import React, { useEffect, useState } from "react";
import {
  PostTitle,
  PostContent,
  PostDate,
  ReplyFormContainer,
  ReplyInput,
  ReplyButton,
  CommentContainer,
  CommentForm,
  CommentButton,
  PostContainer,
  PostHeader,
  PostAuthor,
  PostViews,
  PostVotes,
  PostUpvote,
  PostDownvote,
  CommentHeader,
  CommentContent,
  PostBody,
  Dropdown,
  WriterInfo,
  TitleContainer,
  InformationContainer,
  SmallInput,
  LargeInput,
  FormContainer,
  PostNickName,
  CommentBox,
} from "../../style/PostRoomStyle";
import CommunityAxiosApi from "../../axios/CommunityAxios";
import { useParams } from "react-router-dom";
import CommunityRankComponent from "./CommunityRankComponent";
import useWebSocket from "../../context/useWebsocket";
import { HeadText } from "../../style/CommunityPostStyle";
import Common from "../../utils/Common";

const Post = () => {
  const [comments, setComments] = useState([]);
  const [post, setPost] = useState({});
  const [currentCommentPage, setCurrentCommentPage] = useState(0);
  const [totalCommentPages, setTotalCommentPages] = useState(0);
  const [sortType, setSortType] = useState("");
  const [newComment, setNewComment] = useState("");
  const [newReply, setNewReply] = useState("");
  const [email, setEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [replyNickName, setReplyNickName] = useState({});
  const [replyPassword, setReplyPassword] = useState({});
  const [replyOpen, setReplyOpen] = useState({});
  const [totalComment, setTotalComment] = useState(0);

  const { id } = useParams();

  const { sendMessage } = useWebSocket(Common.SOCKET_URL, email);

  const getPartialIp = (ipAddress) => {
    if (!ipAddress) return "";
    const segments = ipAddress.split(".");
    return `${segments[0]}.${segments[1]}`;
  };
  const ipAddress = getPartialIp(post.ipAddress);

  useEffect(() => {
    const postDetail = async () => {
      try {
        const response = await CommunityAxiosApi.getCommunityDetail(id);
        setPost(response.data);
        const commentResponse = await CommunityAxiosApi.getCommentList(
          id,
          sortType,
          currentCommentPage
        );
        console.log(commentResponse.data.totalPages);
        setComments(commentResponse.data.content);
        setTotalCommentPages(commentResponse.data.totalPages);
        // 전체 댓글 수 조회
        const totalCommentsResponse = await CommunityAxiosApi.getTotalComments(
          id
        );
        setTotalComment(totalCommentsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };
    postDetail();
  }, [id, currentCommentPage, sortType]);
  const sendCommentMessage = (
    postId,
    commentId,
    commentContent,
    commenterEmail,
    authorEmail
  ) => {
    const commentMessage = {
      type: "COMMENT",
      postId: postId,
      commentId: commentId,
      commentContent: commentContent,
      commenterEmail: commenterEmail,
      authorEmail: authorEmail,
    };
    sendMessage(commentMessage);
  };
  const commentWrite = async () => {
    try {
      const response = await CommunityAxiosApi.commentWrite(
        email,
        nickName,
        password,
        id,
        newComment,
        null
      );
      setComments([...comments, response.data]);
      setNewComment("");
      sendCommentMessage(
        id,
        response.data.id,
        newComment,
        email ? email : post.ipAddress,
        post.email ? post.email : post.ipAddress
      );
      // 댓글 작성 후 댓글 목록 다시 불러오기
      const commentResponse = await CommunityAxiosApi.getCommentList(
        id,
        sortType,
        currentCommentPage
      );
      setComments(commentResponse.data.content);
    } catch (error) {
      console.error(error);
    }
  };
  // 대댓글 작성 함수
  const replyWrite = async (parentCommentId) => {
    try {
      const replyAuthorName = replyNickName[parentCommentId];
      const replyAuthorPassword = replyPassword[parentCommentId];

      const response = await CommunityAxiosApi.replyWrite(
        email,
        replyAuthorName,
        replyAuthorPassword,
        id,
        newReply,
        parentCommentId
      );
      sendCommentMessage(
        id,
        response.data.id,
        newReply,
        email ? email : post.ipAddress,
        post.email ? post.email : post.ipAddress
      );
      // 댓글 목록 다시 불러오기
      const commentResponse = await CommunityAxiosApi.getCommentList(
        id,
        sortType,
        currentCommentPage
      );
      setComments(commentResponse.data.content);
      setNewReply("");
      setTotalCommentPages(commentResponse.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };
  const vote = async (isUpvote) => {
    try {
      await CommunityAxiosApi.vote(id, isUpvote);
      const response = await CommunityAxiosApi.getCommunityDetail(id);
      setPost(response.data);
      if (isUpvote) {
        alert("추천이 완료되었습니다.");
      } else {
        alert("비추천이 완료되었습니다.");
      }
    } catch (error) {
      console.log(error.response);
      if (error.response && error.response.status === 400) {
        alert(error.response.data);
      } else {
        alert("오류가 발생하였습니다.");
      }
    }
  };
  // 부모 댓글에만 대댓글을 작성할수 있다.
  const toggleReplyForm = (commentId, parentCommentId) => {
    if (parentCommentId === null) {
      // 이미 열려있는 댓글 창이면 닫고, 닫혀있는 댓글 창이면 열기
      setReplyOpen((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
      if (replyOpen[commentId]) {
        // 해당 댓글 창이 이미 열려있는 경우, 상태 업데이트하여 해당 창의 내용 초기화
        setNewReply((prev) => ({ ...prev, [commentId]: "" }));
      }
    }
  };
  // 답글 작성자 정보를 변경하는 함수
  const handleReplyAuthorChange = (commentId, name, pass) => {
    // 댓글 ID에 해당하는 답글 작성자의 닉네임 업데이트
    setReplyNickName((prev) => ({ ...prev, [commentId]: name }));
    // 댓글 ID에 해당하는 답글 작성자의 비밀번호 업데이트
    setReplyPassword((prev) => ({ ...prev, [commentId]: pass }));
  };

  return (
    <PostContainer>
      <CommunityRankComponent categoryName={post.categoryName} />
      <PostHeader>
        <WriterInfo>
          <TitleContainer>
            <PostTitle>{post.title}</PostTitle>
            <PostViews>조회수: {post.viewCount}</PostViews>
          </TitleContainer>
          <PostAuthor>
            <PostNickName>
              {post.email ? post.email : `${post.nickName}(${ipAddress})`}
            </PostNickName>
            <PostDate> {Common.formatDate(post.regDate)}</PostDate>
          </PostAuthor>
        </WriterInfo>
      </PostHeader>
      <PostBody>
        <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostBody>
      <PostVotes>
        <PostUpvote onClick={() => vote(true)}>추천</PostUpvote>
        <PostTitle>{post.voteCount}</PostTitle>
        <PostDownvote onClick={() => vote(false)}>비추천</PostDownvote>
      </PostVotes>
      <CommentHeader>
        전체 댓글 수: {totalComment}
        <Dropdown onChange={(selected) => setSortType(selected.target.value)}>
          {["최신순", "등록순", "답글순"].map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Dropdown>
      </CommentHeader>

      <CommentContainer>
        {comments
          .filter((comment) => comment.parentCommentId === null)
          .map((comment) => (
            <CommentBox key={comment.commentId}>
              <CommentContent>
                <>
                  {comment.nickName}({getPartialIp(comment.ipAddress)})
                </>

                <>{Common.formatDate(comment.regDate)}</>
                <HeadText
                  onClick={() =>
                    toggleReplyForm(comment.commentId, comment.parentCommentId)
                  }
                >
                  {comment.content}
                </HeadText>
                {replyOpen[comment.commentId] && (
                  <ReplyFormContainer>
                    {!email && (
                      <>
                        <InformationContainer>
                          <FormContainer>
                            <SmallInput
                              type="text"
                              value={replyNickName[comment.commentId] || ""}
                              onChange={(e) =>
                                handleReplyAuthorChange(
                                  comment.commentId,
                                  e.target.value,
                                  replyPassword[comment.commentId]
                                )
                              }
                              placeholder="닉네임을 입력하세요"
                            />
                            <SmallInput
                              type="password"
                              value={replyPassword[comment.commentId] || ""}
                              onChange={(e) =>
                                handleReplyAuthorChange(
                                  comment.commentId,
                                  replyNickName[comment.commentId],
                                  e.target.value
                                )
                              }
                              placeholder="비밀번호를 입력하세요"
                            />
                          </FormContainer>
                        </InformationContainer>
                      </>
                    )}
                    <ReplyInput
                      type="text"
                      value={newReply[comment.commentId] || ""}
                      onChange={(e) =>
                        setNewReply({
                          ...newReply,
                          [comment.commentId]: e.target.value,
                        })
                      }
                    />
                    <ReplyButton
                      type="button"
                      onClick={() => replyWrite(comment.commentId)}
                      required={nickName && password}
                    >
                      댓글 작성
                    </ReplyButton>
                  </ReplyFormContainer>
                )}
              </CommentContent>
              {comment.childComments &&
                comment.childComments.map((childComment) => (
                  <CommentContent style={{ marginLeft: "20px" }}>
                    <>
                      {childComment.nickName} (
                      {getPartialIp(childComment.ipAddress)})
                    </>
                    <>{Common.formatDate(childComment.regDate)}</>
                    <HeadText
                      onClick={() =>
                        toggleReplyForm(
                          childComment.commentId,
                          childComment.parentCommentId
                        )
                      }
                    >
                      {childComment.content}
                    </HeadText>
                  </CommentContent>
                ))}
            </CommentBox>
          ))}
        {currentCommentPage > 0 && (
          <button onClick={() => setCurrentCommentPage(currentCommentPage - 1)}>
            이전
          </button>
        )}
        {currentCommentPage + 1 < totalCommentPages && (
          <button onClick={() => setCurrentCommentPage(currentCommentPage + 1)}>
            다음
          </button>
        )}
        <CommentForm>
          <FormContainer>
            {!email && (
              <>
                <InformationContainer>
                  <FormContainer>
                    <SmallInput
                      type="text"
                      value={nickName}
                      onChange={(e) => setNickName(e.target.value)}
                      placeholder="닉네임을 입력하세요"
                    />
                    <SmallInput
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="비밀번호를 입력하세요"
                    />
                  </FormContainer>
                </InformationContainer>
              </>
            )}
            <LargeInput
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <CommentButton
              type="button"
              onClick={commentWrite}
              required={nickName && password}
            >
              댓글 작성
            </CommentButton>
          </FormContainer>
        </CommentForm>
      </CommentContainer>
    </PostContainer>
  );
};

export default Post;

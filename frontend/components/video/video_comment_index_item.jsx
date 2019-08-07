
import React from 'react';

const CommentIndexItem = ({ comment }) => {
  // comment is pojo like below
  // comment: {
  //   id: 2,
  //   body: 'this is comment body',
  //   author_id: 14,
  //   video_id: 9,
  // }

  // debugger

  return (
    <div>
      {comment.body}
    </div>
  );
};

export default CommentIndexItem;
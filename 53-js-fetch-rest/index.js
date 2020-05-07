// set base URL to your json server
// Ex: http://localhost:3000
const baseURL = "http://localhost:3000";
/**
 * BEFORE YOU START:
 * 1. Run `npm install -g json-server`
 * 2. In this directory, run `json-server db.json`
 * 		to serve your back end API
 * 3. In your broser, go to http://localhost:3000/comments,
 * 		to view the available data
 */

/**
 * Exercise 1
 *
 * create an async function {getComments}, which takes {url} as an argument,
 * gets data from URL and returns the data as JS objects
 *
 * Note: test this function with an URL from your json-server API
 */
const getComments = async (url) => {
  if (!url) {
    url = `${baseURL}/comments`;
  }
  const configObject = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  return await fetch(url, configObject)
    .then((response) => response.json())
    .then((comments) => {
      console.log(comments);
    });
};
// getComments(`${baseURL}/comments`);

/**
 * Exercise 2
 *
 * create an async function {postComment}, which takes {newComment} as an argument,
 * and posts it to the comments URL.
 *
 * This function should return the data recieved
 * from the server if successful, or "Oops something went wrong!" if not.
 *
 * Don't forget to handle errors.
 */
const postComment = async (newComment) => {
  const configObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(newComment),
  };

  return await fetch(`${baseURL}/comments`, configObject)
    .then((response) => response.json())
    .then((the_response) => {
      console.log(the_response);
    })
    .catch((error) => {
      console.log(`Oops something went wrong!`);
    });
};
// const commentToAdd = {
//   body: "Comment 2",
//   id: 2,
// };
// postComment(commentToAdd);

/**
 * Exercise 3
 *
 * Create an async function {patchComment}, which takes {comment}
 * and {newCommentBody} as arguments.
 *
 * It should send a patch request to update the comment in the database with
 * the newCommentBody as the new body value.
 *
 * This function should return the updated object if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const patchComment = async (comment, newCommentBody) => {
  const commentObject = {
    body: newCommentBody,
    id: comment,
  };

  const configObject = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(commentObject),
  };

  return await fetch(`${baseURL}/comments/${comment}/`, configObject)
    .then((response) => response.json())
    .then((the_response) => {
      console.log(the_response);
    })
    .catch((error) => {
      console.log(`Oops we couldn't update that!`);
    });
};
// const commentToPatchId = "2";
// const commentToPatchBody = "Comment 2 Update Body Text";
// patchComment(commentToPatchId, commentToPatchBody);

/**
 * Exercise 4
 *
 * create an async function {putComment}, which takes {comment} as an argument,
 * and makes a put request with the new comment data.
 *
 * This function should return the updated comment if
 * successful, or "Oops we couldn't update that!" if not.
 *
 * Don't forget to handle errors.
 */
const putComment = async (comment) => {
  const configObject = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };

  return await fetch(`${baseURL}/comments/${comment.id}/`, configObject)
    .then((response) => response.json())
    .then((the_response) => {
      console.log(the_response);
    })
    .catch((error) => {
      console.log(`Oops we couldn't update that!`);
    });
};
// const commentToPut = {
//   body: "Update Comment 2 with PUT",
//   id: 2,
// };
// putComment(commentToPut);

/**
 * Exercise 5
 *
 * create an async function {deleteComment}, which takes {url} as an argument,
 * and delete selected comment from DB.
 * This function should return "Deleted!" if successful,
 * or "That could not be deleted!" in not.
 *
 * Don't forget to handle errors.
 */
const deleteComment = async (comment) => {
  const configObject = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(comment),
  };

  return await fetch(`${baseURL}/comments/${comment.id}/`, configObject)
    .then((response) => response.json())
    .then((the_response) => {
      return "Deleted!";
    });
};
// const commentToDelete = {
//   id: 2,
// };
// deleteComment(commentToDelete);

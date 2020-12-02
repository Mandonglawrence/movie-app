import { db, sql } from "../stores/pg";
import { commentType } from "../schema/types/index";
// import Comment from "../../client/src/components/SinglePage/Comment";

export async function createComment(data: commentType) {
  try {
    return await db.query(
      sql`INSERT INTO comments (films_id, comment, user_id) 
      VALUES(${data.films_id},${data.comment}, ${data.user_id})  RETURNING *`,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getAllComments() {
  try {
    return await db.query(sql`SELECT * FROM comments`);
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getCommentById(id: string) {
  try {
    return await db.query(
      sql`SELECT comments.id, comments.user_id, comments.comment, comments.films_id, comments.created_at, users.name FROM comments 
      JOIN users ON comments.user_id = users.id WHERE comments.films_id = ${id}`,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function deleteComment(id: string) {
  try {
    return await db.query(sql`DELETE * FROM comments WHERE id = ${id}`);
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function updateComment(data: commentType, id: string) {
  try {
    return await db.query(sql`UPDATE comments SET
    comment = ${data.comment}
    WHERE id = ${id}
    RETURNING *`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

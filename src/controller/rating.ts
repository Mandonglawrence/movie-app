import { db, sql } from "../stores/pg";
import { rateType } from "../schema/types/index";

export async function rateFilm(data: rateType) {
  try {
    return await db.query(
      sql`INSERT INTO ratings (films_id, rating, total_rated_users) 
      VALUES(${data.films_id},${data.rating},${data.total_rated_users})  RETURNING *`,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function getFilmRate(films_id: string) {
  try {
    return await db.query(
      sql`SELECT * FROM ratings WHERE films_id = ${films_id}`,
    );
  } catch (error) {
    console.error(error);
    return error;
  }
}
export async function updateRate(
  films_id: string,
  currentRating: number,
  currentTotalUsers: number,
  newRate: number,
) {
  try {
    const newRatings = Math.round(
      (currentRating * currentTotalUsers + newRate) / (currentTotalUsers + 1),
    );
    return await db.query(sql`UPDATE ratings SET
    rating = ${newRatings},
    total_rated_users = ${currentTotalUsers + 1}
    WHERE films_id = ${films_id} RETURNING *`);
  } catch (error) {
    console.error(error);
    return error;
  }
}

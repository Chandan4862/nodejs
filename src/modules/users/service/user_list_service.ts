import { define } from "../../../container_helper";

// module.exports = define("userListService", ({db}:any)=>{
//     const getUserListById = async(id: number) => {
//         return db.get(`SELECT * FROM users WHERE id = ?`, [id]);
//     }
//     return {
//         getUserListById
//     }
// })

module.exports = ({ database }: any) => {
  const getUserListById = async (id: number) => {
    const res = await database.all(`SELECT * FROM users`, []);
    console.log("res", res);
    return res;
  };

  const createUser = async ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      console.log("name", name);
      const result = await database.User.create({
        first_name: name,
        last_name: name,
        email,
      });
      console.log("result", result);
      return result;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  return {
    getUserListById,
    createUser,
  };
};

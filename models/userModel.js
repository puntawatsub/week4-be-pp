// {
//   "name": "Matti Seppänen",
//   "email": "matti@example.com",
//   "password": "M@45mtg$",
//   "phone_number": "+358401234567",
//   "gender": "Male",
//   "date_of_birth": "2000-01-15",
//   "membership_status": "Active",
//   "account_verified": true,
//   "country": "Finland"
// }

let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = ({
  name,
  email,
  password,
  phone_number,
  gender,
  date_of_birth,
  membership_status,
  account_verified,
  country,
}) => {
  if (
    !name ||
    !email ||
    !password ||
    !phone_number ||
    !gender ||
    !date_of_birth ||
    !membership_status ||
    account_verified === undefined ||
    !country
  ) {
    return false;
  }

  const tempUser = {
    id: nextId,
    name,
    email,
    password,
    phone_number,
    gender,
    date_of_birth,
    membership_status,
    account_verified,
    country,
  };

  userArray.push(tempUser);
  nextId++;
  return tempUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  return user || false;
};

const updateOneById = (id, user) => {
  const oldUser = findById(id);
  if (!oldUser) {
    return false;
  }

  Object.assign(oldUser, user);

  return oldUser;
};

const deleteOneById = (id) => {
  const initLength = userArray.length;
  userArray = userArray.filter((user) => user.id !== Number(id));
  return initLength > userArray.length;
};

// {
//   "name": "Matti Seppänen",
//   "email": "matti@example.com",
//   "password": "M@45mtg$",
//   "phone_number": "+358401234567",
//   "gender": "Male",
//   "date_of_birth": "2000-01-15",
//   "membership_status": "Active",
//   "account_verified": true,
//   "country": "Finland"
// }

if (require.main === module) {
  let result = addOne(
    "Matti Seppänen",
    "matti@example.com",
    "M@45mtg$",
    "+358401234567",
    "Male",
    "2000-01-15",
    "Active",
    true,
    "Finland"
  );
  console.log(result);
  result = addOne(
    "Sailesh Karki",
    "sailesh@example.com",
    "SAILESH!!!",
    "+358000000000",
    "Female",
    "1800-01-15",
    "Expired",
    false,
    "North Korea"
  );
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
    "updateById called:",
    updateOneById(2, {
      gender: "Male",
      country: "Japan",
    })
  );
  console.log("findById called after item updated:", findById(2));
  console.log("deleteById called:", deleteOneById(2));
  console.log("findById called after item deleted:", findById(2));
}

module.exports = {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

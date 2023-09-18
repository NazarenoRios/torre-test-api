import User from "../models/User";
import { SearchHistoryEntry } from "types/user.types";

const create_user = async (user: any) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (e) {
    return e;
  }
};

const login_user = async (email: string) => {
  try {
    const user = await User.findOne({ email: email });
    return user;
  } catch (e) {
    return e;
  }
};

const addSearchHistory = async (userId: string, query: string) => {
  const user = await User.findById(userId);

  if (user) {
    const searchHistoryEntry: SearchHistoryEntry = {
      query,
      timestamp: new Date(),
    };

    user.searchHistory.unshift(searchHistoryEntry);

    if (user.searchHistory.length > 10) {
      user.searchHistory.pop();
    }

    await user.save();
  }
};

export { create_user, login_user, addSearchHistory };

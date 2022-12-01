import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accounts: [
    {
      id: 1,
      customerName: "Israa Othman",
      accountNumber: "123456",
      accountType: "Savings",
    },

    {
      id: 2,
      customerName: "Nourman Alzawahreh",
      accountNumber: "236200",
      accountType: "Student accounts",
    },
    {
      id: 3,
      customerName: "Waad awajneh",
      accountNumber: "753369",
      accountType: "Student accounts",
    },
    {
      id: 4,
      customerName: "Rama jaradat",
      accountNumber: "765434",
      accountType: "Student accounts",
    },
    {
      id: 5,
      customerName: "Dareen Alhiasat",
      accountNumber: "987654",
      accountType: "Student accounts",
    },
  ],
  numberOfAccounts: 5,
};

export const AccountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addAccount: (state, { payload }) => {
      state.accounts.push(payload);
      state.numberOfAccounts += 1;
      return state;
    },
    removeAccount: (state, { payload }) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== payload
      );
      state.numberOfAccounts -= 1;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addAccount, removeAccount } = AccountSlice.actions;

export default AccountSlice.reducer;

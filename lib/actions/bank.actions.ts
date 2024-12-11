"use server";

import { parseStringify } from "../utils";

// Mock data for demonstration purposes
const mockAccountsData = [
  {
    id: "acc_1",
    availableBalance: 13000,
    currentBalance: 15000,
    institutionId: "inst_123",
    name: "Main Checking",
    officialName: "Main Checking Account",
    mask: "1234",
    type: "depository",
    subtype: "checking",
    appwriteItemId: "bank_1",
    shareableId: "share_1",
  },
  {
    id: "acc_2",
    availableBalance: 7000,
    currentBalance: 15000,
    institutionId: "inst_456",
    name: "Savings Account",
    officialName: "Savings Account",
    mask: "5678",
    type: "depository",
    subtype: "savings",
    appwriteItemId: "bank_2",
    shareableId: "share_2",
  },
];

// Mock transactions data
const mockTransactionsData = [
  {
    id: "tx_1",
    name: "Grocery Shopping",
    amount: -50,
    date: "2024-06-01",
    paymentChannel: "in-store",
    category: "Groceries",
    type: "debit",
  },
  {
    id: "tx_2",
    name: "Salary",
    amount: 3000,
    date: "2024-06-03",
    paymentChannel: "direct deposit",
    category: "Income",
    type: "credit",
  },
];

// Get multiple bank accounts
export const getAccounts = async ({ userId }: { userId: string }) => {
  try {
    // Simulate getting banks from a database
    const accounts = mockAccountsData;

    const totalBanks = accounts.length;
    const totalCurrentBalance = accounts.reduce((total, account) => {
      return total + account.currentBalance;
    }, 0);

    return parseStringify({ data: accounts, totalBanks, totalCurrentBalance });
  } catch (error) {
    console.error("An error occurred while getting the accounts:", error);
  }
};

// Get one bank account
export const getAccount = async ({ appwriteItemId }: { appwriteItemId: string }) => {
  try {
    // Simulate getting a single bank account
    const account = mockAccountsData.find((acc) => acc.appwriteItemId === appwriteItemId);

    if (!account) {
      throw new Error("Account not found");
    }

    // Simulate getting transfer transactions
    const transferTransactions = mockTransactionsData;

    // Sort transactions by date such that the most recent transaction is first
    const allTransactions = transferTransactions.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return parseStringify({
      data: account,
      transactions: allTransactions,
    });
  } catch (error) {
    console.error("An error occurred while getting the account:", error);
  }
};

// Get bank info
export const getInstitution = async ({ institutionId }: { institutionId: string }) => {
  try {
    // Simulate getting institution info
    const institution = {
      institution_id: institutionId,
      name: "Mock Bank",
    };

    return parseStringify(institution);
  } catch (error) {
    console.error("An error occurred while getting the institution:", error);
  }
};

// Get transactions
export const getTransactions = async ({ accessToken }: { accessToken: string }) => {
  try {
    // Simulate getting transactions
    const transactions = mockTransactionsData;

    return parseStringify(transactions);
  } catch (error) {
    console.error("An error occurred while getting the transactions:", error);
  }
};

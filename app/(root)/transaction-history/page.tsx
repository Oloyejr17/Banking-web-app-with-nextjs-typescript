import HeaderBox from '@/components/HeaderBox'
import { Pagination } from '@/components/Pagination';
import TransactionsTable from '@/components/TransactionsTable';
import { formatAmount } from '@/lib/utils';
import React from 'react'

const TransactionHistory = ({ searchParams: { id, page }}: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  // Mock data for account and transactions
  const mockAccount = {
    data: {
      name: "OLoye jr Savings Account",
      officialName: "WestBank Ltd",
      mask: "1234",
      currentBalance: 43000,
    },
    transactions: [
      { id: 1, date: '2024-12-01', description: 'Deposit', amount: 1000 },
      { id: 2, date: '2024-12-02', description: 'Withdrawal', amount: -200 },
      { id: 3, date: '2024-12-03', description: 'Deposit', amount: 1500 },
      { id: 4, date: '2024-12-04', description: 'Transfer', amount: -500 },
      { id: 5, date: '2024-12-05', description: 'Deposit', amount: 2000 },
      { id: 6, date: '2024-12-06', description: 'Withdrawal', amount: -300 },
      { id: 7, date: '2024-12-07', description: 'Deposit', amount: 500 },
      { id: 8, date: '2024-12-08', description: 'Transfer', amount: -700 },
      { id: 9, date: '2024-12-09', description: 'Deposit', amount: 400 },
      { id: 10, date: '2024-12-10', description: 'Withdrawal', amount: -100 },
      { id: 11, date: '2024-12-11', description: 'Deposit', amount: 1500 },
    ]
  };

  const account = mockAccount;
  const rowsPerPage = 10;
  const totalPages = Math.ceil(account.transactions.length / rowsPerPage);

  const indexOfLastTransaction = currentPage * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = account.transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
  );

  return (
    <div className="transactions">
      <div className="transactions-header">
        <HeaderBox 
                  title="Transaction History"
                  subtext="See your bank details and transactions." type={'title'}        />
      </div>

      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{account.data.name}</h2>
            <p className="text-14 text-blue-25">
              {account.data.officialName}
            </p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● {account.data.mask}
            </p>
          </div>
          
          <div className='transactions-account-balance'>
            <p className="text-14">Current balance</p>
            <p className="text-24 text-center font-bold">{formatAmount(account.data.currentBalance)}</p>
          </div>
        </div>

        <section className="flex w-full flex-col gap-6">
          <TransactionsTable 
            transactions={currentTransactions}
          />
          {totalPages > 1 && (
            <div className="my-4 w-full">
              <Pagination totalPages={totalPages} page={currentPage} />
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default TransactionHistory;

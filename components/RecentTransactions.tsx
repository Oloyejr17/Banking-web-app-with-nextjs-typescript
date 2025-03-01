import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BankTabItem } from './BankTabItem';
import BankInfo from './BankInfo';
import TransactionsTable from './TransactionsTable';
import { Pagination } from './Pagination';

const RecentTransactions = ({
  accounts,
  transactions = [],
  page = 1,
}: RecentTransactionsProps) => {
  const rowsPerPage = 10;
  const totalPages = Math.ceil(transactions.length / rowsPerPage);

  const indexOfLastTransaction = page * rowsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - rowsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction, indexOfLastTransaction
  );

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent transactions</h2>
        {/* Static link for "View all" */}
        <Link
          href="/transaction-history"
          className="view-all-btn"
        >
          View all
        </Link>
      </header>

      <Tabs defaultValue={accounts[0]?.appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {/* Render tabs for each account */}
          {accounts.map((account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem
                account={account}
                appwriteItemId={account.appwriteItemId}
              />
            </TabsTrigger>
          ))}
        </TabsList>

        {/* Render content for each account */}
        {accounts.map((account) => (
          <TabsContent
            value={account.appwriteItemId}
            key={account.id}
            className="space-y-4"
          >
            <BankInfo
              account={account}
              appwriteItemId={account.appwriteItemId}
              type="full"
            />

            <TransactionsTable transactions={currentTransactions} />

            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination totalPages={totalPages} page={page} />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;

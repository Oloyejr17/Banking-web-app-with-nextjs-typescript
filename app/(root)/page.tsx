import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RecentTransactions from '@/components/RecentTransactions'; // Import RecentTransactions

// Static data for logged-in user, accounts, and transactions
const loggedIn = { firstName: 'Oloye', lastName: 'JR', email: 'oloye.jr@example.com' };

const accountsData = [
  { id: 1, name: 'Main Account', currentBalance: 15000, appwriteItemId: '1' },
  { id: 2, name: 'Savings Account', currentBalance: 15000, appwriteItemId: '2' },
];

const transactions = [
  { id: 1, description: 'Grocery Shopping', amount: -50, date: '2024-06-01' },
  { id: 2, description: 'Salary', amount: 3000, date: '2024-06-03' },
  { id: 3, description: 'Electric Bill', amount: -120, date: '2024-06-05' },
];

const Home = () => {
  // Log the static data to ensure it's correct
  console.log('LoggedIn:', loggedIn);
  console.log('AccountsData:', accountsData);
  console.log('Transactions:', transactions);

  return (
    <section className="home flex">
      
      {/* Main Content Area */}
      <div className="home-content flex-1 p-6">
        <header className="home-header mb-8">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accountsData.length}
            totalCurrentBalance={accountsData.reduce(
              (total, account) => total + account.currentBalance,
              0
            )}
          />

          {/* RecentTransactions added here */}
          <RecentTransactions
            accounts={accountsData}
            transactions={transactions}
            page={1}
          />
        </header>
      </div>

      {/* RightSidebar rendering */}
      <div className="right-sidebar-wrapper flex-none p-6">
        <RightSidebar
          user={loggedIn} // Static user data
          transactions={transactions} // Static transactions data
          banks={accountsData.slice(0, 2)} // Static bank data
        />
      </div>
    </section>
  );
};

export default Home;

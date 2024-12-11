"use client";

import { useEffect, useState } from 'react';
import BankCard from '@/components/BankCard';
import HeaderBox from '@/components/HeaderBox';
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';

const MyBanks = () => {
  const [accounts, setAccounts] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const loggedInUser = await getLoggedInUser();
      setLoggedIn(loggedInUser);

      const accountData = await getAccounts({ userId: loggedInUser.$id });
      setAccounts(accountData);
    };

    fetchData();
  }, []);

  if (!loggedIn || !accounts) {
    return <div>Loading...</div>; // Optionally show a loading state
  }

  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox 
          title="My Bank Accounts"
          subtext="Effortlessly manage your banking activities." 
          type={'title'} 
        />

        <div className="space-y-4">
          <h2 className="header-2">
            Your cards
          </h2>
          <div className="flex flex-wrap gap-6">
            {accounts.data.map((a: Account) => (
              <BankCard 
                key={a.id}  // Use the unique 'id' for the key prop
                account={a}
                userName={loggedIn.firstName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyBanks;

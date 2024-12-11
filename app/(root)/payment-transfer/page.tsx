import HeaderBox from '@/components/HeaderBox';
import PaymentTransferForm from '@/components/PaymentTransferForm';
import React from 'react';

const Transfer = () => {
  // Placeholder accounts data for testing
  const accountsData = [
    { id: '1', name: 'Bank A - 1234' },
    { id: '2', name: 'Bank B - 5678' },
  ];

  return (
    <section className="payment-transfer">
      <HeaderBox 
              title="Payment Transfer"
              subtext="Please provide any specific details or notes related to the payment transfer" type={'title'}      />

      <section className="size-full pt-5">
        <PaymentTransferForm accounts={accountsData} />
      </section>
    </section>
  );
};

export default Transfer;

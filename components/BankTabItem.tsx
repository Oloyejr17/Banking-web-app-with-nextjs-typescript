"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { cn, formUrlQuery } from "@/lib/utils";

export const BankTabItem = ({ account }: BankTabItemProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Assuming 'account.id' is unique, or some other identifier for each account
  const isActive = searchParams.get("id") === account.id;

  const handleBankChange = () => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "id",
      value: account.id,  // Use account.id or another unique identifier
    });
    router.push(newUrl, { scroll: false });
  };

  return (
    <div
      onClick={handleBankChange}
      className={cn(`banktab-item`, {
        "border-blue-600": isActive,
      })}
    >
      <p
        className={cn(`text-16 line-clamp-1 flex-1 font-medium text-gray-500`, {
          "text-blue-600": isActive,
        })}
      >
        {account.name}  {/* Static data for account name */}
      </p>
    </div>
  );
};

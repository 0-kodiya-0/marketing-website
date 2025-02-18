import React from 'react';
import { OAuthAccount, AccountType, LocalAccount } from '../types/data.types';

interface UserAvatarProps {
  account: OAuthAccount | LocalAccount;
  size?: 'sm' | 'md' | 'lg';
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ 
  account,
  size = 'md'
}) => {
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  const getProviderColor = (account: OAuthAccount | LocalAccount) => {
    if (account.accountType === AccountType.Local) {
      return 'bg-gray-700';
    }
    
    if ('provider' in account) {
      switch (account.provider) {
        case 'google':
          return 'bg-red-500';
        case 'microsoft':
          return 'bg-blue-600';
        case 'facebook':
          return 'bg-blue-800';
        default:
          return 'bg-purple-600';
      }
    }
    
    return 'bg-gray-700';
  };

  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-8 h-8 text-xs';
      case 'md':
        return 'w-10 h-10 text-sm';
      case 'lg':
        return 'w-12 h-12 text-base';
      default:
        return 'w-10 h-10 text-sm';
    }
  };

  return (
    <div 
      className={`${getProviderColor(account)} text-white rounded-full flex items-center justify-center flex-shrink-0 ${getSizeClass()}`}
    >
      {account?.userDetails?.imageUrl ? (
        <img 
          src={account.userDetails.imageUrl} 
          alt={account.userDetails.name} 
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{getInitial(account?.userDetails?.name || 'U')}</span>
      )}
    </div>
  );
};
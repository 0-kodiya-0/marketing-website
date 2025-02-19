import React from 'react';
import { OAuthAccount, AccountType, LocalAccount, OAuthProviders } from '../types/data.types';
import { KeyRound, Mail, UserCircle } from 'lucide-react';

interface UserAvatarProps {
  account: OAuthAccount | LocalAccount | null;
  size?: 'sm' | 'md' | 'lg';
  showProviderIcon?: boolean;
}

const getInitial = (name: string = '') => {
  return name.trim() ? name.charAt(0).toUpperCase() : '?';
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

const getSizeClass = (size?: 'sm' | 'md' | 'lg') => {
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

const getIconSize = (size?: 'sm' | 'md' | 'lg') => {
  switch (size) {
    case 'sm':
      return 14;
    case 'md':
      return 16;
    case 'lg':
      return 18;
    default:
      return 16;
  }
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  account,
  size = 'md',
  showProviderIcon = true
}) => {
  const getProviderIcon = () => {
    if (!showProviderIcon || !account) return null;

    if (account.accountType === AccountType.Local) {
      return <KeyRound className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 text-gray-700 shadow-sm border border-gray-200" size={getIconSize(size)} />;
    }

    if ('provider' in account) {
      switch (account.provider) {
        case OAuthProviders.Google:
          return (
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-200">
              <svg viewBox="0 0 24 24" width={getIconSize(size)} height={getIconSize(size)}>
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
            </div>
          );
        case OAuthProviders.Microsoft:
          return (
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-200">
              <svg viewBox="0 0 23 23" width={getIconSize(size)} height={getIconSize(size)}>
                <path fill="#f1511b" d="M11.4 0H0v11.4h11.4V0z" />
                <path fill="#80cc28" d="M23 0H11.6v11.4H23V0z" />
                <path fill="#00adef" d="M11.4 11.6H0V23h11.4V11.6z" />
                <path fill="#fbbc09" d="M23 11.6H11.6V23H23V11.6z" />
              </svg>
            </div>
          );
        case OAuthProviders.Facebook:
          return (
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-200">
              <svg viewBox="0 0 24 24" width={getIconSize(size)} height={getIconSize(size)}>
                <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
          );
        default:
          return <Mail className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 text-purple-600 shadow-sm border border-gray-200" size={getIconSize(size)} />;
      }
    }

    return null;
  };

  if (!account) {
    // Fallback for null account
    return (
      <div className={`bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 ${getSizeClass(size)}`}>
        <UserCircle className="text-gray-500" />
      </div>
    );
  }

  return (
    <div className={`${getProviderColor(account)} text-white rounded-full flex items-center justify-center flex-shrink-0 ${getSizeClass(size)} relative`}>
      {account?.userDetails?.imageUrl ? (
        <img
          src={account.userDetails.imageUrl}
          alt={account.userDetails.name}
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <span>{getInitial(account?.userDetails?.name || 'U')}</span>
      )}
      {getProviderIcon()}
    </div>
  );
};
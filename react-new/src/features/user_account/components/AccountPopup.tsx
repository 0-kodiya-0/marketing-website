import React, { useRef, useState, useEffect } from 'react';
import { PlusCircle, ChevronUp, ChevronDown, LogOut } from 'lucide-react';
import useAccountStore from '../store/';
import { UserAvatar } from './UserAvatar';

interface AccountPopupProps {
  isOpen: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export const AccountPopup: React.FC<AccountPopupProps> = ({ isOpen, onClose, anchorEl }) => {
  const [showAllAccounts, setShowAllAccounts] = useState(false);
  const [loading, setLoading] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  
  const {
    localAccount,
    oauthAccounts,
    activeAccountId,
    setActiveAccount,
  } = useAccountStore();

  // Get all accounts
  const accounts = [
    ...(localAccount ? [localAccount] : []),
    ...oauthAccounts
  ];

  // Find active account
  const activeAccount = accounts.find(acc => acc.id === activeAccountId) || accounts[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node) && 
          event.target !== anchorEl) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, anchorEl]);

  if (!isOpen || !anchorEl) return null;

  // Calculate position based on anchor element
  const anchorRect = anchorEl.getBoundingClientRect();
  const popupStyle = {
    top: `${anchorRect.bottom + 10}px`,
    right: `${window.innerWidth - anchorRect.right}px`,
  };

  return (
    <div 
      ref={popupRef}
      className="fixed shadow-lg bg-white border border-gray-200 w-80 z-50 rounded"
      style={popupStyle}
    >
      {/* Active account header */}
      <div className="p-4 border-b">
        <div className="flex items-start">
          <UserAvatar account={activeAccount} size="md" />
          <div className="flex-1 ml-3">
            <h2 className="text-lg font-medium">Hi, {activeAccount?.userDetails?.name?.split(' ')[0] || 'User'}!</h2>
            <p className="text-sm text-gray-600 truncate">{activeAccount?.userDetails?.email}</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
          <span>
            {activeAccount?.security?.sessionTimeout ? 
              `Session: ${activeAccount.security.sessionTimeout}m` : 
              'No session timeout'}
          </span>
          <span className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-1 ${activeAccount?.status === 'active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
            {activeAccount?.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>
        <button 
          className="mt-3 w-full py-2 px-4 border border-gray-300 rounded text-sm hover:bg-gray-50 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          disabled={loading}
          onClick={() => {
            setLoading(true);
            // Simulate API call
            setTimeout(() => setLoading(false), 800);
          }}
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </span>
          ) : (
            'Manage your Account'
          )}
        </button>
      </div>

      {/* Account list section */}
      <div className="p-3">
        <button 
          onClick={() => setShowAllAccounts(!showAllAccounts)}
          className="flex items-center justify-between w-full py-1 text-sm text-gray-700 hover:bg-gray-50 px-2 rounded"
        >
          <span>
            {showAllAccounts ? 'Hide' : 'Show'} more accounts
          </span>
          {showAllAccounts ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {showAllAccounts && (
          <div className="mt-2 space-y-1">
            {accounts.filter(acc => acc.id !== activeAccountId).map((account) => (
              <button
                key={account.id}
                className="flex items-center w-full p-2 hover:bg-gray-50 rounded text-left"
                onClick={() => setActiveAccount(account.id)}
              >
                <UserAvatar account={account} size="sm" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{account.userDetails.name}</p>
                  <p className="text-xs text-gray-500 truncate">{account.userDetails.email}</p>
                </div>
              </button>
            ))}
          </div>
        )}

        <button 
          className="flex items-center w-full mt-2 p-2 hover:bg-gray-50 rounded text-gray-700 text-sm"
        >
          <PlusCircle size={16} className="mr-3" />
          Add another account
        </button>
        
        <div className="mt-3 pt-3 border-t">
          <button 
            className="flex items-center w-full p-2 hover:bg-gray-50 rounded text-gray-700 text-sm"
          >
            <LogOut size={16} className="mr-3" />
            Sign out of all accounts
          </button>
        </div>
      </div>
    </div>
  );
};
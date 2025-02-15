import { create } from "zustand"
import { persist } from "zustand/middleware"
import {
    LocalAccount,
    AccountType,
    AccountStatus,
    OAuthAccount,
} from "../types/data"
import { AccountState } from "../types/store"

const useAccountStore = create<AccountState>()(
    persist(
        (set, get) => ({
            localAccount: null,
            oauthAccounts: [],
            activeAccountId: null,

            createLocalAccount: ({ device, password, userDetails }) => {
                const { localAccount } = get()

                if (localAccount) return null

                const newAccount: LocalAccount = {
                    id: crypto.randomUUID(),
                    created: new Date().toISOString(),
                    updated: new Date().toISOString(),
                    device,
                    accountType: AccountType.Local,
                    status: AccountStatus.Active,
                    userDetails,
                    security: {
                        password
                    }
                }

                set({ localAccount: newAccount, activeAccountId: newAccount.id })
                return newAccount
            },

            updateLocalAccount: (updates) => {
                const { password, ...restUpdates } = updates

                set((state) => ({
                    localAccount: state.localAccount ? {
                        ...state.localAccount,
                        ...restUpdates,
                        security: {
                            ...state.localAccount.security,
                            ...(password ? { password } : {})
                        },
                        updated: new Date().toISOString()
                    } : null
                }))
            },

            deleteLocalAccount: () => {
                const { activeAccountId, localAccount } = get()

                if (activeAccountId === localAccount?.id) {
                    set({ activeAccountId: null })
                }

                set({ localAccount: null })
            },

            addOAuthAccount: ({ device, provider, userDetails, tokenDetails }) => {
                const { oauthAccounts, canAddMoreOAuthAccounts } = get()

                if (!canAddMoreOAuthAccounts()) return false

                const isDuplicate = oauthAccounts.some(
                    acc => acc.provider === provider && acc.userDetails.email === userDetails.email
                )

                if (isDuplicate) return false

                const newAccount: OAuthAccount = {
                    id: crypto.randomUUID(),
                    created: new Date().toISOString(),
                    updated: new Date().toISOString(),
                    device,
                    accountType: AccountType.OAuth,
                    status: AccountStatus.Active,
                    security: {
                        twoFactorEnabled: false,
                        sessionTimeout: 30,
                        autoLock: true
                    },
                    provider,
                    userDetails,
                    tokenDetails
                }

                set((state) => ({
                    oauthAccounts: [...state.oauthAccounts, newAccount]
                }))

                return true
            },

            updateOAuthAccount: (accountId, updates) => {
                set((state) => ({
                    oauthAccounts: state.oauthAccounts.map(acc =>
                        acc.id === accountId
                            ? { ...acc, ...updates, updated: new Date().toISOString() }
                            : acc
                    )
                }))
            },

            removeOAuthAccount: (accountId) => {
                const { activeAccountId } = get()

                if (activeAccountId === accountId) {
                    set({ activeAccountId: null })
                }

                set((state) => ({
                    oauthAccounts: state.oauthAccounts.filter(acc => acc.id !== accountId)
                }))
            },

            setActiveAccount: (accountId) => {
                set({ activeAccountId: accountId })
            },

            getAccountById: (accountId) => {
                const { localAccount, oauthAccounts } = get()

                if (localAccount?.id === accountId) return localAccount
                return oauthAccounts.find(acc => acc.id === accountId) || null
            },

            canAddMoreOAuthAccounts: () => {
                const { oauthAccounts } = get()
                return oauthAccounts.length < 20
            },

            getTotalAccounts: () => {
                const { localAccount, oauthAccounts } = get()
                return (localAccount ? 1 : 0) + oauthAccounts.length
            }
        }),
        {
            name: 'account-storage',
            partialize: (state) => ({
                localAccount: state.localAccount,
                oauthAccounts: state.oauthAccounts,
                activeAccountId: state.activeAccountId
            })
        }
    )
)

export default useAccountStore
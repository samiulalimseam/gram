import {
useQuery, useQueryClient, useMutation,useInfiniteQuery
} from '@tanstack/react-query';
import { createUserAccount } from '../appwrite/api';
import { INewUser } from '@/types';

export const useCreateUserAccount = async  ()=> {
    return useMutation({
        mutationFn: (user: INewUser)=> createUserAccount(user)
    })
}
export const useSignInAccount = async  ()=> {
    return useMutation({
        mutationFn: (user: {email: string ; password: string ;})=> singInAccount(user)
    })
}
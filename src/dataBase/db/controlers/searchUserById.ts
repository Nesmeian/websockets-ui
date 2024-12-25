import { User } from '../../../interfacess'
import {data} from '..//..//db/index'
export default function searchUserById(userId:string):User|undefined{
    return data.users.find(({id})=>id===userId)
}
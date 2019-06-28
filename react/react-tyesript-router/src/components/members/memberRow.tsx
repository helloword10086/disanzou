import * as React from 'react';
import { MemberEntity } from '../../model';
interface Props{
  member:MemberEntity
}
export const MemberRow: React.StatelessComponent <Props> = ({member}) =>{
  return (
    <tr>
      <td><img src={member.avatar_url} alt=""/></td>
      <td><img src={member.id} alt=""/></td>
      <td><img src={member.login} alt=""/></td>
    </tr>
  )
}
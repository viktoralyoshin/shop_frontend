"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useUsers } from "@/hooks/use-users";

const ListUsers = () => {
  const data = useUsers();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Номер</TableHead>
          <TableHead>Имя</TableHead>
          <TableHead>Фамилия</TableHead>
          <TableHead className="text-right">Дата создания</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.phoneNumber}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell className="text-right">
              {new Intl.DateTimeFormat("ru").format(new Date(user.createdAt))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ListUsers;

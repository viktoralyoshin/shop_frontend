import { IProduct } from "@/types/product.types";
import { Badge } from "../ui/badge";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "../ui/table";

const OrderContent = ({
  products,
  price,
}: {
  products: IProduct[];
  price: number;
}) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Номер товара</TableHead>
          <TableHead>Наименование</TableHead>
          <TableHead>Категории</TableHead>
          <TableHead className="text-right">Стоимость</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>{product.id}</TableCell>
            <TableCell>{product.name}</TableCell>
            <TableCell>
              <Badge>{product.category.name}</Badge>
            </TableCell>
            <TableCell className="text-right">
              {new Intl.NumberFormat("ru", {
                style: "currency",
                currency: "RUB",
              }).format(product.price)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Итого</TableCell>
          <TableCell className="text-right">
            {new Intl.NumberFormat("ru", {
              style: "currency",
              currency: "RUB",
            }).format(price)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default OrderContent;
